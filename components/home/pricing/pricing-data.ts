export type PlanName = "Free" | "Pro";

export interface PricingPlan {
    name: PlanName;
    description: string;
    price: {
      monthly: number;
    };
    features: string[];
  }
  
  export const pricingPlans: PricingPlan[] = [
    {
      name: "Free",
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
      name: "Pro",
      description: "Unlock higher upload limits for professional content creators who need more time",
      price: { monthly: 4.99 },
      features: [
        "100 minutes upload limit per month",
        "AI-powered automatic subtitle generation",
        "Maximum 3 minutes per file",
        "Support for MP4, MP3 and WAV files",
        "Support for 32+ languages",
      ],
    },
  ];