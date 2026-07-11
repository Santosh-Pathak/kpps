'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface SectionHeadingProps {
   /** Short uppercase label above the title — e.g. "Our Strengths" */
   eyebrow?: string
   /** Main heading text */
   title: string
   /** Supporting paragraph below the title */
   description?: string
   /** Left-aligns everything; default is centered */
   align?: 'left' | 'center'
   /** Override the heading tag when h2 is not semantically correct */
   as?: 'h1' | 'h2' | 'h3'
   className?: string
}

/**
 * Unified section heading recipe used across every page and home section.
 * Replaces the repeated eyebrow + kpps-h2 + description pattern.
 */
export function SectionHeading({
   eyebrow,
   title,
   description,
   align = 'center',
   as: Tag = 'h2',
   className,
}: SectionHeadingProps) {
   const reduced = useReducedMotion()

   return (
      <motion.div
         initial={reduced ? false : { opacity: 0, y: 16 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: '-40px' }}
         transition={reduced ? { duration: 0 } : { duration: 0.45, ease: 'easeOut' }}
         className={cn(
            'mb-12',
            align === 'center' ? 'text-center' : 'text-left',
            className
         )}
      >
         {eyebrow && (
            <p className="kpps-eyebrow mb-3">{eyebrow}</p>
         )}

         <Tag
            className={cn(
               'kpps-h2 font-display mb-3',
               'text-[var(--sp-text)] dark:text-[var(--sp-text)]'
            )}
         >
            {title}
         </Tag>

         {description && (
            <p
               className={cn(
                  'text-[var(--sp-text-muted)] leading-relaxed',
                  align === 'center' && 'mx-auto max-w-xl'
               )}
            >
               {description}
            </p>
         )}
      </motion.div>
   )
}
