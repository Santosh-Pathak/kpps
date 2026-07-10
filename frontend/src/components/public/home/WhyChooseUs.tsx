'use client'

import { motion } from 'framer-motion'
import {
   GraduationCap,
   Shield,
   Bus,
   Trophy,
   Lightbulb,
   BarChart3,
} from 'lucide-react'

const reasons = [
   {
      icon: GraduationCap,
      title: 'Experienced Faculty',
      description:
         'Highly qualified and dedicated teachers with years of experience in their subjects.',
   },
   {
      icon: Lightbulb,
      title: 'Smart Classrooms',
      description:
         'Interactive digital boards, projectors, and tech-enabled learning environments.',
   },
   {
      icon: Shield,
      title: 'Safe & Secure Campus',
      description:
         '24×7 CCTV surveillance, trained security personnel, and a child-safe environment.',
   },
   {
      icon: Bus,
      title: 'Safe Transport',
      description:
         'GPS-tracked school buses with trained drivers covering all major routes.',
   },
   {
      icon: Trophy,
      title: 'Sports & Activities',
      description:
         'Extensive sports facilities, cultural events, and co-curricular programmes.',
   },
   {
      icon: BarChart3,
      title: 'Outstanding Results',
      description:
         'Consistent board toppers and 100% pass rate every academic year.',
   },
]

export function WhyChooseUs() {
   return (
      <section className="section-pad">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12 text-center"
            >
               <p className="text-secondary mb-2 text-sm font-semibold tracking-widest uppercase">
                  Our Strengths
               </p>
               <h2 className="font-heading mb-3 text-3xl font-bold md:text-4xl">
                  Why Choose KPPS?
               </h2>
               <p className="text-muted-foreground mx-auto max-w-xl">
                  We combine academic rigour with holistic development so every
                  student grows into a confident, capable individual.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {reasons.map((r, i) => (
                  <motion.div
                     key={r.title}
                     initial={{ opacity: 0, y: 24 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: i * 0.1 }}
                     className="group bg-muted/50 hover:bg-navy dark:hover:bg-navy flex gap-4 rounded-xl p-6 transition-all duration-300 hover:text-white"
                  >
                     <div className="bg-secondary/20 group-hover:bg-secondary/30 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                        <r.icon className="text-secondary h-6 w-6" />
                     </div>
                     <div>
                        <h3 className="font-heading mb-1 text-base font-semibold">
                           {r.title}
                        </h3>
                        <p className="text-muted-foreground text-sm group-hover:text-white/80">
                           {r.description}
                        </p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}
