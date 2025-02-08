import { pricingPlans } from "./pricing-data";
import PricingCard from "./pricing-card";

const PricingCards = () => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6">
      {pricingPlans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
};

export default PricingCards;