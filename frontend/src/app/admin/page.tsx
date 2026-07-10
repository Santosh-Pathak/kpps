'use client'

import { LoginPage } from '@/components/auth/LoginPage'
import { GuestGuard } from '@/components/guards/AuthGuard'

export default function AdminLoginPage() {
   return (
      <GuestGuard redirectTo="/admin/dashboard">
         <LoginPage />
      </GuestGuard>
   )
}
