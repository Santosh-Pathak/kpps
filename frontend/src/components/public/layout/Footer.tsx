'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react'
import { Logo } from '@/components/public/shared/Logo'
import { schoolInfo, footerQuickLinks, footerContact } from '@/lib/dummy-data'
import { cn } from '@/lib/utils'

// Accordion for mobile — renders children ONCE, shown/hidden via class,
// avoiding the prior double-render bug (AnimatePresence + hidden md:block).
function AccordionSection({
   title,
   children,
}: {
   title: string
   children: React.ReactNode
}) {
   const [open, setOpen] = useState(false)
   const headingId = `footer-${title.toLowerCase().replace(/\s+/g, '-')}`
   const panelId = `${headingId}-panel`

   return (
      <div className="border-b border-white/10 md:border-none">
         {/* Mobile toggle — hidden on md+ */}
         <button
            id={headingId}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className={cn(
               'flex w-full items-center justify-between py-3',
               'text-sm font-semibold text-[var(--sp-accent)] md:hidden',
               'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)]'
            )}
         >
            {title}
            <ChevronDown
               className={cn(
                  'h-4 w-4 text-white/60 transition-transform duration-200',
                  open && 'rotate-180'
               )}
               aria-hidden="true"
            />
         </button>

         {/* Desktop heading — visible only on md+ */}
         <p
            className="mb-4 hidden text-sm font-semibold text-[var(--sp-accent)] md:block"
            role="heading"
            aria-level={3}
         >
            {title}
         </p>

         {/* Content — always in DOM once; toggled via class on mobile, always shown on md+ */}
         <div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            className={cn(
               'overflow-hidden pb-4 transition-all duration-200',
               'md:!max-h-none md:block',
               open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 md:opacity-100'
            )}
         >
            {children}
         </div>
      </div>
   )
}

export function Footer() {
   return (
      <footer
         className="bg-[var(--sp-primary-dark)] pt-14 pb-8 text-white"
         aria-label="Site footer"
      >
         <div className="container-kpps">
            <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

               {/* ── Brand column ─────────────────────────────────────────── */}
               <div className="lg:col-span-1">
                  <Logo inverted wordmark size="md" className="mb-4" />
                  <p className="mb-5 text-sm leading-relaxed text-white/70">
                     {schoolInfo.tagline}. Nurturing young minds with a perfect blend of academic
                     excellence and holistic development since {schoolInfo.founded}.
                  </p>
                  <div className="flex items-center gap-3" aria-label="Social media">
                     {[
                        { Icon: Facebook, label: 'Facebook', href: '#' },
                        { Icon: Instagram, label: 'Instagram', href: '#' },
                        { Icon: Youtube, label: 'YouTube', href: '#' },
                     ].map(({ Icon, label, href }) => (
                        <a
                           key={label}
                           href={href}
                           aria-label={`${label} (opens in new tab)`}
                           rel="noopener noreferrer"
                           className={cn(
                              'flex h-9 w-9 items-center justify-center rounded-full',
                              'bg-white/10 text-white',
                              'transition-colors duration-150 hover:bg-[var(--sp-accent)]',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)]'
                           )}
                        >
                           <Icon className="h-4 w-4" aria-hidden="true" />
                        </a>
                     ))}
                  </div>
               </div>

               {/* ── Quick links ──────────────────────────────────────────── */}
               <div>
                  <AccordionSection title="Quick Links">
                     <ul className="space-y-2">
                        {footerQuickLinks.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className={cn(
                                    'flex items-center gap-2 text-sm text-white/70',
                                    'transition-colors duration-150 hover:text-[var(--sp-accent)]',
                                    'focus-visible:outline-none focus-visible:text-[var(--sp-accent)]'
                                 )}
                              >
                                 <span
                                    className="h-1 w-1 shrink-0 rounded-full bg-[var(--sp-accent)]"
                                    aria-hidden="true"
                                 />
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </AccordionSection>
               </div>

               {/* ── Contact ──────────────────────────────────────────────── */}
               <div>
                  <AccordionSection title="Contact">
                     <ul className="space-y-3">
                        {footerContact.map((c) => (
                           <li key={c.label} className="flex items-start gap-2 text-sm text-white/70">
                              <Phone
                                 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--sp-accent)]"
                                 aria-hidden="true"
                              />
                              <span>
                                 <span className="font-medium text-white/90">{c.label}: </span>
                                 <a
                                    href={`tel:${c.value.replace(/\s/g, '')}`}
                                    className="transition-colors hover:text-[var(--sp-accent)]"
                                 >
                                    {c.value}
                                 </a>
                              </span>
                           </li>
                        ))}
                        <li className="flex items-start gap-2 text-sm text-white/70">
                           <Mail
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--sp-accent)]"
                              aria-hidden="true"
                           />
                           <a
                              href={`mailto:${schoolInfo.email}`}
                              className="transition-colors hover:text-[var(--sp-accent)]"
                           >
                              {schoolInfo.email}
                           </a>
                        </li>
                     </ul>
                  </AccordionSection>
               </div>

               {/* ── Find Us (map) ────────────────────────────────────────── */}
               <div>
                  <AccordionSection title="Find Us">
                     <address className="mb-4 flex gap-2 text-sm text-white/70 not-italic">
                        <MapPin
                           className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sp-accent)]"
                           aria-hidden="true"
                        />
                        <span>{schoolInfo.address}</span>
                     </address>
                     <div className="aspect-video overflow-hidden rounded-lg border border-white/10">
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
                  </AccordionSection>
               </div>
            </div>

            {/* ── Bottom bar ───────────────────────────────────────────────── */}
            <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
               <p>© {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</p>
               <nav aria-label="Legal links">
                  <ul className="flex gap-4">
                     <li>
                        <Link
                           href="/downloads#disclosure"
                           className="transition-colors hover:text-[var(--sp-accent)] focus-visible:text-[var(--sp-accent)]"
                        >
                           Mandatory Disclosure
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/contact"
                           className="transition-colors hover:text-[var(--sp-accent)] focus-visible:text-[var(--sp-accent)]"
                        >
                           Privacy Policy
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </footer>
   )
}
