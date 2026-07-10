'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { principal } from '@/lib/dummy-data'
import { OrganicBlob } from '@/components/public/shared/OrganicBlob'

export function PrincipalMessage() {
   return (
      <section className="section-pad relative overflow-hidden bg-[#F6FBF8] dark:bg-[#0F2A1E]">
         <OrganicBlob className="-top-20 -left-20" size={380} opacity={0.4} />
         <OrganicBlob className="-bottom-16 -right-16" size={300} opacity={0.25} />

         <div className="container-kpps relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
               {/* Photo — blob-masked */}
               <motion.div
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="flex justify-center"
               >
                  <div className="relative h-80 w-72">
                     {/* Blob mask background */}
                     <div
                        className="absolute inset-0 rounded-[60%_40%_55%_45%/50%_60%_40%_55%] bg-[#D1FAE5] dark:bg-[#0F3D2E]"
                        style={{ transform: 'scale(1.08)' }}
                     />
                     <div className="relative h-full w-full overflow-hidden rounded-[60%_40%_55%_45%/50%_60%_40%_55%]">
                        <Image
                           src={principal.photo}
                           alt={`Principal ${principal.name}`}
                           fill
                           className="object-cover"
                           sizes="288px"
                        />
                     </div>
                     {/* Accent dot */}
                     <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-[#22C55E]" />
                  </div>
               </motion.div>

               {/* Text */}
               <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
               >
                  <p className="kpps-eyebrow mb-3">Message</p>
                  <h2 className="kpps-h2 font-display mb-2 text-[#0B1F17] dark:text-[#F0FBF6]">
                     From the Principal&apos;s Desk
                  </h2>
                  <p className="mb-6 text-sm font-medium text-[#4B6358] dark:text-[#9CC7B3]">
                     {principal.name} · {principal.qualification}
                  </p>

                  {/* Pull quote */}
                  <div className="relative pl-6">
                     <span
                        className="absolute left-0 top-0 font-display text-6xl leading-none text-[#D1FAE5] dark:text-[#0F3D2E]"
                        aria-hidden="true"
                     >
                        &ldquo;
                     </span>
                     <blockquote className="font-display text-lg font-semibold italic leading-relaxed text-[#0B1F17] dark:text-[#F0FBF6]">
                        {principal.quote}
                     </blockquote>
                  </div>

                  <Link
                     href={principal.readMoreHref}
                     className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0F5132] transition-colors hover:text-[#22C55E] dark:text-[#22C55E] dark:hover:text-[#4ADE80]"
                  >
                     Read Full Message <ArrowRight className="h-4 w-4" />
                  </Link>
               </motion.div>
            </div>
         </div>
      </section>
   )
}
