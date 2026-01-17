import { HeroSection } from "./components/hero-section";
import { TechStackSection } from "./components/tech-stack-section";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Hi. i'm Gabriel"
        subtitle="Full Stack Developer"
        description="+3 Years building scalable full-stack applications with a strong focus on performance, architecture, and user experience."
      />
      <TechStackSection />
    </>
  );
}
