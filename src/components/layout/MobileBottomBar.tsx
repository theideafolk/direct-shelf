import { Phone } from "lucide-react";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-white border-t border-gray-200 p-4 md:hidden z-50">
      <a 
        href="tel:08047939544" 
        className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary/90 transition-colors"
      >
        <Phone className="h-5 w-5" />
        <span className="font-medium">08047939544</span>
      </a>
    </div>
  );
};

export default MobileBottomBar;