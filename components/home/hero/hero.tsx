import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const Hero = () => {
  return (
    <section className="relative pt-[140px] pb-20">
      <div className="px-64 mx-auto">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl md:text-3xl lg:text-[48px] font-bold tracking-tight lg:leading-[1.15]">
            Create high-quality SRT files quickly with{" "}
            <br className="hidden md:block" />
            AI-powered technology
          </h1>
          <p className="my-5 text-lg max-w-[800px]">
            Save time by automatically generating high-quality, perfectly timed
            subtitles.
          </p>
          <div>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90 text-sm font-medium h-11 !px-5 rounded-full"
              asChild
            >
              <Link href="/auth/register">GET STARTED FREE</Link>
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
