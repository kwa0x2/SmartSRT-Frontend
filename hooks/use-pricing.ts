import { useAuth } from "./use-auth";

export const  usePricing = () => {
  const { session, isAuthenticated, isLoading } = useAuth();
  const currentPlan = session?.user?.plan || "";

  const isCurrentPlan = (planName: string) => {
    return currentPlan.toLowerCase() === planName.toLowerCase();
  };

  const canUpgrade = () => {
    return currentPlan.toLowerCase() === "free";
  };

  return {
    isAuthenticated,
    currentPlan,
    isCurrentPlan,
    canUpgrade,
    isLoading
  };
}; 