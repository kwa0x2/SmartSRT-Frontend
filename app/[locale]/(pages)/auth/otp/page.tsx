'use client'

import { Link } from "@/i18n/routing";
import OtpForm from "@/components/auth/forms/otp-form";
import {
  RegisterFormData,
  RegisterStepTwoData,
} from "@/schemas/register.schema";
import { register } from "@/app/api/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "@/i18n/routing";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import AuthLayout from "@/components/auth/auth-layout";
import { authType } from "@/lib/type";
import UnauthorizedError from "@/components/partials/error/401";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import { getMyAuthToken } from "@/hooks/get-my-cookie-server";

interface JWTClaims {
  name: string;
  email: string;
  avatar_url: string;
  auth_type: authType;
}

const OtpPage = () => {
  const router = useRouter();
  const [token, setToken] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getMyAuthToken();
      setIsLoading(false)
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
      Cookies.remove('token');
      toast.success("Account created successfully. Please login.");
      router.push("/auth/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Registration failed. Please try again later or contact support.");
    }
  };

  return (
    <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        <AuthLayout
          title="Register"
          subtitle="Create an account to start using AutoSRT"
        >
          <OtpForm onSubmit={handleStepTwo} />
          <div className="md:max-w-[345px] mt-6 mx-auto text-sm text-default-500">
            Already Registered?{" "}
            <Link
              href="/auth/login"
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
