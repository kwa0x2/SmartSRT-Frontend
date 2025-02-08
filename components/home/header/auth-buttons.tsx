import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-6 uppercase">
      <Link href="/auth/login" className="font-bold text-sm tracking-wide">
        Login
      </Link>
      <Button
        size="sm"
        className="bg-black text-white hover:bg-black/90 text-sm tracking-wide font-medium h-7 !px-3 rounded-full"
        asChild
      >
        <Link href="/auth/register">Get Started Free</Link>
      </Button>
    </div>
  );
};

export default AuthButtons; 