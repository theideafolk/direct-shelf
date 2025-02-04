import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, Info, Clock, Package } from "lucide-react";
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
    currentDeliveryTime: "",
    currentReturnRate: ""
  });

  const [results, setResults] = useState({
    projectedRevenue: 0,
    additionalOrders: 0,
    reducedReturns: 0,
    lifetimeValue: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const monthlyOrders = Number(formData.monthlyOrders);
      const aov = Number(formData.averageOrderValue);
      
      const newResults = {
        projectedRevenue: monthlyOrders * aov * 1.25,
        additionalOrders: monthlyOrders * 0.25,
        reducedReturns: monthlyOrders * aov * 0.05,
        lifetimeValue: monthlyOrders * aov * 1.4
      };
      
      setResults(newResults);
      setIsCalculating(false);
      
      toast({
        title: "ROI Calculation Complete",
        description: "See your potential growth with DirectShelf's quick commerce solution.",
      });
    }, 800);
  };

  const deliveryBenefits = [
    {
      icon: Clock,
      title: "2-4 Hour Delivery",
      description: "Transform customer expectations with ultra-fast delivery"
    },
    {
      icon: Package,
      title: "Same-Day Fulfillment",
      description: "Process and deliver orders within hours, not days"
    }
  ];

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
            Join 200+ D2C brands revolutionizing their delivery experience
          </p>
        </motion.div>

        {/* Quick Delivery Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {deliveryBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <benefit.icon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="p-6 backdrop-blur-xl bg-white/80 border-gray-100/20 h-full">
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
              </div>
              
              <Button 
                onClick={handleCalculate}
                className="w-full mt-6"
                size="lg"
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <span className="flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <Calculator className="w-4 h-4" />
                    </motion.div>
                    Calculating...
                  </span>
                ) : (
                  "Calculate Growth Potential"
                )}
              </Button>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
            <Card className="p-8 backdrop-blur-xl bg-white/80 border-gray-100/20 h-full">
              <AnimatePresence mode="wait">
                {results.projectedRevenue > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      Your Growth Potential
                    </h3>
                    
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
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex items-center justify-center text-center p-8"
                  >
                    <div className="space-y-4">
                      <Calculator className="w-16 h-16 text-gray-300 mx-auto" />
                      <p className="text-gray-500">
                        Enter your business metrics to see potential growth with DirectShelf
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;