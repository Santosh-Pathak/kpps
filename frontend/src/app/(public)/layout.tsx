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
         <main className="min-h-screen pb-16 xl:pb-0">{children}</main>
         <Footer />
         <FloatingActions />
      </div>
   )
}
