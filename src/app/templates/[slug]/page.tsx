import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CopyPromptButton } from "@/components/copy-prompt-button";
import { getTemplateBySlug, listReadyTemplates } from "@/content/templates";
import { getAccessStatus } from "@/lib/access";

export function generateStaticParams() {
  return listReadyTemplates().map((t) => ({ slug: t.slug }));
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  const { hasAccess } = await getAccessStatus();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {template.category}
          </p>
          <h1 className="mt-1 font-heading text-3xl font-extrabold sm:text-4xl">
            {template.name}
          </h1>
          <p className="mt-1 text-foreground-dim">{template.style}</p>
          <p className="mt-4 max-w-2xl text-foreground-dim">
            {template.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2 py-0.5 text-xs text-foreground-dim"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/preview/${template.slug}`}
            className="mt-8 block aspect-video overflow-hidden rounded-xl border border-border bg-surface-2 transition hover:opacity-90"
          >
            <div className="flex h-full items-center justify-center text-sm font-medium text-foreground-dim">
              Ver preview en vivo →
            </div>
          </Link>

          <section className="mt-12">
            <h2 className="font-heading text-xl font-bold">Este template incluye</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {template.prompts.map((p) => (
                <li key={p.type} className="flex items-center gap-2 text-sm">
                  <span className="text-accent">✓</span>
                  {p.title}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-xl font-bold">Cómo utilizarlo</h2>
            <ol className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                "Copiá el Prompt Maestro de abajo.",
                "Abrí Claude, Qwen, Lovable, Cursor o Gemini.",
                "Pegalo y dejá que construya la primera versión.",
                "Personalizalo con los prompts de branding, copy y SEO.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-heading text-lg font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground-dim">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-xl font-bold">Prompts</h2>

            {!hasAccess && (
              <div className="mt-4 rounded-xl border border-accent/30 bg-accent/5 p-5">
                <p className="text-sm font-medium">
                  Con el acceso fundador se desbloquean los 6 prompts completos
                  de este template, listos para copiar.
                </p>
                <Link
                  href="/pricing"
                  className="mt-3 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
                >
                  Obtener acceso
                </Link>
              </div>
            )}

            <div className="mt-6 space-y-4">
              {template.prompts.map((p) => (
                <div
                  key={p.type}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-bold">{p.title}</h3>
                      <p className="mt-1 text-sm text-foreground-dim">
                        {p.description}
                      </p>
                    </div>
                    {hasAccess && <CopyPromptButton content={p.content} />}
                  </div>
                  {hasAccess ? (
                    <pre className="mt-4 max-h-72 overflow-y-auto whitespace-pre-wrap rounded-lg bg-surface-2 p-4 text-xs leading-relaxed text-foreground-dim">
                      {p.content}
                    </pre>
                  ) : (
                    <div className="mt-4 rounded-lg bg-surface-2 p-4">
                      <p className="select-none text-xs leading-relaxed text-foreground-dim/50 blur-[3px]">
                        {p.content.slice(0, 220)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
