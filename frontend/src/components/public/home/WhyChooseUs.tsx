'use client'

import { motion } from 'framer-motion'
import { whyCards } from '@/lib/dummy-data'
import { HoverCard } from '@/components/public/shared/HoverCard'
import { WaveDivider } from '@/components/public/shared/WaveDivider'

export function WhyChooseUs() {
   return (
      <section className="relative bg-[#FFFFFF] pb-0 pt-16 dark:bg-[#0A1F16] md:pt-24">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="mb-12 text-center"
            >
               <p className="kpps-eyebrow mb-3">Our Strengths</p>
               <h2 className="kpps-h2 font-display mb-3 text-[#0B1F17] dark:text-[#F0FBF6]">
                  Why Choose KPPS?
               </h2>
               <p className="mx-auto max-w-xl text-[#4B6358] dark:text-[#9CC7B3]">
                  We combine academic rigour with holistic development so every student grows into a
                  confident, capable individual.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
               {whyCards.map((card, i) => (
                  <HoverCard
                     key={card.title}
                     icon={card.icon}
                     title={card.title}
                     description={card.description}
                     delay={i * 0.07}
                  />
               ))}
            </div>
         </div>

         <WaveDivider
            className="mt-16"
            fromColor="fill-[#FFFFFF] dark:fill-[#0A1F16]"
            toColor="fill-[#F6FBF8] dark:fill-[#0F2A1E]"
         />
      </section>
   )
}
