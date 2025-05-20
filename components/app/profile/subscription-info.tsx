"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/routing";
import { useSubscription } from "@/hooks/use-subscription";
import { APP_ROUTES } from "@/constants/routes";
import { useState } from "react";
import { createCustomerPortalSession } from "@/app/api/services/paddle.service";

interface SubscriptionInfoProps {
  hideManageButton?: boolean;
}

const SubscriptionInfo = ({
  hideManageButton = false,
}: SubscriptionInfoProps) => {
  const { planDetails, usagePercentage } = useSubscription();
  const [loading, setLoading] = useState(false);

  const handleCustomerPortalRedirect = async () => {
    setLoading(true);
    try {
      const res = await createCustomerPortalSession();
      const data = res.data;
      if (data?.urls?.general?.overview) {
        window.open(data.urls.general.overview, "_blank");
      }
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

          {planDetails.name === "Pro Plan" && (
              <button
                className="font-bold text-xs md:text-sm tracking-wide cursor-pointer"
                disabled={loading}
                onClick={handleCustomerPortalRedirect}
              >
                Customer Portal
              </button>
        
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs md:text-sm">
          <span>Monthly Usage</span>
          <span>
            {planDetails.usage}/{planDetails.limit} minutes
          </span>
        </div>
        <Progress value={usagePercentage} className={`h-2 md:h-3 `} />
      </div>
    </Card>
  );
};

export default SubscriptionInfo;
