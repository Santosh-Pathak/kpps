import type { Metadata } from 'next'
import { PageHero } from '@/components/public/shared/PageHero'
import { FacilitiesContent } from '@/components/public/pages/FacilitiesContent'
import { AdmissionCTA } from '@/components/public/home/AdmissionCTA'

export const metadata: Metadata = {
   title: 'Facilities',
   description:
      'World-class facilities at KPPS including library, science labs, computer lab, sports ground, transport, auditorium, and more.',
}

export default function FacilitiesPage() {
   return (
      <>
         <PageHero
            eyebrow="Campus"
            title="World-Class Facilities"
            description="Every facility at KPPS is designed to create an enriching, safe, and inspiring environment for our students."
         />
         <FacilitiesContent />
         <AdmissionCTA />
      </>
   )
}
