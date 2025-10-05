import { z } from "zod";

export const getForgotSchema = (t: (key: string) => string) => {
  return z.object({
    email: z.string().email(t("emailInvalid")),
  });
};

export type ForgotFormData = z.infer<ReturnType<typeof getForgotSchema>>;

export const getResetPasswordSchema = (t: (key: string) => string) => {
  return z
    .object({
      password: z.string().min(8, t("passwordMin")),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordMatch"),
      path: ["confirmPassword"],
    });
};

export type ResetPasswordFormData = z.infer<ReturnType<typeof getResetPasswordSchema>>;