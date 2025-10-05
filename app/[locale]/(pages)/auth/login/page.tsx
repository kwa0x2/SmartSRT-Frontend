"use client"
import { Link } from "@/i18n/routing";
import LoginForm from "@/components/auth/forms/login-form";
import Social from "@/components/auth/social";
import AuthLayout from "@/components/auth/auth-layout";
import { toast } from "sonner";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const t = useTranslations('Auth.login');

  const errorMessages = {
    invalid_state: t('errors.invalid_state'),
    server_error: t('errors.server_error'),
    exists_github: t('errors.exists_github'),
    exists_credentials: t('errors.exists_credentials'),
  } as const;

  useEffect(() => {
    const errorCode = Cookies.get("error")

    if (errorCode && errorMessages[errorCode as keyof typeof errorMessages]) {
      toast.error(errorMessages[errorCode as keyof typeof errorMessages]);

      Cookies.remove("error");
    }
  }, [errorMessages]);

  return (
      <div className="flex w-full items-center overflow-hidden h-dvh basis-full">
        <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
          <AuthLayout
              title={t('title')}
              subtitle={t('subtitle')}
          >
            <div className="max-w-[242px] mx-auto mt-2 w-full">
              <Social status="in" />
            </div>
            <div className="relative border-b border-opacity-[30%] border-b-[#000000] mt-2 pt-6">
              <div className="absolute inline-block bg-white left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-default-500">
                {t('orContinueWith')}
              </div>
            </div>
            <LoginForm />
            <div className="md:max-w-[345px] mt-6 mx-auto font-normal text-default-500 text-sm">
              {t('dontHaveAccount')}{" "}
              <Link
                  href="/auth/register"
                  className="text-default-900 font-medium hover:underline"
              >
                {t('register')}
              </Link>
            </div>
          </AuthLayout>
        </div>
      </div>
  );
};

export default LoginPage;
