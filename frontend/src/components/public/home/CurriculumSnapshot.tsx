'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { curriculumStages } from '@/lib/dummy-data'
import { SectionHeading } from '@/components/public/shared/SectionHeading'
import { WaveDivider } from '@/components/public/shared/WaveDivider'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function CurriculumSnapshot() {
   const reduced = useReducedMotion()

   return (
      <section className="relative pb-0 pt-16 bg-[var(--sp-bg-alt)] md:pt-24">
         <div className="container-kpps">
            <SectionHeading
               eyebrow="Curriculum"
               title="Academics at a Glance"
               description="From Nursery to Class XII — a seamless journey of learning and growth."
               className="mb-12"
            />

            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
               {curriculumStages.map((stage, i) => (
                  <motion.div
                     key={stage.range}
                     initial={reduced ? false : { opacity: 0, y: 16 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.45, ease: 'easeOut' }}
                     whileHover={reduced ? {} : { y: -4, transition: { duration: 0.15, ease: 'easeOut' } }}
                     className={cn(
                        'group flex min-w-[220px] snap-start flex-col',
                        'rounded-lg border border-[var(--sp-border)] bg-[var(--sp-bg)] p-6',
                        'transition-shadow duration-200',
                        'shadow-[var(--shadow-card,0_2px_16px_rgba(15,81,50,0.06))]',
                        'hover:shadow-[var(--shadow-elevated,0_8px_32px_rgba(15,81,50,0.12))]',
                        'lg:min-w-0'
                     )}
                  >
                     <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-[var(--sp-accent-soft)] transition-colors group-hover:bg-[var(--sp-accent)]">
                        <stage.icon className="h-5 w-5 text-[var(--sp-primary)] transition-colors group-hover:text-white" aria-hidden="true" />
                     </div>
                     <p className="font-display mb-0.5 text-base font-bold text-[var(--sp-text)]">
                        {stage.range}
                     </p>
                     <p className="mb-2 text-xs font-semibold text-[var(--sp-accent)]">{stage.grades}</p>
                     <p className="flex-1 text-xs leading-relaxed text-[var(--sp-text-muted)]">
                        {stage.description}
                     </p>
                     <Link
                        href="/academics"
                        className={cn(
                           'mt-4 inline-flex items-center gap-1 text-xs font-semibold',
                           'text-[var(--sp-primary)] transition-all group-hover:gap-2',
                           'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm'
                        )}
                     >
                        Explore <ArrowRight className="h-3 w-3" aria-hidden="true" />
                     </Link>
                  </motion.div>
               ))}
            </div>
         </div>

         <WaveDivider
            className="mt-16"
            fromColor="fill-[var(--sp-bg-alt)]"
            toColor="fill-[var(--sp-bg)]"
         />
      </section>
   )
}
