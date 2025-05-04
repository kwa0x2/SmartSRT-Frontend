"use client";

import { PaymentForm } from "@/components/app/payment/payment-form";
import { PaymentSummary } from "@/components/app/payment/payment-summary";
import { ReturnButton } from "@/components/app/payment/return-button";
import { UserInfo } from "@/components/app/payment/user-info";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <ReturnButton />

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            <PaymentSummary />
            <PaymentForm />
          </div>

          <UserInfo />
        </div>
      </div>
    </div>
  );
}
