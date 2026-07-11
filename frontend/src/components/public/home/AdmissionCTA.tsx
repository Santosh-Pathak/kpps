'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { CheckCircle2, Loader2, Phone } from 'lucide-react'
import toast from 'react-hot-toast'
import { LeadsAPI } from '@/services/apis/leads.api'
import { OrganicBlob } from '@/components/public/shared/OrganicBlob'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const schema = z.object({
   name: z.string().min(2, 'Name must be at least 2 characters'),
   phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
   email: z.string().email('Enter a valid email').optional().or(z.literal('')),
   classApplying: z.string().optional(),
   message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const classes = [
   'Nursery', 'LKG', 'UKG',
   ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
]

const bullets = [
   'Classes Nursery to XII — Science, Commerce & Arts',
   'Limited seats available — apply early to secure your spot',
   'Scholarships for meritorious students',
   'Simple 4-step admission process, guided by our team',
]

export function AdmissionCTA() {
   const [loading, setLoading] = useState(false)
   const [submitted, setSubmitted] = useState(false)
   const reduced = useReducedMotion()

   const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
   } = useForm<FormValues>({ resolver: zodResolver(schema) })

   const onSubmit = async (data: FormValues) => {
      setLoading(true)
      try {
         await LeadsAPI.createEnquiry(data)
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
      <section
         id="enquiry"
         className="relative overflow-hidden bg-[var(--sp-primary)] py-16 text-white md:py-24"
      >
         <OrganicBlob className="-top-24 -right-20" size={400} opacity={0.10} />
         <OrganicBlob className="-bottom-20 -left-16" size={320} opacity={0.07} />

         <div className="container-kpps relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">

               {/* ── Left: copy ────────────────────────────────────────────── */}
               <motion.div
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reduced ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }}
               >
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--sp-accent)]">
                     Admissions
                  </p>
                  <h2 className="kpps-h2 font-display mb-4 font-bold text-white">
                     Admissions Open for {new Date().getFullYear()}–{String(new Date().getFullYear() + 1).slice(-2)}
                  </h2>
                  <p className="mb-7 text-lg leading-relaxed text-white/80">
                     Give your child the best start in life. Fill in the enquiry form and our
                     admissions team will reach out to guide you through the process.
                  </p>
                  <ul className="space-y-3" aria-label="Admission highlights">
                     {bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                           <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sp-accent)]"
                              aria-hidden="true"
                           />
                           {item}
                        </li>
                     ))}
                  </ul>
               </motion.div>

               {/* ── Right: form ───────────────────────────────────────────── */}
               <motion.div
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reduced ? { duration: 0 } : { duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                  className="rounded-lg bg-white/10 p-6 backdrop-blur-sm md:p-8"
               >
                  {submitted ? (
                     <SuccessState onReset={() => setSubmitted(false)} />
                  ) : (
                     <>
                        <h3 className="font-display mb-6 text-xl font-bold">Quick Enquiry</h3>
                        <form
                           onSubmit={handleSubmit(onSubmit)}
                           className="space-y-4"
                           noValidate
                        >
                           {/* Name */}
                           <div className="space-y-1.5">
                              <Label htmlFor="enq-name" className="text-white/90">
                                 Full Name <span aria-hidden="true">*</span>
                              </Label>
                              <Input
                                 id="enq-name"
                                 {...register('name')}
                                 placeholder="Your full name"
                                 autoComplete="name"
                                 aria-required="true"
                                 aria-invalid={!!errors.name}
                                 aria-describedby={errors.name ? 'enq-name-err' : undefined}
                                 className="border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-[var(--sp-accent)]"
                              />
                              {errors.name && (
                                 <p id="enq-name-err" role="alert" className="text-xs text-red-300">
                                    {errors.name.message}
                                 </p>
                              )}
                           </div>

                           {/* Phone */}
                           <div className="space-y-1.5">
                              <Label htmlFor="enq-phone" className="text-white/90">
                                 Mobile Number <span aria-hidden="true">*</span>
                              </Label>
                              <Input
                                 id="enq-phone"
                                 {...register('phone')}
                                 type="tel"
                                 placeholder="10-digit mobile number"
                                 autoComplete="tel"
                                 inputMode="tel"
                                 aria-required="true"
                                 aria-invalid={!!errors.phone}
                                 aria-describedby={errors.phone ? 'enq-phone-err' : undefined}
                                 className="border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-[var(--sp-accent)]"
                              />
                              {errors.phone && (
                                 <p id="enq-phone-err" role="alert" className="text-xs text-red-300">
                                    {errors.phone.message}
                                 </p>
                              )}
                           </div>

                           {/* Class */}
                           <div className="space-y-1.5">
                              <Label className="text-white/90">Class Applying For</Label>
                              <Select onValueChange={(v) => setValue('classApplying', v)}>
                                 <SelectTrigger className="border-white/20 bg-white/10 text-white focus:ring-[var(--sp-accent)]">
                                    <SelectValue placeholder="Select a class" />
                                 </SelectTrigger>
                                 <SelectContent>
                                    {classes.map((c) => (
                                       <SelectItem key={c} value={c}>{c}</SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>
                           </div>

                           {/* Message */}
                           <div className="space-y-1.5">
                              <Label htmlFor="enq-msg" className="text-white/90">
                                 Message <span className="font-normal opacity-60">(optional)</span>
                              </Label>
                              <Textarea
                                 id="enq-msg"
                                 {...register('message')}
                                 placeholder="Any questions or requirements…"
                                 className="resize-none border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-[var(--sp-accent)]"
                                 style={{ minHeight: '5rem' }}
                              />
                           </div>

                           <Button
                              type="submit"
                              disabled={loading}
                              variant="accent"
                              size="lg"
                              className="w-full"
                           >
                              {loading ? (
                                 <>
                                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                                    Submitting…
                                 </>
                              ) : (
                                 'Submit Enquiry'
                              )}
                           </Button>
                        </form>
                     </>
                  )}
               </motion.div>
            </div>
         </div>
      </section>
   )
}

// ── Calm green success state — no confetti, no gold, just clarity ─────────────
function SuccessState({ onReset }: { onReset: () => void }) {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.96 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.35, ease: 'easeOut' }}
         className="flex flex-col items-center py-10 text-center"
      >
         {/* Icon ring — composed in green, calm and assured */}
         <div
            className={cn(
               'mb-5 flex h-20 w-20 items-center justify-center rounded-full',
               'bg-[var(--sp-accent)]/20 ring-4 ring-[var(--sp-accent)]/30'
            )}
         >
            <CheckCircle2 className="h-10 w-10 text-[var(--sp-accent)]" aria-hidden="true" />
         </div>

         <h3 className="font-display mb-2 text-xl font-bold text-white">
            Enquiry Submitted
         </h3>
         <p className="mb-2 text-white/80">
            Our admissions team will call you within <strong>24 hours</strong>.
         </p>
         <p className="mb-6 flex items-center gap-1.5 text-sm text-white/60">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            You can also reach us directly at any time.
         </p>

         <button
            onClick={onReset}
            className={cn(
               'text-sm text-white/60 underline underline-offset-4',
               'transition-colors hover:text-white',
               'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)] focus-visible:rounded'
            )}
         >
            Submit another enquiry
         </button>
      </motion.div>
   )
}
