import type { Template } from "./types";
import { novaAi } from "./nova-ai";
import { blackStudio } from "./black-studio";
import { casa } from "./casa";
import { primeEstate } from "./prime-estate";
import { mono } from "./mono";
import { flow } from "./flow";
import { velvet } from "./velvet";
import { pulse } from "./pulse";
import { casaNova } from "./casa-nova";
import { orbit } from "./orbit";
import { launchpad } from "./launchpad";
import { spark } from "./spark";
import { vital } from "./vital";
import { aula } from "./aula";
import { signature } from "./signature";
import { ledger } from "./ledger";
import { bloom } from "./bloom";
import { torque } from "./torque";
import { cimiento } from "./cimiento";
import { prisma } from "./prisma";
import { dominio } from "./dominio";
import { abogado } from "./abogado";

/**
 * Registro de templates. Agregar uno nuevo = crear su archivo (copiando el
 * patrón de nova-ai.ts) + sumarlo acá. No hace falta tocar ninguna pantalla.
 */
const ALL_TEMPLATES: Template[] = [
  novaAi,
  blackStudio,
  casa,
  primeEstate,
  mono,
  flow,
  velvet,
  pulse,
  casaNova,
  orbit,
  launchpad,
  spark,
  vital,
  aula,
  signature,
  ledger,
  bloom,
  torque,
  cimiento,
  prisma,
  dominio,
  abogado,
];

/** Solo los que ya tienen sus 6 prompts completos y reales. */
export function listReadyTemplates(): Template[] {
  return ALL_TEMPLATES.filter((t) => t.status === "ready");
}

export function getTemplateBySlug(slug: string): Template | undefined {
  const t = ALL_TEMPLATES.find((t) => t.slug === slug);
  return t?.status === "ready" ? t : undefined;
}

export function listFeaturedTemplates(): Template[] {
  return listReadyTemplates().filter((t) => t.featured);
}

export function listCategories(): string[] {
  const set = new Set(listReadyTemplates().map((t) => t.category));
  return Array.from(set).sort();
}

export type { Template, TemplatePrompt, PromptType } from "./types";
