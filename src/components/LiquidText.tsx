/**
 * Texto "líquido" — inspirado en 21st.dev (@glasscn/liquid-text,
 * https://21st.dev/@glasscn/components/liquid-text), que rellena la letra
 * con un shader de humo animado vía @paper-design/shaders-react. Sumar esa
 * librería (WebGL) solo para una palabra del hero no se justifica acá, así
 * que se reimplementa el mismo resultado visual — color fluyendo dentro de
 * la letra — con un gradiente animado + `background-clip: text`, cero
 * dependencias nuevas. El color se pasa por CSS custom properties para que
 * cada template lo pueda usar con su propia paleta.
 */
export function LiquidText({
  children,
  className = "",
  colors = ["#2E433D", "#46615A", "#8FB3A6", "#C9DAD5", "#46615A", "#2E433D"],
  duration = 6,
}: {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
}) {
  return (
    <span
      className={`liquid-text ${className}`}
      style={{
        backgroundImage: `linear-gradient(115deg, ${colors.join(", ")})`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
      <style>{`
        .liquid-text {
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation-name: liquid-text-flow;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes liquid-text-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .liquid-text { animation: none; background-position: 30% 50%; }
        }
      `}</style>
    </span>
  );
}
