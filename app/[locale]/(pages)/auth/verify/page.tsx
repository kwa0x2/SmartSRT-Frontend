"use client";
import Image from "next/image";
import lightImage from "@/public/images/error/light-401.png";
import darkImage from "@/public/images/error/dark-401.png";
import { useTheme } from "next-themes";
import LoadingSVG from "@/public/images/loading.svg";
import { loginAction } from "@/action/auth-action";
import { useEffect } from "react";
import { APP_ROUTES } from "@/config/routes";
import { getLoggedInUser } from "@/app/api/services/user.service";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const VerifyPage = () => {
  const { theme } = useTheme();
  const t = useTranslations('Auth.verify');

  useEffect(() => {
    let isCancelled = false;

    const fetchDataWithCancel = async () => {
      try {
        const result: any = await getLoggedInUser();
        if (isCancelled) return;

        if (result.status === 200) {
          const loginResult = await loginAction(
              result.data.user.ID,
              result.data.user.Name,
              result.data.user.Email,
              result.data.user.PhoneNumber,
              result.data.user.AvatarURL,
              result.data.user.AuthType,
              result.data.user.Plan,
              result.data.usage_limit
          );
          if (isCancelled) return;

          if (loginResult) {
            window.location.href = APP_ROUTES.APP;
          } else {
            toast.error(t('error'));
          }
        }
      } catch (error: any) {
        if (isCancelled) return;
        toast.error(error.response?.data?.message || t('error'));
      }
    };

    fetchDataWithCancel();

    return () => {
      isCancelled = true;
    };
  }, [t]);

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
              {t('title')}
            </div>
            <div className="mt-3 text-default-600 text-sm md:text-base">
              {t('subtitle')}
              <br />
              {t('redirectMessage')}
            </div>
            <div className="mt-6 flex justify-center">
              <Image src={LoadingSVG} alt="loading" width={48} height={48} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default VerifyPage;
