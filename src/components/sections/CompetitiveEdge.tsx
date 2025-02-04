import { Clock, Building2, Shield, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  {
    Icon: Clock,
    title: "Delivery Speed",
    withUs: "2-4 hour deliveries",
    traditional: "3-5 day standard shipping",
  },
  {
    Icon: Building2,
    title: "Infrastructure Cost",
    withUs: "Zero upfront investment",
    traditional: "High capex requirement",
  },
  {
    Icon: Shield,
    title: "Brand Control",
    withUs: "Complete brand ownership",
    traditional: "Limited control over experience",
  },
  {
    Icon: Zap,
    title: "Integration Time",
    withUs: "Live in 72 hours",
    traditional: "Weeks of setup time",
  },
  {
    Icon: Heart,
    title: "Customer Experience",
    withUs: "Premium, branded experience",
    traditional: "Generic delivery service",
  },
];

const CompetitiveEdge = () => {
  return (
    <section id="competitive-edge" className="bg-white py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center mb-16"
        >
          Why Choose DirectShelf
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="bg-[#1E3A8A] p-6 text-white font-bold text-lg">
                With DirectShelf
              </div>
              <div className="bg-[#64748B] p-6 text-white font-bold text-lg">
                Traditional Solutions
              </div>
            </div>

            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-2 border-b border-[#E2E8F0] last:border-b-0"
              >
                <div className="bg-[rgba(59,130,246,0.1)] p-6">
                  <div className="flex items-start gap-4">
                    <item.Icon className="w-6 h-6 text-[#3B82F6] shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-[#1F2937]">{item.withUs}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(100,116,139,0.1)] p-6">
                  <p className="text-sm text-[#6B7280]">{item.traditional}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdge;