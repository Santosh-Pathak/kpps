'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
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
import toast from 'react-hot-toast'
import { LeadsAPI } from '@/services/apis/leads.api'

const schema = z.object({
   name: z.string().min(2, 'Name must be at least 2 characters'),
   phone: z
      .string()
      .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
   email: z.string().email().optional().or(z.literal('')),
   classApplying: z.string().optional(),
   message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const classes = [
   'Nursery',
   'LKG',
   'UKG',
   ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
]

export function AdmissionCTA() {
   const [loading, setLoading] = useState(false)
   const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
   } = useForm<FormValues>({
      resolver: zodResolver(schema),
   })

   const onSubmit = async (data: FormValues) => {
      setLoading(true)
      try {
         await LeadsAPI.createEnquiry(data)
         toast.success("Enquiry submitted!: We'll contact you within 24 hours.")
         reset()
      } catch {
         toast.error(
            'Something went wrong: Please try again or call us directly.'
         )
      } finally {
         setLoading(false)
      }
   }

   return (
      <section id="enquiry" className="section-pad bg-navy text-white">
         <div className="container-kpps">
            <div className="grid items-center gap-12 lg:grid-cols-2">
               {/* Left copy */}
               <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <p className="text-secondary mb-2 text-sm font-semibold tracking-widest uppercase">
                     Admissions
                  </p>
                  <h2 className="font-heading mb-4 text-3xl font-bold text-white md:text-4xl">
                     Admissions Open for 2025–26
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-white/80">
                     Give your child the best start in life. Fill in the enquiry
                     form and our admissions team will reach out to guide you
                     through the process.
                  </p>
                  <ul className="space-y-3 text-white/80">
                     {[
                        'Classes Nursery to XII (Science / Commerce / Arts)',
                        'Limited seats — apply early',
                        'Scholarships available for meritorious students',
                        'Simple 4-step admission process',
                     ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                           <span className="bg-secondary/30 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                              <svg
                                 className="text-secondary h-3 w-3"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                 />
                              </svg>
                           </span>
                           <span className="text-sm">{item}</span>
                        </li>
                     ))}
                  </ul>
               </motion.div>

               {/* Form */}
               <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm md:p-8"
               >
                  <h3 className="font-heading mb-6 text-xl font-bold text-white">
                     Quick Enquiry
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                     <div>
                        <Label htmlFor="enq-name" className="text-white/80">
                           Full Name *
                        </Label>
                        <Input
                           id="enq-name"
                           {...register('name')}
                           placeholder="Your name"
                           className="focus-visible:ring-secondary mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/40"
                        />
                        {errors.name && (
                           <p className="mt-1 text-xs text-red-300">
                              {errors.name.message}
                           </p>
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
                           className="focus-visible:ring-secondary mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/40"
                        />
                        {errors.phone && (
                           <p className="mt-1 text-xs text-red-300">
                              {errors.phone.message}
                           </p>
                        )}
                     </div>
                     <div>
                        <Label className="text-white/80">
                           Class Applying For
                        </Label>
                        <Select
                           onValueChange={(v) => setValue('classApplying', v)}
                        >
                           <SelectTrigger className="mt-1 border-white/20 bg-white/10 text-white">
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
                           placeholder="Any questions or specific requirements..."
                           className="focus-visible:ring-secondary mt-1 h-20 resize-none border-white/20 bg-white/10 text-white placeholder:text-white/40"
                        />
                     </div>
                     <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className="w-full"
                        disabled={loading}
                     >
                        {loading ? 'Submitting…' : 'Submit Enquiry'}
                     </Button>
                  </form>
               </motion.div>
            </div>
         </div>
      </section>
   )
}
