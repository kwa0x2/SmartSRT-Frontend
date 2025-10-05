import { PlanType } from "@/types";
import { getPriceData as paddleGetPriceData } from "@/app/api/services/paddle.service";

export interface PricingPlan {
  name: PlanType;
  description: string;
  price: {
    monthly?: number;
  };
  features: string[];
}

export const freeUploadLimitMinutes = Math.floor(
  Number(process.env.NEXT_PUBLIC_FREE_UPLOAD_LIMIT_SECONDS || 600) / 60
);
export const proUploadLimitMinutes = Math.floor(
  Number(process.env.NEXT_PUBLIC_PRO_UPLOAD_LIMIT_SECONDS || 4500) / 60
);

export const getStaticPricingPlans = (t: any): PricingPlan[] => [
  {
    name: "free",
    description: t('plans.free.description'),
    price: { monthly: 0 },
    features: [
      t('plans.free.features.uploadLimit', { minutes: freeUploadLimitMinutes }),
      t('plans.free.features.aiPowered'),
      t('plans.free.features.maxDuration'),
      t('plans.free.features.fileSupport'),
      t('plans.free.features.languageSupport'),
    ],
  },
  {
    name: "pro",
    description: t('plans.pro.description'),
    price: { monthly: 0 },
    features: [
      t('plans.pro.features.uploadLimit', { minutes: proUploadLimitMinutes }),
      t('plans.pro.features.aiPowered'),
      t('plans.pro.features.maxDuration'),
      t('plans.pro.features.fileSupport'),
      t('plans.pro.features.languageSupport'),
    ],
  },
];

export const staticPricingPlans: PricingPlan[] = [
  {
    name: "free",
    description: "Try our AI-powered subtitle generation with high-quality speech recognition for your files",
    price: { monthly: 0 },
    features: [
      `${freeUploadLimitMinutes} minutes upload limit per month`,
      "AI-powered automatic subtitle generation",
      "Maximum 30 seconds per file",
      "Support for MP4 and MP3 files",
      "Support for 32+ languages",
    ],
  },
  {
    name: "pro",
    description: "Unlock higher upload limits for professional content creators who need more time",
    price: { monthly: 0 },
    features: [
      `${proUploadLimitMinutes} minutes upload limit per month`,
      "AI-powered automatic subtitle generation",
      "Maximum 5 minutes per file",
      "Support for MP4, MP3 and WAV files",
      "Support for 32+ languages",
    ],
  },
];

export const getPricingPlans = async (): Promise<PricingPlan[]> => {
  try {
    const proPriceResponse = await paddleGetPriceData(process.env.NEXT_PUBLIC_PADDLE_PRICE_ID as string);
    const proPriceAmount = proPriceResponse.data.unit_price.amount;

    return [
      staticPricingPlans[0],
      {
        ...staticPricingPlans[1],
        price: { monthly: proPriceAmount }
      }
    ];
  } catch (error) {
    return staticPricingPlans;
  }
};