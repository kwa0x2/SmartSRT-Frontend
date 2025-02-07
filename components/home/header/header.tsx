import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="px-64 mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-extrabold">
              <Image
                src="/images/logo/black.png"
                alt=""
                width={200}
                height={100}
                className="w-28"
              />
            </Link>
          </div>

          {/* Center Navigation */}
          <Navigation />

          {/* Right Buttons */}
          <div className="flex items-center space-x-6 uppercase">
            <Link href="/auth/login" className="font-bold text-sm tracking-wide">
              Login
            </Link>
            <Button
              size="sm"
              className="bg-black text-white hover:bg-black/90 text-sm  tracking-wide font-medium h-7 !px-3 rounded-full"
              asChild
            >
              <Link href="/auth/register">TRY FOR FREE</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
