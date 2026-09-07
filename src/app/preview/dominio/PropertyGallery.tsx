"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import type { Property } from "./properties";

/**
 * Grilla de fotos de la ficha de propiedad — clickeable, abre el Lightbox
 * fullscreen en la foto tocada. Muestra hasta 3 en la grilla; si hay más,
 * la última tile lleva un overlay "+N fotos" que también abre el lightbox
 * (ya posicionado en esa foto), así ninguna queda escondida.
 */
export function PropertyGallery({ images, title }: { images: Property["images"]; title: string }) {
  const [openAt, setOpenAt] = useState<number | null>(null);
  const visible = images.slice(0, 3);
  const extra = images.length - visible.length;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:h-[420px] sm:grid-cols-4">
        <button
          onClick={() => setOpenAt(0)}
          aria-label={`Ver foto grande: ${images[0].alt}`}
          className="group relative aspect-[16/10] overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:h-full"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <GalleryHoverIcon />
        </button>

        {visible.slice(1).map((img, i) => {
          const realIndex = i + 1;
          const isLast = realIndex === visible.length - 1 && extra > 0;
          return (
            <button
              key={img.src}
              onClick={() => setOpenAt(realIndex)}
              aria-label={isLast ? `Ver las ${images.length} fotos` : `Ver foto grande: ${img.alt}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl sm:col-span-2 sm:aspect-auto sm:h-full"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {isLast ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-lg font-medium text-white backdrop-blur-[1px]">
                  +{extra} foto{extra > 1 ? "s" : ""}
                </div>
              ) : (
                <GalleryHoverIcon />
              )}
            </button>
          );
        })}
      </div>

      {openAt !== null && (
        <Lightbox
          images={images.map((img) => ({ src: img.src, alt: `${title} — ${img.alt}` }))}
          index={openAt}
          onIndexChange={setOpenAt}
          onClose={() => setOpenAt(null)}
        />
      )}
    </>
  );
}

function GalleryHoverIcon() {
  return (
    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
      <Expand className="h-4 w-4" />
    </span>
  );
}
