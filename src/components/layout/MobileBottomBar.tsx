import { Button } from "@/components/ui/button";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-white border-t border-gray-200 p-4 md:hidden z-50">
      <Button className="w-full" variant="default">
        Calculate ROI
      </Button>
    </div>
  );
};

export default MobileBottomBar;