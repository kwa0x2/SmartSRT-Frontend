"use client";

import { useTranslations } from "next-intl";

const SubscriptionHeader = () => {
    const t = useTranslations("App.subscription.header");
    return (
        <div className="pb-5">
            <h1 className="text-xl md:text-2xl font-bold">{t("title")}</h1>
            <p className="text-sm md:text-base text-muted-foreground">
                {t("subtitle")}
            </p>
        </div>
    );
};

export default SubscriptionHeader;
