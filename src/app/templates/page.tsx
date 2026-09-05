import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { listReadyTemplates, listCategories } from "@/content/templates";

const ALL_FILTERS = [
  "All",
  "SaaS",
  "Agencies",
  "Restaurants",
  "Real Estate",
  "Ecommerce",
  "Professionals",
  "Portfolio",
  "Fitness",
  "Hospitality",
  "Startups",
  "Landing Pages",
];

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; q?: string }>;
}) {
  const { categoria = "All", q = "" } = await searchParams;
  const templates = listReadyTemplates().filter((t) => {
    const matchesCategory = categoria === "All" || t.category === categoria;
    const needle = q.trim().toLowerCase();
    const matchesSearch =
      !needle ||
      t.name.toLowerCase().includes(needle) ||
      t.category.toLowerCase().includes(needle) ||
      t.tags.some((tag) => tag.toLowerCase().includes(needle));
    return matchesCategory && matchesSearch;
  });
  const activeCategories = new Set(listCategories());

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="font-heading text-3xl font-extrabold sm:text-4xl">
            Templates
          </h1>
          <p className="mt-2 text-foreground-dim">
            {templates.length} de {listReadyTemplates().length} diseños
            {categoria !== "All" ? ` en ${categoria}` : ""}.
          </p>

          <form className="mt-8" action="/templates">
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Buscá un template…"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent sm:max-w-sm"
            />
            {categoria !== "All" && (
              <input type="hidden" name="categoria" value={categoria} />
            )}
          </form>

          <div className="mt-6 flex flex-wrap gap-2">
            {ALL_FILTERS.map((c) => {
              const isActive = c === categoria;
              const isDisabled = c !== "All" && !activeCategories.has(c);
              return (
                <Link
                  key={c}
                  href={
                    c === "All"
                      ? "/templates"
                      : `/templates?categoria=${encodeURIComponent(c)}`
                  }
                  aria-disabled={isDisabled}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : isDisabled
                        ? "pointer-events-none border-border text-foreground-dim/40"
                        : "border-border text-foreground-dim hover:border-accent hover:text-foreground"
                  }`}
                >
                  {c}
                </Link>
              );
            })}
          </div>

          {templates.length === 0 ? (
            <p className="mt-16 text-center text-foreground-dim">
              No encontramos templates para esa búsqueda todavía. Estamos
              sumando más diseños cada semana.
            </p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {templates.map((t) => (
                <Link
                  key={t.slug}
                  href={`/templates/${t.slug}`}
                  className="group overflow-hidden rounded-xl border border-border bg-surface transition hover:shadow-lg"
                >
                  <div className="aspect-video bg-surface-2" />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                        {t.category}
                      </p>
                      {t.featured && (
                        <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground-dim">
                          Destacado
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1 font-heading text-lg font-bold">
                      {t.name}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-dim">
                      {t.style}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-2 py-0.5 text-xs text-foreground-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
