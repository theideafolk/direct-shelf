import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2B3990] to-[#4169E1] 
                        before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] 
                        before:opacity-30 pt-20">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center relative z-10 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-3/5 text-white pt-12 md:pt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              Turn
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Your D2C Brand
              </span>
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-block"
            >
              Into a
            </motion.span>{" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-block"
            >
              <TypeAnimation
                sequence={[
                  'Quick Commerce Leader',
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                style={{
                  background: 'linear-gradient(to right, #93C5FD, #C4B5FD)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              />
            </motion.div>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
            Join 200+ D2C brands offering 2-4 hour deliveries and capturing the ₹200B quick commerce revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#10B981] hover:bg-[#0D9668] text-white border-none w-full sm:w-auto 
                         shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Calculate Your Revenue Impact →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto
                         backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Play className="w-4 h-4 mr-2" /> Watch How It Works (2 min)
            </Button>
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
