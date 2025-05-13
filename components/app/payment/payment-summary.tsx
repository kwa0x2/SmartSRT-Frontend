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
    <Card className="w-full md:w-1/2 shadow-lg border-2 border-muted bg-white/90 flex flex-col tracking-wider">
      <CardHeader className="">
        <CardTitle className="text-4xl font-bold ">
          <span className="tracking-wider">US${checkoutData?.recurring_totals?.total}</span>
          <span className="text-lg font-normal pl-4 text-muted-foreground">
            inc. tax
          </span>
        </CardTitle>
        <CardDescription className="flex items-center text-base">
          billed monthly
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Card className="my-6 border px-4 py-12 flex flex-col items-center gap-4">
          <FaCrown className="w-16 h-16 text-yellow-600" />
          <div className="text-center">
            <div className="font-medium text-xl mb-1">AutoSRT Pro Plan Monthly</div>
            <div className="text-muted-foreground text-lg">US${checkoutData?.recurring_totals?.total}/month </div>
          </div>
        </Card>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col justify-between bg-white rounded-lg p-4 border w-full">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="tracking-widest">US${checkoutData?.recurring_totals?.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span className="tracking-widest">US${checkoutData?.recurring_totals?.tax}</span>
            </div>
          </div>
          <div className="flex justify-between font-bold text-xl mt-4 border-t pt-3">
            <span>Total</span>
            <span className="tracking-widest">US${checkoutData?.recurring_totals?.total}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
