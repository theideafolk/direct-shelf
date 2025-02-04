import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12">
      <Button
        size="lg"
        className="bg-[#10B981] hover:bg-[#0D9668] text-white border-none
                   shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Calculate Your Revenue Impact →
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-white/20 bg-white/10 text-white hover:bg-white/20
                   backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <Play className="w-4 h-4 mr-2" /> Watch How It Works (2 min)
      </Button>
    </div>
  );
};

export default HeroButtons;