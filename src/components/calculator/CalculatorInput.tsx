import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CalculatorInputProps {
  formData: {
    monthlyOrders: string;
    averageOrderValue: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CalculatorInput = ({
  formData,
  handleInputChange,
}: CalculatorInputProps) => {
  return (
    <Card className="p-6 h-full backdrop-blur-xl bg-white/80 border-gray-100/20">
      <div className="space-y-4">
        {[
          {
            label: "Monthly Orders",
            placeholder: "e.g., 1000",
            name: "monthlyOrders",
            tooltip: "Your current average monthly order volume across all channels"
          },
          {
            label: "Average Order Value (₹)",
            placeholder: "e.g., 1500",
            name: "averageOrderValue",
            tooltip: "Average value of each order in Rupees, including taxes and shipping"
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
  );
};