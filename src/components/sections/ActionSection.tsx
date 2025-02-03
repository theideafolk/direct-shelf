import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";

const ActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">
              Book a Growth Strategy Call
            </h3>
            
            <ul className="space-y-4 mb-8">
              {["Custom growth roadmap", "ROI projection", "Integration timeline", "Live demo"].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#10B981]" />
                  <span className="text-[#1F2937]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <Calendar 
                mode="single"
                className="rounded-lg border border-[#E2E8F0]"
              />
            </div>

            <Button className="w-full bg-[#2563EB] hover:bg-[#1E40AF] transition-colors">
              Schedule Now →
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">
              Get Started Today
            </h3>

            <div className="space-y-6 mb-8">
              {[
                { number: "0", label: "Setup Cost" },
                { number: "72", label: "Hours to Go Live" },
                { number: "Pay", label: "Only for What You Use" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                    {item.number}
                  </div>
                  <div className="text-[#6B7280]">{item.label}</div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-[#10B981] hover:bg-[#059669] transition-colors">
              Begin Free Trial →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;