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


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.Metadata as any;

  return {
    title: {
      default: t?.default || "SmartSRT - AI Powered Subtitle Generator",
      template: "%s - SmartSRT",
    },
    description: t?.description || "Generate accurate subtitles for your videos automatically using advanced AI technology. Fast, reliable, and multilingual subtitle generation by kwa0x2.",
    keywords: t?.keywords || "subtitle generator, AI subtitles, automatic subtitles, video subtitles, SRT generator, caption generator, multilingual subtitles, SmartSRT, AI-powered transcription",
    authors: [{ name: "SmartSRT" }],
    creator: "kwa0x2",
    publisher: "SmartSRT",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://smartsrt.com"),
    openGraph: {
      type: "website",
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url: "https://smartsrt.com",
      siteName: "SmartSRT",
      title: t?.default || "SmartSRT - AI Powered Subtitle Generator",
      description: t?.description || "Generate accurate subtitles for your videos automatically using advanced AI technology. Fast, reliable, and multilingual subtitle generation.",
      images: [
        {
          url: "https://smartsrt.com/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: t?.default || "SmartSRT - AI Powered Subtitle Generator",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t?.default || "SmartSRT - AI Powered Subtitle Generator",
      description: t?.description || "Generate accurate subtitles for your videos automatically using advanced AI technology. Fast, reliable, and multilingual subtitle generation.",
      images: ["https://smartsrt.com/opengraph-image.png"],
      creator: "@kwa0x2",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}


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