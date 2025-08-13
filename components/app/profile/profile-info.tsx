"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileInfoSkeleton = () => {
  return (
      <Card>
        <div className="flex items-center gap-3 md:gap-4">
          <Skeleton className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full" />
          <div className="flex-1">
            <Skeleton className="w-32 h-6 md:h-7 mb-2" />
            <Skeleton className="w-48 h-5 md:h-6" />
          </div>
        </div>
      </Card>
  );
};

interface ProfileInfoContentProps {
  email?: string;
  name?: string;
  image?: string;
}

const ProfileInfoContent = ({ email, name, image }: ProfileInfoContentProps) => {
  const { user, isLoading } = useCurrentUser();

  if (isLoading || (!user && !email && !name && !image)) {
    return <ProfileInfoSkeleton />;
  }

  const displayEmail = email || user?.email || "-";
  const displayName = name || user?.name || "-";
  const displayImage = image || user?.image;

  return (
      <Card>
        <div className="flex items-center gap-3 md:gap-4">
          <Avatar
              src={displayImage}
              name={displayName}
              className="w-[60px] md:w-[80px]"
          />
          <div className="flex-1 text-left">
            <h2 className="text-lg md:text-xl font-semibold capitalize">
              {displayName}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              {displayEmail}
            </p>
          </div>
        </div>
      </Card>
  );
};

interface ProfileInfoProps {
  email?: string;
  name?: string;
  image?: string;
}

const ProfileInfo = ({ email, name, image }: ProfileInfoProps) => {
  return <ProfileInfoContent email={email} name={name} image={image} />;
};

export default ProfileInfo;
