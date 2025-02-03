import { ShoppingBag, Truck, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const caseStudies = [
  {
    industry: "Fashion",
    Icon: ShoppingBag,
    metric: "3.2x ROI",
    quote: "DirectShelf helped us reduce delivery times from 3 days to 4 hours, boosting our repeat purchase rate significantly.",
    company: "Leading D2C Fashion Brand",
  },
  {
    industry: "Food & Beverages",
    Icon: Truck,
    metric: "40% Growth",
    quote: "Same-day delivery became our competitive advantage. Our customers love the convenience.",
    company: "Premium F&B Brand",
  },
  {
    industry: "Home & Living",
    Icon: Home,
    metric: "25% Lower Returns",
    quote: "Faster deliveries led to fewer cancellations and returns. The impact on our bottom line was immediate.",
    company: "Home Decor Brand",
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-[#F8FAFC] py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center mb-12"
        >
          D2C Brands Transforming Their Growth
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col p-8">
                <study.Icon className="w-12 h-12 text-[#3B82F6] mb-6" />
                <h3 className="text-3xl font-bold text-[#10B981] mb-4">{study.metric}</h3>
                <p className="text-[#1F2937] italic mb-6 leading-relaxed flex-grow">{study.quote}</p>
                <div className="mt-auto">
                  <p className="text-sm text-[#6B7280] mb-4">{study.company}</p>
                  <a 
                    href="#" 
                    className="text-sm font-medium text-[#2563EB] inline-flex items-center group"
                  >
                    Read Full Story
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;