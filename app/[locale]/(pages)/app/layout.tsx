import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ap766p",
  description: "Upload your videos and generate professional SRT subtitles with AI",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
