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
import { MENU_ITEMS } from "@/config/routes";
import { Avatar } from "@/components/ui/avatar";
import { useUser } from "@/hooks/use-user";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { useRouter } from "@/i18n/routing";

import { toast } from "sonner";
import { LoadingButton } from "@/components/ui/loading-button";

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
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const checkAndLogout = async () => {
      if (user?.error === "invalid-session") {
        try {
          await logoutAction();
          window.location.replace("/");
        } catch (error) {
          console.error('Auto logout failed:', error);
        }
      }
    };
    checkAndLogout();
  }, [user]);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    try {
      await logoutAction();
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      toast.error("Failed to logout. Please try again or contact support.");
    } finally {
      setIsLoggingOut(false);
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
                  {user.email || "undefined@smartsrt.com"}
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
            <DropdownMenuItem
                className="flex items-center text-sm font-medium text-rose-900 focus:text-rose-900 focus:bg-rose-100 capitalize my-1 px-3">
                <LoadingButton
                    variant="link"
                    className="w-full flex items-center gap-2 text-rose-900 !p-0 h-auto no-underline hover:no-underline justify-start text-sm font-medium"
                    onClick={handleLogout}
                    loading={isLoggingOut}
                    loadingText="Logging out..."
                >
                  <Icon icon="heroicons:power" className="w-4 h-4"/>
                  Log out
                </LoadingButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  );
};

const ProfileInfo = () => {
  return (
      <Suspense fallback={<ProfileInfoSkeleton/>}>
        <ProfileInfoContent/>
      </Suspense>
  );
};

export default ProfileInfo;
