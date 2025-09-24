import { useUser } from "./use-user";
import { getUsage } from "@/app/api/services/usage.service";
import { getRemainingDays } from "@/app/api/services/subscription.service";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface PlanDetails {
  name: string;
  limit: number;
  usage: number;
  remainingDays?: number;
}

export const useSubscription = () => {
  const { currentPlan, isPro, session } = useUser();
  const [usage, setUsage] = useState(0);
  const [remainingDays, setRemainingDays] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getPlanDetails = (): PlanDetails => {
    const limitInMinutes = session?.user?.usage_limit ? parseFloat((session.user.usage_limit / 60).toFixed(2)) : 0;
    
    switch (currentPlan) {
      case 'pro':
        return {
          name: "Pro Plan",
          limit: limitInMinutes,
          usage: usage,
          remainingDays: remainingDays
        };
      case 'free':
      default:
        return {
          name: "Free Plan",
          limit: limitInMinutes,
          usage: usage,
        };
    }
  };

  const getUsagePercentage = (usage: number, limit: number): number => {
    return Math.min((usage / limit) * 100, 100);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const usageResult = await getUsage();
        if (usageResult && usageResult.data && typeof usageResult.data.MonthlyUsage === 'number') {
          setUsage(parseFloat((usageResult.data.MonthlyUsage / 60).toFixed(2)));
        }

        if (isPro) {
          const remainingDaysResult = await getRemainingDays();
          if (remainingDaysResult && remainingDaysResult.data && typeof remainingDaysResult.data.RemainingDays === 'number') {
            setRemainingDays(remainingDaysResult.data.RemainingDays);
          }
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message || "An error occurred. Please try again later or contact support.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPlan, isPro]);

  const planDetails = getPlanDetails();

  return {
    planDetails,
    usagePercentage: getUsagePercentage(planDetails.usage, planDetails.limit),
    isPro,
    isLoading,
  };
}; 