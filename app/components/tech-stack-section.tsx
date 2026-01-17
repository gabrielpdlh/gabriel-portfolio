"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  {
    name: "React",
    category: "Frontend",
    icon: "/react-svgrepo-com.svg",
    invertIcon: false,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "/next-js-svgrepo-com.svg",
    invertIcon: true,
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: "/typescript-official-svgrepo-com.svg",
    invertIcon: false,
  },
  {
    name: "Java",
    category: "Language",
    icon: "/java-svgrepo-com.svg",
    invertIcon: false,
  },
  {
    name: "Express",
    category: "Backend",
    icon: "/express-svgrepo-com.svg",
    invertIcon: true,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "/postgresql-svgrepo-com.svg",
    invertIcon: false,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "/mysql-svgrepo-com.svg",
    invertIcon: true,
  },
  {
    name: "Prisma",
    category: "ORM",
    icon: "/light-prisma-svgrepo-com.svg",
    invertIcon: false,
  },
  {
    name: "Drizzle",
    category: "ORM",
    icon: "/Drizzle--Streamline-Simple-Icons.svg",
    invertIcon: true,
  },
  {
    name: "Vitest",
    category: "Testing",
    icon: "/Vitest--Streamline-Svg-Logos.svg",
    invertIcon: false,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "/docker-svgrepo-com.svg",
    invertIcon: false,
  },
];

export const TechStackSection = () => {
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
            Tech Stack
          </h2>
          <p className="font-poppins text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Technologies I work with to build scalable and performant
            applications
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-square p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-3">
                <div className="relative w-12 h-12 md:w-14 md:h-14">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    fill
                    className={`object-contain transition-transform duration-300 group-hover:scale-110 ${
                      tech.invertIcon ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-poppins text-sm font-semibold text-white">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-white/40 font-poppins">
                    {tech.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
