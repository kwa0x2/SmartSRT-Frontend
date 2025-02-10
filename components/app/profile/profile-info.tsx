"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { DEFAULT_AVATAR } from "@/components/app/header/profile-info/constants";
import { useSession } from "next-auth/react";

const ProfileInfo = () => {
  const { data: session } = useSession();

  return (
    <Card>
      <div className="flex items-center gap-4">
        <Image
          src={(session?.user?.image as string) || DEFAULT_AVATAR}
          alt={(session?.user?.name?.charAt(0) as string) || "Avatar"}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold capitalize">
            {session?.user?.name || "Alper Karakoyun"}
          </h2>
          <p className="text-muted-foreground">
            {session?.user?.email || "alperkarakoyun@gmail.com"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileInfo; 