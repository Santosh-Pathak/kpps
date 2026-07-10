'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
   {
      name: 'Priya Sharma',
      role: 'Parent — Class IX',
      quote: "KPPS has been a transformative experience for my daughter. The teachers genuinely care about every child's progress.",
   },
   {
      name: 'Rahul Verma',
      role: 'Alumni 2023',
      quote: 'The foundation built at KPPS helped me score 97% in boards and secure admission in a top engineering college.',
   },
   {
      name: 'Meena Gupta',
      role: 'Parent — Class VI',
      quote: 'The smart classrooms and activity-based learning have made my son love going to school every morning.',
   },
]

export function TestimonialsSection() {
   return (
      <section className="section-pad bg-muted/30">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12 text-center"
            >
               <p className="text-secondary mb-2 text-sm font-semibold tracking-widest uppercase">
                  Testimonials
               </p>
               <h2 className="font-heading mb-3 text-3xl font-bold md:text-4xl">
                  What Parents & Alumni Say
               </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
               {testimonials.map((t, i) => (
                  <motion.div
                     key={t.name}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-background border-border rounded-2xl border p-6 shadow-sm"
                  >
                     <Quote className="text-secondary/40 mb-4 h-8 w-8" />
                     <p className="text-muted-foreground mb-6 leading-relaxed italic">
                        &ldquo;{t.quote}&rdquo;
                     </p>
                     <div className="flex items-center gap-3">
                        <div className="bg-navy/10 font-heading text-navy flex h-10 w-10 items-center justify-center rounded-full font-bold">
                           {t.name[0]}
                        </div>
                        <div>
                           <p className="text-sm font-semibold">{t.name}</p>
                           <p className="text-muted-foreground text-xs">
                              {t.role}
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}
