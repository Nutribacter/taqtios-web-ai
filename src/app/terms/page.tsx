import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="prose prose-neutral mx-auto max-w-2xl px-6 py-16 text-sm text-muted-foreground [&_h2]:text-foreground [&_h2]:font-heading [&_p]:mt-3">
          <h1 className="font-heading text-3xl font-extrabold text-foreground">
            Términos de uso
          </h1>
          <p className="mt-4">
            [PENDIENTE DE REVISIÓN LEGAL] Este texto describe el
            funcionamiento del producto; no reemplaza el asesoramiento de un
            abogado antes del lanzamiento público.
          </p>

          <h2 className="mt-8">Qué es TAQTios Web AI</h2>
          <p>
            Un producto digital: acceso a una biblioteca de templates web y
            prompts para usar con herramientas de inteligencia artificial de
            terceros (Claude, Qwen, Lovable, Cursor, Gemini, entre otras).
            TAQTios Web AI no construye, aloja ni publica sitios web por vos.
          </p>

          <h2 className="mt-8">Acceso</h2>
          <p>
            El acceso fundador es un pago único que habilita el ingreso a la
            biblioteca vigente al momento de la compra y a las incorporaciones
            que se sumen durante la etapa de lanzamiento. El acceso se activa
            automáticamente una vez confirmado el pago por Mercado Pago.
          </p>

          <h2 className="mt-8">Propiedad intelectual</h2>
          <p>
            Los diseños y prompts son propiedad de TAQTios. Comprar el acceso
            da derecho a usarlos en proyectos propios y de clientes. No está
            permitido revender, redistribuir ni publicar los prompts o los
            diseños como producto propio o competidor.
          </p>

          <h2 className="mt-8">Reembolsos</h2>
          <p>
            [FALTA DEFINIR: política de reembolsos] — por tratarse de acceso
            digital entregado de inmediato, se evalúa caso por caso.
          </p>

          <h2 className="mt-8">Contacto</h2>
          <p>[FALTA: email de soporte]</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
