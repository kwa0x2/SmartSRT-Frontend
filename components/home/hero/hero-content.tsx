import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tight lg:leading-[1.15] px-4">
        Create high-quality SRT files quickly with{" "}
        <br className="hidden lg:block" />
        AI-powered technology
      </h1>
      <p className="my-5 text-base md:text-lg lg:text-xl max-w-[800px] px-4">
        Save time by automatically generating high-quality, perfectly
        timed subtitles.
      </p>
      <div>
        <Button
          size="lg"
          className="bg-black text-white hover:bg-black/90 text-sm md:text-base font-medium uppercase h-9 md:h-11 px-4 md:!px-5 rounded-full"
          asChild
        >
          <Link href="/auth/register">Get Started Free</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;