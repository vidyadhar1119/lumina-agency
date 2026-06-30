import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2",
                    "disabled:pointer-events-none disabled:opacity-50",
                    variant === "primary" && [
                        "bg-violet-600 text-white",
                        "hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/25",
                        "active:scale-95",
                    ],
                    variant === "outline" && [
                        "border border-stone-300 dark:border-stone-700",
                        "text-stone-900 dark:text-stone-100",
                        "hover:bg-stone-100 dark:hover:bg-stone-800",
                        "active:scale-95",
                    ],
                    variant === "ghost" && [
                        "text-stone-700 dark:text-stone-300",
                        "hover:bg-stone-100 dark:hover:bg-stone-800",
                    ],
                    size === "sm" && "px-5 py-2.5 text-sm",
                    size === "md" && "px-7 py-3 text-base",
                    size === "lg" && "px-9 py-4 text-lg",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
