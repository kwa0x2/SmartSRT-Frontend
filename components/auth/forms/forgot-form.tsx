"use client";
import React from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { forgotPassword } from "@/app/api/services/auth.service";
import { ForgotFormData, forgotSchema } from "@/schemas/password.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ForgotPass = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotFormData) => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      const email = data.email.trim().toLowerCase();
      await forgotPassword(email);
      toast.success("Recovery email sent successfully. Please check your inbox.");
      form.reset({ email: "" });
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to send recovery email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                          type="email"
                          placeholder="Enter your email"
                          disabled={isLoading}
                          autoComplete="email"
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
              loadingText="Sending Recovery Email..."
          >
            Send Recovery Email
          </LoadingButton>
        </form>
      </Form>
  );
};

export default ForgotPass;
