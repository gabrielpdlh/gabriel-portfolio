import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gabriel Padilha - Desenvolvedor Full Stack",
    short_name: "GP Portfolio",
    description:
      "Portfólio profissional de Gabriel Padilha, desenvolvedor full stack especializado em React, Next.js, Node.js e TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["portfolio", "developer", "technology"],
    lang: "pt-BR",
  };
}
