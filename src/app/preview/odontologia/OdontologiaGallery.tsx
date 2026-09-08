"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GALLERY } from "./content";

/**
 * Galería expandible con lightbox — referencia conceptual:
 * https://21st.dev/@0xUrvish/components/expandable-gallery (adaptada a
 * mano, sin sumar el paquete). Grid en desktop, mismo grid apretado en
 * mobile — nada de scroll infinito, son 9 fotos.
 */
export function OdontologiaGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {GALLERY.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setOpenIndex(i)}
            aria-label={`Ampliar: ${photo.alt}`}
            className={`odo-hover-zoom group relative aspect-square overflow-hidden rounded-2xl border border-[rgba(40,40,35,0.08)] ${
              i === 0 ? "col-span-2 row-span-2 aspect-auto sm:col-span-2" : ""
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="odo-hover-zoom-img object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#20221F]/0 opacity-0 transition-all duration-300 group-hover:bg-[#20221F]/25 group-hover:opacity-100">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#20221F]">
                <ZoomIn className="h-4 w-4" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#141615]/92 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((openIndex - 1 + GALLERY.length) % GALLERY.length);
            }}
            aria-label="Anterior"
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative h-[70vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={GALLERY[openIndex].src}
              alt={GALLERY[openIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((openIndex + 1) % GALLERY.length);
            }}
            aria-label="Siguiente"
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/60">
            {GALLERY[openIndex].alt} · {openIndex + 1}/{GALLERY.length}
          </p>
        </div>
      )}
    </>
  );
}
