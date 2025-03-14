"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const ProfileInfoSkeleton = () => {
  return (
    <Card>
      <div className="flex items-center gap-3 md:gap-4">
        <Skeleton className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full" />
        <div>
          <Skeleton className="w-32 h-6 md:h-7 mb-2" />
          <Skeleton className="w-48 h-5 md:h-6" />
        </div>
      </div>
    </Card>
  );
};

const ProfileInfoContent = () => {
  const { user, isLoading } = useCurrentUser();

  if (isLoading || !user) {
    return <ProfileInfoSkeleton />;
  }

  return (
    <Card>
      <div className="flex items-center gap-3 md:gap-4">
        <Avatar
          src={user.image}
          name={user.name}
          className="w-[60px] md:w-[80px]"
        />
        <div>
          <h2 className="text-lg md:text-xl font-semibold capitalize">
            {user.name || "Undefined"}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            {user.email || "undefined@autosrt.com"}
          </p>
        </div>
      </div>
    </Card>
  );
};

const ProfileInfo = () => {
  return (
    <Suspense fallback={<ProfileInfoSkeleton />}>
      <ProfileInfoContent />
    </Suspense>
  );
};

export default ProfileInfo;
