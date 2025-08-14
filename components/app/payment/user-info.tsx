"use client";

import { logoutAction } from "@/action/auth-action";
import { useRouter } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import { toast } from "sonner";

interface UserInfoProps {
  email: string;
}

export function UserInfo({ email }: UserInfoProps) {
  const router = useRouter();

  const handleNotYou = async () => {
    try {
      await logoutAction();
      toast.success("Logged out successfully");
      router.push(APP_ROUTES.AUTH.LOGIN);
    } catch  {
      toast.error("Failed to logout. Please try again or contact support.");
    }
  };

  return (
    <div className="mt-8 flex items-center gap-2 text-sm text-gray-600">
      <span>{email}</span>
      <button 
        className="font-medium underline text-black hover:text-gray-700"
        onClick={handleNotYou}
      >
        Not you?
      </button>
    </div>
  );
} 