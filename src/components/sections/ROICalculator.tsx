import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    monthlyOrders: "",
    averageOrderValue: "",
    currentDeliveryTime: "",
    currentReturnRate: ""
  });

  const [results, setResults] = useState({
    projectedRevenue: 0,
    additionalOrders: 0,
    reducedReturns: 0,
    lifetimeValue: 0
  });

  const handleCalculate = () => {
    // Placeholder calculation logic
    const monthlyOrders = Number(formData.monthlyOrders);
    const aov = Number(formData.averageOrderValue);
    
    setResults({
      projectedRevenue: monthlyOrders * aov * 1.25,
      additionalOrders: monthlyOrders * 0.25,
      reducedReturns: monthlyOrders * aov * 0.05,
      lifetimeValue: monthlyOrders * aov * 1.4
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/50" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Calculator className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Growth Potential with DirectShelf
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powered by data from 200+ D2C brands. See how our quick commerce solution can transform your business metrics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 backdrop-blur-xl bg-white/80 border-gray-100 shadow-xl">
              <div className="space-y-4">
                {[
                  {
                    label: "Monthly Orders",
                    placeholder: "e.g., 1000",
                    name: "monthlyOrders",
                    tooltip: "Your current average monthly order volume"
                  },
                  {
                    label: "Average Order Value",
                    placeholder: "e.g., ₹1500",
                    name: "averageOrderValue",
                    tooltip: "Average value of each order"
                  },
                  {
                    label: "Current Delivery Time (hours)",
                    placeholder: "e.g., 72",
                    name: "currentDeliveryTime",
                    tooltip: "Your current average delivery time in hours"
                  },
                  {
                    label: "Current Return Rate (%)",
                    placeholder: "e.g., 20",
                    name: "currentReturnRate",
                    tooltip: "Your current product return rate percentage"
                  }
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        {field.label}
                      </label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{field.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Input
                      type="number"
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        [field.name]: e.target.value
                      }))}
                      className="w-full bg-white"
                    />
                  </div>
                ))}
                
                <Button 
                  onClick={handleCalculate}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 
                           hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300
                           hover:scale-[1.02]"
                  size="lg"
                >
                  Calculate Growth Potential
                </Button>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 backdrop-blur-xl bg-white/80 border-gray-100 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Your Growth Potential
              </h3>
              
              <div className="space-y-6">
                {[
                  { label: "Projected Monthly Revenue", value: results.projectedRevenue },
                  { label: "Additional Orders/Month", value: results.additionalOrders },
                  { label: "Reduced Returns Value", value: results.reducedReturns },
                  { label: "Customer Lifetime Value Impact", value: results.lifetimeValue }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 
                                  bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                      ₹{metric.value.toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  * Calculations based on aggregated data from 200+ D2C brands using DirectShelf
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;