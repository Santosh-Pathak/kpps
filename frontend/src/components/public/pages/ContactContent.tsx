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
import toast from 'react-hot-toast'
import { LeadsAPI } from '@/services/apis/leads.api'
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react'
import { SectionHeading } from '@/components/public/shared/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const schema = z.object({
   name: z.string().min(2, 'Full name is required'),
   phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
   email: z.string().email().optional().or(z.literal('')),
   subject: z.string().min(2, 'Subject is required'),
   message: z.string().min(10, 'Message is too short — please add more detail'),
})

type FormValues = z.infer<typeof schema>

const contacts = [
   { role: 'Manager', value: '+91 00000 00000', icon: Phone, type: 'tel' as const },
   { role: 'Principal', value: '+91 00000 00001', icon: Phone, type: 'tel' as const },
   { role: 'Office', value: '+91 00000 00002', icon: Phone, type: 'tel' as const },
   { role: 'Admission Cell', value: '+91 00000 00003', icon: Phone, type: 'tel' as const },
   { role: 'Transport', value: '+91 00000 00004', icon: Phone, type: 'tel' as const },
   { role: 'Email', value: 'info@kpps.edu.in', icon: Mail, type: 'email' as const },
]

export function ContactContent() {
   const reduced = useReducedMotion()
   const [loading, setLoading] = useState(false)

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<FormValues>({ resolver: zodResolver(schema) })

   const onSubmit = async (data: FormValues) => {
      setLoading(true)
      try {
         await LeadsAPI.createContact(data)
         toast.success("Message sent! We'll respond within 24 hours.")
         reset()
      } catch {
         toast.error('Failed to send. Please call us directly.')
      } finally {
         setLoading(false)
      }
   }

   return (
      <section className="section-pad bg-[var(--sp-bg)]">
         <div className="container-kpps grid gap-12 lg:grid-cols-2">

            {/* ── Contact info ──────────────────────────────────────── */}
            <motion.div
               initial={reduced ? false : { opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={reduced ? { duration: 0 } : { duration: 0.45, ease: 'easeOut' }}
            >
               <SectionHeading
                  eyebrow="Reach Us"
                  title="Get in Touch"
                  align="left"
                  as="h2"
                  className="mb-6"
               />

               <div className="mb-8 space-y-3">
                  {contacts.map((c) => (
                     <div
                        key={c.role}
                        className="flex items-center gap-3 rounded-lg border border-[var(--sp-border)] bg-[var(--sp-bg-alt)] p-3"
                     >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--sp-accent-soft)]">
                           <c.icon className="h-4 w-4 text-[var(--sp-primary)]" aria-hidden="true" />
                        </div>
                        <div>
                           <p className="text-xs font-semibold text-[var(--sp-text-muted)]">{c.role}</p>
                           <a
                              href={c.type === 'email' ? `mailto:${c.value}` : `tel:${c.value.replace(/\s/g, '')}`}
                              className={cn(
                                 'text-sm font-medium text-[var(--sp-text)]',
                                 'transition-colors hover:text-[var(--sp-accent)]',
                                 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm'
                              )}
                           >
                              {c.value}
                           </a>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mb-6 flex items-start gap-3">
                  <MapPin
                     className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sp-accent)]"
                     aria-hidden="true"
                  />
                  <address className="text-sm not-italic leading-relaxed text-[var(--sp-text-muted)]">
                     123 School Road,<br />
                     City, State – 000000
                  </address>
               </div>

               <div className="mb-6 flex items-start gap-3">
                  <Clock
                     className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sp-accent)]"
                     aria-hidden="true"
                  />
                  <div className="text-sm text-[var(--sp-text-muted)]">
                     <p className="font-medium text-[var(--sp-text)]">Office Hours</p>
                     <p>Mon – Sat: 9:00 AM – 3:00 PM</p>
                     <p>Sunday &amp; Holidays: Closed</p>
                  </div>
               </div>

               <div className="overflow-hidden rounded-lg border border-[var(--sp-border)] aspect-video">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345993858!2d144.95373531531614!3d-37.816279742021345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ4JzU4LjYiUyAxNDTCsDU3JzEzLjUiRQ!5e0!3m2!1sen!2sin!4v1234567890"
                     className="h-full w-full"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="School location on Google Maps"
                  />
               </div>
            </motion.div>

            {/* ── Contact form ──────────────────────────────────────── */}
            <motion.div
               initial={reduced ? false : { opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={reduced ? { duration: 0 } : { duration: 0.45, delay: 0.1, ease: 'easeOut' }}
            >
               <SectionHeading
                  eyebrow="Message Us"
                  title="Send a Message"
                  align="left"
                  as="h2"
                  className="mb-6"
               />

               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div className="space-y-1.5">
                     <Label htmlFor="c-name">Full Name <span aria-hidden="true">*</span></Label>
                     <Input
                        id="c-name"
                        {...register('name')}
                        placeholder="Your name"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'c-name-err' : undefined}
                     />
                     {errors.name && (
                        <p id="c-name-err" role="alert" className="text-xs text-red-500 dark:text-red-400">
                           {errors.name.message}
                        </p>
                     )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                     <div className="space-y-1.5">
                        <Label htmlFor="c-phone">Phone <span aria-hidden="true">*</span></Label>
                        <Input
                           id="c-phone"
                           {...register('phone')}
                           type="tel"
                           placeholder="10-digit number"
                           inputMode="tel"
                           aria-required="true"
                           aria-invalid={!!errors.phone}
                           aria-describedby={errors.phone ? 'c-phone-err' : undefined}
                        />
                        {errors.phone && (
                           <p id="c-phone-err" role="alert" className="text-xs text-red-500 dark:text-red-400">
                              {errors.phone.message}
                           </p>
                        )}
                     </div>
                     <div className="space-y-1.5">
                        <Label htmlFor="c-email">Email <span className="font-normal text-[var(--sp-text-muted)]">(optional)</span></Label>
                        <Input
                           id="c-email"
                           {...register('email')}
                           type="email"
                           placeholder="your@email.com"
                           autoComplete="email"
                        />
                     </div>
                  </div>

                  <div className="space-y-1.5">
                     <Label htmlFor="c-subject">Subject <span aria-hidden="true">*</span></Label>
                     <Input
                        id="c-subject"
                        {...register('subject')}
                        placeholder="What is this regarding?"
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'c-subject-err' : undefined}
                     />
                     {errors.subject && (
                        <p id="c-subject-err" role="alert" className="text-xs text-red-500 dark:text-red-400">
                           {errors.subject.message}
                        </p>
                     )}
                  </div>

                  <div className="space-y-1.5">
                     <Label htmlFor="c-message">Message <span aria-hidden="true">*</span></Label>
                     <Textarea
                        id="c-message"
                        {...register('message')}
                        placeholder="Type your message here…"
                        className="resize-none"
                        style={{ minHeight: '8rem' }}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'c-msg-err' : undefined}
                     />
                     {errors.message && (
                        <p id="c-msg-err" role="alert" className="text-xs text-red-500 dark:text-red-400">
                           {errors.message.message}
                        </p>
                     )}
                  </div>

                  <Button
                     type="submit"
                     variant="primary"
                     size="lg"
                     className="w-full"
                     disabled={loading}
                  >
                     {loading ? (
                        <>
                           <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                           Sending…
                        </>
                     ) : (
                        'Send Message'
                     )}
                  </Button>
               </form>
            </motion.div>

         </div>
      </section>
   )
}
