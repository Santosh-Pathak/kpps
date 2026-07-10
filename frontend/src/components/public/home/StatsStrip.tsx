'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react'

const stats = [
   { icon: GraduationCap, label: 'Established', value: '2001' },
   { icon: BookOpen, label: 'Board Affiliation', value: 'CBSE' },
   { icon: Users, label: 'Students Enrolled', value: '2000+' },
   { icon: Award, label: 'Board Pass Rate', value: '100%' },
]

export function StatsStrip() {
   return (
      <section className="bg-navy py-8">
         <div className="container-kpps grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
               <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
               >
                  <div className="bg-secondary/20 mb-2 flex h-12 w-12 items-center justify-center rounded-full">
                     <stat.icon className="text-secondary h-6 w-6" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-white">
                     {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs text-white/60">{stat.label}</p>
               </motion.div>
            ))}
         </div>
      </section>
   )
}
