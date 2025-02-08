import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const FooterTop = () => {
  return (
    <div className="flex items-center justify-between py-8">
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
          alt="AutoSRT Logo"
          width={200}
          height={100}
          className="w-32"
        />
      </ScrollLink>

      {/* Slogan */}
      <div className="text-lg font-bold tracking-tight">
        Smart SRT Creation for Short Videos
      </div>
    </div>
  );
};

export default FooterTop;