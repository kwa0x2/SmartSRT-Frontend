import { useAuth } from "./use-auth";

interface PlanDetails {
  name: string;
  limit: number;
  usage: number;
}

export const useSubscription = () => {
  const { session } = useAuth();
  
  const getPlanDetails = (): PlanDetails => {
    const role = session?.user?.role || 'free';
    
    switch (role) {
      case 'pro':
        return {
          name: "Pro Plan",
          limit: 100,
          usage: 0, 
        };
      case 'free':
      default:
        return {
          name: "Free Plan",
          limit: 10,
          usage: 0,
        };
    }
  };

  const getUsagePercentage = (usage: number, limit: number): number => {
    return Math.min((usage / limit) * 100, 100);
  };

  const planDetails = getPlanDetails();

  return {
    planDetails,
    usagePercentage: getUsagePercentage(planDetails.usage, planDetails.limit),
  };
}; 