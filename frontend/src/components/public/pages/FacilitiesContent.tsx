'use client'

import { motion } from 'framer-motion'
import {
   Library,
   Microscope,
   Monitor,
   Trophy,
   Bus,
   Mic,
   Heart,
   UtensilsCrossed,
   Camera,
   Wifi,
} from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const facilities = [
   {
      icon: Library,
      title: 'Library',
      description:
         'Our library houses over 3,000 books across subjects, fiction, and reference sections. Students have access to digital resources, educational magazines, and newspapers. Supervised reading hours are scheduled for all classes.',
   },
   {
      icon: Microscope,
      title: 'Science Laboratories',
      description:
         'Separate, fully-equipped labs for Physics, Chemistry, and Biology. All labs follow CBSE safety standards with proper ventilation, fire extinguishers, and first-aid kits. Regular practicals are conducted for Classes IX–XII.',
   },
   {
      icon: Monitor,
      title: 'Computer Lab',
      description:
         'A 40-node computer lab with the latest hardware and high-speed broadband. Students are taught programming, digital literacy, and MS Office from Class III onwards. AI literacy modules are included for senior classes.',
   },
   {
      icon: Trophy,
      title: 'Sports & Playground',
      description:
         'Sprawling grounds for cricket, football, kabaddi, and athletics. Indoor facilities for basketball, badminton, and table tennis. A full-time Physical Education teacher oversees fitness and sports coaching.',
   },
   {
      icon: Bus,
      title: 'Safe Transport',
      description:
         'A fleet of GPS-tracked school buses covering all major routes. Every bus has trained drivers, a lady attendant, and a first-aid kit. Real-time tracking is available to parents via the school app.',
   },
   {
      icon: Mic,
      title: 'Auditorium',
      description:
         'A 500-seat auditorium with professional stage, lighting, and audio-visual equipment. Used for annual functions, competitions, guest lectures, and school events throughout the year.',
   },
   {
      icon: Heart,
      title: 'Medical Room',
      description:
         'A dedicated medical room staffed by a qualified nurse during school hours. First-aid is always available, and parents are promptly notified of any health concerns.',
   },
   {
      icon: UtensilsCrossed,
      title: 'Cafeteria / Canteen',
      description:
         'A clean, supervised canteen offering nutritious and hygienic meals and snacks. The menu is reviewed by a nutrition consultant to ensure balanced meals for all age groups.',
   },
   {
      icon: Camera,
      title: 'CCTV Surveillance',
      description:
         'The entire campus is covered by 100+ CCTV cameras monitored 24×7 from the security control room. All entry and exit points are secured with controlled access.',
   },
   {
      icon: Wifi,
      title: 'Smart Classrooms',
      description:
         'All classrooms are equipped with interactive digital boards, projectors, and Wi-Fi. Teachers use multimedia content and digital tools to make learning engaging and effective.',
   },
]

export function FacilitiesContent() {
   const reduced = useReducedMotion()

   return (
      <section className="section-pad bg-[var(--sp-bg)]">
         <div className="container-kpps grid grid-cols-1 gap-5 md:grid-cols-2">
            {facilities.map((f) => (
               <motion.div
                  key={f.title}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className={cn(
                     'flex gap-5 rounded-lg border border-[var(--sp-border)] bg-[var(--sp-bg-alt)] p-6',
                     'shadow-[var(--shadow-card,0_2px_16px_rgba(15,81,50,0.06))]',
                     'transition-shadow duration-200',
                     'hover:shadow-[var(--shadow-elevated,0_8px_32px_rgba(15,81,50,0.12))]'
                  )}
               >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[var(--sp-accent-soft)]">
                     <f.icon className="h-6 w-6 text-[var(--sp-primary)]" aria-hidden="true" />
                  </div>
                  <div>
                     <h3 className="font-display mb-2 text-base font-bold text-[var(--sp-text)]">
                        {f.title}
                     </h3>
                     <p className="text-sm leading-relaxed text-[var(--sp-text-muted)]">
                        {f.description}
                     </p>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>
   )
}
