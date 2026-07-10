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
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const schema = z.object({
   name: z.string().min(2, 'Name required'),
   phone: z.string().regex(/^[6-9]\d{9}$/, 'Valid 10-digit number required'),
   email: z.string().email().optional().or(z.literal('')),
   subject: z.string().min(2, 'Subject required'),
   message: z.string().min(10, 'Message too short'),
})

type FormValues = z.infer<typeof schema>

const contacts = [
   { role: 'Manager', phone: '+91 00000 00000', icon: Phone },
   { role: 'Principal', phone: '+91 00000 00001', icon: Phone },
   { role: 'Office', phone: '+91 00000 00002', icon: Phone },
   { role: 'Admission Cell', phone: '+91 00000 00003', icon: Phone },
   { role: 'Transport', phone: '+91 00000 00004', icon: Phone },
   { role: 'Email', phone: 'info@kpps.edu.in', icon: Mail },
]

export function ContactContent() {
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
         toast.success("Message sent!: We'll respond within 24 hours.")
         reset()
      } catch {
         toast.error('Failed to send: Please call us directly.')
      } finally {
         setLoading(false)
      }
   }

   return (
      <section className="section-pad">
         <div className="container-kpps grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="font-heading mb-6 text-2xl font-bold">
                  Get in Touch
               </h2>

               <div className="mb-8 space-y-3">
                  {contacts.map((c) => (
                     <div
                        key={c.role}
                        className="bg-muted/50 flex items-center gap-3 rounded-xl p-3"
                     >
                        <div className="bg-navy/10 dark:bg-secondary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                           <c.icon className="text-navy dark:text-secondary h-4 w-4" />
                        </div>
                        <div>
                           <p className="text-muted-foreground text-xs font-semibold">
                              {c.role}
                           </p>
                           {c.role === 'Email' ? (
                              <a
                                 href={`mailto:${c.phone}`}
                                 className="hover:text-primary text-sm font-medium"
                              >
                                 {c.phone}
                              </a>
                           ) : (
                              <a
                                 href={`tel:${c.phone.replace(/\s/g, '')}`}
                                 className="hover:text-primary text-sm font-medium"
                              >
                                 {c.phone}
                              </a>
                           )}
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mb-6 flex items-start gap-3">
                  <MapPin className="text-navy dark:text-secondary mt-0.5 h-5 w-5 shrink-0" />
                  <address className="text-muted-foreground text-sm not-italic">
                     123 School Road,
                     <br />
                     City, State – 000000
                  </address>
               </div>

               <div className="flex items-start gap-3">
                  <Clock className="text-navy dark:text-secondary mt-0.5 h-5 w-5 shrink-0" />
                  <div className="text-muted-foreground text-sm">
                     <p className="text-foreground font-medium">Office Hours</p>
                     <p>Mon – Sat: 9:00 AM – 3:00 PM</p>
                     <p>Sunday & Holidays: Closed</p>
                  </div>
               </div>

               {/* Map */}
               <div className="border-border mt-6 aspect-video overflow-hidden rounded-xl border">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345993858!2d144.95373531531614!3d-37.816279742021345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ4JzU4LjYiUyAxNDTCsDU3JzEzLjUiRQ!5e0!3m2!1sen!2sin!4v1234567890"
                     className="h-full w-full"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="School location"
                  />
               </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="font-heading mb-6 text-2xl font-bold">
                  Send a Message
               </h2>
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                     <Label htmlFor="c-name">Full Name *</Label>
                     <Input
                        id="c-name"
                        {...register('name')}
                        placeholder="Your name"
                        className="mt-1"
                     />
                     {errors.name && (
                        <p className="text-destructive mt-1 text-xs">
                           {errors.name.message}
                        </p>
                     )}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                     <div>
                        <Label htmlFor="c-phone">Phone *</Label>
                        <Input
                           id="c-phone"
                           {...register('phone')}
                           placeholder="Mobile number"
                           className="mt-1"
                        />
                        {errors.phone && (
                           <p className="text-destructive mt-1 text-xs">
                              {errors.phone.message}
                           </p>
                        )}
                     </div>
                     <div>
                        <Label htmlFor="c-email">Email</Label>
                        <Input
                           id="c-email"
                           {...register('email')}
                           type="email"
                           placeholder="Optional"
                           className="mt-1"
                        />
                     </div>
                  </div>
                  <div>
                     <Label htmlFor="c-subject">Subject *</Label>
                     <Input
                        id="c-subject"
                        {...register('subject')}
                        placeholder="What is this regarding?"
                        className="mt-1"
                     />
                     {errors.subject && (
                        <p className="text-destructive mt-1 text-xs">
                           {errors.subject.message}
                        </p>
                     )}
                  </div>
                  <div>
                     <Label htmlFor="c-message">Message *</Label>
                     <Textarea
                        id="c-message"
                        {...register('message')}
                        placeholder="Type your message here..."
                        className="mt-1 h-32 resize-none"
                     />
                     {errors.message && (
                        <p className="text-destructive mt-1 text-xs">
                           {errors.message.message}
                        </p>
                     )}
                  </div>
                  <Button
                     type="submit"
                     size="lg"
                     className="w-full"
                     disabled={loading}
                  >
                     {loading ? 'Sending…' : 'Send Message'}
                  </Button>
               </form>
            </motion.div>
         </div>
      </section>
   )
}
