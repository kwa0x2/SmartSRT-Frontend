"use client";

import { Link } from "@/i18n/routing";
import RegForm from "@/components/partials/auth/reg-form";
import Social from "@/components/partials/auth/social";
import Image from "next/image";
import Logo from "@/components/logo";
import Copyright from "@/components/partials/auth/copyright";
import { useState } from "react";
import OtpForm from "@/components/partials/auth/otp-form";
import { RegisterFormData, RegisterStepOneData, RegisterStepTwoData } from "@/schemas/register.schema";
import { createUser, IsEmailExists } from "@/app/api/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    otp: "",
    auth_with: "credentials",
  });
  const router = useRouter();

  const handleStepOne = async (data: RegisterStepOneData) => {
    const res: any = await IsEmailExists(data.email);
    if (res.status !== 200) {
      toast.error("an error occurred");
      return;
    }
    if (res.data.exists) {
      toast.error("Email already exists");
      return;
    }
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleStepTwo = async (data: RegisterStepTwoData) => {
    try {
      const finalData: RegisterFormData = { ...formData, ...data };
      await createUser(finalData);
      
      toast.success("Account created successfully. Please sign in.");
      router.push('/en/auth/login');
    } catch (error: any) {
      toast.error(error.response.data.message);
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
                <Link href="/"><Logo /></Link>
              </div>

              {/* Header */}
              <div className="text-center mb-4 2xl:mb-5">
                <h4 className="font-medium text-2xl text-default-900">Sign up</h4>
                <div className="text-default-500 text-base">
                  Create an account to start using AutoSRT
                </div>
              </div>

              {/* Form Section */}
              {step === 1 ? (
                <>
                  <div className="max-w-[242px] mx-auto mt-2 w-full">
                    <Social locale="en" status="up" />
                  </div>
                  <div className="relative border-b border-opacity-[30%] border-b-[#000000] mt-2 pt-6">
                    <div className="absolute inline-block bg-default-50 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-default-500">
                      Or continue with
                    </div>
                  </div>
                  <RegForm 
                    onSubmit={handleStepOne} 
                    initialData={{
                      name: formData.name,
                      email: formData.email,
                      password: formData.password
                    }} 
                  />
                </>
              ) : (
                <OtpForm 
                  onSubmit={handleStepTwo} 
                  onBack={() => setStep(1)}
                />
              )}

              {/* Sign in Link */}
              <div className="md:max-w-[345px] mt-6 mx-auto text-sm text-default-500">
                Already Registered?{" "}
                <Link href="/auth/login" className="text-default-900 font-medium hover:underline">
                  Sign in
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
        <div className="lg:block hidden flex-1 overflow-hidden bg-cover bg-no-repeat bg-center relative"
          style={{ backgroundImage: `url(/images/all-img/login-bg.jpg)` }}>
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

export default RegisterPage;
