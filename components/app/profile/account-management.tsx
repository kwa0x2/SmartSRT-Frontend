"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AccountManagement = () => {
  return (
    <Card className=" space-y-4 md:space-y-6">
      <h3 className="text-base md:text-lg font-semibold">Account Management</h3>

      <div className="space-y-6 md:space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
          <div>
            <p className="font-medium text-sm md:text-base">Change Password</p>
          </div>
          <Link
            className="font-bold text-xs md:text-sm tracking-wide cursor-pointer"
            href={""}
          >
            Update
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
          <div>
            <p className="font-medium text-sm md:text-base text-destructive">Delete Account</p>
            <p className="text-xs md:text-sm text-muted-foreground">
              This action cannot be undone
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                color="destructive"
                className="uppercase text-xs md:text-sm"
                size="sm"
              >
                Delete Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[90%] md:max-w-lg">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and all associated data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </Card>
  );
};

export default AccountManagement; 