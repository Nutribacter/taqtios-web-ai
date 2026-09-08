"use client";

import { useEffect, useState } from "react";
import { motion, type Transition } from "motion/react";

/**
 * Efecto "text roll" adaptado de 21st.dev (@ibelick/text-roll,
 * https://21st.dev/@ibelick/components/text-roll): cada letra se arma con
 * dos copias superpuestas que rotan en el eje X como una cartelera
 * split-flap — la vieja gira hacia adentro mientras la nueva gira hacia
 * afuera. Recorreado a mano (sin instalar el paquete): mismo mecanismo,
 * clases propias.
 *
 * `loop`: por defecto se repite cada `loopInterval` ms (remontando el
 * bloque con una `key` nueva) — de una sola pasada al cargar la página
 * casi nadie llega a verlo.
 */
export function TextRoll({
  children,
  duration = 0.5,
  getEnterDelay = (i: number) => i * 0.05,
  getExitDelay = (i: number) => i * 0.05 + 0.2,
  className,
  transition = { ease: "easeIn" },
  loop = true,
  loopInterval = 4000,
}: {
  children: string;
  duration?: number;
  getEnterDelay?: (index: number) => number;
  getExitDelay?: (index: number) => number;
  className?: string;
  transition?: Transition;
  loop?: boolean;
  loopInterval?: number;
}) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!loop) return;
    const id = setInterval(() => setCycle((c) => c + 1), loopInterval);
    return () => clearInterval(id);
  }, [loop, loopInterval]);

  const letters = children.split("");

  return (
    <span className={className} key={cycle}>
      {letters.map((letter, i) => (
        <span
          key={i}
          className="relative inline-block [perspective:1000px] [transform-style:preserve-3d]"
          aria-hidden="true"
        >
          <motion.span
            className="absolute inline-block [backface-visibility:hidden] [transform-origin:50%_25%]"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: 90 }}
            transition={{ ...transition, duration, delay: getEnterDelay(i) }}
          >
            {letter === " " ? " " : letter}
          </motion.span>
          <motion.span
            className="absolute inline-block [backface-visibility:hidden] [transform-origin:50%_100%]"
            initial={{ rotateX: 90 }}
            animate={{ rotateX: 0 }}
            transition={{ ...transition, duration, delay: getExitDelay(i) }}
          >
            {letter === " " ? " " : letter}
          </motion.span>
          <span className="invisible">{letter === " " ? " " : letter}</span>
        </span>
      ))}
      <span className="sr-only">{children}</span>
    </span>
  );
}
