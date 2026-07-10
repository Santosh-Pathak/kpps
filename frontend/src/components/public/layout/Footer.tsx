'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react'
import { Logo } from '@/components/public/shared/Logo'
import { schoolInfo, footerQuickLinks, footerContact } from '@/lib/dummy-data'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
   const [open, setOpen] = useState(false)
   return (
      <div className="border-b border-white/10 md:border-none">
         <button
            className="flex w-full items-center justify-between py-3 text-sm font-semibold text-white md:cursor-default md:py-0 md:pb-4"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
         >
            <span className="text-[#22C55E] font-semibold">{title}</span>
            <ChevronDown
               className={cn('h-4 w-4 text-white/60 transition-transform md:hidden', open && 'rotate-180')}
            />
         </button>
         <AnimatePresence initial={false}>
            {(open) && (
               <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden md:!h-auto md:!opacity-100"
               >
                  <div className="pb-4">{children}</div>
               </motion.div>
            )}
         </AnimatePresence>
         {/* Always visible on md+ */}
         <div className="hidden md:block">{children}</div>
      </div>
   )
}

export function Footer() {
   return (
      <footer className="bg-[#0B3D26] pt-14 pb-8 text-white">
         <div className="container-kpps">
            <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
               {/* Brand */}
               <div className="lg:col-span-1">
                  <Logo inverted wordmark size="md" className="mb-4" />
                  <p className="mb-5 text-sm leading-relaxed text-white/70">
                     {schoolInfo.tagline}. Nurturing young minds with a perfect blend of academic
                     excellence and holistic development since {schoolInfo.founded}.
                  </p>
                  <div className="flex items-center gap-3">
                     {[
                        { Icon: Facebook, label: 'Facebook', href: '#' },
                        { Icon: Instagram, label: 'Instagram', href: '#' },
                        { Icon: Youtube, label: 'YouTube', href: '#' },
                     ].map(({ Icon, label, href }) => (
                        <a
                           key={label}
                           href={href}
                           aria-label={label}
                           className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#22C55E] hover:text-white"
                        >
                           <Icon className="h-4 w-4" />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Quick links */}
               <div className="md:hidden">
                  <AccordionSection title="Quick Links">
                     <ul className="space-y-2">
                        {footerQuickLinks.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#22C55E]"
                              >
                                 <span className="h-1 w-1 rounded-full bg-[#22C55E]" />
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </AccordionSection>
               </div>
               <div className="hidden md:block">
                  <h4 className="font-display mb-4 text-sm font-semibold text-[#22C55E]">Quick Links</h4>
                  <ul className="space-y-2">
                     {footerQuickLinks.map((link) => (
                        <li key={link.label}>
                           <Link
                              href={link.href}
                              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#22C55E]"
                           >
                              <span className="h-1 w-1 rounded-full bg-[#22C55E]" />
                              {link.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact */}
               <div>
                  <h4 className="font-display mb-4 hidden text-sm font-semibold text-[#22C55E] md:block">Contact</h4>
                  <div className="md:hidden mb-2 text-sm font-semibold text-[#22C55E]">Contact</div>
                  <ul className="space-y-3">
                     {footerContact.map((c) => (
                        <li key={c.label} className="flex items-start gap-2 text-sm text-white/70">
                           <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#22C55E]" />
                           <span>
                              <span className="font-medium text-white/90">{c.label}: </span>
                              <a
                                 href={`tel:${c.value.replace(/\s/g, '')}`}
                                 className="transition-colors hover:text-[#22C55E]"
                              >
                                 {c.value}
                              </a>
                           </span>
                        </li>
                     ))}
                     <li className="flex items-start gap-2 text-sm text-white/70">
                        <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#22C55E]" />
                        <a
                           href={`mailto:${schoolInfo.email}`}
                           className="transition-colors hover:text-[#22C55E]"
                        >
                           {schoolInfo.email}
                        </a>
                     </li>
                  </ul>
               </div>

               {/* Address */}
               <div>
                  <h4 className="font-display mb-4 hidden text-sm font-semibold text-[#22C55E] md:block">Find Us</h4>
                  <div className="md:hidden mb-2 text-sm font-semibold text-[#22C55E]">Find Us</div>
                  <address className="mb-4 flex gap-2 text-sm text-white/70 not-italic">
                     <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                     <span>{schoolInfo.address}</span>
                  </address>
                  <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
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
               </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
               <p>© {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</p>
               <div className="flex gap-4">
                  <Link href="/downloads#disclosure" className="transition-colors hover:text-[#22C55E]">
                     Mandatory Disclosure
                  </Link>
                  <Link href="/contact" className="transition-colors hover:text-[#22C55E]">
                     Privacy Policy
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   )
}
