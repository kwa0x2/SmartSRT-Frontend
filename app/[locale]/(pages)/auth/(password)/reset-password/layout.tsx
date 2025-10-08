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
    title: t?.pages?.resetPassword?.title || "Reset Password",
    description: t?.pages?.resetPassword?.description || "Set your new password",
  };
}

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
