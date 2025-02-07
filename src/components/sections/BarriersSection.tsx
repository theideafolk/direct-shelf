import { motion } from "framer-motion";
import { Warehouse, DollarSign, Store } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GradientCard } from "@/components/ui/gradient-card";

const barriers = [
  {
    title: "Infrastructure Gaps",
    description: "Lack of regional warehousing for rapid fulfillment",
    Icon: Warehouse,
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "High Costs",
    description: "Logistics investments are prohibitive for emerging D2C brands",
    Icon: DollarSign,
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Marketplace Dependence",
    description: "High commissions and loss of customer control",
    Icon: Store,
    gradient: "from-yellow-500/20 to-red-500/20"
  }
];

const BarriersSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B3990]/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          subtitle="Common challenges faced by D2C brands in rapid delivery"
          withGradient={false}
          className="text-gray-900"
        >
          Barriers to Speed
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {barriers.map((barrier, index) => (
            <GradientCard
              key={index}
              index={index}
              variant="feature"
              className={`bg-gradient-to-br ${barrier.gradient}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative h-full"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm 
                              flex items-center justify-center transform hover:scale-105 transition-transform">
                    <barrier.Icon className="w-12 h-12 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {barrier.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  {barrier.description}
                </p>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full 
                              bg-gradient-to-br from-white/5 to-white/10 blur-2xl" />
              </motion.div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarriersSection;