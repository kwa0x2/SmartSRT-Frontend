"use client";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("App.footer");

  return (
    <footer className="py-4">
      <div className="text-center text-sm text-gray-500">
        {t("copyright", { year: currentYear })}
      </div>
    </footer>
  );
};

export default Footer;