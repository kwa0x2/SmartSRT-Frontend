import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ApiSearch = () => {
  return (
    <div className="flex-1 relative">
      <Search className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 text-muted-foreground" />
      <Input
        placeholder="Search your API Keys..."
        className="pl-8 text-sm border border-black/30 text-black"
      />
    </div>
  );
};

export default ApiSearch; 