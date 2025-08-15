"use client";

import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";
import { useRouter } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import {deleteAccount} from "@/app/api/services/auth.service";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProfileInfo from "@/components/app/profile/profile-info";
import { getCookieServer } from "@/hooks/get-my-cookie-server";
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
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [userInfo, setUserInfo] = useState<JWTClaims | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCookieServer("token");
      setIsLoading(false);
      setToken(token);

      if (token) {
        try {
          const decoded = jwtDecode<JWTClaims>(token);
          setUserInfo(decoded);
        } catch {
          toast.error("Invalid or expired session. Please log in again.");
        }
      }
    };

    fetchToken();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!token || !userInfo) return <UnauthorizedError />;

  const onSubmit = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      const response = await deleteAccount(token);

      if (response.status === 204) {
        await logoutAction()
        toast.success("Your account has been successfully deleted.");
        router.push(APP_ROUTES.HOME);
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || "An error occurred while deleting your account. Please try again later or contact support.");
    } finally {
      setIsDeleting(false);
    }
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
              <LoadingButton
                  variant="soft"
                  className="bg-destructive text-white hover:bg-destructive/90 uppercase h-9 md:h-11 text-sm md:text-base"
                  onClick={onSubmit}
                  loading={isDeleting}
                  loadingText="Deleting..."
              >
                Yes, Delete Account
              </LoadingButton>

              <Button
                  className="bg-black uppercase hover:bg-black/90 h-9 md:h-11 text-sm md:text-base"
                  onClick={() => router.push(APP_ROUTES.HOME)}
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
