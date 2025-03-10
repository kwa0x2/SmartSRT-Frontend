"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";

const ProfileInfo = () => {
  const currentUser = useCurrentUser();

  return (
    <Card>
      <div className="flex items-center gap-3 md:gap-4">
        <Avatar
          src={currentUser?.image}
          name={currentUser?.name}
          className=" w-[60px] md:w-[80px]"
        />
        <div>
          <h2 className="text-lg md:text-xl font-semibold capitalize">
            {currentUser?.name || "Undefined"}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            {currentUser?.email || "undefined@autosrt.com"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileInfo;
