import { Link } from "@/i18n/routing";
import Logo from "@/components/logo";
import Copyright from "@/components/copyright";
import AuthBackground from "./auth-background";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        <div className="flex-1 relative">
          <div className="h-full flex flex-col">
            <div className="max-w-[524px] mx-auto w-full md:px-[42px] md:py-[44px] p-7 text-2xl text-default-900 mb-3 flex flex-col justify-center h-full">
              <div className="flex justify-center items-center text-center mb-6 lg:hidden">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <div className="text-center 2xl:mb-4 mb-2">
                <h4 className="font-bold mb-4">{title}</h4>
                <div className="text-default-500 text-base">{subtitle}</div>
              </div>
              {children}
            </div>
            <div className="text-xs font-normal text-default-500 z-[999] pb-10 text-center">
              <Copyright />
            </div>
          </div>
        </div>
        <AuthBackground />

      </div>
    </div>
  );
};

export default AuthLayout; 