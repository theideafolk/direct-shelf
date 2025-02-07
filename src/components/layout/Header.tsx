import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#solution", label: "Why Choose Us" },
    { href: "#stats", label: "Our Metrics" },
    { href: "#calculator", label: "Calculate Your ROI" },
    { href: "#how-it-works", label: "How It Works" },
  ];


  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const PhoneNumber = () => (
    <motion.a
      href="tel:08047939544"
      className="inline-flex items-center gap-2 text-primary hover:text-primary/90 transition-colors md:text-base text-sm"
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
      <div className="container mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="h-16"
        >
          <img 
            src="https://websiteassets-wisetutor.s3.eu-north-1.amazonaws.com/DirectShelf+Logo.png"
            alt="DirectShelf Logo"
            className={`h-full w-auto transition-opacity duration-300 min-w-[160px] ${
              isScrolled ? "opacity-100" : "opacity-90"
            }`}
          />
        </motion.div>
        
        <nav className="hidden lg:flex items-center space-x-8 ml-20">
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
          className="ml-auto">
          <PhoneNumber />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;