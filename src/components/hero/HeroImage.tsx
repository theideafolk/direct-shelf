import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full md:w-1/2 mt-8 md:mt-0 md:-mr-6 lg:-mr-24 xl:-mr-32 relative z-10"
    >
      <div className="relative max-w-none md:px-4 lg:px-0">
        <img 
          src="/lovable-uploads/054fc089-7b24-4a8b-9228-3f8ad565a848.png" 
          alt="DirectShelf Quick Commerce Service"
          className="w-full h-auto transition-transform duration-300 hover:scale-[1.02] drop-shadow-2xl md:max-w-[90%] lg:max-w-full mx-auto"
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;