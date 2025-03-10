import { useAuth } from "./use-auth";

export const usePricing = () => {
  const { isAuthenticated, session } = useAuth();
  
  const isCurrentPlan = (planName: string) => {
    return session?.user?.role?.toLowerCase() === planName.toLowerCase();
  };

  const canUpgrade = () => {
    return session?.user?.role === 'free';
  };

  return {
    isAuthenticated,
    currentPlan: session?.user?.role || "",
    isCurrentPlan,
    canUpgrade
  };
}; 