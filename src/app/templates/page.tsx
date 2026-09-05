import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { listReadyTemplates, listCategories } from "@/content/templates";
import TiltedCard from "@/components/TiltedCard";
import { ScrollReveal } from "@/components/ScrollReveal";

const ALL_FILTERS = [
  "Todos",
  "SaaS",
  "Agencias",
  "Restaurantes",
  "Inmobiliarias",
  "Tiendas",
  "Profesionales",
  "Portafolio",
  "Gimnasios",
  "Hotelería",
  "Startups",
  "Landings",
  "Salud",
  "Educación",
  "Marca Personal",
  "Finanzas",
  "Belleza",
  "Automotor",
  "Construcción",
  "Estudios Creativos",
];

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; q?: string }>;
}) {
  const { categoria = "Todos", q = "" } = await searchParams;
  const templates = listReadyTemplates().filter((t) => {
    const matchesCategory = categoria === "Todos" || t.category === categoria;
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
          <p className="mt-2 text-muted-foreground">
            {templates.length} de {listReadyTemplates().length} diseños
            {categoria !== "Todos" ? ` en ${categoria}` : ""}.
          </p>

          <form className="mt-8" action="/templates">
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Buscá un template…"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary sm:max-w-sm"
            />
            {categoria !== "Todos" && (
              <input type="hidden" name="categoria" value={categoria} />
            )}
          </form>

          <div className="mt-6 flex flex-wrap gap-2">
            {ALL_FILTERS.map((c) => {
              const isActive = c === categoria;
              const isDisabled = c !== "Todos" && !activeCategories.has(c);
              return (
                <Link
                  key={c}
                  href={
                    c === "Todos"
                      ? "/templates"
                      : `/templates?categoria=${encodeURIComponent(c)}`
                  }
                  aria-disabled={isDisabled}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : isDisabled
                        ? "pointer-events-none border-border text-muted-foreground/40"
                        : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {c}
                </Link>
              );
            })}
          </div>

          {templates.length === 0 ? (
            <p className="mt-16 text-center text-muted-foreground">
              No encontramos templates para esa búsqueda todavía. Estamos
              sumando más diseños cada semana.
            </p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {templates.map((t, i) => (
                <ScrollReveal key={t.slug} delay={Math.min(i, 6) * 0.05}>
                  <TiltedCard containerHeight="auto" rotateAmplitude={6}>
                    <Link
                      href={`/templates/${t.slug}`}
                      className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-xl"
                    >
                      <div className="aspect-video bg-muted" />
                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                            {t.category}
                          </p>
                          {t.featured && (
                            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                              Destacado
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 font-heading text-lg font-bold">
                          {t.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {t.style}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {t.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </TiltedCard>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
