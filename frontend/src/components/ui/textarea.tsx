import * as React from "react"

import { cn } from "@/lib/utils"

// Mirrors Input in all token usage so the two look identical in a form.
// field-sizing-content grows with content; min-h-[5rem] = 80px starting height.
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Layout
        "flex field-sizing-content min-h-[5rem] w-full rounded-md border px-3 py-2.5",
        "text-base md:text-sm leading-relaxed",
        // Colors
        "border-input bg-transparent text-foreground",
        "placeholder:text-muted-foreground",
        // Dark mode
        "dark:bg-input/30",
        // Shadow
        "shadow-xs",
        // Transitions
        "transition-[color,box-shadow,border-color] duration-150 ease-out",
        // Focus
        "outline-none focus-visible:border-ring focus-visible:ring-[var(--ring)]/50 focus-visible:ring-[3px]",
        // Validation
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
