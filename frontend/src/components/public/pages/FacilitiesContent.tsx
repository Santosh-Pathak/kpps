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
   return (
      <section className="section-pad">
         <div className="container-kpps grid grid-cols-1 gap-6 md:grid-cols-2">
            {facilities.map((f, i) => (
               <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 2) * 0.1 }}
                  className="bg-muted/50 flex gap-5 rounded-xl p-6 transition-shadow hover:shadow-md"
               >
                  <div className="bg-navy/10 dark:bg-secondary/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                     <f.icon className="text-navy dark:text-secondary h-6 w-6" />
                  </div>
                  <div>
                     <h3 className="font-heading mb-2 text-base font-bold">
                        {f.title}
                     </h3>
                     <p className="text-muted-foreground text-sm leading-relaxed">
                        {f.description}
                     </p>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>
   )
}
