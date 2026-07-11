'use client'

import { motion } from 'framer-motion'
import { Images, Instagram, Facebook, Youtube } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const socials = [
   { label: 'Instagram', href: '#', icon: Instagram },
   { label: 'Facebook', href: '#', icon: Facebook },
   { label: 'YouTube', href: '#', icon: Youtube },
]

export function GalleryContent() {
   const reduced = useReducedMotion()

   return (
      <section className="section-pad bg-[var(--sp-bg)]">
         <div className="container-kpps">
            <motion.div
               initial={reduced ? false : { opacity: 0, y: 16 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.45, ease: 'easeOut' }}
               className={cn(
                  'rounded-lg border border-[var(--sp-border)] border-dashed py-20 text-center',
                  'bg-[var(--sp-bg-alt)]'
               )}
            >
               <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--sp-accent-soft)]">
                  <Images className="h-8 w-8 text-[var(--sp-primary)]" aria-hidden="true" />
               </div>

               <h2 className="font-display mb-3 text-2xl font-bold text-[var(--sp-text)]">
                  Gallery Coming Soon
               </h2>
               <p className="mx-auto max-w-md text-sm leading-relaxed text-[var(--sp-text-muted)]">
                  Photos and videos will be uploaded by the school administrator. Follow us on
                  social media for the latest updates from campus.
               </p>

               <div className="mt-6 flex justify-center gap-6">
                  {socials.map(({ label, href, icon: Icon }) => (
                     <a
                        key={label}
                        href={href}
                        className={cn(
                           'flex items-center gap-1.5 text-sm font-medium',
                           'text-[var(--sp-primary)] transition-colors hover:text-[var(--sp-accent)]',
                           'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm'
                        )}
                     >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {label}
                     </a>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   )
}
