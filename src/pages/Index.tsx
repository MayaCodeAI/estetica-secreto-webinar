import { HeroSection } from "@/components/HeroSection";
import { LearningSection } from "@/components/LearningSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LearningSection />
      <AboutSection />
    </div>
  );
};

export default Index;
