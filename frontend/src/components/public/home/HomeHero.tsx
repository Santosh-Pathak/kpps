'use client'

import dynamic from 'next/dynamic'

const HeroSlider = dynamic(
   () =>
      import('@/components/public/home/HeroSlider').then((m) => m.HeroSlider),
   {
      loading: () => (
         <div className="h-[90vh] min-h-[520px] animate-pulse bg-gradient-to-br from-[#0B3D26] to-[#0F5132]" />
      ),
      ssr: false,
   }
)

export function HomeHero() {
   return <HeroSlider />
}
