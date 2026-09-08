"use client";

import Link from "next/link";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  MessageCircle,
  Plus,
  Minus,
  X,
  Zap,
  Snowflake,
  Moon,
  AlertTriangle,
  Flame,
  XCircle,
  Droplet,
  Wind,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";
import { TextRoll } from "@/components/TextRoll";
import { LiquidText } from "@/components/LiquidText";
import { FlippingCard } from "@/components/FlippingCard";
import { OdontologiaFooter } from "./OdontologiaFooter";
import { OdontologiaGallery } from "./OdontologiaGallery";
import { OdontologiaBooking } from "./OdontologiaBooking";
import {
  CLINIC,
  NAV_LINKS,
  SERVICES,
  PROBLEMS,
  TECHNOLOGY,
  TEAM,
  TESTIMONIALS,
  INSURANCE,
  FAQ,
} from "./content";

/**
 * Preview en vivo del template Odontología (rubro #3, "Cala Odontología").
 * Identidad propia: verde salvia/perla + Manrope, neumorfismo + glass —
 * distinta a piedra/bronce (Inmobiliaria) y marfil/dorado (Abogado). Ver el
 * mega prompt del dueño (7/9) para el detalle completo del pedido.
 */

const PROBLEM_ICONS = { Zap, Snowflake, Moon, AlertTriangle, Flame, XCircle, Droplet, Wind } as const;

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

function ChatBubbleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.4 1.05 4.57 2.77 6.18-.13 1.35-.53 2.42-1.16 3.28a.5.5 0 0 0 .5.79c1.8-.31 3.2-.95 4.24-1.65C9.4 19.86 10.66 20 12 20c5.52 0 10-4.03 10-9s-4.48-9-10-9Z" />
    </svg>
  );
}

