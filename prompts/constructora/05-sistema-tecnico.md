TEMPLATE:
Constructora

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: describir la implementación técnica REAL de `/preview/constructora` — carpetas, rutas, componentes, modelo de contenido, assets, Next/Image, optimización de video, responsive, accesibilidad y qué tan preparado está para convertirse en un template reutilizable y vendible.

---

## 1. Estructura de carpetas

```
src/app/preview/constructora/
├── page.tsx                        — página principal (todas las secciones, "use client")
├── content.ts                      — content model completo del rubro
├── ConstructoraFooter.tsx          — footer local del rubro
├── ConstructoraBeforeAfter.tsx     — comparador antes/después con divisor arrastrable
├── ConstructoraVideoBento.tsx      — grilla bento de los 4 videos + lightbox
└── proyecto/[slug]/
    └── page.tsx                    — ficha de proyecto (ruta dinámica, generateStaticParams)

src/components/                     — compartidos entre TODOS los rubros del catálogo
├── ScrollReveal.tsx, CountUp.tsx, TextRoll.tsx, LiquidText.tsx, FlippingCard.tsx  (ya existían)
├── ScrollVelocity.tsx              — NUEVO, creado para este rubro
└── OnboardingStepper.tsx           — NUEVO, creado para este rubro

public/templates/constructora/      — assets finales, optimizados, servidos por Next
raw-fotos/constructora/             — assets originales sin procesar (gitignored, NO se sirve)
scripts/optimize-constructora-assets.mjs  — script de conversión de fotos (sharp)
```

## 2. Rutas

- `/preview/constructora` — página principal, todo en un solo archivo `page.tsx` (~660 líneas), `"use client"` porque usa `useState`/`useEffect` para el nav sticky, el menú mobile, el formulario y `prefers-reduced-motion`.
- `/preview/constructora/proyecto/[slug]` — ficha de proyecto, **server component** con `generateStaticParams()` (genera las 4 rutas estáticas en build: `torre-origen`, `edificio-cristal`, `casa-alto-roble`, `casa-costanera`) y `notFound()` si el slug no existe.

## 3. Componentes y su responsabilidad

Ver el detalle funcional completo en el Prompt 03. Resumen de responsabilidad:
- `page.tsx`: layout, nav, hero, y las secciones que no ameritaron archivo propio (Proyectos, Números, Servicios, Materiales, Proceso, Equipo, Testimonio, CTA, Contacto) — con dos funciones locales sin exportar (`ProjectRow`, `ServiceRow`) y un helper (`Field` para inputs del formulario, `initials` para las iniciales del equipo).
- `ConstructoraFooter.tsx`, `ConstructoraBeforeAfter.tsx`, `ConstructoraVideoBento.tsx`: un componente por bloque con lógica propia (estado, refs, `IntersectionObserver`, pointer events).
- `ScrollVelocity.tsx`, `OnboardingStepper.tsx`: en `src/components/` porque no tienen nada específico de Constructora — cualquier rubro futuro los puede importar tal cual.

## 4. Content model — qué es "configuración del cliente"

Todo el contenido editable vive en `content.ts`, sin una sola palabra de copy hardcodeada en `page.tsx` (salvo textos de UI fijos como "Ver el detalle" — ver Prompt 04 para qué es y qué no es editable):

```ts
COMPANY          // nombre, tagline, whatsapp, dirección, horario, email, instagram
NAV_LINKS        // 5 links de ancla
FEATURED_VIDEOS  // los 4 videos: id, label, title, src, poster
HERO_VIDEO       // = FEATURED_VIDEOS[0]
PROJECTS         // 4 proyectos: id, slug, name, category, location, area, year, status, image, description, gallery[]
getProject(slug) // helper de búsqueda
BEFORE_AFTER     // before/after src+label, nota
NUMBERS          // 4 cifras: value, prefix?, suffix?, label
SERVICES         // 6 servicios: n, title, description, image
MATERIALS        // 4 materiales: title, description, image
PROCESS          // 6 pasos: n, title, description
TEAM             // 4 personas: name, role, bio
TESTIMONIAL      // quote, author, project
PROJECT_TYPES    // 6 opciones del select de contacto
```

Tipos exportados (`Project`, `ServiceItem`, `FeaturedVideo`) para que `page.tsx` y la ficha de proyecto tipen sus props sin duplicar la forma de los datos.

## 5. Assets — inventario final

**Fotos** (14 fuente + 4 posters de video extraídos con `ffmpeg` = 18 archivos WebP finales, servidos también en AVIF automático — ver punto 5):

| Archivo | Peso |
|---|---:|
| hero-poster.webp | 526 KB |
| proceso-obra-grua.webp | 525 KB |
| proyecto-casa-madera-vidrio.webp | 355 KB |
| poster-dron-edificio.webp | 442 KB |
| proyecto-casa-pileta.webp | 264 KB |
| proyecto-edificio-obra.webp | 264 KB |
| proyecto-edificio-terminado.webp | 211 KB |
| bento-living.webp | 187 KB |
| despues-terminado.webp | 148 KB |
| antes-obra.webp | 147 KB |
| material-piedra.webp | 141 KB |
| poster-dron-casa-lujo.webp | 134 KB |
| poster-casa-lujo-03.webp | 121 KB |
| equipo-oficina.webp | 95 KB |
| bento-cocina.webp | 87 KB |
| proceso-planos.webp | 81 KB |
| poster-casa-interior-02.webp | 57 KB |
| material-bano.webp | 55 KB |

Total ≈ 3,76 MB (desde 27,6 MB de fuente original — conversión con `scripts/optimize-constructora-assets.mjs`, `sharp`, calidad 82, un ancho máximo por imagen calculado contra su uso real en la UI, nunca "achicar todo por igual").

**Videos** (4, H.264 1080p, sin audio, `+faststart`, comprimidos con `ffmpeg` — `sharp` no procesa video):

| Archivo | Peso | Uso |
|---|---:|---|
| video-dron-edificio.mp4 | 19,6 MB | Hero + tile grande del bento |
| video-casa-lujo-03.mp4 | 13,4 MB | Tile "Espacio" del bento |
| video-dron-casa-lujo.mp4 | 4,0 MB | Tile "Resultado" del bento |
| video-casa-interior-02.mp4 | 4,2 MB | Tile "Materia" del bento |

Total ≈ 41,2 MB (desde 335 MB de fuente original — reducción del 87%). CRF 26 para el hero, 25-26 para los secundarios; escala a 1920px de ancho manteniendo el aspect ratio original.

**Originales**: viven en `raw-fotos/constructora/` (fuera de `public/`, en `.gitignore` desde antes de este rubro) — nunca se sirven, quedan como fuente para volver a procesar si hace falta.

## 6. Next/Image — cómo se usa

- Ninguna etiqueta `<img>` nativa en todo el rubro — 100% `next/image`.
- `fill` + contenedor con `aspect-ratio`/altura fija en TODOS los casos (nunca width/height fijos) — evita layout shift sin importar el tamaño real de la imagen.
- `sizes` calculado contra el ancho REAL de renderizado de cada uso, no genérico. Ejemplos: proyectos `(max-width: 640px) 100vw, 66vw` (columna de 2/3 en desktop), materiales `(max-width: 1024px) 50vw, 25vw` (grilla 2/4 columnas), galería de la ficha de proyecto `(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 22vw` (columna angosta al lado del panel de contacto, no el ancho completo de pantalla).
- `priority` SOLO en las dos imágenes que son LCP real: el poster del hero cuando `prefers-reduced-motion` reemplaza al video, y el hero de la ficha de proyecto.
- **AVIF habilitado a nivel de proyecto** (`next.config.ts`, `images.formats: ["image/avif", "image/webp"]`) — Next sirve AVIF si el navegador lo acepta, si no cae a WebP. Esto afecta a TODOS los rubros del catálogo, no solo a Constructora; verificado que un tile de 384px pasa de 17,2 KB (WebP) a 8,4 KB (AVIF).

## 7. Video — atributos y estrategia de carga

- **Hero**: `autoPlay muted loop playsInline preload="auto"` + `poster` (frame extraído del propio video) — carga prioritaria razonable porque es el elemento más visible de toda la página.
- **Bento** (los 4 tiles): `muted loop playsInline preload="none"` + `poster` — NO autoplay nativo; un `IntersectionObserver` (`threshold: 0.4`) llama a `.play()`/`.pause()` según si el tile está en viewport, así los 4 videos nunca reproducen a la vez fuera de pantalla.
- **Lightbox** (al hacer click en un tile): `controls autoPlay playsInline`, sin `muted` — es la única reproducción con sonido, iniciada por una acción explícita del usuario.
- Con `prefers-reduced-motion: reduce`, el `<video>` del hero se reemplaza por una `<Image priority>` de su poster — nunca se fuerza autoplay a quien lo desactivó a nivel sistema operativo.

## 8. Responsive

- Mobile-first en Tailwind: cada sección tiene su propio breakpoint (`sm:`, `lg:`) ajustado a su contenido, no un sistema de grillas único.
- Hero: tipografía en `vw` (`11.5vw` mobile → `9vw` sm → `6.6vw` lg) — ajustada tras revisión porque la primera versión (`15vw`) desbordaba el viewport en 375px.
- Nav: menú de texto → botón hamburguesa + panel `.niv-glass` por debajo de `sm`.
- Proyectos, Contacto: de fila horizontal a columna apilada.
- Equipo, Materiales: de 4 columnas a 2 (`sm:grid-cols-2 lg:grid-cols-4`).
- Verificado sin overflow horizontal en 375px (`document.documentElement.scrollWidth === clientWidth`).

## 9. Accesibilidad

- Formulario con `<label htmlFor>` en todos los campos, `required` nativo en Nombre/Email.
- Comparador antes/después: `<input type="range">` real (invisible pero enfocable) para navegación por teclado, con `aria-label` describiendo qué compara.
- Botones de navegación del stepper, del lightbox y del menú mobile: todos con `aria-label` explícito; los puntos de progreso del stepper llevan `aria-current` en el activo.
- Botón de WhatsApp flotante: `aria-label="Hablar por WhatsApp"`.
- Contraste: texto principal `#F3F0E8` sobre fondo `#11110F` (~15:1); textos secundarios en opacidades de blanco (70/50/45/40/35/30%) — no se midió cada opacidad individualmente en esta ronda, pero ninguna baja de `white/30` sobre fondo oscuro puro.

## 10. `prefers-reduced-motion`

Tres comportamientos gatillados por un hook local (`usePrefersReducedMotion`, `matchMedia` + listener de cambios):
1. El `<video>` del hero se reemplaza por su poster estático.
2. `TextRoll` del eyebrow deja de loopear (`loop={!reducedMotion}`).
3. El reveal de línea del H1 (`niv-line-inner`) y el ruido de fondo (`niv-noise`) se apagan vía `@media (prefers-reduced-motion: reduce)` en CSS puro.

`ScrollReveal`, `FlippingCard` y `LiquidText` heredan el comportamiento por defecto de `motion` (que ya respeta reduced-motion) sin código adicional.

## 11. WhatsApp

Sin librería ni SDK: un solo patrón, `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(mensaje)}`, reutilizado en 3 lugares con mensajes contextuales distintos (genérico en el botón flotante y en Contacto, con el nombre del proyecto en cada ficha). El número es un placeholder documentado en `content.ts` — se reemplaza por el real al configurar un cliente.

## 12. Configuración — checklist para un cliente nuevo

1. `content.ts`: `COMPANY` (nombre, whatsapp, dirección, horario, email, instagram), `PROJECTS`, `NUMBERS` (o quitar la sección si no tiene cifras reales), `TEAM`, `TESTIMONIAL` (o quitar la sección si no tiene uno autorizado).
2. `public/templates/constructora/`: reemplazar las 14 fotos + 4 videos por los del cliente, corriendo `scripts/optimize-constructora-assets.mjs` de nuevo con los nuevos archivos en `raw-fotos/constructora/` (y comprimiendo los videos nuevos con `ffmpeg` siguiendo los mismos parámetros del punto 7 de este documento).
3. `SERVICES`, `PROCESS`, `MATERIALS`: editables tal cual, o ajustables si el cliente ofrece un mix distinto (ver Prompt 04).
4. Nada del sistema visual (paleta, tipografía, motion) debería tocarse por cliente — es la identidad del template, no del cliente.
