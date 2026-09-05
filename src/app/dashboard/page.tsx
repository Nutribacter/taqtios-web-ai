import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getAccessStatus } from "@/lib/access";
import { listReadyTemplates, listFeaturedTemplates } from "@/content/templates";

export default async function DashboardPage() {
  const { isAuthenticated, hasAccess, email } = await getAccessStatus();
  if (!isAuthenticated) redirect("/login?redirect=/dashboard");

  const total = listReadyTemplates().length;
  const featured = listFeaturedTemplates();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="font-heading text-3xl font-extrabold">
            Hola{email ? `, ${email.split("@")[0]}` : ""}
          </h1>
          <p className="mt-1 text-muted-foreground">Tu biblioteca TAQTios Web AI</p>

          {!hasAccess && (
            <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
              <p className="font-medium">Todavía no activaste tu acceso.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Con el acceso fundador se desbloquean los prompts completos de
                los {total} templates.
              </p>
              <Link
                href="/pricing"
                className="mt-4 inline-block rounded-lg btn-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Obtener acceso
              </Link>
            </div>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="font-heading text-3xl font-extrabold">{total}</p>
              <p className="mt-1 text-sm text-muted-foreground">Templates disponibles</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="font-heading text-3xl font-extrabold">{featured.length}</p>
              <p className="mt-1 text-sm text-muted-foreground">Destacados</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="font-heading text-3xl font-extrabold">
                {hasAccess ? "Activo" : "—"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Estado del acceso</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/library"
              className="rounded-lg btn-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Explorar biblioteca
            </Link>
            <Link
              href="/account"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted"
            >
              Mi cuenta
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
