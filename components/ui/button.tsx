import * as React from "react"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset ring-offset-white transition-colors ",
  {
    variants: {
      variant: {
        default: "bg-light-accent dark:bg-dark-accent text-dark-text hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover transition-all",
        primary: 'bg-dark-primary dark:bg-light-primary text-dark-text dark:text-light-text',
        outline: 'border border-light-accent dark:border-dark-accent bg-transparent text-light-accent dark:text-dark-accent hover:bg-light-accent hover:dark:bg-dark-accent hover:text-light-primary',
        ghost: 'bg-transparent'
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
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
