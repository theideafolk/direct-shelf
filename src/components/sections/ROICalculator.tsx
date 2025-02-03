import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

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
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              See Your Growth Potential
            </h2>
            
            <div className="space-y-4">
              {[
                { label: "Monthly Orders", placeholder: "e.g., 1000", name: "monthlyOrders" },
                { label: "Average Order Value", placeholder: "e.g., ₹1500", name: "averageOrderValue" },
                { label: "Current Delivery Time (hours)", placeholder: "e.g., 72", name: "currentDeliveryTime" },
                { label: "Current Return Rate (%)", placeholder: "e.g., 20", name: "currentReturnRate" }
              ].map((field) => (
                <div key={field.name} className="relative">
                  <Input
                    type="number"
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      [field.name]: e.target.value
                    }))}
                    className="w-full p-4 bg-white"
                  />
                  <label className="absolute -top-2 left-3 bg-[#F8FAFC] px-1 text-sm text-gray-600">
                    {field.label}
                  </label>
                </div>
              ))}
              
              <Button 
                onClick={handleCalculate}
                className="w-full md:w-auto"
                size="lg"
              >
                Calculate Growth Potential
              </Button>
            </div>
          </div>
          
          <Card className="p-8 animate-fade-in delay-100">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Your Growth Potential
            </h3>
            
            <div className="space-y-6">
              {[
                { label: "Projected Monthly Revenue", value: results.projectedRevenue },
                { label: "Additional Orders/Month", value: results.additionalOrders },
                { label: "Reduced Returns Value", value: results.reducedReturns },
                { label: "Customer Lifetime Value Impact", value: results.lifetimeValue }
              ].map((metric, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-3xl font-bold text-[#10B981]">
                    ₹{metric.value.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              className="w-full mt-8 bg-[#2563EB] hover:bg-[#1D4ED8] hover:scale-[1.02] transition-all"
              size="lg"
            >
              Get Your Detailed Growth Plan →
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;