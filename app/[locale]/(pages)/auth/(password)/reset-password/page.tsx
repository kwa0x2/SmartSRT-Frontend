"use client";
import { Link } from "@/i18n/routing";
import ResetPassword from "@/components/partials/auth/reset-pass";
import Image from "next/image";
import Copyright from "@/components/copyright";
import Logo from "@/components/logo";
import UnauthorizedError from "@/components/partials/error/401";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const NewPasswordPage = () => {
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    const authToken = Cookies.get('token');
    setToken(authToken);
  }, []);

  if (!token) return <UnauthorizedError />;

  return (
    <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        <div className="flex-1 relative">
          <div className="h-full flex flex-col bg-default-50">
            <div className="max-w-[524px] mx-auto w-full md:px-[42px] md:py-[44px] p-7 text-2xl text-default-900 mb-3 flex flex-col justify-center h-full">
              <div className="flex justify-center items-center text-center mb-6 lg:hidden">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <div className="text-center 2xl:mb-4 mb-2">
                <h4 className="font-medium mb-4">Reset Your Password</h4>
                <div className="text-default-500 text-base">
                  Please enter your new password below
                </div>
              </div>

              <ResetPassword auth={token} />
              
              <div className="md:max-w-[345px] mx-auto font-normal text-default-500 mt-6 text-sm">
                Remember Password?{" "}
                <Link
                  href="/auth/login"
                  className="text-default-900 font-medium hover:underline"
                >
                  Login
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
  );
};

export default NewPasswordPage;
