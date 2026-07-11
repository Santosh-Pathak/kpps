'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowRight } from 'lucide-react'
import { facilities } from '@/lib/dummy-data'
import { SectionHeading } from '@/components/public/shared/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function FacilitiesPreview() {
   const reduced = useReducedMotion()
   const [emblaRef] = useEmblaCarousel({
      loop: true,
      align: 'start',
      slidesToScroll: 1,
   })

   return (
      <section className="section-pad bg-[var(--sp-bg)]">
         <div className="container-kpps">
            <SectionHeading
               eyebrow="Campus"
               title="World-Class Facilities"
               description="Everything a child needs to learn, grow, and thrive — all under one roof."
               className="mb-10"
            />

            {/* Embla carousel: 1.2 on mobile (peek), 2.2 on tablet, 3 on desktop */}
            <div className="overflow-hidden" ref={emblaRef} aria-label="Facilities carousel">
               <div className="flex gap-5">
                  {facilities.map((f, i) => (
                     <motion.div
                        key={f.name}
                        initial={reduced ? false : { opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className={cn(
                           'group flex-none overflow-hidden',
                           'min-w-[82vw] sm:min-w-[44vw] lg:min-w-[calc(33.333%-14px)]',
                           'rounded-lg border border-[var(--sp-border)] bg-[var(--sp-bg)]',
                           'shadow-[var(--shadow-card,0_2px_16px_rgba(15,81,50,0.06))]',
                           'transition-shadow duration-200',
                           'hover:shadow-[var(--shadow-elevated,0_8px_32px_rgba(15,81,50,0.12))]'
                        )}
                     >
                        {/* Image with frosted label */}
                        <div className="relative h-48 overflow-hidden">
                           <Image
                              src={f.image}
                              alt={f.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 44vw, 33vw"
                           />
                           {/* Frosted chip */}
                           <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 backdrop-blur-md dark:bg-[var(--sp-bg)]/80">
                              <f.icon className="h-4 w-4 text-[var(--sp-primary)]" aria-hidden="true" />
                              <span className="text-xs font-semibold text-[var(--sp-text)]">
                                 {f.name}
                              </span>
                           </div>
                        </div>
                        <div className="p-4">
                           <p className="text-sm leading-relaxed text-[var(--sp-text-muted)]">{f.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>

            <div className="mt-8 text-center">
               <Link
                  href="/facilities"
                  className={cn(
                     'inline-flex items-center gap-2 font-semibold',
                     'text-[var(--sp-primary)] transition-colors hover:text-[var(--sp-accent)]',
                     'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm'
                  )}
               >
                  Explore All Facilities <ArrowRight className="h-4 w-4" aria-hidden="true" />
               </Link>
            </div>
         </div>
      </section>
   )
}
