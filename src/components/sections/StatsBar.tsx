import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GradientCard } from "@/components/ui/gradient-card";

const stats = [
  {
    number: "25%",
    label: "Higher Conversion",
    context: "vs Traditional D2C",
    Icon: TrendingUp
  },
  {
    number: "15%",
    label: "Reduced CAC",
    context: "Lower Customer Acquisition Cost",
    Icon: DollarSign
  },
  {
    number: "40%",
    label: "Higher Retention",
    context: "Increased Customer Lifetime Value",
    Icon: Users
  }
];

const StatsBar = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative">
        <SectionHeading subtitle="Real results from real D2C brands">
          Impact on D2C Growth
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <GradientCard key={index} index={index} variant="feature">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-[#3B82F6]/10 
                                flex items-center justify-center">
                    <stat.Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <motion.div 
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-[#3B82F6] bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl font-semibold text-gray-800 mb-3">
                  {stat.label}
                </div>
                <div className="text-base text-gray-600">
                  {stat.context}
                </div>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;