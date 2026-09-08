TEMPLATE:
Odontología

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: describir la arquitectura completa de `/preview/odontologia` — el orden real de las secciones, para qué existe cada una, cómo se comporta y cómo cambia en mobile. Es el mapa de la página tal como quedó, no el pedido original.

---

## Orden real de secciones (de arriba a abajo)

1. Barra de preview (fija, fuera del diseño real del cliente)
2. Navbar
3. Hero
4. Servicios
5. Motivos frecuentes de consulta
6. Franja de números (banda oscura)
7. Tecnología
8. Equipo
9. Antes / Después
10. Galería
11. Opiniones (testimonios)
12. Coberturas
13. Reservar turno
14. FAQ
15. Contacto
16. Footer
17. WhatsApp flotante (persistente, fuera del flujo)

A continuación, cada sección con su propósito, comportamiento e interacción.

---

### 1. Navbar
**Propósito**: navegación ancla + CTA de conversión siempre a mano.
**Comportamiento**: transparente sobre el hero; al hacer scroll (>8px) pasa a `.odo-glass` (vidrio esmerilado) con borde inferior. El cambio se controla con un listener de `scroll` en React state (`scrolled`).
**Desktop**: logo + 5 links de ancla (Servicios, Tecnología, Equipo, Opiniones, Preguntas) con subrayado animado en hover + botón CTA refractivo "Reservar turno" a la derecha.
**Mobile**: los links y el CTA se ocultan; aparece un botón hamburguesa que despliega un panel `.odo-glass` con los mismos links en columna + el mismo CTA.

### 2. Hero
**Propósito**: primera impresión — quién es la clínica, qué promete, y los dos caminos posibles (reservar o seguir explorando).
**Estructura**: composición editorial 55/45 (no el genérico "texto izquierda, foto horizontal derecha"). Columna izquierda: eyebrow ("Odontología integral · Córdoba"), H1 de dos líneas con la última palabra en efecto líquido, subtítulo, CTA primario + link secundario. Columna derecha: la foto (cuadrada, con `aspect-ratio` respetado) sobre superficie `.odo-raised`, con dos chips flotantes en vidrio: "Atención personalizada" (abajo-izquierda) y el badge de años de experiencia con text-roll (arriba-derecha).
**Comportamiento**: la imagen tiene `priority` (carga inmediata, sin lazy).
**Responsive**: en mobile los dos chips flotantes se ocultan (`hidden sm:block`) para no saturar una imagen que ya ocupa todo el ancho; el layout pasa de 2 columnas a 1 (texto arriba, imagen abajo).

### 3. Servicios
**Propósito**: mostrar la oferta completa (8 especialidades) sin abrumar con texto.
**Comportamiento**: grid de tarjetas con foto + número + título + una línea de teaser. Al hacer click, la tarjeta se expande in-place mostrando la lista de sub-servicios (acordeón individual, no exclusivo — pueden quedar varias abiertas). Resuelve "resumir + expandir" en vez de una pared de texto.
**Desktop**: grid de 4 columnas (`lg:grid-cols-4`, 2 en tablet).
**Mobile**: deja de ser grid — pasa a **scroll horizontal** con tarjetas de ancho fijo (248px) y un aviso arriba ("Deslizá para ver los 8 servicios →"). Cambio hecho después de la primera entrega: 8 tarjetas apiladas hacían un scroll vertical demasiado largo.

### 4. Motivos frecuentes de consulta
**Propósito**: que alguien que "no sabe si esto es para su problema" se reconozca rápido (dolor de muela, bruxismo, diente roto, etc.), sin fotos — solo ícono + palabra sobre una superficie hundida.
**Comportamiento**: riel horizontal con scroll nativo + dos botones de navegación (prev/next) centrados debajo, con efecto "dock" (se agrandan y levantan al hover, con efecto en cascada sobre el vecino).
**Responsive**: en mobile los botones de navegación se ocultan (el scroll táctil nativo alcanza); el riel sigue siendo horizontal en todos los tamaños (no se apila nunca, son datos cortos).

### 5. Franja de números
**Propósito**: prueba social cuantitativa (años, especialidades, pacientes, valoración) — rompe el ritmo claro/oscuro de la página.
**Comportamiento**: los 4 números animan de 0 al valor real la primera vez que entran en viewport (`CountUp`). Un brillo diagonal muy sutil cruza el fondo cada 7s.
**Responsive**: `flex-wrap` — en mobile los 4 números quedan en 2 columnas centradas.

### 6. Tecnología
**Propósito**: el diferencial técnico (radiología digital, diagnóstico 3D, historia clínica digital, fotografía clínica, sala equipada), presentado como carrusel para no listar 5 párrafos seguidos.
**Comportamiento**: carrusel horizontal de tarjetas de ancho fijo (340px) con foto + número + título + texto corto, más flechas prev/next debajo (sin efecto dock — a propósito distinto del riel de Motivos, para no repetir la misma firma dos veces seguidas).
**Responsive**: mismo carrusel en mobile, con tarjetas un poco más angostas (290px) y las flechas visibles también.

