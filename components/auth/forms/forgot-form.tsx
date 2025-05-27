"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { forgotPassword } from "@/app/api/services/auth.service";
import { Loader2 } from "lucide-react";
import { ForgotFormData, forgotSchema } from "@/schemas/password.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ForgotPass = () => {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotFormData) => {
    startTransition(async () => {
      try {
        await forgotPassword(data.email);
        toast.success("Recovery email sent successfully. Please check your inbox.");
      } catch (err: any) {
        toast.error(err.response?.data?.message || "Failed to send recovery email");
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          fullWidth 
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Recovery Email...
            </>
          ) : (
            "Send Recovery Email"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPass;
