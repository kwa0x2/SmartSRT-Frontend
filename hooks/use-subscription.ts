import { useAuth } from "./use-auth";
import { getUsage } from "@/app/api/services/usage.service";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface PlanDetails {
  name: string;
  limit: number; 
  usage: number;
}

export const useSubscription = () => {
  const { session } = useAuth();
  const [usage, setUsage] = useState(0);
  
  const getPlanDetails = (): PlanDetails => {
    const plan = session?.user?.plan || 'free';
    
    switch (plan) {
      case 'pro':
        return {
          name: "Pro Plan",
          limit: 100,
          usage: usage, 
        };
      case 'free':
      default:
        return {
          name: "Free Plan",
          limit: 10,
          usage: usage,
        };
    }
  };

  const getUsagePercentage = (usage: number, limit: number): number => {
    return Math.min((usage / limit) * 100, 100);
  };

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const result = await getUsage();
        if (result && result.data && typeof result.data.MonthlyUsage === 'number') {
          setUsage(parseFloat((result.data.MonthlyUsage / 60).toFixed(2)));
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message || "An error occurred. Please try again later or contact support.");
      }
    };

    fetchUsage();
  }, [session?.user?.plan]);

  const planDetails = getPlanDetails();

  return {
    planDetails,
    usagePercentage: getUsagePercentage(planDetails.usage, planDetails.limit),
  };
}; 