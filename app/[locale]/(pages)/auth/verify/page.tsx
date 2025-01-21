"use client";
import Image from "next/image";
import lightImage from "@/public/images/error/light-401.png";
import darkImage from "@/public/images/error/dark-401.png";
import { useTheme } from "next-themes";
import LoadingSVG from "@/public/images/loading.svg";
import { loginAction } from "@/action/auth-action";
import { useEffect } from "react";
import { getLoggedInUser } from "@/app/api/services/user.service";

const VerifyPage = () => {
  const { theme } = useTheme();

  const fetchData = async () => {
    try {
      const result: any = await getLoggedInUser();
      console.log(result);
      if (result.status === 200) {
        loginAction(result.data.ID, result.data.Name, result.data.Email, result.data.PhoneNumber, result.data.AvatarURL);
      } 
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto flex justify-center items-center p-10">
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[542px]">
          <Image
            src={theme === "dark" ? darkImage : lightImage}
            alt="verify image"
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>
        <div className="mt-16 text-center">
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-default-900">
            Logging You In
          </div>
          <div className="mt-3 text-default-600 text-sm md:text-base">
            Hang tight! We're completing your login process.
            <br />
            You'll be redirected shortly.
          </div>
          <div className="mt-6 flex justify-center">
            <Image
              src={LoadingSVG}
              alt="loading"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
