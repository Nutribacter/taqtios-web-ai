import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { login } from "./actions";

export default async function LoginPage({
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
          <h1 className="font-heading text-2xl font-extrabold">Ingresar</h1>

          {error && (
            <p className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <form action={login} className="mt-6 space-y-4">
            <input type="hidden" name="redirect" value={redirect} />
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Contraseña</label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Ingresar
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            ¿Todavía no tenés cuenta?{" "}
            <Link
              href={`/signup?redirect=${encodeURIComponent(redirect)}`}
              className="font-medium text-primary"
            >
              Crear cuenta
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
