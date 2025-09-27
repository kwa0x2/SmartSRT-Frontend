import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getCookieServer } from "./get-my-cookie-server";
import { getCheckAuth } from "@/app/api/services/auth.service";

export const useUser = () => {
  const { status, data: session } = useSession();
  const [isFullyAuthenticated, setIsFullyAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      if (status !== "authenticated") {
        setIsFullyAuthenticated(false);
        setIsCheckingAuth(false);
        return;
      }

      setIsCheckingAuth(true);
      try {
        const sidCookie = await getCookieServer("sid");
        if (!sidCookie) {
          setIsFullyAuthenticated(false);
          return;
        }

        const data = await getCheckAuth();
        setIsFullyAuthenticated(data.isAuthenticated);
      } catch {
        setIsFullyAuthenticated(false);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    if (mounted) {
      checkAuth();
    }
  }, [status, mounted]);

  const isLoading = status === "loading" || !mounted || (status === "authenticated" && isCheckingAuth);
  const isAuthenticated = status === "authenticated" && isFullyAuthenticated;
  const currentPlan = session?.user?.plan || "free";
  const isPro = isAuthenticated && currentPlan === "pro";

  return {
    isAuthenticated,
    isLoading,
    status,
    
    user: session?.user,
    session,
    
    isPro,
    currentPlan,
    isCurrentPlan: (planName: string) => currentPlan.toLowerCase() === planName.toLowerCase(),
    canUpgrade: () => currentPlan.toLowerCase() === "free",
    
    canChangePassword: session?.user?.auth_type === 'credentials',
    
    error: status === "unauthenticated" ? new Error("Not authenticated") : null
  };
};

