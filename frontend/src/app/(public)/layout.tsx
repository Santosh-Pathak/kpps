import { Header } from '@/components/public/layout/Header'
import { Footer } from '@/components/public/layout/Footer'
import { FloatingActions } from '@/components/public/shared/FloatingActions'

export default function PublicLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <div className="school-public">
         <Header />
         {/* pb-16 reserves space for the mobile sticky CTA bar — matches Header's lg:hidden breakpoint */}
         <main className="min-h-screen pb-16 lg:pb-0">{children}</main>
         <Footer />
         <FloatingActions />
      </div>
   )
}
