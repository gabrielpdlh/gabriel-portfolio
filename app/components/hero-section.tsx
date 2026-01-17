"use client";

import Beams from "@/components/beams-background";

import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="absolute inset-0 w-full h-full">
        <Beams
          beamWidth={4.1}
          beamHeight={17}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2.5}
          noiseIntensity={1}
          scale={0.2}
          rotation={41}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold  md:text-4xl lg:text-7xl">
        <motion.h1
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
          className="text-4xl font-asgard font-bold"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};
