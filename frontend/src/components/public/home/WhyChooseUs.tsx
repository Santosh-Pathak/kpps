'use client'

import { whyCards } from '@/lib/dummy-data'
import { HoverCard } from '@/components/public/shared/HoverCard'
import { SectionHeading } from '@/components/public/shared/SectionHeading'
import { WaveDivider } from '@/components/public/shared/WaveDivider'

export function WhyChooseUs() {
   return (
      <section className="relative pb-0 pt-16 bg-[var(--sp-bg)] md:pt-24">
         <div className="container-kpps">
            <SectionHeading
               eyebrow="Our Strengths"
               title="Why Choose KPPS?"
               description="We combine academic rigour with holistic development so every student grows into a confident, capable individual."
               className="mb-12"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
               {whyCards.map((card) => (
                  <HoverCard
                     key={card.title}
                     icon={card.icon}
                     title={card.title}
                     description={card.description}
                  />
               ))}
            </div>
         </div>

         <WaveDivider
            className="mt-16"
            fromColor="fill-[var(--sp-bg)]"
            toColor="fill-[var(--sp-bg-alt)]"
         />
      </section>
   )
}
