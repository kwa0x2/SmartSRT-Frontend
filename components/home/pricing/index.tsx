import PricingHeader from "./pricing-header";
import PricingCards from "./pricing-cards";

const Pricing = () => {
  return (
    <section className="pt-20 pb-60">
      <div className="px-64 mx-auto">
        <PricingHeader />
        <PricingCards />
      </div>
    </section>
  );
};

export default Pricing;