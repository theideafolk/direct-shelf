import { motion } from "framer-motion";
import { Zap, Database, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "Lightning-Fast Delivery",
    description: "2-4 hour delivery and same-day options",
    Icon: Zap,
  },
  {
    title: "Integrated Systems",
    description: "Warehousing, inventory, and last-mile solutions under one roof",
    Icon: Database,
  },
  {
    title: "Customer-First Approach",
    description: "Full control of the customer journey—no middlemen, no compromises",
    Icon: Heart,
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="We make fast, seamless, and scalable delivery a reality!"
          withGradient={false}
          className="text-gray-900"
        >
          The Solution to Modern Fulfillment
        </SectionHeading>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-12 text-gray-700">
            Our Core Offerings
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-gray-100
                             transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                             hover:bg-gradient-to-b hover:from-blue-500/5 hover:to-purple-500/5">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                               flex items-center justify-center">
                    <feature.Icon className="w-8 h-8 text-primary transform transition-transform 
                                         group-hover:scale-110 duration-300" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed min-h-[3rem]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;