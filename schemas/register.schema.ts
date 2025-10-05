import * as z from "zod"

export const getRegisterSchema = (t: (key: string) => string) => {
  return z.object({
    name: z.string().min(2, t("nameMin")),
    email: z.string().email(t("emailInvalid")),
    password: z.string().min(8, t("passwordMin")),
    phone_number: z.string().min(10, t("phoneMin")),
    avatar_url: z.string().optional(),
    otp: z.string().length(4, t("otpLength")),
    auth_type: z.string(),
  });
};

export type RegisterFormData = z.infer<ReturnType<typeof getRegisterSchema>>

export type RegisterStepOneData = Pick<RegisterFormData, "name" | "email" | "password">
export type RegisterStepTwoData = Pick<RegisterFormData, "phone_number" | "otp">