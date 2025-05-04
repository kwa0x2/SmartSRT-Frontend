"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/routing";
import { deleteAccount } from "@/app/api/services/auth.service";
import { startTransition, useEffect, useState } from "react";
import { toast } from "sonner";
import ProfileInfo from "@/components/app/profile/profile-info";
import Cookies from "js-cookie";
import { getMyAuthToken } from "@/hooks/get-my-cookie-server";
import UnauthorizedError from "@/components/partials/error/401";
import Loader from "@/components/loader";
import { jwtDecode } from "jwt-decode";
import { logoutAction } from "@/action/auth-action";

interface JWTClaims {
  name: string;
  email: string;
  image: string;
}

const DeleteAccountPage = () => {
  const router = useRouter();
  const [token, setToken] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<JWTClaims | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getMyAuthToken();
      setIsLoading(false);
      setToken(token);
      
      if (token) {
        try {
          const decoded = jwtDecode<JWTClaims>(token);
          setUserInfo(decoded);
        } catch (error) {
          console.error('Token decode error:', error);
        }
      }
    };
    fetchToken();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!token || !userInfo) return <UnauthorizedError />;

  const handleDeleteAccount = () => {
    startTransition(async () => {
      try {
        if (!token) throw new Error("Authentication token not found");

    
        const response = await deleteAccount(token);
        if (response.status === 200) {
          Cookies.remove('token');
          Cookies.remove('sid');
          await logoutAction()
          toast.success("Your account has been successfully deleted.");
          router.push("/");
        }
      } catch (error: any) {
        toast.error(
          error.response?.data?.message ||
            "An error occurred. Please try again later or contact support."
        );
      }
    });
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen overflow-y-auto flex justify-center items-center p-10">
      <div className="w-full max-w-xl flex flex-col items-center">
        <div className="text-center">
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-default-900">
            Are you sure you want to delete this account?
          </div>
          <div className="text-black text-md mt-3 md:text-lg">
            This action cannot be undone
          </div>
          <div className="mt-5 flex justify-center">
            <ProfileInfo 
              email={userInfo.email} 
              name={userInfo.name} 
              image={userInfo.image}
            />
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <Button
              variant="soft"
              className="bg-destructive text-white hover:bg-destructive/90 uppercase h-9 md:h-11 text-sm md:text-base"
              onClick={handleDeleteAccount}
            >
              Yes, Delete Account
            </Button>

            <Button
              className="bg-black uppercase hover:bg-black/90 h-9 md:h-11 text-sm md:text-base"
              onClick={handleCancel}
            >
              No, Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPage;
