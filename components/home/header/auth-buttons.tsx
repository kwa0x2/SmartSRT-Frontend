"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";

interface AuthButtonsProps {
  isAuthenticated: boolean
}

export default function AuthButtons({isAuthenticated}: AuthButtonsProps) {

  return (
      <div className="flex items-center space-x-6">
        {isAuthenticated ? (
            <Button
                size="sm"
                className="bg-black text-white hover:bg-black/90 text-sm tracking-wide font-medium h-7 !px-3 rounded-full uppercase"
                asChild
            >
              <Link href={APP_ROUTES.APP}>Go to App</Link>
            </Button>
        ) : (
            <>
              <Link href={APP_ROUTES.AUTH.LOGIN} className="font-bold text-sm tracking-wide uppercase">
                Login
              </Link>
              <Button
                  size="sm"
                  className="bg-black text-white hover:bg-black/90 text-sm tracking-wide font-medium h-7 !px-3 rounded-full uppercase"
                  asChild
              >
                <Link href={APP_ROUTES.AUTH.REGISTER}>Get Started Free</Link>
              </Button>
            </>
        )}
      </div>
  );
}