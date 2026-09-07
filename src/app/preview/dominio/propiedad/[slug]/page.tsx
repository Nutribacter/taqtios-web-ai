import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";
import { PROPERTIES, getProperty } from "../../properties";
import { PropertyGallery } from "../../PropertyGallery";
import { DominioFooter } from "../../DominioFooter";

/**
 * Ficha de propiedad del template Dominio — mucho más premium que una card
 * ampliada: galería protagonista, ficha técnica editorial y contacto directo
 * por WhatsApp, sin formulario de 15 campos.
 */
export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const FICHA = [
    { v: String(property.bedrooms), l: "Ambientes" },
    { v: String(property.bathrooms), l: "Baños" },
    { v: String(property.area), l: "m² cubiertos" },
    { v: String(property.year), l: "Año" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EE] font-sans text-[#1C1A16] antialiased">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#F5F3EE]/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Dominio — ficha de propiedad de ejemplo</span>
        <Link href="/templates/dominio" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      <header className="border-b border-black/5 bg-[#F5F3EE]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/preview/dominio" className="font-serif text-xl tracking-tight">
            Dominio
          </Link>
          <Link
            href="/preview/dominio#propiedades"
            className="text-sm text-black/60 transition hover:text-black"
          >
            ← Todas las propiedades
          </Link>
        </div>
      </header>

      {/* GALERÍA — lo primero, protagonista, clickeable (abre lightbox) */}
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <PropertyGallery images={property.images} title={property.title} />
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-10 sm:px-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <ScrollReveal>
            <span className="rounded-full bg-[#1C1A16] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
              {property.operation}
            </span>
            <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">{property.title}</h1>
            <p className="mt-2 text-black/60">{property.location}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.05} className="mt-10 grid grid-cols-2 gap-6 border-y border-black/10 py-8 sm:grid-cols-4">
            {FICHA.map((f) => (
              <div key={f.l}>
                <p className="font-serif text-3xl sm:text-4xl">
                  <CountUp value={f.v} duration={800} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-black/40">{f.l}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10">
            <h2 className="font-serif text-xl">Descripción</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-black/70">{property.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-10">
            <h2 className="font-serif text-xl">Amenities</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-black/70 sm:grid-cols-3">
              {property.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#8A6A3F]" />
                  {a}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-10">
            <h2 className="font-serif text-xl">Ubicación</h2>
            <p className="mt-3 max-w-xl text-black/70">
              {property.location} — zona residencial con fácil acceso a la
              autopista y a los principales centros comerciales de la ciudad.
            </p>
            {/* Mapa real, sin API key: busca por `address` (si está cargada)
                o por `location`. Cambiar esos dos campos en properties.ts
                mueve el pin — no hace falta tocar este componente. */}
            <div className="mt-5 aspect-[21/9] w-full overflow-hidden rounded-xl border border-black/10">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  property.address ?? `${property.location}, Argentina`
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ubicación — ${property.location}`}
                className="h-full w-full border-0"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* CONTACTO — sticky en desktop */}
        <ScrollReveal delay={0.1} className="h-fit rounded-2xl border border-black/10 bg-white p-6 lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-widest text-black/40">{property.operation}</p>
          <p className="mt-1 font-serif text-3xl">{property.price}</p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://wa.me/5493513021100"
              target="_blank"
              rel="noopener"
              className="flex h-12 items-center justify-center rounded-lg bg-[#1C1A16] text-sm font-medium text-white transition hover:bg-black"
            >
              Escribir por WhatsApp
            </a>
            <button className="h-12 rounded-lg border border-black/15 text-sm font-medium transition hover:border-[#8A6A3F] hover:text-[#8A6A3F]">
              Solicitar visita
            </button>
          </div>
          <p className="mt-4 text-xs text-black/40">
            Respondemos en menos de 24 horas hábiles.
          </p>
        </ScrollReveal>
      </section>

      <DominioFooter />
    </div>
  );
}
