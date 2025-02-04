import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full md:w-2/5 mt-12 md:mt-0"
    >
      <div className="relative max-w-md mx-auto">
        <div className="aspect-square rounded-2xl p-6 relative overflow-hidden">
          <img 
            src="/lovable-uploads/4c1e3b81-7dc8-4777-ac94-efd9e6ac8045.png" 
            alt="D2C Warehouse at night with delivery trucks"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;