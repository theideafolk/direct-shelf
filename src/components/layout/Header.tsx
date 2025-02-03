import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 h-20 z-50 
        transition-all duration-500
        ${isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-gradient-to-b from-white/90 to-transparent backdrop-blur-[2px]"
        }
      `}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className={`text-2xl font-bold transition-colors duration-300 ${
          isScrolled ? "text-primary" : "text-primary/90"
        }`}>
          DirectShelf
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-gray-700 hover:text-primary" 
                : "text-gray-800/90 hover:text-primary/90"
            }`}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-gray-700 hover:text-primary" 
                : "text-gray-800/90 hover:text-primary/90"
            }`}
          >
            How It Works
          </a>
          <a 
            href="#case-studies" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-gray-700 hover:text-primary" 
                : "text-gray-800/90 hover:text-primary/90"
            }`}
          >
            Case Studies
          </a>
          <a 
            href="#coverage" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-gray-700 hover:text-primary" 
                : "text-gray-800/90 hover:text-primary/90"
            }`}
          >
            Coverage
          </a>
        </nav>
        
        <div className="hidden md:block">
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
        </div>
        
        <button className="md:hidden">
          <Menu className={`h-6 w-6 transition-colors duration-300 ${
            isScrolled ? "text-primary" : "text-primary/90"
          }`} />
        </button>
      </div>
    </header>
  );
};

export default Header;