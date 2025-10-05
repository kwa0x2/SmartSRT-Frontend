import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import { useTranslations } from "next-intl";

interface HeroContentProps {
    isAuthenticated: boolean
}


const HeroContent = ({isAuthenticated}: HeroContentProps) => {
    const t = useTranslations('Hero');


    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tight lg:leading-[1.15] px-4">
                {t('title')}
            </h1>
            <p className="my-5 text-base md:text-lg lg:text-xl max-w-[800px] px-4">
                {t('description')}
            </p>
            <div>
                <Button
                    size="lg"
                    className="bg-black text-white hover:bg-black/90 text-sm md:text-base font-medium uppercase h-9 md:h-11 px-4 md:!px-5 rounded-full"
                    asChild
                >
                    {isAuthenticated ? (
                        <Link href={APP_ROUTES.APP}>{t('goToApp')}</Link>
                    ) : (
                        <Link href={APP_ROUTES.AUTH.REGISTER}>{t('getStarted')}</Link>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default HeroContent;