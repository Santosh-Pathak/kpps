'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const stages = [
   {
      range: 'Pre-Primary',
      grades: 'Nursery – KG',
      description:
         'Play-based learning, phonics, number sense, and foundational life skills.',
      color: 'bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-800',
   },
   {
      range: 'Primary',
      grades: 'Class I – V',
      description:
         'Strong foundations in Languages, Maths, EVS with activity-based teaching.',
      color: 'bg-sky-100 dark:bg-sky-950 border-sky-300 dark:border-sky-800',
   },
   {
      range: 'Middle School',
      grades: 'Class VI – VIII',
      description:
         'Broadened curriculum with Science, Social Science, and project-based learning.',
      color: 'bg-green-100 dark:bg-green-950 border-green-300 dark:border-green-800',
   },
   {
      range: 'Secondary',
      grades: 'Class IX – X',
      description:
         'CBSE Board preparation with comprehensive coaching and regular assessment.',
      color: 'bg-violet-100 dark:bg-violet-950 border-violet-300 dark:border-violet-800',
   },
   {
      range: 'Senior Secondary',
      grades: 'Class XI – XII',
      description:
         'Science (Med/Non-Med), Commerce & Arts/Humanities streams with career guidance.',
      color: 'bg-rose-100 dark:bg-rose-950 border-rose-300 dark:border-rose-800',
   },
]

export function CurriculumSnapshot() {
   return (
      <section className="section-pad bg-muted/40">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12 text-center"
            >
               <p className="text-secondary mb-2 text-sm font-semibold tracking-widest uppercase">
                  Curriculum
               </p>
               <h2 className="font-heading mb-3 text-3xl font-bold md:text-4xl">
                  Academics at a Glance
               </h2>
               <p className="text-muted-foreground mx-auto max-w-xl">
                  From Nursery to Class XII — a seamless journey of learning and
                  growth.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
               {stages.map((stage, i) => (
                  <motion.div
                     key={stage.range}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.08 }}
                     className={`rounded-xl border p-5 ${stage.color}`}
                  >
                     <p className="font-heading mb-0.5 text-base font-bold">
                        {stage.range}
                     </p>
                     <p className="text-muted-foreground mb-2 text-xs font-semibold">
                        {stage.grades}
                     </p>
                     <p className="text-muted-foreground text-xs leading-relaxed">
                        {stage.description}
                     </p>
                  </motion.div>
               ))}
            </div>

            <div className="mt-8 text-center">
               <Link
                  href="/academics"
                  className="text-primary inline-flex items-center gap-2 font-semibold hover:underline"
               >
                  View Full Curriculum
                  <ArrowRight className="h-4 w-4" />
               </Link>
            </div>
         </div>
      </section>
   )
}
