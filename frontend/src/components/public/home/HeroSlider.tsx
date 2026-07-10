'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { heroSlides } from '@/lib/dummy-data'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const HEADLINE_WORDS_VARIANT = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.08 } },
}

const WORD_VARIANT = {
   hidden: { opacity: 0, y: 32 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function HeroSlider() {
   const reduced = useReducedMotion()
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 })
   const [activeIndex, setActiveIndex] = useState(0)
   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

   const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
   const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])

   const startTimer = useCallback(() => {
      timerRef.current = setInterval(() => emblaApi?.scrollNext(), 5500)
   }, [emblaApi])

   const stopTimer = useCallback(() => {
      if (timerRef.current) clearInterval(timerRef.current)
   }, [])

   useEffect(() => {
      if (!emblaApi) return
      const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap())
      emblaApi.on('select', onSelect)
      startTimer()
      return () => {
         stopTimer()
         emblaApi.off('select', onSelect)
      }
   }, [emblaApi, startTimer, stopTimer])

   return (
      <section
         className="relative min-h-[90vh] overflow-hidden"
         onMouseEnter={stopTimer}
         onMouseLeave={startTimer}
         aria-label="Hero image slider"
      >
         <div className="h-full w-full" ref={emblaRef}>
            <div className="flex h-full">
               {heroSlides.map((slide, i) => (
                  <div
                     key={slide.id}
                     className="relative min-h-[90vh] min-w-full flex-none"
                  >
                     {/* Background image with Ken Burns */}
                     <div className="absolute inset-0 overflow-hidden">
                        <Image
                           src={slide.image}
                           alt={slide.headline}
                           fill
                           priority={i === 0}
                           className={`object-cover ${!reduced && activeIndex === i ? 'animate-[kenBurns_8s_ease-in-out_forwards]' : ''}`}
                           sizes="100vw"
                        />
                        {/* Dark gradient overlay for text legibility */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D26]/85 via-[#0B3D26]/60 to-[#0B3D26]/20" />
                     </div>

                     {/* Slide content */}
                     <div className="relative z-10 flex min-h-[90vh] items-center">
                        <div className="container-kpps py-24 md:py-32">
                           <AnimatePresence mode="wait">
                              {activeIndex === i && (
                                 <motion.div
                                    key={`content-${i}`}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                                    className="max-w-2xl"
                                 >
                                    {/* Eyebrow */}
                                    <motion.p
                                       variants={WORD_VARIANT}
                                       className="kpps-eyebrow mb-4 text-[#22C55E]"
                                    >
                                       CBSE Affiliated · Est. {new Date().getFullYear() - 24}
                                    </motion.p>

                                    {/* Headline — word by word */}
                                    <motion.h1
                                       variants={HEADLINE_WORDS_VARIANT}
                                       className="kpps-h1 mb-5 font-display font-bold italic text-white"
                                       aria-label={slide.headline}
                                    >
                                       {slide.headline.split(' ').map((word, wi) => (
                                          <motion.span
                                             key={wi}
                                             variants={reduced ? {} : WORD_VARIANT}
                                             className="mr-3 inline-block"
                                          >
                                             {word}
                                          </motion.span>
                                       ))}
                                    </motion.h1>

                                    {/* Subtext */}
                                    <motion.p
                                       variants={WORD_VARIANT}
                                       className="mb-9 max-w-xl text-lg leading-relaxed text-white/80"
                                    >
                                       {slide.subtext}
                                    </motion.p>

                                    {/* CTAs */}
                                    <motion.div
                                       variants={WORD_VARIANT}
                                       className="flex flex-wrap gap-3"
                                    >
                                       <Link href={slide.primaryCta.href}>
                                          <motion.button
                                             whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(15,81,50,0.5)' }}
                                             whileTap={{ scale: 0.97 }}
                                             transition={{ duration: 0.15 }}
                                             className="rounded-full bg-[#22C55E] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#16a34a]"
                                          >
                                             {slide.primaryCta.label}
                                          </motion.button>
                                       </Link>
                                       <Link href={slide.secondaryCta.href}>
                                          <motion.button
                                             whileHover={{ y: -2 }}
                                             whileTap={{ scale: 0.97 }}
                                             transition={{ duration: 0.15 }}
                                             className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                                          >
                                             {slide.secondaryCta.label}
                                          </motion.button>
                                       </Link>
                                    </motion.div>
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Prev / Next */}
         <button
            onClick={prev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Previous slide"
         >
            <ChevronLeft className="h-5 w-5" />
         </button>
         <button
            onClick={next}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Next slide"
         >
            <ChevronRight className="h-5 w-5" />
         </button>

         {/* Dots — elongate on active */}
         <div className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {heroSlides.map((_, i) => (
               <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full bg-[#22C55E] transition-all duration-300 ${
                     activeIndex === i ? 'w-7 opacity-100' : 'w-2 opacity-50'
                  }`}
               />
            ))}
         </div>

         {/* Scroll down indicator */}
         <motion.div
            className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-white/70"
            animate={reduced ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
         >
            <ChevronDown className="h-6 w-6" />
         </motion.div>

         {/* Wave divider at bottom */}
         <div className="absolute bottom-0 left-0 right-0 z-10 leading-none">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-10 w-full fill-[#FFFFFF] dark:fill-[#0A1F16]">
               <path d="M0,40 C360,0 1080,0 1440,40 L1440,60 L0,60 Z" />
            </svg>
         </div>
      </section>
   )
}
