import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { Check } from "lucide-react";
import { PricingPlan } from "./pricing-data";

interface PricingCardProps {
  plan: PricingPlan;
  isSubscriptionPage?: boolean;
}

const PricingCard = ({ plan, isSubscriptionPage = false }: PricingCardProps) => {
  const isFreePlan = plan.name === "Free";
  const buttonText = isSubscriptionPage 
    ? isFreePlan ? "SUBSCRIBED" : "SUBSCRIBE"
    : "GET STARTED";

  return (
    <Card className="py-6 px-3 md:p-8 flex flex-col">
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-bold mb-2">{plan.name}</h3>
        <p className="text-sm text-neutral-600 mb-6">{plan.description}</p>

        <div className="mb-6 md:mb-8 mt-8 md:mt-10">
          <div className="flex items-end gap-1">
            <span className="text-3xl md:text-4xl font-bold">
              ${plan.price.monthly}
            </span>
            <span className="text-neutral-500 mb-1">/mo</span>
          </div>
        </div>

        <ul className="space-y-3 md:space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex gap-2 text-sm">
              <Check className="h-5 w-5 text-neutral-500 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        className="w-full mt-6 md:mt-8 bg-black uppercase hover:bg-black/90 h-9 md:h-11 text-sm md:text-base disabled:opacity-70"
        asChild={!isSubscriptionPage || !isFreePlan}
        disabled={isSubscriptionPage && isFreePlan}
      >
        {isSubscriptionPage && !isFreePlan ? (
          <Link href="/app/checkout">
            {buttonText}
          </Link>
        ) : (
          buttonText
        )}
      </Button>
    </Card>
  );
};

export default PricingCard;