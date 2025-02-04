import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientCardProps extends Omit<HTMLMotionProps<"div">, "className" | "children"> {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export const GradientCard = ({ 
  children, 
  className, 
  index = 0,
  ...props 
}: GradientCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "rounded-2xl p-6 md:p-8 backdrop-blur-xl bg-white/80 border border-gray-100/20",
        "shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        "group relative overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};