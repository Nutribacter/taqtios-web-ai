import type { Template } from "./types";

export const torque: Template = {
  slug: "torque",
  name: "Torque",
  category: "Automotor",
  style: "Agresivo / Metálico",
  tags: ["Automotor", "Agresivo", "Performance"],
  status: "ready",
  featured: false,
  previewImage: "/templates/torque/cover.jpg",
  description:
    "Landing agresiva para concesionarias, talleres de performance y accesorios: composición diagonal, specs técnicos como protagonistas y acabado metálico, no otro template de auto genérico.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Torque",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en marcas automotrices y de performance, con el nivel de las mejores campañas de lanzamiento de autos deportivos.

CONTEXTO
Voy a construir la landing de [BRAND_NAME], [DESCRIBIR: concesionaria, taller de performance, marca de accesorios automotor]. Reemplazá cada corchete con mi información real; nunca inventes specs técnicos, precios ni disponibilidad.

OBJETIVO
Que quien visita sienta la potencia y precisión del producto/servicio en el hero, y avance a consultar o cotizar sin distraerse con relleno.

AUDIENCIA
Entusiastas o compradores que ya saben lo que buscan técnicamente — responden a datos concretos (potencia, torque, tiempos), no a adjetivos vacíos.

MARCA
Nombre: [BRAND_NAME]. Tono: directo, técnico, con confianza. Paleta: fondo oscuro casi negro, acento metálico (cromado o rojo carrocería), tipografía condensada y agresiva para títulos.

DIRECCIÓN DE DISEÑO
Composición diagonal: elementos que cortan la pantalla en ángulo (no todo alineado en grillas perfectamente horizontales) para transmitir velocidad. Los specs técnicos (potencia, 0-100, torque) se muestran grandes, como el dato más importante de la página — no una lista chica al pie.

ARQUITECTURA DE INFORMACIÓN
Nav (logo + Modelos/Servicios + Contacto) → Hero con imagen de producto en diagonal + specs clave → Specs técnicos completos → Galería → Testimonios/casos si existen → Cotizar/contactar.

ESTRUCTURA DE PÁGINA
1. Hero: imagen del vehículo/servicio en composición diagonal, headline corto y directo, 2-3 specs clave grandes (ej. "420 HP · 0-100 en 4.2s").
2. Specs técnicos: tabla o grid con todos los datos técnicos reales, tipografía monoespaciada para los números.
3. Galería: fotos del vehículo/trabajo desde distintos ángulos.
4. Contacto: cotizar o consultar, con datos de contacto directos.

COMPONENTES
Botón CTA: anguloso (esquinas rectas o cortadas en diagonal, no redondeadas — coherente con la agresividad del template), color de acento sólido. Specs en tipografía monoespaciada grande.

DIRECCIÓN DE COPY
Directo y técnico, con datos reales. Nunca "el auto de tus sueños" sin un spec real al lado. Los superlativos se sostienen con el número correspondiente.

REGLAS RESPONSIVE
La composición diagonal se simplifica en mobile a una composición más vertical, sin perder la sensación de movimiento (se puede lograr con un ángulo más sutil en vez de eliminarlo del todo).

ANIMACIONES
Entrada rápida (250-300ms) de cada sección, coherente con la energía del template. Los specs técnicos pueden contar desde 0 al valor real al entrar en viewport. Nada de movimiento lento — este template es rápido.

ACCESIBILIDAD
Contraste 4.5:1 en todo texto sobre el fondo oscuro, especialmente los specs técnicos que tienen que leerse sin esfuerzo.

SEO
Title: "[BRAND_NAME] — [PROPUESTA_EN_6_PALABRAS]". Schema.org Vehicle o AutoDealer si corresponde, con specs reales.

RENDIMIENTO
Las fotos de producto en WebP/AVIF con buena nitidez (crítico para transmitir calidad de acabado), dimensiones explícitas.

REQUISITOS TÉCNICOS
Schema.org AutoDealer o Vehicle en JSON-LD con datos reales si se publican precios o specs.

CONTROL DE CALIDAD FINAL
¿Los specs técnicos son reales y verificables? ¿La composición transmite velocidad sin sacrificar legibilidad? ¿Se puede cotizar/contactar en pocos clics?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá el acento metálico sin perder agresividad.",
      content: `Ajustá SOLO la identidad de Torque:
1. Acento: reemplazá cromado/rojo por [COLOR_DE_MARCA], manteniendo un fondo oscuro y alto contraste.
2. Logo: integralo en el nav con fuerza, puede tener presencia grande si es parte de la identidad de la marca automotor.
No toques: la composición diagonal ni el tratamiento de los specs técnicos como elemento principal.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá specs técnicos reales, nunca inventados.",
      content: `Reescribí el copy de Torque con mi información real:

Marca/servicio: [BRAND_NAME]
Producto/servicio: [PRODUCTO]
Specs técnicos reales (potencia, 0-100, torque, etc.): [SPECS]
Precio o rango si es público: [PRECIO]
Contacto: [CONTACTO]

Reglas:
- Nunca inventar un spec técnico — si falta, dejar [FALTA: dato real].
- Cada superlativo se sostiene con el número correspondiente al lado.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento rápido, coherente con la energía del template.",
      content: `Sumá estas animaciones a Torque:
1. Entrada rápida (250-300ms) de cada sección al hacer scroll.
2. Los specs técnicos cuentan desde 0 al valor real en 600ms al entrar en viewport.
No agregues movimiento lento ni pausado — este template es rápido y directo en todo, incluida la animación.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Schema.org de vehículo/concesionaria con specs reales.",
      content: `Optimizá el SEO de [BRAND_NAME]:
1. Title: "[BRAND_NAME] — [PROPUESTA_EN_6_PALABRAS]".
2. JSON-LD Schema.org AutoDealer o Vehicle con specs reales si se publican.
3. Open Graph con la foto del vehículo/servicio en su mejor ángulo.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "La composición diagonal en mobile.",
      content: `Revisá el responsive de Torque en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. La composición diagonal se simplifica en mobile sin perder sensación de movimiento.
2. Los specs técnicos se apilan en una columna, manteniendo tipografía grande y legible.
3. Verificar que ningún elemento angulado desborde el ancho de pantalla en mobile.`,
    },
  ],
};
