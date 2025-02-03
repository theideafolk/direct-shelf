import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary to-[#3B82F6] pt-20">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 text-white pt-12 md:pt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Turn Your D2C Brand Into a Quick Commerce Leader
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in delay-100">
            Join 200+ D2C brands offering 2-4 hour deliveries and capturing the ₹200B quick commerce revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
            <Button
              size="lg"
              className="bg-[#10B981] hover:bg-[#0D9668] text-white border-none w-full sm:w-auto"
            >
              Calculate Your Revenue Impact →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
            >
              <Play className="w-4 h-4 mr-2" /> Watch How It Works (2 min)
            </Button>
          </div>
        </div>
        <div className="w-full md:w-2/5 mt-12 md:mt-0 animate-fade-in delay-300">
          {/* Placeholder for animation - you'll need to implement the actual animation */}
          <div className="aspect-square bg-white/10 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;