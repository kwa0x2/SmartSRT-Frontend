import { Link } from "@/i18n/routing";
import Image from "next/image";

const AuthBackground = () => {
  return (
    <div
      className="lg:block hidden flex-1 overflow-hidden bg-cover bg-no-repeat bg-center relative"
      style={{
        backgroundImage: `url(/images/all-img/login-bg.jpg)`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-[40px] leading-[48px] text-white max-w-[525px] mx-auto pb-6">
          Smart SRT Creation for{" "}
          <span className="text-white font-bold ms-1">Short Videos!</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image
            src="/images/logo/white.png"
            alt=""
            width={200}
            height={100}
            className="w-24"
          />
        </Link>
      </div>
    </div>
  );
};

export default AuthBackground; 