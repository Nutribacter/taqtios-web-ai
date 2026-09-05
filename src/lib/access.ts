import { createClient } from "@/lib/supabase/server";

export interface AccessStatus {
  isAuthenticated: boolean;
  hasAccess: boolean;
  email: string | null;
}

const NO_ACCESS: AccessStatus = {
  isAuthenticated: false,
  hasAccess: false,
  email: null,
};

function supabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

/**
 * Estado de acceso del visitante: si está logueado y si tiene una compra
 * aprobada. Devuelve "sin acceso" en vez de romper la página si Supabase
 * todavía no está conectado (env vars vacías) — así el resto del sitio se
 * puede seguir viendo mientras se termina de configurar.
 */
export async function getAccessStatus(): Promise<AccessStatus> {
  if (!supabaseConfigured()) return NO_ACCESS;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return NO_ACCESS;

  const { data: purchase } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("status", "approved")
    .limit(1)
    .maybeSingle();

  return {
    isAuthenticated: true,
    hasAccess: Boolean(purchase),
    email: user.email ?? null,
  };
}
