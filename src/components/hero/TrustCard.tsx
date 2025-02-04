import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface TrustCardProps {
  text: string;
}

const TrustCard = ({ text }: TrustCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
    className="flex items-center gap-3 px-6 py-4 rounded-lg backdrop-blur-sm
               bg-white/10 border border-white/20 w-full sm:w-[200px]
               transition-all duration-300 group"
  >
    <Check className="w-4 h-4 text-white/70 group-hover:text-white" />
    <span className="text-sm text-white/70 group-hover:text-white">{text}</span>
  </motion.div>
);

export default TrustCard;