"use client";

import { Card } from "@/components/ui/card";
import { LoadingButton } from "@/components/ui/loading-button";
import { useState } from "react";
import { forgotPassword, deleteAccountRequest } from "@/app/api/services/auth.service";
import { toast } from "sonner";
import { useUser } from "@/hooks/use-user";
import { useTranslations } from "next-intl";

const AccountManagement = () => {
  const { canChangePassword, session } = useUser();
  const [isSending, setIsSending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const t = useTranslations("App.profile.account");

  const onChange = async () => {
    setIsSending(true);
    try {
      if (!session?.user.email) {
        toast.error(t("passwordEmailError"));
      } else {
        await forgotPassword(session.user.email);
        toast.success(t("passwordEmailSuccess"));
      }
    } catch (err: any) {
      toast.error(
          err.response?.data?.message || t("passwordEmailError")
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      await deleteAccountRequest();
      toast.success(t("deleteSuccess"));
    } catch (err: any) {
      toast.error(
          err.response?.data?.message || t("deleteError")
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
      <Card className="space-y-4 md:space-y-6">
        <h3 className="text-base md:text-lg font-semibold">{t("title")}</h3>

        <div className="space-y-6 md:space-y-8">
          {canChangePassword && (
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
                <div>
                  <p className="font-medium text-sm md:text-base">
                    {t("changePassword")}
                  </p>
                </div>

                <LoadingButton
                    variant="link"
                    className="text-black text-xs md:text-sm tracking-wide font-bold !p-0 h-auto no-underline hover:no-underline"
                    onClick={onChange}
                    loading={isSending}
                    loadingText={t("sending")}
                >
                  {t("update")}
                </LoadingButton>
              </div>
          )}

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
            <div>
              <p className="font-medium text-sm md:text-base text-destructive">
                {t("deleteAccount")}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {t("deleteWarning")}
              </p>
            </div>
            <LoadingButton
                variant="outline"
                color="destructive"
                className="uppercase text-xs md:text-sm"
                size="sm"
                onClick={handleDeleteAccount}
                loading={isDeleting}
                loadingText={t("processing")}
            >
              {t("deleteAccount")}
            </LoadingButton>
          </div>
        </div>
      </Card>
  );
};

export default AccountManagement;
