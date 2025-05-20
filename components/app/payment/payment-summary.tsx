import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { FaCrown } from "react-icons/fa";
import type { CheckoutEventsData } from '@paddle/paddle-js/types/checkout/events';

interface PaymentSummaryProps {
  checkoutData?: CheckoutEventsData | null;
}

export function PaymentSummary({ checkoutData }: PaymentSummaryProps) {
  return (
    <Card className="w-full lg:w-1/2 shadow-lg border-2 border-muted bg-white/90 flex flex-col tracking-wider">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold">
          <span className="tracking-wider">US${checkoutData?.recurring_totals?.total}</span>
          <span className="text-sm sm:text-base md:text-lg font-normal pl-2 sm:pl-4 text-muted-foreground">
            inc. tax
          </span>
        </CardTitle>
        <CardDescription className="flex items-center text-sm sm:text-base">
          billed monthly
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-4 sm:p-6">
        <Card className="my-4 sm:my-6 border px-3 sm:px-4 py-8 sm:py-12 flex flex-col items-center gap-3 sm:gap-4">
          <FaCrown className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-600" />
          <div className="text-center">
            <div className="font-medium text-lg sm:text-xl mb-1">AutoSRT Pro Plan Monthly</div>
            <div className="text-muted-foreground text-base sm:text-lg">US${checkoutData?.recurring_totals?.total}/month </div>
          </div>
        </Card>
      </CardContent>
      <CardFooter className="p-4 sm:p-6">
        <div className="flex flex-col justify-between bg-white rounded-lg p-3 sm:p-4 border w-full">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="tracking-widest">US${checkoutData?.recurring_totals?.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-muted-foreground">Tax</span>
              <span className="tracking-widest">US${checkoutData?.recurring_totals?.tax}</span>
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg sm:text-xl mt-3 sm:mt-4 border-t pt-3">
            <span>Total</span>
            <span className="tracking-widest">US${checkoutData?.recurring_totals?.total}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
