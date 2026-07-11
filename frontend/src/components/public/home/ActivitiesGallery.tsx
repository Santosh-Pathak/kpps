'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { activities } from '@/lib/dummy-data'
import { SectionHeading } from '@/components/public/shared/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function ActivitiesGallery() {
   const reduced = useReducedMotion()

   return (
      <section className="section-pad bg-[var(--sp-bg-alt)]">
         <div className="container-kpps">
            <SectionHeading
               eyebrow="Beyond Academics"
               title="Activities & Events"
               description="From sports days to science fairs, cultural fests to nature walks — life at KPPS is never dull."
               className="mb-10"
            />

            {/* CSS columns masonry — 2 on mobile, 3 on md+ */}
            <div className="columns-2 gap-4 md:columns-3">
               {activities.map((activity, i) => (
                  <motion.figure
                     key={activity.title}
                     initial={reduced ? false : { opacity: 0, y: 16 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.45, ease: 'easeOut' }}
                     className="group mb-4 break-inside-avoid overflow-hidden rounded-lg"
                  >
                     <div
                        className={cn(
                           'relative w-full overflow-hidden',
                           activity.tall ? 'h-72' : 'h-44'
                        )}
                     >
                        <Image
                           src={activity.image}
                           alt={activity.title}
                           fill
                           className={cn(
                              'object-cover',
                              !reduced && 'transition-transform duration-500 group-hover:scale-105'
                           )}
                           sizes="(max-width: 768px) 50vw, 33vw"
                        />

                        {/* Caption overlay — always visible at bottom (not hover-only).
                            Hover-only captions are invisible on touch and inaccessible to
                            keyboard/screen-reader users. The gradient is always present;
                            the text is permanently legible. */}
                        <figcaption className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-[var(--sp-primary-dark)]/80 via-[var(--sp-primary-dark)]/20 to-transparent p-3">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--sp-accent)]">
                              {activity.category}
                           </span>
                           <p className="mt-0.5 text-xs font-semibold leading-tight text-white">
                              {activity.title}
                           </p>
                        </figcaption>
                     </div>
                  </motion.figure>
               ))}
            </div>

            <div className="mt-8 text-center">
               <Link
                  href="/gallery"
                  className={cn(
                     'inline-flex items-center gap-2 font-semibold',
                     'text-[var(--sp-primary)] transition-colors hover:text-[var(--sp-accent)]',
                     'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm'
                  )}
               >
                  View Full Gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
               </Link>
            </div>
         </div>
      </section>
   )
}
