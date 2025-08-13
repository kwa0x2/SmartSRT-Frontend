import ResetPassword from "@/components/auth/forms/reset-pass";
import AuthLayout from "@/components/auth/auth-layout";
import UnauthorizedError from "@/components/partials/error/401";
import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import { cookies } from "next/headers";

const NewPasswordPage = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return <UnauthorizedError />;

  return (
      <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
        <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
          <AuthLayout
              title="Set Your New Password"
              subtitle="Please enter your new password below"
          >
            <ResetPassword authToken={token} />
            <div className="md:max-w-[345px] mx-auto font-normal text-default-500 mt-6 text-sm">
              Don&#39;t want to update it?{" "}
              <Link
                  href={APP_ROUTES.AUTH.LOGIN}
                  className="text-default-900 font-medium hover:underline"
              >
                Go to login
              </Link>
            </div>
          </AuthLayout>
        </div>
      </div>
  );
};

export default NewPasswordPage;
