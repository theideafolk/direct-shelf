import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientCardProps extends Omit<HTMLMotionProps<"div">, "className"> {
  children: React.ReactNode;
  index?: number;
  variant?: "default" | "feature" | "testimonial";
  className?: string;
}

export const GradientCard = ({
  children,
  className,
  index = 0,
  variant = "default",
  ...props
}: GradientCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-8",
        "bg-gradient-to-b from-white/80 to-white/40",
        "backdrop-blur-xl border border-white/20",
        "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]",
        "transition-all duration-300 ease-in-out",
        variant === "feature" && "hover:-translate-y-1",
        variant === "testimonial" && "hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};