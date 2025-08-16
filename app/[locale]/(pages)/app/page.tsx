"use client";
import Layout from "@/components/app/layout";
import { FileUploadDemo } from "@/components/app/file-upload";
import { useUser } from "@/hooks/use-user";
import { ProBadge } from "@/components/app/pro-badge";
import { FreeBadge } from "@/components/app/free-badge";

export default function AppPage() {
  const { isPro, isLoading, isAuthenticated } = useUser();

  return (
      <Layout>
        {!isLoading && isAuthenticated && (
          isPro ? <ProBadge /> : <FreeBadge />
        )}
        <FileUploadDemo />
      </Layout>
  );
}
