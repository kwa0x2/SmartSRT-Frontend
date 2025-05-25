import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { Check } from "lucide-react";
import { PricingPlan, PlanName } from "./pricing-data";
import { usePricing } from "@/hooks/use-pricing";
import { APP_ROUTES } from "@/constants/routes";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { createCustomerPortalSession } from "@/app/api/services/paddle.service";
import { toast } from "sonner";
import { useState } from "react";

interface PricingCardProps {
  plan: PricingPlan;
}

interface ButtonConfig {
  text: string;
  disabled: boolean;
  link: string | null;
  onClick: (() => Promise<void>) | null;
}

const PricingCardContent = ({ plan }: PricingCardProps) => {
  const { isAuthenticated, isCurrentPlan, canUpgrade, isLoading } = usePricing();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const handleCustomerPortalRedirect = async () => {
    setLoading(true);
    try {
      const res = await createCustomerPortalSession();
      if(res.status === 200) {
        const url = res.data?.urls?.general?.overview;
        if (url) {
          window.open(url, "_blank");
        }
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  
  const getButtonConfig = (): ButtonConfig => {
    if (isLoading) {
      return {
        text: "",
        disabled: true,
        link: null,
        onClick: null
      };
    }

    if (!isAuthenticated) {
      return {
        text: "GET STARTED",
        disabled: false,
        link: APP_ROUTES.AUTH.REGISTER,
        onClick: null
      };
    }

    if (isCurrentPlan(plan.name)) {
      return {
        text: "CURRENT PLAN",
        disabled: true,
        link: null,
        onClick: null
      };
    }

    if (plan.name === "Free" && isAuthenticated) {
      return {
        text: "DOWNGRADE",
        disabled: false,
        link: null,
        onClick: handleCustomerPortalRedirect
      };
    }

    return {
      text: canUpgrade() ? "UPGRADE" : "CHANGE PLAN",
      disabled: false,
      link: `${APP_ROUTES.CHECKOUT}?returnUrl=${encodeURIComponent(pathname || '/')}`,
      onClick: null
    };
  };

  const buttonConfig = getButtonConfig();

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

      {isLoading ? (
        <Skeleton className="w-full h-[36px] md:h-[44px] mt-6 md:mt-8" />
      ) : (
        <Button
          className={`w-full mt-6 md:mt-8 uppercase h-9 md:h-11 text-sm md:text-base disabled:opacity-70 ${
            plan.name === "Free" && isAuthenticated && !isCurrentPlan(plan.name) ? "bg-red-700 hover:bg-red-800" : "bg-black hover:bg-black/90"
          }`}
          asChild={!buttonConfig.disabled && !!buttonConfig.link}
          disabled={buttonConfig.disabled || loading}
          onClick={buttonConfig.onClick || undefined}
        >
          {buttonConfig.link ? (
            <Link href={buttonConfig.link}>{buttonConfig.text}</Link>
          ) : (
            buttonConfig.text
          )}
        </Button>
      )}
    </Card>
  );
};

const PricingCard = (props: PricingCardProps) => {
  return (
    <Suspense fallback={
      <Card className="py-6 px-3 md:p-8 flex flex-col">
        <div className="flex-1">
          <Skeleton className="w-24 h-7 mb-2" />
          <Skeleton className="w-full h-4 mb-6" />
          
          <div className="mb-6 md:mb-8 mt-8 md:mt-10">
            <Skeleton className="w-20 h-10" />
          </div>

          <div className="space-y-3 md:space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex gap-2">
                <Skeleton className="h-5 w-5 shrink-0" />
                <Skeleton className="w-full h-4" />
              </div>
            ))}
          </div>
        </div>
        <Skeleton className="w-full h-[36px] md:h-[44px] mt-6 md:mt-8" />
      </Card>
    }>
      <PricingCardContent {...props} />
    </Suspense>
  );
};

export default PricingCard;