import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    description:  
      "Try our AI-powered subtitle generation with high-quality speech recognition for your files",
    price: { monthly: 0 },
    features: [
      "10 minutes upload limit per month",
      "AI-powered automatic subtitle generation",
      "Maximum 30 seconds per file",
      "Support for 32+ languages",
    ],
  },
  {
    name: "Pro",
    description: "Unlock higher upload limits for professional content creators who need more time",
    price: { monthly: 4.99 },
    features: [
      "100 minutes upload limit per month",
      "AI-powered automatic subtitle generation",
      "Maximum 3 minutes per file",
      "Support for 32+ languages",

    ],
  },
];

const Pricing = () => {

  return (
    <section className="pt-20 pb-60">
      <div className="px-64 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold leading-tight lg:leading-[1.15]">
            Pricing
          </h2>
          <p className="text-lg lg:leading-[1.4] mt-2">
            Choose the perfect plan for your subtitle generation needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className="p-8 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

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
                className="w-full mt-8 bg-gray-100 text-gray-900 hover:bg-gray-200"
                asChild
              >
                <Link href="/auth/register">GET STARTED</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
