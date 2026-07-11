'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface PageHeroProps {
   eyebrow?: string
   title: string
   description?: string
   className?: string
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
   const reduced = useReducedMotion()

   return (
      <section
         className={cn(
            'relative overflow-hidden bg-[var(--sp-primary)] py-20 text-white md:py-28',
            className
         )}
      >
         {/* Subtle dot grid — decorative depth without heavy gradients */}
         <div
            className="absolute inset-0 opacity-[0.07]"
            aria-hidden="true"
            style={{
               backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
               backgroundSize: '28px 28px',
            }}
         />

         {/* Signature organic blob — low opacity, accent-soft */}
         <div
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--sp-accent)] opacity-[0.08]"
            aria-hidden="true"
         />
         <div
            className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[var(--sp-accent)] opacity-[0.06]"
            aria-hidden="true"
         />

         <div className="container-kpps relative z-10 text-center">
            <motion.div
               initial={reduced ? false : { opacity: 0, y: 18 }}
               animate={{ opacity: 1, y: 0 }}
               transition={reduced ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }}
            >
               {eyebrow && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--sp-accent)]">
                     {eyebrow}
                  </p>
               )}

               {/* Fraunces italic for display headings signals "crafted", not template */}
               <h1 className="font-display mb-4 text-4xl font-bold italic leading-tight md:text-5xl">
                  {title}
               </h1>

               {description && (
                  <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
                     {description}
                  </p>
               )}
            </motion.div>
         </div>

         {/* Wave transition to page bg */}
         <div className="absolute right-0 bottom-0 left-0 leading-none" aria-hidden="true">
            <svg
               viewBox="0 0 1440 40"
               className="h-8 w-full fill-[var(--sp-bg)] dark:fill-[var(--sp-bg)]"
               preserveAspectRatio="none"
            >
               <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
         </div>
      </section>
   )
}
