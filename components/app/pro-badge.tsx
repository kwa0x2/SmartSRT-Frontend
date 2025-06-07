import { Badge } from "@/components/ui/badge";
import { IconCrown } from "@tabler/icons-react";

export const ProBadge = () => {
  return (
    <div className="flex items-center justify-center mb-6">
      <Badge 
        variant="default" 
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 [&>svg]:size-5"
      >
        <IconCrown className="text-yellow-300" />
        <span className="font-semibold">Pro Plan</span>
      </Badge>
    </div>
  );
}; 