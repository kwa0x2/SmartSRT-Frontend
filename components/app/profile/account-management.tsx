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
    <Card>
      <h3 className="text-lg font-semibold pb-4">Account Management</h3>

      <div>
        <div className="flex items-center justify-between pb-10">
          <div>
            <p className="font-medium">Change Password</p>
          </div>
          <Link
            className="font-bold text-sm tracking-wide cursor-pointer"
            href={""}
          >
            Update
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-destructive">Delete Account</p>
            <p className="text-sm text-muted-foreground">
              This action cannot be undone
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                color="destructive"
                className="uppercase"
              >
                Delete Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription className="text-black">
                  This action cannot be undone. This will permanently delete
                  your account and all associated data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-black hover:bg-black text-white hover:ring-default hover:ring-2">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="bg-destructive hover:bg-destructive/90 hover:ring-destructive/90">
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