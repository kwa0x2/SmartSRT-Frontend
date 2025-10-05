"use client";
import { useTranslations } from "next-intl";

const ProfileHeader = () => {
    const t = useTranslations("App.profile.header");

    return (
        <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold">{t("title")}</h1>
            <p className="text-sm md:text-base text-muted-foreground">
                {t("subtitle")}
            </p>
        </div>
    );
};

export default ProfileHeader;