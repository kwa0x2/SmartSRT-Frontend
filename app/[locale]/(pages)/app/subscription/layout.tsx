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
    title: t?.pages?.subscription?.title || "Subscription",
    description: t?.pages?.subscription?.description || "Manage your subscription and billing information",
  };
}

export default function SubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
