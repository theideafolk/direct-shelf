import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const HowItWorks = () => {
  const isMobile = useIsMobile();
  
  const scrollToContact = () => {
    const element = document.querySelector('#action-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Simple integration process to get you started quickly"
        >
          4 Steps to Quick Commerce Leadership
        </SectionHeading>
        
        <div className="relative max-w-5xl mx-auto">
          <motion.img 
            src={isMobile 
              ? "/lovable-uploads/9b7404c0-d49a-4f08-8a67-5182b391183a.png"
              : "/lovable-uploads/0caa15cd-8cb6-458d-825d-610d5d5406e5.png"
            }
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
            onClick={scrollToContact}
          >
            Start Your Quick Commerce Journey →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;