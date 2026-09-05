import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Preview en vivo del template Black Studio (Agency / Editorial / Dark /
 * Minimal). Mundo visual propio: negro puro, tipografía enorme como layout,
 * un proyecto por viewport. Estudio de ejemplo ficticio ("Strata").
 *
 * Animaciones: underline que crece en los links del nav, cada proyecto
 * entra con fade-up al llegar a viewport, imagen con zoom leve al hover —
 * las dos únicas que pide el propio Prompt Maestro de este template.
 */
const PROJECTS = [
  { client: "Nordvik", label: "Identidad de marca" },
  { client: "Museo Costa", label: "Sitio web" },
  { client: "Ferro & Cía", label: "Dirección de arte" },
  { client: "Anda Studio", label: "Branding + packaging" },
];

const CLIENTS = ["Nordvik", "Museo Costa", "Ferro & Cía", "Anda Studio", "Casa Lumen", "Terral"];

const navLink = "group relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

export default function BlackStudioPreview() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-white antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0A0A0A]/95 px-4 py-2 text-xs text-white/50 backdrop-blur">
        <span>Preview del template Black Studio — contenido de ejemplo</span>
        <Link href="/templates/black-studio" className="font-medium text-white/80 hover:text-white">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm">
        <span className="font-medium tracking-tight">STRATA</span>
        <nav className="flex gap-8 text-white/60">
          <span className={navLink}>Trabajo</span>
          <span className={navLink}>Contacto</span>
        </nav>
      </header>

      {/* Statement */}
      <section className="flex min-h-[80vh] items-center px-6">
        <h1 className="max-w-4xl text-[clamp(2.25rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight">
          Diseñamos identidades que no necesitan explicarse.
        </h1>
      </section>

      {/* Proyectos: uno por viewport, entra con fade-up */}
      {PROJECTS.map((p) => (
        <ScrollReveal key={p.client} className="border-t border-white/10 px-6">
          <div className="flex min-h-screen flex-col justify-end gap-4 pb-16">
            <div className="group flex-1 cursor-pointer overflow-hidden">
              <div className="h-full w-full bg-[#161616] transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-medium sm:text-4xl">{p.client}</h2>
              <span className="text-sm text-white/50">{p.label}</span>
            </div>
          </div>
        </ScrollReveal>
      ))}

      {/* Sobre el estudio */}
      <ScrollReveal className="border-t border-white/10 px-6 py-32">
        <p className="max-w-3xl text-2xl leading-relaxed text-white/80 sm:text-3xl">
          Somos un estudio de cuatro personas. Trabajamos con marcas que
          prefieren un proyecto bien hecho a diez apurados. Cada identidad
          nace de un problema real, no de una tendencia de Pinterest.
        </p>
      </ScrollReveal>

      {/* Clientes */}
      <ScrollReveal className="border-t border-white/10 px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-white/40">Han confiado en nosotros</p>
        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-white/70 sm:text-2xl">
          {CLIENTS.join(" · ")}
        </p>
      </ScrollReveal>

      {/* Contacto */}
      <ScrollReveal className="border-t border-white/10 px-6 py-32">
        <a href="mailto:hola@strata.studio" className={`${navLink} block text-3xl font-medium sm:text-5xl`}>
          hola@strata.studio
        </a>
        <p className="mt-4 text-sm text-white/50">o escribinos por WhatsApp</p>
      </ScrollReveal>

      <footer className="border-t border-white/10 px-6 py-8 text-xs text-white/30">
        © 2026 Strata — ejemplo de contenido para el template Black Studio.
      </footer>
    </div>
  );
}
