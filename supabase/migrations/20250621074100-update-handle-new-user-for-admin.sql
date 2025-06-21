
-- Update the handle_new_user function to assign admin role for admin email
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
DECLARE
  new_user_id UUID;
  user_role_to_assign TEXT;
BEGIN
  -- Determine role based on email and metadata
  IF new.email = 'admin@moneoang.co.za' OR (new.raw_user_meta_data ->> 'user_type') = 'admin' THEN
    user_role_to_assign := 'admin';
  ELSE
    user_role_to_assign := 'client';
  END IF;

  -- Insert into users table
  INSERT INTO public.users (auth_user_id, email, first_name, last_name, user_type)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name',
    CASE WHEN user_role_to_assign = 'admin' THEN 'admin' ELSE 'client' END
  )
  RETURNING id INTO new_user_id;
  
  -- Insert appropriate role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (new_user_id, user_role_to_assign);
  
  -- Also insert into profiles for backward compatibility
  INSERT INTO public.profiles (id, first_name, last_name)
  VALUES (
    new.id,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name'
  )
  ON CONFLICT (id) DO NOTHING;
  
  RETURN new;
END;
$$;
