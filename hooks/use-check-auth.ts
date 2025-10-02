import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useCheckAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check-auth");
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch {
        toast.error(
          "An error occurred. Please try again later or contact support."
        );
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isLoading, isAuthenticated };
}
