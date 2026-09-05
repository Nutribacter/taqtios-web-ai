import { redirect } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getAccessStatus } from "@/lib/access";
import { logout } from "@/app/login/actions";

export default async function AccountPage() {
  const { isAuthenticated, hasAccess, email } = await getAccessStatus();
  if (!isAuthenticated) redirect("/login?redirect=/account");

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-lg px-6 py-16">
          <h1 className="font-heading text-3xl font-extrabold">Mi cuenta</h1>

          <div className="mt-8 space-y-4 rounded-xl border border-border bg-card p-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
              <p className="mt-1 font-medium">{email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Acceso</p>
              <p className="mt-1 font-medium">
                {hasAccess ? "Fundador — activo" : "Sin acceso todavía"}
              </p>
            </div>
          </div>

          <form action={logout} className="mt-6">
            <button
              type="submit"
              className="rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
