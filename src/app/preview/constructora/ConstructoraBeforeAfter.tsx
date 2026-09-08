"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

/**
 * Comparador "obra en proceso → terminado" con divisor arrastrable.
 * Implementación propia (no es el Spatial Product Showcase de 21st.dev,
 * solo se inspira en la idea de comparar dos estados) — un slider de
 * pointer events + clip-path, sin dependencias nuevas. Accesible por
 * teclado (flechas) además de mouse/touch.
 */
export function ConstructoraBeforeAfter({
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-2xl border border-white/[0.12]"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <Image src={after} alt={afterLabel} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={beforeLabel} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `${pos}%` }}>
        <div className="h-full w-px bg-[#ECE8DF]/80" />
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#11110F]/70 backdrop-blur-md">
          <ArrowsIcon className="h-4 w-4 text-[#ECE8DF]" />
        </div>
      </div>

      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-medium tracking-wide text-[#ECE8DF] backdrop-blur-md">
        {beforeLabel}
      </span>
      <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-medium tracking-wide text-[#ECE8DF] backdrop-blur-md">
        {afterLabel}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Comparar ${beforeLabel} y ${afterLabel}`}
        className="absolute inset-x-0 bottom-3 z-10 mx-auto w-40 opacity-0 focus-visible:opacity-100 sm:w-56"
      />
    </div>
  );
}

function ArrowsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 7 4 12l4 5M16 7l4 5-4 5" />
    </svg>
  );
}
