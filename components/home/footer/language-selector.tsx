import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const LanguageSelector = () => {
  const [currentLocale, setCurrentLocale] = useState("English");

  useEffect(() => {
    const locale = Cookies.get("NEXT_LOCALE");
    if (locale === "tr") {
      setCurrentLocale("Turkish");
    } else {
      setCurrentLocale("English");
    }
  }, []);

  return (
    <div className="flex gap-2 items-center">
      <Globe className="h-4 w-4" />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center text-sm">
            {currentLocale}
            <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[120px]">
          <DropdownMenuItem className="cursor-pointer">
            English
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Turkish
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;