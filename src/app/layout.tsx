import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

/**
 * Fraunces para títulos: serif editorial con carácter, no el Sora/Space
 * Grotesk que aparece en cada landing generada por IA. Ver AGENTS.md,
 * "Identidad visual" — pedido explícito del dueño: "letras diferentes,
 * todo bien épico".
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TAQTios Web AI — Creá webs que parecen de miles de dólares",
  description:
    "Templates y prompts premium para crear páginas web profesionales con Claude, Qwen, Lovable, Cursor y Gemini.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", fraunces.variable, inter.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
