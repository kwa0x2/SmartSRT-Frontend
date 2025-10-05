"use client";
import React from "react";
import { PasswordInput } from "@/components/ui/password-input";
import { LoadingButton } from "@/components/ui/loading-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { resetPassword } from "@/app/api/services/auth.service";
import { useRouter } from "@/i18n/routing";
import {
  ResetPasswordFormData,
  getResetPasswordSchema,
} from "@/schemas/password.schema";
import Cookies from "js-cookie";
import { APP_ROUTES } from "@/config/routes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";

interface ResetPasswordProps {
  authToken: string;
}

const ResetPassword = ({ authToken }: ResetPasswordProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const t = useTranslations("Auth.resetPassword.form");
  const tValidation = useTranslations("Auth.resetPassword.validation");

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(getResetPasswordSchema(tValidation)),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });


  const onSubmit = async (data: ResetPasswordFormData) => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      const response = await resetPassword(authToken, data.password);

      if (response.status === 200) {
        toast.success(t("success"));
        router.push(APP_ROUTES.AUTH.LOGIN);
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || t("error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("password")}</FormLabel>
                    <FormControl>
                      <PasswordInput
                          placeholder={t("passwordPlaceholder")}
                          disabled={isLoading}
                          autoComplete="new-password"
                          {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
          />

          <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("confirmPassword")}</FormLabel>
                    <FormControl>
                      <PasswordInput
                          placeholder={t("confirmPasswordPlaceholder")}
                          disabled={isLoading}
                          autoComplete="new-password"
                          {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
          />

          <LoadingButton
              type="submit"
              fullWidth
              loading={isLoading}
              loadingText={t("updating")}
              className="mt-6"
          >
            {t("submit")}
          </LoadingButton>
        </form>
      </Form>
  );
};

export default ResetPassword;
