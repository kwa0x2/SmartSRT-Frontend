"use client";

import { getPricingPlans, getStaticPricingPlans, PricingPlan } from "./pricing-data";
import PricingCard from "./pricing-card";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const PricingCards = () => {
  const t = useTranslations('Pricing');
  const staticPlans = getStaticPricingPlans(t);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(staticPlans);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const plans = await getPricingPlans();
        const translatedPlans = plans.map((plan, index) => ({
          ...plan,
          description: staticPlans[index].description,
          features: staticPlans[index].features,
        }));
        setPricingPlans(translatedPlans);
      } catch (error) {
        setPricingPlans(staticPlans);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, [staticPlans]);

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {loading ?
        staticPlans.map((plan) => (
          <div key={plan.name} className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-lg"></div>
          </div>
        ))
        :
        pricingPlans.map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
          />
        ))
      }
    </div>
  );
};

export default PricingCards;