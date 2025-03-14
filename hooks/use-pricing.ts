import { useSession } from "next-auth/react";

export const usePricing = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isAuthenticated = !!session?.user;
  const currentPlan = session?.user?.role || "";

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