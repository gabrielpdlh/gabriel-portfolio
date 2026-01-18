"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Urban Barber",
    description:
      "Full-stack web application for a barber shop with appointment scheduling and customer management.",
    image: "/urban-image.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod"],
    githubUrl: "https://github.com/gabrielpdlh/urban-barber",
    liveUrl: "https://urban-barber.vercel.app/",
  },
  {
    id: "2",
    name: "Bewear",
    description:
      "Full-stack e-commerce platform with payment integration, inventory management.",
    image: "/bewear-image.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
      "Zod",
      "Stripe",
    ],
    githubUrl: "https://github.com/gabrielpdlh/bewear-ecommerce",
    liveUrl: "https://bewear-ecommerce-six.vercel.app/",
  },
  {
    id: "3",
    name: "Lenna Santos - Landing Page",
    description: "Beautician landing page with portfolio and contact form.",
    image: "/lenna-image.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/gabrielpdlh/lenna-beauty-flow",
    liveUrl: "https://lennasantosesteticista.com.br/",
  },
  {
    id: "4",
    name: "Casare App",
    description: "Full-stack web saas for wedding planning and management.",
    image: "/casare-image.png",
    technologies: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "",
  },
];

export const MyProjectsSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-asgard text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured Projects
          </h2>
          <p className="font-poppins text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 bg-white/10 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col grow space-y-4">
                <div className="space-y-2">
                  <h3 className="font-asgard text-xl md:text-2xl font-bold">
                    {project.name}
                  </h3>
                  <p className="font-poppins text-sm text-white/70 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-poppins font-medium rounded-full bg-white/10 border border-white/20 text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                {project.name !== "Casare App" && (
                  <div className="flex gap-3 mt-auto pt-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/20 bg-white/5 hover:bg-white/10 text-white"
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-white text-black hover:bg-white/90"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
