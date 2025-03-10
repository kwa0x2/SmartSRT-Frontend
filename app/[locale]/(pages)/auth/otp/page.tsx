"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import Logo from "@/components/logo";
import Copyright from "@/components/copyright";
import { useState } from "react";
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

interface JWTClaims {
  name: string;
  email: string;
  avatar_url: string;
  auth_type: authType;
}

const OtpPage = () => {
  const router = useRouter();
  const [formData] = useState<RegisterFormData>({
    name: "",
    email: "",
    avatar_url: "",
    password: "",
    phone_number: "",
    otp: "",
    auth_type: 'credentials',
  });

  const handleStepTwo = async (data: RegisterStepTwoData) => {
    const token = Cookies.get('token');
    
    if (!token) {
      toast.error("Registration session expired. Please try again later or contact support.");
      router.push('/auth/register');
      return;
    }

    try {
      const decoded = jwtDecode<JWTClaims>(token);      
      const finalData: RegisterFormData = {
        ...formData,
        ...data,
        name: decoded.name,
        email: decoded.email,
        avatar_url: decoded.avatar_url,
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
