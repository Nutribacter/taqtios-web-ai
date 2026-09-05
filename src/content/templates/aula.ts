import type { Template } from "./types";

export const aula: Template = {
  slug: "aula",
  name: "Aula",
  category: "Education",
  style: "Friendly / Clear",
  tags: ["Education", "Friendly", "Courses"],
  status: "ready",
  featured: false,
  previewImage: "/templates/aula/cover.jpg",
  description:
    "Landing para cursos online y academias: el temario se lee de un vistazo, el instructor da confianza real y la inscripción no se pierde entre relleno motivacional.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Aula",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROLE
Sos un Senior Product Designer + Frontend Engineer especializado en landings de cursos online y academias, con el nivel de las mejores plataformas de educación independiente.

CONTEXT
Voy a construir la landing del curso/academia [COURSE_NAME], sobre [TEMA]. Reemplazá cada corchete con mi información real; nunca inventes contenido del temario, duración ni resultados de alumnos.

OBJECTIVE
Que alguien interesado en aprender [TEMA] entienda qué va a aprender exactamente (el temario, no promesas vagas) y se inscriba con confianza.

TARGET AUDIENCE
Gente que ya decidió que quiere aprender [TEMA] y compara 2-3 cursos antes de pagar — quiere ver el temario concreto, no un video de ventas de 40 minutos.

BRAND
Nombre: [COURSE_NAME]. Tono: cercano y claro, como un buen profesor explicando de qué se trata. Paleta: colores amigables pero no infantiles (a menos que el público sea chicos), tipografía muy legible.

DESIGN DIRECTION
El temario es el elemento más importante de la página — se muestra como una lista clara de módulos/clases, no escondido después de un video largo. Fotografía o foto del instructor real, nunca genérica de "profesor sonriendo con pizarra".

INFORMATION ARCHITECTURE
Nav (logo + Temario + Precio) → Hero con propuesta + para quién es → Qué vas a aprender (temario completo, módulo por módulo) → Sobre el instructor (credenciales reales) → Modalidad (online, en vivo/grabado, duración) → Precio y qué incluye → Testimonios reales si existen → FAQ → CTA de inscripción.

PAGE STRUCTURE
1. Hero: qué vas a poder hacer al terminar el curso (resultado concreto, no "vas a aprender mucho"), para quién es.
2. Temario: lista de módulos/clases con su contenido, en acordeón o lista expandible si es larga.
3. Instructor: foto real, credenciales/experiencia concreta (no "años de experiencia" sin número).
4. Modalidad: online/presencial, en vivo/grabado, duración total, certificado si aplica.
5. Precio: claro, con lo que incluye (acceso, certificado, soporte), y si hay cuotas.
6. Testimonios: reales, con nombre — si no hay, sacar la sección.
7. FAQ: dudas reales (acceso de por vida o por tiempo limitado, nivel requerido, devolución).

COMPONENTS
Botón de inscripción: sólido, visible, repetido cada 2-3 secciones. El temario en acordeón nativo, cada módulo con su título y 1-2 líneas de contenido.

COPY DIRECTION
El resultado del curso se nombra concretamente ("vas a poder armar tu primer sitio web" en vez de "vas a aprender muchísimo"). El temario con nombres de clase específicos, no genéricos ("Introducción" sin decir a qué).

RESPONSIVE RULES
El temario en acordeón funciona igual de bien en mobile (touch para expandir/contraer). El precio y el CTA de inscripción accesibles sin scrollear demasiado.

ANIMATIONS
Fade-up al entrar cada sección. El acordeón del temario con transición suave de altura al expandir/contraer.

ACCESSIBILITY
El acordeón del temario navegable por teclado. Contraste 4.5:1 en todo texto, especialmente en el precio.

SEO
Title: "[COURSE_NAME] — Aprendé [TEMA]". Meta description con el resultado concreto del curso. Schema.org Course con provider, si corresponde publicar precio y duración.

PERFORMANCE
Página liviana, foto del instructor optimizada si existe.

TECHNICAL REQUIREMENTS
Schema.org Course en JSON-LD. Botón de inscripción conectado al sistema de pago/inscripción que corresponda, marcado [FALTA: conectar inscripción] si no está.

FINAL QA
¿Se puede ver el temario completo sin tener que pedir más información? ¿El resultado del curso es concreto o es una promesa vaga? ¿Las credenciales del instructor son verificables?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá paleta manteniendo la claridad y cercanía del template.",
      content: `Ajustá SOLO la identidad de Aula:
1. Paleta: reemplazá por [COLOR_DE_MARCA], manteniendo tonos amigables y buen contraste para legibilidad (crítico en un template centrado en leer un temario).
2. Logo: en el nav, sin competir con el título del curso.
No toques: el formato de acordeón del temario ni la posición del CTA de inscripción.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá tu temario real, sin relleno motivacional.",
      content: `Reescribí el copy de Aula con mi información real:

Curso: [COURSE_NAME]
Tema: [TEMA]
Resultado concreto al terminar: [RESULTADO]
Temario (módulos con contenido real — mínimo 4): [TEMARIO]
Instructor (nombre, credenciales/experiencia real): [INSTRUCTOR]
Modalidad y duración: [MODALIDAD]
Precio y qué incluye: [PRECIO]

Reglas:
- El temario tiene que ser el contenido real del curso, no un placeholder genérico.
- Nunca inventar testimonios ni número de alumnos — si falta, dejar [FALTA: dato real] o sacar la sección.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "El acordeón del temario es la animación más importante acá.",
      content: `Sumá estas animaciones a Aula:
1. Fade-up de 16px al entrar cada sección.
2. El acordeón del temario con transición suave de altura (250-300ms) al expandir/contraer cada módulo.
No agregues más — el foco tiene que estar en leer el temario, no en el movimiento.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Schema.org Course para aparecer en búsquedas educativas.",
      content: `Optimizá el SEO de [COURSE_NAME]:
1. Title: "[COURSE_NAME] — Aprendé [TEMA]".
2. JSON-LD Schema.org Course con name, description, provider.
3. Meta description con el resultado concreto del curso.
4. Open Graph con foto del instructor o imagen representativa del curso.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "El temario en acordeón tiene que ser cómodo de usar con el dedo.",
      content: `Revisá el responsive de Aula en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Cada módulo del acordeón con área táctil de mínimo 44px para expandir/contraer.
2. El precio y el CTA de inscripción visibles sin scrollear demasiado en mobile.
3. La foto del instructor y sus credenciales en una columna en mobile.
4. Verificar que el texto del temario no se corte al expandir en pantallas chicas.`,
    },
  ],
};
