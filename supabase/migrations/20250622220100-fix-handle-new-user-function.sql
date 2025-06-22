
-- Fix the handle_new_user function to properly handle the foreign key relationships
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  new_user_id uuid;
  user_role text := 'client';
BEGIN
  -- Check if this is the admin email
  IF new.email = 'admin@moneoang.co.za' THEN
    user_role := 'admin';
  END IF;

  -- Insert into users table first
  INSERT INTO public.users (auth_user_id, email, first_name, last_name, user_type)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name',
    user_role
  )
  RETURNING id INTO new_user_id;
  
  -- Only proceed if we successfully got a user_id
  IF new_user_id IS NOT NULL THEN
    -- Insert into profiles table for backward compatibility
    INSERT INTO public.profiles (id, user_id, first_name, last_name, phone)
    VALUES (
      new.id,
      new_user_id,
      new.raw_user_meta_data ->> 'first_name',
      new.raw_user_meta_data ->> 'last_name',
      new.raw_user_meta_data ->> 'phone'
    )
    ON CONFLICT (id) DO UPDATE SET
      user_id = new_user_id,
      first_name = new.raw_user_meta_data ->> 'first_name',
      last_name = new.raw_user_meta_data ->> 'last_name',
      phone = new.raw_user_meta_data ->> 'phone';
    
    -- Assign user role using the users table id
    INSERT INTO public.user_roles (user_id, role)
    VALUES (new_user_id, user_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  
  RETURN new;
EXCEPTION
  WHEN OTHERS THEN
    -- Log the error and still return new to not block user creation
    RAISE WARNING 'Error in handle_new_user: %', SQLERRM;
    RETURN new;
END;
$$;
