"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/routing";
import { useSubscription } from "@/hooks/use-subscription";
import { APP_ROUTES } from "@/constants/routes";

interface SubscriptionInfoProps {
  hideManageButton?: boolean;
}

const SubscriptionInfo = ({ hideManageButton = false }: SubscriptionInfoProps) => {
  const { planDetails, usagePercentage } = useSubscription();

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

        {!hideManageButton && (
          <Link
            className="font-bold text-xs md:text-sm tracking-wide cursor-pointer"
            href={APP_ROUTES.SUBSCRIPTION}
          >
            Manage Subscription
          </Link>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs md:text-sm">
          <span>Monthly Usage</span>
          <span>{planDetails.usage}/{planDetails.limit} minutes</span>
        </div>
        <Progress 
          value={usagePercentage} 
          className={`h-2 md:h-3 `} 
        />
      </div>
    </Card>
  );
};

export default SubscriptionInfo; 