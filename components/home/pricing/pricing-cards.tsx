import { pricingPlans } from "./pricing-data";
import PricingCard from "./pricing-card";

const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {pricingPlans.map((plan) => (
        <PricingCard 
          key={plan.name} 
          plan={plan} 
        />
      ))}
    </div>
  );
};

export default PricingCards;