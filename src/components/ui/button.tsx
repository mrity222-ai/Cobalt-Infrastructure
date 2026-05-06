import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-[14px] font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 shadow-glow-orange uppercase tracking-wider",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/5 uppercase tracking-wider",
        secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-glow-blue uppercase tracking-wider",
        ghost: "hover:bg-secondary/5 text-muted-foreground hover:text-secondary",
        link: "text-secondary underline-offset-4 hover:underline font-bold",
        premium: "bg-gradient-to-r from-primary to-[#FF8533] text-white border-none shadow-xl hover:shadow-glow-orange uppercase tracking-wider",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-4",
        lg: "h-14 px-12 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }