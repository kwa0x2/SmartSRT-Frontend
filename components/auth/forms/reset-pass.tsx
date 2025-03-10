"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import { resetPassword } from "@/app/api/services/auth.service";
import { useRouter } from "@/i18n/routing";
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "@/schemas/password.schema";
import Cookies from "js-cookie";

interface ResetPasswordProps {
  authToken: string;
}

const ResetPassword = ({ authToken }: ResetPasswordProps) => {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const [passwordVisibility, setPasswordVisibility] = React.useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const watchFields = watch(["password", "confirmPassword"]);

  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const onSubmit = (data: ResetPasswordFormData) => {
    startTransition(async () => {
      try {
        if (!authToken) throw new Error("Authentication token not found");
        
        const response = await resetPassword(authToken, data.password);
        if (response.status === 200) {
          Cookies.remove('token');
          toast.success("Password has been reset successfully");
          router.push("/auth/login");
        }
      } catch (err: any) {
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password">New Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={passwordVisibility.password ? "text" : "password"}
            placeholder="Enter new password"
            disabled={isPending}
            {...register("password")}
            className={cn("text-black text-sm", {
              "border-destructive": errors.password,
              "border-success": !errors.password && watchFields[0],
            })}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => togglePasswordVisibility("password")}
            tabIndex={-1}
          >
            <Icon
              icon={passwordVisibility.password ? "heroicons:eye-slash" : "heroicons:eye"}
              className="w-5 h-5"
            />
          </button>
        </div>
        {errors.password && (
          <div className="text-destructive text-sm">
            {errors.password.message}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={passwordVisibility.confirmPassword ? "text" : "password"}
            placeholder="Confirm new password"
            disabled={isPending}
            {...register("confirmPassword")}
            className={cn("text-black text-sm", {
              "border-destructive": errors.confirmPassword,
              "border-success": !errors.confirmPassword && watchFields[1],
            })}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => togglePasswordVisibility("confirmPassword")}
            tabIndex={-1}
          >
            <Icon
              icon={passwordVisibility.confirmPassword ? "heroicons:eye-slash" : "heroicons:eye"}
              className="w-5 h-5"
            />
          </button>
        </div>
        {errors.confirmPassword && (
          <div className="text-destructive text-sm">
            {errors.confirmPassword.message}
          </div>
        )}
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
            Updating Password...
          </>
        ) : (
          "Update Password"
        )}
      </Button>
    </form>
  );
};

export default ResetPassword;
