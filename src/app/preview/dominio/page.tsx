"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import {
  House,
  KeyRound,
  CalendarDays,
  Calculator,
  Plus,
  Minus,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PROPERTIES, type Operation } from "./properties";
import { DominioFooter } from "./DominioFooter";

/**
 * Preview en vivo del template Dominio (Inmobiliaria / Editorial / Premium /
 * Marketplace). A diferencia de los otros 19 templates (fotos simuladas con
 * divs de color), este usa fotografía real: es el flagship inmobiliario y la
 * fotografía es parte de lo que vende. Mundo visual propio: off-white/piedra,
 * negro suave, un acento discreto (bronce apagado) — separado de los tokens
 * de TAQTios Web AI y de los otros templates.
 *
 * Ronda de polish (2ª pasada): tabs de operación con indicador animado,
 * spacing más compacto, servicios sin acordeón (franja visual), FAQ como
 * único acordeón de la página, footer con contacto + redes, y la ficha de
 * propiedad ahora abre en Lightbox fullscreen (ver PropertyGallery.tsx).
 */

const NAV_LINKS = [
  { label: "Propiedades", href: "#propiedades" },
  { label: "Temporarios", href: "#temporarios" },
  { label: "Preguntas", href: "#faq" },
];

const OPERATIONS: { key: Operation; label: string; icon: typeof House }[] = [
  { key: "Venta", label: "Venta", icon: House },
  { key: "Alquiler", label: "Alquiler", icon: KeyRound },
  { key: "Temporario", label: "Temporario", icon: CalendarDays },
];

const UBICACIONES = ["Cualquier zona", "Cerro de las Rosas", "Nueva Córdoba", "Mendiolaza", "Güemes", "Villa Allende"];
const TIPOS = ["Cualquier tipo", "Casa", "Departamento", "Chalet", "Loft", "Terreno"];
const PRECIOS = ["Cualquier precio", "Hasta USD 150.000", "USD 150.000 – 350.000", "Más de USD 350.000"];
const AMBIENTES = ["Ambientes", "1", "2", "3", "4+"];

const SERVICIOS = [
  { icon: House, title: "Comprar", body: "Te acompañamos de la visita a la escritura." },
  { icon: KeyRound, title: "Alquilar", body: "Catálogo verificado, contrato claro." },
  { icon: CalendarDays, title: "Temporarios", body: "Check-in autónomo, limpieza incluida." },
  { icon: Calculator, title: "Tasaciones", body: "Comparables reales, informe simple." },
  { icon: House, title: "Administración", body: "Gestionamos tu renta sin que te ocupes." },
];

const FAQ = [
  {
    q: "¿Qué necesito para alquilar una propiedad con Dominio?",
    a: "Ingresos comprobables (recibo de sueldo con antigüedad o monotributo/certificación contable) y una garantía — propietaria, garante con recibo de sueldo o seguro de caución certificado. Nuestro equipo valida todo rápido para llegar a la firma sin vueltas.",
  },
  {
    q: "¿Cómo tasan y publican mi propiedad?",
    a: "Pedís la tasación sin costo desde el formulario o por WhatsApp. Un tasador matriculado la evalúa con comparables reales de la zona, y coordinamos fotografía profesional y difusión en los portales principales.",
  },
  {
    q: "¿Cómo funciona la reserva de un temporario?",
    a: "Se reserva por transferencia o pago seguro. El saldo y el depósito en garantía se abonan en el check-in. Todas las unidades están amobladas y equipadas, con wifi de alta velocidad y expensas incluidas.",
  },
  {
    q: "¿Qué costos tiene una compraventa?",
    a: "Los honorarios inmobiliarios de ley, los gastos de escribanía (estudio de títulos, certificados y escritura) y los impuestos que correspondan según tu condición fiscal. Te acompañamos en cada etapa.",
  },
  {
    q: "¿Qué incluye la administración de alquileres?",
    a: "Selección de inquilinos, cobro y liquidación mensual puntual, control de pago de servicios e impuestos, reajustes automáticos según contrato y coordinación de mantenimiento preventivo.",
  },
  {
    q: "¿Puedo pedir una visita antes de decidir?",
    a: "Sí. Coordinamos una visita presencial o, si estás en otra ciudad, una videollamada recorriendo la propiedad en vivo.",
  },
  {
    q: "¿Trabajan con propiedades fuera de Córdoba capital?",
    a: "Sí, también en las sierras y localidades cercanas — Mendiolaza, Villa Allende y alrededores.",
  },
];

