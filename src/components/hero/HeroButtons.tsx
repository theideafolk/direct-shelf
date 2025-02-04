import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12">
      <Button
        size="lg"
        className="bg-[#10B981] hover:bg-[#0D9668] text-white border-none
                   shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        onClick={() => {
          const element = document.querySelector('#calculator');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Calculate Your Revenue Impact →
      </Button>
    </div>
  );
};

export default HeroButtons;