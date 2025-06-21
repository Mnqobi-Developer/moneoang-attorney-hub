
-- Create a users table to manage all users (admins and clients)
CREATE TABLE public.users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  email TEXT NOT NULL UNIQUE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  user_type TEXT NOT NULL DEFAULT 'client' CHECK (user_type IN ('admin', 'client')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Drop existing foreign key constraints
ALTER TABLE public.appointments DROP CONSTRAINT IF EXISTS appointments_client_id_fkey;
ALTER TABLE public.cases DROP CONSTRAINT IF EXISTS cases_client_id_fkey;
ALTER TABLE public.documents DROP CONSTRAINT IF EXISTS documents_client_id_fkey;
ALTER TABLE public.messages DROP CONSTRAINT IF EXISTS messages_sender_id_fkey;

-- Update foreign keys to reference the new users table
ALTER TABLE public.appointments 
ADD CONSTRAINT appointments_client_id_fkey 
FOREIGN KEY (client_id) REFERENCES public.users(id) ON DELETE CASCADE;

ALTER TABLE public.cases 
ADD CONSTRAINT cases_client_id_fkey 
FOREIGN KEY (client_id) REFERENCES public.users(id) ON DELETE CASCADE;

ALTER TABLE public.documents 
ADD CONSTRAINT documents_client_id_fkey 
FOREIGN KEY (client_id) REFERENCES public.users(id) ON DELETE CASCADE;

ALTER TABLE public.messages 
ADD CONSTRAINT messages_sender_id_fkey 
FOREIGN KEY (sender_id) REFERENCES public.users(id) ON DELETE CASCADE;

-- Drop and recreate the user_roles table to reference users
DROP TABLE IF EXISTS public.user_roles;
CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'client' CHECK (role IN ('admin', 'lawyer', 'paralegal', 'clerk', 'client')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on new tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- RLS policies for users table
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT USING (auth_user_id = auth.uid());

CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth_user_id = auth.uid());

CREATE POLICY "Admins can view all users" ON public.users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_roles ur 
      JOIN public.users u ON ur.user_id = u.id 
      WHERE u.auth_user_id = auth.uid() AND ur.role = 'admin'
    )
  );

-- RLS policies for user_roles table
CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users u 
      WHERE u.id = user_roles.user_id AND u.auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all roles" ON public.user_roles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_roles ur 
      JOIN public.users u ON ur.user_id = u.id 
      WHERE u.auth_user_id = auth.uid() AND ur.role = 'admin'
    )
  );

-- Update the handle_new_user function to work with the new structure
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
DECLARE
  new_user_id UUID;
BEGIN
  -- Insert into users table
  INSERT INTO public.users (auth_user_id, email, first_name, last_name)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name'
  )
  RETURNING id INTO new_user_id;
  
  -- Insert default client role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (new_user_id, 'client');
  
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

-- Update get_current_user_role function to work with new structure
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT ur.role 
  FROM public.user_roles ur
  JOIN public.users u ON ur.user_id = u.id
  WHERE u.auth_user_id = auth.uid()
  LIMIT 1;
$$;
