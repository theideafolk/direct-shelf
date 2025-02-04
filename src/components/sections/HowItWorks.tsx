import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          4 Steps to Quick Commerce Leadership
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          <img 
            src="/lovable-uploads/e9747a3b-0677-4a48-b981-e12da6b9a9af.png" 
            alt="DirectShelf Quick Commerce Process: On-board, Connect, Store, and Pick & Pack" 
            className="w-full h-auto animate-fade-in"
          />
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="animate-fade-in delay-1000">
            Start Your Quick Commerce Journey →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;