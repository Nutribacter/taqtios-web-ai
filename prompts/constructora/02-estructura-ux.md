TEMPLATE:
Constructora

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: describir la estructura REAL de `/preview/constructora`, sección por sección, en el orden en que aparecen — jerarquía, objetivo de cada bloque, comportamiento e interacción, y las diferencias entre desktop y mobile.

---

## Orden real de secciones (de arriba a abajo)

1. Barra de preview + Nav
2. Hero (video)
3. Proyectos
4. Antes / Después (transformación)
5. Números + marquee
6. Servicios
7. Materiales
8. Video bento ("Architecture / In Motion")
9. Proceso (stepper)
10. Nosotros / Equipo
11. Testimonio
12. CTA
13. Contacto
14. Footer
15. WhatsApp flotante

No existen como secciones independientes: "Scroll Expansion" (el reveal cinematográfico vive DENTRO del hero, no es un bloque aparte), "Spatial Product Showcase" (se resolvió como el comparador Antes/Después), "Coverflow Carousel" ni "Card 21" (se consolidaron en la sección de Proyectos, ver el porqué en el Prompt 03). Esto es una decisión de diseño explícita, no una funcionalidad faltante.

### 1. Barra de preview + Nav
- Barra superior fija: aviso de "contenido de ejemplo" + link de vuelta al catálogo — igual en todos los rubros de TAQTios.
- Nav debajo, `sticky`: transparente sobre el video del hero, pasa a `.niv-glass` (vidrio oscuro) al hacer scroll (`scrollY > 8`). Logo "NIVEL" a la izquierda, 5 links de ancla al centro/derecha (Proyectos, Servicios, Proceso, Nosotros, Contacto), CTA "Solicitar proyecto" a la derecha.
- Mobile: el menú de texto se esconde bajo un botón hamburguesa; al abrir, despliega un panel `.niv-glass` con los mismos 5 links + el CTA.

### 2. Hero
- `100svh` de alto, video del dron sobre el edificio en obra a pantalla completa, en loop.
- Eyebrow con `TextRoll` en loop, H1 de tres líneas con reveal escalonado ("CONSTRUIMOS / LO QUE / PERMANECE." — la última palabra en `LiquidText`), dos CTAs ("Ver proyectos" en vidrio, "Conocé nuestro proceso" en texto), indicador de scroll (`ChevronDown` con `animate-bounce`).
- Objetivo: impacto inmediato por video + tipografía + espacio — sin llenar la pantalla de elementos.

### 3. Proyectos
- Título de sección + lista editorial de los 4 proyectos, apilados verticalmente (no una grilla de cards chicas). Cada fila: imagen grande (2/3 del ancho en desktop) + ficha (número, categoría, nombre, ubicación, m², año, estado) a la derecha.
- Interacción: la imagen hace zoom sutil al hover y revela un botón "Explorar proyecto"; toda la fila es un `Link` a `/preview/constructora/proyecto/[slug]`.
- Mobile: la fila pasa a columna (imagen arriba, ficha abajo).

### 4. Antes / Después
- Título centrado + un comparador de imágenes con divisor arrastrable (`ConstructoraBeforeAfter`), con nota aclarando que las dos imágenes no son necesariamente de la misma obra.
- Interacción: arrastrar con mouse/touch, o mover el `<input type="range">` accesible por teclado.

### 5. Números + marquee
- Fila horizontal centrada (ancho ajustado al contenido, no una grilla que ocupe todo el ancho) con 4 cifras animadas por `CountUp` (+120 Proyectos, 85 mil M² construidos, 18 Años, 4 Provincias) + aclaración de que son cifras de ejemplo.
- Debajo, separado por bordes horizontales: un marquee de dos líneas (`ScrollVelocity`) con texto de marca/servicios corriendo en sentidos opuestos, a baja velocidad base y que acelera levemente con la velocidad real de scroll del usuario.
- Es la sección más baja en altura del template — funciona como pausa rítmica entre Antes/Después y Servicios.

### 6. Servicios
- Título de sección + 6 filas full-width (no cards), cada una con número + título grande + descripción. Al pasar el mouse, la fila revela de fondo una foto relacionada con un overlay oscuro — sin usar espacio adicional ni ocultar contenido.
- Mobile: la descripción se muestra siempre (no depende de hover, que no existe en touch).

### 7. Materiales
- Título "Materia / Forma / Detalle" + grilla de 4 tarjetas (Piedra, Madera & Vidrio, Mármol & Superficies, Metal & Fachada), cada una con imagen de fondo, zoom al hover y descripción que se revela debajo del título.
- 2 columnas en tablet, 4 en desktop.

### 8. Video bento — "Architecture / In Motion"
- Título + grilla bento de los 4 videos: el primero (Obra) ocupa un tile grande (2×2), los otros tres (Materia, Espacio, Resultado) tiles chicos.
- Cada tile reproduce en loop, muted, SOLO mientras está en viewport (`IntersectionObserver`); al hacer click abre un lightbox con controles y sonido.

### 9. Proceso
- Título "Del primer trazo a la entrega" + un stepper (`OnboardingStepper`): un paso a la vez (de 6), con transición deslizante, avanza solo cada 5s (se pausa al pasar el mouse) y también se navega a mano con flechas o puntos de progreso.
- Reemplaza lo que originalmente era una grilla estática de 6 tarjetas — ver el porqué del cambio en el Prompt 03.

### 10. Nosotros / Equipo
- Título + banner panorámico de la oficina (`aspect-[21/9]`) + 4 tarjetas de equipo (`FlippingCard`): frente con iniciales en vidrio + nombre + rol, reverso con la bio.
- Mobile: las 4 tarjetas pasan a 2 columnas.

### 11. Testimonio
- Una sola cita grande centrada, con autor/proyecto y la aclaración "Testimonio de ejemplo" — deliberadamente no es un carrusel de varios testimonios.

### 12. CTA
- Imagen de fondo (el edificio terminado) con overlay oscuro + título gigante "¿TENÉS UN PROYECTO?" + CTA en vidrio hacia el formulario de contacto.

### 13. Contacto
- Dos columnas: información de contacto + WhatsApp a la izquierda, formulario (Nombre, Email, WhatsApp, Tipo de proyecto, Ubicación, Mensaje) en un panel de vidrio a la derecha. Al enviar, el formulario se reemplaza por un mensaje de confirmación (sin backend real — ver Prompt 05).
- Mobile: las columnas se apilan.

### 14. Footer
- Minimalista: logo + descripción corta, contacto (WhatsApp, mail, dirección, horario), navegación de anclas, línea legal.

### 15. WhatsApp flotante
- Botón circular verde fijo abajo a la derecha en TODA la página, con el mensaje pre-armado ("Hola, quería consultar por un proyecto.").
