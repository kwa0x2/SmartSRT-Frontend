import * as z from "zod"

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone_number: z.string().min(10, "Please enter a valid phone number"),
  avatar_url: z.string().optional(),
  otp: z.string().length(4, "OTP code must be 4 digits")
})

export type RegisterFormData = z.infer<typeof registerSchema>

export type RegisterStepOneData = Pick<RegisterFormData, "name" | "email" | "password">
export type RegisterStepTwoData = Pick<RegisterFormData, "phone_number" | "otp">