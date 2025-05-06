import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaymentFormData, paymentFormSchema } from "@/schemas/payment.schema";
import { FaRegCreditCard } from "react-icons/fa";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { FaPaypal } from "react-icons/fa";
import { CardTypeDetector } from './card-type-detector';

export function PaymentForm() {
  const [method, setMethod] = useState("card");
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      country: "Türkiye",
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      name: "",
    },
  });

  const getNextMonthDate = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const onSubmit = async (data: PaymentFormData) => {
    try {
      const formattedData = {
        ...data,
        cardNumber: data.cardNumber.replace(/\s/g, ""),
      };
      console.log("Form data:", formattedData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Payment successful!");
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during payment!");
    }
  };

  const formatCardNumber = (value: string) => {
    const onlyAlphaNum = value
      .replace(/[^a-zA-Z0-9]/g, "")
      .toUpperCase()
      .substring(0, 19);
    return onlyAlphaNum.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiryDate = (value: string) => {
    const cleanValue = value.replace(/\D/g, '');
    
    if (cleanValue.length >= 2) {
      const month = cleanValue.slice(0, 2);
      const year = cleanValue.slice(2);
      
      if (parseInt(month) > 12) {
        return '12' + (year ? '/' + year : '');
      }
      
      return month + (year ? '/' + year : '');
    }
    
    return cleanValue;
  };

  const isExpiryDateValid = (month: string, year: string) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const expYear = parseInt(year);
    const expMonth = parseInt(month);

    if (expYear < currentYear) {
      return false;
    }

    if (expYear === currentYear && expMonth < currentMonth) {
      return false;
    }

    return true;
  };

  return (
    <Card className="w-full md:w-1/2 shadow-lg border-2 border-muted bg-white/90">
      <CardContent className="flex flex-col h-full">
        <Tabs value={method} onValueChange={setMethod} className="">
          <TabsList className="grid grid-cols-2 gap-3 bg-transparent border-0">
            <TabsTrigger
              value="card"
              className="flex flex-col items-center justify-center py-4 px-2 bg-white border-2 border-muted rounded-lg shadow-sm data-[state=active]:border-black transition-all  w-full"
            >
              <FaRegCreditCard className="text-2xl mb-2" />
              <span className="text-lg font-medium">Card</span>
            </TabsTrigger>
            <TabsTrigger
              value="paypal"
              className="flex flex-col items-center justify-center py-4 px-2 bg-white border-2 border-muted rounded-lg shadow-sm data-[state=active]:border-black transition-all  w-full"
            >
              <FaPaypal className="text-3xl mb-2 text-blue-400" />
              <span className="text-lg font-medium">PayPal</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col flex-1"
          >
            <div className="space-y-4 pt-6 flex-1">
              <div className="p-4 rounded-lg border text-sm">
                <p>
                  Pay TRY 1,384.62 now, then TRY 1,384.62 monthly starting{" "}
                  {getNextMonthDate()}
                </p>
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Email address</FormLabel>
                    <Input
                      type="email"
                      placeholder="sam@example.com"
                      {...field}
                      className="text-base text-black"
                      maxLength={100}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              {method === "card" && (
                <>
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Card number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="4242 4242 4242 4242"
                              {...field}
                              onChange={(e) => {
                                const formatted = formatCardNumber(e.target.value);
                                field.onChange(formatted);
                              }}
                              maxLength={23}
                              className="text-base text-black pr-12"
                            />
                            <CardTypeDetector cardNumber={field.value} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Expiry date</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="MM/YYYY"
                              {...field}
                              maxLength={7}
                              minLength={7}
                              className="text-base text-black"
                              onChange={(e) => {
                                let value = formatExpiryDate(e.target.value);
                                if (value.length === 2 && !value.includes('/') && field.value.length !== 3) {
                                  value = value + '/';
                                }
                                field.onChange(value);
                              }}
                              onBlur={(e) => {
                                const [month, year] = e.target.value.split('/');
                                if (month && year && !isExpiryDateValid(month, year)) {
                                  form.setError('expiryDate', {
                                    message: 'Invalid expiry date'
                                  });
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel className="text-lg">Security code</FormLabel>
                          <Input
                            placeholder="123"
                            {...field}
                            onChange={(e) => {
                              const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                              field.onChange(onlyNumbers);
                            }}
                            maxLength={3}
                            minLength={3}
                            className="text-base text-black"
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Name on card</FormLabel>
                        <Input
                          placeholder="Michael McGovern"
                          {...field}
                          onChange={(e) => {
                            const onlyLetters = e.target.value.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, "");
                            field.onChange(onlyLetters);
                          }}
                          maxLength={50}
                          minLength={3}
                          className="text-base text-black"
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-lg">Country</FormLabel>
                      <CountryDropdown
                        placeholder="Select country"
                        defaultValue={field.value}
                        
                        onChange={(country) => {
                          field.onChange(country.alpha3);
                        }}
                        slim={false}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="sticky bg-white pt-4 mt-4">
              <span className="text-xs text-muted-foreground block mb-4">
                We collect this information to prevent fraud and secure your
                payment.
              </span>

              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Processing..." : "Pay"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
