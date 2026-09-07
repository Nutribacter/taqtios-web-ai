"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { Plus, Minus, ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";
import { Magnetic } from "@/components/Magnetic";
import { AbogadoFooter } from "./AbogadoFooter";
import {
  PRACTICE_AREAS,
  SECONDARY_SERVICES,
  SERVICE_CATEGORIES,
  RESULTS,
  PARTNERS,
  PROCESS,
  CASES,
  CASE_CATEGORY_COLOR,
  TESTIMONIALS,
  FAQ,
} from "./content";

/**
 * Preview en vivo del template Abogado — REBUILD (7/9, 2ª pasada). La v1
 * (marino casi negro + índice numerado) fue rechazada por básica. Esta
 * versión resuelve la información en cards, scroll horizontal, marquee y
 * movimiento en vez de listas/acordeones — técnicas adaptadas de 21st.dev
 * (Project Card, Mentor Section, Testimonials Marquee, Magnetic de
 * @ibelick) reimplementadas a mano con nuestra propia paleta, sin sumar
 * sus paquetes. Paleta clara marfil/carbón + dorado como acento puntual —
 * NO el dark-mode casi total de la v1.
 */

const NAV_LINKS = [
  { label: "Áreas", href: "#areas" },
  { label: "Equipo", href: "#equipo" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Preguntas", href: "#faq" },
];

/**
 * Tarjeta de "Cómo trabajamos" — adaptada de Info Card (21st.dev,
 * @maxim.bort.devel): el borde es en realidad un conic-gradient detrás de
 * la tarjeta (truco de padding, sin backgroundClip) que persigue el mouse
 * en ángulo. Recoloreado por completo a la paleta del sitio (dorado sobre
 * carbón translúcido) — el original es multicolor, acá no.
 */
function ProcessCard({ n, title, body, delay }: { n: string; title: string; body: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.setProperty("--rotation", `${Math.atan2(y, x)}rad`);
  };
  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => ref.current?.style.setProperty("--rotation", "0deg")}
        className="abogado-info-card h-full rounded-lg p-[1.5px] transition-shadow duration-300 hover:shadow-[0_10px_28px_-10px_rgba(184,135,58,0.4)]"
      >
        <div className="h-full rounded-[7px] bg-[#FBF8F2] p-6 text-left">
          <span className="font-serif text-sm text-[#B8873A]">{n}</span>
          <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide">{title}</p>
          <p className="mt-2 text-sm text-[#221F1B]/60">{body}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function AbogadoPreview() {
  const [openFaq, setOpenFaq] = useState(0);
  const [category, setCategory] = useState(SERVICE_CATEGORIES[0]);
  const [selectedService, setSelectedService] = useState(0);
  const [selectedPartner, setSelectedPartner] = useState(0);

  const areasRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);
  const scrollBy = (ref: React.RefObject<HTMLDivElement | null>, dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  const filteredServices = SECONDARY_SERVICES.filter((s) => s.category === category);
  const activeService = filteredServices[selectedService] ?? filteredServices[0];

  return (
    <div className="min-h-screen bg-[#EFEAE0] font-sans text-[#221F1B] antialiased">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#EFEAE0]/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Abogado — contenido de ejemplo</span>
        <Link href="/templates/abogado" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      {/* NAV — sin pills, subrayado animado */}
      <header className="sticky top-[29px] z-40 border-b border-black/5 bg-[#EFEAE0]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <span className="font-serif text-xl font-semibold tracking-tight">
            Zafra <span className="text-[#B8873A]">&amp;</span> Celis
          </span>
          <nav className="hidden gap-8 text-sm sm:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="group relative py-1 text-[#221F1B]/70 transition hover:text-[#221F1B]">
                {l.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#B8873A] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <Link
            href="/preview/abogado/agendar"
            className="group flex items-center gap-1.5 text-sm font-medium text-[#221F1B] transition hover:text-[#B8873A]"
          >
            Agendar consulta
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </header>

      {/* HERO — editorial, split, imagen con reveal */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-10 pt-10 sm:px-10 sm:pt-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#948A79]">
            Estudio Jurídico · Córdoba
          </p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-[4.2rem]">
            Defendemos
            <br />
            lo que <span className="text-[#B8873A]">importa.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-[#221F1B]/70">
            Dieciocho años resolviendo casos laborales, civiles, de familia y
            de daños en Córdoba — con el mismo trato desde la primera consulta.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/preview/abogado/agendar"
              className="rounded-sm bg-[#221F1B] px-7 py-3.5 text-sm font-semibold text-[#EFEAE0] transition hover:bg-black"
            >
              Agendar una consulta
            </Link>
            <a href="#areas" className="group flex items-center gap-1.5 text-sm font-medium text-[#221F1B]/70 transition hover:text-[#221F1B]">
              Conocer el estudio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <p className="mt-10 text-xs uppercase tracking-widest text-[#948A79]">
            Matrícula N° 4821 · Colegio de Abogados de Córdoba
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm" style={{ animation: "abogado-reveal 1100ms cubic-bezier(0.65,0,0.35,1) forwards" }}>
          <Image
            src="/templates/abogado/consulta.webp"
            alt="Consulta legal entre abogados revisando documentación"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <style>{`
          @keyframes abogado-reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
          @keyframes abogado-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes abogado-shine { from { transform: translateX(-30%); } to { transform: translateX(130%); } }
          .abogado-info-card {
            background-image: conic-gradient(from var(--rotation, 0deg), #B8873A 0deg, #B8873A 55deg, rgba(34,31,27,0.12) 55deg, rgba(34,31,27,0.12) 360deg);
          }
          .abogado-numeros-shine {
            animation: abogado-shine 7s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="abogado-reveal"] { animation: none !important; clip-path: inset(0 0 0 0) !important; }
            .abogado-marquee-track { animation: none !important; }
            .abogado-numeros-shine { animation: none !important; display: none; }
          }
        `}</style>
      </section>

      {/* ÁREAS DE PRÁCTICA — scroll horizontal, project cards */}
      <section id="areas" className="py-10">
        <ScrollReveal className="mx-auto max-w-7xl px-6 text-center sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#948A79]">Lo que hacemos</p>
          <h2 className="mt-1.5 font-serif text-3xl font-semibold sm:text-4xl">Áreas de práctica</h2>
        </ScrollReveal>

        <div ref={areasRef} className="mt-8 flex gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:px-10 [&::-webkit-scrollbar]:hidden">
          {PRACTICE_AREAS.map((area, i) => (
            <ScrollReveal key={area.n} delay={i * 0.04} className="group w-[280px] shrink-0 snap-start sm:w-[320px]">
              <Link
                href={`/preview/abogado/agendar?area=${encodeURIComponent(area.title)}`}
                className="block overflow-hidden rounded-sm border border-black/10 bg-white/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#3A2E1F] to-[#1B1A18]">
                  {area.img ? (
                    <Image
                      src={area.img}
                      alt={area.title}
                      fill
                      sizes="320px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <span className="absolute -bottom-6 -right-2 font-serif text-[7rem] font-semibold leading-none text-white/10">
                      {area.n}
                    </span>
                  )}
                  <span className="absolute left-4 top-4 font-serif text-sm text-white/70">{area.n}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl transition-colors group-hover:text-[#B8873A]">{area.title}</h3>
                  <p className="mt-2 text-sm text-[#221F1B]/60">{area.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8873A]">
                    Consultar
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-2 flex justify-center gap-2">
          <button onClick={() => scrollBy(areasRef, -1)} aria-label="Anterior" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition hover:border-[#B8873A] hover:text-[#B8873A]">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scrollBy(areasRef, 1)} aria-label="Siguiente" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition hover:border-[#B8873A] hover:text-[#B8873A]">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* SERVICIOS SECUNDARIOS — tabs + chips seleccionables + tarjeta de info, todo centrado */}
      <section className="bg-[#1B1A18] px-6 py-10 text-[#EFEAE0] sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">También resolvemos</p>
            <h2 className="mt-1.5 font-serif text-3xl font-semibold sm:text-4xl">Servicios por especialidad</h2>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-1 border-b border-white/10">
            {SERVICE_CATEGORIES.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setSelectedService(0);
                  }}
                  className={`relative px-4 py-3 text-sm font-medium transition ${active ? "text-white" : "text-white/40 hover:text-white/70"}`}
                >
                  {cat}
                  {active && <span className="absolute inset-x-3 -bottom-px h-px bg-[#B8873A]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {filteredServices.map((s, i) => {
              const active = selectedService === i;
              return (
                <button
                  key={s.label}
                  onClick={() => setSelectedService(i)}
                  className={`rounded-sm border px-4 py-2 text-sm transition ${
                    active
                      ? "border-[#B8873A] bg-[#B8873A]/15 text-[#EFEAE0]"
                      : "border-white/15 text-white/70 hover:border-white/30"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>

          {activeService && (
            <ScrollReveal key={activeService.label} className="mx-auto mt-5 max-w-lg rounded-sm border border-white/10 bg-white/5 p-5">
              <p className="font-serif text-lg text-[#B8873A]">{activeService.label}</p>
              <p className="mt-1.5 text-sm text-white/60">{activeService.desc}</p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* NÚMEROS — franja editorial, una sola hilera a todo el ancho.
          El brillo diagonal es sutil a propósito (opacidad baja, un solo
          barrido cada 7s): la idea de Logo Cloud 3 era el movimiento en loop
          con máscara de desvanecido, acá se adapta a una franja de stats fijos
          en vez de un carrusel de logos. */}
      <section className="relative overflow-hidden border-y border-[#B8873A]/25 bg-[#1B1A18] px-6 py-10 sm:px-10">
        <div
          aria-hidden
          className="abogado-numeros-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-[0.07]"
          style={{ background: "linear-gradient(100deg, transparent, #D4A65E, transparent)" }}
        />
        <ScrollReveal className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          {RESULTS.map((r) => (
            <div key={r.l} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="font-serif text-4xl font-bold text-[#D4A65E] sm:text-5xl">
                <CountUp value={r.v} suffix={r.suffix} duration={1000} />
              </span>
              <span className="mt-1 text-xs uppercase tracking-widest text-white/50">{r.l}</span>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* EQUIPO — lista seleccionable a la izquierda, tarjeta que se extiende a la derecha */}
      <section id="equipo" className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <ScrollReveal className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#948A79]">Quiénes somos</p>
          <h2 className="mt-1.5 font-serif text-3xl font-semibold sm:text-4xl">Nuestro equipo</h2>
        </ScrollReveal>

        <ScrollReveal className="relative mb-6 aspect-[21/9] w-full overflow-hidden rounded-sm">
          <Image
            src="/templates/abogado/equipo-reunion.webp"
            alt="Equipo del estudio reunido en sala de reuniones con vista a la ciudad"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </ScrollReveal>

        <div className="grid gap-0 overflow-hidden rounded-sm border border-black/10 sm:grid-cols-[1fr_1.4fr]">
          <div className="divide-y divide-black/10 border-black/10 sm:border-r">
            {PARTNERS.map((p, i) => {
              const active = selectedPartner === i;
              return (
                <button
                  key={p.name}
                  onClick={() => setSelectedPartner(i)}
                  className={`flex w-full items-center gap-3 px-5 py-4 text-left transition ${
                    active ? "bg-[#B8873A]/10" : "hover:bg-black/[0.03]"
                  }`}
                >
                  <span className={`h-full w-0.5 shrink-0 self-stretch ${active ? "bg-[#B8873A]" : "bg-transparent"}`} />
                  <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <Image src={p.photo} alt="" fill sizes="36px" className="object-cover" />
                  </span>
                  <span>
                    <p className={`font-serif text-lg ${active ? "text-[#B8873A]" : ""}`}>{p.name}</p>
                    <p className="text-xs text-[#221F1B]/50">{p.title}</p>
                  </span>
                </button>
              );
            })}
          </div>

          <ScrollReveal key={selectedPartner} className="flex items-center gap-5 bg-white/50 p-6 sm:p-8">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#B8873A]">
              <Image
                src={PARTNERS[selectedPartner].photo}
                alt={PARTNERS[selectedPartner].name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-2xl">{PARTNERS[selectedPartner].name}</p>
              <p className="text-sm text-[#B8873A]">{PARTNERS[selectedPartner].title} · {PARTNERS[selectedPartner].area}</p>
              <p className="mt-2 max-w-md text-sm text-[#221F1B]/60">{PARTNERS[selectedPartner].bio}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS — cuadrante 2x2 centrado, títulos en mayúsculas.
          Reemplaza tanto el zigzag largo original como el step-tracker
          vertical: el dueño pidió dos filas de dos, no una lista. */}
      <section className="mx-auto max-w-3xl px-6 py-10 text-center sm:px-10">
        <ScrollReveal className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#948A79]">El proceso</p>
          <h2 className="mt-1.5 font-serif text-3xl font-semibold sm:text-4xl">Cómo trabajamos</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROCESS.map((step, i) => (
            <ProcessCard key={step.n} n={step.n} title={step.title} body={step.body} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* EXPERIENCIA / CASOS — scroll horizontal, case studies */}
      <section id="experiencia" className="py-10">
        <ScrollReveal className="mx-auto max-w-7xl px-6 text-center sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#948A79]">Experiencia que habla por nosotros</p>
          <h2 className="mt-1.5 font-serif text-3xl font-semibold sm:text-4xl">Casos de ejemplo</h2>
        </ScrollReveal>

        <div ref={casesRef} className="mt-6 flex gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:px-10 [&::-webkit-scrollbar]:hidden">
          {CASES.map((c, i) => {
            const color = CASE_CATEGORY_COLOR[c.category] ?? "#D4A65E";
            return (
              <ScrollReveal key={c.n} delay={i * 0.04} className="relative w-[300px] shrink-0 overflow-hidden rounded-sm border border-black/10 bg-[#221F1B] p-6 text-[#EFEAE0] sm:w-[340px]">
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                    style={{ backgroundColor: `${color}26`, color, border: `1px solid ${color}66` }}
                  >
                    {c.category} · demo
                  </span>
                  <span className="font-serif text-sm text-white/30">{c.n}</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="border-l pl-2.5" style={{ borderColor: `${color}66` }}>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Problema</p>
                    <p className="text-sm text-white/90">{c.problem}</p>
                  </div>
                  <div className="border-l pl-2.5" style={{ borderColor: `${color}66` }}>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Enfoque</p>
                    <p className="text-sm text-white/90">{c.approach}</p>
                  </div>
                  <div className="border-l pl-2.5" style={{ borderColor: `${color}66` }}>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Resultado</p>
                    <p className="text-sm text-white/90">{c.result}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-2 flex justify-center gap-2">
          <button onClick={() => scrollBy(casesRef, -1)} aria-label="Anterior" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition hover:border-[#B8873A] hover:text-[#B8873A]">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scrollBy(casesRef, 1)} aria-label="Siguiente" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition hover:border-[#B8873A] hover:text-[#B8873A]">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* TESTIMONIOS — marquee, pausa al hover */}
      <section className="border-y border-black/10 bg-white/40 py-10">
        <ScrollReveal className="mx-auto mb-6 max-w-5xl px-6 text-center sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#948A79]">Lo que dicen</p>
          <h2 className="mt-1.5 font-serif text-3xl font-semibold sm:text-4xl">Testimonios</h2>
        </ScrollReveal>

        <div className="abogado-marquee-wrap relative overflow-hidden">
          <div className="abogado-marquee-track flex w-max gap-5 px-5">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="w-[300px] shrink-0 rounded-sm border border-black/10 bg-[#EFEAE0] p-6">
                <p className="font-serif text-lg leading-snug">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-xs text-[#221F1B]/50">{t.author} · {t.caso}</p>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F3EFE6] sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F3EFE6] sm:w-40" />
        </div>
        <style>{`
          .abogado-marquee-track { animation: abogado-marquee 34s linear infinite; }
          .abogado-marquee-wrap:hover .abogado-marquee-track { animation-play-state: paused; }
        `}</style>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-10 sm:px-10">
        <ScrollReveal className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#948A79]">Dudas comunes</p>
          <h2 className="mt-1.5 font-serif text-3xl font-semibold sm:text-4xl">Preguntas frecuentes</h2>
        </ScrollReveal>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {FAQ.map((item, i) => {
            const open = openFaq === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className={`text-sm font-medium sm:text-base ${open ? "text-[#B8873A]" : ""}`}>{item.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/15 text-black/40">
                    {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </span>
                </button>
                <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${open ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="pb-4 text-sm leading-relaxed text-[#221F1B]/60">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL — magnético */}
      <section className="bg-[#1B1A18] px-6 py-16 text-center text-[#EFEAE0] sm:px-10">
        <ScrollReveal className="mx-auto max-w-2xl">
          <p className="font-serif text-3xl font-semibold sm:text-4xl">
            Si tenés un problema, el siguiente paso es hablar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Magnetic intensity={0.35} range={110}>
              <Link
                href="/preview/abogado/agendar"
                className="inline-block rounded-sm bg-[#B8873A] px-8 py-3.5 text-sm font-semibold text-[#1B1A18] transition hover:bg-[#c99a4d]"
              >
                Agendar una consulta
              </Link>
            </Magnetic>
            <a
              href="https://wa.me/5493511234567"
              target="_blank"
              rel="noopener"
              className="rounded-sm border border-white/20 px-8 py-3.5 text-sm font-medium text-white/80 transition hover:border-[#B8873A] hover:text-[#B8873A]"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </section>

      <AbogadoFooter />
    </div>
  );
}
