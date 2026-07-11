import * as React from "react"

import { cn } from "@/lib/utils"

// h-10 (40px) — meets WCAG 2.5.5 recommended 44px target closely enough for
// desktop-first admin; public forms should use size="lg" wrapper or explicit h-11.
// rounded-md resolves to 10px inside .school-public via --radius-md override.
// Focus ring references --ring, which is #22C55E (emerald) in the public scope.
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Layout & sizing
        "h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base md:text-sm",
        // Colors — all token-driven, auto-swaps between admin (blue) and public (green)
        "border-input bg-transparent text-foreground",
        "placeholder:text-muted-foreground",
        "selection:bg-primary selection:text-primary-foreground",
        // Dark mode input tint
        "dark:bg-input/30",
        // Shadow — very subtle inset lift
        "shadow-xs",
        // Transitions
        "transition-[color,box-shadow,border-color] duration-150 ease-out",
        // Focus: accent-coloured ring (emerald in public, sky-blue in admin)
        "outline-none focus-visible:border-ring focus-visible:ring-[var(--ring)]/50 focus-visible:ring-[3px]",
        // Validation states
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        // Disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // File input styling
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Input }
