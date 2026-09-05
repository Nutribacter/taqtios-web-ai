import type { Template } from "./types";

export const velvet: Template = {
  slug: "velvet",
  name: "Velvet",
  category: "Ecommerce",
  style: "Fashion / Luxury",
  tags: ["Ecommerce", "Fashion", "Luxury"],
  status: "ready",
  featured: false,
  previewImage: "/templates/velvet/cover.jpg",
  description:
    "Tienda de moda premium: producto fotografiado a página completa, grilla editorial de colección y checkout sin distracciones.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Velvet",
      description: "El prompt principal: genera la tienda completa. Pegalo primero, siempre.",
      content: `ROLE
Sos un Senior Product Designer + Frontend Engineer especializado en ecommerce de moda de lujo, con el nivel de las mejores tiendas online de marcas premium independientes.

CONTEXT
Voy a construir la tienda de [BRAND_NAME], una marca de [DESCRIBIR: indumentaria, calzado, accesorios]. Reemplazá cada corchete con mi información real; nunca inventes precios ni stock.

OBJECTIVE
Que quien entra sienta que está en una tienda premium (no un dropshipping genérico) y llegue a agregar un producto al carrito guiado por fotografía de calidad, no por descuentos gritados.

TARGET AUDIENCE
Compradores que ya conocen marcas de indumentaria de nicho y distinguen rápido entre una tienda con identidad propia y un template de Shopify sin editar.

BRAND
Nombre: [BRAND_NAME]. Tono: seguro, con estética propia, sin "¡OFERTA!" en mayúsculas. Paleta: fondo neutro (blanco roto o negro, elegir uno), tipografía editorial de moda, fotografía de producto como protagonista absoluto.

DESIGN DIRECTION
Fotografía de producto a página completa o media pantalla, nunca thumbnails chicos apretados. Grilla de colección con ritmo (no todos los productos del mismo tamaño — alternar anchos para dar sensación editorial, como un lookbook). Tipografía de precios discreta, nunca en rojo gritón ni tachada sin razón real.

INFORMATION ARCHITECTURE
Nav (logo + Colección + Carrito) → Hero de campaña (foto + nombre de colección) → Grilla de productos (foto grande + nombre + precio) → Producto individual (galería + selector de talle/color + agregar al carrito) → Historia de la marca breve → Footer con envíos/devoluciones.

PAGE STRUCTURE
1. Hero de campaña: foto de la colección actual a página completa, nombre de la colección superpuesto en tipografía editorial.
2. Grilla de productos: cada producto con su foto (proporción vertical, tipo lookbook), nombre y precio debajo, sin descripciones largas en la grilla.
3. Producto individual: galería de 3-4 fotos, nombre, precio, selector de talle/color, botón agregar al carrito, descripción breve de materiales.
4. Historia de marca: 2-3 oraciones, sin storytelling forzado tipo "nuestra pasión por la moda nació en...".

COMPONENTS
Botón de agregar al carrito: sólido, esquinas rectas o casi rectas (nunca pill completo — se siente más fashion con bordes definidos). Selector de talle: chips rectangulares, el seleccionado con fondo sólido.

COPY DIRECTION
Nombres de producto simples y directos (material + prenda, ej. "Camisa de lino cruda"), sin adjetivos de venta forzada. Precios siempre claros, sin "desde" ambiguos si el producto tiene precio único.

RESPONSIVE RULES
En mobile la grilla de productos pasa a 2 columnas manteniendo la proporción vertical de las fotos (nunca recortar a cuadrado). La galería de producto individual se desliza horizontalmente con swipe.

ANIMATIONS
Fade-in suave en las fotos al cargar. Zoom leve al hover sobre producto en desktop (no en mobile, donde no hay hover real). Transición suave al cambiar de foto en la galería del producto.

ACCESSIBILITY
Contraste 4.5:1 en precios y textos funcionales (el nombre del producto sobre foto necesita overlay si va superpuesto). Selector de talle/color navegable por teclado con estado de foco visible.

SEO
Title y meta description por producto si tiene su propia URL. Schema.org Product con precio, disponibilidad y marca. Open Graph con la foto principal de cada producto.

PERFORMANCE
Fotografía de producto en WebP/AVIF con compresión que preserve textura y color reales (crítico en moda — un color mal representado genera devoluciones). Dimensiones explícitas, lazy loading en la grilla.

TECHNICAL REQUIREMENTS
Schema.org Product en JSON-LD. Carrito persistente (localStorage como mínimo para un MVP, o el sistema de ecommerce que se use).

FINAL QA
¿Las fotos de producto se ven premium o genéricas? ¿El precio y el talle se encuentran sin buscar? ¿La grilla tiene ritmo editorial o es una cuadrícula aburrida de tienda genérica?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá paleta y tipografía sin tocar la grilla editorial.",
      content: `Ajustá SOLO la identidad de Velvet:
1. Elegí fondo blanco roto o negro según [PREFERENCIA] — mantené uno solo, no alternés.
2. Tipografía: si tu marca tiene una tipografía propia, mantené el criterio editorial (serif fina o sans de moda), evitando fuentes gruesas genéricas.
3. Logo: wordmark discreto en el nav, nunca compitiendo con la fotografía de producto.
No toques: el ritmo asimétrico de la grilla ni el tamaño de las fotos de producto.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá tu colección real, con precios y stock reales.",
      content: `Reescribí el copy de Velvet con mi información real:

Marca: [BRAND_NAME]
Colección actual: [NOMBRE_COLECCION]
Productos (nombre, precio, materiales — mínimo 6): [PRODUCTOS]
Historia de marca (2-3 oraciones): [HISTORIA]
Envíos y devoluciones: [POLITICA]

Reglas:
- Nunca inventar precio ni stock — si falta, dejar [FALTA: precio real].
- Descripciones de producto con material y corte real, no adjetivos vacíos ("hermoso", "único").`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento discreto que no compita con la fotografía.",
      content: `Sumá estas animaciones a Velvet:
1. Fade-in de las fotos de producto al cargar (300ms).
2. Zoom leve (scale 1.03) al hover sobre una foto de producto en desktop, solo desktop (detectar con @media (hover: hover)).
3. Transición suave (crossfade, 250ms) al cambiar de foto en la galería del producto individual.
No agregues: autoplay de carrusel en la grilla, ni animación de "agregado al carrito" exagerada — un check breve alcanza.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Schema.org Product es lo que más impacta en ecommerce.",
      content: `Optimizá el SEO de [BRAND_NAME]:
1. Title por producto: "[NOMBRE_PRODUCTO] — [BRAND_NAME]".
2. JSON-LD Schema.org Product con name, price, priceCurrency, availability y brand.
3. Open Graph con la foto principal de cada producto.
4. Alt text real por foto (ej. "Camisa de lino cruda, vista frontal").`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "La grilla y la galería de producto en mobile.",
      content: `Revisá el responsive de Velvet en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Grilla de productos: 2 columnas en mobile, manteniendo proporción vertical de las fotos.
2. Galería de producto individual: swipe horizontal con scroll-snap en mobile.
3. Selector de talle/color con áreas táctiles de mínimo 44px.
4. Botón de agregar al carrito sticky en mobile si la página de producto es larga.`,
    },
  ],
};
