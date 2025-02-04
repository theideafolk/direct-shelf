import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? "text-gray-700 hover:text-primary" 
                  : "text-gray-800/90 hover:text-primary/90"
              }`}
            >
              {item.label}
            </a>
          ))}
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
        
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden">
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-primary/90"
                }`} />
              ) : (
                <Menu className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-primary/90"
                }`} />
              )}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="default"
                className="mt-4 w-full"
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