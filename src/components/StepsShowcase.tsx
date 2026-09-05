"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollReveal } from "@/components/ScrollReveal";

const STEP_ICONS = {
  choose: (
    <path d="M9 3 4 8.5 9 14M4 8.5h11a5 5 0 0 1 5 5V16" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  copy: (
    <path d="M8 8V4.8A1.8 1.8 0 0 1 9.8 3h6.4A1.8 1.8 0 0 1 18 4.8v6.4a1.8 1.8 0 0 1-1.8 1.8H13M4.8 8h6.4A1.8 1.8 0 0 1 13 9.8v6.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 16.2V9.8A1.8 1.8 0 0 1 4.8 8Z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  paste: (
    <path d="M7 3.5h6l1 2h2A1.5 1.5 0 0 1 17.5 7v10A1.5 1.5 0 0 1 16 18.5H6A1.5 1.5 0 0 1 4.5 17V7A1.5 1.5 0 0 1 6 5.5h2l-1-2ZM8 11h6M8 14.5h4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  wand: (
    <path d="m5 17 9-9M14.5 3.5 16 5M17 8l1.5 1.5M3.5 12.5 5 14M3 3l1.2 1.2M17.8 15.8 19 17" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
} as const;

const STEPS = [
  { n: "01", icon: "choose", title: "Elegí", body: "Encontrá el diseño que se parece a lo que querés construir." },
  { n: "02", icon: "copy", title: "Copiá", body: "El Prompt Maestro: el brief completo, listo para pegar." },
  { n: "03", icon: "paste", title: "Pegá", body: "En Claude, Qwen, Lovable, Cursor o Gemini — tu herramienta." },
  { n: "04", icon: "wand", title: "Personalizá", body: "Branding, copy y SEO — con tu marca y tu contenido." },
] as const;

const CORNERS = ["tl", "tr", "br", "bl"] as const;
const DWELL_MS = 2400;
const CORNER_SIZE = 20;
const GAP = 6;

export function StepsShowcase() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cornerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const moveTo = (index: number, animate: boolean) => {
      const card = cardRefs.current[index];
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();
      const x = rect.left - parentRect.left;
      const y = rect.top - parentRect.top;
      const w = rect.width;
      const h = rect.height;

      const positions = [
        { x: x - GAP, y: y - GAP },
        { x: x + w + GAP - CORNER_SIZE, y: y - GAP },
        { x: x + w + GAP - CORNER_SIZE, y: y + h + GAP - CORNER_SIZE },
        { x: x - GAP, y: y + h + GAP - CORNER_SIZE },
      ];

      cornerRefs.current.forEach((corner, i) => {
        if (!corner) return;
        if (animate) {
          gsap.to(corner, { ...positions[i], duration: 0.7, ease: "power3.inOut" });
        } else {
          gsap.set(corner, positions[i]);
        }
      });

      setActive(index);
    };

    moveTo(0, false);
    if (reduceMotion) return;

    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % STEPS.length;
      moveTo(i, true);
    }, DWELL_MS);

    const onResize = () => moveTo(i, false);
    window.addEventListener("resize", onResize);

    return () => {
      clearInterval(id);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={gridRef} className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="pointer-events-none absolute inset-0 z-20 hidden sm:block" aria-hidden>
        {CORNERS.map((corner, i) => (
          <div
            key={corner}
            ref={(el) => {
              cornerRefs.current[i] = el;
            }}
            className={`step-target-corner step-target-corner-${corner}`}
          />
        ))}
      </div>

      {STEPS.map((s, i) => (
        <ScrollReveal key={s.n} delay={i * 0.1} className="relative">
          {i < STEPS.length - 1 && (
            <svg
              className="pointer-events-none absolute top-9 -right-3 hidden w-6 text-muted-foreground/40 lg:block"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M4 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          <div
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`glass-liquid h-full rounded-2xl p-6 transition-transform duration-500 ${active === i ? "step-card-active" : ""}`}
          >
            <div className="flex items-center gap-3">
              <div className="glass-tint grid h-12 w-12 shrink-0 place-items-center rounded-full text-primary">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor">
                  {STEP_ICONS[s.icon]}
                </svg>
              </div>
              <div>
                <span className="block font-heading text-xs font-bold text-muted-foreground/60">
                  {s.n}
                </span>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide">
                  {s.title}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{s.body}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
