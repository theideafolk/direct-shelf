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
    <header className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">DirectShelf</div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
          <a href="#case-studies" className="text-sm font-medium hover:text-primary transition-colors">Case Studies</a>
          <a href="#coverage" className="text-sm font-medium hover:text-primary transition-colors">Coverage</a>
        </nav>
        
        <div className="hidden md:block">
          <Button variant="default">Calculate ROI</Button>
        </div>
        
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;