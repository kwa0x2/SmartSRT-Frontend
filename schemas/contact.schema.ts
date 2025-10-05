import { z } from "zod";

export const getContactSchema = (t: (key: string) => string) => {
  return z.object({
    first_name: z.string().min(2, t("firstNameMin")),
    last_name: z.string().min(2, t("lastNameMin")),
    email: z.string().email(t("emailInvalid")),
    message: z.string().min(10, t("messageMin")),
  });
};

export type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>;
