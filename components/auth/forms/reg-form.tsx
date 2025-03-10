"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerSchema, RegisterStepOneData } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface RegFormProps {
  onSubmit: (data: RegisterStepOneData) => void;
  initialData?: {
    name: string;
    email: string;
    password: string;
  };
}

const RegForm = ({ onSubmit, initialData }: RegFormProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterStepOneData>({
    resolver: zodResolver(
      registerSchema.pick({
        name: true,
        email: true,
        password: true,
      })
    ),
    mode: "onChange",
    defaultValues: initialData,
  });

  const watchFields = watch(["name", "email", "password"]);

  const handleFormSubmit = async (data: RegisterStepOneData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-2 2xl:mt-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          disabled={isSubmitting}
          {...register("name")}
          size="lg"
          autoComplete="name"
          className={cn("text-black", {
            "border-destructive": errors.email,
            "border-success": !errors.email && watchFields[0],
          })}
        />
        {errors.name && (
          <p className="text-destructive text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@email.com"
          disabled={isSubmitting}
          {...register("email")}
          size="lg"
          autoComplete="email"
          className={cn("text-black", {
            "border-destructive": errors.email,
            "border-success": !errors.email && watchFields[0],
          })}
        />
        {errors.email && (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="••••••••"
            disabled={isSubmitting}
            {...register("password")}
            size="lg"
            autoComplete="new-password"
            className={cn("text-black", {
              "border-destructive": errors.email,
              "border-success": !errors.email && watchFields[0],
            })}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setPasswordVisible(!passwordVisible)}
            tabIndex={-1}
          >
            <Icon
              icon={passwordVisible ? "heroicons:eye-slash" : "heroicons:eye"}
              className="w-5 h-5"
            />
          </button>
        </div>
        {errors.password && (
          <p className="text-destructive text-sm">{errors.password.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        fullWidth 
        disabled={isSubmitting}
        className="mt-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Account...
          </>
        ) : (
          "Continue"
        )}
      </Button>
    </form>
  );
};

export default RegForm;
