"use client";

import { PaymentSummary } from "@/components/app/payment/payment-summary";
import { ReturnButton } from "@/components/app/payment/return-button";
import { UserInfo } from "@/components/app/payment/user-info";
import UnauthorizedError from "@/components/partials/error/401";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import type { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const returnUrl = searchParams?.get("returnUrl");
  const { session } = useAuth();
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  const [checkoutData, setCheckoutData] = useState<CheckoutEventsData | null>(
    null
  );

  
  if (!returnUrl || !session?.user?.email) {
    return <UnauthorizedError />;
  }

  useEffect(() => {
    if (returnUrl && !paddle?.Initialized) {
      initializePaddle({
        token: "test_79a0768363644a4a6a01ff87aa8",
        environment: "sandbox",
        eventCallback: (event) => {
          if (event.data && event.name) {
            setCheckoutData(event.data);
          }
        },
        checkout: {
          settings: {
            variant: "one-page",
            displayMode: "inline",
            theme: "light",
            allowLogout: false,
            frameTarget: "checkout-container",
            frameInitialHeight: 450,
            frameStyle:
              "width: 100%; background-color: transparent; border: none; font-size: 12px;",
            successUrl: returnUrl,
          },
        },
      }).then((paddleInstance) => {
        if (paddleInstance && session.user.email) {
          setPaddle(paddleInstance);
          paddleInstance.Checkout.open({
            items: [{ priceId: "pri_01jsyss63ghcrjtx0tmhgyfxps", quantity: 1 }],
            customData: {
              user_id: session.user.id,
            },
            customer: {
              email: session.user.email
            },
          });
        }
      });
    }
  }, [returnUrl, paddle?.Initialized, session?.user?.email]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] py-8 md:py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <ReturnButton returnUrl={returnUrl} />

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-6xl mx-auto mt-6">
            <PaymentSummary checkoutData={checkoutData} />
            <Card className="w-full lg:w-1/2 shadow-lg border-2 border-muted bg-white/90">
              <CardContent className="flex flex-col h-full p-4 sm:p-6">
                <div className="checkout-container" />
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
