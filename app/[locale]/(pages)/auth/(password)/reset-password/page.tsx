"use client";
import ResetPassword from "@/components/auth/forms/reset-pass";
import AuthLayout from "@/components/auth/auth-layout";
import UnauthorizedError from "@/components/partials/error/401";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const NewPasswordPage = () => {
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    const authToken = Cookies.get("token");
    setToken(authToken);
  }, []);

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
            Don't want to update it?{" "}
            <Link
              href="/auth/login"
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
