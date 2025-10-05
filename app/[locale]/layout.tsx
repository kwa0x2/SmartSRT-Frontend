import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./theme.css";
import MountedProvider from "@/providers/mounted.provider";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { notFound } from "next/navigation";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});
// language
import { getLangDir } from "rtl-detect";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import DirectionProvider from "@/providers/direction-provider";
import AuthProvider from "@/providers/auth.provider";
import { locales } from "@/config";
import LocaleCookieSync from "@/components/locale-cookie-sync";


export const metadata: Metadata = {
  title: "SmartSRT - AI Powered Subtitle Generator",
  description: "Created by kwa0x2",
};

export default async function RootLayout({
                                           children,
                                           params,
                                         }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages({ locale });
  const direction = getLangDir(locale);

  if (!locales.includes(locale as any)) {
    notFound();
  }

  return (
      <html lang={locale} dir={direction}>
      <body className={`${spaceGrotesk.className} smartsrt-app`}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <LocaleCookieSync />
        <AuthProvider>
          {/* <ThemeProvider attribute="class" defaultTheme="dark"> */}
          <MountedProvider>
            <DirectionProvider direction={direction}>
              {children}
            </DirectionProvider>
          </MountedProvider>
          <SonnerToaster />
          {/* </ThemeProvider> */}
        </AuthProvider>
      </NextIntlClientProvider>
      </body>
      </html>
  );
}
