"use client";

import type { SpringOptions } from "motion/react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Adaptado de React Bits (@react-bits/TiltedCard-TS-TW): el original solo
 * tiltea una <img>. Acá lo generalizamos a "children" porque todavía no
 * tenemos capturas reales de los templates — el tilt 3D se aplica a la
 * tarjeta entera (categoría, nombre, tags). Cuando haya preview real, esta
 * misma tarjeta puede volver a llevar una imagen adentro sin cambiar nada.
 */
interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  children,
  className = "",
  containerHeight = "100%",
  containerWidth = "100%",
  rotateAmplitude = 8,
  scaleOnHover = 1.02,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`[transform-style:preserve-3d] [perspective:800px] ${className}`}
      style={{ height: containerHeight, width: containerWidth, rotateX, rotateY, scale }}
    >
      {children}
    </motion.div>
  );
}
