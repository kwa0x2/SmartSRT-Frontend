"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useAccountManagement } from "@/hooks/use-account-management";
import { startTransition } from "react";
import { forgotPassword, deleteAccountRequest } from "@/app/api/services/auth.service";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";

const AccountManagement = () => {
  const { canChangePassword, passwordResetUrl } = useAccountManagement();
  const { session } = useAuth();

  const onChange = () => {
    startTransition(async () => {
      try {
        if (!session?.user.email) {
          toast.error("Failed to send new password setup email");
        } else {
          await forgotPassword(session.user.email);
          toast.success(
            "New password setup email sent successfully. Please check your inbox."
          );
        }
      } catch (err: any) {
        toast.error(
          err.response?.data?.message ||
            "Failed to send new password setup email"
        );
      }
    });
  };

  const handleDeleteAccount = () => {
    startTransition(async () => {
      try {
        await deleteAccountRequest();
        toast.success("Account deletion request sent successfully. Please check your email.");
      } catch (err: any) {
        toast.error(
          err.response?.data?.message || "Failed to send account deletion request"
        );
      }
    });
  };

  return (
    <Card className="space-y-4 md:space-y-6">
      <h3 className="text-base md:text-lg font-semibold">Account Management</h3>

      <div className="space-y-6 md:space-y-8">
        {canChangePassword && (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
            <div>
              <p className="font-medium text-sm md:text-base">
                Change Password
              </p>
            </div>

            <button className="text-black text-xs md:text-sm tracking-wide font-bold" onClick={onChange}>
              Update
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
          <div>
            <p className="font-medium text-sm md:text-base text-destructive">
              Delete Account
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              This action cannot be undone
            </p>
          </div>
          <Button
            variant="outline"
            color="destructive"
            className="uppercase text-xs md:text-sm"
            size="sm"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AccountManagement;
