"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface HeroSectionOneProps {
  title: string;
  description: string;
  subtitle: string;
}

export default function HeroSectionOne({
  title,
  description,
  subtitle,
}: HeroSectionOneProps) {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4">
      <div className="space-y-6">
        <h1 className="relative z-10 mx-auto font-asgard max-w-4xl text-center text-4xl font-bold text-white md:text-5xl lg:text-7xl dark:text-slate-300">
          {title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <h2 className="relative z-10 mx-auto font-asgard max-w-4xl text-center text-3xl font-bold text-white md:text-4xl lg:text-6xl dark:text-slate-300">
          {subtitle.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.3,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 font-poppins mx-auto max-w-lg text-center text-base md:text-lg font-normal text-white/90"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" className="min-w-[200px]">
            Let&apos;s Get In Touch
          </Button>
          <Button size="lg" variant="outline" className="min-w-[200px]">
            View Resume
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
