import { Link } from "@/i18n/routing";
import Image from "next/image";
import { APP_ROUTES } from "@/config/routes";
import ProfileInfo from "./profile-info/profile-info";

const Header = () => {
  return (
      <header className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
        <div className="px-4 md:px-8 mx-auto">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href={APP_ROUTES.APP} className="text-xl font-extrabold">
                <Image
                    src="/images/logo/black.png"
                    alt="AutoSRT Logo"
                    width={200}
                    height={100}
                    className="w-28"
                />
              </Link>
            </div>

            {/* Profile Button */}
            <ProfileInfo />
          </div>
        </div>
      </header>
  );
};

export default Header;