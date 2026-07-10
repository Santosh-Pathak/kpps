'use client'

import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
   const [reduced, setReduced] = useState(false)

   useEffect(() => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      setReduced(mq.matches)
      const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
   }, [])

   return reduced
}

/** Returns Framer Motion transition config that respects reduced motion */
export function useMotionConfig() {
   const reduced = useReducedMotion()
   return {
      initial: reduced ? false : undefined,
      transition: reduced
         ? { duration: 0 }
         : { duration: 0.5, ease: 'easeInOut' },
   }
}
