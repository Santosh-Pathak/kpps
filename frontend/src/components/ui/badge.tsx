import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  // rounded-full = pill — brief specifies badges/pills always use pill radius
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] duration-150 overflow-hidden",
  {
    variants: {
      variant: {
        // ── shadcn system variants (unchanged — admin uses these) ────────────
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",

        // ── KPPS school brand variants ───────────────────────────────────────
        // Soft: accent-soft background + primary text — default for public badges/tags
        soft:
          "border-transparent bg-[var(--sp-accent-soft,#D1FAE5)] text-[var(--sp-primary,#0F5132)] [a&]:hover:bg-[var(--sp-accent-soft,#D1FAE5)]/80",
        // Solid: emerald fill — status "Open", "Confirmed", active states
        solid:
          "border-transparent bg-[var(--sp-accent,#22C55E)] text-white [a&]:hover:bg-[#16a34a]",
        // Muted: very subtle — "New", "Updated" labels, sidebar counts
        muted:
          "border-[var(--sp-border,#E3F0E9)] bg-[var(--sp-bg-alt,#F6FBF8)] text-[var(--sp-text-muted,#4B6358)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