export default function OdontologiaPreview() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [waTooltip, setWaTooltip] = useState(false);

  const problemsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const scrollBy = (ref: React.RefObject<HTMLDivElement | null>, dir: 1 | -1, amount = 300) => {
    ref.current?.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waGeneral = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent("Hola, quería consultar por un turno.")}`;

  return (
    <div className={`${manrope.className} min-h-screen bg-[#F2F1EC] text-[#20221F] antialiased`}>
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#F2F1EC]/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Odontología — contenido de ejemplo</span>
        <Link href="/templates/odontologia" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      {/* NAV */}
      <header
        className={`sticky top-[29px] z-40 transition-all duration-300 ${
          scrolled ? "odo-glass border-b border-[rgba(40,40,35,0.08)]" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/preview/odontologia" className="text-xl font-extrabold tracking-tight">
            {CLINIC.name}
          </Link>
          <nav className="hidden gap-7 text-sm font-medium sm:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="group relative py-1 text-[#20221F]/75 transition hover:text-[#20221F]">
                {l.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#46615A] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <a
            href="#reservar"
            className="odo-cta-refractive hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold sm:flex"
          >
            Reservar turno
          </a>
          <button
            onClick={() => setMobileNavOpen((v) => !v)}
            aria-label="Abrir menú"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(40,40,35,0.12)] sm:hidden"
          >
            {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {mobileNavOpen && (
          <div className="odo-glass border-t border-[rgba(40,40,35,0.08)] px-6 py-4 sm:hidden">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setMobileNavOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#reservar" onClick={() => setMobileNavOpen(false)} className="odo-cta-refractive inline-flex w-fit items-center gap-1.5 rounded-full px-5 py-2.5 font-semibold">
                Reservar turno
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO — editorial asimétrico, imagen cuadrada flotando con capas */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-14 pt-10 sm:px-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(40,40,35,0.1)] bg-[#FAFAF7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#46615A]">
            {CLINIC.tagline}
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-[3.9rem]">
            Tu sonrisa,
            <br />
            en manos <LiquidText>expertas.</LiquidText>
          </h1>
          <p className="mt-6 max-w-md text-lg text-[#5C6159]">
            Odontología integral con tecnología, precisión y una atención
            pensada para vos.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href="#reservar" className="odo-cta-refractive inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
              Reservar turno
            </a>
            <a href="#servicios" className="group flex items-center gap-1.5 text-sm font-semibold text-[#20221F]/75 transition hover:text-[#20221F]">
              Conocer tratamientos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="odo-raised relative aspect-[864/940] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/templates/odontologia/hero-sonrisa.webp"
              alt="Paciente sonriendo, enmarcada por manos con guantes formando un corazón"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>

          <div className="odo-glass absolute -bottom-6 -left-6 hidden max-w-[210px] rounded-2xl px-4 py-3.5 sm:block">
            <p className="text-sm font-bold">Atención personalizada</p>
            <p className="mt-0.5 text-xs text-[#5C6159]">Un plan pensado para tu boca, no una plantilla.</p>
          </div>

          <div className="odo-glass absolute -top-5 -right-4 hidden rounded-full px-4 py-2 text-xs font-bold text-[#46615A] sm:block">
            <TextRoll>+ de 12 años de experiencia</TextRoll>
          </div>
        </div>
      </section>

      {/* SERVICIOS — grid expandible */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">Lo que tratamos</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Servicios</h2>
        </ScrollReveal>

        <p className="mb-3 text-center text-xs text-[#5C6159] sm:hidden">Deslizá para ver los 8 servicios →</p>
        <div className="flex items-start gap-4 overflow-x-auto pb-3 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:items-stretch sm:overflow-visible sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((service, i) => {
            const open = expandedService === i;
            return (
              <ScrollReveal
                key={service.n}
                delay={(i % 4) * 0.05}
                className="w-[248px] shrink-0 sm:w-auto sm:shrink"
              >
                <button
                  onClick={() => setExpandedService(open ? null : i)}
                  aria-expanded={open}
                  className="odo-raised group block w-full overflow-hidden rounded-2xl text-left transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-bold text-[#46615A]">
                      {service.n}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold leading-tight">{service.title}</h3>
                      <ChevronDown className={`mt-0.5 h-4 w-4 shrink-0 text-[#5C6159] transition-transform ${open ? "rotate-180" : ""}`} />
                    </div>
                    <p className="mt-1.5 text-sm text-[#5C6159]">{service.teaser}</p>
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
                      <ul className="overflow-hidden text-sm text-[#20221F]/80">
                        {service.items.map((it) => (
                          <li key={it} className="border-t border-[rgba(40,40,35,0.08)] py-1.5 first:border-t-0">
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* MOTIVOS FRECUENTES — rail horizontal, icono + texto sobre hueco */}
      <section className="py-6">
        <ScrollReveal className="mx-auto max-w-7xl px-6 sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">¿Por qué consultan?</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Motivos frecuentes de consulta</h2>
        </ScrollReveal>
        <div className="relative mt-6">
          <div ref={problemsRef} className="flex gap-4 overflow-x-auto px-6 pb-3 [scrollbar-width:none] sm:px-10 [&::-webkit-scrollbar]:hidden">
            {PROBLEMS.map((p, i) => {
              const Icon = PROBLEM_ICONS[p.icon as keyof typeof PROBLEM_ICONS];
              return (
                <div key={p.label} className="odo-well flex w-[168px] shrink-0 flex-col items-start gap-3 rounded-2xl p-5">
                  <Icon className="h-5 w-5 text-[#46615A]" />
                  <p className="text-sm font-semibold leading-snug">{p.label}</p>
                </div>
              );
            })}
            <div key="cta" className="flex w-[168px] shrink-0 flex-col justify-center gap-2">
              <p className="text-sm text-[#5C6159]">¿Algo distinto?</p>
              <a href="#reservar" className="inline-flex items-center gap-1 text-sm font-bold text-[#46615A]">
                Contanos <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="odo-dock mt-3 hidden items-end justify-center gap-2 px-6 sm:flex sm:px-10">
            <button onClick={() => scrollBy(problemsRef, -1)} aria-label="Anterior" className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(40,40,35,0.12)] bg-[#FAFAF7] transition-colors hover:border-[#46615A] hover:text-[#46615A]">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scrollBy(problemsRef, 1)} aria-label="Siguiente" className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(40,40,35,0.12)] bg-[#FAFAF7] transition-colors hover:border-[#46615A] hover:text-[#46615A]">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* NÚMEROS — franja de contraste */}
      <section className="relative overflow-hidden bg-[#1B211F] px-6 py-12 text-[#F2F1EC] sm:px-10">
        <div
          aria-hidden
          className="odo-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-[0.06]"
          style={{ background: "linear-gradient(100deg, transparent, #8FB3A6, transparent)" }}
        />
        <ScrollReveal className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8">
          {[
            { v: "12", suffix: "+", l: "años de experiencia" },
            { v: "8", suffix: "", l: "especialidades" },
            { v: "3500", suffix: "+", l: "pacientes atendidos" },
            { v: "4.9", suffix: "/5", l: "valoración de pacientes" },
          ].map((r) => (
            <div key={r.l} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="text-4xl font-extrabold text-[#8FB3A6] sm:text-5xl">
                <CountUp value={r.v} suffix={r.suffix} duration={1000} />
              </span>
              <span className="mt-1 text-xs uppercase tracking-widest text-white/50">{r.l}</span>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* TECNOLOGÍA — feature carousel */}
      <section id="tecnologia" className="py-14">
        <ScrollReveal className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">El diferencial</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Tecnología que permite ver mejor. Y tratar mejor.
          </h2>
        </ScrollReveal>

        <div ref={techRef} className="mt-8 flex snap-x gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:px-10 [&::-webkit-scrollbar]:hidden">
          {TECHNOLOGY.map((slide, i) => (
            <ScrollReveal
              key={slide.n}
              delay={i * 0.04}
              className="odo-raised w-[290px] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[340px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE7E1]">
                {slide.img && (
                  <Image src={slide.img} alt={slide.title} fill sizes="340px" className="object-cover" />
                )}
                <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-bold text-[#46615A]">{slide.n}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">{slide.title}</h3>
                <p className="mt-1.5 text-sm text-[#5C6159]">{slide.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-2">
          <button onClick={() => scrollBy(techRef, -1, 340)} aria-label="Anterior" className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(40,40,35,0.12)] transition hover:border-[#46615A] hover:text-[#46615A]">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scrollBy(techRef, 1, 340)} aria-label="Siguiente" className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(40,40,35,0.12)] transition hover:border-[#46615A] hover:text-[#46615A]">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="mx-auto max-w-5xl px-6 py-14 sm:px-10">
        <ScrollReveal className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">Quiénes te atienden</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Personas detrás de cada tratamiento</h2>
        </ScrollReveal>
        <p className="mb-5 text-center text-xs text-[#5C6159] sm:hidden">Tocá una tarjeta para conocerlos.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.06} className="odo-raised h-96 overflow-hidden rounded-3xl">
              <FlippingCard
                frontContent={
                  <div className="relative h-full w-full">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20221F]/80 to-transparent p-5 pt-10">
                      <p className="text-lg font-extrabold text-white">{member.name}</p>
                      <p className="text-sm font-semibold text-[#C9DAD5]">{member.role}</p>
                    </div>
                  </div>
                }
                backContent={
                  <div className="flex h-full w-full flex-col justify-center bg-[#1B211F] p-7 text-[#F2F1EC]">
                    <p className="text-lg font-extrabold">{member.name}</p>
                    <p className="mt-1 text-sm font-semibold text-[#8FB3A6]">{member.role}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-white/40">{member.mp}</p>
                    <p className="mt-4 text-sm text-white/70">{member.bio}</p>
                  </div>
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ANTES / DESPUÉS */}
      <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">Resultados</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Resultados que se pueden ver.</h2>
            <p className="mt-4 max-w-md text-[#5C6159]">
              Cada boca es distinta, así que cada plan se arma en consulta —
              esto es una muestra de a qué apuntamos, no una promesa de
              resultado.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="odo-raised relative mx-auto aspect-[6/5] w-full max-w-sm overflow-hidden rounded-[2rem]">
            <Image
              src="/templates/odontologia/antes-despues.webp"
              alt="Sonrisa con efecto de hoja pelándose que revela dientes más blancos"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
            <span className="odo-glass absolute bottom-4 left-4 rounded-full px-3.5 py-1.5 text-xs font-bold">
              Imagen ilustrativa
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">Conocé el consultorio</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Galería</h2>
        </ScrollReveal>
        <OdontologiaGallery />
      </section>

      {/* TESTIMONIOS — marquee */}
      <section id="opiniones" className="border-y border-[rgba(40,40,35,0.08)] bg-[#F7F7F3] py-14">
        <ScrollReveal className="mx-auto mb-8 max-w-2xl px-6 text-center sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">Lo que dicen</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Opiniones</h2>
        </ScrollReveal>
        <div className="odo-marquee-wrap relative overflow-hidden">
          <div className="odo-marquee-track flex w-max gap-5 px-5">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="odo-raised w-[300px] shrink-0 rounded-2xl bg-[#FAFAF7] p-6">
                <p className="text-[15px] leading-snug">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-xs font-semibold text-[#5C6159]">{t.author} · paciente</p>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7F7F3] sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F7F7F3] sm:w-40" />
        </div>
      </section>

      {/* COBERTURAS — marquee */}
      <section className="py-10">
        <ScrollReveal className="mx-auto mb-5 max-w-2xl px-6 text-center sm:px-10">
          <p className="text-sm font-semibold text-[#5C6159]">Trabajamos con diferentes coberturas</p>
        </ScrollReveal>
        <div className="odo-marquee-wrap relative overflow-hidden">
          <div className="odo-marquee-track-slow flex w-max items-center gap-4 px-5">
            {[...INSURANCE, ...INSURANCE].map((name, i) => (
              <span key={i} className="odo-well shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-[#5C6159]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVAR TURNO */}
      <section id="reservar" className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">Último paso</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Reservá tu turno</h2>
            <p className="mt-4 max-w-md text-[#5C6159]">
              Contanos qué necesitás y te escribimos por WhatsApp para
              confirmar día y horario — no reservamos automáticamente.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <OdontologiaBooking />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-14 sm:px-10">
        <ScrollReveal className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">Dudas comunes</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Preguntas frecuentes</h2>
        </ScrollReveal>
        <div className="divide-y divide-[rgba(40,40,35,0.08)] border-y border-[rgba(40,40,35,0.08)]">
          {FAQ.map((item, i) => {
            const open = openFaq === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className={`text-sm font-semibold sm:text-base ${open ? "text-[#46615A]" : ""}`}>{item.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(40,40,35,0.15)] text-[#5C6159]">
                    {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </span>
                </button>
                <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${open ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="pb-4 text-sm leading-relaxed text-[#5C6159]">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#46615A]">Contacto</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">¿Dónde estamos?</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#46615A]" />
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-[#46615A]" />
                <span>{CLINIC.hours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#46615A]" />
                <a href={waGeneral} target="_blank" rel="noopener" className="hover:text-[#46615A]">
                  Escribir por WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bv.+Illia+240+Nueva+Cordoba"
                target="_blank"
                rel="noopener"
                className="rounded-full border border-[rgba(40,40,35,0.15)] px-5 py-2.5 text-sm font-semibold transition hover:border-[#46615A] hover:text-[#46615A]"
              >
                Cómo llegar
              </a>
              <a href={waGeneral} target="_blank" rel="noopener" className="odo-cta-refractive rounded-full px-5 py-2.5 text-sm font-semibold">
                Escribir por WhatsApp
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="odo-raised aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps?q=Nueva%20C%C3%B3rdoba%2C%20C%C3%B3rdoba%2C%20Argentina&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ubicación — ${CLINIC.nameFull}`}
              className="h-full w-full border-0"
            />
          </ScrollReveal>
        </div>
      </section>

      <OdontologiaFooter />

      {/* WHATSAPP FLOTANTE */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        {waTooltip && (
          <span className="odo-glass rounded-full px-3.5 py-2 text-xs font-semibold shadow-sm">¿Querés consultar?</span>
        )}
        <a
          href={waGeneral}
          target="_blank"
          rel="noopener"
          aria-label="Escribir por WhatsApp"
          onMouseEnter={() => setWaTooltip(true)}
          onMouseLeave={() => setWaTooltip(false)}
          className="odo-glass flex h-14 w-14 items-center justify-center rounded-full text-[#46615A] shadow-lg transition hover:scale-105"
        >
          <ChatBubbleIcon className="h-6 w-6" />
        </a>
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        .odo-glass {
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.7);
        }
        .odo-raised {
          background: #FAFAF7;
          border: 1px solid rgba(40,40,35,0.06);
          box-shadow: 10px 10px 26px rgba(40,40,35,0.09), -8px -8px 20px rgba(255,255,255,0.9);
        }
        .odo-well {
          background: #EBEAE3;
          box-shadow: inset 5px 5px 12px rgba(40,40,35,0.08), inset -5px -5px 12px rgba(255,255,255,0.75);
        }
        .odo-cta-refractive {
          position: relative;
          overflow: hidden;
          color: #20221F;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.95), rgba(216,231,225,0.65) 30%, rgba(210,224,235,0.55) 55%, rgba(226,220,235,0.45) 80%, rgba(255,255,255,0.9));
          border: 1px solid rgba(255,255,255,0.85);
          box-shadow: 0 8px 20px -8px rgba(70,97,90,0.35), inset 0 1px 0 rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .odo-cta-refractive:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 26px -8px rgba(70,97,90,0.45), inset 0 1px 0 rgba(255,255,255,0.9);
        }
        .odo-cta-refractive::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, transparent, rgba(255,255,255,0.8), transparent);
          transform: translateX(-120%);
          animation: odo-cta-shine 5s ease-in-out infinite;
        }
        @keyframes odo-cta-shine { 0%, 60% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        .odo-shine { animation: odo-shine-move 7s linear infinite; }
        @keyframes odo-shine-move { from { transform: translateX(0); } to { transform: translateX(300%); } }
        .odo-marquee-track { animation: odo-marquee 36s linear infinite; }
        .odo-marquee-track-slow { animation: odo-marquee 26s linear infinite; }
        .odo-marquee-wrap:hover .odo-marquee-track,
        .odo-marquee-wrap:hover .odo-marquee-track-slow { animation-play-state: paused; }
        @keyframes odo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .odo-hover-zoom-img { transition: transform 500ms ease; }
        .odo-hover-zoom:hover .odo-hover-zoom-img { transform: scale(1.06); }
        .odo-dock > button { transition: transform 220ms cubic-bezier(0.25,1,0.5,1); transform-origin: bottom center; }
        .odo-dock > button:hover { transform: scale(1.6) translateY(-6px); position: relative; z-index: 1; }
        .odo-dock > button:hover ~ button { transform: scale(1.25) translateY(-3px); }
        .odo-dock > button:has(~ button:hover) { transform: scale(1.25) translateY(-3px); }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .odo-cta-refractive::before { animation: none !important; display: none; }
          .odo-shine { animation: none !important; display: none; }
          .odo-marquee-track, .odo-marquee-track-slow { animation: none !important; }
          .odo-hover-zoom-img { transition: none !important; }
          .odo-dock > button { transition: none !important; }
        }
      `}</style>
    </div>
  );
}
