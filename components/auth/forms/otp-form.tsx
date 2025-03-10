"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
import { cn } from "@/lib/utils";

interface OtpFormProps {
  onSubmit: (data: RegisterStepTwoData) => void;
  onBack?: () => void;
}

const OtpForm = ({ onSubmit, onBack }: OtpFormProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(60);
  const [phoneError, setPhoneError] = useState<string>("");
  const [canResend, setCanResend] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<RegisterStepTwoData>({
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
      setTimer(60);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCodeSent, timer]);

  useEffect(() => {
    setValue("otp", otpValue);
    setValue("phone_number", phoneNumber);
  }, [otpValue, phoneNumber, setValue]);

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
    } catch (error) {
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
        setTimer(60);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full max-w-md mx-auto"
    >
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
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
            className={cn("min-w-[120px]", {
              "opacity-50 cursor-not-allowed": !canResend || isLoading
            })}
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
        {phoneError && <p className="text-destructive text-sm">{phoneError}</p>}
      </div>

      <div className="space-y-4">
        <Label htmlFor="otp">Verification Code</Label>
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
        {errors.otp && (
          <p className="text-destructive text-sm text-center">{errors.otp.message}</p>
        )}
      </div>

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

        <Button
          type="submit"
          className={cn("flex-1", { "w-full": !onBack })}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </div>
    </form>
  );
};

export default OtpForm;
