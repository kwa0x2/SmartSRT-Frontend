import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const ApiContent = () => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-lg font-semibold text-neutral-400 uppercase tracking-wider">
        Developers
      </h2>
      <h3 className="text-5xl font-bold leading-tight lg:leading-[1.15]">
        Fast and easy-to-use API
      </h3>
      <p className="mt-2 text-lg lg:leading-[1.4]">
        We obsess over building the fastest and simplest API so you can
        focus on building incredible applications
      </p>
      <div className="mt-6 flex space-x-6 items-center uppercase">
        <Button
          size="lg"
          className="bg-black text-white hover:bg-black/90 text-base font-medium h-11 !px-5 rounded-full"
          asChild
        >
          <Link href="/docs">Get Started</Link>
        </Button>
        <Link
          href="/pricing"
          className="font-bold text-sm tracking-wide"
        >
          Documents
        </Link>
      </div>
    </div>
  );
};

export default ApiContent; 