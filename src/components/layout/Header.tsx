import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

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
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const PhoneNumber = () => (
    <motion.a
      href="tel:08047939544"
      className="inline-flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="h-5 w-5" />
      <span className="font-medium">08047939544</span>
    </motion.a>
  );

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
            <motion.button 
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? "text-gray-700 hover:text-primary" 
                  : "text-gray-800/90 hover:text-primary/90"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <PhoneNumber />
        </motion.div>
        
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className={`h-6 w-6 transition-colors duration-300 ${
                      isScrolled ? "text-primary" : "text-primary/90"
                    }`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className={`h-6 w-6 transition-colors duration-300 ${
                      isScrolled ? "text-primary" : "text-primary/90"
                    }`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full sm:w-[400px] pt-20 bg-white/95 backdrop-blur-lg"
          >
            <motion.nav 
              className="flex flex-col space-y-4"
              initial="closed"
              animate="open"
              variants={menuVariants}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  variants={itemVariants}
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100 text-left"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div variants={itemVariants} className="px-4">
                <PhoneNumber />
              </motion.div>
            </motion.nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;