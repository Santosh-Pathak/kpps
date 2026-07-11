'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { principal } from '@/lib/dummy-data'
import { OrganicBlob } from '@/components/public/shared/OrganicBlob'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function PrincipalMessage() {
   const reduced = useReducedMotion()

   return (
      <section className="section-pad relative overflow-hidden bg-[var(--sp-bg-alt)]">
         <OrganicBlob className="-top-20 -left-20" size={380} opacity={0.4} />
         <OrganicBlob className="-bottom-16 -right-16" size={300} opacity={0.25} />

         <div className="container-kpps relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
               {/* Photo — organic blob mask */}
               <motion.div
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="flex justify-center"
               >
                  <div className="relative h-80 w-72">
                     <div
                        className="absolute inset-0 rounded-[60%_40%_55%_45%/50%_60%_40%_55%] bg-[var(--sp-accent-soft)]"
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
                     <div
                        className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full bg-[var(--sp-accent)]"
                        aria-hidden="true"
                     />
                  </div>
               </motion.div>

               {/* Text */}
               <motion.div
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
               >
                  <p className="kpps-eyebrow mb-3">Message</p>
                  <h2 className="kpps-h2 font-display mb-2 text-[var(--sp-text)]">
                     From the Principal&apos;s Desk
                  </h2>
                  <p className="mb-6 text-sm font-medium text-[var(--sp-text-muted)]">
                     {principal.name} · {principal.qualification}
                  </p>

                  {/* Pull quote */}
                  <div className="relative pl-6">
                     <span
                        className="absolute top-0 left-0 font-display text-6xl leading-none text-[var(--sp-accent-soft)]"
                        aria-hidden="true"
                     >
                        &ldquo;
                     </span>
                     <blockquote className="font-display text-lg font-semibold italic leading-relaxed text-[var(--sp-text)]">
                        {principal.quote}
                     </blockquote>
                  </div>

                  <Link
                     href={principal.readMoreHref}
                     className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--sp-primary)] transition-colors hover:text-[var(--sp-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded-sm"
                  >
                     Read Full Message <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
               </motion.div>
            </div>
         </div>
      </section>
   )
}
