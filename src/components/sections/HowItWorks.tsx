import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Simple integration process to get you started quickly"
        >
          4 Steps to Quick Commerce Leadership
        </SectionHeading>
        
        <div className="relative max-w-5xl mx-auto">
          <motion.img 
            src="/lovable-uploads/e9747a3b-0677-4a48-b981-e12da6b9a9af.png" 
            alt="DirectShelf Quick Commerce Process: On-board, Connect, Store, and Pick & Pack" 
            className="w-full h-auto rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            loading="lazy"
          />
        </div>
        
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="animate-fade-in delay-1000 bg-primary hover:bg-primary/90 text-white"
          >
            Start Your Quick Commerce Journey →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;