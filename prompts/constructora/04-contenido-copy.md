TEMPLATE:
Constructora

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: registrar el contenido REAL de `/preview/constructora` (marca demo "NIVEL") tal como quedó escrito, el tono de voz, y qué debe reemplazarse por cada futura constructora que compre este template. **Todo lo que sigue es contenido DEMO/ficticio** — nombres, cifras, testimonio y datos de contacto no representan una empresa ni personas reales, y no deben convertirse en datos reales sin que el cliente los provea.

---

## Tono de voz

Frases cortas, directas, sin adjetivos vacíos ("de excelencia", "líder del mercado"). Cada headline de sección es una afirmación simple, casi un título de revista de arquitectura — no una pregunta retórica ni una lista de beneficios. Segunda persona ("tu obra", "tu proyecto") solo en el bloque de Contacto y CTA, donde se le habla directo al visitante; el resto del copy habla en primera persona plural implícita ("Construimos...") sin usar el pronombre.

## Estructura de titulares

- **Eyebrow** (encabezan cada sección): 2-4 palabras, mayúscula, tracking amplio. Ej: "PROYECTOS", "MATERIA / FORMA / DETALLE", "ARCHITECTURE / IN MOTION" (única excepción en inglés, a propósito — es el nombre del formato bento de video, no una traducción de la sección).
- **H1 del hero**: "CONSTRUIMOS LO QUE PERMANECE." — 3 líneas, la última con tratamiento visual especial (`LiquidText`).
- **H2 de sección**: una frase corta y completa, nunca un fragmento. Ej: "Obra construida y en marcha.", "De la obra al espacio habitado.", "Lo que se toca, importa.", "Todo el proceso, en un solo lugar.", "Del primer trazo a la entrega.", "Un equipo que sigue la obra de cerca, de punta a punta."
- **CTA final**: "¿TENÉS UN PROYECTO?" en mayúscula y tamaño gigante — es el único titular formulado como pregunta directa.

## CTAs (todos los que existen en la página)

| Texto | Ubicación | Acción |
|---|---|---|
| Ver proyectos | Hero | Ancla a #proyectos |
| Conocé nuestro proceso | Hero | Ancla a #proceso |
| Solicitar proyecto | Nav | Ancla a #contacto |
| Explorar proyecto | Hover de cada fila de proyecto | Link a la ficha del proyecto |
| Iniciar proyecto | Sección CTA | Ancla a #contacto |
| Hablar por WhatsApp | Sección Contacto | Abre WhatsApp con mensaje pre-armado |
| Enviar proyecto | Botón de submit del formulario | Envía el formulario (demo, sin backend real) |
| Escribir por WhatsApp / Enviar mi proyecto | Ficha de cada proyecto | WhatsApp con mensaje contextual al proyecto / vuelve al formulario de contacto |

## Proyectos (4, DEMO)

| # | Nombre | Categoría | Ubicación | m² | Año | Estado |
|---|---|---|---|---|---|---|
| 01 | Torre Origen | Residencial | Córdoba | 3.200 m² | 2026 | En construcción |
| 02 | Edificio Cristal | Corporativo | Córdoba | 4.800 m² | 2025 | Terminado |
| 03 | Casa Alto Roble | Residencial | Villa Allende, Córdoba | 420 m² | 2025 | Terminado |
| 04 | Casa Costanera | Residencial | Nueva Córdoba, Córdoba | 380 m² | 2024 | Terminado |

Cada uno tiene además una descripción de 2-3 líneas y una galería de 3 imágenes en su ficha (`/proyecto/[slug]`). **Reemplazar por los proyectos reales de cada constructora** — nombre, categoría, ubicación, m², año, estado, descripción, imagen de portada y galería.

## Servicios (6, genéricos del rubro — reutilizables tal cual o editables)

01 Arquitectura · 02 Construcción · 03 Dirección de obra · 04 Desarrollos · 05 Reformas · 06 Proyectos industriales — cada uno con una descripción de una línea. Estos SÍ son razonablemente genéricos para cualquier constructora; lo que cambia por cliente es cuáles de los 6 ofrece y el texto exacto de cada descripción.

## Números (4, EXPLÍCITAMENTE DEMO)

+120 Proyectos · 85 mil M² construidos · 18 Años · 4 Provincias, con la aclaración visible en pantalla "Cifras de ejemplo — se editan por las reales de tu empresa." **Nunca mostrar estos números como reales de una empresa** — deben reemplazarse por las cifras verdaderas del cliente antes de publicar, o quitarse si el cliente no las tiene.

## Proceso (6 pasos, genérico del rubro)

01 Idea · 02 Proyecto · 03 Presupuesto · 04 Planificación · 05 Construcción · 06 Entrega, cada uno con una descripción de una línea. Genérico y reutilizable — el orden y la cantidad de pasos podrían ajustarse si una constructora tiene un proceso distinto (ej. sin etapa de "Reformas" si no ofrece ese servicio).

## Materiales (4, ligados a las fotos disponibles)

Piedra · Madera & Vidrio · Mármol & Superficies · Metal & Fachada — elegidos según las fotos reales provistas, no un listado universal. **Si el cliente tiene otro tipo de fotos de detalle**, esta sección debe reconstruirse alrededor de esas imágenes, no simplemente cambiar el texto.

## Equipo (4 personas, EXPLÍCITAMENTE DEMO — nombres y roles ficticios)

Lucía Ferreyra (Arquitecta · Dirección de proyectos), Martín Bianchi (Ingeniero civil), Sofía Ordóñez (Arquitecta · Diseño), Nicolás Paz (Jefe de obra) — cada uno con una bio de una línea. Las tarjetas usan iniciales sobre vidrio, no fotos de stock haciéndose pasar por personas reales. **Reemplazar por el equipo real** (nombre, rol, bio) de cada constructora; si no tienen 4 personas para mostrar, ajustar la cantidad de tarjetas, no inventar más.

## Testimonio (1, EXPLÍCITAMENTE DEMO)

> "El verdadero valor de una obra se nota cuando empieza a ser habitada." — Cliente, Casa Alto Roble, 2025

Con la aclaración visible "Testimonio de ejemplo". **Reemplazar por un testimonio real y autorizado** por el cliente final de la constructora antes de publicar — nunca inventar una cita atribuida a una persona real.

## Contacto (DEMO — placeholders, no datos reales)

- WhatsApp: `5493511230000` (placeholder, con comentario explícito en el código "reemplazar por el número real")
- Dirección: Av. Rafael Núñez 4500, Córdoba
- Horario: Lun a Vie 9 a 18 h
- Email: proyectos@nivel-constructora.demo
- Instagram: @nivel.constructora

Todo esto se reemplaza por los datos reales de cada constructora — son los primeros 5 campos a editar al instalar el template para un cliente nuevo.

## Tipos de proyecto del formulario (genérico, reutilizable)

Casa · Edificio · Comercial · Industrial · Reforma · Otro — cubre los tipos de obra habituales de una constructora; ajustar solo si el cliente tiene una categoría muy distinta (ej. obra pública).
