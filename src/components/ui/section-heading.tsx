import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  withGradient?: boolean;
  subtitle?: string;
}

export const SectionHeading = ({
  children,
  className,
  align = "center",
  withGradient = true,
  subtitle,
}: SectionHeadingProps) => {
  return (
    <div className="space-y-4 mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight",
          withGradient && "bg-gradient-to-r from-primary to-[#3B82F6] bg-clip-text text-transparent",
          align === "center" && "text-center",
          align === "left" && "text-left",
          align === "right" && "text-right",
          className
        )}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-muted-foreground text-lg",
            align === "center" && "text-center",
            align === "left" && "text-left",
            align === "right" && "text-right"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};