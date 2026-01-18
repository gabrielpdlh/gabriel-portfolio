export function getPersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gabriel Padilha",
    url: "https://gabrielpadilha.dev",
    image: "https://gabrielpadilha.dev/gabriel-image.png",
    sameAs: [
      "https://www.linkedin.com/in/gabriel-padilha-85a702260/",
      "https://github.com/gabrielpdlh",
      "https://www.instagram.com/gpadilha.dev",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    description:
      "Desenvolvedor Full Stack especializado em React, Next.js, Node.js, TypeScript e arquitetura de aplicações escaláveis.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Express",
      "Prisma",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
    ],
    email: "gabriel.padilha1204@gmail.com",
  };
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gabriel Padilha - Desenvolvedor Full Stack",
    url: "https://gabrielpadilha.dev",
    description:
      "Portfólio profissional de Gabriel Padilha, desenvolvedor full stack especializado em React, Next.js e Node.js.",
    author: {
      "@type": "Person",
      name: "Gabriel Padilha",
    },
    inLanguage: "pt-BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function PersonStructuredData() {
  const structuredData = getPersonStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
