'use client'

import { motion } from 'framer-motion'
import {
   FileText,
   UserCheck,
   BookOpen,
   CheckCircle,
   Download,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

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
   [
      'Class II – VIII',
      'Age appropriate',
      'TC from previous school + Mark Sheet',
   ],
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
   return (
      <section className="section-pad">
         <div className="container-kpps space-y-16">
            {/* Process */}
            <div>
               <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
               >
                  <p className="text-secondary mb-1 text-sm font-semibold tracking-widest uppercase">
                     Process
                  </p>
                  <h2 className="font-heading text-2xl font-bold md:text-3xl">
                     4-Step Admission Process
                  </h2>
               </motion.div>
               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {steps.map((s, i) => (
                     <motion.div
                        key={s.num}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-muted/50 relative rounded-xl p-6 text-center"
                     >
                        <div className="bg-secondary text-navy absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full text-xs font-bold">
                           {s.num}
                        </div>
                        <div className="bg-navy/10 dark:bg-secondary/20 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl">
                           <s.icon className="text-navy dark:text-secondary h-6 w-6" />
                        </div>
                        <h3 className="font-heading mb-1 text-sm font-semibold">
                           {s.title}
                        </h3>
                        <p className="text-muted-foreground text-xs">
                           {s.desc}
                        </p>
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* Eligibility */}
            <div>
               <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6"
               >
                  <p className="text-secondary mb-1 text-sm font-semibold tracking-widest uppercase">
                     Eligibility
                  </p>
                  <h2 className="font-heading text-2xl font-bold md:text-3xl">
                     Age & Class Criteria
                  </h2>
               </motion.div>
               <div className="border-border overflow-x-auto rounded-xl border">
                  <table className="w-full text-sm">
                     <thead className="bg-navy text-white">
                        <tr>
                           <th className="px-4 py-3 text-left font-semibold">
                              Class
                           </th>
                           <th className="px-4 py-3 text-left font-semibold">
                              Age Criteria
                           </th>
                           <th className="px-4 py-3 text-left font-semibold">
                              Documents Required
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {eligibility.map(([cls, age, docs], i) => (
                           <tr
                              key={cls}
                              className={
                                 i % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                              }
                           >
                              <td className="px-4 py-3 font-medium">{cls}</td>
                              <td className="text-muted-foreground px-4 py-3">
                                 {age}
                              </td>
                              <td className="text-muted-foreground px-4 py-3">
                                 {docs}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Documents + Download */}
            <div className="grid gap-10 md:grid-cols-2">
               <div>
                  <motion.div
                     initial={{ opacity: 0, y: 16 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="mb-6"
                  >
                     <p className="text-secondary mb-1 text-sm font-semibold tracking-widest uppercase">
                        Checklist
                     </p>
                     <h2 className="font-heading text-2xl font-bold">
                        Required Documents
                     </h2>
                  </motion.div>
                  <ul className="space-y-2">
                     {documents.map((doc) => (
                        <li
                           key={doc}
                           className="flex items-start gap-2.5 text-sm"
                        >
                           <UserCheck className="text-secondary mt-0.5 h-4 w-4 shrink-0" />
                           {doc}
                        </li>
                     ))}
                  </ul>
               </div>

               <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-navy flex flex-col justify-between rounded-2xl p-8 text-white"
               >
                  <div>
                     <h3 className="font-heading mb-3 text-xl font-bold text-white">
                        Admission Form
                     </h3>
                     <p className="mb-6 text-sm text-white/80">
                        Download the official KPPS Admission Form, fill it out,
                        and submit it along with the required documents.
                     </p>
                  </div>
                  <div className="space-y-3">
                     <Button variant="cta" size="lg" className="w-full">
                        <Download className="h-4 w-4" />
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