const GALERIA = [
  { src: "/templates/inmobiliaria/hero-villa.webp", alt: "Villa con pileta infinita de noche", span: "col-span-2 row-span-2" },
  { src: "/templates/inmobiliaria/cocina-oscura.webp", alt: "Cocina en madera oscura con isla", span: "col-span-1 row-span-1" },
  { src: "/templates/inmobiliaria/dormitorio-rojo.webp", alt: "Dormitorio con detalles en rojo", span: "col-span-1 row-span-2" },
  { src: "/templates/inmobiliaria/fachada-ibiza.webp", alt: "Fachada minimalista blanca", span: "col-span-1 row-span-1" },
  { src: "/templates/inmobiliaria/alquiler-1.webp", alt: "Living comedor integrado a la cocina", span: "col-span-1 row-span-1" },
  { src: "/templates/inmobiliaria/fachada-bosque.webp", alt: "Fachada de piedra y madera entre pinos", span: "col-span-2 row-span-1" },
];

export default function DominioPreview() {
  const [operation, setOperation] = useState<Operation>("Venta");
  const [openFaq, setOpenFaq] = useState(0);

  const featured = PROPERTIES.filter((p) => p.operation === operation).slice(0, 4);
  const list = featured.length ? featured : PROPERTIES.slice(0, 4);
  const [hero, ...secondary] = list;
  const temporario = PROPERTIES.find((p) => p.operation === "Temporario") ?? PROPERTIES[3];

  return (
    <div className="min-h-screen bg-[#F5F3EE] font-sans text-[#1C1A16] antialiased">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#F5F3EE]/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Dominio — contenido de ejemplo</span>
        <Link href="/templates/dominio" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      {/* NAV */}
      <header className="sticky top-[29px] z-40 border-b border-black/5 bg-[#F5F3EE]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:px-10">
          <span className="font-serif text-xl tracking-tight">Dominio</span>
          <nav className="hidden gap-8 text-sm text-black/60 lg:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="transition hover:text-black">
                {l.label}
              </a>
            ))}
            <Link href="/preview/dominio/tasaciones" className="transition hover:text-black">
              Tasaciones
            </Link>
          </nav>
          <a
            href="#contacto"
            className="rounded-full border border-black/15 px-5 py-2 text-sm font-medium transition hover:border-[#8A6A3F] hover:text-[#8A6A3F]"
          >
            Hablar con un asesor
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[82vh] min-h-[520px] overflow-hidden">
        <div className="absolute inset-0" style={{ animation: "dominio-breathe 12s ease-in-out infinite" }}>
          <Image
            src="/templates/inmobiliaria/hero-villa.webp"
            alt="Villa con pileta infinita, fachada de noche"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 sm:px-10">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
              Córdoba · Sierras y ciudad
            </p>
            <h1 className="mt-3 font-serif text-[15vw] leading-[0.9] text-white sm:text-[9vw] lg:text-[7.5rem]">
              Real Estate
            </h1>
            <p className="mt-4 max-w-md text-lg text-white/85">
              Encontrá un lugar que se sienta como hogar.
            </p>
          </ScrollReveal>
        </div>

        <style>{`@keyframes dominio-breathe { 0%,100% { transform:scale(1); } 50% { transform:scale(1.035); } } @media (prefers-reduced-motion: reduce) { [style*="dominio-breathe"] { animation: none !important; } }`}</style>
      </section>

      {/* BUSCADOR — única zona con glassmorphism */}
      <div className="relative z-20 mx-auto -mt-14 max-w-5xl px-6 sm:px-10">
        <ScrollReveal
          className="rounded-2xl border border-white/40 bg-white/70 p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6"
        >
          {/* Tabs de operación — indicador animado */}
          <div className="flex flex-wrap gap-1.5">
            {OPERATIONS.map((op) => {
              const Icon = op.icon;
              const active = operation === op.key;
              return (
                <button
                  key={op.key}
                  onClick={() => setOperation(op.key)}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-black/55 hover:text-black"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="dominio-op-pill"
                      className="absolute inset-0 rounded-full bg-[#1C1A16]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className="relative h-3.5 w-3.5" />
                  <span className="relative">{op.label}</span>
                </button>
              );
            })}
            <Link
              href="/preview/dominio/tasaciones"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-black/55 transition hover:bg-black/5 hover:text-black"
            >
              <Calculator className="h-3.5 w-3.5" />
              Tasaciones
            </Link>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[UBICACIONES, TIPOS, PRECIOS, AMBIENTES].map((options, i) => (
              <select
                key={i}
                className="h-11 rounded-lg border border-black/10 bg-white/80 px-3 text-sm text-black/80 outline-none transition focus:border-[#8A6A3F]"
                defaultValue={options[0]}
              >
                {options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ))}
          </div>

          <a
            href="#propiedades"
            className="mt-3 flex h-11 w-full items-center justify-center rounded-lg bg-[#8A6A3F] text-sm font-semibold text-white transition hover:bg-[#755a34] sm:w-auto sm:px-8"
          >
            Buscar propiedades
          </a>
        </ScrollReveal>
      </div>

      {/* PROPIEDADES DESTACADAS — bento asimétrico */}
      <section id="propiedades" className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-10">
        <ScrollReveal className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">Curaduría propia</p>
            <h2 className="mt-1.5 font-serif text-3xl sm:text-4xl">Propiedades seleccionadas</h2>
          </div>
          <span className="hidden text-sm text-black/50 sm:block">{operation} · {list.length} resultados</span>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {hero && <PropertyCard property={hero} className="lg:col-span-2 lg:row-span-2" big />}
          {secondary.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </section>

      {/* GALERÍA EDITORIAL */}
      <section className="border-t border-black/5 bg-white/50 px-6 py-16 sm:px-10">
        <ScrollReveal className="mx-auto mb-6 max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">Portafolio</p>
          <h2 className="mt-1.5 font-serif text-3xl sm:text-4xl">Espacios que hablan solos</h2>
        </ScrollReveal>
        <div className="mx-auto grid max-w-7xl auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4">
          {GALERIA.map((g) => (
            <div key={g.src} className={`group relative overflow-hidden rounded-lg ${g.span}`}>
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS — franja visual compacta, sin acordeón */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <ScrollReveal className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">Lo que hacemos</p>
          <h2 className="mt-1.5 font-serif text-3xl sm:text-4xl">Servicios</h2>
        </ScrollReveal>
        <ScrollReveal
          delay={0.05}
          className="grid grid-cols-1 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white sm:grid-cols-5 sm:divide-x sm:divide-y-0"
        >
          {SERVICIOS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex flex-col gap-2 p-5">
                <Icon className="h-5 w-5 text-[#8A6A3F]" />
                <p className="font-serif text-lg">{s.title}</p>
                <p className="text-sm text-black/55">{s.body}</p>
              </div>
            );
          })}
        </ScrollReveal>
      </section>

      {/* TEMPORARIOS */}
      <section id="temporarios" className="border-t border-black/5 bg-white/50 px-6 py-16 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={temporario.cover}
              alt={temporario.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">Estadías cortas</p>
            <h2 className="mt-1.5 font-serif text-3xl sm:text-4xl">Encontrá tu próximo temporario</h2>
            <p className="mt-3 max-w-md text-black/60">
              {temporario.title} · {temporario.location}. Disponible por noche o semana, con check-in autónomo.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl border border-black/10 bg-white p-4">
              <label className="col-span-2 text-xs uppercase tracking-wide text-black/40 sm:col-span-1">
                Llegada
                <input type="date" className="mt-1 h-11 w-full rounded-lg border border-black/10 px-3 text-sm" />
              </label>
              <label className="col-span-2 text-xs uppercase tracking-wide text-black/40 sm:col-span-1">
                Salida
                <input type="date" className="mt-1 h-11 w-full rounded-lg border border-black/10 px-3 text-sm" />
              </label>
              <label className="col-span-2 text-xs uppercase tracking-wide text-black/40">
                Huéspedes
                <select className="mt-1 h-11 w-full rounded-lg border border-black/10 px-3 text-sm" defaultValue="2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n} huésped{n > 1 ? "es" : ""}</option>
                  ))}
                </select>
              </label>
              <Link
                href={`/preview/dominio/propiedad/${temporario.slug}`}
                className="col-span-2 mt-1 flex h-11 items-center justify-center rounded-lg bg-[#1C1A16] text-sm font-medium text-white transition hover:bg-black"
              >
                Ver disponibilidad — {temporario.price}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECCIÓN DE MARCA */}
      <section className="relative overflow-hidden bg-[#1C1A16] px-6 py-24 text-white sm:px-10">
        <div className="absolute inset-0 opacity-25">
          <Image src="/templates/inmobiliaria/fachada-bosque.webp" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A16] via-[#1C1A16]/80 to-[#1C1A16]/40" />
        <ScrollReveal className="relative mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl leading-[1.05] sm:text-6xl">
            No vendemos
            <br />
            solo propiedades.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/70">
            Encontramos espacios que encajan con la forma en que querés vivir —
            no la que más rápido se vende.
          </p>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <ScrollReveal className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">Dudas comunes</p>
          <h2 className="mt-1.5 font-serif text-3xl sm:text-4xl">Preguntas frecuentes</h2>
        </ScrollReveal>
        <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {FAQ.map((item, i) => {
            const open = openFaq === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className={`text-sm font-medium sm:text-base ${open ? "text-[#8A6A3F]" : ""}`}>
                    {item.q}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                      open ? "rotate-180 border-[#8A6A3F] text-[#8A6A3F]" : "border-black/15 text-black/40"
                    }`}
                  >
                    {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-4 text-sm leading-relaxed text-black/60">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
        <ScrollReveal>
          <p className="font-serif text-3xl sm:text-4xl">¿Buscás o querés tasar tu propiedad?</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-[#1C1A16] px-8 py-3 text-sm font-medium text-white transition hover:bg-black">
              Hablar con un asesor
            </button>
            <Link
              href="/preview/dominio/tasaciones"
              className="rounded-full border border-black/15 px-8 py-3 text-sm font-medium transition hover:border-[#8A6A3F] hover:text-[#8A6A3F]"
            >
              Pedir una tasación
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <DominioFooter />
    </div>
  );
}

function PropertyCard({
  property,
  className = "",
  big = false,
}: {
  property: (typeof PROPERTIES)[number];
  className?: string;
  big?: boolean;
}) {
  return (
    <Link
      href={`/preview/dominio/propiedad/${property.slug}`}
      className={`group relative block overflow-hidden rounded-2xl ${big ? "min-h-[320px]" : "min-h-[210px]"} ${className}`}
    >
      <Image
        src={property.cover}
        alt={property.title}
        fill
        sizes={big ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
        <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide backdrop-blur">
          {property.operation}
        </span>
        <h3 className={`mt-3 font-serif ${big ? "text-2xl sm:text-3xl" : "text-xl"}`}>{property.title}</h3>
        <p className="mt-1 text-sm text-white/70">{property.location}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/80">
          <span>{property.bedrooms} amb.</span>
          <span>{property.area} m²</span>
          <span className="font-medium text-white">{property.price}</span>
        </div>
      </div>
    </Link>
  );
}
