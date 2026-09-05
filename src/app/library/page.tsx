import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getAccessStatus } from "@/lib/access";
import { listReadyTemplates } from "@/content/templates";

export default async function LibraryPage() {
  const { isAuthenticated, hasAccess } = await getAccessStatus();
  if (!isAuthenticated) redirect("/login?redirect=/library");
  if (!hasAccess) redirect("/pricing");

  const templates = listReadyTemplates();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="font-heading text-3xl font-extrabold">Tu biblioteca</h1>
          <p className="mt-1 text-muted-foreground">
            Acceso activo. Entrá a cualquier template para ver sus 6 prompts completos.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <Link
                key={t.slug}
                href={`/templates/${t.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-lg"
              >
                <div className="aspect-video bg-muted" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {t.category}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-bold">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.style}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
