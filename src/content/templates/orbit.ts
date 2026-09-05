import type { Template } from "./types";

export const orbit: Template = {
  slug: "orbit",
  name: "Orbit",
  category: "Professionals",
  style: "Modern / B2B",
  tags: ["Professional", "Modern", "B2B", "Consultant"],
  status: "ready",
  featured: false,
  previewImage: "/templates/orbit/cover.jpg",
  description:
    "Landing seria para consultores y empresas de servicios B2B: credibilidad primero, casos de éxito con números reales y un único camino de contacto.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Orbit",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROLE
Sos un Senior Product Designer + Frontend Engineer especializado en landings B2B de consultoras y empresas de servicios profesionales, con el nivel de las mejores boutiques de consultoría.

CONTEXT
Voy a construir la landing de [CONSULTANCY_NAME], una consultora/empresa de servicios en [ÁREA: estrategia, tecnología, finanzas, legal, etc.]. Reemplazá cada corchete con mi información real; nunca inventes clientes, casos ni resultados.

OBJECTIVE
Que un director o gerente que evalúa contratar un servicio profesional entienda en segundos qué problema resuelve [CONSULTANCY_NAME] y agende una llamada — la credibilidad es la conversión, no la emoción.

TARGET AUDIENCE
Tomadores de decisión (gerentes, directores, fundadores) que evalúan pocas opciones con cuidado, y para quienes un sitio con errores o genérico es una señal de alerta.

BRAND
Nombre: [CONSULTANCY_NAME]. Tono: profesional, seguro, sin jerga vacía de consultoría ("sinergias", "disrupción"). Paleta: neutra y sobria (azul marino, gris carbón, blanco), un acento discreto.

DESIGN DIRECTION
Composición ordenada tipo B2B serio: nada de ilustraciones juguetonas ni gradientes llamativos. Los números de los casos de éxito son el elemento visual más fuerte de la página (tipografía grande, clara). Fotografía si se usa, del equipo real o del trabajo, nunca stock genérico de "gente sonriendo en una oficina".

INFORMATION ARCHITECTURE
Nav (logo + Servicios + Casos + Contacto) → Hero con propuesta clara + CTA a agendar llamada → Servicios (3-4 áreas con una línea cada una) → Casos de éxito (2-3, con número real + qué se hizo) → Cómo trabajamos (proceso en pasos) → Equipo (fotos reales + rol, sin biografías largas) → Contacto (formulario corto o link a agendar).

PAGE STRUCTURE
1. Hero: headline que nombra el resultado que buscan los clientes ("Reducimos tu costo operativo, no tu calidad"), CTA "Agendar una llamada".
2. Servicios: 3-4 áreas, cada una con un título y una línea de qué incluye — sin listas eternas de sub-servicios.
3. Casos de éxito: 2-3 casos reales, cada uno con el número de resultado (ej. "+30% en eficiencia") y una oración de qué se hizo — nunca inventar el número.
4. Cómo trabajamos: proceso en 3-4 pasos numerados, para que el cliente sepa qué esperar.
5. Equipo: fotos reales + nombre + rol, sin relleno de biografía genérica.
6. Contacto: formulario corto (nombre, empresa, email, mensaje) o link directo a agendar una reunión.

COMPONENTS
Botón CTA: sólido, sobrio, sin efectos llamativos. Cards de servicio y de caso de éxito con borde fino, sin sombras exageradas — el tono es serio, no juguetón.

COPY DIRECTION
Cada afirmación se sostiene con un dato o se formula como pregunta que el cliente reconoce, nunca un adjetivo sin sustento ("somos los mejores"). Los casos de éxito con número real siempre, nunca "resultados excepcionales" sin cifra.

RESPONSIVE RULES
En mobile los casos de éxito mantienen su número grande como elemento principal, con el texto de contexto debajo. El formulario de contacto con inputs de altura táctil cómoda.

ANIMATIONS
Fade-up sutil al entrar cada sección. Los números de los casos de éxito pueden contar desde 0 al valor real al entrar en viewport, una sola vez. Nada más — este template no necesita movimiento vistoso, necesita transmitir solidez.

ACCESSIBILITY
Contraste 4.5:1 en todo texto. Formulario de contacto completamente accesible por teclado con labels asociados a cada input.

SEO
Title: "[CONSULTANCY_NAME] — [ÁREA]". Meta description con la propuesta de valor concreta. Schema.org ProfessionalService si aplica.

PERFORMANCE
Página liviana por naturaleza (poco contenido visual pesado) — cuidar igual las fotos de equipo si las hay, con dimensiones explícitas.

TECHNICAL REQUIREMENTS
HTML semántico, formulario de contacto con validación básica del lado del cliente antes de enviar.

FINAL QA
¿Cada afirmación tiene un dato detrás o es una frase vacía? ¿Los casos de éxito usan números reales? ¿El sitio transmite solidez o parece una landing genérica de agencia de marketing?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá paleta y tono sin perder la sobriedad B2B.",
      content: `Ajustá SOLO la identidad de Orbit:
1. Paleta: reemplazá el acento por [COLOR_DE_MARCA], manteniendo la base neutra/sobria (azul marino, gris carbón) — evitar colores muy saturados que le resten seriedad.
2. Logo: en el nav, tamaño moderado, sin isotipos grandes decorativos.
3. Tipografía: sans profesional, evitar fuentes decorativas o con personalidad juguetona.
No toques: la estructura de casos de éxito con número grande, ni el orden de las secciones.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá servicios, casos y equipo reales, con números reales.",
      content: `Reescribí el copy de Orbit con mi información real:

Consultora: [CONSULTANCY_NAME]
Área: [AREA]
Servicios (3-4, con una línea cada uno): [SERVICIOS]
Casos de éxito (número real + qué se hizo — mínimo 2): [CASOS]
Proceso de trabajo (pasos): [PROCESO]
Equipo (nombre, rol): [EQUIPO]
Contacto: [CONTACTO]

Reglas:
- Nunca inventar un número de caso de éxito — si no tenés uno medido, dejar [FALTA: caso con número real] o sacar la sección.
- Cada servicio se describe por lo que resuelve, no por metodología interna sin explicar.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento mínimo, solo donde ayuda a comunicar el número.",
      content: `Sumá estas animaciones a Orbit:
1. Fade-up de 16px al entrar cada sección en viewport, una sola vez.
2. Los números de los casos de éxito cuentan desde 0 al valor real al entrar en viewport (800ms), una sola vez.
No agregues nada más: sin hover effects elaborados, sin parallax — la seriedad del template depende de la quietud visual.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO B2B estándar, con foco en el área de servicio.",
      content: `Optimizá el SEO de [CONSULTANCY_NAME]:
1. Title: "[CONSULTANCY_NAME] — [ÁREA]".
2. Meta description con la propuesta de valor concreta, bajo 155 caracteres.
3. Schema.org ProfessionalService o Organization con address y areaServed si aplica.
4. Open Graph con una imagen sobria (logo o foto de equipo real, no un stock genérico).`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Casos de éxito y formulario de contacto en mobile.",
      content: `Revisá el responsive de Orbit en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Casos de éxito: el número grande se mantiene como elemento principal, apilado con el texto de contexto debajo en mobile.
2. Servicios y equipo en una columna en mobile.
3. Formulario de contacto con inputs de mínimo 44px de alto.
4. Verificar que ningún dato numérico se corte o pierda tamaño de forma que se vuelva ilegible.`,
    },
  ],
};
