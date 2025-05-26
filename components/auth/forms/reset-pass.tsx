"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { resetPassword } from "@/app/api/services/auth.service";
import { useRouter } from "@/i18n/routing";
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "@/schemas/password.schema";
import Cookies from "js-cookie";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

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
          Cookies.remove("token")
          toast.success("Password has been reset successfully");
          router.push("/auth/login");
        }
      } catch (err: any) {
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={passwordVisibility.password ? "text" : "password"}
                    placeholder="Enter new password"
                    disabled={isPending}
                    autoComplete="new-password"
                    {...field}
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
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={passwordVisibility.confirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    disabled={isPending}
                    autoComplete="new-password"
                    {...field}
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
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
    </Form>
  );
};

export default ResetPassword;
