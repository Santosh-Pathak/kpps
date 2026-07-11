import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
   // Base: font-body for consistency, 200ms ease-out per brief, standard a11y focus ring
   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[var(--ring,#22C55E)]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive select-none",
   {
      variants: {
         variant: {
            // ── shadcn system variants (unchanged — admin panel uses these) ──────
            default:
               'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
            destructive:
               'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline:
               'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary:
               'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
            ghost:
               'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link:
               'text-primary underline-offset-4 hover:underline',

            // ── KPPS school brand variants (use these in all public components) ──
            // Primary: forest green fill — primary conversion actions (Apply, Enquire)
            primary:
               'bg-[var(--sp-primary,#0F5132)] text-white shadow-[var(--shadow-button,0_2px_12px_rgba(15,81,50,0.20))] hover:bg-[var(--sp-primary-dark,#0B3D26)] active:scale-[0.98]',
            // Accent: emerald fill — secondary CTAs, less urgent actions
            accent:
               'bg-[var(--sp-accent,#22C55E)] text-white shadow-[var(--shadow-button,0_2px_12px_rgba(15,81,50,0.20))] hover:bg-[#16a34a] active:scale-[0.98]',
            // Outline-primary: bordered green — tertiary or paired actions
            'outline-primary':
               'border-2 border-[var(--sp-primary,#0F5132)] text-[var(--sp-primary,#0F5132)] bg-transparent hover:bg-[var(--sp-accent-soft,#D1FAE5)] active:scale-[0.98]',
            // Ghost-primary: subtle green tint on hover — nav, inline text links
            'ghost-primary':
               'text-[var(--sp-primary,#0F5132)] bg-transparent hover:bg-[var(--sp-accent-soft,#D1FAE5)] active:scale-[0.98]',

            // Legacy aliases — kept so existing public components don't break
            // point at the proper token-driven variants above
            cta:
               'bg-[var(--sp-primary,#0F5132)] text-white font-semibold shadow-[var(--shadow-button,0_2px_12px_rgba(15,81,50,0.20))] hover:bg-[var(--sp-primary-dark,#0B3D26)] active:scale-[0.98]',
            gold:
               'bg-[var(--sp-accent,#22C55E)] text-white font-semibold shadow-[var(--shadow-button,0_2px_12px_rgba(15,81,50,0.20))] hover:bg-[#16a34a] active:scale-[0.98]',
         },
         size: {
            // default: 40px — comfortable for desktop + acceptable mobile touch
            default: 'h-10 px-5 py-2 has-[>svg]:px-3.5',
            // sm: 36px — dense admin UIs, inline table actions
            sm:      'h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            // lg: 48px — primary CTA buttons, hero CTAs, form submits
            lg:      'h-12 rounded-md px-8 text-base has-[>svg]:px-5',
            // icon sizes — ensure 40px / 36px / 44px touch targets
            icon:    'size-10',
            'icon-sm': 'size-9',
            'icon-lg': 'size-11',
         },
      },
      defaultVariants: {
         variant: 'default',
         size: 'default',
      },
   }
)

function Button({
   className,
   variant,
   size,
   asChild = false,
   ...props
}: React.ComponentProps<'button'> &
   VariantProps<typeof buttonVariants> & {
      asChild?: boolean
   }) {
   const Comp = asChild ? Slot : 'button'

   return (
      <Comp
         data-slot="button"
         className={cn(buttonVariants({ variant, size, className }))}
         {...props}
      />
   )
}

export { Button, buttonVariants }
