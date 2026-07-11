'use client'

import { MessageCircle } from 'lucide-react'
import { schoolInfo } from '@/lib/dummy-data'
import { cn } from '@/lib/utils'

/**
 * Floating WhatsApp button — lg+ only.
 * The "Apply" FAB is intentionally removed: the header already carries a persistent
 * Apply CTA at lg+, and the mobile sticky bar handles it below lg.
 * Two Apply buttons at the same breakpoint = noise, not clarity.
 *
 * WhatsApp uses its brand green (#25D366) — this is a recognised standard
 * that parents immediately associate with the platform. It does NOT break
 * the school palette constraint; it's product chrome, not a design token.
 */
export function FloatingActions() {
   const waUrl = `https://wa.me/${schoolInfo.whatsapp}?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20KPPS.`

   return (
      <div className="fixed right-6 bottom-6 z-40 hidden lg:flex">
         <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className={cn(
               'flex h-14 w-14 items-center justify-center rounded-full',
               'bg-[#25D366] text-white',
               'shadow-[0_4px_20px_rgba(37,211,102,0.35)]',
               'transition-all duration-200 ease-out',
               'hover:scale-105 hover:shadow-[0_6px_28px_rgba(37,211,102,0.45)]',
               'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2'
            )}
         >
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
         </a>
      </div>
   )
}
