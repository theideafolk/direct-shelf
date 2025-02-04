import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  withGradient?: boolean;
}

export const SectionHeading = ({
  children,
  className,
  align = "center",
  withGradient = true,
}: SectionHeadingProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6",
        withGradient && "bg-gradient-to-r from-primary to-[#3B82F6] bg-clip-text text-transparent",
        align === "center" && "text-center",
        align === "left" && "text-left",
        align === "right" && "text-right",
        className
      )}
    >
      {children}
    </motion.h2>
  );
};