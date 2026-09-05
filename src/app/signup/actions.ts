"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signup(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirect") ?? "/dashboard");

  if (!email || password.length < 8) {
    redirect(
      `/signup?redirect=${encodeURIComponent(redirectTo)}&error=${encodeURIComponent(
        "El email tiene que ser válido y la contraseña, de al menos 8 caracteres.",
      )}`,
    );
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect(
      `/signup?redirect=${encodeURIComponent(redirectTo)}&error=${encodeURIComponent(error.message)}`,
    );
  }

  redirect(redirectTo);
}
