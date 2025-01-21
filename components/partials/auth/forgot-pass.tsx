"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { forgotPassword } from "@/app/api/services/auth.service";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ForgotFormData, forgotSchema } from "@/schemas/password.schema";



const ForgotPass = () => {
  const [isPending, startTransition] = React.useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = (data: ForgotFormData) => {
    startTransition(async () => {
      try {
        await forgotPassword(data.email);
        toast.success("Recovery email sent successfully. Please check your inbox.");
      } catch (err: any) {
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          disabled={isPending}
          {...register("email")}
          className={cn("h-[48px] text-sm text-default-900", {
            "border-destructive": errors.email,
          })}
        />
        {errors.email && (
          <div className="text-destructive text-sm">
            {errors.email.message}
          </div>
        )}
      </div>

      <Button type="submit" fullWidth disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? "Sending..." : "Send recovery email"}
      </Button>
    </form>
  );
};

export default ForgotPass;
