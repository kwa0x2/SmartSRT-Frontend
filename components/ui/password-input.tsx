"use client"

import * as React from "react"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"
import { Input, type InputProps } from "./input"

export interface PasswordInputProps extends Omit<InputProps, "type"> {
    showPasswordToggle?: boolean
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, showPasswordToggle = true, ...props }, ref) => {
        const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

        const togglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible)
        }

        return (
            <div className="relative">
                <Input
                    type={isPasswordVisible ? "text" : "password"}
                    className={cn("pr-10", className)}
                    ref={ref}
                    {...props}
                />
                {showPasswordToggle && (
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                        onClick={togglePasswordVisibility}
                        tabIndex={-1}
                        aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                    >
                        <Icon
                            icon={isPasswordVisible ? "heroicons:eye-slash" : "heroicons:eye"}
                            className="w-5 h-5"
                        />
                    </button>
                )}
            </div>
        )
    }
)

PasswordInput.displayName = "PasswordInput"

export { PasswordInput }