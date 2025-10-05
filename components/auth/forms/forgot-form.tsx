"use client";
import React from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { forgotPassword } from "@/app/api/services/auth.service";
import { ForgotFormData, getForgotSchema } from "@/schemas/password.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

const ForgotPass = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const t = useTranslations("Auth.forgotPassword.form");
  const tValidation = useTranslations("Auth.forgotPassword.validation");

  const form = useForm<ForgotFormData>({
    resolver: zodResolver(getForgotSchema(tValidation)),
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
      toast.success(t("success"));
      form.reset({ email: "" });
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
              name="email"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <Input
                          type="email"
                          placeholder={t("emailPlaceholder")}
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
              loadingText={t("sending")}
          >
            {t("submit")}
          </LoadingButton>
        </form>
      </Form>
  );
};

export default ForgotPass;
