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

interface SubscriptionInfoProps {
  hideManageButton?: boolean;
}

const SubscriptionInfo = ({
  hideManageButton = false,
}: SubscriptionInfoProps) => {
  const { planDetails, usagePercentage, isPro, isLoading } = useSubscription();
  const [loading, setLoading] = useState(false);

  const handleCustomerPortalRedirect = async () => {
    setLoading(true);
    try {
      const res = await createCustomerPortalSession();
      if (res.status === 200) {
        const url = res.data?.urls?.general?.overview;
        if (url) {
          window.open(url, "_blank");
        } else {
          toast.error(
            "An error occurred. Please try again later or contact support."
          );
        }
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred. Please try again later or contact support."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="space-y-4 md:space-y-6">
      <h3 className="text-base md:text-lg font-semibold">Current Plan</h3>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
        <div>
          <p className="font-medium text-sm md:text-base">{planDetails.name}</p>
          <p className="text-xs md:text-sm text-muted-foreground">
            {planDetails.limit} minutes upload limit per month
          </p>
        </div>

        <div className="flex items-center gap-4">
          {!hideManageButton && (
            <Link
              className="font-bold text-xs md:text-sm tracking-wide cursor-pointer"
              href={APP_ROUTES.SUBSCRIPTION}
            >
              Manage Subscription
            </Link>
          )}

          {isPro && hideManageButton && (
            <LoadingButton
              variant="link"
              className="text-black text-xs md:text-sm tracking-wide font-bold !p-0 h-auto no-underline hover:no-underline"
              onClick={handleCustomerPortalRedirect}
              loading={loading}
              loadingText="Opening..."
            >
              Customer Portal
            </LoadingButton>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs md:text-sm">
          <span>Monthly Usage</span>
          <span>
            {isLoading ? "-/-" : `${planDetails.usage}/${planDetails.limit}`}{" "}
            minutes
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
