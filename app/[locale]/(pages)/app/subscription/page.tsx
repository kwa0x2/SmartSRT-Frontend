"use client";

import Layout from "@/components/app/layout";
import SubscriptionInfo from "@/components/app/profile/subscription-info";
import PricingHeader from "@/components/home/pricing/pricing-header";
import PricingCards from "@/components/home/pricing/pricing-cards";
import SubscriptionHeader from "@/components/app/subscription/subscription-header";

export default function Subscription() {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto">
        <SubscriptionHeader />
        <SubscriptionInfo hideManageButton={true} />
        <div className="pt-10">
          <PricingHeader />
          <PricingCards isSubscriptionPage={true} />
          </div>
      </div>
    </Layout>
  );
}
