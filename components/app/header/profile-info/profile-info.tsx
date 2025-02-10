"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@/components/ui/icon"
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { logoutAction } from "@/action/auth-action";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { DEFAULT_AVATAR, MENU_ITEMS } from "./constants";

const inter = Inter({ subsets: ["latin"] });

const ProfileInfo = () => {
  const { data: session } = useSession();

  return (
    <div className={inter.className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <div className="flex items-center gap-3">
            <Image
              src={session?.user?.image as string || DEFAULT_AVATAR}
              alt={session?.user?.name?.charAt(0) as string || "undefined"}
              width={36}
              height={36}
              className="rounded-full md:hidden"
            />
            <div className="hidden md:flex items-center gap-3">
              <Image
                src={session?.user?.image as string || DEFAULT_AVATAR}
                alt={session?.user?.name?.charAt(0) as string || "undefined"}
                width={36}
                height={36}
                className="rounded-full"
              />
              <div className="text-sm font-medium capitalize">
                {session?.user?.name || "Alper Karakoyun"}
              </div>
              <Icon icon="heroicons-outline:chevron-down" className="w-4 h-4" />
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={`w-56 p-0 ${inter.className}`} align="end">
          <DropdownMenuLabel className="flex gap-2 items-center mb-1 p-3">
            <Image
              src={session?.user?.image as string || DEFAULT_AVATAR}
              alt={session?.user?.name?.charAt(0) as string || "undefined"}
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <div className="text-sm font-bold text-black capitalize">
                {session?.user?.name || "Alper Karakoyun"}
              </div>
              <div className="text-xs text-gray-500">
                {session?.user?.email || "alperkarakoyun@gmail.com"}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {MENU_ITEMS.map((item, index) => (
              <Link
                href={item.href}
                key={`info-menu-${index}`}
                className="cursor-pointer"
              >
                <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 px-3 py-1.5">
                  <Icon icon={item.icon} className="w-4 h-4" />
                  {item.name}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-rose-900 capitalize my-1 px-3">
            <form action={logoutAction} className="w-full">
              <button type="submit" className="w-full flex items-center gap-2">
                <Icon icon="heroicons:power" className="w-4 h-4" />
                Log out
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileInfo;
