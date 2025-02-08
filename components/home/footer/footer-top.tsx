import { Link } from "@/i18n/routing";
import Image from "next/image";

const FooterTop = () => {
  return (
    <div className="flex items-center justify-between py-8">
      {/* Logo */}
      <Link href="/" className="text-xl font-extrabold">
        <Image
          src="/images/logo/black.png"
          alt="AutoSRT Logo"
          width={200}
          height={100}
          className="w-32"
        />
      </Link>

      {/* Slogan */}
      <div className="text-lg font-bold tracking-tight">
        Smart SRT Creation for Short Videos
      </div>
    </div>
  );
};

export default FooterTop;