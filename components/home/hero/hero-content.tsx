import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-3xl lg:text-[60px] font-bold tracking-tight lg:leading-[1.15]">
        Create high-quality SRT files quickly with{" "}
        <br className="hidden md:block" />
        AI-powered technology
      </h1>
      <p className="my-5 text-xl max-w-[800px]">
        Save time by automatically generating high-quality, perfectly
        timed subtitles.
      </p>
      <div>
        <Button
          size="lg"
          className="bg-black text-white hover:bg-black/90 text-base font-medium uppercase h-11 !px-5 rounded-full"
          asChild
        >
          <Link href="/auth/register">Get Started Free</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent; 