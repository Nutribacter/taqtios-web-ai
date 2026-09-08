"use client";

import { useEffect, useRef, useState } from "react";
import { X, Play } from "lucide-react";
import type { FeaturedVideo } from "./content";

/**
 * Bento interactivo con los 4 videos — inspirado en el Interactive Bento
 * Gallery de 21st.dev, reimplementado a mano (grid propio + IntersectionObserver
 * + <video> nativo, sin la librería). Cada tile hace autoplay muted/loop SOLO
 * mientras está en viewport (ahorra CPU/batería con 4 videos a la vez) y al
 * click abre un lightbox propio con controles y sonido.
 */
export function ConstructoraVideoBento({ videos }: { videos: FeaturedVideo[] }) {
  const [active, setActive] = useState<FeaturedVideo | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
        {videos.map((v, i) => (
          <BentoTile key={v.id} video={v} onOpen={() => setActive(v)} large={i === 0} />
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/50 hover:text-white"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <video
            key={active.id}
            src={active.src}
            poster={active.poster}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] max-w-4xl rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function BentoTile({ video, onOpen, large }: { video: FeaturedVideo; onOpen: () => void; large: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (inView) el.play().catch(() => {});
    else el.pause();
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.1] bg-[#181815] ${
        large ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
      }`}
      onClick={onOpen}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={video.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#ECE8DF] backdrop-blur-md">
        {video.label}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <p className="text-sm font-medium text-[#F3F0E8]">{video.title}</p>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/40 text-[#F3F0E8] backdrop-blur-md transition group-hover:border-white/60">
          <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />
        </span>
      </div>
    </div>
  );
}
