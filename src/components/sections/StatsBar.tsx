import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const stats = [
  {
    number: "25%",
    label: "Higher Conversion",
    context: "vs Traditional D2C",
    Icon: TrendingUp
  },
  {
    number: "15%",
    label: "Reduced CAC",
    context: "Lower Customer Acquisition Cost",
    Icon: DollarSign
  },
  {
    number: "40%",
    label: "Higher Retention",
    context: "Increased Customer Lifetime Value",
    Icon: Users
  }
];

const StatsBar = () => {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Impact on D2C Brands
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-100
                            shadow-lg hover:shadow-xl transition-all duration-300
                            hover:scale-105 group h-[320px] flex flex-col items-center justify-center">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 
                                flex items-center justify-center">
                    <stat.Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xl font-semibold text-gray-800 mb-3">
                    {stat.label}
                  </div>
                  <div className="text-base text-gray-600">
                    {stat.context}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;