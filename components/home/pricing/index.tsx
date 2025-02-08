import PricingHeader from "./pricing-header";
import PricingCards from "./pricing-cards";

const Pricing = () => {
  return (
    <section id="pricing" className="pt-20 pb-32 md:pb-60">
      <div className="px-4 md:px-8 mx-auto">
        <PricingHeader />
        <PricingCards />
      </div>
    </section>
  );
};

export default Pricing;