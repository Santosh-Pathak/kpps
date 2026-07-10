import type { Metadata } from 'next'
import { Baloo_2, Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AppProvider } from '@/providers/AppProvider'

const baloo = Baloo_2({
   variable: '--font-baloo',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
   variable: '--font-inter',
   subsets: ['latin'],
})

export const metadata: Metadata = {
   title: {
      default: 'Kids Paradise Senior Secondary School | KPPS',
      template: '%s | KPPS',
   },
   description:
      'Kids Paradise Senior Secondary School — CBSE-affiliated school. Admissions open for Nursery to Class XII.',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${baloo.variable} ${inter.variable} antialiased`}>
            <ThemeProvider>
               <AppProvider>
                  {children}
                  <Toaster
                     position="top-right"
                     toastOptions={{
                        duration: 4000,
                        style: {
                           background: '#363636',
                           color: '#fff',
                        },
                        success: {
                           duration: 3000,
                           style: {
                              background: '#10b981',
                           },
                        },
                        error: {
                           duration: 5000,
                           style: {
                              background: '#ef4444',
                           },
                        },
                     }}
                  />
               </AppProvider>
            </ThemeProvider>
         </body>
      </html>
   )
}
