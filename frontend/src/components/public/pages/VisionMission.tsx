'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Heart } from 'lucide-react'

const cards = [
   {
      icon: Eye,
      title: 'Our Vision',
      content:
         'To be a centre of excellence that nurtures academically strong, culturally rooted, and globally aware citizens who contribute positively to society.',
      color: 'bg-sky-50 dark:bg-sky-950 border-sky-200 dark:border-sky-800',
      iconColor: 'text-sky-600 dark:text-sky-400',
      iconBg: 'bg-sky-100 dark:bg-sky-900',
   },
   {
      icon: Target,
      title: 'Our Mission',
      content:
         'To provide a safe, stimulating, and inclusive learning environment that fosters intellectual curiosity, moral integrity, and a lifelong love for learning in every student.',
      color: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
      iconColor: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-100 dark:bg-amber-900',
   },
   {
      icon: Heart,
      title: 'Our Values',
      content:
         'Integrity, empathy, excellence, inclusion, and innovation. We believe every child is gifted, and our role is to discover and nurture that gift.',
      color: 'bg-rose-50 dark:bg-rose-950 border-rose-200 dark:border-rose-800',
      iconColor: 'text-rose-600 dark:text-rose-400',
      iconBg: 'bg-rose-100 dark:bg-rose-900',
   },
]

export function VisionMission() {
   return (
      <section className="section-pad">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12 text-center"
            >
               <h2 className="font-heading mb-3 text-3xl font-bold md:text-4xl">
                  Vision, Mission & Values
               </h2>
               <p className="text-muted-foreground mx-auto max-w-xl">
                  The principles that guide everything we do at KPPS.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
               {cards.map((card, i) => (
                  <motion.div
                     key={card.title}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.12 }}
                     className={`rounded-2xl border p-6 ${card.color}`}
                  >
                     <div
                        className={`h-12 w-12 ${card.iconBg} mb-4 flex items-center justify-center rounded-xl`}
                     >
                        <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                     </div>
                     <h3 className="font-heading mb-3 text-xl font-bold">
                        {card.title}
                     </h3>
                     <p className="text-muted-foreground leading-relaxed">
                        {card.content}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}
