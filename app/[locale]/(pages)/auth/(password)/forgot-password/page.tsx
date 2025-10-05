"use client";
import ForgotPass from "@/components/auth/forms/forgot-form";
import AuthLayout from "@/components/auth/auth-layout";
import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import { useTranslations } from "next-intl";

const ForgotPassword = () => {
  const t = useTranslations("Auth.forgotPassword");

  return (
      <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
        <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
          <AuthLayout
              title={t("title")}
              subtitle={t("subtitle")}
          >
            <ForgotPass />
            <div className="md:max-w-[345px] mx-auto font-normal text-default-500 mt-6 text-sm">
              {t("forgetIt")}{" "}
              <Link
                  href={APP_ROUTES.AUTH.LOGIN}
                  className="text-default-900 font-medium hover:underline"
              >
                {t("sendBack")}
              </Link>{" "}
              {t("toLogin")}
            </div>
          </AuthLayout>
        </div>
      </div>
  );
};

export default ForgotPassword;
