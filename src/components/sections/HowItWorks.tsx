import { PuzzlePiece, Warehouse, Truck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Connect",
    timeframe: "24 hours",
    description: "Seamlessly integrate your e-commerce platform with our quick commerce infrastructure.",
    Icon: PuzzlePiece
  },
  {
    number: 2,
    title: "Store",
    timeframe: "48 hours",
    description: "Stock your products in our strategically located dark stores for optimal coverage.",
    Icon: Warehouse
  },
  {
    number: 3,
    title: "Deliver",
    timeframe: "Day 3+",
    description: "Start offering 2-4 hour deliveries to your customers through our network.",
    Icon: Truck
  },
  {
    number: 4,
    title: "Grow",
    timeframe: "Ongoing",
    description: "Scale your business with real-time analytics and optimization.",
    Icon: TrendingUp
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          4 Steps to Quick Commerce Leadership
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block" />
          
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#3B82F6] text-white flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="ml-4 text-[#10B981] text-sm">
                      {step.timeframe}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  
                  <step.Icon className="w-6 h-6 text-gray-400 hover:text-[#3B82F6] transition-colors" />
                </div>
              </div>
            ))}
          </div>
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