import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@/components/ui/icon";
import { Link } from "@/i18n/routing";
import { logoutAction } from "@/action/auth-action";
import { Inter } from "next/font/google";
import { MENU_ITEMS } from "../../../../constants/menu-items";
import { Avatar } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

const ProfileInfoSkeleton = () => {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="w-10 h-10 rounded-full" />
      <div className="hidden md:block">
        <Skeleton className="w-24 h-4 mb-1" />
        <Skeleton className="w-32 h-3" />
      </div>
    </div>
  );
};

const ProfileInfoContent = () => {
  const { user, isLoading } = useCurrentUser();

  useEffect(() => {
    const checkAndLogout = async () => {
      if (user?.error === "invalid-session") {
        try {
          await logoutAction();
          window.location.replace("/");
        } catch (error) {
          console.error("Logout error:", error);
        }
      }
    };
    checkAndLogout();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logoutAction();
      window.location.replace("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (isLoading || !user) {
    return <ProfileInfoSkeleton />;
  }

  return (
    <div className={inter.className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <div className="flex items-center gap-3">
            <Avatar
              src={user.image}
              name={user.name}
              className="md:hidden"
            />
            <div className="hidden md:flex items-center gap-3">
              <Avatar src={user.image} name={user.name} />
              <div className="text-sm font-medium capitalize">
                {user.name || "Undefined"}
              </div>
              <Icon icon="heroicons-outline:chevron-down" className="w-4 h-4" />
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={`w-56 p-0 ${inter.className}`}
          align="end"
        >
          <DropdownMenuLabel className="flex gap-2 items-center mb-1 p-3">
            <Avatar src={user.image} name={user.name} />
            <div>
              <div className="text-sm font-bold text-black capitalize">
                {user.name || "Undefined"}
              </div>
              <div className="text-xs text-gray-500">
                {user.email || "undefined@autosrt.com"}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {MENU_ITEMS.map((item, index) => (
              <Link
                href={item.href}
                key={`info-menu-${index}`}
              >
                <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 px-3 py-1.5">
                  <Icon icon={item.icon} className="w-4 h-4" />
                  {item.name}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-rose-900 focus:text-rose-900 focus:bg-rose-100 capitalize my-1 px-3">
            <form
              action={handleLogout}
              className="w-full"
            >
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

const ProfileInfo = () => {
  return (
    <Suspense fallback={<ProfileInfoSkeleton />}>
      <ProfileInfoContent />
    </Suspense>
  );
};

export default ProfileInfo;
