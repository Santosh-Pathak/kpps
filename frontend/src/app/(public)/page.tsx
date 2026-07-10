import type { Metadata } from 'next'
import { HomeHero } from '@/components/public/home/HomeHero'
import { StatsStrip } from '@/components/public/home/StatsStrip'
import { WhyChooseUs } from '@/components/public/home/WhyChooseUs'
import { CurriculumSnapshot } from '@/components/public/home/CurriculumSnapshot'
import { FacilitiesPreview } from '@/components/public/home/FacilitiesPreview'
import { AchievementsSection } from '@/components/public/home/AchievementsSection'
import { NewsNotices } from '@/components/public/home/NewsNotices'
import { TestimonialsSection } from '@/components/public/home/TestimonialsSection'
import { AdmissionCTA } from '@/components/public/home/AdmissionCTA'

export const metadata: Metadata = {
   title: 'Kids Paradise Senior Secondary School | KPPS — CBSE Admissions Open',
   description:
      'KPPS — A premier CBSE-affiliated senior secondary school. Admissions open for 2025-26 from Nursery to Class XII. Science, Commerce & Arts streams available.',
}

export default function HomePage() {
   return (
      <>
         <HomeHero />
         <StatsStrip />
         <WhyChooseUs />
         <CurriculumSnapshot />
         <FacilitiesPreview />
         <AchievementsSection />
         <NewsNotices />
         <TestimonialsSection />
         <AdmissionCTA />
      </>
   )
}
