/**
 * Precio: ver AGENTS.md, sección "Precio y comisión". El objetivo (decisión
 * cerrada) es que a TAQTios le queden ARS 14.900 NETOS por venta, después de
 * la comisión de Mercado Pago.
 *
 * Mercado Pago no expone una forma de saber la comisión exacta ANTES de que
 * el comprador elija el medio de pago (varía por método). `mpFeeRate` es una
 * ESTIMACIÓN configurable, no una garantía matemática del neto. Verificar la
 * tasa real en el panel de Mercado Pago (Tu negocio → Costos y tarifas) y
 * ajustar acá si difiere — es la única línea que hay que tocar.
 */
export const PRICING = {
  currency: "ARS",
  targetNetArs: 14_900,
  mpFeeRate: 0.0699,
} as const;

/** Precio final que se le muestra y cobra al comprador. */
export function finalPriceArs(): number {
  const raw = PRICING.targetNetArs / (1 - PRICING.mpFeeRate);
  return Math.ceil(raw / 100) * 100; // redondeado a un número prolijo (termina en 00)
}

/** Comisión estimada en pesos, solo para mostrar en el panel/checkout si hace falta. */
export function estimatedFeeArs(): number {
  return finalPriceArs() - PRICING.targetNetArs;
}
