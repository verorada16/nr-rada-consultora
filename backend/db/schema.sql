-- Ejecutar en Supabase: Project -> SQL Editor -> New query

-- Tabla de usuarios que inician sesión con Google
create table if not exists usuarios (
  id uuid primary key default gen_random_uuid(),
  google_id text unique not null,
  nombre text,
  email text,
  avatar_url text,
  creado_en timestamp with time zone default now()
);

-- Tabla de consultas (leads) que llegan desde el formulario de contacto
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  empresa text,
  cargo text,
  email text not null,
  telefono text,
  intereses text[] default '{}',
  mensaje text not null,
  creado_en timestamp with time zone default now()
);

-- Índice útil para ordenar el panel de consultas por fecha
create index if not exists leads_creado_en_idx on leads (creado_en desc);
