import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { signup } from "./actions";
import Link from "next/link";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string; error?: string }>;
}) {
  const { redirect = "/dashboard", error } = await searchParams;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h1 className="font-heading text-2xl font-extrabold">Crear cuenta</h1>
          <p className="mt-1 text-sm text-foreground-dim">
            Para comprar el acceso y guardar tu biblioteca.
          </p>

          {error && (
            <p className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <form action={signup} className="mt-6 space-y-4">
            <input type="hidden" name="redirect" value={redirect} />
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Contraseña</label>
              <input
                type="password"
                name="password"
                minLength={8}
                required
                className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <p className="mt-1 text-xs text-foreground-dim">Mínimo 8 caracteres.</p>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Crear cuenta
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-foreground-dim">
            ¿Ya tenés cuenta?{" "}
            <Link
              href={`/login?redirect=${encodeURIComponent(redirect)}`}
              className="font-medium text-accent"
            >
              Ingresá
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
