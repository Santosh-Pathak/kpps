'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { curriculumStages } from '@/lib/dummy-data'
import { WaveDivider } from '@/components/public/shared/WaveDivider'

export function CurriculumSnapshot() {
   return (
      <section className="relative bg-[#F6FBF8] pb-0 pt-16 dark:bg-[#0F2A1E] md:pt-24">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="mb-12 text-center"
            >
               <p className="kpps-eyebrow mb-3">Curriculum</p>
               <h2 className="kpps-h2 font-display mb-3 text-[#0B1F17] dark:text-[#F0FBF6]">
                  Academics at a Glance
               </h2>
               <p className="mx-auto max-w-xl text-[#4B6358] dark:text-[#9CC7B3]">
                  From Nursery to Class XII — a seamless journey of learning and growth.
               </p>
            </motion.div>

            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
               {curriculumStages.map((stage, i) => (
                  <motion.div
                     key={stage.range}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.08 }}
                     whileHover={{ y: -4 }}
                     className="group flex min-w-[220px] snap-start flex-col rounded-2xl border border-[#E3F0E9] bg-white p-6 transition-shadow hover:shadow-lg dark:border-[#1C4632] dark:bg-[#0A1F16] lg:min-w-0"
                  >
                     <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#D1FAE5] transition-colors group-hover:bg-[#22C55E] dark:bg-[#0F3D2E]">
                        <stage.icon className="h-5 w-5 text-[#0F5132] transition-colors group-hover:text-white dark:text-[#22C55E]" />
                     </div>
                     <p className="font-display mb-0.5 text-base font-bold text-[#0B1F17] dark:text-[#F0FBF6]">
                        {stage.range}
                     </p>
                     <p className="mb-2 text-xs font-semibold text-[#22C55E]">{stage.grades}</p>
                     <p className="flex-1 text-xs leading-relaxed text-[#4B6358] dark:text-[#9CC7B3]">
                        {stage.description}
                     </p>
                     <Link
                        href="/academics"
                        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0F5132] transition-all group-hover:gap-2 dark:text-[#22C55E]"
                     >
                        Explore <ArrowRight className="h-3 w-3" />
                     </Link>
                  </motion.div>
               ))}
            </div>
         </div>

         <WaveDivider
            className="mt-16"
            fromColor="fill-[#F6FBF8] dark:fill-[#0F2A1E]"
            toColor="fill-[#FFFFFF] dark:fill-[#0A1F16]"
         />
      </section>
   )
}
