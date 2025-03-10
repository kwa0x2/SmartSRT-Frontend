"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/routing";
import { Icon } from "@/components/ui/icon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { loginAction } from "@/action/auth-action";
import { toast } from "sonner";
import { LoginFormData, loginSchema } from "@/schemas/login.schema";
import { credentialsLogin } from "@/app/api/services/auth.service";
import { APP_ROUTES } from "@/constants/routes";

const LoginForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const watchFields = watch(["email", "password"]);

  const onSubmit = async (data: LoginFormData) => {
    startTransition(async () => {
      try {
        const result = await credentialsLogin(data);
        if (result.status === 200) {
          const { ID, Name, Email, PhoneNumber, AvatarURL, AuthType, Role } = result.data;
          
          const loginResult = await loginAction(
            ID, Name, Email, PhoneNumber, AvatarURL, AuthType, Role
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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2 2xl:mt-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">
          Email
        </Label>
        <Input
          size="lg"
          disabled={isPending}
          {...register("email")}
          type="email"
          id="email"
          autoComplete="email"
          placeholder="example@email.com"
          className={cn("text-black", {
            "border-destructive": errors.email,
            "border-success": !errors.email && watchFields[0],
          })}
        />
        {errors.email && (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">
          Password
        </Label>
        <div className="relative">
          <Input
            size="lg"
            disabled={isPending}
            {...register("password")}
            type={passwordVisible ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className={cn("text-black", {
              "border-destructive": errors.password,
              "border-success": !errors.password && watchFields[1],
            })}          />
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
        {errors.password && (
          <p className="text-destructive text-sm">{errors.password.message}</p>
        )}
      </div>


      <div className="flex justify-end">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-default-800 dark:text-default-400 leading-6 font-medium"
        >
          Forgot Password?
        </Link>
      </div>

      <Button 
        type="submit" 
        fullWidth 
        disabled={isPending}
        className="mt-6"
      >
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
  );
};

export default LoginForm;
