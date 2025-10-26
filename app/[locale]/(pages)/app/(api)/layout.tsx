import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.Metadata as any;

  return {
    title: `${t?.pages?.api?.title || "API"} - SmartSRT`,
  };
}

export default function ApiLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
