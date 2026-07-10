'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
   label: string
   href: string
   children?: { label: string; href: string }[]
}

interface MobileNavProps {
   items: NavItem[]
   open: boolean
   onClose: () => void
}

export function MobileNav({ items, open, onClose }: MobileNavProps) {
   useEffect(() => {
      if (open) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = ''
      return () => {
         document.body.style.overflow = ''
      }
   }, [open])

   return (
      <>
         {/* Backdrop */}
         <div
            className={cn(
               'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity xl:hidden',
               open
                  ? 'pointer-events-auto opacity-100'
                  : 'pointer-events-none opacity-0'
            )}
            onClick={onClose}
         />

         {/* Drawer */}
         <div
            className={cn(
               'bg-background fixed top-0 right-0 bottom-0 z-50 flex w-[85vw] max-w-sm flex-col shadow-2xl transition-transform duration-300 xl:hidden',
               open ? 'translate-x-0' : 'translate-x-full'
            )}
         >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-4">
               <div className="flex items-center gap-2">
                  <div className="bg-navy flex h-8 w-8 items-center justify-center rounded-full">
                     <GraduationCap className="text-secondary h-5 w-5" />
                  </div>
                  <span className="font-heading text-navy dark:text-secondary font-bold">
                     KPPS
                  </span>
               </div>
               <button
                  onClick={onClose}
                  className="hover:bg-muted rounded-md p-1"
               >
                  <X className="h-5 w-5" />
               </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto p-4 pb-24">
               {items.map((item) => (
                  <div key={item.label} className="mb-1">
                     <Link
                        href={item.href}
                        onClick={onClose}
                        className="hover:bg-muted block rounded-md px-3 py-2.5 text-base font-medium transition-colors"
                     >
                        {item.label}
                     </Link>
                     {item.children && (
                        <div className="border-border mb-1 ml-4 border-l-2 pl-3">
                           {item.children.map((child) => (
                              <Link
                                 key={child.label}
                                 href={child.href}
                                 onClick={onClose}
                                 className="text-muted-foreground hover:text-foreground block py-2 text-sm transition-colors"
                              >
                                 {child.label}
                              </Link>
                           ))}
                        </div>
                     )}
                  </div>
               ))}
               <div className="mt-4 border-t pt-4">
                  <Link
                     href="/admin"
                     onClick={onClose}
                     className="text-muted-foreground hover:text-foreground hover:bg-muted block rounded-md px-3 py-2.5 text-sm"
                  >
                     Admin Login
                  </Link>
               </div>
            </nav>
         </div>
      </>
   )
}
