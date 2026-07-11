'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface LeafMotifProps {
   className?: string
   side?: 'left' | 'right'
}

export function LeafMotif({ className = '', side = 'left' }: LeafMotifProps) {
   const ref = useRef<SVGSVGElement>(null)
   const reduced = useReducedMotion()

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   })

   const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1])

   const path =
      side === 'left'
         ? 'M 10,200 C 40,120 80,60 140,40 C 200,20 250,50 260,110 C 270,170 230,230 180,250'
         : 'M 250,200 C 220,120 180,60 120,40 C 60,20 10,50 0,110 C -10,170 30,230 80,250'

   if (reduced) return null

   return (
      <svg
         ref={ref}
         viewBox="0 0 280 300"
         className={`pointer-events-none ${className}`}
         fill="none"
         aria-hidden="true"
      >
         <motion.path
            d={path}
            stroke="var(--sp-accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength }}
         />
      </svg>
   )
}
