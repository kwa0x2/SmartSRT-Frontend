"use client";

import { useTranslations } from "next-intl";

const PricingHeader = () => {
  const t = useTranslations('Pricing');

  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[1.15]">
        {t('heading')}
      </h2>
      <p className="mt-2 text-base md:text-lg lg:leading-[1.4] text-neutral-600">
        {t('description')}
      </p>
    </div>
  );
};

export default PricingHeader;
