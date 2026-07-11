// Direct import — no ssr:false. HeroSlider's 'use client' directive means Next.js
// renders the first-slide HTML on the server (correct LCP content) and hydrates
// Embla on the client. The min-h-[90vh] on the section prevents layout shift.
import { HeroSlider } from '@/components/public/home/HeroSlider'

export function HomeHero() {
   return <HeroSlider />
}
