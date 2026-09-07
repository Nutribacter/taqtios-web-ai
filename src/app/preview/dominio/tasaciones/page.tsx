"use client";

import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DominioFooter } from "../DominioFooter";

/**
 * Formulario de tasación del template Dominio — misma estética editorial
 * que el resto (off-white/piedra, serif para títulos, acento bronce). Es un
 * demo: el submit no pega a ningún backend, solo confirma en pantalla.
 */
export default function TasacionesPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F3EE] font-sans text-[#1C1A16] antialiased">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#F5F3EE]/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Dominio — formulario de tasación de ejemplo</span>
        <Link href="/templates/dominio" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      <header className="border-b border-black/5 bg-[#F5F3EE]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/preview/dominio" className="font-serif text-xl tracking-tight">
            Dominio
          </Link>
          <Link href="/preview/dominio" className="text-sm text-black/60 transition hover:text-black">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:py-20">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">Tasaciones</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            ¿Cuánto vale tu propiedad?
          </h1>
          <p className="mt-4 max-w-sm text-black/60">
            Un tasador matriculado la evalúa con comparables reales de la
            zona y te entregamos un informe simple, sin compromiso.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-black/60">
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#8A6A3F]" /> Respuesta en menos de 24 horas hábiles
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#8A6A3F]" /> Informe con comparables reales de mercado
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#8A6A3F]" /> Sin costo y sin compromiso de publicar
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
          {sent ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <p className="font-serif text-2xl">¡Listo!</p>
              <p className="mt-2 max-w-xs text-sm text-black/60">
                Recibimos tu solicitud. Te vamos a contactar a la brevedad
                para coordinar la tasación.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-medium text-[#8A6A3F] transition hover:text-[#6d5330]"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <Field label="Nombre y apellido" className="sm:col-span-2">
                <input required type="text" name="nombre" placeholder="Ej: María Fernández" className={inputCls} />
              </Field>
              <Field label="WhatsApp">
                <input required type="tel" name="whatsapp" placeholder="351 000-0000" className={inputCls} />
              </Field>
              <Field label="Email">
                <input required type="email" name="email" placeholder="vos@mail.com" className={inputCls} />
              </Field>
              <Field label="Tipo de propiedad">
                <select required name="tipo" defaultValue="" className={inputCls}>
                  <option value="" disabled>Elegí una opción</option>
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>Chalet</option>
                  <option>Terreno</option>
                  <option>Local u oficina</option>
                </select>
              </Field>
              <Field label="Tipo de operación">
                <select required name="operacion" defaultValue="" className={inputCls}>
                  <option value="" disabled>Elegí una opción</option>
                  <option>Venta</option>
                  <option>Alquiler</option>
                  <option>Todavía no sé</option>
                </select>
              </Field>
              <Field label="Ubicación" className="sm:col-span-2">
                <input required type="text" name="ubicacion" placeholder="Barrio y ciudad" className={inputCls} />
              </Field>
              <Field label="Mensaje (opcional)" className="sm:col-span-2">
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Contanos algo más sobre la propiedad"
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="mt-2 h-12 rounded-lg bg-[#1C1A16] text-sm font-medium text-white transition hover:bg-black sm:col-span-2"
              >
                Solicitar tasación
              </button>
              <p className="text-xs text-black/40 sm:col-span-2">
                Al enviar aceptás que te contactemos para coordinar la
                tasación. No compartimos tus datos con terceros.
              </p>
            </form>
          )}
        </ScrollReveal>
      </section>

      <DominioFooter />
    </div>
  );
}

const inputCls =
  "h-11 w-full rounded-lg border border-black/10 bg-[#F5F3EE]/60 px-3 text-sm text-black/80 outline-none transition focus:border-[#8A6A3F] focus:bg-white";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-xs font-medium uppercase tracking-wide text-black/40 ${className}`}>
      {label}
      <div className="mt-1.5 normal-case tracking-normal">{children}</div>
    </label>
  );
}
