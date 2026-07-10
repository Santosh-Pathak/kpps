'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
   ArrowRight,
   Library,
   Microscope,
   Monitor,
   Trophy,
   Bus,
   Mic,
   Heart,
   UtensilsCrossed,
} from 'lucide-react'

const facilities = [
   { icon: Library, name: 'Library', desc: '3000+ books, digital resources' },
   {
      icon: Microscope,
      name: 'Science Labs',
      desc: 'Physics, Chemistry & Biology',
   },
   { icon: Monitor, name: 'Computer Lab', desc: 'Latest hardware & broadband' },
   {
      icon: Trophy,
      name: 'Sports Ground',
      desc: 'Cricket, Football, Basketball',
   },
   { icon: Bus, name: 'Safe Transport', desc: 'GPS-tracked fleet' },
   { icon: Mic, name: 'Auditorium', desc: 'Fully equipped stage & AV' },
   { icon: Heart, name: 'Medical Room', desc: 'First aid & nurse on duty' },
   {
      icon: UtensilsCrossed,
      name: 'Cafeteria',
      desc: 'Hygienic & nutritious meals',
   },
]

export function FacilitiesPreview() {
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
                  Campus
               </p>
               <h2 className="font-heading mb-3 text-3xl font-bold md:text-4xl">
                  World-Class Facilities
               </h2>
               <p className="text-muted-foreground mx-auto max-w-xl">
                  Everything a child needs to learn, grow, and thrive — all
                  under one roof.
               </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
               {facilities.map((f, i) => (
                  <motion.div
                     key={f.name}
                     initial={{ opacity: 0, y: 16 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.07 }}
                     className="bg-muted/50 hover:bg-navy group flex flex-col items-center rounded-xl p-5 text-center transition-all duration-300 hover:text-white"
                  >
                     <div className="bg-navy/10 group-hover:bg-secondary/20 mb-3 flex h-12 w-12 items-center justify-center rounded-xl dark:bg-white/10">
                        <f.icon className="text-navy dark:text-secondary group-hover:text-secondary h-6 w-6" />
                     </div>
                     <p className="font-heading mb-1 text-sm font-semibold">
                        {f.name}
                     </p>
                     <p className="text-muted-foreground text-xs group-hover:text-white/70">
                        {f.desc}
                     </p>
                  </motion.div>
               ))}
            </div>

            <div className="mt-8 text-center">
               <Link
                  href="/facilities"
                  className="text-primary inline-flex items-center gap-2 font-semibold hover:underline"
               >
                  Explore All Facilities
                  <ArrowRight className="h-4 w-4" />
               </Link>
            </div>
         </div>
      </section>
   )
}
