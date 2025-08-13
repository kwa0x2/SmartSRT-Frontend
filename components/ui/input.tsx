import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { InputColor } from "@/types";

export const inputVariants = cva(
    " w-full bg-white rounded py-2 px-3 h-9 text-sm font-normal outline-none focus:outline-none focus:bg-white file:border-0 file:bg-transparent file:text-sm file:font-medium  disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] [&:-webkit-autofill]:!bg-white [&:-webkit-autofill:hover]:!bg-white [&:-webkit-autofill:focus]:!bg-white [&:-webkit-autofill:active]:!bg-white",
    {
        variants: {
            color: {
                default:
                    " text-default-500  placeholder:text-accent-foreground/50",
                primary:
                    "border-primary/50 text-primary focus:border-primary disabled:placeholder:text-primary  placeholder:text-primary/70",
                secondary:
                    "border-default-300 text-default-700    disabled:placeholder:text-secondary  placeholder:text-default-600",
                info: "border-info/50 text-info  disabled:placeholder:text-info  placeholder:text-info/70",
                warning:
                    "border-warning/50 text-warning    disabled:placeholder:text-info  placeholder:text-warning/70",
                success:
                    "border-success/50 text-success    disabled:placeholder:text-info  placeholder:text-success/70",
                destructive:
                    "border-destructive/50 text-destructive   disabled:placeholder:text-destructive  placeholder:text-destructive/70",
            },

            size: {
                sm: "h-8 text-xs read-only:leading-8",
                default: "h-9 text-xs read-only:leading-none",
                md: "h-10 text-sm read-only:leading-10",
                lg: "h-12  text-sm read-only:leading-[48px]",
            },
        },

        defaultVariants: {
            color: "default",
            size: "default",
        },
    }
);

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {
    color?: InputColor
    size?: any
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            size,
            color,
            ...props
        },
        ref
    ) =>
        <div className="flex-1 w-full">
            <input
                type={type}
                className={cn(
                    inputVariants({ color, size }),
                    className, "text-black text-sm"
                )}
                ref={ref}
                {...props}
            />
        </div>
);
Input.displayName = "Input";

export { Input };
