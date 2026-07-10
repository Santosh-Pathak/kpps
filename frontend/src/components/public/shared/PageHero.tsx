'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PageHeroProps {
   eyebrow?: string
   title: string
   description?: string
   className?: string
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
   return (
      <section
         className={cn(
            'relative overflow-hidden bg-[#0F5132] py-20 text-white md:py-28',
            className
         )}
      >
         {/* Subtle dot pattern */}
         <div
            className="absolute inset-0 opacity-10"
            style={{
               backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
               backgroundSize: '28px 28px',
            }}
         />
         {/* Soft blob */}
         <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#22C55E]/10" />

         <div className="container-kpps relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
               {eyebrow && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#22C55E]">
                     {eyebrow}
                  </p>
               )}
               <h1 className="font-display mb-4 text-4xl font-bold italic md:text-5xl">
                  {title}
               </h1>
               {description && (
                  <p className="mx-auto max-w-2xl text-lg text-white/80">{description}</p>
               )}
            </motion.div>
         </div>

         {/* Wave bottom */}
         <div className="absolute right-0 bottom-0 left-0 leading-none">
            <svg
               viewBox="0 0 1440 40"
               className="h-8 w-full fill-[#FFFFFF] dark:fill-[#0A1F16]"
               preserveAspectRatio="none"
            >
               <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
         </div>
      </section>
   )
}
