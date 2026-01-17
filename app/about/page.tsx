"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/gabriel-image.png"
                alt="Gabriel Padilha"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h1 className="font-asgard text-4xl md:text-5xl lg:text-6xl font-bold">
                About Me
              </h1>
              <div className="w-20 h-1 bg-white rounded-full" />
            </div>

            <div className="space-y-4 font-poppins text-base md:text-lg text-white/80 leading-relaxed">
              <p>
                Hi! I'm Gabriel Padilha, a passionate Full Stack Developer
                dedicated to building scalable and performant web applications
                that solve real-world problems.
              </p>

              <p>
                I graduated with a degree in{" "}
                <span className="text-white font-semibold">
                  Systems Analysis and Development
                </span>{" "}
                in 2025, where I developed a strong foundation in software
                engineering principles and modern development practices.
              </p>

              <p>
                Currently, I'm pursuing an{" "}
                <span className="text-white font-semibold">
                  MBA in Full Stack Web Development
                </span>{" "}
                (2026), continuously expanding my expertise in cutting-edge
                technologies and architectural patterns.
              </p>

              <p>
                With over 3 years of hands-on experience, I specialize in
                building full-stack applications using React, Next.js,
                TypeScript, and Node.js. I'm deeply passionate about clean code,
                performance optimization, and creating exceptional user
                experiences.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="pt-6 space-y-4">
              <h2 className="font-asgard text-2xl font-bold">Education</h2>
              <div className="space-y-3">
                <div className="flex gap-4 items-start p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-poppins font-bold">
                    26
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white">
                      MBA in Full Stack Web Development
                    </h3>
                    <p className="text-sm text-white/60">2026 • In Progress</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-poppins font-bold">
                    25
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white">
                      Bachelor's in Systems Analysis and Development
                    </h3>
                    <p className="text-sm text-white/60">2025 • Completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button asChild size="lg" className="min-w-[200px]">
                <Link
                  href="https://www.linkedin.com/in/gabriel-padilha-85a702260/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
