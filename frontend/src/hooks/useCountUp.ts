'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

interface CountUpOptions {
   end: number
   duration?: number
   suffix?: string
   prefix?: string
}

export function useCountUp(
   { end, duration = 1800, suffix = '', prefix = '' }: CountUpOptions,
   inView: boolean
) {
   const [value, setValue] = useState(0)
   const reduced = useReducedMotion()
   const rafRef = useRef<number | null>(null)

   useEffect(() => {
      if (!inView) return
      if (reduced) {
         setValue(end)
         return
      }

      const startTime = performance.now()
      const animate = (now: number) => {
         const elapsed = now - startTime
         const progress = Math.min(elapsed / duration, 1)
         // ease-out cubic
         const eased = 1 - Math.pow(1 - progress, 3)
         setValue(Math.round(eased * end))
         if (progress < 1) rafRef.current = requestAnimationFrame(animate)
      }

      rafRef.current = requestAnimationFrame(animate)
      return () => {
         if (rafRef.current) cancelAnimationFrame(rafRef.current)
      }
   }, [inView, end, duration, reduced])

   return `${prefix}${value.toLocaleString()}${suffix}`
}
