import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AppProvider } from '@/providers/AppProvider'

const fraunces = Fraunces({
   variable: '--font-fraunces',
   subsets: ['latin'],
   weight: ['300', '400', '600', '700', '900'],
   style: ['normal', 'italic'],
})

const plusJakarta = Plus_Jakarta_Sans({
   variable: '--font-plus-jakarta',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700', '800'],
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
         <body className={`${fraunces.variable} ${plusJakarta.variable} antialiased`} style={{ fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif' }}>
            <ThemeProvider enableDynamicThemes={false}>
               <AppProvider>
                  {children}
                  <Toaster
                     position="top-right"
                     toastOptions={{
                        duration: 4000,
                        style: {
                           background: '#0B1F17',
                           color: '#F0FBF6',
                           borderRadius: '0.625rem',
                           boxShadow: '0 4px 24px rgba(15,81,50,0.18)',
                           fontSize: '0.875rem',
                        },
                        success: {
                           duration: 3000,
                           style: {
                              background: '#0F5132',
                              color: '#ffffff',
                           },
                           iconTheme: { primary: '#22C55E', secondary: '#ffffff' },
                        },
                        error: {
                           duration: 5000,
                           style: {
                              background: '#7f1d1d',
                              color: '#ffffff',
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
