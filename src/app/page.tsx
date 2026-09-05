import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { listFeaturedTemplates } from "@/content/templates";
import { finalPriceArs } from "@/lib/pricing";

const STEPS = [
  { n: "01", title: "Elegí", body: "Recorré la biblioteca y encontrá el diseño que se parece a lo que querés construir." },
  { n: "02", title: "Copiá", body: "Cada template trae su Prompt Maestro: el brief completo de diseño listo para pegar." },
  { n: "03", title: "Pegá", body: "Lo pegás en Claude, Qwen, Lovable, Cursor o Gemini — tu herramienta, tu cuenta." },
  { n: "04", title: "Personalizá", body: "Los prompts de branding, copy y SEO lo dejan con tu marca, tus textos, tu contenido." },
];

const TOOLS = ["Claude", "Qwen", "Lovable", "Cursor", "Gemini"];

const AUDIENCE = [
  "Freelancers",
  "Diseñadores",
  "Developers",
  "Agencias",
  "Emprendedores",
  "Pymes",
];

const FAQ = [
  {
    q: "¿Esto arma la web por mí?",
    a: "No. Vos elegís el diseño, copiás el prompt y lo pegás en tu herramienta de IA — ella construye la web. TAQTios Web AI es la biblioteca de diseños y prompts, no un generador propio.",
  },
  {
    q: "¿Necesito saber programar?",
    a: "No. Necesitás una cuenta en la IA que uses (Claude, Lovable, Cursor, etc.) y saber copiar y pegar. Los prompts ya traen las instrucciones de personalización.",
  },
  {
    q: "¿Con qué herramientas funciona?",
    a: "Los prompts están escritos para funcionar con cualquier asistente de IA moderno para desarrollo: Claude, Qwen, Lovable, Cursor y Gemini son los más probados.",
  },
  {
    q: "¿Puedo usar un template para un cliente?",
    a: "Sí, podés usar los diseños para tus propios proyectos y los de tus clientes. Lo que no podés hacer es revender o redistribuir los prompts o los diseños como si fueran tuyos para crear otro producto competidor.",
  },
  {
    q: "¿El precio es único o es una suscripción?",
    a: "Es un pago único. Con el acceso fundador entrás a la biblioteca actual y a las incorporaciones que sumemos durante esta etapa de lanzamiento.",
  },
];

export default function Home() {
  const featured = listFeaturedTemplates();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Creá webs que parecen{" "}
            <span className="brand-gradient-text">de miles de dólares</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-dim">
            Elegí un diseño. Copiá el prompt. Pegalo en tu IA. Y construí una
            web profesional sin empezar desde cero.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/templates"
              className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 sm:w-auto"
            >
              Explorar templates
            </Link>
            <Link
              href="/help"
              className="w-full rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-surface-2 sm:w-auto"
            >
              Cómo funciona
            </Link>
          </div>
          <p className="mt-8 text-xs uppercase tracking-widest text-foreground-dim">
            Compatible con {TOOLS.join(" · ")}
          </p>
        </section>

        {/* Cómo funciona */}
        <section className="border-t border-border bg-surface-2/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              De idea a web en minutos.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div key={s.n}>
                  <span className="font-heading text-3xl font-bold text-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground-dim">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería destacada */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Algunos de los templates
            </h2>
            <Link
              href="/templates"
              className="text-sm font-semibold text-accent hover:opacity-80"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((t) => (
              <Link
                key={t.slug}
                href={`/templates/${t.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-surface transition hover:shadow-lg"
              >
                <div className="aspect-video bg-surface-2" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {t.category}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-bold">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground-dim">
                    {t.style}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Qué incluye */}
        <section className="border-t border-border bg-surface-2/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Qué incluye el acceso
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="font-heading text-lg font-bold">
                  Biblioteca de templates
                </h3>
                <p className="mt-2 text-sm text-foreground-dim">
                  Cada template trae Prompt Maestro, Branding, Copy,
                  Animaciones, SEO y Responsive — seis prompts listos para
                  usar, no uno solo genérico.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="font-heading text-lg font-bold">
                  Prompt Toolkit
                </h3>
                <p className="mt-2 text-sm text-foreground-dim">
                  Una biblioteca aparte de prompts universales para modificar
                  cualquier template: cambiar colores, mejorar conversión,
                  adaptar a otro rubro, y más.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Para quién es */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Para quién es
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {AUDIENCE.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground-dim"
              >
                {a}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="border-t border-border bg-surface-2/40">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Acceso fundador
            </h2>
            <p className="mt-4 font-heading text-5xl font-extrabold">
              ${finalPriceArs().toLocaleString("es-AR")}
              <span className="text-lg font-medium text-foreground-dim"> ARS</span>
            </p>
            <p className="mt-2 text-sm text-foreground-dim">
              Pago único. Acceso a la biblioteca actual y a las incorporaciones
              durante la etapa de lanzamiento.
            </p>
            <Link
              href="/pricing"
              className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Obtener acceso
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 divide-y divide-border">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none font-heading text-base font-bold marker:content-none">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-foreground-dim">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-heading text-3xl font-extrabold">
              Dejá de empezar desde una pantalla en blanco.
            </h2>
            <Link
              href="/templates"
              className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Explorar templates
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
