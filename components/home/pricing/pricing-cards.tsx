import { getPricingPlans, staticPricingPlans, PricingPlan } from "./pricing-data";
import PricingCard from "./pricing-card";
import { useEffect, useState } from "react";

const PricingCards = () => {
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(staticPricingPlans);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const plans = await getPricingPlans();
        setPricingPlans(plans);
      } catch (error) {
        console.error('Failed to fetch pricing plans:', error);
        setPricingPlans(staticPricingPlans);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {loading ?
        staticPricingPlans.map((plan) => (
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