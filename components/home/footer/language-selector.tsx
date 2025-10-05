"use client";

import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

const LanguageSelector = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("Footer.languages");

  const currentLocale = locale === "tr" ? t("turkish") : t("english");

  const handleLanguageChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as any });
    });
  };

  return (
    <div className="flex gap-2 items-center text-xs md:text-sm">
      <Globe className="h-3 w-3 md:h-4 md:w-4" />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center" disabled={isPending}>
            {currentLocale}
            <ChevronDown className="h-3 w-3 md:h-4 md:w-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[120px]">
          <DropdownMenuItem
            className="cursor-pointer text-xs md:text-sm"
            onClick={() => handleLanguageChange("en")}
          >
            {t("english")}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-xs md:text-sm"
            onClick={() => handleLanguageChange("tr")}
          >
            {t("turkish")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;