import Navigation from "./navigation";
import AuthButtons from "./auth-buttons";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="px-64 mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-xl font-extrabold cursor-pointer"
            >
              <Image
                src="/images/logo/black.png"
                alt=""
                width={200}
                height={100}
                className="w-28"
              />
            </ScrollLink>
          </div>

          {/* Center Navigation */}
          <Navigation />

          {/* Right Buttons */}
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
