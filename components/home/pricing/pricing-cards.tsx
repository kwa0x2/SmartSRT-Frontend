import { pricingPlans } from "./pricing-data";
import PricingCard from "./pricing-card";

const PricingCards = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-[800px]">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;