### 7. Equipo
**Propósito**: poner cara a quién atiende — reemplaza el típico "directorio médico" acartonado.
**Comportamiento**: tarjetas que **giran al hover** (`FlippingCard`): adelante, foto + nombre + especialidad superpuestos sobre un degradado; atrás, nombre + especialidad + matrícula (MP) demo + bio corta, sobre fondo oscuro.
**Responsive**: en mobile el hover no existe — el giro sigue disparando al toque (`group-hover` responde a touch como un tap sostenido en la mayoría de navegadores móviles), y hay un aviso arriba ("Tocá una tarjeta para conocerlos"). Grid de 2 columnas en desktop, 1 en mobile.

### 8. Antes / Después
**Propósito**: mostrar resultado estético sin prometer un resultado garantizado.
**Comportamiento**: imagen única (efecto de "hoja pelándose" que revela dientes más blancos) con la etiqueta "Imagen ilustrativa" en vidrio superpuesta, y un párrafo que aclara explícitamente que no es una promesa de resultado.
**Nota de diseño**: no es un slider drag de dos fotos — la imagen fuente es una sola pieza compuesta, no dos fotos reales del mismo paciente en momentos distintos. Se documenta para que quede claro que no falta un componente, es una decisión deliberada de honestidad (ver Prompt 04).

### 9. Galería
**Propósito**: mostrar el consultorio, el equipo trabajando y detalles de tratamientos.
**Comportamiento**: grid de 9 fotos (la primera ocupa 2×2, el resto 1×1), con lightbox al click: overlay oscuro, imagen central `object-contain`, flechas prev/next, cierre con click afuera, botón ✕ o tecla Escape, navegación también con flechas del teclado. El scroll de la página se bloquea mientras el lightbox está abierto.
**Responsive**: grid de 3 columnas en desktop, 2 en mobile (la foto destacada sigue ocupando 2 columnas).

### 10. Opiniones (testimonios)
**Propósito**: prueba social cualitativa.
**Comportamiento**: marquee horizontal infinito (6 testimonios duplicados para el loop continuo), se pausa al hover.
**Responsive**: mismo comportamiento en todos los tamaños — el ancho de tarjeta fijo (300px) hace que en mobile se vean menos por vez, lo cual es intencional (no hay layout distinto).

### 11. Coberturas
**Propósito**: comunicar que se trabaja con obras sociales/prepagas sin inventar nombres reales.
**Comportamiento**: segundo marquee, más angosto y más rápido, con píldoras sobre superficie hundida (`.odo-well`) en vez de tarjetas — para que se lea como una franja secundaria, no como otra sección de testimonios.

### 12. Reservar turno
**Propósito**: convertir la visita en un contacto real, sin simular un sistema de turnos que no existe.
**Comportamiento**: wizard de 3 pasos (Motivo → Cuándo → Tus datos) con indicador de progreso, que arma un mensaje de WhatsApp prellenado y lo abre en una pestaña nueva. Ver detalle completo en el Prompt 03.
**Responsive**: el wizard es una tarjeta `.odo-well` de ancho fluido — en mobile los botones de motivo pasan de 3 a 2 columnas.

### 13. FAQ
**Propósito**: resolver objeciones antes de que la persona abandone.
**Comportamiento**: acordeón clásico (una pregunta abierta por vez), con la primera abierta por defecto para que la página nunca se vea "vacía" de contenido en esa sección.
**Responsive**: sin cambios — el acordeón ya es mobile-friendly por diseño.

### 14. Contacto
**Propósito**: dirección, horario y los dos caminos de contacto (WhatsApp, cómo llegar) + mapa.
**Comportamiento**: mapa de Google Maps embebido (`iframe`, `loading="lazy"`) apuntando a una búsqueda genérica de la zona (no una dirección exacta real, porque la dirección es demo).
**Responsive**: 2 columnas en desktop (texto + mapa), apiladas en mobile.

### 15. Footer
**Propósito**: cierre de página con navegación secundaria y contacto, sobre fondo oscuro.
**Comportamiento**: 3 columnas (marca + redes, contacto, navegación) + línea de copyright. Ver Prompt 03/05 para el detalle del componente.

### 16. WhatsApp flotante
**Propósito**: salida de contacto siempre visible, sin depender de que la persona llegue hasta Contacto.
**Comportamiento**: burbuja circular en vidrio, fija en la esquina inferior derecha, con tooltip ("¿Querés consultar?") que aparece al hover. Mensaje prellenado genérico, distinto al del wizard de turno.
**Responsive**: misma posición y tamaño en todos los breakpoints — es intencional que no estorbe pero tampoco se esconda en mobile.
