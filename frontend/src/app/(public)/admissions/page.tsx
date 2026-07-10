import type { Metadata } from 'next'
import { PageHero } from '@/components/public/shared/PageHero'
import { AdmissionsContent } from '@/components/public/pages/AdmissionsContent'
import { AdmissionCTA } from '@/components/public/home/AdmissionCTA'

export const metadata: Metadata = {
   title: 'Admissions',
   description:
      'Admissions open for 2025-26 at KPPS. Learn about eligibility, the admission process, required documents, and apply online.',
}

export default function AdmissionsPage() {
   return (
      <>
         <PageHero
            eyebrow="Admissions 2025–26"
            title="Join the KPPS Family"
            description="Limited seats available. Simple 4-step process. Apply today and secure your child's future."
         />
         <AdmissionsContent />
         <AdmissionCTA />
      </>
   )
}
