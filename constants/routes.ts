export const APP_ROUTES = {
  HOME: "/",
  APP: "/app",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    VERIFY: "/auth/verify",
    RESET_PASSWORD: "/auth/reset-password"
  },
  PROFILE: "/app/profile",
  SUBSCRIPTION: "/app/subscription",
  CHECKOUT: "/app/checkout",
  DOCS: {
    API: "/docs/api"
  }
} as const; 