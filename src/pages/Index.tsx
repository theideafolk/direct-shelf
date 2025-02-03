import Header from "@/components/layout/Header";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ROICalculator from "@/components/sections/ROICalculator";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseStudies from "@/components/sections/CaseStudies";
import CompetitiveEdge from "@/components/sections/CompetitiveEdge";
import ActionSection from "@/components/sections/ActionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <StatsBar />
        <ROICalculator />
        <HowItWorks />
        <CaseStudies />
        <CompetitiveEdge />
        <ActionSection />
      </main>
      <MobileBottomBar />
    </div>
  );
};

export default Index;