import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ROICalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    monthlyOrders: "",
    averageOrderValue: "",
  });

  const [results, setResults] = useState({
    additionalRevenue: 0,
    costSavings: 0,
    totalImpact: 0
  });

  // Calculate results instantly when input changes
  const calculateResults = (data: typeof formData) => {
    const monthlyOrders = Number(data.monthlyOrders) || 0;
    const aov = Number(data.averageOrderValue) || 0;
    
    // Additional Revenue (20% increase in conversions)
    const additionalRevenue = monthlyOrders * aov * 0.20;
    
    // Cost Savings (15% return rate with 20% reduction)
    const costSavings = monthlyOrders * aov * 0.15 * 0.20;
    
    // Total Monthly Impact
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
    <section className="py-16 md:py-24 relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 backdrop-blur-xl bg-white/80 border-gray-100/20">
              <div className="space-y-4">
                {[
                  {
                    label: "Monthly Orders",
                    placeholder: "e.g., 1000",
                    name: "monthlyOrders",
                    tooltip: "Your current average monthly order volume"
                  },
                  {
                    label: "Average Order Value (₹)",
                    placeholder: "e.g., 1500",
                    name: "averageOrderValue",
                    tooltip: "Average value of each order in Rupees"
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
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full bg-white"
                    />
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-sm text-gray-500 italic">
              * These calculations represent minimum expected impact based on actual customer data
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 backdrop-blur-xl bg-white/80 border-gray-100/20 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Minimum Monthly Impact
                  </h3>
                  
                  {[
                    { 
                      label: "Additional Revenue", 
                      value: results.additionalRevenue,
                      tooltip: "Based on 20% increase in conversions from same-day delivery"
                    },
                    { 
                      label: "Cost Savings", 
                      value: results.costSavings,
                      tooltip: "From 20% reduction in return rates"
                    },
                    { 
                      label: "Total Monthly Impact", 
                      value: results.totalImpact,
                      tooltip: "Combined impact of additional revenue and cost savings"
                    }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm text-gray-600">{metric.label}</div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{metric.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 
                                    bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                        ₹{metric.value.toLocaleString('en-IN')}
                      </div>
                    </motion.div>
                  ))}

                  <Button 
                    className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    Get Your Detailed Growth Plan →
                  </Button>
                </motion.div>
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;