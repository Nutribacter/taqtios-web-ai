import type { Template } from "./types";

export const primeEstate: Template = {
  slug: "prime-estate",
  name: "Prime Estate",
  category: "Real Estate",
  style: "Luxury / Architectural",
  tags: ["Real Estate", "Luxury", "Architectural"],
  status: "ready",
  featured: true,
  previewImage: "/templates/prime-estate/cover.jpg",
  description:
    "Landing para inmobiliarias de propiedades premium: fotografía arquitectónica a pantalla completa, ficha técnica de la propiedad clara y consulta directa sin formularios eternos.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Prime Estate",
      description:
        "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROLE
Sos un Senior Product Designer + Frontend Engineer especializado en sitios de real estate de lujo, con el nivel de las mejores inmobiliarias boutique internacionales.

CONTEXT
Voy a construir la landing de [PROPERTY_OR_AGENCY_NAME], para [DESCRIBIR: una propiedad puntual / un catálogo de propiedades / una inmobiliaria boutique]. Reemplazá cada corchete con mi información real; si un dato falta, dejalo como [FALTA: ...] — nunca inventes metros cuadrados, precios ni ubicaciones.

OBJECTIVE
Que un comprador califically alto entienda en segundos el nivel de la propiedad/inmobiliaria y agende una visita o consulta — la fotografía arquitectónica hace la venta antes que cualquier texto.

TARGET AUDIENCE
Compradores o inversores de alto poder adquisitivo que evalúan pocas opciones muy cuidadosamente; desconfían de sitios que se ven como un portal de clasificados genérico.

BRAND
Nombre: [PROPERTY_OR_AGENCY_NAME]. Tono: seguro, discreto, nunca vendedor agresivo ("¡OPORTUNIDAD ÚNICA!"). Paleta: tonos neutros arquitectónicos (piedra, arena, carbón), un acento metálico sutil (dorado apagado o bronce) usado con moderación extrema.

DESIGN DIRECTION
La fotografía arquitectónica manda: fotos a página completa, sin recortes forzados, con composición que respete las líneas del edificio. Tipografía serif o sans elegante de trazo fino para títulos — nada de fuentes gruesas o "corporativas". Mucho espacio negativo entre secciones, ritmo pausado (esto no es una landing de conversión rápida tipo SaaS, es una landing de decisión lenta y reflexiva).

INFORMATION ARCHITECTURE
Nav discreto (logo + Propiedades + Contacto) → Hero con foto arquitectónica hero + nombre de la propiedad/inmobiliaria → Ficha técnica (metros, ambientes, ubicación) presentada como datos editoriales, no como tabla de portal inmobiliario → Galería de espacios (living, cocina, exterior, vista) → Ubicación con mapa discreto → Contacto directo (consulta breve, no formulario de 15 campos).

PAGE STRUCTURE
1. Hero: foto arquitectónica de la fachada o el espacio más impactante, a página completa, con el nombre superpuesto en tipografía fina.
2. Ficha técnica: los datos clave (m², ambientes, ubicación, año) presentados en un layout editorial — números grandes con su etiqueta chica debajo, no una tabla de filas y columnas.
3. Galería: 4-6 fotos de los espacios principales, cada una con su propio momento (no un grid apretado de miniaturas).
4. Ubicación: un mapa discreto (embed o estático) + 2-3 líneas sobre el barrio/zona, sin exagerar.
5. Contacto: un formulario corto (nombre, email, teléfono, mensaje opcional) o un link directo a WhatsApp — nunca ambos compitiendo, elegir uno según lo que pida el dueño real.

COMPONENTS
Botón de contacto: borde fino, fondo transparente por defecto, se llena con el acento metálico al hover — nunca un botón sólido gigante que grite "¡Comprá ahora!". Los datos de la ficha técnica van con números grandes en la tipografía de títulos y la etiqueta en versalitas chicas.

COPY DIRECTION
Frases descriptivas y concretas (ubicación real, superficie real, orientación), nunca "una oportunidad que no podés dejar pasar". El copy vende la propiedad describiéndola bien, no presionando.

RESPONSIVE RULES
En mobile las fotos arquitectónicas mantienen su encuadre (nunca recortadas a un cuadrado que pierda la composición de la fachada). La ficha técnica pasa de una fila de números a una grilla de 2 columnas.

ANIMATIONS
Fade-up sutil al entrar cada sección. Zoom leve en la foto del hero (scale 1 a 1.03, muy lento, 10s+) para dar sensación de vida sin distraer. Nada de transiciones bruscas — el ritmo tiene que sentirse pausado y deliberado, como caminar por la propiedad.

ACCESSIBILITY
Contraste 4.5:1 en todo texto sobre las fotos (usar overlays de gradiente, nunca oscurecido parejo). El mapa y el formulario de contacto totalmente navegables por teclado.

SEO
Title: "[PROPERTY_OR_AGENCY_NAME] — [UBICACIÓN]". Meta description con la propuesta de valor de la propiedad/inmobiliaria. Schema.org tipo RealEstateListing si es una propiedad puntual, con precio, ubicación y características si corresponde hacerlo público.

PERFORMANCE
Las fotos arquitectónicas son pesadas por naturaleza: WebP/AVIF con compresión que preserve el detalle (esto es lo que vende), dimensiones explícitas, lazy loading en todo menos el hero.

TECHNICAL REQUIREMENTS
HTML semántico, mapa embebido con carga diferida (no bloquear el render inicial por un iframe de mapa pesado).

FINAL QA
¿Las fotos venden la propiedad o se ven como cualquier portal de clasificados? ¿Los datos técnicos se leen rápido o hay que buscarlos en un párrafo? ¿El tono se siente exclusivo sin sentirse pomposo o falso?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá paleta y el acento metálico sin tocar el layout arquitectónico.",
      content: `Ajustá SOLO la identidad de Prime Estate:
1. Paleta base: mantené tonos neutros arquitectónicos, pero ajustá el acento metálico a [COLOR_DE_MARCA] si la inmobiliaria tiene un color propio — usalo con moderación (líneas finas, hover states), nunca como fondo grande.
2. Logo: wordmark discreto en el nav; si hay isotipo, puede ir como marca de agua muy sutil en el footer.
3. Tipografía: si la marca pide algo distinto a serif/sans fina, mantené igual el criterio de trazo fino — una tipografía gruesa le rompe el tono de lujo discreto al template.
No toques: el tamaño de las fotos arquitectónicas ni el layout de la ficha técnica.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá los datos reales de la propiedad o inmobiliaria.",
      content: `Reescribí el copy de Prime Estate con datos reales:

Nombre: [PROPERTY_OR_AGENCY_NAME]
Ubicación: [UBICACION]
Ficha técnica (m², ambientes, año, orientación — los que apliquen): [FICHA_TECNICA]
Descripción de la propiedad/zona (3-4 oraciones, concretas): [DESCRIPCION]
Contacto: [CONTACTO]

Reglas:
- Nunca inventar metros cuadrados, precio ni ambientes — si falta el dato, dejar [FALTA: m² reales].
- Evitar superlativos sin sustento ("la mejor ubicación de la ciudad") salvo que sea un hecho verificable.
- Si hay precio y se puede publicar, mostrarlo como un dato más de la ficha técnica, no como un "¡oferta especial!".`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento pausado, acorde a una decisión de compra lenta.",
      content: `Sumá estas animaciones a Prime Estate:
1. Zoom muy lento en la foto del hero (scale 1 → 1.03, 10-12s, ease-in-out, loop).
2. Fade-up de 20px al entrar cada sección en viewport, con una duración un poco más larga que el estándar (600-700ms) para que se sienta pausado, no apurado.
3. Los números de la ficha técnica pueden contar desde 0 al valor real la primera vez que entran en viewport (solo si son números, no aplica a texto como "orientación norte").
No agregues: parallax scroll-jacking, carrusel automático en la galería, ni ninguna animación que se sienta "rápida" — todo el ritmo de este template es deliberadamente lento.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Dejá la propiedad indexable, con datos estructurados si corresponde.",
      content: `Optimizá el SEO de [PROPERTY_OR_AGENCY_NAME]:
1. Title: "[PROPERTY_OR_AGENCY_NAME] — [UBICACIÓN]".
2. Meta description con la propuesta concreta (tipo de propiedad + zona), bajo 155 caracteres.
3. Si es una propiedad puntual y el precio es público, agregá JSON-LD Schema.org tipo RealEstateListing o Product con price, address y floorSize.
4. Open Graph con la foto de fachada o el espacio más representativo.
5. Alt text real en cada foto (ej. "Living con ventanales al jardín", no "foto3.jpg").`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Las fotos arquitectónicas y la ficha técnica en mobile.",
      content: `Revisá el responsive de Prime Estate en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Fotos arquitectónicas: mantener el encuadre de la composición en mobile, nunca forzar un recorte cuadrado que corte la fachada o pierda la simetría del espacio.
2. Ficha técnica: de una fila horizontal de números en desktop a una grilla de 2 columnas en mobile, manteniendo el tamaño grande de los números (no achicarlos tanto que pierdan jerarquía).
3. El mapa de ubicación se adapta a ancho completo sin desbordar.
4. El formulario de contacto (si lo hay) con inputs de mínimo 44px de alto para uso táctil cómodo.
5. Verificar que el overlay de texto sobre el hero se siga leyendo bien cuando la foto se recorta distinto en mobile.`,
    },
  ],
};
