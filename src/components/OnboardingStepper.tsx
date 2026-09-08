"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type StepperStep = { n: string; title: string; description: string };

/**
 * Selector de pasos animado — inspirado en el Onboarding Dialog de 21st.dev
 * (@patrick-xin, https://21st.dev/@patrick-xin/components/onboarding-dialog):
 * un paso a la vez, con transición deslizante y puntos de progreso, en vez
 * de un dialog modal — acá no hace falta el overlay, es la MISMA mecánica de
 * "un paso a la vez" aplicada in-line a un proceso de varios pasos.
 * Reimplementado con `motion` (ya instalado por otros componentes), sin
 * sumar dependencia nueva.
 *
 * Avanza solo cada 5s (se pausa al pasar el mouse o al tocar) y también se
 * puede navegar a mano con las flechas o los puntos — nunca queda estático.
 */
export function OnboardingStepper({ steps, className = "" }: { steps: StepperStep[]; className?: string }) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const go = (newIndex: number) => {
    const dir = newIndex > index ? 1 : -1;
    setIndex([((newIndex % steps.length) + steps.length) % steps.length, dir]);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(index + 1), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused]);

  const step = steps[index];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <div
      className={`niv-glass relative overflow-hidden rounded-2xl border border-white/[0.12] p-5 sm:p-6 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-white/40">
          {String(index + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </span>
        <div className="flex gap-1.5">
          <button
            type="button"
            aria-label="Paso anterior"
            onClick={() => go(index - 1)}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            aria-label="Paso siguiente"
            onClick={() => go(index + 1)}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="relative mt-3 min-h-[64px] overflow-hidden sm:min-h-[52px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xl font-bold uppercase tracking-tight sm:text-2xl">{step.title}</h3>
            <p className="mt-1.5 max-w-lg text-sm text-white/55">{step.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {steps.map((s, i) => (
          <button
            key={s.n}
            type="button"
            aria-label={`Ir al paso ${i + 1}: ${s.title}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-[#ECE8DF]" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
