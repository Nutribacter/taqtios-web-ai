-- TAQTios Web AI — esquema inicial.
-- Correr esto en Supabase: Dashboard → SQL Editor → pegar y ejecutar.
-- Los usuarios en sí viven en auth.users (Supabase Auth); acá solo el estado
-- de compra, que es lo que decide si alguien tiene acceso a la biblioteca.

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'cancelled')),
  mp_payment_id text unique,
  mp_preference_id text,
  amount_ars numeric,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists purchases_user_id_idx on public.purchases(user_id);
create index if not exists purchases_status_idx on public.purchases(status);

-- Un usuario tiene acceso si tiene AL MENOS una compra aprobada.
-- No hay UNIQUE en (user_id) a propósito: si el día de mañana hay más de un
-- producto/tier, cada compra es su propia fila.

alter table public.purchases enable row level security;

-- El usuario puede ver sus propias compras (para mostrar "ya comprado" en el front).
create policy "purchases_select_own" on public.purchases
  for select using (auth.uid() = user_id);

-- Nada de insert/update/delete desde el cliente: eso lo hace únicamente el
-- backend con la service role key (creación de preferencia + webhook de MP).
