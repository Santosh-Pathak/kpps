'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const stages = [
   {
      title: 'Pre-Primary (Nursery – KG)',
      subjects: [
         'Language & Literacy (English / Hindi)',
         'Number Readiness',
         'Environmental Awareness',
         'Art & Craft',
         'Music & Movement',
      ],
      method:
         'Play-based, activity-centred learning through songs, stories, and sensory exploration.',
   },
   {
      title: 'Primary (Class I – V)',
      subjects: [
         'English',
         'Hindi / Sanskrit',
         'Mathematics',
         'Environmental Science (EVS)',
         'Computer Science',
         'General Knowledge',
         'Art & Craft',
         'Physical Education',
      ],
      method:
         'Experiential learning with classroom activities, project work, and formative assessment.',
   },
   {
      title: 'Middle School (Class VI – VIII)',
      subjects: [
         'English',
         'Hindi / Sanskrit',
         'Mathematics',
         'Science',
         'Social Science',
         'Computer Science',
         'Art & Craft',
         'Physical Education',
      ],
      method:
         'Concept-based teaching, lab practicals, group projects, and CBSE-aligned periodic tests.',
   },
   {
      title: 'Secondary (Class IX – X)',
      subjects: [
         'English (Core)',
         'Hindi / Sanskrit',
         'Mathematics / Standard / Basic',
         'Science (Physics, Chemistry, Biology)',
         'Social Science',
         'Computer Applications / AI',
      ],
      method:
         'Board-oriented coaching with half-yearly exams, sample papers, and doubt-clearing sessions.',
   },
   {
      title: 'Senior Secondary (Class XI – XII)',
      subjects: [],
      streams: [
         {
            name: 'Science — Medical',
            subjects: ['Physics', 'Chemistry', 'Biology', 'English Core', '+ Math / Computer / PE'],
         },
         {
            name: 'Science — Non-Medical',
            subjects: ['Physics', 'Chemistry', 'Mathematics', 'English Core', '+ CS / PE'],
         },
         {
            name: 'Commerce',
            subjects: ['Accountancy', 'Business Studies', 'Economics', 'English Core', '+ Math / IP'],
         },
         {
            name: 'Arts / Humanities',
            subjects: [
               'History',
               'Geography',
               'Political Science',
               'English Core',
               '+ Sociology / Psychology',
            ],
         },
      ],
      method:
         'Specialized stream teaching with career counselling, board mock tests, and university application guidance.',
   },
]

export function AcademicsContent() {
   const reduced = useReducedMotion()

   return (
      <section className="section-pad bg-[var(--sp-bg)]">
         <div className="container-kpps space-y-6">
            {stages.map((stage) => (
               <motion.div
                  key={stage.title}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className={cn(
                     'rounded-lg border border-[var(--sp-border)] bg-[var(--sp-bg-alt)] p-6 md:p-8',
                     'shadow-[var(--shadow-card,0_2px_16px_rgba(15,81,50,0.06))]'
                  )}
               >
                  <h2 className="font-display mb-1 text-xl font-bold text-[var(--sp-text)] md:text-2xl">
                     {stage.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--sp-text-muted)]">
                     {stage.method}
                  </p>

                  {stage.streams ? (
                     <div className="grid gap-4 sm:grid-cols-2">
                        {stage.streams.map((s) => (
                           <div
                              key={s.name}
                              className="rounded-lg border border-[var(--sp-border)] bg-[var(--sp-bg)] p-4"
                           >
                              <p className="mb-2 text-sm font-semibold text-[var(--sp-primary)]">
                                 {s.name}
                              </p>
                              <ul className="space-y-1">
                                 {s.subjects.map((sub) => (
                                    <li
                                       key={sub}
                                       className="flex items-center gap-1.5 text-xs text-[var(--sp-text-muted)]"
                                    >
                                       <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--sp-accent)]" />
                                       {sub}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                        {stage.subjects.map((sub) => (
                           <li
                              key={sub}
                              className="flex items-center gap-2 text-sm text-[var(--sp-text-muted)]"
                           >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sp-accent)]" />
                              {sub}
                           </li>
                        ))}
                     </ul>
                  )}
               </motion.div>
            ))}
         </div>
      </section>
   )
}
