import { useCurrentUser } from "./use-current-user";
import { APP_ROUTES } from "@/constants/routes";

export const useAccountManagement = () => {
  const currentUser = useCurrentUser();

  const canChangePassword = currentUser?.auth_type === 'credentials';

  return {
    canChangePassword,
    passwordResetUrl: APP_ROUTES.AUTH.RESET_PASSWORD,
  };
}; 