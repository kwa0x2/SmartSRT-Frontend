"use client"
import { Link } from "@/i18n/routing";
import LoginForm from "@/components/auth/forms/login-form";
import Social from "@/components/auth/social";
import AuthLayout from "@/components/auth/auth-layout";
import { toast } from "sonner";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const errorMessages = {
  invalid_state: "Invalid or expired state parameter. Please retry the Google authentication process.",
  server_error: "An error occurred. Please try again later or contact support.",
  exists_github: "An account with this email already exists. Please log in using Github.",
  exists_credentials: "An account with this email already exists. Please log in using Credentials.",
} as const;

const LoginPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;
    
    const code = searchParams.get('error');
    if (code && errorMessages[code as keyof typeof errorMessages]) {
      toast.error(errorMessages[code as keyof typeof errorMessages]);
    }
  }, [searchParams]);
  
  return (
    <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        <AuthLayout
          title="Login"
          subtitle="Login to your account to start using AutoSRT"
        >
          <div className="max-w-[242px] mx-auto mt-2 w-full">
            <Social locale="en" status="in" />
          </div>
          <div className="relative border-b border-opacity-[30%] border-b-[#000000] mt-2 pt-6">
            <div className="absolute inline-block bg-white left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-default-500">
              Or continue with
            </div>
          </div>
          <LoginForm />
          <div className="md:max-w-[345px] mt-6 mx-auto font-normal text-default-500 md:mt-6 text-sm">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-default-900 font-medium hover:underline"
            >
              Register
            </Link>
          </div>
        </AuthLayout>
      </div>
    </div>
  );
};

export default LoginPage;
