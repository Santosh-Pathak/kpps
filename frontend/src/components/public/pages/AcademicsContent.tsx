'use client'

import { motion } from 'framer-motion'

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
            subjects: [
               'Physics',
               'Chemistry',
               'Biology',
               'English Core',
               '+ Math / Computer / PE',
            ],
         },
         {
            name: 'Science — Non-Medical',
            subjects: [
               'Physics',
               'Chemistry',
               'Mathematics',
               'English Core',
               '+ CS / PE',
            ],
         },
         {
            name: 'Commerce',
            subjects: [
               'Accountancy',
               'Business Studies',
               'Economics',
               'English Core',
               '+ Math / IP',
            ],
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
   return (
      <section className="section-pad">
         <div className="container-kpps space-y-10">
            {stages.map((stage, i) => (
               <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-muted/40 rounded-2xl p-6 md:p-8"
               >
                  <h2 className="font-heading mb-1 text-xl font-bold md:text-2xl">
                     {stage.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm">
                     {stage.method}
                  </p>

                  {stage.streams ? (
                     <div className="grid gap-4 sm:grid-cols-2">
                        {stage.streams.map((s) => (
                           <div
                              key={s.name}
                              className="bg-background border-border rounded-xl border p-4"
                           >
                              <p className="text-navy dark:text-secondary mb-2 text-sm font-semibold">
                                 {s.name}
                              </p>
                              <ul className="space-y-1">
                                 {s.subjects.map((sub) => (
                                    <li
                                       key={sub}
                                       className="text-muted-foreground flex items-center gap-1.5 text-xs"
                                    >
                                       <span className="bg-secondary h-1 w-1 rounded-full" />{' '}
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
                              className="text-muted-foreground flex items-center gap-2 text-sm"
                           >
                              <span className="bg-secondary h-1.5 w-1.5 shrink-0 rounded-full" />
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
