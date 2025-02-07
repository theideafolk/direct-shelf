import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, BarChart } from "lucide-react";

interface BenefitCardProps {
  title: string;
  benefits: string[];
  className?: string;
  delay?: number;
  type: "customer" | "brand";
}

const BenefitCard = ({ title, benefits, className, delay = 0, type }: BenefitCardProps) => {
  const Icon = type === "customer" ? Sparkles : BarChart;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.2 + 0.3 }}
      className={cn(
        "backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4 md:p-5 lg:p-6",
        "transform transition-all duration-300 hover:bg-white/10",
        className
      )}
    >
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
        <div className="p-2 rounded-lg bg-white/10">
          <Icon className="w-5 h-5 text-purple-300" />
        </div>
        <h3 className="text-white font-semibold text-base md:text-lg tracking-tight">{title}</h3>
      </div>
      <div className="space-y-3 md:space-y-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (delay + index) * 0.1 + 0.4 }}
            className="text-white/80 text-sm leading-relaxed"
          >
            {benefit}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BenefitCard;