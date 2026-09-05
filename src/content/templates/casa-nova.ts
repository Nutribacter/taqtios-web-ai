import type { Template } from "./types";

export const casaNova: Template = {
  slug: "casa-nova",
  name: "Casa Nova",
  category: "Hotelería",
  style: "Cálido Premium",
  tags: ["Hotelería", "Hotel Boutique", "Cálido Premium"],
  status: "ready",
  featured: false,
  previewImage: "/templates/casa-nova/cover.jpg",
  description:
    "Landing cálida para hoteles boutique y alojamientos: fotografía de espacios como protagonista, disponibilidad clara y reserva directa sin intermediarios.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Casa Nova",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en sitios de hotelería boutique, con el nivel de las mejores plataformas de alojamientos independientes premium.

CONTEXTO
Voy a construir la landing de [PROPERTY_NAME], un [DESCRIBIR: hotel boutique, posada, alojamiento tipo Airbnb premium] en [UBICACIÓN]. Reemplazá cada corchete con mi información real; nunca inventes precios, capacidad ni servicios.

OBJETIVO
Que quien está buscando dónde alojarse sienta la calidez y el nivel del lugar con la fotografía, y reserve directo (sin pagar la comisión de una plataforma intermediaria si el dueño quiere evitarla).

AUDIENCIA
Viajeros que buscan algo con identidad propia, no una cadena hotelera genérica — comparan fotos y reseñas antes de decidir.

MARCA
Nombre: [PROPERTY_NAME]. Tono: cálido, personal, como si el dueño te estuviera contando del lugar. Paleta: tonos cálidos (terracota, crema, madera), tipografía serif suave para títulos + sans para información práctica (precios, disponibilidad).

DIRECCIÓN DE DISEÑO
Fotografía de espacios como protagonista absoluto: habitaciones, vistas, desayuno, pileta — cada una mostrada grande, con composición que transmita la experiencia de estar ahí. Ritmo de secciones que alterna foto grande + texto breve, nunca un muro de texto largo.

ARQUITECTURA DE INFORMACIÓN
Nav (logo + Habitaciones + Reservar) → Hero con foto del lugar + nombre + ubicación → Habitaciones/espacios (cada uno con foto, capacidad, precio por noche) → Experiencia (desayuno, amenities, actividades cercanas) → Reseñas reales si existen → Disponibilidad/reserva (calendario simple o link a WhatsApp/mail) → Ubicación con mapa.

ESTRUCTURA DE PÁGINA
1. Hero: foto del lugar (fachada, vista o espacio más representativo) a página completa, nombre + ubicación superpuestos.
2. Habitaciones: cada tipo con foto grande, capacidad, qué incluye y precio por noche.
3. Experiencia: fotos de desayuno/amenities/actividades cercanas, con texto breve por cada una.
4. Reseñas: si hay reseñas reales de huéspedes, mostrarlas con nombre y procedencia (nunca inventadas).
5. Reserva: fechas disponibles o un CTA directo a WhatsApp/mail para consultar, con precios claros.
6. Ubicación: mapa + 2-3 líneas sobre la zona.

COMPONENTES
Botón de reservar: cálido, sólido, esquinas suaves (coherente con la calidez del lugar). Cards de habitación con foto grande arriba y datos abajo, sin sobrecargar con íconos innecesarios.

DIRECCIÓN DE COPY
Descripciones concretas de cada espacio (qué se ve desde la ventana, qué incluye el desayuno), en tono personal, como quien recomienda su propio lugar.

REGLAS RESPONSIVE
En mobile las fotos de habitación mantienen su encuadre completo. La info de precio y capacidad se lee clara sin superponerse al texto de la foto.

ANIMACIONES
Fade-up suave al entrar cada sección. Zoom muy leve en la foto del hero (scale 1 a 1.04, lento) para dar vida sin distraer.

ACCESIBILIDAD
Contraste 4.5:1 en todo texto sobre foto (usar overlay de gradiente). Calendario de disponibilidad (si lo hay) navegable por teclado.

SEO
Title: "[PROPERTY_NAME] — [TIPO_DE_ALOJAMIENTO] en [UBICACIÓN]". Schema.org tipo Hotel o LodgingBusiness con dirección, rango de precios y amenities.

RENDIMIENTO
Fotografía de espacios optimizada en WebP/AVIF, dimensiones explícitas, lazy loading debajo del fold salvo el hero.

REQUISITOS TÉCNICOS
Schema.org Hotel/LodgingBusiness en JSON-LD. Si hay reseñas reales, sumar aggregateRating solo con datos verificables.

CONTROL DE CALIDAD FINAL
¿Las fotos transmiten ganas de ir? ¿El precio por noche se encuentra sin buscar? ¿El tono se siente personal y cálido, no corporativo?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá paleta y tono sin perder la calidez del template.",
      content: `Ajustá SOLO la identidad de Casa Nova:
1. Paleta: mantené la base cálida, ajustá el tono específico (terracota, verde oliva, madera) según [PALETA_DE_MARCA].
2. Logo: wordmark cálido en el nav, sin competir con la fotografía de espacios.
3. Tipografía: si preferís otra serif, mantené el criterio suave/cálido — evitar serifs muy formales que le quiten la calidez personal al template.
No toques: el ritmo de foto-grande-más-texto-breve ni el tamaño de las fotos de habitación.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá habitaciones, precios y experiencia reales.",
      content: `Reescribí el copy de Casa Nova con mi información real:

Alojamiento: [PROPERTY_NAME]
Ubicación: [UBICACION]
Habitaciones/espacios (nombre, capacidad, precio por noche, qué incluye — mínimo 2): [HABITACIONES]
Experiencia (desayuno, amenities, actividades cercanas): [EXPERIENCIA]
Reseñas reales si existen: [RESEÑAS]
Contacto/reserva: [CONTACTO]

Reglas:
- Nunca inventar precio, capacidad ni reseñas — si falta el dato, dejar [FALTA: precio real].
- Descripciones en tono personal, concretas (qué se ve, qué incluye), no genéricas ("un lugar mágico").`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento cálido y pausado, sin distraer de la fotografía.",
      content: `Sumá estas animaciones a Casa Nova:
1. Zoom muy leve en la foto del hero (scale 1 → 1.04, 8-10s, loop, ease-in-out).
2. Fade-up de 16px al entrar cada sección en viewport.
3. Leve escala al hover en las fotos de habitación (scale 1.02) para dar sensación táctil.
No agregues: carrusel automático, ni transiciones bruscas — el tono cálido pide movimiento suave y lento.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Schema.org de hotelería con datos reales de ubicación y precio.",
      content: `Optimizá el SEO de [PROPERTY_NAME]:
1. Title: "[PROPERTY_NAME] — [TIPO_DE_ALOJAMIENTO] en [UBICACIÓN]".
2. JSON-LD Schema.org Hotel/LodgingBusiness con address, priceRange y amenityFeature.
3. Open Graph con la foto de fachada o vista principal.
4. Si hay reseñas reales, sumar aggregateRating con los valores reales (nunca inventados).`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Fotos de habitación y precios en mobile.",
      content: `Revisá el responsive de Casa Nova en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Fotos de habitación a ancho completo en mobile, manteniendo el encuadre original.
2. Precio y capacidad en una fila clara debajo de la foto, sin superponerse.
3. El mapa de ubicación se adapta a ancho completo.
4. Botón de reserva/consulta con área táctil de mínimo 44px.`,
    },
  ],
};
