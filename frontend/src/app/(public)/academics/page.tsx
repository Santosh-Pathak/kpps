import type { Metadata } from 'next'
import { PageHero } from '@/components/public/shared/PageHero'
import { AcademicsContent } from '@/components/public/pages/AcademicsContent'
import { AdmissionCTA } from '@/components/public/home/AdmissionCTA'

export const metadata: Metadata = {
   title: 'Academics',
   description:
      'Curriculum, streams, subjects, and academic resources at KPPS — CBSE-affiliated school offering Pre-Primary to Class XII.',
}

export default function AcademicsPage() {
   return (
      <>
         <PageHero
            eyebrow="Academics"
            title="A Strong Academic Foundation"
            description="From play-based early learning to rigorous board preparation — KPPS offers a complete, CBSE-aligned academic journey."
         />
         <AcademicsContent />
         <AdmissionCTA />
      </>
   )
}
