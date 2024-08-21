import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-light-secondary/10 dark:border-dark-secondary/10 focus:border-light-accent focus:dark:border-dark-accent bg-light-primary dark:bg-dark-primary px-4 py-5 text-base placeholder:text-light-text/60 placeholder:dark:text-dark-text/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-light-accent focus-visible:dark:ring-dark-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
