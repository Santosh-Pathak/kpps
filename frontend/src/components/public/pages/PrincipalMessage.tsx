'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function PrincipalMessage() {
   return (
      <section id="principal" className="section-pad bg-muted/40">
         <div className="container-kpps">
            <div className="grid items-start gap-10 lg:grid-cols-3">
               {/* Photo placeholder */}
               <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-1"
               >
                  <div className="bg-navy/10 font-heading text-navy/30 flex aspect-[3/4] items-center justify-center rounded-2xl text-6xl font-bold dark:text-white/20">
                     P
                  </div>
                  <div className="mt-4 text-center">
                     <p className="font-heading text-lg font-bold">
                        Dr. / Mrs. [Principal Name]
                     </p>
                     <p className="text-muted-foreground text-sm">
                        M.Ed., Ph.D.
                     </p>
                     <p className="text-muted-foreground text-sm">
                        Principal, KPPS (Since 2001)
                     </p>
                  </div>
               </motion.div>

               {/* Message */}
               <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2"
               >
                  <p className="text-secondary mb-2 text-sm font-semibold tracking-widest uppercase">
                     Principal&apos;s Message
                  </p>
                  <h2 className="font-heading mb-6 text-3xl font-bold">
                     A Word From Our Leader
                  </h2>
                  <Quote className="text-secondary/40 mb-4 h-10 w-10" />
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                     <p>Dear Parents, Students, and Well-wishers,</p>
                     <p>
                        It gives me immense pride and joy to welcome you to Kids
                        Paradise Senior Secondary School — a place where dreams
                        take shape, and character is built alongside knowledge.
                        Over the past two decades, KPPS has grown from a small
                        institution into a thriving academic community built on
                        the pillars of excellence, integrity, and compassion.
                     </p>
                     <p>
                        We believe that education is not merely about textbooks
                        and examinations. It is about kindling curiosity,
                        building resilience, and preparing young people to face
                        the world with confidence and kindness. Our dedicated
                        faculty works tirelessly to create a nurturing
                        environment where every child is seen, heard, and
                        supported.
                     </p>
                     <p>
                        Whether it is our state-of-the-art facilities, our
                        co-curricular programmes, or our consistent academic
                        results, every aspect of KPPS reflects our unwavering
                        commitment to your child&apos;s holistic development.
                     </p>
                     <p className="text-foreground font-medium">
                        I invite you to join our family and be a part of this
                        remarkable journey.
                     </p>
                  </div>
                  <div className="font-heading text-navy dark:text-secondary mt-6 font-bold">
                     — Dr. / Mrs. [Principal Name]
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   )
}
