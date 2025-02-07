import { motion } from "framer-motion";
import HeroHeadline from "../hero/HeroHeadline";
import HeroButtons from "../hero/HeroButtons";
import HeroImage from "../hero/HeroImage";
import BenefitCard from "../hero/BenefitCard";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2B3990] to-[#4169E1] 
                        before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] 
                        before:opacity-5">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[#1E3A8A] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#1E3A8A] animate-pulse delay-100"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center relative z-10 py-8 md:py-12 lg:py-18">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-white space-y-6 md:space-y-8 pt-12 md:pt-0"
        >
          {/* Quick Impact Text */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm md:text-base lg:text-lg font-medium tracking-wide"
          >
            No minimum order commitment!
          </motion.p>

          <HeroHeadline />

          <p className="text-base md:text-lg lg:text-xl text-white/90 font-light max-w-2xl">
            Join fast-growing D2C brands offering 2-4 hour deliveries and capturing the ₹200B quick commerce revolution
          </p>

          <HeroButtons />

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl">
            <BenefitCard
              title="Customer Benefits"
              benefits={[
                "Instant deliveries delight and convert hesitant buyers",
                "Reliable logistics reduce returns and dissatisfaction"
              ]}
              delay={0}
              type="customer"
            />
            <BenefitCard
              title="Brand Benefits"
              benefits={[
                "Lower logistics costs with scalable solutions",
                "Data-driven insights to refine offerings and personalize experiences"
              ]}
              delay={1}
              type="brand"
            />
          </div>
        </motion.div>

        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;