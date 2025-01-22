"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import { resetPassword } from "@/app/api/services/auth.service";
import { useRouter } from "next/navigation";
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "@/schemas/password.schema";
import Cookies from "js-cookie";

interface ResetPasswordProps {
  auth: string;
}

const ResetPassword = ({ auth }: ResetPasswordProps) => {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const [passwordType, setPasswordType] = React.useState({
    password: "password",
    confirmPassword: "password",
  });

  const togglePasswordType = (field: "password" | "confirmPassword") => {
    setPasswordType((prev) => ({
      ...prev,
      [field]: prev[field] === "password" ? "text" : "password",
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    startTransition(async () => {
      try {
        const authToken = Cookies.get('token');
        
        const response = await resetPassword(authToken || "", data.password);
        if (response.status === 200) {
          Cookies.remove('token');
          toast.success("Password has been reset successfully");
          router.push("/en/auth/login");
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
            type={passwordType.password}
            placeholder="Enter new password"
            disabled={isPending}
            {...register("password")}
            className={cn("h-[48px] text-sm text-default-900", {
              "border-destructive": errors.password,
            })}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={() => togglePasswordType("password")}
          >
            {passwordType.password === "password" ? (
              <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="w-5 h-5 text-default-400"
              />
            )}
          </div>
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
            type={passwordType.confirmPassword}
            placeholder="Confirm new password"
            disabled={isPending}
            {...register("confirmPassword")}
            className={cn("h-[48px] text-sm text-default-900", {
              "border-destructive": errors.confirmPassword,
            })}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={() => togglePasswordType("confirmPassword")}
          >
            {passwordType.confirmPassword === "password" ? (
              <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="w-5 h-5 text-default-400"
              />
            )}
          </div>
        </div>
        {errors.confirmPassword && (
          <div className="text-destructive text-sm">
            {errors.confirmPassword.message}
          </div>
        )}
      </div>

      <Button type="submit" fullWidth disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? "Updating..." : "Update Password"}
      </Button>
    </form>
  );
};

export default ResetPassword;
