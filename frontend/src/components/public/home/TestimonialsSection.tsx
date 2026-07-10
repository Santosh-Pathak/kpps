'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/dummy-data'

export function TestimonialsSection() {
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
      const timer = setInterval(() => emblaApi.scrollNext(), 5000)
      return () => {
         clearInterval(timer)
         emblaApi.off('select', onSelect)
      }
   }, [emblaApi])

   return (
      <section className="section-pad bg-[#F6FBF8] dark:bg-[#0F2A1E]">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="mb-12 text-center"
            >
               <p className="kpps-eyebrow mb-3">Testimonials</p>
               <h2 className="kpps-h2 font-display text-[#0B1F17] dark:text-[#F0FBF6]">
                  What Parents & Alumni Say
               </h2>
            </motion.div>

            {/* Large quote motif */}
            <div className="relative mx-auto max-w-3xl">
               <Quote
                  className="absolute -top-6 -left-4 h-16 w-16 text-[#D1FAE5] dark:text-[#0F3D2E]"
                  aria-hidden="true"
               />

               <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                     {testimonials.map((t, i) => (
                        <AnimatePresence key={t.name} mode="wait">
                           <motion.div
                              className="min-w-full px-4 py-2 text-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: activeIndex === i ? 1 : 0 }}
                              transition={{ duration: 0.6 }}
                           >
                              <blockquote className="font-display mb-8 text-xl font-semibold italic leading-relaxed text-[#0B1F17] dark:text-[#F0FBF6]">
                                 &ldquo;{t.quote}&rdquo;
                              </blockquote>
                              <div className="flex items-center justify-center gap-3">
                                 <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#D1FAE5]">
                                    <Image
                                       src={t.avatar}
                                       alt={t.name}
                                       fill
                                       className="object-cover"
                                       sizes="48px"
                                    />
                                 </div>
                                 <div className="text-left">
                                    <p className="text-sm font-semibold text-[#0B1F17] dark:text-[#F0FBF6]">
                                       {t.name}
                                    </p>
                                    <p className="text-xs text-[#4B6358] dark:text-[#9CC7B3]">
                                       {t.role}
                                    </p>
                                 </div>
                              </div>
                           </motion.div>
                        </AnimatePresence>
                     ))}
                  </div>
               </div>

               {/* Dots */}
               <div className="mt-8 flex justify-center gap-2">
                  {testimonials.map((_, i) => (
                     <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        aria-label={`Go to testimonial ${i + 1}`}
                        className={`h-2 rounded-full bg-[#22C55E] transition-all duration-300 ${
                           activeIndex === i ? 'w-6 opacity-100' : 'w-2 opacity-40'
                        }`}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
