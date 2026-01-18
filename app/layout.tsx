import type { Metadata } from "next";
import "./globals.css";
import { asgardFont, poppins } from "./ui/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WebsiteStructuredData, PersonStructuredData } from "./structured-data";

export const metadata: Metadata = {
  title: {
    default: "Gabriel Padilha | Desenvolvedor Full Stack",
    template: "%s | Gabriel Padilha",
  },
  description:
    "Portfólio de Gabriel Padilha - Desenvolvedor Full Stack especializado em React, Next.js, Node.js, TypeScript e arquitetura de aplicações escaláveis. Construindo soluções modernas com foco em performance e experiência do usuário.",
  keywords: [
    "Gabriel Padilha",
    "Desenvolvedor Full Stack",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Portfólio Desenvolvedor",
    "Web Developer",
    "JavaScript",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Express",
    "Docker",
  ],
  authors: [{ name: "Gabriel Padilha", url: "https://www.linkedin.com/in/gabriel-padilha-85a702260/" }],
  creator: "Gabriel Padilha",
  publisher: "Gabriel Padilha",
  metadataBase: new URL("https://gabrielpadilha.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gabrielpadilha.dev",
    siteName: "Gabriel Padilha - Desenvolvedor Full Stack",
    title: "Gabriel Padilha | Desenvolvedor Full Stack",
    description:
      "Portfólio de Gabriel Padilha - Desenvolvedor Full Stack especializado em React, Next.js, Node.js e TypeScript. Construindo aplicações web modernas e escaláveis.",
    images: [
      {
        url: "/gabriel-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Padilha - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Padilha | Desenvolvedor Full Stack",
    description:
      "Portfólio de Gabriel Padilha - Desenvolvedor Full Stack especializado em React, Next.js, Node.js e TypeScript.",
    images: ["/gabriel-image.png"],
    creator: "@gpadilha.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  verification: {
    google: "", // Adicione seu código de verificação do Google Search Console aqui
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <WebsiteStructuredData />
        <PersonStructuredData />
      </head>
      <body
        className={`${poppins.variable} ${asgardFont.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
