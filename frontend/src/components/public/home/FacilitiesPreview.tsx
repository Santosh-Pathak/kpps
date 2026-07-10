'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowRight } from 'lucide-react'
import { facilities } from '@/lib/dummy-data'

export function FacilitiesPreview() {
   const [emblaRef] = useEmblaCarousel({
      loop: true,
      align: 'start',
      slidesToScroll: 1,
   })

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
               <p className="kpps-eyebrow mb-3">Campus</p>
               <h2 className="kpps-h2 font-display mb-3 text-[#0B1F17] dark:text-[#F0FBF6]">
                  World-Class Facilities
               </h2>
               <p className="mx-auto max-w-xl text-[#4B6358] dark:text-[#9CC7B3]">
                  Everything a child needs to learn, grow, and thrive — all under one roof.
               </p>
            </motion.div>

            {/* Carousel: 3 visible desktop, 1.2 on mobile (peeks next) */}
            <div className="overflow-hidden" ref={emblaRef}>
               <div className="flex gap-5">
                  {facilities.map((f, i) => (
                     <motion.div
                        key={f.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="group min-w-[82vw] flex-none overflow-hidden rounded-2xl border border-[#E3F0E9] bg-white shadow-sm transition-shadow hover:shadow-md sm:min-w-[44vw] lg:min-w-[calc(33.333%-14px)] dark:border-[#1C4632] dark:bg-[#0F2A1E]"
                     >
                        {/* Image with frosted label */}
                        <div className="relative h-48 overflow-hidden">
                           <Image
                              src={f.image}
                              alt={f.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 44vw, 33vw"
                           />
                           {/* Frosted chip bottom-left */}
                           <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 backdrop-blur-md dark:bg-[#0A1F16]/80">
                              <f.icon className="h-4 w-4 text-[#0F5132] dark:text-[#22C55E]" />
                              <span className="text-xs font-semibold text-[#0B1F17] dark:text-[#F0FBF6]">
                                 {f.name}
                              </span>
                           </div>
                        </div>
                        <div className="p-4">
                           <p className="text-sm text-[#4B6358] dark:text-[#9CC7B3]">{f.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>

            <div className="mt-8 text-center">
               <Link
                  href="/facilities"
                  className="inline-flex items-center gap-2 font-semibold text-[#0F5132] transition-colors hover:text-[#22C55E] dark:text-[#22C55E]"
               >
                  Explore All Facilities <ArrowRight className="h-4 w-4" />
               </Link>
            </div>
         </div>
      </section>
   )
}
