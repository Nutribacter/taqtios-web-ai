import type { Template } from "./types";

export const casa: Template = {
  slug: "casa",
  name: "Casa",
  category: "Restaurantes",
  style: "Editorial / Lujo",
  tags: ["Restaurante", "Editorial", "Lujo"],
  status: "ready",
  featured: true,
  previewImage: "/templates/casa/cover.jpg",
  description:
    "Landing de restaurante premium: fotografía de plato a página completa, menú como pieza editorial (no como PDF escaneado) y reserva en dos clics.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Casa",
      description:
        "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en sitios de restaurantes de alta gama, con el nivel de los mejores sitios de guías Michelin.

CONTEXTO
Voy a construir la landing de [RESTAURANT_NAME], un restaurante de cocina [TIPO_DE_COCINA] en [CIUDAD]. Reemplazá cada corchete con mi información real; si un dato falta, dejalo como [FALTA: ...] en vez de inventarlo — nunca inventes platos, precios ni horarios.

OBJETIVO
Que alguien que busca dónde comer esta noche entienda en 8 segundos el tipo de experiencia (informal/formal, precio aproximado, tipo de cocina) y llegue a reservar sin fricción — la reserva es la única conversión que importa.

AUDIENCIA
Comensales que ya decidieron salir a comer algo especial y están comparando 3-4 opciones en su teléfono, caminando o en el auto — mobile es el contexto real de uso, no el desktop.

MARCA
Nombre: [RESTAURANT_NAME]. Tono: cálido pero no informal — se nota que hay cuidado sin caer en la pomposidad. Paleta: fondo cálido crema o piedra (nunca blanco frío de clínica), acento en un tono tierra u óxido, tipografía serif editorial para títulos (evoca menú impreso) + sans para textos funcionales (horarios, dirección).

DIRECCIÓN DE DISEÑO
La fotografía de comida es la protagonista absoluta: cada plato ocupa el ancho completo o la mitad de la pantalla, nunca un thumbnail chico. Composición con aire (nada de grillas apretadas de 4 columnas de fotos). El menú se presenta como tipografía editorial (nombre del plato + descripción breve + precio alineado a la derecha con puntos guía), nunca como una tabla de spreadsheet ni un PDF incrustado.

ARQUITECTURA DE INFORMACIÓN
Nav (logo + Menú + Reservar, sticky) → Hero con foto de plato hero + nombre + una frase → Filosofía/historia breve (2-3 oraciones, con foto del chef o del espacio) → Menú destacado (5-6 platos con foto) → Ambiente (galería de 3-4 fotos del espacio) → Reservas (horarios, ubicación, botón grande) → Footer con redes y contacto.

ESTRUCTURA DE PÁGINA
1. Hero: foto de plato a página completa con overlay sutil para legibilidad, nombre del restaurante en serif grande, una frase que resume la propuesta (ej. "Cocina de mercado, fuego a leña").
2. Historia: texto corto + una foto (del chef, del espacio o de un ingrediente), nunca un muro de texto.
3. Menú destacado: cada plato con foto grande, nombre, descripción de una línea, precio — diseño tipo "página de menú de autor", no lista con viñetas.
4. Ambiente: 3-4 fotos del espacio en un layout asimétrico (no grid perfecto de cuadrados iguales).
5. Reservas: días y horarios claros, dirección con link a Maps, botón de reserva (a un sistema externo tipo OpenTable/Resy si corresponde, o WhatsApp si es un restaurante más chico).

COMPONENTES
Botón de reservar: sólido, color de acento, esquinas apenas redondeadas (no pill completo — se siente más editorial con esquinas casi rectas). Los precios del menú van con puntos guía (....) entre el nombre del plato y el precio, técnica clásica de menú impreso.

DIRECCIÓN DE COPY
Descripciones de plato cortas y sensoriales (ingrediente + técnica, no adjetivos vacíos tipo "delicioso"). El nombre del restaurante y su historia se cuentan en primera persona plural del equipo, sin exagerar.

REGLAS RESPONSIVE
En mobile las fotos de plato siguen ocupando el ancho completo (nunca se recortan a un cuadrado forzado que pierda el plato de foco). El menú en mobile: nombre y precio pueden ir en la misma línea si el nombre es corto, o el precio baja a una segunda línea alineado a la derecha si el nombre es largo — nunca se superponen.

ANIMACIONES
Fade-up suave al entrar cada sección en viewport. Ligero zoom-in (scale 1 a 1.05 en 8s, loop) en la foto del hero, muy sutil, para que no se sienta una foto estática muerta. Nada de carruseles automáticos en el menú — el usuario tiene que poder leerlo a su ritmo.

ACCESIBILIDAD
El overlay sobre la foto del hero tiene que garantizar 4.5:1 de contraste para el texto — probar con overlays de gradiente (transparente arriba, oscurecido abajo donde va el texto) en vez de un oscurecido parejo que le quite vida a la foto entera.

SEO
Title: "[RESTAURANT_NAME] — [TIPO_DE_COCINA] en [CIUDAD]". Meta description con la propuesta + ubicación. Schema.org tipo Restaurant con dirección, horarios y rango de precios — esto es lo que hace que Google muestre las estrellas y el horario en el resultado de búsqueda.

RENDIMIENTO
Las fotos de comida pesan: servir en WebP/AVIF con compresión agresiva mantiendo calidad visual, dimensiones explícitas para evitar layout shift, lazy loading en todo lo que esté debajo del fold. La foto del hero es la única que carga con prioridad alta.

REQUISITOS TÉCNICOS
Schema.org Restaurant en JSON-LD. HTML semántico con las secciones de menú marcadas de forma que un lector de pantalla entienda "esto es un plato, esto es su precio".

CONTROL DE CALIDAD FINAL
¿Las fotos dan ganas de comer o se ven genéricas de banco de imágenes? ¿Se puede reservar en menos de 3 clics desde que se entra? ¿El menú se lee como una pieza de diseño o como una lista de Excel pegada?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá paleta y tipografía sin tocar la estructura del menú ni las fotos.",
      content: `Ajustá SOLO la identidad visual de Casa, sin tocar el layout:
1. Paleta: reemplazá el crema/piedra base por [COLOR_DE_MARCA] si mi restaurante tiene una identidad de color propia, manteniendo la calidez (evitar blancos fríos aunque el color de marca sea frío — agregar un tinte cálido de fondo igual).
2. Tipografía: si mi marca usa una serif distinta a la elegida, reemplazala manteniendo el mismo rol (títulos en serif, funcional en sans).
3. Logo: integralo en el nav; si es un isotipo, puede repetirse como marca de agua sutil en la sección de reservas.
No toques: el tamaño de las fotos de plato, el diseño del menú con puntos guía, ni el orden de las secciones.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá el menú, la historia y los datos reales de tu restaurante.",
      content: `Reescribí el copy de Casa con mi información real:

Restaurante: [RESTAURANT_NAME]
Tipo de cocina: [TIPO_DE_COCINA]
Ciudad y dirección: [DIRECCION]
Frase del hero: [FRASE]
Historia breve (2-3 oraciones): [HISTORIA]
Menú destacado (nombre, descripción de una línea, precio — mínimo 5 platos): [MENU]
Horarios: [HORARIOS]
Reservas (link o WhatsApp): [CONTACTO_RESERVA]

Reglas:
- Las descripciones de plato mencionan ingrediente y técnica, no adjetivos genéricos.
- Si no tengo un dato (ej. horarios de fin de semana), dejá [FALTA: horario fin de semana] — nunca un horario inventado, es el tipo de error que hace perder un cliente real.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento mínimo: que la comida respire, sin distraer del menú.",
      content: `Sumá estas animaciones a Casa, todas livianas:
1. Foto del hero: zoom sutil (scale 1 → 1.05, 8s, ease-in-out, loop infinito) para que no se sienta congelada. Respetar prefers-reduced-motion.
2. Fade-up de 16px al entrar cada sección en viewport, una sola vez.
3. Fotos de la galería de ambiente: leve escala al hover (scale 1.03, 300ms) para dar sensación táctil.
No agregues: carrusel automático en el menú (el usuario tiene que leerlo a su ritmo), ni parallax en las fotos de plato (compite con la nitidez que necesita la comida para verse apetecible).`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "El Schema.org de restaurante es lo que más impacto tiene acá.",
      content: `Optimizá el SEO de [RESTAURANT_NAME]:
1. Title: "[RESTAURANT_NAME] — [TIPO_DE_COCINA] en [CIUDAD]".
2. Meta description con la propuesta y la ubicación, bajo 155 caracteres.
3. Agregá JSON-LD Schema.org tipo Restaurant: name, address, servesCuisine, priceRange, openingHours. Esto es lo que hace aparecer horarios y ubicación directamente en Google.
4. Open Graph con la foto del hero (el plato más representativo).
5. Alt text en cada foto de plato con el nombre real del plato, no "foto1.jpg".
6. Si hay reseñas reales (Google, TripAdvisor), considerá sumar aggregateRating al Schema — solo con datos reales, nunca inventados.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "El menú y las fotos de plato son lo más delicado en mobile.",
      content: `Revisá el responsive de Casa en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Fotos de plato: ancho completo en mobile, altura proporcional (no forzar un cuadrado que corte el plato).
2. Menú: nombre + precio en la misma línea si entran, si no el precio baja alineado a la derecha en su propia línea — nunca se superponen ni el precio queda pegado al texto.
3. La galería de ambiente pasa de layout asimétrico en desktop a una columna en mobile, manteniendo el orden de importancia de las fotos.
4. El botón de reservar queda siempre visible o fácil de alcanzar (considerar un botón sticky en mobile si el sitio es largo).
5. Verificar que el overlay de texto sobre la foto del hero mantenga el contraste también en mobile, donde la foto se recorta distinto.`,
    },
  ],
};
