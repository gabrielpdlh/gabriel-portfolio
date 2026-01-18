import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description:
    "Conheça Gabriel Padilha, desenvolvedor full stack com experiência em React, Next.js, Node.js, TypeScript e arquitetura de software. Apaixonado por criar soluções inovadoras e escaláveis.",
  keywords: [
    "Gabriel Padilha",
    "Sobre mim",
    "Desenvolvedor Full Stack",
    "Experiência profissional",
    "Habilidades técnicas",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  openGraph: {
    title: "Sobre Mim | Gabriel Padilha",
    description:
      "Conheça Gabriel Padilha, desenvolvedor full stack especializado em criar aplicações web modernas e escaláveis.",
    url: "https://gabrielpadilha.dev/about",
    images: ["/gabriel-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Mim | Gabriel Padilha",
    description:
      "Conheça Gabriel Padilha, desenvolvedor full stack especializado em criar aplicações web modernas e escaláveis.",
    images: ["/gabriel-image.png"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
