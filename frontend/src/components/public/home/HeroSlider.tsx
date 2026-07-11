'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroSlides } from '@/lib/dummy-data'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

// Word-by-word headline entrance — skipped entirely when reduced motion is on
const HEADLINE_WORDS_VARIANT = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.08 } },
}
const WORD_VARIANT = {
   hidden: { opacity: 0, y: 32 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export function HeroSlider() {
   const reduced = useReducedMotion()
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 })
   const [activeIndex, setActiveIndex] = useState(0)
   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

   const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
   const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])

   const startTimer = useCallback(() => {
      if (timerRef.current) clearInterval(timerRef.current)
      timerRef.current = setInterval(() => emblaApi?.scrollNext(), 5500)
   }, [emblaApi])

   const stopTimer = useCallback(() => {
      if (timerRef.current) clearInterval(timerRef.current)
   }, [])

   useEffect(() => {
      if (!emblaApi) return
      const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap())
      emblaApi.on('select', onSelect)
      // Autoplay skipped when user prefers reduced motion
      if (!reduced) startTimer()
      return () => {
         stopTimer()
         emblaApi.off('select', onSelect)
      }
   }, [emblaApi, startTimer, stopTimer, reduced])

   return (
      <section
         className="relative min-h-[90vh] overflow-hidden"
         onMouseEnter={stopTimer}
         onMouseLeave={() => { if (!reduced) startTimer() }}
         aria-label="Hero image slideshow"
         aria-roledescription="carousel"
      >
         <div className="h-full w-full" ref={emblaRef}>
            <div className="flex h-full" aria-live="off">
               {heroSlides.map((slide, i) => (
                  <div
                     key={slide.id}
                     className="relative min-h-[90vh] min-w-full flex-none"
                     role="group"
                     aria-roledescription="slide"
                     aria-label={`${i + 1} of ${heroSlides.length}: ${slide.headline}`}
                  >
                     {/* Background image with Ken Burns only when motion is OK */}
                     <div className="absolute inset-0 overflow-hidden">
                        <Image
                           src={slide.image}
                           alt=""
                           fill
                           priority={i === 0}
                           className={cn(
                              'object-cover',
                              !reduced && activeIndex === i && 'animate-[kenBurns_8s_ease-in-out_forwards]'
                           )}
                           sizes="100vw"
                        />
                        {/* Gradient overlay — dark left, light right for typography legibility */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--sp-primary-dark)]/85 via-[var(--sp-primary-dark)]/55 to-[var(--sp-primary-dark)]/15" />
                     </div>

                     {/* Slide content */}
                     <div className="relative z-10 flex min-h-[90vh] items-center">
                        <div className="container-kpps py-24 md:py-32">
                           <AnimatePresence mode="wait">
                              {activeIndex === i && (
                                 <motion.div
                                    key={`content-${i}`}
                                    initial={reduced ? false : 'hidden'}
                                    animate="visible"
                                    exit={{ opacity: 0, transition: { duration: 0.25 } }}
                                    variants={HEADLINE_WORDS_VARIANT}
                                    className="max-w-2xl"
                                 >
                                    {/* Eyebrow */}
                                    <motion.p
                                       variants={reduced ? {} : WORD_VARIANT}
                                       className="kpps-eyebrow mb-4"
                                    >
                                       CBSE Affiliated · Est. 2001
                                    </motion.p>

                                    {/* Headline — Fraunces italic, word-by-word on motion OK */}
                                    <motion.h1
                                       variants={HEADLINE_WORDS_VARIANT}
                                       className="kpps-h1 font-display mb-5 font-bold italic text-white"
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
                                       variants={reduced ? {} : WORD_VARIANT}
                                       className="mb-9 max-w-xl text-lg leading-relaxed text-white/80"
                                    >
                                       {slide.subtext}
                                    </motion.p>

                                    {/* CTAs — Button asChild removes <Link><button> nesting */}
                                    <motion.div
                                       variants={reduced ? {} : WORD_VARIANT}
                                       className="flex flex-wrap gap-3"
                                    >
                                       <Button
                                          variant="accent"
                                          size="lg"
                                          className="rounded-full"
                                          asChild
                                       >
                                          <Link href={slide.primaryCta.href}>
                                             {slide.primaryCta.label}
                                          </Link>
                                       </Button>

                                       <Button
                                          variant="ghost"
                                          size="lg"
                                          className="rounded-full border border-white/60 text-white hover:bg-white/10 hover:text-white"
                                          asChild
                                       >
                                          <Link href={slide.secondaryCta.href}>
                                             {slide.secondaryCta.label}
                                          </Link>
                                       </Button>
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

         {/* ── Prev / Next controls ──────────────────────────────────────── */}
         <button
            onClick={prev}
            className={cn(
               'absolute left-4 top-1/2 z-20 -translate-y-1/2',
               'flex h-11 w-11 items-center justify-center rounded-full',
               'bg-white/15 text-white backdrop-blur-sm',
               'transition-colors duration-150 hover:bg-white/30',
               'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
            )}
            aria-label="Previous slide"
         >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
         </button>
         <button
            onClick={next}
            className={cn(
               'absolute right-4 top-1/2 z-20 -translate-y-1/2',
               'flex h-11 w-11 items-center justify-center rounded-full',
               'bg-white/15 text-white backdrop-blur-sm',
               'transition-colors duration-150 hover:bg-white/30',
               'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
            )}
            aria-label="Next slide"
         >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
         </button>

         {/* ── Slide dots ───────────────────────────────────────────────── */}
         <div
            className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 gap-2"
            role="tablist"
            aria-label="Slide navigation"
         >
            {heroSlides.map((slide, i) => (
               <button
                  key={i}
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-label={`Slide ${i + 1}: ${slide.headline}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                     'h-2 rounded-full bg-[var(--sp-accent)] transition-all duration-300',
                     'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1',
                     activeIndex === i ? 'w-7 opacity-100' : 'w-2 opacity-50'
                  )}
               />
            ))}
         </div>

         {/* ── Scroll-down hint (hidden when reduced motion) ────────────── */}
         {!reduced && (
            <motion.div
               className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-white/60"
               animate={{ y: [0, 8, 0] }}
               transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
               aria-hidden="true"
            >
               <ChevronDown className="h-6 w-6" />
            </motion.div>
         )}

         {/* ── Wave transition to section below ─────────────────────────── */}
         <div className="absolute right-0 bottom-0 left-0 z-10 leading-none" aria-hidden="true">
            <svg
               viewBox="0 0 1440 60"
               preserveAspectRatio="none"
               className="h-10 w-full fill-[var(--sp-bg)]"
            >
               <path d="M0,40 C360,0 1080,0 1440,40 L1440,60 L0,60 Z" />
            </svg>
         </div>
      </section>
   )
}
