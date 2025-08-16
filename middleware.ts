import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { apiAuthPrefix, publicRoutes } from "@/config/routes";
import { routing } from "./i18n/routing";
import { getSIDCookieValue } from "@/hooks/get-my-cookie";

export default auth((req): any => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(pathname);
  
  if (isApiAuthRoute || isPublicRoute) return null;

  const hasSidCookie = req.cookies.has("sid");
  const hasAuthJsToken = req.cookies.has("authjs.session-token");
  const isLoggedIn = !!req.auth;

  let locale = req.cookies.get("NEXT_LOCALE")?.value;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  if (!hasSidCookie || !hasAuthJsToken || !isLoggedIn) {
    return NextResponse.redirect(new URL(`/${locale}/`, nextUrl));
  }

  const response = NextResponse.next();
  const cookieString = getSIDCookieValue(process.env.COOKIE_NAME as string);
  if (cookieString) {
    response.cookies.set("sid", cookieString, {
      maxAge: 86400,
      path: '/',
      httpOnly: true,
      secure: false,
      sameSite: 'lax'
    });
  }

  const hasLocale = routing.locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  if (!hasLocale) {
    const newPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return NextResponse.redirect(
      new URL(`/${locale}${newPathname}`, req.url)
    );
  }

  const currentLocale = pathname.split('/')[1];
  if (currentLocale !== locale && routing.locales.includes(currentLocale as any)) {
    const newPathname = pathname.replace(`/${currentLocale}/`, `/${locale}/`);
    return NextResponse.redirect(new URL(newPathname, req.url));
  }

  return response;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};