'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { activities } from '@/lib/dummy-data'

export function ActivitiesGallery() {
   return (
      <section className="section-pad bg-[#F6FBF8] dark:bg-[#0F2A1E]">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="mb-10 text-center"
            >
               <p className="kpps-eyebrow mb-3">Beyond Academics</p>
               <h2 className="kpps-h2 font-display mb-3 text-[#0B1F17] dark:text-[#F0FBF6]">
                  Activities & Events
               </h2>
               <p className="mx-auto max-w-xl text-[#4B6358] dark:text-[#9CC7B3]">
                  From sports days to science fairs, cultural fests to nature walks — life at KPPS is
                  never dull.
               </p>
            </motion.div>

            {/* CSS columns masonry */}
            <div className="columns-2 gap-4 md:columns-3">
               {activities.map((activity, i) => (
                  <motion.div
                     key={activity.title}
                     initial={{ opacity: 0, y: 16 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.07 }}
                     className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl"
                  >
                     <div className={`relative w-full overflow-hidden ${activity.tall ? 'h-72' : 'h-44'}`}>
                        <Image
                           src={activity.image}
                           alt={activity.title}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-105"
                           sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0B3D26]/80 via-[#0B3D26]/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">
                              {activity.category}
                           </span>
                           <p className="mt-1 text-sm font-semibold text-white">{activity.title}</p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            <div className="mt-8 text-center">
               <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 font-semibold text-[#0F5132] transition-colors hover:text-[#22C55E] dark:text-[#22C55E]"
               >
                  View Full Gallery <ArrowRight className="h-4 w-4" />
               </Link>
            </div>
         </div>
      </section>
   )
}
