"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type RegInputs = {
  name: string;
  email: string;
  password: string;
};

const RegForm = ({ onRegisterSubmit }: { onRegisterSubmit: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegInputs>();
  const [passwordType, setPasswordType] = React.useState("password");

  const onSubmit: SubmitHandler<RegInputs> = (data) => {
    console.log("Registration Data:", data);
    onRegisterSubmit(); // Kayıt işlemi tamamlandıktan sonra OTP formunu göster
  };

  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2 2xl:mt-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name", { required: "Name is required" })}
          size="lg"
        />
        {errors.name && (
          <div className=" text-destructive mt-2 text-sm">
            {errors.name.message}
          </div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="autosrt@nettasec.com"
          {...register("email", { required: "Email is required" })}
          size="lg"
          className={cn("", {
            "border-destructive ": errors.email,
          })}
        />
        {errors.email && (
          <div className=" text-destructive mt-2 text-sm">
            {errors.email.message}
          </div>
        )}{" "}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={passwordType}
            placeholder="autosrt"
            {...register("password", { required: "Password is required" })}
            size="lg"
          />
          {errors.password && (
            <div className=" text-destructive mt-2 text-sm">
              {errors.password.message}
            </div>
          )}

          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={togglePasswordType}
          >
            {passwordType === "password" ? (
              <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="w-5 h-5 text-default-400"
              />
            )}
          </div>
        </div>
      </div>

      <Button type="submit" fullWidth>
        Continue
      </Button>
    </form>
  );
};

export default RegForm;
