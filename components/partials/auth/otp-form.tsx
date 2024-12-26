"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useState } from "react";

type OTPInputs = {
  phone: string;
  otp: string;
};

const OtpForm = ({
  onOtpSubmit,
}: {
  onOtpSubmit: (data: OTPInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPInputs>();
  const [phone, setPhone] = useState("");

  const onSubmit: SubmitHandler<OTPInputs> = (data) => {
    console.log("OTP Form Data:", data);
    onOtpSubmit(data); // Form verilerini üst bileşene ilet
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 2xl:mt-4 space-y-6 w-full max-w-md mx-auto"
    >
      {/* Phone Number Input with Send Code Button */}
      <div className="flex flex-col items-center space-y-2">
        <Label htmlFor="phone" className="self-start text-sm font-medium">
          Phone Number
        </Label>
        <div className="flex w-full items-center space-x-2">
          <PhoneInput
            className="flex-1"
            defaultCountry="tr"
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
          <Button type="button" className="h-10 px-4 text-sm font-medium">
            Send Code
          </Button>
        </div>

        {errors.phone && (
          <p className="text-red-500 self-start text-xs">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* OTP Input Fields */}
      <div className="space-y-4 flex flex-col items-center">
        <Label htmlFor="otp" className="text-sm font-medium">
          Please enter the 6-digit code
        </Label>
        <InputOTP maxLength={6} className="flex justify-center space-x-4">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator className="text-xl font-bold">-</InputOTPSeparator>
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        {errors.otp && (
          <p className="text-red-500 text-xs">{errors.otp.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        fullWidth
        className="max-w-md h-10 text-sm font-medium"
      >
        Create an account
      </Button>
    </form>
  );
};

export default OtpForm;
