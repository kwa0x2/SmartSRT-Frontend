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

export const staticPricingPlans: PricingPlan[] = [
  {
    name: "free",
    description: "Try our AI-powered subtitle generation with high-quality speech recognition for your files",
    price: { monthly: 0 },
    features: [
      "10 minutes upload limit per month",
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
      "100 minutes upload limit per month",
      "AI-powered automatic subtitle generation",
      "Maximum 5 minutes per file",
      "Support for MP4, MP3 and WAV files",
      "Support for 32+ languages",
    ],
  },
];

export const getPricingPlans = async (): Promise<PricingPlan[]> => {
  try {
    const proPriceResponse = await paddleGetPriceData("pri_01jsyss63ghcrjtx0tmhgyfxps");
    const proPriceAmount = proPriceResponse.data.unit_price.amount;

    return [
      staticPricingPlans[0], 
      {
        ...staticPricingPlans[1],
        price: { monthly: proPriceAmount }
      }
    ];
  } catch (error) {
    console.error('Error fetching pro price:', error);
    return staticPricingPlans;
  }
};