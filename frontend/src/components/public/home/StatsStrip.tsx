'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/lib/dummy-data'
import { useCountUp } from '@/hooks/useCountUp'

function StatCard({ icon: Icon, label, value, suffix = '', prefix = '', delay = 0 }: {
   icon: React.ComponentType<{ className?: string }>
   label: string
   value: number
   suffix?: string
   prefix?: string
   delay?: number
}) {
   const ref = useRef<HTMLDivElement>(null)
   const inView = useInView(ref, { once: true, margin: '-60px' })
   const display = useCountUp({ end: value, suffix, prefix }, inView)

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 20 }}
         animate={inView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.5, delay, ease: 'easeOut' }}
         whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(15,81,50,0.15)' }}
         className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md transition-shadow dark:bg-[#0F2A1E]"
      >
         <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D1FAE5] dark:bg-[#0F3D2E]">
            <Icon className="h-6 w-6 text-[#0F5132] dark:text-[#22C55E]" />
         </div>
         <p className="font-display text-3xl font-bold text-[#0F5132] dark:text-[#22C55E]">
            {display}
         </p>
         <p className="mt-1 text-xs font-medium text-[#4B6358] dark:text-[#9CC7B3]">{label}</p>
      </motion.div>
   )
}

export function StatsStrip() {
   return (
      <div className="relative z-20 -mt-8 px-4">
         <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
               {stats.map((stat, i) => (
                  <StatCard key={stat.label} {...stat} delay={i * 0.1} />
               ))}
            </div>
         </div>
      </div>
   )
}
