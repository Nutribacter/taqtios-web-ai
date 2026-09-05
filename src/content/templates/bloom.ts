import type { Template } from "./types";

export const bloom: Template = {
  slug: "bloom",
  name: "Bloom",
  category: "Belleza",
  style: "Suave / Elegante",
  tags: ["Belleza", "Suave", "Skincare"],
  status: "ready",
  featured: false,
  previewImage: "/templates/bloom/cover.jpg",
  description:
    "Landing suave para marcas de belleza y skincare: formas orgánicas, paleta pastel, mucho aire y producto fotografiado como si fuera lo único importante en la pantalla.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Bloom",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en marcas de belleza y skincare premium, con el nivel de las mejores marcas independientes de cuidado de la piel.

CONTEXTO
Voy a construir la landing de [BRAND_NAME], una marca de [DESCRIBIR: skincare, cosmética, cuidado personal]. Reemplazá cada corchete con mi información real; nunca inventes ingredientes, resultados clínicos ni certificaciones.

OBJETIVO
Que quien visita sienta calma y calidad con solo ver la página, y entienda qué hace el producto sin una lista técnica de ingredientes como único argumento.

AUDIENCIA
Gente que ya cuida su piel/rutina y elige entre marcas independientes por sensación de calidad y honestidad de ingredientes, no por publicidad agresiva.

MARCA
Nombre: [BRAND_NAME]. Tono: cálido, calmo, seguro sin exagerar promesas de resultado. Paleta: pastel (rosa polvo, crema, salvia), formas circulares/orgánicas en vez de rectángulos duros, tipografía serif suave para títulos.

DIRECCIÓN DE DISEÑO
Nada de esquinas duras: los contenedores de imagen y las cards son circulares u ovalados, con curvas suaves. Mucho espacio en blanco/crema — la sensación tiene que ser de cuidado y calma, nunca de venta agresiva. La fotografía de producto (o su mockup) es protagonista, con luz suave.

ARQUITECTURA DE INFORMACIÓN
Nav (logo + Productos + Sobre la marca) → Hero con producto + propuesta → Ingredientes/ciencia (sin exagerar) → Productos destacados → Rutina sugerida (cómo usar) → Sobre la marca → Reseñas reales si existen → CTA de compra.

ESTRUCTURA DE PÁGINA
1. Hero: producto o mockup en foto circular/orgánica, propuesta de una línea, CTA suave.
2. Ingredientes: 2-3 ingredientes clave con su función real, sin jerga científica exagerada ni promesas clínicas no verificadas.
3. Productos destacados: cards circulares con foto, nombre, precio.
4. Rutina: pasos simples de uso, con íconos suaves.
5. Sobre la marca: 2-3 oraciones cálidas y reales.
6. Reseñas: reales, con nombre — si no hay, sacar la sección.

COMPONENTES
Botón de compra: suave, redondeado por completo (pill), color pastel con texto en tono oscuro para contraste. Cards circulares u ovaladas para producto, nunca rectángulos de esquina dura.

DIRECCIÓN DE COPY
Tono cálido y cercano, nunca prometer resultados clínicos ("hidrata la piel" en vez de "elimina las arrugas para siempre"). Ingredientes descritos por su función real.

REGLAS RESPONSIVE
Las formas circulares mantienen su proporción en mobile (nunca se aplastan a óvalos raros). El espacio en blanco se reduce proporcionalmente pero nunca desaparece del todo — es parte de la identidad calma del template.

ANIMACIONES
Fade-in suave y lento (500-600ms) al entrar cada sección — el ritmo pausado es parte del tono. Zoom muy leve en las fotos de producto al hover.

ACCESIBILIDAD
Contraste 4.5:1 en todo texto, cuidando que los tonos pastel no bajen demasiado el contraste (ajustar el tono del texto, no el del fondo, si hace falta).

SEO
Title: "[BRAND_NAME] — [PROPUESTA_EN_6_PALABRAS]". Schema.org Product por cada producto si corresponde publicar precio.

RENDIMIENTO
Fotografía de producto optimizada en WebP/AVIF, con buena reproducción de color (crítico en belleza, donde el color del producto importa).

REQUISITOS TÉCNICOS
Schema.org Product en JSON-LD con precio e ingredientes si se quiere mostrar estructurado.

CONTROL DE CALIDAD FINAL
¿La página transmite calma o se siente apurada? ¿Los ingredientes se explican sin promesas exageradas? ¿Las formas orgánicas se ven intencionales o descuidadas?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá la paleta pastel sin perder la calidez orgánica del template.",
      content: `Ajustá SOLO la identidad de Bloom:
1. Paleta: reemplazá los pasteles por [PALETA_DE_MARCA], manteniendo tonos suaves (evitar colores muy saturados que rompan la calma).
2. Logo: integralo en el nav, sutil, sin isotipos duros o geométricos que contradigan las formas orgánicas.
No toques: las formas circulares/orgánicas de los contenedores ni el ritmo pausado de las animaciones.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá productos e ingredientes reales, sin promesas clínicas.",
      content: `Reescribí el copy de Bloom con mi información real:

Marca: [BRAND_NAME]
Propuesta (una línea): [PROPUESTA]
Ingredientes clave y su función real: [INGREDIENTES]
Productos (nombre, precio, descripción — mínimo 3): [PRODUCTOS]
Rutina de uso: [RUTINA]
Sobre la marca: [SOBRE_LA_MARCA]

Reglas:
- Nunca prometer resultados clínicos verificables sin respaldo real.
- Nunca inventar una reseña — si no hay, sacar la sección.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento lento y suave, coherente con el tono calmo.",
      content: `Sumá estas animaciones a Bloom:
1. Fade-in lento (500-600ms) al entrar cada sección en viewport, una sola vez.
2. Zoom muy leve (scale 1.02) al hover sobre fotos de producto.
No agregues movimiento rápido ni efectos llamativos — la calma es la identidad de este template.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Schema.org Product para cada producto de la marca.",
      content: `Optimizá el SEO de [BRAND_NAME]:
1. Title: "[BRAND_NAME] — [PROPUESTA_EN_6_PALABRAS]".
2. JSON-LD Schema.org Product por producto, con price e ingredientes si corresponde.
3. Open Graph con foto de producto de buena calidad de color.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Las formas orgánicas y el espacio en blanco en mobile.",
      content: `Revisá el responsive de Bloom en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Las cards circulares/ovaladas mantienen su proporción sin aplastarse.
2. El espacio en blanco se reduce proporcionalmente pero se mantiene generoso.
3. Los botones pill con área táctil de mínimo 44px.`,
    },
  ],
};
