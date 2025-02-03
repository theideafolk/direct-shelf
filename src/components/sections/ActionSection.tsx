import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";

const ActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 max-w-[900px] mx-auto overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#1E3A8A] mb-8">
                Book a Growth Strategy Call
              </h3>
              
              <ul className="space-y-5 mb-8">
                {[
                  "Custom growth roadmap",
                  "ROI projection",
                  "Integration timeline",
                  "Live demo"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#1F2937] text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="md:hidden mb-6">
                <Calendar 
                  mode="single"
                  className="rounded-lg border-none mx-auto"
                />
              </div>

              <Button className="w-full md:w-auto bg-[#2563EB] hover:bg-[#1E40AF] shadow-[0_4px_14px_0_rgb(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:-translate-y-1 transition duration-200 ease-in-out text-lg py-6">
                Schedule Now →
              </Button>
            </div>

            {/* Right Column - Calendar */}
            <div className="hidden md:flex bg-[#F8FAFC] p-8 items-center justify-center">
              <Calendar 
                mode="single"
                className="rounded-lg border-none"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionSection;