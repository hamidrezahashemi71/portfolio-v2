import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] rounded-md border border-light-secondary/10 dark:border-dark-secondary/10 focus:border-light-accent focus:dark:border-dark-accent font-light bg-light-primary dark:bg-dark-primary px-4 py-5 text-base placeholder:text-light-text/60 placeholder:dark:text-dark-text/60 outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
