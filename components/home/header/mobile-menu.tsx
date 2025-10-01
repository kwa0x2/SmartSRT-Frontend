import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isAuthenticated: boolean
}

const MobileMenu = ({isAuthenticated}: MobileMenuProps) => {
  return (
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] flex flex-col uppercase"
        >
          <nav className="flex-1">
            <div className="flex flex-col gap-4">
              <ScrollLink
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block px-2 py-1 text-lg font-semibold"
              >
                Pricing
              </ScrollLink>
              {/* <ScrollLink
                  to="developers"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block px-2 py-1 text-lg font-semibold"
              >
                API
              </ScrollLink> */}
              <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block px-2 py-1 text-lg font-semibold"
              >
                Contact Us
              </ScrollLink>
            </div>
          </nav>

          <div className="pt-4 mt-auto items-center flex flex-col space-y-4">
            {isAuthenticated ? (
                <Button className="w-full bg-black uppercase" asChild>
                  <Link href={APP_ROUTES.APP}>Go to App</Link>
                </Button>
            ) : (
                <>
                  <Link href={APP_ROUTES.AUTH.LOGIN} className="font-bold text-sm tracking-wide">
                    Login
                  </Link>
                  <Button className="w-full bg-black uppercase" asChild>
                    <Link href={APP_ROUTES.AUTH.REGISTER}>Get Started Free</Link>
                  </Button>
                </>
            )}
          </div>
        </SheetContent>
      </Sheet>
  );
};

export default MobileMenu;