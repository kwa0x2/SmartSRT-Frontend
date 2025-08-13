export const apiAuthPrefix = "/api/auth";

export const APP_ROUTES = {
  HOME: "/",
  APP: "/app",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    VERIFY: "/auth/verify",
    RESET_PASSWORD: "/auth/reset-password",
    FORGOT_PASSWORD: "/auth/forgot-password",
    OTP: "/auth/otp",
    ACCOUNT_DELETE: "/auth/account/delete"
  },
  PROFILE: "/app/profile",
  SUBSCRIPTION: "/app/subscription",
  CHECKOUT: "/app/payment",
  API: {
    DOCS: "/docs/api",
    MANAGEMENT: "/app/api"
  }

} as const;

export const MENU_ITEMS = [
  {
    name: "Profile",
    icon: "heroicons:user",
    href: APP_ROUTES.PROFILE,
  },
  {
    name: "App",
    icon: "heroicons:squares-2x2",
    href: APP_ROUTES.APP,
  },
  {
    name: "Subscription",
    icon: "heroicons:credit-card",
    href: APP_ROUTES.SUBSCRIPTION,
  },
  {
    name: "API",
    icon: "heroicons:code-bracket-square",
    href: APP_ROUTES.API.MANAGEMENT,
  },

  {
    name: "Home",
    icon: "heroicons:home",
    href: APP_ROUTES.HOME,
  },

] as const;

export const publicRoutes = [
  "/en",
  "/tr",
  "/en/auth/login",
  "/tr/auth/login",
  "/en/auth/register",
  "/tr/auth/register",
  "/en/auth/verify",
  "/tr/auth/verify",
  "/en/auth/forgot-password",
  "/tr/auth/forgot-password",
  "/en/auth/reset-password",
  "/tr/auth/reset-password",
  "/en/auth/otp",
  "/tr/auth/otp",
  "/en/auth/account/delete",
  "/tr/auth/account/delete",
];
