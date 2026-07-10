'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Trophy, Star, Award, ArrowRight } from 'lucide-react'

const achievements = [
   {
      icon: Trophy,
      title: 'Board Topper 2024',
      detail: 'Aarav Singh — 98.6% in Class XII Science',
      year: '2024',
   },
   {
      icon: Star,
      title: 'National Science Olympiad',
      detail: 'Gold Medal — 3 students',
      year: '2024',
   },
   {
      icon: Award,
      title: 'State Basketball Champions',
      detail: 'U-17 Girls Team',
      year: '2024',
   },
   {
      icon: Trophy,
      title: 'Board Topper 2023',
      detail: 'Priya Sharma — 97.8% in Class X',
      year: '2023',
   },
]

export function AchievementsSection() {
   return (
      <section className="section-pad from-navy/5 bg-gradient-to-b to-transparent">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12 text-center"
            >
               <p className="text-secondary mb-2 text-sm font-semibold tracking-widest uppercase">
                  Proud Moments
               </p>
               <h2 className="font-heading mb-3 text-3xl font-bold md:text-4xl">
                  Our Achievements
               </h2>
               <p className="text-muted-foreground mx-auto max-w-lg">
                  KPPS students consistently excel in academics, sports, and
                  co-curricular activities.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
               {achievements.map((a, i) => (
                  <motion.div
                     key={a.title}
                     initial={{ opacity: 0, y: 16 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-background border-border rounded-xl border p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                  >
                     <div className="bg-secondary/15 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                        <a.icon className="text-secondary h-7 w-7" />
                     </div>
                     <span className="text-muted-foreground bg-muted rounded-full px-2 py-0.5 text-xs font-semibold">
                        {a.year}
                     </span>
                     <h3 className="font-heading mt-2 mb-1 text-sm font-semibold">
                        {a.title}
                     </h3>
                     <p className="text-muted-foreground text-xs">{a.detail}</p>
                  </motion.div>
               ))}
            </div>

            <div className="mt-8 text-center">
               <Link
                  href="/achievements"
                  className="text-primary inline-flex items-center gap-2 font-semibold hover:underline"
               >
                  View All Achievements <ArrowRight className="h-4 w-4" />
               </Link>
            </div>
         </div>
      </section>
   )
}
