"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { registerSchema, RegisterStepOneData } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

  const form = useForm<RegisterStepOneData>({
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

  const handleFormSubmit = async (data: RegisterStepOneData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="mt-2 2xl:mt-4 space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  disabled={isSubmitting}
                  size="lg"
                  autoComplete="name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  disabled={isSubmitting}
                  size="lg"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="••••••••"
                    disabled={isSubmitting}
                    size="lg"
                    autoComplete="new-password"
                    {...field}
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
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
    </Form>
  );
};

export default RegForm;
