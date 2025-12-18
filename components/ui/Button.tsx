import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:pointer-events-none rounded-full";

    const variants = {
      primary:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-gray-900 hover:from-blue-700 hover:to-blue-600 focus:ring-blue-500 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-105",
      secondary:
        "bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-300 border-2 border-gray-200 hover:border-blue-500 shadow-md hover:shadow-lg",
      outline:
        "border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 focus:ring-blue-500",
    };

    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

