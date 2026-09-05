import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const STEPS = [
  "Elegí un template de la biblioteca.",
  "Copiá el Prompt Maestro.",
  "Abrí Claude, Qwen, Lovable o Cursor.",
  "Pegá el prompt.",
  "Reemplazá el nombre de tu empresa y lo que te pida.",
  "Agregá tu contenido real (textos, precios, contacto).",
  "Revisá cómo se ve en el celular.",
  "Publicalo.",
];

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <h1 className="font-heading text-3xl font-extrabold">
            Cómo crear tu primera web con IA
          </h1>
          <ol className="mt-10 space-y-6">
            {STEPS.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-heading text-xl font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
