import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currículo",
  description:
    "Currículo profissional de Gabriel Padilha - Desenvolvedor Full Stack. Experiências, projetos e habilidades técnicas em React, Next.js, Node.js, TypeScript e mais.",
  keywords: [
    "Gabriel Padilha",
    "Currículo",
    "CV",
    "Resume",
    "Desenvolvedor Full Stack",
    "Experiência profissional",
    "Projetos",
    "Portfolio",
  ],
  openGraph: {
    title: "Currículo | Gabriel Padilha",
    description:
      "Currículo profissional de Gabriel Padilha - Desenvolvedor Full Stack com experiência em tecnologias web modernas.",
    url: "https://gabrielpadilha.dev/resume",
    images: ["/gabriel-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Currículo | Gabriel Padilha",
    description:
      "Currículo profissional de Gabriel Padilha - Desenvolvedor Full Stack com experiência em tecnologias web modernas.",
    images: ["/gabriel-image.png"],
  },
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
