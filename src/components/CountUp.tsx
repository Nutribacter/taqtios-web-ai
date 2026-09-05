"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Contador que anima desde 0 hasta el valor real al entrar en viewport, una
 * sola vez. Usado en los previews de templates para las métricas/specs —
 * varios prompts de "Animaciones" de los templates lo piden explícitamente
 * (Nova AI, Ledger, Torque, Orbit) y no estaba implementado, solo descripto.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 800,
  className,
}: {
  /** Valor final. Si no es puramente numérico (ej. "24/7"), se muestra tal cual sin animar. */
  value: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const numeric = parseFloat(value.replace(",", "."));
  const isPlainNumber = !Number.isNaN(numeric) && /^[\d.,]+$/.test(value);

  useEffect(() => {
    if (!isPlainNumber || !ref.current) return;
    const el = ref.current;
    const hasComma = value.includes(",");
    const decimals = value.split(/[.,]/)[1]?.length ?? 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const current = numeric * progress;
          const formatted = current.toFixed(decimals).replace(hasComma ? "." : "\0", ",");
          setDisplay(formatted);
          if (progress < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isPlainNumber, numeric, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
