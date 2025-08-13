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
import { LoginFormData, loginSchema } from "@/schemas/login.schema";
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

const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
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
        const { ID, Name, Email, PhoneNumber, AvatarURL, AuthType, Plan } =
            result.data;

        const loginResult = await loginAction(
            ID,
            Name,
            Email,
            PhoneNumber,
            AvatarURL,
            AuthType,
            Plan
        );

        if (loginResult) {
          form.reset();
          toast.success("Login successful!");
          router.push(APP_ROUTES.APP);
        } else {
          toast.error(
              "An error occurred. Please try again later or contact support."
          );
        }
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || "An error occurred while logging. Please try again.");
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                          size="lg"
                          type="email"
                          placeholder="example@email.com"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                          size="lg"
                          placeholder="••••••••"
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
              Forgot Password?
            </Link>
          </div>

          <LoadingButton
              type="submit"
              loading={isPending}
              loadingText="Logging in..."
              className="mt-6 w-full"
          >
            Login
          </LoadingButton>
        </form>
      </Form>
  );
};

export default LoginForm;
