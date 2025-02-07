import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { CalculatorInput } from "../calculator/CalculatorInput";
import { CalculatorResults } from "../calculator/CalculatorResults";

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    monthlyOrders: "",
    averageOrderValue: "",
  });

  const [results, setResults] = useState({
    additionalRevenue: 0,
    costSavings: 0,
    totalImpact: 0
  });

  const calculateResults = (data: typeof formData) => {
    const monthlyOrders = Number(data.monthlyOrders) || 0;
    const aov = Number(data.averageOrderValue) || 0;
    
    const additionalRevenue = monthlyOrders * aov * 0.20;
    const costSavings = monthlyOrders * aov * 0.15 * 0.20;
    const totalImpact = additionalRevenue + costSavings;
    
    return {
      additionalRevenue: Math.round(additionalRevenue / 1000) * 1000,
      costSavings: Math.round(costSavings / 1000) * 1000,
      totalImpact: Math.round(totalImpact / 1000) * 1000
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newData);
    setResults(calculateResults(newData));
  };

  return (
    <section id="calculator" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/50" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Calculator className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Growth Potential
          </h2>
          <p className="text-lg text-gray-600">
            See your minimum expected impact with DirectShelf's quick commerce solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:mt-8"
          >
            <CalculatorInput 
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
            <CalculatorResults results={results} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;