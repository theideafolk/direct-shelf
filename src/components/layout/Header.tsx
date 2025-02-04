import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#coverage", label: "Coverage" },
  ];

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 h-20 z-50 
        transition-all duration-500
        ${isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-gradient-to-b from-white/90 to-transparent backdrop-blur-[2px]"
        }
      `}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-primary" : "text-primary/90"
          }`}
        >
          DirectShelf
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a 
              key={item.href}
              href={item.href} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? "text-gray-700 hover:text-primary" 
                  : "text-gray-800/90 hover:text-primary/90"
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <Button 
            variant="default"
            className={`transition-all duration-300 ${
              isScrolled 
                ? "bg-primary hover:bg-primary/90" 
                : "bg-primary/90 hover:bg-primary"
            }`}
          >
            Calculate ROI
          </Button>
        </motion.div>
        
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <motion.div
                initial={false}
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                {isMobileMenuOpen ? (
                  <X className={`h-6 w-6 transition-colors duration-300 ${
                    isScrolled ? "text-primary" : "text-primary/90"
                  }`} />
                ) : (
                  <Menu className={`h-6 w-6 transition-colors duration-300 ${
                    isScrolled ? "text-primary" : "text-primary/90"
                  }`} />
                )}
              </motion.div>
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full sm:w-[400px] pt-20 bg-white/95 backdrop-blur-lg"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button 
                variant="default"
                className="mt-4 w-full bg-primary hover:bg-primary/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Calculate ROI
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
