'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { principal } from '@/lib/dummy-data'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function PrincipalMessage() {
   const reduced = useReducedMotion()

   return (
      <section id="principal" className="section-pad bg-[var(--sp-bg-alt)]">
         <div className="container-kpps">
            <div className="grid items-start gap-10 lg:grid-cols-3">
               {/* Photo */}
               <motion.div
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="lg:col-span-1"
               >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[var(--sp-accent-soft)]">
                     <Image
                        src={principal.photo}
                        alt={`Principal ${principal.name}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                     />
                  </div>
                  <div className="mt-4 text-center">
                     <p className="font-display text-lg font-bold text-[var(--sp-text)]">
                        {principal.name}
                     </p>
                     <p className="text-sm text-[var(--sp-text-muted)]">{principal.qualification}</p>
                     <p className="text-sm text-[var(--sp-text-muted)]">Principal, KPPS (Since 2001)</p>
                  </div>
               </motion.div>

               {/* Full message */}
               <motion.div
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                  className="lg:col-span-2"
               >
                  <p className="kpps-eyebrow mb-2">Principal&apos;s Message</p>
                  <h2 className="kpps-h2 font-display mb-6 text-[var(--sp-text)]">
                     A Word From Our Leader
                  </h2>

                  <Quote
                     className="mb-4 h-10 w-10 text-[var(--sp-accent-soft)]"
                     aria-hidden="true"
                  />

                  <div className="space-y-4 leading-relaxed text-[var(--sp-text-muted)]">
                     <p>Dear Parents, Students, and Well-wishers,</p>
                     <p>
                        It gives me immense pride and joy to welcome you to Kids Paradise Senior
                        Secondary School — a place where dreams take shape, and character is built
                        alongside knowledge. Over the past two decades, KPPS has grown from a small
                        institution into a thriving academic community built on the pillars of
                        excellence, integrity, and compassion.
                     </p>
                     <p>
                        We believe that education is not merely about textbooks and examinations.
                        It is about kindling curiosity, building resilience, and preparing young
                        people to face the world with confidence and kindness. Our dedicated faculty
                        works tirelessly to create a nurturing environment where every child is seen,
                        heard, and supported.
                     </p>
                     <p>
                        Whether it is our state-of-the-art facilities, our co-curricular programmes,
                        or our consistent academic results, every aspect of KPPS reflects our
                        unwavering commitment to your child&apos;s holistic development.
                     </p>
                     <p className="font-medium text-[var(--sp-text)]">
                        I invite you to join our family and be a part of this remarkable journey.
                     </p>
                  </div>

                  <div className="font-display mt-6 font-bold text-[var(--sp-primary)]">
                     — {principal.name}
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   )
}
