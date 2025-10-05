import * as z from "zod"

export const getLoginSchema = (t: (key: string) => string) => {
  return z.object({
    email: z.string().email(t("emailInvalid")),
    password: z.string().min(8, t("passwordMin")),
  });
};

export type LoginFormData = z.infer<ReturnType<typeof getLoginSchema>>