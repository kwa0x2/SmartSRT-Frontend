import { useCurrentUser } from "./use-current-user";
import {APP_ROUTES} from "@/config";

export const useAccountManagement = () => {
  const currentUser = useCurrentUser();

  const canChangePassword = currentUser?.user?.auth_type === 'credentials';

  return {
    canChangePassword,
    passwordResetUrl: APP_ROUTES.AUTH.RESET_PASSWORD,
  };
}; 