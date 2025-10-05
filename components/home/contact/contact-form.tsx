"use client";

import { Card } from "@/components/ui/card";
import { LoadingButton } from "@/components/ui/loading-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormValues, getContactSchema } from "@/schemas/contact.schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { createContact } from "@/app/api/services/contact.service";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);
  const t = useTranslations('Contact.form');
  const tValidation = useTranslations('Contact.validation');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(getContactSchema(tValidation)),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });

  const watchFields = watch(["first_name", "last_name", "email", "message"]);

  const onSubmit = async (data: ContactFormValues) => {
    if (isPending) return;
    setIsPending(true);
    try {
      const result = await createContact(data);
      if (result.status === 200) {
        toast.success(t('success'));
        reset();
      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(t('error'));
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
      <Card className="pt-6 pb-4 px-3  md:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <Label
                  htmlFor="first_name"
                  className="text-[15px] text-black  font-medium"
              >
                {t('firstName')}
              </Label>
              <Input
                  id="first_name"
                  placeholder={t('firstNamePlaceholder')}
                  disabled={isPending}
                  {...register("first_name")}
                  size="lg"
                  autoComplete="first_name"
                  className={cn("text-black text-[15px] h-12", {
                    "border-destructive": errors.first_name,
                    "border-success": !errors.first_name && watchFields[0],
                  })}
              />
              {errors.first_name && (
                  <p className="text-destructive text-sm">
                    {errors.first_name.message}
                  </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                  htmlFor="last_name"
                  className="text-[15px] text-black  font-medium"
              >
                {t('lastName')}
              </Label>
              <Input
                  id="last_name"
                  placeholder={t('lastNamePlaceholder')}
                  disabled={isPending}
                  {...register("last_name")}
                  size="lg"
                  autoComplete="last_name"
                  className={cn("text-black text-[15px] h-12", {
                    "border-destructive": errors.last_name,
                    "border-success": !errors.last_name && watchFields[1],
                  })}
              />
              {errors.last_name && (
                  <p className="text-destructive text-sm">
                    {errors.last_name.message}
                  </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label
                htmlFor="email"
                className="text-[15px] text-black  font-medium"
            >
              {t('email')}
            </Label>
            <Input
                id="email"
                placeholder={t('emailPlaceholder')}
                disabled={isPending}
                {...register("email")}
                size="lg"
                autoComplete="email"
                className={cn("text-black text-[15px] h-12", {
                  "border-destructive": errors.email,
                  "border-success": !errors.email && watchFields[2],
                })}
            />
            {errors.email && (
                <p className="text-destructive text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
                htmlFor="message"
                className="text-[15px] text-black  font-medium"
            >
              {t('message')}
            </Label>
            <Textarea
                id="message"
                placeholder={t('messagePlaceholder')}
                disabled={isPending}
                {...register("message")}
                autoComplete="message"
                className={cn("text-black text-[15px] h-12 min-h-[150px] ", {
                  "border-destructive": errors.message,
                })}
            />
            {errors.message && (
                <p className="text-destructive text-sm">{errors.message.message}</p>
            )}
          </div>

          <LoadingButton
              type="submit"
              loading={isPending}
              loadingText={t('sending')}
              className="w-full bg-black uppercase hover:bg-black/90 text-sm md:text-base h-9 md:h-11 px-4 md:px-8"
          >
            {t('submit')}
          </LoadingButton>
        </form>
      </Card>
  );
};

export default ContactForm;
