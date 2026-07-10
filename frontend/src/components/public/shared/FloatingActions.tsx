'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function FloatingActions() {
   const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '910000000000'
   const waUrl = `https://wa.me/${waNumber}?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20KPPS.`

   return (
      <div className="fixed right-6 bottom-6 z-40 hidden flex-col gap-3 xl:flex">
         <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#20ba58]"
            aria-label="Chat on WhatsApp"
         >
            <MessageCircle className="h-6 w-6" />
         </a>
         <Link
            href="/admissions"
            className="bg-accent hover:bg-accent/90 flex h-14 w-14 items-center justify-center rounded-full text-center text-xs leading-tight font-bold text-white shadow-lg transition-transform hover:scale-110"
         >
            Apply
         </Link>
      </div>
   )
}
