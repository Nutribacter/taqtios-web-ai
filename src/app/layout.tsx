import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
      className={cn("h-full", "antialiased", sora.variable, inter.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
