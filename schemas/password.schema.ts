import { z } from "zod";

export const forgotSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type ForgotFormData = z.infer<typeof forgotSchema>;


export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

  export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;