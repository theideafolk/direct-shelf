import Header from "@/components/layout/Header";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ROICalculator from "@/components/sections/ROICalculator";
import HowItWorks from "@/components/sections/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ROICalculator />
        <HowItWorks />
      </main>
      <MobileBottomBar />
    </div>
  );
};

export default Index;