"use client";

import Beams from "@/components/beams-background";
import HeroSectionOne from "@/components/hero-section-demo-1";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export const HeroSection = ({
  title,
  subtitle,
  description,
}: HeroSectionProps) => {
  return (
    <div className="w-full h-screen relative">
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
      <div className="relative z-10 mx-auto max-w-4xl h-full flex items-center justify-center">
        <HeroSectionOne
          title={title}
          description={description}
          subtitle={subtitle}
        />
      </div>
    </div>
  );
};
