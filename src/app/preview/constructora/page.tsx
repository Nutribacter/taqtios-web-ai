"use client";

import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";
import { TextRoll } from "@/components/TextRoll";
import { LiquidText } from "@/components/LiquidText";
import { FlippingCard } from "@/components/FlippingCard";
import { ScrollVelocity } from "@/components/ScrollVelocity";
import { OnboardingStepper } from "@/components/OnboardingStepper";
import { ConstructoraFooter } from "./ConstructoraFooter";
import { ConstructoraBeforeAfter } from "./ConstructoraBeforeAfter";
import { ConstructoraVideoBento } from "./ConstructoraVideoBento";
import {
  COMPANY,
  NAV_LINKS,
  HERO_VIDEO,
  FEATURED_VIDEOS,
  PROJECTS,
  BEFORE_AFTER,
  NUMBERS,
  SERVICES,
  MATERIALS,
  PROCESS,
  TEAM,
  TESTIMONIAL,
  PROJECT_TYPES,
  type Project,
  type ServiceItem,
} from "./content";

/**
 * Preview en vivo del template Constructora (rubro #4, "NIVEL").
 * Identidad propia: negro mate + piedra + madera + vidrio ahumado, tipografía
 * enorme editorial y 4 videos (dron + interiores) como protagonistas —
 * distinta a piedra/bronce (Inmobiliaria), marfil/dorado (Abogado) y verde
 * salvia/perla (Odontología). Ver el mega prompt del dueño (8/9).
 */

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function ConstructoraPreview() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [submitted, setSubmitted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waGeneral = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent("Hola, quería consultar por un proyecto.")}`;

  return (
    <div className={`${jakarta.className} niv-root min-h-screen bg-[#11110F] text-[#F3F0E8] antialiased`}>
      <div className="niv-noise" aria-hidden="true" />

      <div className="relative z-10">
        <div className="sticky top-0 z-[60] flex items-center justify-between border-b border-white/10 bg-[#0c0c0a]/95 px-4 py-2 text-xs text-white/50 backdrop-blur">
          <span>Preview del template Constructora — contenido de ejemplo</span>
          <Link href="/templates/constructora" className="font-medium text-white/80 hover:text-white">
            ← Volver al template
          </Link>
        </div>

        {/* NAV */}
        <header
          className={`sticky top-[29px] z-50 transition-all duration-300 ${
            scrolled ? "niv-glass border-b border-white/[0.08]" : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
            <Link href="/preview/constructora" className="text-xl font-bold tracking-tight">
              {COMPANY.name}
            </Link>
            <nav className="hidden gap-8 text-sm font-medium sm:flex">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="group relative py-1 text-white/70 transition hover:text-white">
                  {l.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#D6D0C4] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>
            <a
              href="#contacto"
              className="hidden rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-white/50 sm:inline-flex"
            >
              Solicitar proyecto
            </a>
            <button
              type="button"
              className="text-white sm:hidden"
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {mobileNavOpen && (
            <div className="niv-glass border-t border-white/[0.08] px-6 py-4 sm:hidden">
              <nav className="flex flex-col gap-4 text-sm font-medium">
                {NAV_LINKS.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setMobileNavOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={() => setMobileNavOpen(false)}
                  className="rounded-full border border-white/20 px-5 py-2 text-center"
                >
                  Solicitar proyecto
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* HERO */}
        <section className="relative flex h-[100svh] min-h-[560px] items-end overflow-hidden bg-[#0b0b09]">
          {reducedMotion ? (
            <Image src={HERO_VIDEO.poster} alt="" fill priority sizes="100vw" className="object-cover" />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={HERO_VIDEO.poster}
              className="absolute inset-0 h-full w-full object-cover"
              src={HERO_VIDEO.src}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b09] via-[#0b0b09]/25 to-[#0b0b09]/10" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 sm:pb-24">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#D6D0C4]/80">
              <TextRoll loop={!reducedMotion}>ARQUITECTURA · CONSTRUCCIÓN · DESARROLLO</TextRoll>
            </p>
            <h1 className="text-[11.5vw] font-extrabold leading-[0.94] tracking-tight sm:text-[9vw] lg:text-[6.6vw]">
              <span className="block overflow-hidden">
                <span className="niv-line-inner block">CONSTRUIMOS</span>
              </span>
              <span className="block overflow-hidden">
                <span className="niv-line-inner block" style={{ animationDelay: "0.1s" }}>
                  LO QUE
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="niv-line-inner block" style={{ animationDelay: "0.2s" }}>
                  <LiquidText colors={["#8A6A4B", "#D6D0C4", "#ECE8DF", "#8A6A4B"]}>PERMANECE.</LiquidText>
                </span>
              </span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="niv-glass inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-white/50"
              >
                Ver proyectos <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#proceso" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white">
                Conocé nuestro proceso <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50">
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="proyectos" className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#D6D0C4]/70">Proyectos</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Obra construida y en marcha.</h2>
            </ScrollReveal>

            <div className="mt-14 flex flex-col divide-y divide-white/[0.08]">
              {PROJECTS.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 0.05}>
                  <ProjectRow project={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ANTES / DESPUÉS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <ScrollReveal className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#D6D0C4]/70">Transformación</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">De la obra al espacio habitado.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="mt-12">
              <ConstructoraBeforeAfter
                before={BEFORE_AFTER.before.src}
                after={BEFORE_AFTER.after.src}
                beforeLabel={BEFORE_AFTER.before.label}
                afterLabel={BEFORE_AFTER.after.label}
              />
              <p className="mt-4 text-center text-xs text-white/35">{BEFORE_AFTER.note}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* NÚMEROS */}
        <section className="border-t border-white/[0.06] py-10 sm:py-14">
          <div className="px-6 sm:px-10">
            <div className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-x-12 gap-y-6 sm:gap-x-16">
              {NUMBERS.map((n, i) => (
                <ScrollReveal key={n.label} delay={i * 0.05} className="shrink-0 text-center">
                  <p className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    <CountUp value={`${n.prefix ?? ""}${n.value}`} suffix={n.suffix ?? ""} />
                  </p>
                  <p className="mt-2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                    {n.label}
                  </p>
                </ScrollReveal>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-white/30">
              Cifras de ejemplo — se editan por las reales de tu empresa.
            </p>
          </div>

          <div className="mt-8 space-y-1 border-y border-white/[0.06] py-4">
            <ScrollVelocity
              texts={["NIVEL — ARQUITECTURA — CONSTRUCCIÓN —", "DESARROLLO — DIRECCIÓN DE OBRA — REFORMAS —"]}
              className="text-4xl font-extrabold uppercase tracking-tight text-[#F3F0E8]/15 sm:text-6xl"
            />
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#D6D0C4]/70">Servicios</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Todo el proceso, en un solo lugar.</h2>
            </ScrollReveal>
          </div>
          <div className="mt-14">
            {SERVICES.map((s) => (
              <ServiceRow key={s.n} service={s} />
            ))}
          </div>
        </section>

        {/* MATERIALES */}
        <section id="materiales" className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#D6D0C4]/70">Materia / Forma / Detalle</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Lo que se toca, importa.</h2>
            </ScrollReveal>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MATERIALS.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 0.05}>
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.1]">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg font-bold">{m.title}</h3>
                      <p className="mt-1 max-h-0 overflow-hidden text-xs text-white/60 opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO BENTO — ARCHITECTURE IN MOTION */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#D6D0C4]/70">Architecture / In Motion</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Obra. Materia. Espacio. Resultado.</h2>
            </ScrollReveal>
            <div className="mt-14">
              <ConstructoraVideoBento videos={FEATURED_VIDEOS} />
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section id="proceso" className="border-t border-white/[0.06] py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#D6D0C4]/70">Proceso</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Del primer trazo a la entrega.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="mt-6">
              <OnboardingStepper steps={PROCESS} />
            </ScrollReveal>
          </div>
        </section>

        {/* NOSOTROS / EQUIPO */}
        <section id="nosotros" className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#D6D0C4]/70">Nosotros</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
                Un equipo que sigue la obra de cerca, de punta a punta.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="relative mt-12 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image
                src="/templates/constructora/equipo-oficina.webp"
                alt="Oficina del estudio"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#11110F]/35" />
            </ScrollReveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.05}>
                  <div className="h-64">
                    <FlippingCard
                      frontContent={
                        <div className="niv-glass flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.12] p-6 text-center">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-lg font-bold text-[#D6D0C4]">
                            {initials(member.name)}
                          </span>
                          <p className="font-semibold">{member.name}</p>
                          <p className="text-xs text-white/50">{member.role}</p>
                        </div>
                      }
                      backContent={
                        <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.12] bg-[#181815] p-6 text-center">
                          <p className="text-sm text-white/70">{member.bio}</p>
                        </div>
                      }
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIO */}
        <section className="border-t border-white/[0.06] py-24 sm:py-32">
          <ScrollReveal className="mx-auto max-w-3xl px-6 text-center sm:px-10">
            <p className="text-2xl font-medium leading-snug tracking-tight sm:text-4xl">“{TESTIMONIAL.quote}”</p>
            <p className="mt-6 text-sm text-white/50">
              {TESTIMONIAL.author} — {TESTIMONIAL.project}
            </p>
            <p className="mt-1 text-xs text-white/30">Testimonio de ejemplo</p>
          </ScrollReveal>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/[0.06] py-28 sm:py-36">
          <Image
            src="/templates/constructora/proyecto-edificio-terminado.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/75 to-[#11110F]/50" />
          <ScrollReveal className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">
            <h2 className="text-5xl font-extrabold tracking-tight sm:text-7xl">¿TENÉS UN PROYECTO?</h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-white/60">
              Hablemos de cómo llevarlo del plano a la realidad.
            </p>
            <a
              href="#contacto"
              className="niv-glass mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold transition hover:border-white/50"
            >
              Iniciar proyecto <ArrowRight className="h-4 w-4" />
            </a>
          </ScrollReveal>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_1.2fr]">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#D6D0C4]/70">Contacto</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Contanos tu proyecto.</h2>
              <p className="mt-4 max-w-sm text-sm text-white/50">
                Completá el formulario o escribinos directo por WhatsApp — te respondemos a la brevedad.
              </p>
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener"
                className="niv-glass mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-white/50"
              >
                <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
              </a>
              <div className="mt-10 space-y-3 text-sm text-white/50">
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-[#8A6A4B]" /> {COMPANY.address}
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-[#8A6A4B]" /> {COMPANY.hours}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#8A6A4B]" /> {COMPANY.email}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="niv-glass rounded-2xl border border-white/[0.12] p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 text-center">
                  <p className="text-2xl font-bold">¡Gracias!</p>
                  <p className="text-sm text-white/60">Recibimos tu consulta. Te contactamos a la brevedad.</p>
                </div>
              ) : (
                <form
                  className="grid gap-4 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <Field label="Nombre" name="nombre" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="WhatsApp" name="whatsapp" />
                  <div>
                    <label htmlFor="tipo" className="block text-xs font-medium uppercase tracking-wide text-white/50">
                      Tipo de proyecto
                    </label>
                    <select
                      id="tipo"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="niv-input mt-2 w-full"
                    >
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Field label="Ubicación" name="ubicacion" className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <label htmlFor="mensaje" className="block text-xs font-medium uppercase tracking-wide text-white/50">
                      Mensaje
                    </label>
                    <textarea id="mensaje" name="mensaje" rows={4} className="niv-input mt-2 w-full" />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#ECE8DF] px-6 py-3 text-sm font-semibold text-[#11110F] transition hover:bg-white sm:col-span-2"
                  >
                    Enviar proyecto <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </section>

        <ConstructoraFooter />

        <a
          href={waGeneral}
          target="_blank"
          rel="noopener"
          aria-label="Hablar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      <style>{`
        .niv-noise {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.05;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        @keyframes niv-line-up {
          from { transform: translateY(110%); }
          to { transform: translateY(0); }
        }
        .niv-line-inner {
          animation: niv-line-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .niv-glass {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        .niv-row {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }
        .niv-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 0.5rem;
          padding: 0.65rem 0.9rem;
          color: #f3f0e8;
          outline: none;
          transition: border-color 0.2s;
        }
        .niv-input:focus {
          border-color: rgba(236, 232, 223, 0.6);
        }
        @media (prefers-reduced-motion: reduce) {
          .niv-line-inner {
            animation: none;
            transform: none;
          }
          .niv-noise {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <Link href={`/preview/constructora/proyecto/${project.slug}`} className="group block py-8 sm:py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:w-2/3">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, 66vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Explorar proyecto <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
        <div className="sm:w-1/3">
          <div className="flex items-baseline gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#D6D0C4]/60">
            <span>{project.id}</span>
            <span>{project.category}</span>
          </div>
          <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{project.name}</h3>
          <p className="mt-2 text-sm text-white/50">
            {project.location} · {project.area}
          </p>
          <p className="mt-1 text-sm text-white/40">
            {project.year} · {project.status}
          </p>
        </div>
      </div>
    </Link>
  );
}

function ServiceRow({ service }: { service: ServiceItem }) {
  return (
    <div className="group relative border-b border-white/[0.08]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <Image src={service.image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#11110F]/78" />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-10">
        <div className="flex items-baseline gap-5 sm:gap-6">
          <span className="text-sm font-medium text-[#D6D0C4]/50">{service.n}</span>
          <h3 className="text-2xl font-bold tracking-tight sm:text-4xl">{service.title}</h3>
        </div>
        <p className="max-w-xs text-sm text-white/50 sm:text-right">{service.description}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wide text-white/50">
        {label}
        {required && " *"}
      </label>
      <input id={name} name={name} type={type} required={required} className="niv-input mt-2 w-full" />
    </div>
  );
}
