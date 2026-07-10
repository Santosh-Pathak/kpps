'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { CheckCircle2, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { LeadsAPI } from '@/services/apis/leads.api'
import { OrganicBlob } from '@/components/public/shared/OrganicBlob'

const schema = z.object({
   name: z.string().min(2, 'Name must be at least 2 characters'),
   phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
   email: z.string().email().optional().or(z.literal('')),
   classApplying: z.string().optional(),
   message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const classes = [
   'Nursery', 'LKG', 'UKG',
   ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
]

const bullets = [
   'Classes Nursery to XII (Science / Commerce / Arts)',
   'Limited seats — apply early',
   'Scholarships available for meritorious students',
   'Simple 4-step admission process',
]

export function AdmissionCTA() {
   const [loading, setLoading] = useState(false)
   const [submitted, setSubmitted] = useState(false)

   const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>({
      resolver: zodResolver(schema),
   })

   const onSubmit = async (data: FormValues) => {
      setLoading(true)
      try {
         await LeadsAPI.createEnquiry(data)

         // Confetti burst — single celebration moment
         if (typeof window !== 'undefined') {
            const confetti = (await import('canvas-confetti')).default
            confetti({
               particleCount: 80,
               spread: 70,
               origin: { y: 0.7 },
               colors: ['#22C55E', '#D1FAE5', '#0F5132', '#4ADE80', '#ffffff'],
               zIndex: 9999,
            })
         }

         setSubmitted(true)
         reset()
         toast.success("Enquiry submitted! We'll contact you within 24 hours.")
      } catch {
         toast.error('Something went wrong. Please try again or call us directly.')
      } finally {
         setLoading(false)
      }
   }

   return (
      <section id="enquiry" className="relative overflow-hidden bg-[#0F5132] py-16 text-white md:py-24">
         <OrganicBlob className="-top-24 -right-20" size={400} opacity={0.12} />
         <OrganicBlob className="-bottom-20 -left-16" size={320} opacity={0.08} />

         <div className="container-kpps relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
               {/* Left copy */}
               <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#22C55E]">
                     Admissions
                  </p>
                  <h2 className="kpps-h2 font-display mb-4 font-bold text-white">
                     Admissions Open for 2025–26
                  </h2>
                  <p className="mb-7 text-lg leading-relaxed text-white/80">
                     Give your child the best start in life. Fill in the enquiry form and our
                     admissions team will reach out to guide you through the process.
                  </p>
                  <ul className="space-y-3">
                     {bullets.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                           <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E]/20">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#22C55E]" />
                           </span>
                           {item}
                        </li>
                     ))}
                  </ul>
               </motion.div>

               {/* Form */}
               <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm md:p-8"
               >
                  {submitted ? (
                     <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center py-10 text-center"
                     >
                        <CheckCircle2 className="mb-4 h-16 w-16 text-[#22C55E]" />
                        <h3 className="font-display mb-2 text-xl font-bold">Enquiry Submitted!</h3>
                        <p className="text-white/80">Our team will contact you within 24 hours.</p>
                        <button
                           onClick={() => setSubmitted(false)}
                           className="mt-6 text-sm underline opacity-70 hover:opacity-100"
                        >
                           Submit another enquiry
                        </button>
                     </motion.div>
                  ) : (
                     <>
                        <h3 className="font-display mb-6 text-xl font-bold">Quick Enquiry</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                           <div>
                              <Label htmlFor="enq-name" className="text-white/80">
                                 Full Name *
                              </Label>
                              <Input
                                 id="enq-name"
                                 {...register('name')}
                                 placeholder="Your name"
                                 className="mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#22C55E]"
                              />
                              {errors.name && (
                                 <p className="mt-1 text-xs text-red-300">{errors.name.message}</p>
                              )}
                           </div>
                           <div>
                              <Label htmlFor="enq-phone" className="text-white/80">
                                 Mobile Number *
                              </Label>
                              <Input
                                 id="enq-phone"
                                 {...register('phone')}
                                 placeholder="10-digit mobile"
                                 className="mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#22C55E]"
                              />
                              {errors.phone && (
                                 <p className="mt-1 text-xs text-red-300">{errors.phone.message}</p>
                              )}
                           </div>
                           <div>
                              <Label className="text-white/80">Class Applying For</Label>
                              <Select onValueChange={(v) => setValue('classApplying', v)}>
                                 <SelectTrigger className="mt-1 border-white/20 bg-white/10 text-white focus:ring-[#22C55E]">
                                    <SelectValue placeholder="Select class" />
                                 </SelectTrigger>
                                 <SelectContent>
                                    {classes.map((c) => (
                                       <SelectItem key={c} value={c}>
                                          {c}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>
                           </div>
                           <div>
                              <Label htmlFor="enq-msg" className="text-white/80">
                                 Message (optional)
                              </Label>
                              <Textarea
                                 id="enq-msg"
                                 {...register('message')}
                                 placeholder="Any questions or requirements..."
                                 className="mt-1 h-20 resize-none border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#22C55E]"
                              />
                           </div>
                           <motion.button
                              type="submit"
                              disabled={loading}
                              whileHover={{ y: -1, boxShadow: '0 8px 24px rgba(34,197,94,0.35)' }}
                              whileTap={{ scale: 0.98 }}
                              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#22C55E] py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#16a34a] disabled:opacity-70"
                           >
                              {loading ? (
                                 <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Submitting…
                                 </>
                              ) : (
                                 'Submit Enquiry'
                              )}
                           </motion.button>
                        </form>
                     </>
                  )}
               </motion.div>
            </div>
         </div>
      </section>
   )
}
