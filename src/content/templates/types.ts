export type PromptType =
  | "master"
  | "branding"
  | "copy"
  | "animation"
  | "seo"
  | "responsive";

export interface TemplatePrompt {
  type: PromptType;
  title: string;
  /** Una línea: qué hace este prompt y cuándo usarlo. Visible para todos, incluso sin acceso. */
  description: string;
  /** El prompt completo. Solo se sirve al front si el usuario tiene compra aprobada. */
  content: string;
}

export interface Template {
  slug: string;
  name: string;
  category: string;
  /** 2-4 palabras, ej. "Dark / Futuristic / Premium" */
  style: string;
  tags: string[];
  description: string;
  featured?: boolean;
  /** Ruta bajo /public o URL. La preview real vive en /preview/[slug]. */
  previewImage: string;
  prompts: TemplatePrompt[];
  /**
   * "draft" = todavía en redacción, NO se muestra en /templates ni es
   * indexable. Cambiar a "ready" recién cuando los 6 prompts estén completos
   * y reales (regla de "nada de placeholders visibles").
   */
  status: "draft" | "ready";
}
