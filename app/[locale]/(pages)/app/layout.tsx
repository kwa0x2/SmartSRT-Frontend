import { getMessages } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.Metadata as any;

  return {
    title: t?.pages?.app?.title || "App",
    description: t?.pages?.app?.description || "Upload your videos and generate professional SRT subtitles with AI",
  };
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
