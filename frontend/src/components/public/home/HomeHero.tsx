'use client'

import dynamic from 'next/dynamic'

const HeroSlider = dynamic(
   () =>
      import('@/components/public/home/HeroSlider').then((m) => m.HeroSlider),
   {
      loading: () => (
         <div className="from-navy h-[92vh] max-h-[900px] min-h-[520px] animate-pulse bg-gradient-to-br to-[#2d5a9e]" />
      ),
      ssr: false,
   }
)

export function HomeHero() {
   return <HeroSlider />
}
