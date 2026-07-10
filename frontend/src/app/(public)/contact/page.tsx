import type { Metadata } from 'next'
import { PageHero } from '@/components/public/shared/PageHero'
import { ContactContent } from '@/components/public/pages/ContactContent'

export const metadata: Metadata = {
   title: 'Contact Us',
   description:
      'Contact KPPS — address, phone numbers (Principal, Office, Transport), email, and directions.',
}

export default function ContactPage() {
   return (
      <>
         <PageHero
            eyebrow="Get in Touch"
            title="Contact Us"
            description="We're here to answer all your questions. Reach us by phone, email, or visit us in person."
         />
         <ContactContent />
      </>
   )
}
