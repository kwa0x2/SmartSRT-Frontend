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
    <div className="flex gap-2 items-center text-xs md:text-sm">
      <Globe className="h-3 w-3 md:h-4 md:w-4" />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center">
            {currentLocale}
            <ChevronDown className="h-3 w-3 md:h-4 md:w-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[120px]">
          <DropdownMenuItem className="cursor-pointer text-xs md:text-sm">
            English
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer text-xs md:text-sm">
            Turkish
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;