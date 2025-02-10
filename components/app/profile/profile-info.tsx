"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { DEFAULT_AVATAR } from "@/components/app/header/profile-info/constants";
import { useSession } from "next-auth/react";

const ProfileInfo = () => {
  const { data: session } = useSession();

  return (
    <Card>
      <div className="flex items-center gap-3 md:gap-4">
        <Image
          src={(session?.user?.image as string) || DEFAULT_AVATAR}
          alt={(session?.user?.name?.charAt(0) as string) || "Avatar"}
          width={60}
          height={60}
          className="rounded-full w-[60px] md:w-[80px]"
        />
        <div>
          <h2 className="text-lg md:text-xl font-semibold capitalize">
            {session?.user?.name || "Alper Karakoyun"}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            {session?.user?.email || "alperkarakoyun@gmail.com"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileInfo; 