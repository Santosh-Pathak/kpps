'use client'

import { motion } from 'framer-motion'
import { FileText, UserCheck, BookOpen, CheckCircle, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/public/shared/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const steps = [
   {
      icon: FileText,
      num: '01',
      title: 'Fill Enquiry Form',
      desc: 'Submit the online enquiry form or visit our office.',
   },
   {
      icon: FileText,
      num: '02',
      title: 'Document Submission',
      desc: 'Submit required documents (Birth Certificate, TC, Mark Sheet).',
   },
   {
      icon: BookOpen,
      num: '03',
      title: 'Interaction / Assessment',
      desc: 'Brief interaction with the child and parents.',
   },
   {
      icon: CheckCircle,
      num: '04',
      title: 'Confirmation & Fee',
      desc: 'Receive admission confirmation and pay the fee.',
   },
]

const eligibility = [
   ['Nursery', '3 years as of 31st March', 'Birth Certificate'],
   ['LKG', '4 years as of 31st March', 'Birth Certificate'],
   ['UKG', '5 years as of 31st March', 'Birth Certificate'],
   ['Class I', '6 years as of 31st March', 'Birth Certificate + UKG TC'],
   ['Class II – VIII', 'Age appropriate', 'TC from previous school + Mark Sheet'],
   ['Class IX', 'Passed Class VIII', 'TC + Class VIII Marksheet'],
   ['Class X', 'Passed Class IX', 'TC + Class IX Marksheet'],
   ['Class XI', 'Passed Class X', 'TC + Class X Board Marksheet'],
]

const documents = [
   'Birth Certificate (original + photocopy)',
   'Transfer Certificate (TC) from previous school',
   'Report Card / Mark Sheet (previous class)',
   'Aadhar Card of student & parent',
   'Passport size photographs (4)',
   'Address proof',
   'Caste / Category certificate (if applicable)',
   'Medical certificate (if required)',
]

export function AdmissionsContent() {
   const reduced = useReducedMotion()

   return (
      <section className="section-pad bg-[var(--sp-bg)]">
         <div className="container-kpps space-y-16">

            {/* ── 4-Step Process ─────────────────────────────────────── */}
            <div>
               <SectionHeading
                  eyebrow="Process"
                  title="4-Step Admission Process"
                  align="left"
                  className="mb-8"
               />

               {/* 4 steps: stagger kept because this IS a genuine ordered sequence */}
               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {steps.map((s, i) => (
                     <motion.div
                        key={s.num}
                        initial={reduced ? false : { opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={
                           reduced ? { duration: 0 } : { duration: 0.45, delay: i * 0.07, ease: 'easeOut' }
                        }
                        className={cn(
                           'relative rounded-lg border border-[var(--sp-border)] bg-[var(--sp-bg-alt)] p-6 text-center',
                           'shadow-[var(--shadow-card,0_2px_16px_rgba(15,81,50,0.06))]'
                        )}
                     >
                        {/* Step number badge */}
                        <div className="absolute -top-3.5 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--sp-accent)] text-xs font-bold text-white">
                           {s.num}
                        </div>
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-[var(--sp-accent-soft)]">
                           <s.icon className="h-6 w-6 text-[var(--sp-primary)]" aria-hidden="true" />
                        </div>
                        <h3 className="font-display mb-1 text-sm font-semibold text-[var(--sp-text)]">
                           {s.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-[var(--sp-text-muted)]">{s.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* ── Eligibility Table ──────────────────────────────────── */}
            <div>
               <SectionHeading
                  eyebrow="Eligibility"
                  title="Age & Class Criteria"
                  align="left"
                  className="mb-6"
               />

               <div className="overflow-x-auto rounded-lg border border-[var(--sp-border)]">
                  <table className="w-full text-sm">
                     <thead className="bg-[var(--sp-primary)] text-white">
                        <tr>
                           <th className="px-4 py-3 text-left font-semibold">Class</th>
                           <th className="px-4 py-3 text-left font-semibold">Age Criteria</th>
                           <th className="px-4 py-3 text-left font-semibold">Documents Required</th>
                        </tr>
                     </thead>
                     <tbody>
                        {eligibility.map(([cls, age, docs], i) => (
                           <tr
                              key={cls}
                              className={i % 2 === 0 ? 'bg-[var(--sp-bg)]' : 'bg-[var(--sp-bg-alt)]'}
                           >
                              <td className="px-4 py-3 font-medium text-[var(--sp-text)]">{cls}</td>
                              <td className="px-4 py-3 text-[var(--sp-text-muted)]">{age}</td>
                              <td className="px-4 py-3 text-[var(--sp-text-muted)]">{docs}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* ── Documents + Download ───────────────────────────────── */}
            <div className="grid gap-10 md:grid-cols-2">
               <div>
                  <SectionHeading
                     eyebrow="Checklist"
                     title="Required Documents"
                     align="left"
                     className="mb-6"
                  />
                  <ul className="space-y-2">
                     {documents.map((doc) => (
                        <li key={doc} className="flex items-start gap-2.5 text-sm text-[var(--sp-text-muted)]">
                           <UserCheck
                              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sp-accent)]"
                              aria-hidden="true"
                           />
                           {doc}
                        </li>
                     ))}
                  </ul>
               </div>

               <motion.div
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reduced ? { duration: 0 } : { duration: 0.45, ease: 'easeOut' }}
                  className="flex flex-col justify-between rounded-lg bg-[var(--sp-primary)] p-8 text-white shadow-[var(--shadow-elevated,0_8px_32px_rgba(15,81,50,0.18))]"
               >
                  <div>
                     <h3 className="font-display mb-3 text-xl font-bold text-white">
                        Admission Form
                     </h3>
                     <p className="mb-6 text-sm leading-relaxed text-white/80">
                        Download the official KPPS Admission Form, fill it out, and submit it along
                        with the required documents.
                     </p>
                  </div>
                  <div className="space-y-3">
                     <Button variant="accent" size="lg" className="w-full">
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Download Admission Form (PDF)
                     </Button>
                     <p className="text-center text-xs text-white/50">
                        Or visit the school office between 9 AM – 2 PM
                     </p>
                  </div>
               </motion.div>
            </div>

         </div>
      </section>
   )
}
