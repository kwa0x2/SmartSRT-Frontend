"use client";

import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";
import { useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useState, useEffect } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { registerSchema, RegisterStepTwoData } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSend } from "@/app/api/services/auth.service";
import { parsePhoneNumber, CountryCode } from "libphonenumber-js";
import { toast } from "sonner";
import { CheckPhoneExists } from "@/app/api/services/user.service";
import { ArrowLeft, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface OtpFormProps {
  onSubmit: (data: RegisterStepTwoData) => void;
  onBack?: () => void;
  isSubmitting?: boolean;
}

const OtpForm = ({ onSubmit, onBack, isSubmitting = false }: OtpFormProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(30);
  const [phoneError, setPhoneError] = useState<string>("");
  const [canResend, setCanResend] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterStepTwoData>({
    resolver: zodResolver(
        registerSchema.pick({
          phone_number: true,
          otp: true,
        })
    ),
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isCodeSent && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setCanResend(true);
      setTimer(30);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCodeSent, timer]);

  useEffect(() => {
    form.setValue("otp", otpValue);
    form.setValue("phone_number", phoneNumber);
  }, [otpValue, phoneNumber, form]);

  const validatePhoneNumber = (phone: string, country?: string): boolean => {
    try {
      if (!phone) {
        setPhoneError("Phone number is required");
        return false;
      }

      const parsedNumber = parsePhoneNumber(phone, country as CountryCode);
      if (!parsedNumber?.isValid()) {
        setPhoneError("Please enter a valid phone number");
        return false;
      }

      setPhoneError("");
      return true;
    } catch {
      setPhoneError("Please enter a valid phone number");
      return false;
    }
  };

  const handleSendCode = async () => {
    if (!validatePhoneNumber(phoneNumber)) return;

    setIsLoading(true);
    try {
      const res = await CheckPhoneExists(phoneNumber);
      if (res.status === 200) {
        await otpSend({ phone_number: phoneNumber });
        setIsCodeSent(true);
        setCanResend(false);
        setTimer(30);
        toast.success("Verification code sent successfully");
      }
    } catch (error: any) {
      if (error.response?.status === 302) {
        toast.error("This phone number is already registered");
      } else {
        toast.error("Failed to send verification code. Please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Form {...form}>
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-md mx-auto"
        >
          <FormField
              control={form.control}
              name="phone_number"
              render={() => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="flex space-x-2">
                        <PhoneInput
                            className="flex-1"
                            defaultCountry="tr"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            disabled={isLoading || isSubmitting}
                        />
                        <Button
                            type="button"
                            onClick={handleSendCode}
                            disabled={!canResend || !phoneNumber || isLoading || isSubmitting}
                            className={`min-w-[120px] ${(!canResend || isLoading) ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          {isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                          ) : !canResend ? (
                              `Resend (${timer}s)`
                          ) : (
                              "Send Code"
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    {phoneError && <FormMessage>{phoneError}</FormMessage>}
                  </FormItem>
              )}
          />

          <FormField
              control={form.control}
              name="otp"
              render={() => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <div className="flex justify-center">
                        <InputOTP
                            value={otpValue}
                            onChange={setOtpValue}
                            maxLength={4}
                            pattern={REGEXP_ONLY_DIGITS}
                            disabled={!isCodeSent || isSubmitting}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                          </InputOTPGroup>
                          <InputOTPSeparator>-</InputOTPSeparator>
                          <InputOTPGroup>
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
          />

          <div className="flex justify-between items-center gap-4">
            {onBack && (
                <Button
                    type="button"
                    onClick={onBack}
                    variant="outline"
                    className="flex items-center gap-2"
                    disabled={isSubmitting}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
            )}

            <LoadingButton
                type="submit"
                className={`flex-1 ${!onBack ? "w-full" : ""}`}
                loading={isSubmitting}
                loadingText="Creating Account..."
            >
              Create Account
            </LoadingButton>
          </div>
        </form>
      </Form>
  );
};

export default OtpForm;
