'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight } from 'lucide-react'
import { Logo } from '@/components/public/shared/Logo'
import { cn } from '@/lib/utils'

interface NavItem {
   label: string
   href: string
   children?: { label: string; href: string }[]
}

interface MobileNavProps {
   id: string
   items: NavItem[]
   open: boolean
   onClose: () => void
   currentPath: string
}

const drawerVariants = {
   hidden: { x: '100%' },
   visible: { x: 0 },
}

const listVariants = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
}

const itemVariants = {
   hidden: { opacity: 0, x: 20 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } },
}

export function MobileNav({ id, items, open, onClose, currentPath }: MobileNavProps) {
   const closeRef = useRef<HTMLButtonElement>(null)

   // Lock body scroll while open
   useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : ''
      return () => { document.body.style.overflow = '' }
   }, [open])

   // Close on Escape key
   useEffect(() => {
      if (!open) return
      const handler = (e: KeyboardEvent) => {
         if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handler)
      return () => window.removeEventListener('keydown', handler)
   }, [open, onClose])

   // Move focus to close button when drawer opens
   useEffect(() => {
      if (open) {
         // Defer one tick so the element is visible before focusing
         const id = setTimeout(() => closeRef.current?.focus(), 50)
         return () => clearTimeout(id)
      }
   }, [open])

   function isActive(href: string) {
      if (href === '/') return currentPath === '/'
      return currentPath === href || currentPath.startsWith(href + '/')
   }

   return (
      <AnimatePresence>
         {open && (
            <>
               {/* ── Backdrop ──────────────────────────────────────────────── */}
               <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
                  onClick={onClose}
                  aria-hidden="true"
               />

               {/* ── Drawer ────────────────────────────────────────────────── */}
               <motion.div
                  id={id}
                  key="drawer"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Navigation menu"
                  variants={drawerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                  className="fixed top-0 right-0 bottom-0 z-50 flex w-[85vw] max-w-sm flex-col bg-white shadow-2xl lg:hidden dark:bg-[var(--sp-bg)]"
               >
                  {/* Header row */}
                  <div className="flex items-center justify-between border-b border-[var(--sp-border)] px-4 py-3">
                     <Logo size="sm" />
                     <button
                        ref={closeRef}
                        onClick={onClose}
                        className={cn(
                           'flex h-10 w-10 items-center justify-center rounded-md',
                           'text-[var(--sp-text)] transition-colors duration-150',
                           'hover:bg-[var(--sp-accent-soft)]',
                           'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)]'
                        )}
                        aria-label="Close navigation menu"
                     >
                        <X className="h-5 w-5" aria-hidden="true" />
                     </button>
                  </div>

                  {/* Nav links — scrollable, bottom padding leaves room for sticky CTA */}
                  <nav
                     className="flex-1 overflow-y-auto px-3 py-4 pb-32"
                     aria-label="Main navigation"
                  >
                     <motion.div variants={listVariants} initial="hidden" animate="visible">
                        {items.map((item) => (
                           <motion.div key={item.label} variants={itemVariants} className="mb-0.5">
                              <Link
                                 href={item.href}
                                 onClick={onClose}
                                 aria-current={isActive(item.href) ? 'page' : undefined}
                                 className={cn(
                                    'flex min-h-[3rem] items-center rounded-md px-4 py-2.5',
                                    'text-base font-semibold transition-colors duration-150',
                                    'hover:bg-[var(--sp-accent-soft)] hover:text-[var(--sp-primary)]',
                                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)]',
                                    isActive(item.href)
                                       ? 'bg-[var(--sp-accent-soft)] text-[var(--sp-primary)]'
                                       : 'text-[var(--sp-text)]'
                                 )}
                              >
                                 {item.label}
                                 {item.children && (
                                    <ChevronRight className="ml-auto h-4 w-4 opacity-40" aria-hidden="true" />
                                 )}
                              </Link>

                              {item.children && (
                                 <div className="ml-4 mt-0.5 border-l-2 border-[var(--sp-border)] pl-3 pb-1">
                                    {item.children.map((child) => (
                                       <Link
                                          key={child.label}
                                          href={child.href}
                                          onClick={onClose}
                                          className={cn(
                                             'flex min-h-[2.75rem] items-center py-1.5 text-sm',
                                             'text-[var(--sp-text-muted)] transition-colors duration-150',
                                             'hover:text-[var(--sp-primary)]',
                                             'focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)]'
                                          )}
                                       >
                                          {child.label}
                                       </Link>
                                    ))}
                                 </div>
                              )}
                           </motion.div>
                        ))}

                        {/* Admin login — subtle, at the bottom */}
                        <motion.div
                           variants={itemVariants}
                           className="mt-3 border-t border-[var(--sp-border)] pt-3"
                        >
                           <Link
                              href="/admin"
                              onClick={onClose}
                              className={cn(
                                 'block rounded-md px-4 py-2.5 text-sm',
                                 'text-[var(--sp-text-muted)] transition-colors duration-150',
                                 'hover:bg-[var(--sp-bg-alt)] hover:text-[var(--sp-primary)]',
                                 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)]'
                              )}
                           >
                              Admin Login
                           </Link>
                        </motion.div>
                     </motion.div>
                  </nav>

                  {/* Bottom CTA — single Apply action */}
                  <div className="border-t border-[var(--sp-border)] p-4">
                     <Link
                        href="/admissions"
                        onClick={onClose}
                        className={cn(
                           'flex min-h-[3rem] w-full items-center justify-center rounded-lg',
                           'bg-[var(--sp-primary)] text-sm font-bold text-white',
                           'transition-colors duration-150 hover:bg-[var(--sp-primary-dark)]',
                           'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)] focus-visible:ring-offset-2'
                        )}
                     >
                        Apply for Admission
                     </Link>
                  </div>
               </motion.div>
            </>
         )}
      </AnimatePresence>
   )
}
