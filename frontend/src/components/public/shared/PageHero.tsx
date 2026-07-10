'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PageHeroProps {
   eyebrow?: string
   title: string
   description?: string
   className?: string
}

export function PageHero({
   eyebrow,
   title,
   description,
   className,
}: PageHeroProps) {
   return (
      <section
         className={cn(
            'from-navy relative overflow-hidden bg-gradient-to-br to-[#2d5a9e] py-20 text-white md:py-28',
            className
         )}
      >
         {/* Pattern */}
         <div
            className="absolute inset-0 opacity-10"
            style={{
               backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
               backgroundSize: '28px 28px',
            }}
         />
         <div className="container-kpps relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
               {eyebrow && (
                  <p className="text-secondary mb-3 text-sm font-semibold tracking-widest uppercase">
                     {eyebrow}
                  </p>
               )}
               <h1 className="font-heading mb-4 text-4xl font-extrabold md:text-5xl">
                  {title}
               </h1>
               {description && (
                  <p className="mx-auto max-w-2xl text-lg text-white/80">
                     {description}
                  </p>
               )}
            </motion.div>
         </div>
         {/* Wave */}
         <div className="absolute right-0 bottom-0 left-0">
            <svg
               viewBox="0 0 1440 40"
               className="fill-background w-full"
               preserveAspectRatio="none"
               height="32"
            >
               <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
         </div>
      </section>
   )
}
