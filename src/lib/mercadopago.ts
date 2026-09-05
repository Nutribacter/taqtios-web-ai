import { MercadoPagoConfig } from "mercadopago";

/** null si todavía no se cargó el Access Token (arrancar con el de TEST). */
export function getMercadoPagoClient(): MercadoPagoConfig | null {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!accessToken) return null;
  return new MercadoPagoConfig({ accessToken });
}
