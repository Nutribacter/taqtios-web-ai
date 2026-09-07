"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

/**
 * Lightbox fullscreen genérico y reutilizable (no atado al template Dominio):
 * imagen grande, siguiente/anterior, thumbnails, zoom (toggle 1x/2x al click),
 * cerrar (X, Escape, click en el fondo) y swipe en mobile. Sin dependencias
 * nuevas — motion no hace falta acá, son solo transiciones CSS.
 */
export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: LightboxImage[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const [zoomed, setZoomed] = useState(false);
  const touchStart = useRef<number | null>(null);

  const goTo = (i: number) => {
    setZoomed(false);
    onIndexChange((i + images.length) % images.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos"
    >
      <div className="flex items-center justify-between px-4 py-3 text-white/80 sm:px-6">
        <span className="text-sm tabular-nums">
          {index + 1} / {images.length}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Cerrar galería"
          className="rounded-full p-2 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-2"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStart.current == null) return;
          const delta = e.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(delta) > 50) goTo(delta > 0 ? index - 1 : index + 1);
          touchStart.current = null;
        }}
      >
        {images.length > 1 && (
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Foto anterior"
            className="absolute left-2 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-4 sm:p-3"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}

        <button
          onClick={() => setZoomed((z) => !z)}
          aria-label={zoomed ? "Alejar" : "Acercar"}
          className={`relative h-full w-full max-w-5xl cursor-zoom-in overflow-hidden ${zoomed ? "cursor-zoom-out" : ""}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            className={`object-contain transition-transform duration-300 ease-out ${zoomed ? "scale-[1.8]" : "scale-100"}`}
          />
          {!zoomed && (
            <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white/80">
              <ZoomIn className="h-3.5 w-3.5" /> Acercar
            </span>
          )}
        </button>

        {images.length > 1 && (
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Foto siguiente"
            className="absolute right-2 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-4 sm:p-3"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div
          className="flex justify-center gap-2 overflow-x-auto px-4 py-4 sm:px-6"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((im, i) => (
            <button
              key={im.src + i}
              onClick={() => goTo(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md transition ${
                i === index ? "opacity-100 ring-2 ring-white" : "opacity-50 hover:opacity-80"
              }`}
            >
              <Image src={im.src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
