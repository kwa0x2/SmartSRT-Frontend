"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import Logo from "@/components/logo";
import Copyright from "@/components/copyright";
import { useState } from "react";
import OtpForm from "@/components/partials/auth/otp-form";
import {
  RegisterFormData,
  RegisterStepTwoData,
} from "@/schemas/register.schema";
import { register } from "@/app/api/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

interface JWTClaims {
  name: string;
  email: string;
  avatar_url: string;
  auth_type: string;
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
    auth_type: "",
  });

  const handleStepTwo = async (data: RegisterStepTwoData) => {
    const token = Cookies.get('register_token');
    
    if (!token) {
      toast.error("Registration session expired. Please try again later or contact support.");
      router.push('/en/auth/register');
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
      Cookies.remove('register_token');
      toast.success("Account created successfully. Please login.");
      router.push("/en/auth/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Registration failed. Please try again later or contact support.");
    }
  };

  return (
    <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        {/* Left Section */}
        <div className="flex-1 relative">
          <div className="h-full flex flex-col bg-default-50">
            <div className="max-w-[524px] mx-auto w-full p-7 md:px-[42px] md:py-[44px] h-full flex flex-col justify-center">
              {/* Logo for mobile */}
              <div className="flex justify-center items-center text-center mb-6 lg:hidden">
                <Link href="/">
                  <Logo />
                </Link>
              </div>

              {/* Header */}
              <div className="text-center mb-4 2xl:mb-5">
                <h4 className="font-medium text-2xl text-default-900">
                Register
                </h4>
                <div className="text-default-500 text-base">
                  Create an account to start using AutoSRT
                </div>
              </div>
              <OtpForm onSubmit={handleStepTwo} />
              {/* Login Link */}
              <div className="md:max-w-[345px] mt-6 mx-auto text-sm text-default-500">
                Already Registered?{" "}
                <Link
                  href="/auth/login"
                  className="text-default-900 font-medium hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-xs text-default-500 pb-10 text-center">
              <Copyright />
            </div>
          </div>
        </div>

        {/* Right Section - Background Image */}
        <div
          className="lg:block hidden flex-1 overflow-hidden bg-cover bg-no-repeat bg-center relative"
          style={{ backgroundImage: `url(/images/all-img/login-bg.jpg)` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-[40px] leading-[48px] text-white max-w-[525px] mx-auto pb-6">
              Smart SRT Creation for{" "}
              <span className="text-white font-bold">Short Videos!</span>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image
                src="/images/logo/white.png"
                alt="Logo"
                width={200}
                height={100}
                className="w-24"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
