import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./theme.css"
import { ThemeProvider } from "@/providers/theme-provider";
import MountedProvider from "@/providers/mounted.provider";
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] });
// language 
import { getLangDir } from 'rtl-detect';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import DirectionProvider from "@/providers/direction-provider";
import AuthProvider from "@/providers/auth.provider";

export const metadata: Metadata = {
  title: "AutoSRT",
  description: "Created by kwa0x2",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params; 

  const messages = await getMessages(); 
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction}>
      <body className={`${inter.className} autosrt-app`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AuthProvider>
            {/* <ThemeProvider attribute="class" defaultTheme="dark"> */}
              <MountedProvider>
                <DirectionProvider direction={direction}>
                  {children}
                </DirectionProvider>
              </MountedProvider>
              <Toaster />
              <SonnerToaster />
            {/* </ThemeProvider> */}
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}