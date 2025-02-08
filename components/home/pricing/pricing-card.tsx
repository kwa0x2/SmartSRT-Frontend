import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { Check } from "lucide-react";
import { PricingPlan } from "./pricing-data";

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <Card className="p-8 flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <p className="text-black text-sm mb-6">{plan.description}</p>

        <div className="mb-8 mt-10">
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold">
              ${plan.price.monthly}
            </span>
            <span className="text-gray-500 mb-1">/mo</span>
          </div>
        </div>

        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex gap-2 text-sm">
              <Check className="h-5 w-5 text-gray-500 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        className="w-full mt-8 bg-black uppercase hover:bg-black/90"
        asChild
      >
        <Link href="/auth/register">Get Started</Link>
      </Button>
    </Card>
  );
};

export default PricingCard;