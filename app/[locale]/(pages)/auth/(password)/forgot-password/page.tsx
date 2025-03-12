import ForgotPass from "@/components/auth/forms/forgot-form";
import AuthLayout from "@/components/auth/auth-layout";
import { Link } from "@/i18n/routing";

const ForgotPassword = () => {
  return (
    <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        <AuthLayout
          title="Forgot Your Password?"
          subtitle="Enter your Email and instructions will be sent to you!"
        >
          <ForgotPass />
          <div className="md:max-w-[345px] mx-auto font-normal text-default-500 mt-6 text-sm">
            Forget It,{" "}
            <Link
              href="/auth/login"
              className="text-default-900 font-medium hover:underline"
            >
              Send me Back
            </Link>{" "}
            to The Login
          </div>
        </AuthLayout>
      </div>
    </div>
  );
};

export default ForgotPassword;
