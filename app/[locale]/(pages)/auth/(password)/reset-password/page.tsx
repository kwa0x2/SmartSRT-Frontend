import ResetPassword from "@/components/auth/forms/reset-pass";
import AuthLayout from "@/components/auth/auth-layout";
import UnauthorizedError from "@/components/partials/error/401";
import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCookieServer } from "@/hooks/get-my-cookie-server";

interface NewPasswordPageProps {
  params: Promise<{ locale: string }>;
}

const NewPasswordPage = async ({ params }: NewPasswordPageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const token = await getCookieServer("token");
  const t = await getTranslations("Auth.resetPassword");

  if (!token) return <UnauthorizedError />;

  return (
      <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
        <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
          <AuthLayout
              title={t("title")}
              subtitle={t("subtitle")}
          >
            <ResetPassword authToken={token} />
            <div className="md:max-w-[350px] mx-auto font-normal text-default-500 mt-6 text-sm">
              {t("dontUpdate")} {" "}
              <Link
                  href={APP_ROUTES.AUTH.LOGIN}
                  className="text-default-900 font-medium hover:underline"
              >
                {t("goToLogin")}
              </Link>
            </div>
          </AuthLayout>
        </div>
      </div>
  );
};

export default NewPasswordPage;
