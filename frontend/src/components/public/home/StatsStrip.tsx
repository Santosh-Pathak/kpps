'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/lib/dummy-data'
import { useCountUp } from '@/hooks/useCountUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
   icon: LucideIcon
   label: string
   value: number
   suffix?: string
   prefix?: string
   delay?: number
   className?: string
}

/**
 * StatCard — named export so inner pages (e.g. About) can reuse without
 * pulling in the strip's negative-margin layout.
 */
export function StatCard({
   icon: Icon,
   label,
   value,
   suffix = '',
   prefix = '',
   delay = 0,
   className,
}: StatCardProps) {
   const reduced = useReducedMotion()
   const ref = useRef<HTMLDivElement>(null)
   const inView = useInView(ref, { once: true, margin: '-60px' })
   const display = useCountUp({ end: value, suffix, prefix }, inView)

   return (
      <motion.div
         ref={ref}
         initial={reduced ? false : { opacity: 0, y: 16 }}
         animate={inView ? { opacity: 1, y: 0 } : {}}
         transition={reduced ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' }}
         whileHover={reduced ? undefined : { y: -3, transition: { duration: 0.15, ease: 'easeOut' } }}
         className={cn(
            'flex flex-col items-center rounded-lg bg-[var(--card)] p-6 text-center',
            'border border-[var(--sp-border)]',
            'shadow-[var(--shadow-card,0_2px_16px_rgba(15,81,50,0.06))]',
            'transition-shadow duration-200',
            'hover:shadow-[var(--shadow-elevated,0_8px_32px_rgba(15,81,50,0.12))]',
            className
         )}
      >
         <div
            className={cn(
               'mb-3 flex h-12 w-12 items-center justify-center rounded-md',
               'bg-[var(--sp-accent-soft)]'
            )}
         >
            <Icon
               className="h-6 w-6 text-[var(--sp-primary)]"
               aria-hidden="true"
            />
         </div>

         {/* font-display (Fraunces) for the number — the one moment of personality in a stat */}
         <p className="font-display text-3xl font-bold text-[var(--sp-primary)]">
            {display}
         </p>
         <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--sp-text-muted)]">
            {label}
         </p>
      </motion.div>
   )
}

export function StatsStrip() {
   return (
      <div className="relative z-20 -mt-8 px-4">
         <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
               {stats.map((stat, i) => (
                  <StatCard key={stat.label} {...stat} delay={i * 0.08} />
               ))}
            </div>
         </div>
      </div>
   )
}
