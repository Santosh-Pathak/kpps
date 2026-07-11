'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import type { LucideIcon } from 'lucide-react'

interface HoverCardProps {
   icon: LucideIcon
   title: string
   description: string
   delay?: number
   className?: string
}

export function HoverCard({ icon: Icon, title, description, delay = 0, className }: HoverCardProps) {
   const reduced = useReducedMotion()

   return (
      <motion.div
         initial={reduced ? false : { opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: '-40px' }}
         transition={reduced ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' }}
         whileHover={reduced ? undefined : { y: -4, transition: { duration: 0.15, ease: 'easeOut' } }}
         className={cn(
            'group flex gap-4 rounded-lg border bg-[var(--card)] p-6',
            'border-[var(--sp-border)]',
            'shadow-[var(--shadow-card,0_2px_16px_rgba(15,81,50,0.06))]',
            'transition-shadow duration-200',
            'hover:shadow-[var(--shadow-elevated,0_8px_32px_rgba(15,81,50,0.12))]',
            className
         )}
      >
         {/* Icon container — fills on hover */}
         <div
            className={cn(
               'flex h-12 w-12 shrink-0 items-center justify-center rounded-md',
               'bg-[var(--sp-accent-soft)]',
               'transition-colors duration-200',
               'group-hover:bg-[var(--sp-accent)]'
            )}
         >
            <Icon
               className={cn(
                  'h-6 w-6',
                  'text-[var(--sp-primary)]',
                  'transition-colors duration-200',
                  'group-hover:text-white'
               )}
               aria-hidden="true"
            />
         </div>

         <div className="min-w-0">
            <h3 className="font-display mb-1 text-base font-semibold text-[var(--sp-text)]">
               {title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--sp-text-muted)]">
               {description}
            </p>
         </div>
      </motion.div>
   )
}
