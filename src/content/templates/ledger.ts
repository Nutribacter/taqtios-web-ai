import type { Template } from "./types";

export const ledger: Template = {
  slug: "ledger",
  name: "Ledger",
  category: "Finanzas",
  style: "Preciso / Fintech",
  tags: ["Finanzas", "Fintech", "Datos"],
  status: "ready",
  featured: false,
  previewImage: "/templates/ledger/cover.jpg",
  description:
    "Landing para fintech y servicios financieros: números tratados como el elemento visual principal, gráficos reales en vez de ilustraciones, y confianza que se gana con precisión, no con adjetivos.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Ledger",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en landings de fintech y servicios financieros, con el nivel de las mejores plataformas de inversión y banca digital.

CONTEXTO
Voy a construir la landing de [PRODUCT_NAME], un [DESCRIBIR: billetera digital, plataforma de inversión, software de facturación, etc.]. Reemplazá cada corchete con mi información real; nunca inventes tasas, comisiones ni cifras de rendimiento.

OBJETIVO
Que un usuario evaluando dónde poner su plata o gestionar sus finanzas confíe en la seriedad del producto en los primeros segundos — en finanzas, la confianza se construye con precisión y transparencia, no con promesas.

AUDIENCIA
Gente que ya usa al menos un producto financiero digital y compara opciones por seguridad, costos claros y qué tan bien se entienden sus propios números ahí adentro.

MARCA
Nombre: [PRODUCT_NAME]. Tono: preciso, calmo, nunca "hacete rico rápido". Paleta: fondo oscuro (azul noche o carbón) con UN acento (verde esmeralda o azul eléctrico), tipografía monoespaciada para cifras y sans para el resto — la distinción visual entre texto y número es intencional.

DIRECCIÓN DE DISEÑO
Los números son el elemento visual más fuerte de la página: cifras grandes en monoespaciada, con su contexto chico al lado. Gráficos de línea o barra REALES (aunque sean de ejemplo con datos de mentira claramente marcados como tal en desarrollo), nunca ilustraciones abstractas de "billete volando" o "cohete despegando".

ARQUITECTURA DE INFORMACIÓN
Nav (logo + Producto + Seguridad + Precios) → Hero con propuesta + mockup de dashboard/número clave → Cómo funciona → Seguridad (certificaciones reales, cifrado, regulación si aplica) → Costos (tabla clara, sin letra chica escondida) → Comparación breve con la alternativa actual del usuario → CTA final.

ESTRUCTURA DE PÁGINA
1. Hero: propuesta clara del resultado financiero concreto, con un mockup de dashboard o un número destacado (ej. "0% de comisión los primeros 3 meses" si es real).
2. Cómo funciona: 3 pasos simples, sin jerga financiera innecesaria.
3. Seguridad: certificaciones reales, cómo se protegen los datos/fondos — este bloque es tan importante como el de precios en fintech.
4. Costos: tabla clara de comisiones/tarifas, nunca "consultar" si el dato existe.
5. CTA final: repetir la propuesta central.

COMPONENTES
Botón CTA: sólido, sobrio, sin efectos llamativos que compitan con la seriedad del producto. Cifras siempre en tipografía monoespaciada para que se lean como datos, no como decoración.

DIRECCIÓN DE COPY
Cada afirmación se sostiene con un número o una certificación real, nunca "el mejor rendimiento del mercado" sin dato. Costos siempre explícitos, nunca escondidos en un link de letra chica.

REGLAS RESPONSIVE
Las tablas de costos se adaptan a un formato de tarjetas apiladas en mobile, manteniendo cada cifra alineada y legible — nunca una tabla horizontal con scroll forzado sin indicación.

ANIMACIONES
Los números del hero y de métricas cuentan desde 0 al valor real al entrar en viewport, una sola vez. Fade-up sutil en el resto. Nada de movimiento que distraiga de leer una cifra con cuidado.

ACCESIBILIDAD
Contraste 4.5:1 mínimo, crítico en las tablas de costos donde un error de lectura tiene consecuencias reales para el usuario.

SEO
Title: "[PRODUCT_NAME] — [PROPUESTA_EN_6_PALABRAS]". Schema.org FinancialProduct o Organization con datos regulatorios reales si aplica.

RENDIMIENTO
Los gráficos se renderizan livianos (SVG o Canvas simple), sin librerías de charting pesadas si un gráfico simple alcanza.

REQUISITOS TÉCNICOS
Si hay datos financieros reales del usuario involucrados, marcar [FALTA: revisar cumplimiento regulatorio y de seguridad de datos financieros de tu país] — esto no se puede improvisar.

CONTROL DE CALIDAD FINAL
¿Cada cifra mostrada es real o un placeholder claramente marcado? ¿La sección de seguridad es tan clara como la de precios? ¿El tono transmite precisión o se lee como cualquier fintech genérica?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá el acento y la tipografía de cifras sin perder seriedad.",
      content: `Ajustá SOLO la identidad de Ledger:
1. Acento: reemplazá el verde/azul por [COLOR_DE_MARCA], manteniendo un fondo oscuro sobrio.
2. Tipografía de cifras: si preferís otra monoespaciada, mantené el criterio de distinguir visualmente números de texto.
No toques: el tratamiento de las cifras como elemento principal ni la sección de seguridad.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá costos y certificaciones reales, nunca cifras de rendimiento inventadas.",
      content: `Reescribí el copy de Ledger con mi información real:

Producto: [PRODUCT_NAME]
Propuesta concreta: [PROPUESTA]
Costos/comisiones reales: [COSTOS]
Seguridad/certificaciones reales: [SEGURIDAD]
Comparación honesta con la alternativa actual: [COMPARACION]

Reglas:
- Nunca inventar una tasa de rendimiento, una comisión o una certificación — si falta, dejar [FALTA: dato real].
- Los costos siempre explícitos y completos, nunca con condiciones escondidas.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "El conteo de cifras es la única animación protagonista.",
      content: `Sumá estas animaciones a Ledger:
1. Los números clave (hero y métricas) cuentan desde 0 al valor real en 800ms al entrar en viewport, una sola vez.
2. Fade-up de 16px en el resto de las secciones.
No agregues más — en un producto financiero, cualquier animación de más se lee como distracción, no como pulido.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO con foco en la propuesta concreta y datos regulatorios si aplican.",
      content: `Optimizá el SEO de [PRODUCT_NAME]:
1. Title: "[PRODUCT_NAME] — [PROPUESTA_EN_6_PALABRAS]".
2. Meta description con la propuesta y el costo si es un diferencial real.
3. Schema.org Organization o FinancialService con datos regulatorios reales si aplica.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Las tablas de costos y gráficos en mobile.",
      content: `Revisá el responsive de Ledger en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Tablas de costos: tarjetas apiladas en mobile, cada cifra alineada y completa, nunca cortada.
2. Gráficos: se reescalan sin perder legibilidad de los ejes/valores.
3. Los números grandes del hero mantienen jerarquía sin desbordar el ancho de pantalla.`,
    },
  ],
};
