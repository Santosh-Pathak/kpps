'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface HoverCardProps {
   icon: LucideIcon
   title: string
   description: string
   delay?: number
   className?: string
}

export function HoverCard({ icon: Icon, title, description, delay = 0, className }: HoverCardProps) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay, ease: 'easeOut' }}
         whileHover={{ y: -4 }}
         className={cn(
            'group flex gap-4 rounded-2xl border border-[#E3F0E9] bg-white p-6 transition-shadow duration-200 hover:shadow-md dark:border-[#1C4632] dark:bg-[#0F2A1E]',
            className
         )}
      >
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D1FAE5] transition-colors duration-150 group-hover:bg-[#22C55E] dark:bg-[#0F3D2E] dark:group-hover:bg-[#22C55E]">
            <Icon className="h-6 w-6 text-[#0F5132] transition-colors duration-150 group-hover:text-white dark:text-[#22C55E] dark:group-hover:text-[#0A1F16]" />
         </div>
         <div>
            <h3 className="font-display mb-1 text-base font-semibold text-[#0B1F17] dark:text-[#F0FBF6]">
               {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#4B6358] dark:text-[#9CC7B3]">
               {description}
            </p>
         </div>
      </motion.div>
   )
}
