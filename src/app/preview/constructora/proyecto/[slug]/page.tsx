import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PROJECTS, getProject, COMPANY } from "../../content";
import { ConstructoraFooter } from "../../ConstructoraFooter";

/**
 * Ficha de proyecto del template Constructora — case study editorial: hero
 * grande, ficha técnica, descripción, galería y CTA de contacto directo.
 * Mismo patrón que dominio/propiedad/[slug], repaletteado a la identidad
 * negro mate + piedra + madera de Constructora.
 */
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const waLink = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    `Hola, quería consultar por el proyecto ${project.name}.`
  )}`;

  return (
    <div className={`${jakarta.className} min-h-screen bg-[#11110F] text-[#F3F0E8] antialiased`}>
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#0c0c0a]/95 px-4 py-2 text-xs text-white/50 backdrop-blur">
        <span>Preview del template Constructora — proyecto de ejemplo</span>
        <Link href="/templates/constructora" className="font-medium text-white/80 hover:text-white">
          ← Volver al template
        </Link>
      </div>

      <header className="border-b border-white/[0.08] bg-[#11110F]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/preview/constructora" className="text-xl font-bold tracking-tight">
            {COMPANY.name}
          </Link>
          <Link href="/preview/constructora#proyectos" className="text-sm text-white/60 transition hover:text-white">
            ← Todos los proyectos
          </Link>
        </div>
      </header>

      <section className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <Image src={project.image} alt={project.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/20 to-transparent" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <ScrollReveal>
            <div className="flex items-baseline gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#D6D0C4]/60">
              <span>{project.id}</span>
              <span>{project.category}</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{project.name}</h1>
            <p className="mt-3 text-white/50">{project.location}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.05} className="mt-10 grid grid-cols-3 gap-6 border-y border-white/[0.08] py-8">
            <div>
              <p className="text-2xl font-bold sm:text-3xl">{project.area}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Superficie</p>
            </div>
            <div>
              <p className="text-2xl font-bold sm:text-3xl">{project.year}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Año</p>
            </div>
            <div>
              <p className="text-2xl font-bold sm:text-3xl">{project.status}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Estado</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10">
            <h2 className="text-xl font-bold">Sobre el proyecto</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-white/60">{project.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/[0.1]">
                <Image
                  src={src}
                  alt={`${project.name} — imagen ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 22vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} className="niv-glass h-fit rounded-2xl border border-white/[0.12] p-6 lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-widest text-white/40">¿Un proyecto parecido?</p>
          <p className="mt-2 text-2xl font-bold">Hablemos de tu obra.</p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#ECE8DF] text-sm font-semibold text-[#11110F] transition hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
            </a>
            <Link
              href="/preview/constructora#contacto"
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-medium transition hover:border-white/50"
            >
              Enviar mi proyecto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/35">Respondemos en menos de 24 horas hábiles.</p>
        </ScrollReveal>
      </section>

      <ConstructoraFooter />

      <style>{`
        .niv-glass {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
      `}</style>
    </div>
  );
}
