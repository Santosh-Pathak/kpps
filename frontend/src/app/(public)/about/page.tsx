import type { Metadata } from 'next'
import { AdmissionCTA } from '@/components/public/home/AdmissionCTA'
import { AboutHero } from '@/components/public/pages/AboutHero'
import { VisionMission } from '@/components/public/pages/VisionMission'
import { PrincipalMessage } from '@/components/public/pages/PrincipalMessage'

export const metadata: Metadata = {
   title: 'About Us',
   description:
      "Learn about Kids Paradise Senior Secondary School — our history, vision, mission, principal's message, and management.",
}

export default function AboutPage() {
   return (
      <>
         <AboutHero />
         <VisionMission />
         <PrincipalMessage />
         <AdmissionCTA />
      </>
   )
}
