"use client";

import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { LoadingButton } from "@/components/ui/loading-button";
import { registerSchema, RegisterStepOneData } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
    isSubmitting?: boolean;
}

const RegForm = ({ onSubmit, initialData, isSubmitting = false }: RegFormProps) => {
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

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 space-y-4">
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
                                <PasswordInput
                                    placeholder="••••••••"
                                    disabled={isSubmitting}
                                    size="lg"
                                    autoComplete="new-password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    loadingText="Creating account..."
                    className="mt-6 w-full"
                >
                    Continue
                </LoadingButton>
            </form>
        </Form>
    );
};

export default RegForm;
