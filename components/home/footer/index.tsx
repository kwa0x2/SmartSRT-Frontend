import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Footer = () => {
  const currentYear = new Date().getFullYear();
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
    <footer className="border-t pt-20">
      <div className="px-64 mx-auto">
        {/* Üst Kısım - Logo ve Slogan */}
        <div className="flex items-center justify-between py-8">
          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold">
            <Image
              src="/images/logo/black.png"
              alt="AutoSRT Logo"
              width={200}
              height={100}
              className="w-32"
            />
          </Link>

          {/* Slogan */}
          <div className="text-lg font-bold tracking-tight">
            Smart SRT Creation for Short Videos
          </div>
        </div>

        <div className="border-t border-black/40" />

        {/* Alt Kısım - Copyright */}
        <div className="py-6 flex justify-between items-center text-gray-500">
          <div className="text-sm">
            Copyright © {currentYear} AutoSRT, All rights reserved
          </div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
