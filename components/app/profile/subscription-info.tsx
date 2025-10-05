"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";
import { Link } from "@/i18n/routing";
import { useSubscription } from "@/hooks/use-subscription";
import { APP_ROUTES } from "@/config/routes";
import { useState } from "react";
import { createCustomerPortalSession } from "@/app/api/services/paddle.service";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

interface SubscriptionInfoProps {
  hideManageButton?: boolean;
}

const SubscriptionInfo = ({
  hideManageButton = false,
}: SubscriptionInfoProps) => {
  const { planDetails, usagePercentage, isPro, isLoading } = useSubscription();
  const [loading, setLoading] = useState(false);
  const t = useTranslations("App.profile.subscription");

  const handleCustomerPortalRedirect = async () => {
    setLoading(true);
    try {
      const res = await createCustomerPortalSession();
      if (res.status === 200) {
        const url = res.data?.urls?.general?.overview;
        if (url) {
          window.open(url, "_blank");
        } else {
          toast.error(t("error"));
        }
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || t("error")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="space-y-4 md:space-y-6">
      <h3 className="text-base md:text-lg font-semibold">{t("title")}</h3>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
        <div>
          <p className="font-medium text-sm md:text-base">{planDetails.name}</p>
          <p className="text-xs md:text-sm text-muted-foreground">
            {t("limit", { limit: planDetails.limit })}
          </p>
          {isPro && planDetails.remainingDays !== undefined && !isLoading && (
            <p className="text-xs text-orange-600 font-medium mt-1">
              {t("daysRemaining", { days: planDetails.remainingDays })}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          {!hideManageButton && (
            <Link
              className="font-bold text-xs md:text-sm tracking-wide cursor-pointer"
              href={APP_ROUTES.SUBSCRIPTION}
            >
              {t("manageSubscription")}
            </Link>
          )}

          {isPro && hideManageButton && (
            <LoadingButton
              variant="link"
              className="text-black text-xs md:text-sm tracking-wide font-bold !p-0 h-auto no-underline hover:no-underline"
              onClick={handleCustomerPortalRedirect}
              loading={loading}
              loadingText={t("opening")}
            >
              {t("customerPortal")}
            </LoadingButton>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs md:text-sm">
          <span>{t("monthlyUsage")}</span>
          <span>
            {isLoading ? "-/-" : t("usage", { usage: planDetails.usage, limit: planDetails.limit })}{" "}
            {t("minutes")}
          </span>
        </div>
        <Progress
          value={isLoading ? 0 : usagePercentage}
          className={`h-2 md:h-3`}
        />
      </div>
    </Card>
  );
};

export default SubscriptionInfo;
