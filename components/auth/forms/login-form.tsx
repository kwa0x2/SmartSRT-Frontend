"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/routing";
import { Icon } from "@/components/ui/icon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { loginAction } from "@/action/auth-action";
import { toast } from "sonner";
import { LoginFormData, loginSchema } from "@/schemas/login.schema";
import { credentialsLogin } from "@/app/api/services/auth.service";
import { APP_ROUTES } from "@/constants/routes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const LoginForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    startTransition(async () => {
      try {
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
            toast.success("Login successful!");
            window.location.href = APP_ROUTES.APP;
          } else {
            toast.error(
              "An error occurred. Please try again later or contact support."
            );
          }
        }
      } catch (error: any) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error(
            "An error occurred. Please try again later or contact support."
          );
        }
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 2xl:mt-4 space-y-4">
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
                <div className="relative">
                  <Input
                    size="lg"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="••••••••"
                    disabled={isPending}
                    autoComplete="current-password"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    tabIndex={-1}
                  >
                    <Icon
                      icon={passwordVisible ? "heroicons:eye-slash" : "heroicons:eye"}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
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

        <Button type="submit" fullWidth disabled={isPending} className="mt-6">
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
