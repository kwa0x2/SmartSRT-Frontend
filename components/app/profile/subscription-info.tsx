"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/routing";

const SubscriptionInfo = () => {
  return (
    <Card>
      <h3 className="text-lg font-semibold pb-4">Current Plan</h3>
      <div className="flex items-center justify-between pb-5">
        <div>
          <p className="font-medium">Free Plan</p>
          <p className="text-sm text-muted-foreground">
            10 minutes upload limit per month
          </p>
        </div>

        <Link
          className="font-bold text-sm tracking-wide cursor-pointer"
          href={""}
        >
          Manage Subscription
        </Link>
      </div>

      <div>
        <div className="flex justify-between text-sm pb-2">
          <span>Monthly Usage</span>
          <span>4/10 minutes</span>
        </div>
        <Progress value={40} className="h-3" />
      </div>
    </Card>
  );
};

export default SubscriptionInfo; 