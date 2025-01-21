 "use client"
import { Link } from "@/i18n/routing";
import LoginForm from "@/components/partials/auth/login-form";
import Social from "@/components/partials/auth/social";
import Image from "next/image";
import Copyright from "@/components/copyright";
import Logo from "@/components/logo";
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
  }, []);
  
  return (
    <>
      <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
        <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
          <div className="flex-1 relative">
            <div className=" h-full flex flex-col bg-default-50">
              <div className="max-w-[524px] md:px-[42px] md:py-[44px] p-7 mx-auto w-full text-2xl text-default-900 mb-3 h-full flex flex-col justify-center">
                <div className="flex justify-center items-center text-center mb-6 lg:hidden ">
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <div className="text-center 2xl:mb-5 mb-4">
                  <h4 className="font-medium">Login</h4>
                  <div className="text-default-500 text-base">
                    Login to your account to start using AutoSRT
                  </div>
                </div>
                <div className="max-w-[242px] mx-auto mt-2 w-full">
                  <Social locale="en" status="in"/>
                </div>
                <div className="relative border-b-[#000000] mt-2 border-opacity-[30%] border-b pt-6">
                  <div className="absolute inline-block bg-default-50 dark:bg-default-100 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-default-500 font-normal">
                    Or continue with
                  </div>
                </div>
                <LoginForm />
                <div className="md:max-w-[345px] mt-6 mx-auto font-normal text-default-500 md:mt-6 text-sm">
                  Don’t have an account?{" "}
                  <Link
                    href="/auth/register"
                    className="text-default-900 font-medium hover:underline"
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div className="text-xs font-normal text-default-500 z-[999] pb-10 text-center">
                <Copyright />
              </div>
            </div>
          </div>
          <div
            className="lg:block hidden flex-1 overflow-hidden bg-cover bg-no-repeat bg-center relative"
            style={{
              backgroundImage: `url(/images/all-img/login-bg.jpg)`,
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-[40px] leading-[48px] text-white max-w-[525px] mx-auto pb-6">
                Smart SRT Creation for{" "}
                <span className="text-white font-bold ms-1">Short Videos!</span>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <Image
                  src="/images/logo/white.png"
                  alt=""
                  width={200}
                  height={100}
                  className="w-24"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
