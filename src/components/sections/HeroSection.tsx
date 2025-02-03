import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary/90 to-[#3B82F6]/90 before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] before:opacity-30 pt-20">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-3xl"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-3/5 text-white pt-12 md:pt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Turn Your D2C Brand Into a Quick Commerce Leader
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
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
          <div className="relative">
            {/* Animated Illustration */}
            <motion.div 
              animate={floatingAnimation}
              className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8
                         backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <div className="relative h-full">
                {/* City Skyline SVG */}
                <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 400 100" fill="none">
                  <path d="M0 100V50h20v20h20V40h20v30h20V50h20v20h20V30h20v40h20V50h20v20h20V40h20v30h20V50h20v20h20V30h20v70H0z" 
                        fill="white" fillOpacity="0.2"/>
                </svg>
                
                {/* Animated Delivery Routes */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
                      "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                {/* Floating Packages */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-white/30 rounded-lg"
                    style={{
                      left: `${30 + i * 30}%`,
                      top: `${40 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;