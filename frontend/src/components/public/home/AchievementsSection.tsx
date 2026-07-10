'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { Trophy, ArrowRight } from 'lucide-react'
import { achievementMarquee, featuredAchievements } from '@/lib/dummy-data'

export function AchievementsSection() {
   return (
      <section className="section-pad bg-[#FFFFFF] dark:bg-[#0A1F16]">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="mb-10 text-center"
            >
               <p className="kpps-eyebrow mb-3">Proud Moments</p>
               <h2 className="kpps-h2 font-display mb-3 text-[#0B1F17] dark:text-[#F0FBF6]">
                  Our Achievements
               </h2>
               <p className="mx-auto max-w-lg text-[#4B6358] dark:text-[#9CC7B3]">
                  KPPS students consistently excel in academics, sports, and co-curricular activities.
               </p>
            </motion.div>

            {/* Marquee ticker */}
            <div className="mb-12 rounded-xl bg-[#F6FBF8] py-3 dark:bg-[#0F2A1E]">
               <Marquee
                  pauseOnHover
                  speed={40}
                  gradient={false}
                  className="overflow-hidden"
               >
                  {achievementMarquee.map((item) => (
                     <span
                        key={item}
                        className="mx-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0F5132] dark:text-[#22C55E]"
                     >
                        <Trophy className="h-4 w-4 text-[#22C55E]" />
                        {item}
                     </span>
                  ))}
               </Marquee>
            </div>

            {/* 3 featured achievement cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
               {featuredAchievements.map((a, i) => (
                  <motion.div
                     key={a.title}
                     initial={{ opacity: 0, y: 16 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     whileHover={{ y: -4 }}
                     className="relative overflow-hidden rounded-2xl border border-[#E3F0E9] bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-[#1C4632] dark:bg-[#0F2A1E]"
                  >
                     {/* Emerald ribbon accent */}
                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22C55E] to-[#D1FAE5]" />

                     <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#D1FAE5] dark:bg-[#0F3D2E]">
                        <a.icon className="h-7 w-7 text-[#0F5132] dark:text-[#22C55E]" />
                     </div>
                     <span className="rounded-full bg-[#F6FBF8] px-2 py-0.5 text-xs font-semibold text-[#4B6358] dark:bg-[#0F3D2E] dark:text-[#9CC7B3]">
                        {a.year}
                     </span>
                     <h3 className="font-display mt-2 mb-1 text-sm font-semibold text-[#0B1F17] dark:text-[#F0FBF6]">
                        {a.title}
                     </h3>
                     <p className="text-xs text-[#4B6358] dark:text-[#9CC7B3]">{a.detail}</p>
                  </motion.div>
               ))}
            </div>

            <div className="mt-8 text-center">
               <Link
                  href="/achievements"
                  className="inline-flex items-center gap-2 font-semibold text-[#0F5132] transition-colors hover:text-[#22C55E] dark:text-[#22C55E]"
               >
                  View All Achievements <ArrowRight className="h-4 w-4" />
               </Link>
            </div>
         </div>
      </section>
   )
}
