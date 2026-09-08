TEMPLATE:
Odontología

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: dejar la lógica de contenido del template — tono, estructura de textos, y qué es demo vs. qué debe cargar cada cliente. Todo el texto real vive en `src/app/preview/odontologia/content.ts`, separado del componente visual.

⚠️ **Ningún dato de este template es real.** Nombre de clínica, profesionales, matrículas, dirección, testimonios, cifras y coberturas son contenido de ejemplo (demo), pensado para mostrar la estructura — no para presentarse como información verídica de una clínica que existe.

---

## Tono de voz

Español rioplatense, cercano pero profesional — como si la clínica le hablara directo al paciente, nunca en tercera persona ni en un tono corporativo. Ejemplos reales del copy:
- "Tu sonrisa, en manos expertas." (hero, no "Bienvenido a nuestra clínica")
- "Contanos qué necesitás y te escribimos por WhatsApp para confirmar día y horario — no reservamos automáticamente." (honesto sobre lo que el sistema hace y no hace)
- "Cada boca es distinta, así que cada plan se arma en consulta — esto es una muestra de a qué apuntamos, no una promesa de resultado." (antes/después, evita prometer de más)

Reglas de tono aplicadas:
- Nunca términos médicos sin explicar (el copy de servicios usa "Alineadores invisibles", no "ortodoncia con sistema de alineación por férulas termoplásticas").
- Nunca superlativos vacíos ("la mejor clínica", "resultados garantizados").
- Los textos de UX (botones, ayudas) hablan en segunda persona ("Tocá una tarjeta para conocerlos", "Deslizá para ver los 8 servicios").

## Estructura de titulares

- **H1 del hero**: promesa corta de dos líneas + una palabra de cierre con tratamiento visual especial (efecto líquido). Fórmula: `[Beneficio central], [en manos] [atributo destacado].`
- **H2 de sección**: siempre precedido por un "eyebrow" en mayúsculas (`text-xs uppercase tracking-[0.3em]`) que da contexto antes del título grande. Ejemplo: "LO QUE TRATAMOS" → "Servicios".
- Los eyebrows son frases cortas que casi funcionan como pregunta o etiqueta ("¿Por qué consultan?", "El diferencial", "Último paso", "Dudas comunes") — le dan ritmo conversacional a la navegación por scroll.

## CTAs

Dos niveles, nunca mezclados:
- **CTA primario** (botón refractivo): siempre la misma acción — "Reservar turno" — repetida en navbar, hero, y contacto. Nunca cambia de texto entre secciones para no confundir sobre qué hace.
- **CTA secundario** (texto + flecha, sin fondo): "Conocer tratamientos" (hero → ancla a Servicios), "Contanos" (motivos → ancla a reservar), "Cómo llegar" (contacto → Google Maps), "Escribir por WhatsApp" (contacto, alternativa directa sin pasar por el wizard).

## Servicios (8 categorías)

Estructura fija por servicio: **número + título + teaser de una línea + 4 sub-ítems.** El teaser nunca repite el título ("Odontología General" → "Control, limpieza y prevención de base.", no "Servicios de odontología general"). Los 4 sub-ítems son la lista que aparece al expandir la tarjeta.

**Editable por cliente**: título, teaser, los 4 sub-ítems y la foto de cada categoría. La cantidad (8) y el criterio de agrupamiento (categorías amplias, no un servicio por tarjeta) es una decisión de UX documentada en el Prompt 02 — cambiarla a más de ~8-10 categorías vuelve a producir la pared de tarjetas que el diseño evita.

## Motivos frecuentes de consulta

8 pares ícono + palabra corta (2-3 palabras máximo: "Dolor de muela", no "Tengo dolor en una muela desde hace unos días"). Pensados como los términos que alguien buscaría o diría en un mensaje de WhatsApp, no como diagnósticos técnicos.

**Editable por cliente**: la lista completa (motivos + ícono asociado, de un set fijo de iconos Lucide ya mapeados en el código).

## Tecnología (5 slides)

Cada slide: **título de 2-3 palabras + una sola oración explicando el beneficio para el paciente**, no la ficha técnica del equipamiento. Ejemplo: "Radiología digital" → "Radiografías al instante, con mucha menos radiación que la placa tradicional." (beneficio: rapidez + menos radiación — no marca ni modelo del equipo).

**Editable por cliente**: título, texto y foto de cada slide. La cantidad de slides es flexible (el carrusel no depende de un número fijo).

## Equipo (2 profesionales, demo)

Estructura por persona: nombre + rol/especialidad + matrícula (MP) + bio corta (una oración, qué hace + un rasgo distintivo). **La matrícula es un número inventado** — ningún cliente real debe publicar esta página sin reemplazarla por su matrícula real (o quitar el campo si no aplica en su jurisdicción).

**Editable por cliente**: nombre, rol, matrícula, bio y foto — los 4 campos existen justamente para que se reemplacen antes de publicar.

## Testimonios (6, demo)

Frase corta en primera persona + nombre + apellido abreviado (no apellido completo, para no simular una persona real identificable). **No representan pacientes reales.** Cualquier cliente que use este template con testimonios reales debe tener el consentimiento correspondiente de esos pacientes.

## FAQ (7 preguntas)

Preguntas elegidas por ser las objeciones más comunes antes de agendar (costo, obra social, urgencias, qué llevar) — no preguntas genéricas de relleno. Respuestas de 1-2 oraciones, nunca un párrafo largo.

**Editable por cliente**: el set completo de preguntas y respuestas.

## Contacto

Dirección, horario, WhatsApp y mapa — los 4 datos mínimos para que alguien decida ir. **La dirección y el mapa son de ejemplo** (apuntan a una búsqueda genérica de "Nueva Córdoba", no a una dirección exacta real).

**Editable por cliente**: dirección, horario, número de WhatsApp, email y la query del mapa embebido.

## Booking (reserva de turno)

El copy del wizard es deliberadamente honesto sobre sus límites: "Es una preferencia, no una reserva confirmada" (bajo el campo de fecha) y "no reservamos automáticamente" (en el texto de la sección). Ningún cliente debe presentar este flujo como un sistema de turnos con disponibilidad real — es una forma estructurada de armar un mensaje de WhatsApp, nada más.

**Editable por cliente**: la lista de motivos, los tramos horarios, y el número de WhatsApp de destino (`CLINIC.whatsappNumber` en `content.ts`).

## Coberturas

Nombres genéricos ("Obra social A", "Prepaga C") — **no corresponden a ninguna obra social o prepaga real.** Es la única sección donde el placeholder es intencionalmente abstracto en vez de un nombre demo con forma de nombre real, precisamente para que no se confunda con una cobertura real por accidente.

**Editable por cliente**: reemplazar cada nombre genérico por las coberturas que efectivamente acepta.
