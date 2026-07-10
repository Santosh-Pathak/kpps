'use client'

import { AuthGuard } from '@/components/guards/AuthGuard'
import { AdminNav } from '@/components/admin/AdminNav'
import { AppProvider } from '@/providers/AppProvider'

export default function AdminPanelLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <AppProvider>
         <AuthGuard requiredRoles={['admin', 'superAdmin', 'mediaManager']}>
            <div className="bg-muted/30 flex min-h-screen">
               <AdminNav />
               <main className="flex-1 overflow-auto">
                  <div className="p-4 sm:p-6 lg:p-8">{children}</div>
               </main>
            </div>
         </AuthGuard>
      </AppProvider>
   )
}
