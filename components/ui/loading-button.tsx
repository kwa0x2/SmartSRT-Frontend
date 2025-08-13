"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "./button"

export interface LoadingButtonProps extends ButtonProps {
    loading?: boolean
    loadingText?: string
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
    ({ className, children, loading = false, loadingText, disabled, ...props }, ref) => {
        return (
            <Button
                className={className}
                disabled={loading || disabled}
                ref={ref}
                {...props}
            >
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {loadingText || children}
                    </>
                ) : (
                    children
                )}
            </Button>
        )
    }
)

LoadingButton.displayName = "LoadingButton"

export { LoadingButton }