import type { ReactNode } from "react";

/**
 * Tarjeta de dos caras que gira al pasar el mouse — adaptada de 21st.dev
 * (@aghasisahakyan1/flipping-card,
 * https://21st.dev/@aghasisahakyan1/components/flipping-card). CSS puro
 * (perspective + rotateY + backface-visibility), sin dependencias nuevas.
 */
export function FlippingCard({
  className = "",
  frontContent,
  backContent,
}: {
  className?: string;
  frontContent: ReactNode;
  backContent: ReactNode;
}) {
  return (
    <div className="group/flip h-full w-full [perspective:1200px]">
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover/flip:[transform:rotateY(180deg)] ${className}`}
      >
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">{frontContent}</div>
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
}
