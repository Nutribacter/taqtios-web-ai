import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primero (mejor compresión), WebP como respaldo para navegadores
    // que no lo soportan. Next elige solo según el header Accept del pedido.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
