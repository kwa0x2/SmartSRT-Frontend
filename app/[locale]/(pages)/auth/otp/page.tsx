'use client'

import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import OtpForm from "@/components/auth/forms/otp-form";
import {
  RegisterFormData,
  RegisterStepTwoData,
} from "@/schemas/register.schema";
import { register } from "@/app/api/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "@/i18n/routing";
import {InvalidTokenError, jwtDecode} from "jwt-decode";
import { getCookieServer } from "@/hooks/get-my-cookie-server";
import AuthLayout from "@/components/auth/auth-layout";
import { AuthType } from "@/types";
import UnauthorizedError from "@/components/partials/error/401";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

interface JWTClaims {
  name: string;
  email: string;
  avatar_url: string;
  auth_type: AuthType;
}

const OtpPage = () => {
  const router = useRouter();
  const [token, setToken] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCookieServer("token");
      setIsLoading(false);
      setToken(token);
    };
    
    fetchToken();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!token) {
    return <UnauthorizedError />;
  }

  const handleStepTwo = async (data: RegisterStepTwoData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const decoded = jwtDecode<JWTClaims>(token);
      const finalData: RegisterFormData = {
        ...data,
        name: decoded.name,
        email: decoded.email,
        avatar_url: decoded.avatar_url,
        password: "",
        auth_type: decoded.auth_type,
      };

      await register(finalData);
      toast.success("Account created successfully. Please login.");
      router.push(APP_ROUTES.AUTH.LOGIN);
    } catch (error: any) {
      if (error.name === InvalidTokenError) {
        toast.error("Invalid token. Please try again or contact support.");
        router.push(APP_ROUTES.AUTH.REGISTER);
      } else {
        toast.error(error.response?.data?.message || "An error occurred. Please try again later or contact support.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div className="flex w-full items-center overflow-hidden h-dvh basis-full">
        <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
          <AuthLayout
              title="Register"
              subtitle="Create an account to start using SmartSRT"
          >
            <OtpForm onSubmit={handleStepTwo} isSubmitting={isSubmitting} />
            <div className="md:max-w-[345px] mt-6 mx-auto text-sm text-default-500">
              Already Registered?{" "}
              <Link
                  href={APP_ROUTES.AUTH.LOGIN}
                  className="text-default-900 font-medium hover:underline"
              >
                Login
              </Link>
            </div>
          </AuthLayout>
        </div>
      </div>
  );
};

export default OtpPage;
