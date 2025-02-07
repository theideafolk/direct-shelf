import Header from "@/components/layout/Header";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import HeroSection from "@/components/sections/HeroSection";
import BarriersSection from "@/components/sections/BarriersSection";
import SolutionSection from "@/components/sections/SolutionSection";
import StatsBar from "@/components/sections/StatsBar";
import ROICalculator from "@/components/sections/ROICalculator";
import HowItWorks from "@/components/sections/HowItWorks";
import ActionSection from "@/components/sections/ActionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <BarriersSection />
        <SolutionSection />
        <StatsBar />
        <ROICalculator />
        <HowItWorks />
        <ActionSection />
      </main>
      <MobileBottomBar />
    </div>
  );
};

export default Index;