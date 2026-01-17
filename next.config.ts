import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ⚠️ Permite o build mesmo com erros de TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
