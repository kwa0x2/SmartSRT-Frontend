"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { LoadingButton } from "@/components/ui/loading-button";
import { Link, useRouter } from "@/i18n/routing";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction } from "@/action/auth-action";
import { toast } from "sonner";
import { LoginFormData, getLoginSchema } from "@/schemas/login.schema";
import {credentialsLogin} from "@/app/api/services/auth.service";
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

const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const t = useTranslations('Auth.login.form');
  const tValidation = useTranslations('Auth.login.validation');

  const form = useForm<LoginFormData>({
    resolver: zodResolver(getLoginSchema(tValidation)),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    if (isPending) return;
    try {
      setIsPending(true);
      const result = await credentialsLogin(data);

      if (result.status === 200) {
        const { ID, Name, Email, PhoneNumber, AvatarURL, AuthType, Plan, UsageLimit } =
            result.data;

        const loginResult = await loginAction(
            ID,
            Name,
            Email,
            PhoneNumber,
            AvatarURL,
            AuthType,
            Plan,
            UsageLimit
        );

        if (loginResult) {
          form.reset();
          toast.success(t('loginSuccess'));
          router.push(APP_ROUTES.APP);
        } else {
          toast.error(t('loginError'));
        }
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || t('loginError'));
    } finally {
      setIsPending(false);
    }
  };


  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 space-y-4">
          <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('email')}</FormLabel>
                    <FormControl>
                      <Input
                          size="lg"
                          type="email"
                          placeholder={t('emailPlaceholder')}
                          disabled={isPending}
                          autoComplete="email"
                          {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
          />

          <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('password')}</FormLabel>
                    <FormControl>
                      <PasswordInput
                          size="lg"
                          placeholder={t('passwordPlaceholder')}
                          disabled={isPending}
                          autoComplete="current-password"
                          {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
          />

          <div className="flex justify-end">
            <Link
                href="/auth/forgot-password"
                className="text-sm text-default-800 dark:text-default-400 leading-6 font-medium"
            >
              {t('forgotPassword')}
            </Link>
          </div>

          <LoadingButton
              type="submit"
              loading={isPending}
              loadingText={t('loggingIn')}
              className="mt-6 w-full"
          >
            {t('loginButton')}
          </LoadingButton>
        </form>
      </Form>
  );
};

export default LoginForm;
