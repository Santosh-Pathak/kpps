'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { Trophy, ArrowRight } from 'lucide-react'
import { achievementMarquee, featuredAchievements } from '@/lib/dummy-data'
import { SectionHeading } from '@/components/public/shared/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function AchievementsSection() {
   const reduced = useReducedMotion()

   return (
      <section className="section-pad bg-[var(--sp-bg)]">
         <div className="container-kpps">
            <SectionHeading
               eyebrow="Proud Moments"
               title="Our Achievements"
               description="KPPS students consistently excel in academics, sports, and co-curricular activities."
               className="mb-10"
            />

            {/* Achievement ticker — paused when reduced motion is on */}
            <div className="mb-12 overflow-hidden rounded-lg bg-[var(--sp-bg-alt)] py-3">
               <Marquee
                  pauseOnHover
                  play={!reduced}
                  speed={40}
                  gradient={false}
               >
                  {achievementMarquee.map((item) => (
                     <span
                        key={item}
                        className="mx-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--sp-primary)]"
                     >
                        <Trophy className="h-4 w-4 text-[var(--sp-accent)]" aria-hidden="true" />
                        {item}
                     </span>
                  ))}
               </Marquee>
            </div>

            {/* 3 featured achievement cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
               {featuredAchievements.map((a, i) => (
                  <motion.div
                     key={a.title}
                     initial={reduced ? false : { opacity: 0, y: 16 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     whileHover={reduced ? {} : { y: -4, transition: { duration: 0.15, ease: 'easeOut' } }}
                     className={cn(
                        'relative overflow-hidden rounded-lg border border-[var(--sp-border)] bg-[var(--sp-bg)] p-6 text-center',
                        'shadow-[var(--shadow-card,0_2px_16px_rgba(15,81,50,0.06))]',
                        'transition-shadow duration-200',
                        'hover:shadow-[var(--shadow-elevated,0_8px_32px_rgba(15,81,50,0.12))]'
                     )}
                  >
                     {/* Emerald ribbon accent */}
                     <div
                        className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[var(--sp-accent)] to-[var(--sp-accent-soft)]"
                        aria-hidden="true"
                     />

                     <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sp-accent-soft)]">
                        <a.icon className="h-7 w-7 text-[var(--sp-primary)]" aria-hidden="true" />
                     </div>

                     <span className="rounded-full bg-[var(--sp-bg-alt)] px-2 py-0.5 text-xs font-semibold text-[var(--sp-text-muted)]">
                        {a.year}
                     </span>

                     <h3 className="font-display mt-2 mb-1 text-sm font-semibold text-[var(--sp-text)]">
                        {a.title}
                     </h3>
                     <p className="text-xs leading-relaxed text-[var(--sp-text-muted)]">{a.detail}</p>
                  </motion.div>
               ))}
            </div>

            <div className="mt-8 text-center">
               {/* /achievements has no route — linking to /gallery which showcases school life */}
               <Link
                  href="/gallery"
                  className={cn(
                     'inline-flex items-center gap-2 font-semibold',
                     'text-[var(--sp-primary)] transition-colors hover:text-[var(--sp-accent)]',
                     'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm'
                  )}
               >
                  View School Gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
               </Link>
            </div>
         </div>
      </section>
   )
}
