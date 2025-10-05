"use client";

import { Link } from "@/i18n/routing";
import RegForm from "@/components/auth/forms/reg-form";
import Social from "@/components/auth/social";
import { useState } from "react";
import OtpForm from "@/components/auth/forms/otp-form";
import { RegisterFormData, RegisterStepOneData, RegisterStepTwoData } from "@/schemas/register.schema";
import { CheckEmailExists } from "@/app/api/services/user.service";
import { toast } from "sonner";
import { useRouter } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import { register } from "@/app/api/services/auth.service";
import AuthLayout from "@/components/auth/auth-layout";
import { useTranslations } from "next-intl";

const RegisterPage = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    otp: "",
    auth_type: "credentials",
  });
  const router = useRouter();

  const t = useTranslations('Auth.register');

  const handleStepOne = async (data: RegisterStepOneData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await CheckEmailExists(data.email);
      if (res.status === 200) {
        setFormData((prev) => ({ ...prev, ...data }));
        setStep(2);
      }
    } catch (error: any) {
      if (error.response?.status === 302) {
        toast.error(t('form.emailExists'));
      } else {
        toast.error(t('form.registerError'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStepTwo = async (data: RegisterStepTwoData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const finalData: RegisterFormData = { ...formData, ...data };
      await register(finalData);
      toast.success(t('form.accountCreated'));
      router.push(APP_ROUTES.AUTH.LOGIN);
    } catch (error: any) {
      toast.error(error.response?.data?.message || t('form.registerError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div className="flex w-full items-center overflow-hidden h-dvh basis-full">
        <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
          <AuthLayout
              title={t('title')}
              subtitle={t('subtitle')}
          >
            {step === 1 ? (
                <>
                  <div className="max-w-[242px] mx-auto mt-2 w-full">
                    <Social status="up" />
                  </div>
                  <div className="relative border-b border-opacity-[30%] border-b-[#000000] mt-2 pt-6">
                    <div className="absolute inline-block bg-white left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-default-500">
                      {t('orContinueWith')}
                    </div>
                  </div>
                  <RegForm
                      onSubmit={handleStepOne}
                      initialData={{
                        name: formData.name,
                        email: formData.email,
                        password: formData.password
                      }}
                      isSubmitting={isSubmitting}
                  />
                </>
            ) : (
                <OtpForm
                    onSubmit={handleStepTwo}
                    onBack={() => setStep(1)}
                    isSubmitting={isSubmitting}
                />
            )}
            <div className="md:max-w-[345px] mt-6 mx-auto text-sm text-default-500">
              {t('alreadyRegistered')}{" "}
              <Link
                  href={APP_ROUTES.AUTH.LOGIN}
                  className="text-default-900 font-medium hover:underline"
              >
                {t('login')}
              </Link>
            </div>
          </AuthLayout>
        </div>
      </div>
  );
};

export default RegisterPage;
