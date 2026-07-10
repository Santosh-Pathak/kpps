'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AlertCircle, ArrowLeft, Home } from 'lucide-react'
import { useEffect } from 'react'
import { useAuthStore } from '@/store/auth.store'

export default function UnauthorizedPage() {
   const router = useRouter()
   const { user, isAuthenticated } = useAuthStore()

   useEffect(() => {
      // If user is not authenticated, redirect to login
      if (!isAuthenticated) {
         router.push('/admin')
      }
   }, [isAuthenticated, router])

   return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
         <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
            <div className="mb-6">
               <AlertCircle className="mx-auto mb-4 h-16 w-16 text-red-500" />
               <h1 className="mb-2 text-2xl font-bold text-gray-900">
                  Access Denied
               </h1>
               <p className="text-gray-600">
                  You don't have permission to access this page.
               </p>
            </div>

            {isAuthenticated && user && (
               <div className="mb-6 rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-700">
                     <span className="font-medium">Current Role:</span>{' '}
                     {user.role}
                  </p>
                  <p className="text-sm text-gray-700">
                     <span className="font-medium">Email:</span> {user.email}
                  </p>
               </div>
            )}

            <div className="space-y-3">
               <button
                  onClick={() => router.back()}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700"
               >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
               </button>

               <Link
                  href="/"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
               >
                  <Home className="h-4 w-4" />
                  Go to Home
               </Link>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
               <p className="text-sm text-gray-500">
                  If you believe this is an error, please contact your
                  administrator.
               </p>
            </div>
         </div>
      </div>
   )
}
