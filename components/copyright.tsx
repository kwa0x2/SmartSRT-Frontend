"use client";
import { useTranslations } from "next-intl";

const Copyright = () => {
    const t = useTranslations("Footer");
    const currentYear = new Date().getFullYear();
  return <>{t("copyright", { year: currentYear })}</>;
};

export default Copyright;
