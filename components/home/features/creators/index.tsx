import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import ProcessSteps from "./process-steps";
import { Link as ScrollLink } from "react-scroll";

const Creators = () => {
  return (
    <section className="pb-60">
      <div className="px-64 mx-auto">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Sol İçerik */}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-neutral-400 uppercase tracking-wider">
              Creators
            </h2>
            <h3 className="text-5xl font-bold leading-tight lg:leading-[1.15]">
              Enhance your videos with multilingual subtitles
            </h3>
            <p className="mt-2 text-lg lg:leading-[1.4]">
              Create professional subtitles in multiple languages instantly. Our
              AI technology helps you reach a global audience by automatically
              generating accurate SRT files in various languages.
            </p>
            <div className="mt-6 flex space-x-6 items-center uppercase">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/90 text-base font-medium h-11 !px-5 rounded-full"
                asChild
              >
                <Link href="/auth/register">Get Started Free</Link>
              </Button>
              <ScrollLink
                to="pricing"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="font-bold text-sm tracking-wide cursor-pointer"
              >
                Pricing
              </ScrollLink>
            </div>
          </div>

          {/* Sağ İçerik */}
          <div className="relative flex items-center">
            <Card className="overflow-hidden rounded-2xl border-0  w-full">
              <CardContent className="">
                <ProcessSteps />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creators;
