"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerSchema, RegisterStepOneData } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface RegFormProps {
  onSubmit: (data: RegisterStepOneData) => void;
  initialData?: {
    name: string;
    email: string;
    password: string;
  };
}

const RegForm = ({ onSubmit, initialData }: RegFormProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterStepOneData>({
    resolver: zodResolver(registerSchema.pick({ 
      name: true, 
      email: true, 
      password: true 
    })),
    defaultValues: initialData
  });


    return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2 2xl:mt-4 space-y-4">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name")}
          size="lg"
        />
        {errors.name && (
          <p className="text-destructive text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@email.com"
          {...register("email")}
          size="lg"
        />
        {errors.email && (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="••••••••"
            {...register("password")}
            size="lg"
          />
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-4"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              icon={passwordVisible ? "heroicons:eye-slash" : "heroicons:eye"}
              className="w-5 h-5 text-default-400"
            />
          </button>
        </div>
        {errors.password && (
          <p className="text-destructive text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        fullWidth 
        disabled={isSubmitting}
        className="mt-6"
      >
        Continue
      </Button>
    </form>
  );
};

export default RegForm;
