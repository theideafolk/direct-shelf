import { Button } from "@/components/ui/button";
import { Play, ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const TrustCard = ({ text }: { text: string }) => (
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

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2B3990] to-[#4169E1] 
                        before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] 
                        before:opacity-10">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[#1E3A8A] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#1E3A8A] animate-pulse delay-100"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center relative z-10 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-3/5 text-white space-y-8 pt-12 md:pt-0"
        >
          {/* Quick Impact Text */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm md:text-base font-medium tracking-wide"
          >
            Zero Setup Cost • Go Live in 72 Hours
          </motion.p>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              <span className="block mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Turn Your D2C Brand
              </span>
              <span className="block mb-4 text-3xl md:text-4xl lg:text-5xl text-white/90">
                Into a
              </span>
              <TypeAnimation
                sequence={[
                  'Quick Commerce Leader',
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
              />
            </motion.h1>
          </div>

          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl">
            Join 200+ D2C brands offering 2-4 hour deliveries and capturing the ₹200B quick commerce revolution
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-[#10B981] hover:bg-[#0D9668] text-white border-none
                         shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Calculate Your Revenue Impact →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 bg-white/10 text-white hover:bg-white/20
                         backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Play className="w-4 h-4 mr-2" /> Watch How It Works (2 min)
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <TrustCard text="Shopify Integration Ready" />
            <TrustCard text="Easy API Integration" />
            <TrustCard text="Custom Platform Support" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full md:w-2/5 mt-12 md:mt-0"
        >
          <div className="relative max-w-md mx-auto">
            <div className="aspect-square bg-white/10 rounded-2xl p-6
                          backdrop-blur-xl border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]
                          relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent"></div>
              <div className="h-full w-full rounded-xl bg-white/5 backdrop-blur-sm
                            border border-white/10 flex items-center justify-center">
                <p className="text-white/50 text-center">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
