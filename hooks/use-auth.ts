import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const { status, data: session } = useSession();
  const [isFullyAuthenticated, setIsFullyAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check-auth');
        const data = await response.json();
        setIsFullyAuthenticated(data.isAuthenticated);
      } catch (error) {
        setIsFullyAuthenticated(false);
      }
    };

    if (status === "authenticated") {
      checkAuth();
    } else {
      setIsFullyAuthenticated(false);
    }
  }, [status]);

  return {
    isAuthenticated: status === "authenticated" && isFullyAuthenticated,
    status,
    session,
    isLoading: status === "loading",
  };
};