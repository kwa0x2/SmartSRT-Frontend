"use client";
import Layout from "@/components/app/layout";
import { FileUploadDemo } from "@/components/app/file-upload";
import { useAuth } from "@/hooks/use-auth";
import { ProBadge } from "@/components/app/pro-badge";

export default function App() {
  const { session } = useAuth();
  const isPro = session?.user?.plan === "pro";

  return (
    <Layout>
      {isPro && <ProBadge />}
      <FileUploadDemo />
    </Layout>
  );
}
