// UI & Design System Types
export type Color =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "destructive";

export type InputColor =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "destructive";

export type Shadow = "sm" | "md" | "lg" | "xl";
export type Size = "default" | "sm" | "md" | "lg";
export type Rounded = "sm" | "md" | "lg" | "full";
export type Radius = "sm" | "md" | "lg" | "xl" | "none";

// Layout & Configuration Types
export type LayoutType = "vertical" | "horizontal" | "semi-box" | "compact";
export type ContentType = "wide" | "boxed";
export type SkinType = "default" | "bordered";
export type SidebarType = "classic" | "draggable" | "two-column" | "compact";
export type NavBarType = "floating" | "sticky" | "hidden" | "default";
export type HeaderColorType = "default" | "coloured" | "transparent";

// Business Logic Types
export type PlanType = "free" | "pro";
export type AuthType = "google" | "github" | "credentials";

// AuthType enum for runtime usage
export const AuthType = {
  google: "google",
  github: "github",
  credentials: "credentials"
} as const;

// API Data Types
export interface ApiKey {
  id: string;
  name: string;
  key: string;
}

// Re-export schema types for convenience
export type {
  RegisterFormData,
  RegisterStepOneData,
  RegisterStepTwoData
} from "@/schemas/register.schema";

export type { PaymentFormData } from "@/schemas/payment.schema";
export type { ForgotFormData, ResetPasswordFormData } from "@/schemas/password.schema";
export type { LoginFormData } from "@/schemas/login.schema";
export type { SubtitleFormValues } from "@/schemas/file-upload.schema";
export type { ContactFormValues } from "@/schemas/contact.schema"; 