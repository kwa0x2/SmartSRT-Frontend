import { useForm, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PaymentFormData, paymentSchema } from "@/schemas/payment.schema";
import { FaRegCreditCard } from "react-icons/fa";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FaPaypal } from "react-icons/fa";

export function PaymentForm() {
  const [method, setMethod] = useState("card");
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      country: "Türkiye",
      email: "",
      cardNumber: "",
      expDate: "",
      cvc: "",
      name: "",
      zip: "",
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

  const formatExpDate = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .substring(0, 5);
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
              <FaRegCreditCard className="text-3xl mb-2" />
              <span className="text-lg font-medium">Card</span>
            </TabsTrigger>
            <TabsTrigger
              value="paypal"
              className="flex flex-col items-center justify-center py-4 px-2 bg-white border-2 border-muted rounded-lg shadow-sm data-[state=active]:border-black transition-all  w-full"
            >
              {/* <svg width="28" height="28" viewBox="0 0 24 24" className="mb-2">
                <g>
                  <path
                    fill="#003087"
                    d="M21.8 8.2c-.2-1.6-1.7-2.7-3.7-2.7h-7.7c-.4 0-.7.3-.8.7l-2.2 13.7c0 .2.1.4.2.5.1.1.3.2.5.2h2.7l.5-3.2v.1c.1-.4.4-.7.8-.7h1.7c3.2 0 5.7-1.3 6.4-5.1.2-1.1.2-2.1.1-2.8z"
                  />
                  <path
                    fill="#3086C8"
                    d="M19.7 8.2c-.2-1.6-1.7-2.7-3.7-2.7h-7.7c-.4 0-.7.3-.8.7l-2.2 13.7c0 .2.1.4.2.5.1.1.3.2.5.2h2.7l.5-3.2v.1c.1-.4.4-.7.8-.7h1.7c3.2 0 5.7-1.3 6.4-5.1.2-1.1.2-2.1.1-2.8z"
                  />
                  <path
                    fill="#009CDE"
                    d="M17.6 8.2c-.2-1.6-1.7-2.7-3.7-2.7h-7.7c-.4 0-.7.3-.8.7l-2.2 13.7c0 .2.1.4.2.5.1.1.3.2.5.2h2.7l.5-3.2v.1c.1-.4.4-.7.8-.7h1.7c3.2 0 5.7-1.3 6.4-5.1.2-1.1.2-2.1.1-2.8z"
                  />
                </g>
              </svg> */}
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
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<PaymentFormData, "email">;
                }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Email address</FormLabel>
                    <Input
                      type="email"
                      placeholder="sam@example.com"
                      {...field}
                      className="text-base text-black"
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
                    render={({
                      field,
                    }: {
                      field: ControllerRenderProps<
                        PaymentFormData,
                        "cardNumber"
                      >;
                    }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Card number</FormLabel>
                        <Input
                          placeholder="4242 4242 4242 4242"
                          {...field}
                          onChange={(e) => {
                            const formatted = formatCardNumber(e.target.value);
                            field.onChange(formatted);
                          }}
                          maxLength={23}
                          className="text-base text-black"
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="expDate"
                      render={({
                        field,
                      }: {
                        field: ControllerRenderProps<
                          PaymentFormData,
                          "expDate"
                        >;
                      }) => (
                        <FormItem className="w-1/2">
                          <FormLabel className="text-lg">
                            Expiration date
                          </FormLabel>
                          <Input
                            placeholder="10/28"
                            {...field}
                            onChange={(e) => {
                              const formatted = formatExpDate(e.target.value);
                              field.onChange(formatted);
                            }}
                            className="text-base text-black"
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cvc"
                      render={({
                        field,
                      }: {
                        field: ControllerRenderProps<PaymentFormData, "cvc">;
                      }) => (
                        <FormItem className="w-1/2">
                          <FormLabel className="text-lg">
                            Security code
                          </FormLabel>
                          <Input
                            placeholder="100"
                            {...field}
                            onChange={(e) => {
                              const onlyNumbers = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              field.onChange(onlyNumbers);
                            }}
                            maxLength={4}
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
                    render={({
                      field,
                    }: {
                      field: ControllerRenderProps<PaymentFormData, "name">;
                    }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Name on card</FormLabel>
                        <Input
                          placeholder="Michael McGovern"
                          {...field}
                          onChange={(e) => {
                            const onlyLetters = e.target.value.replace(
                              /[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g,
                              ""
                            );
                            field.onChange(onlyLetters);
                          }}
                          maxLength={50}
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
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<PaymentFormData, "country">;
                  }) => (
                    <FormItem className="w-1/2">
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

                <FormField
                  control={form.control}
                  name="zip"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<PaymentFormData, "zip">;
                  }) => (
                    <FormItem className="w-1/2">
                      <FormLabel className="text-lg">ZIP Code</FormLabel>
                      <Input
                        placeholder="10021"
                        {...field}
                        onChange={(e) => {
                          const upperCase = e.target.value.toUpperCase();
                          field.onChange(upperCase);
                        }}
                        maxLength={10}
                        className="text-base text-black"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="sticky  bg-white pt-4  mt-4">
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
