import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const FooterTop = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-6 md:py-8 gap-4 md:gap-0">
      {/* Logo */}
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
          alt="SmartSRT Logo"
          width={200}
          height={100}
          className="w-24 md:w-32 pb-4 md:pb-0"
        />
      </ScrollLink>

      {/* Slogan */}
      <div className="text-base md:text-lg font-bold tracking-tight text-center md:text-left">
        Smart SRT Creation for Short Videos
      </div>
    </div>
  );
};

export default FooterTop;