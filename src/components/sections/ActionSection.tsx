import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
                Get in Touch
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
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#F8FAFC] p-8">
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Enter your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Enter your company name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="How can we help you today?"
                    className="w-full min-h-[100px]"
                    aria-label="Optional message"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Optional: Feel free to share your thoughts or skip this field
                  </p>
                </div>

                <Button className="w-full md:w-auto bg-[#2563EB] hover:bg-[#1E40AF] shadow-[0_4px_14px_0_rgb(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:-translate-y-1 transition duration-200 ease-in-out text-lg py-6">
                  Send Message →
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionSection;