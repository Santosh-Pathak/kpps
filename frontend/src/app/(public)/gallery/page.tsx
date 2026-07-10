import type { Metadata } from 'next'
import { PageHero } from '@/components/public/shared/PageHero'
import { GalleryContent } from '@/components/public/pages/GalleryContent'

export const metadata: Metadata = {
   title: 'Media Gallery',
   description:
      'Photos, videos, and news from KPPS — events, activities, and campus life.',
}

export default function GalleryPage() {
   return (
      <>
         <PageHero
            eyebrow="Media"
            title="Gallery"
            description="Snapshots of campus life, events, activities, and achievements at KPPS."
         />
         <GalleryContent />
      </>
   )
}
