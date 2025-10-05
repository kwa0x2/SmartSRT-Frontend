"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";
import { Link as ScrollLink } from "react-scroll";
import { useTranslations } from "next-intl";

interface CreatorsContentProps {
    isAuthenticated: boolean;
}

const CreatorsContent = ({ isAuthenticated }: CreatorsContentProps) => {
    const t = useTranslations('Features');

    return (
        <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-neutral-400 uppercase tracking-wider">
                {t('title')}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight lg:leading-[1.15]">
                {t('heading')}
            </h3>
            <p className="mt-2 text-base md:text-lg lg:leading-[1.4]">
                {t('description')}
            </p>
            <div className="mt-6 flex space-x-6 items-center uppercase">
                <Button
                    size="lg"
                    className="bg-black text-white hover:bg-black/90 text-sm md:text-base font-medium h-11 !px-5 rounded-full"
                    asChild
                >
                    {isAuthenticated ? (
                        <Link href={APP_ROUTES.APP}>{t('goToApp')}</Link>
                    ) : (
                        <Link href={APP_ROUTES.AUTH.REGISTER}>{t('getStarted')}</Link>
                    )}
                </Button>
                <ScrollLink
                    to="pricing"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="font-bold text-sm tracking-wide cursor-pointer"
                    tabIndex={0}
                >
                    {t('pricing')}
                </ScrollLink>
            </div>
        </div>
    );
};

export default CreatorsContent;
