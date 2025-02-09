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
  // const session = await auth();

  const { data: session } = useSession();


  return (
    <div className={`md:block hidden ${inter.className}`}>
      <DropdownMenu >
        <DropdownMenuTrigger asChild className=" cursor-pointer">
          <div className=" flex items-center gap-3  text-default-800 ">

            <Image
              src={session?.user?.image as string || DEFAULT_AVATAR}
              alt={session?.user?.name?.charAt(0) as string || "undefined"}
              width={36}
              height={36}
              className="rounded-full"
            />

            <div className="text-sm font-medium  capitalize lg:block hidden  ">
              {session?.user?.name || "Alper Karakoyun"}
            </div>
            <span className="text-base  me-2.5 lg:inline-block hidden">
              <Icon icon="heroicons-outline:chevron-down"></Icon>
            </span>
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
              <div className="text-sm font-bold text-black capitalize ">
                {session?.user?.name || "Alper Karakoyun"}
              </div>
              <Link
                href="/dashboard"
                className="text-xs text-black"
              >
                {session?.user?.email || "alperkarakoyun@gmail.com"}
              </Link>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup >
          {MENU_ITEMS.map((item, index) => (
              <Link
                href={item.href}
                key={`info-menu-${index}`}
                className="cursor-pointer"
              >
                <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 px-3 py-1.5 cursor-pointer">
                  <Icon icon={item.icon} className="w-4 h-4" />
                  {item.name}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="" />
          <DropdownMenuItem
            className="flex items-center gap-2 text-sm font-medium text-rose-900  capitalize my-1 px-3 cursor-pointer"
          >
            <div>
              <form
                action={logoutAction}
              >
                <button type="submit" className=" w-full  flex  items-center gap-2" >
                  <Icon icon="heroicons:power" className="w-4 h-4" />
                  Log out
                </button>
              </form>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default ProfileInfo;
