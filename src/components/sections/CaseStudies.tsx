import { ShoppingBag, Truck, Home, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GradientCard } from "@/components/ui/gradient-card";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    industry: "Fashion",
    Icon: ShoppingBag,
    metric: "3.2x ROI",
    quote: "DirectShelf helped us reduce delivery times from 3 days to 4 hours, boosting our repeat purchase rate significantly.",
    company: "Leading D2C Fashion Brand",
    rating: 5,
    metrics: {
      deliveryTime: "4 hours",
      returnRate: "-40%",
      customerSatisfaction: "95%"
    }
  },
  {
    industry: "Food & Beverages",
    Icon: Truck,
    metric: "40% Growth",
    quote: "Same-day delivery became our competitive advantage. Our customers love the convenience.",
    company: "Premium F&B Brand",
    rating: 5,
    metrics: {
      deliveryTime: "2 hours",
      returnRate: "-35%",
      customerSatisfaction: "98%"
    }
  },
  {
    industry: "Home & Living",
    Icon: Home,
    metric: "25% Lower Returns",
    quote: "Faster deliveries led to fewer cancellations and returns. The impact on our bottom line was immediate.",
    company: "Home Decor Brand",
    rating: 5,
    metrics: {
      deliveryTime: "3 hours",
      returnRate: "-25%",
      customerSatisfaction: "92%"
    }
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionHeading 
          subtitle="See how leading brands are transforming their delivery experience"
        >
          Success Stories
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <GradientCard
              key={index}
              index={index}
              variant="testimonial"
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="h-full flex flex-col"
              >
                <study.Icon className="w-12 h-12 text-[#3B82F6] mb-6" />
                
                <div className="flex items-center mb-4">
                  {[...Array(study.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold text-[#10B981] mb-4">{study.metric}</h3>
                <p className="text-[#1F2937] italic mb-6 flex-grow">{study.quote}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm text-gray-500 mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="font-semibold text-primary">{value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <p className="text-sm text-[#6B7280] mb-4">{study.company}</p>
                  <motion.a 
                    href="#" 
                    className="text-sm font-medium text-[#2563EB] inline-flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    Read Full Story
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                  </motion.a>
                </div>
              </motion.div>
            </GradientCard>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Users className="w-12 h-12 opacity-75" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join 200+ Growing D2C Brands
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your delivery experience and see the impact on your bottom line
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Schedule a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
