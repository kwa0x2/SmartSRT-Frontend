"use client";

import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { LoadingButton } from "@/components/ui/loading-button";
import { getRegisterSchema, RegisterStepOneData } from "@/schemas/register.schema";
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
import { useTranslations } from "next-intl";

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
    const t = useTranslations('Auth.register.form');
    const tValidation = useTranslations('Auth.register.validation');

    const form = useForm<RegisterStepOneData>({
        resolver: zodResolver(
            getRegisterSchema(tValidation).pick({
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
                            <FormLabel>{t('fullName')}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t('fullNamePlaceholder')}
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
                            <FormLabel>{t('email')}</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder={t('emailPlaceholder')}
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
                            <FormLabel>{t('password')}</FormLabel>
                            <FormControl>
                                <PasswordInput
                                    placeholder={t('passwordPlaceholder')}
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
                    loadingText={t('creatingAccount')}
                    className="mt-6 w-full"
                >
                    {t('continueButton')}
                </LoadingButton>
            </form>
        </Form>
    );
};

export default RegForm;
