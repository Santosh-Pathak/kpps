'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
   {
      id: 1,
      headline: 'Admissions Open 2025–26',
      subtext:
         "Shape your child's future with CBSE excellence, expert faculty, and world-class facilities.",
      cta: 'Apply for Admission',
      ctaHref: '/admissions',
      bg: 'from-navy-900/80 via-navy-800/60 to-transparent',
      color: 'from-[#1e3a5f] to-[#2d5a9e]',
   },
   {
      id: 2,
      headline: 'Building Global Citizens',
      subtext:
         'Activities, sports, cultural events and educational trips that shape well-rounded individuals.',
      cta: 'Explore Activities',
      ctaHref: '/activities',
      bg: 'from-black/70 via-black/40 to-transparent',
      color: 'from-[#1a2b4a] to-[#1e3a5f]',
   },
   {
      id: 3,
      headline: 'Excellence in Academics',
      subtext:
         'Consistent board toppers and 100% pass rate across Science, Commerce & Arts streams.',
      cta: 'View Achievements',
      ctaHref: '/achievements',
      bg: 'from-navy-900/80 via-navy-800/60 to-transparent',
      color: 'from-[#1e3a5f] to-[#4a2080]',
   },
]

export function HeroSlider() {
   const swiperRef = useRef<HTMLDivElement>(null)
   const currentRef = useRef(0)
   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

   const goTo = (index: number) => {
      const slides =
         swiperRef.current?.querySelectorAll<HTMLElement>('[data-slide]')
      const dots = document.querySelectorAll<HTMLElement>('[data-dot]')
      if (!slides) return
      slides.forEach((s, i) => {
         s.style.opacity = i === index ? '1' : '0'
         s.style.zIndex = i === index ? '10' : '0'
      })
      dots.forEach((d, i) => {
         d.setAttribute('data-active', String(i === index))
      })
      currentRef.current = index
   }

   const next = () => goTo((currentRef.current + 1) % slides.length)
   const prev = () =>
      goTo((currentRef.current - 1 + slides.length) % slides.length)

   useEffect(() => {
      timerRef.current = setInterval(next, 5000)
      return () => {
         if (timerRef.current) clearInterval(timerRef.current)
      }
   }, [])

   const pauseTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current)
   }
   const resumeTimer = () => {
      timerRef.current = setInterval(next, 5000)
   }

   return (
      <section
         className="relative h-[92vh] max-h-[900px] min-h-[520px] overflow-hidden"
         onMouseEnter={pauseTimer}
         onMouseLeave={resumeTimer}
         onTouchStart={pauseTimer}
         onTouchEnd={resumeTimer}
         aria-label="Hero slider"
      >
         <div ref={swiperRef} className="relative h-full w-full">
            {slides.map((slide, i) => (
               <div
                  key={slide.id}
                  data-slide={i}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === 0 ? 1 : 0, zIndex: i === 0 ? 10 : 0 }}
               >
                  {/* Background gradient (replaces real photo until admin uploads) */}
                  <div
                     className={`absolute inset-0 bg-gradient-to-br ${slide.color}`}
                  />
                  {/* Pattern overlay */}
                  <div
                     className="absolute inset-0 opacity-10"
                     style={{
                        backgroundImage:
                           'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                     }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex h-full items-center">
                     <div className="container-kpps">
                        <motion.div
                           initial={{ opacity: 0, y: 30 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.7, delay: 0.1 }}
                           className="max-w-2xl"
                        >
                           <div className="mb-4 flex items-center gap-2">
                              <span className="bg-secondary/90 text-navy rounded-full px-3 py-1 text-xs font-semibold">
                                 CBSE Affiliated
                              </span>
                              <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                                 Since 2001
                              </span>
                           </div>
                           <h1 className="font-heading mb-4 text-4xl leading-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                              {slide.headline}
                           </h1>
                           <p className="mb-8 text-lg leading-relaxed text-white/85 md:text-xl">
                              {slide.subtext}
                           </p>
                           <div className="flex flex-wrap gap-3">
                              <Link href={slide.ctaHref}>
                                 <Button variant="cta" size="lg">
                                    {slide.cta}
                                 </Button>
                              </Link>
                              <Link href="/contact">
                                 <Button
                                    variant="outline"
                                    size="lg"
                                    className="hover:text-navy border-white text-white hover:bg-white"
                                 >
                                    Contact Us
                                 </Button>
                              </Link>
                           </div>
                        </motion.div>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Controls */}
         <button
            onClick={prev}
            className="absolute top-1/2 left-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
            aria-label="Previous slide"
         >
            <ChevronLeft className="h-5 w-5" />
         </button>
         <button
            onClick={next}
            className="absolute top-1/2 right-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
            aria-label="Next slide"
         >
            <ChevronRight className="h-5 w-5" />
         </button>

         {/* Dots */}
         <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
               <button
                  key={i}
                  data-dot={i}
                  onClick={() => goTo(i)}
                  className="h-2.5 w-2.5 rounded-full bg-white/50 transition-all duration-300 data-[active=true]:w-6 data-[active=true]:bg-white"
                  aria-label={`Go to slide ${i + 1}`}
                  data-active={i === 0}
               />
            ))}
         </div>

         {/* Bottom wave */}
         <div className="absolute right-0 bottom-0 left-0 z-10">
            <svg
               viewBox="0 0 1440 60"
               className="fill-background w-full"
               preserveAspectRatio="none"
               height="40"
            >
               <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
            </svg>
         </div>
      </section>
   )
}
