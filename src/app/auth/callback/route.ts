import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * A donde Google (via Supabase) vuelve después de que el usuario inicia
 * sesión. Cambia el "code" de la URL por una sesión real y lo manda adonde
 * quería ir.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${redirectTo}`);
    }
  }

  return NextResponse.redirect(
    `${origin}/login?error=${encodeURIComponent("No pudimos iniciar sesión con Google. Probá de nuevo.")}`,
  );
}
