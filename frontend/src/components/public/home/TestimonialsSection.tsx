'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/dummy-data'
import { SectionHeading } from '@/components/public/shared/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
   const reduced = useReducedMotion()
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
   const [activeIndex, setActiveIndex] = useState(0)

   const scrollTo = useCallback(
      (index: number) => emblaApi?.scrollTo(index),
      [emblaApi]
   )

   useEffect(() => {
      if (!emblaApi) return
      const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap())
      emblaApi.on('select', onSelect)

      // Autoplay — paused when user prefers reduced motion
      let timer: ReturnType<typeof setInterval> | null = null
      if (!reduced) {
         timer = setInterval(() => emblaApi.scrollNext(), 5000)
      }

      return () => {
         if (timer) clearInterval(timer)
         emblaApi.off('select', onSelect)
      }
   }, [emblaApi, reduced])

   return (
      <section
         className="section-pad bg-[var(--sp-bg-alt)]"
         aria-label="Parent and alumni testimonials"
      >
         <div className="container-kpps">
            <SectionHeading
               eyebrow="Testimonials"
               title="What Parents & Alumni Say"
            />

            <div className="relative mx-auto max-w-3xl">
               {/* Large decorative quote mark */}
               <Quote
                  className="absolute -top-6 -left-4 h-16 w-16 text-[var(--sp-accent-soft)]"
                  aria-hidden="true"
               />

               {/* Carousel */}
               <div
                  className="overflow-hidden"
                  ref={emblaRef}
                  aria-live={reduced ? 'polite' : 'off'}
               >
                  <div className="flex" role="list">
                     {testimonials.map((t, i) => (
                        <div
                           key={t.name}
                           className="min-w-full px-4 py-2 text-center"
                           role="listitem"
                           aria-label={`Testimonial from ${t.name}`}
                        >
                           <motion.div
                              initial={reduced ? false : { opacity: 0 }}
                              animate={{ opacity: activeIndex === i ? 1 : 0 }}
                              transition={reduced ? { duration: 0 } : { duration: 0.5 }}
                           >
                              <blockquote
                                 className={cn(
                                    'font-display mb-8 text-xl font-semibold italic leading-relaxed',
                                    'text-[var(--sp-text)]'
                                 )}
                              >
                                 &ldquo;{t.quote}&rdquo;
                              </blockquote>

                              <div className="flex items-center justify-center gap-3">
                                 <div
                                    className={cn(
                                       'relative h-12 w-12 overflow-hidden rounded-full',
                                       'border-2 border-[var(--sp-accent-soft)]'
                                    )}
                                 >
                                    <Image
                                       src={t.avatar}
                                       alt={`Photo of ${t.name}`}
                                       fill
                                       className="object-cover"
                                       sizes="48px"
                                    />
                                 </div>
                                 <div className="text-left">
                                    <p className="text-sm font-semibold text-[var(--sp-text)]">
                                       {t.name}
                                    </p>
                                    <p className="text-xs text-[var(--sp-text-muted)]">
                                       {t.role}
                                    </p>
                                 </div>
                              </div>
                           </motion.div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Dot nav — fully keyboard accessible */}
               <div
                  className="mt-8 flex justify-center gap-2"
                  role="tablist"
                  aria-label="Testimonial navigation"
               >
                  {testimonials.map((t, i) => (
                     <button
                        key={i}
                        role="tab"
                        aria-selected={activeIndex === i}
                        aria-label={`Show testimonial from ${t.name}`}
                        onClick={() => scrollTo(i)}
                        className={cn(
                           'h-2 rounded-full bg-[var(--sp-accent)] transition-all duration-300',
                           'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)] focus-visible:ring-offset-2',
                           activeIndex === i ? 'w-6 opacity-100' : 'w-2 opacity-35'
                        )}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
