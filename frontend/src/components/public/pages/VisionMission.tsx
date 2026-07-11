'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Heart } from 'lucide-react'
import { SectionHeading } from '@/components/public/shared/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const cards = [
   {
      icon: Eye,
      title: 'Our Vision',
      content:
         'To be a centre of excellence that nurtures academically strong, culturally rooted, and globally aware citizens who contribute positively to society.',
   },
   {
      icon: Target,
      title: 'Our Mission',
      content:
         'To provide a safe, stimulating, and inclusive learning environment that fosters intellectual curiosity, moral integrity, and a lifelong love for learning in every student.',
   },
   {
      icon: Heart,
      title: 'Our Values',
      content:
         'Integrity, empathy, excellence, inclusion, and innovation. We believe every child is gifted, and our role is to discover and nurture that gift.',
   },
]

export function VisionMission() {
   const reduced = useReducedMotion()

   return (
      <section className="section-pad bg-[var(--sp-bg)]">
         <div className="container-kpps">
            <SectionHeading
               eyebrow="What We Stand For"
               title="Vision, Mission & Values"
               description="The principles that guide everything we do at KPPS."
               className="mb-12"
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
               {cards.map((card, i) => (
                  <motion.div
                     key={card.title}
                     initial={reduced ? false : { opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
                     className={cn(
                        'rounded-lg border border-[var(--sp-border)] bg-[var(--sp-bg-alt)] p-6',
                        'shadow-[var(--shadow-card,0_2px_16px_rgba(15,81,50,0.06))]'
                     )}
                  >
                     <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[var(--sp-accent-soft)]">
                        <card.icon className="h-6 w-6 text-[var(--sp-primary)]" aria-hidden="true" />
                     </div>
                     <h3 className="font-display mb-3 text-xl font-bold text-[var(--sp-text)]">
                        {card.title}
                     </h3>
                     <p className="leading-relaxed text-[var(--sp-text-muted)]">{card.content}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}
