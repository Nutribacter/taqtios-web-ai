"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

/**
 * Marquee de texto que acelera con la velocidad real de scroll — adaptado de
 * React Bits (@davidhdev, https://reactbits.dev/text-animations/scroll-velocity),
 * reimplementado a mano con `motion` (ya instalado — lo usan TextRoll y
 * ScrollReveal) en vez de sumar el paquete completo. Cada línea se repite las
 * veces necesarias para tapar el ancho del contenedor y loopear sin corte;
 * scrollear rápido acelera el desplazamiento, y scrollear para arriba invierte
 * el sentido de la fila.
 */
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function VelocityRow({
  text,
  baseVelocity,
  className,
}: {
  text: string;
  baseVelocity: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 70, stiffness: 300 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0.6], { clamp: true });

  const containerRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [copies, setCopies] = useState(4);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const span = spanRef.current;
    if (!container || !span) return;
    const textWidth = span.offsetWidth;
    if (textWidth > 0) setCopies(Math.ceil(container.offsetWidth / textWidth) + 2);
  }, [text]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / copies, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
      <motion.div className="inline-flex" style={{ x }}>
        {Array.from({ length: copies }).map((_, i) => (
          <span key={i} ref={i === 0 ? spanRef : undefined} className={`shrink-0 pr-8 ${className ?? ""}`}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ScrollVelocity({
  texts,
  velocity = 8,
  className,
}: {
  texts: string[];
  velocity?: number;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      {texts.map((text, i) => (
        <VelocityRow key={text} text={text} baseVelocity={i % 2 === 0 ? velocity : -velocity} className={className} />
      ))}
    </div>
  );
}

export default ScrollVelocity;
