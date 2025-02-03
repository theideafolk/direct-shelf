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
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center text-gray-800 mb-8"
        >
          Impact on D2C Brands
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-100
                            shadow-lg hover:shadow-xl transition-all duration-300
                            hover:scale-105 hover:bg-white/80">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300">
                    <stat.Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2
                                bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                    {stat.number}
                  </div>
                  <div className="text-base font-medium text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
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