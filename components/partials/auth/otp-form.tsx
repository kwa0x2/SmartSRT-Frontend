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
import {
  registerSchema,
  RegisterStepTwoData,
} from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendOtp } from "@/app/api/services/sinch.service";
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js';
import { toast } from "sonner";

interface OtpFormProps {
  onSubmit: (data: RegisterStepTwoData) => void;
}

const OtpForm = ({ onSubmit }: OtpFormProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(30);
  const [phoneError, setPhoneError] = useState<string>("");
  const [canResend, setCanResend] = useState(true);

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<RegisterStepTwoData>({
    resolver: zodResolver(
      registerSchema.pick({
        phone_number: true,
        otp: true,
      })
    )
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

  const validatePhoneNumber = (phone: string, country?: string): boolean => {
    try {
      if (!phone) {
        setPhoneError("Telefon numarası gereklidir");
        return false;
      }

      const parsedNumber = parsePhoneNumber(phone, country as CountryCode);
      
      if (!parsedNumber || !parsedNumber.isValid()) {
        setPhoneError("Geçerli bir telefon numarası giriniz");
        return false;
      }

      const nationalNumber = parsedNumber.nationalNumber;
      if (!nationalNumber || nationalNumber.toString().length < 5) {
        setPhoneError("Telefon numarasını tam giriniz");
        return false;
      }

      setPhoneError("");
      return true;
    } catch (error) {
      setPhoneError("Geçerli bir telefon numarası giriniz");
      return false;
    }
  };

  useEffect(() => {
    setValue('otp', otpValue);
  }, [otpValue, setValue]);

  useEffect(() => {
    setValue('phone_number', phoneNumber);
  }, [phoneNumber, setValue]);

  const handleSendCode = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      return;
    }
    
    try {
      await sendOtp({ phone_number: phoneNumber });
      setIsCodeSent(true);
      setCanResend(false);
      setTimer(30);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full max-w-md mx-auto"
    >
      {/* Phone Input */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <div className="flex space-x-2">
          <PhoneInput
            className="flex-1"
            defaultCountry="tr"
            value={phoneNumber}
            onChange={(phone) => {
              setPhoneNumber(phone);
            }}
          />
          <Button
            type="button"
            onClick={handleSendCode}
            disabled={!canResend || !phoneNumber}
          >
            {!canResend ? `Resend (${timer}s)` : "Send Code"}
          </Button>
        </div>
        {phoneError && <p className="text-destructive text-sm">{phoneError}</p>}
      </div>

      {/* OTP Input */}
      <div className="space-y-4 flex flex-col items-center">
        <Label htmlFor="otp">Verification Code</Label>
        <div className="flex justify-center w-full">
          <InputOTP
            value={otpValue}
            onChange={(otp) => {
              setOtpValue(otp);
            }}
            maxLength={4}
            pattern={REGEXP_ONLY_DIGITS}
            disabled={!isCodeSent}
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
          <p className="text-destructive text-sm">{errors.otp.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        fullWidth
        disabled={isSubmitting || !isCodeSent || otpValue.length !== 4}
      >
        Create Account
      </Button>
    </form>
  );
};

export default OtpForm;
