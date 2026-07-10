'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Logo } from '@/components/public/shared/Logo'

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

const overlayVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1 },
}

const drawerVariants = {
   hidden: { x: '100%' },
   visible: { x: 0 },
}

const listVariants = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
}

const itemVariants = {
   hidden: { opacity: 0, x: 24 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

export function MobileNav({ items, open, onClose }: MobileNavProps) {
   useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : ''
      return () => { document.body.style.overflow = '' }
   }, [open])

   return (
      <AnimatePresence>
         {open && (
            <>
               {/* Backdrop */}
               <motion.div
                  key="backdrop"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden"
                  onClick={onClose}
               />

               {/* Drawer */}
               <motion.div
                  key="drawer"
                  variants={drawerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="fixed top-0 right-0 bottom-0 z-50 flex w-[85vw] max-w-sm flex-col bg-white shadow-2xl xl:hidden dark:bg-[#0A1F16]"
               >
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-[#E3F0E9] p-4 dark:border-[#1C4632]">
                     <Logo size="sm" />
                     <motion.button
                        onClick={onClose}
                        className="rounded-lg p-2 transition-colors hover:bg-[#D1FAE5] dark:hover:bg-[#0F3D2E]"
                        whileTap={{ scale: 0.9 }}
                        aria-label="Close menu"
                     >
                        <motion.div
                           animate={{ rotate: open ? 180 : 0 }}
                           transition={{ duration: 0.3 }}
                        >
                           <X className="h-5 w-5 text-[#0B1F17] dark:text-[#F0FBF6]" />
                        </motion.div>
                     </motion.button>
                  </div>

                  {/* Nav items */}
                  <nav className="flex-1 overflow-y-auto p-4 pb-28">
                     <motion.div
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                     >
                        {items.map((item) => (
                           <motion.div key={item.label} variants={itemVariants} className="mb-1">
                              <Link
                                 href={item.href}
                                 onClick={onClose}
                                 className="block min-h-[48px] rounded-xl px-4 py-3 text-base font-semibold text-[#0B1F17] transition-colors hover:bg-[#D1FAE5] hover:text-[#0F5132] dark:text-[#F0FBF6] dark:hover:bg-[#0F3D2E] dark:hover:text-[#22C55E]"
                              >
                                 {item.label}
                              </Link>
                              {item.children && (
                                 <div className="mb-1 ml-4 border-l-2 border-[#E3F0E9] pl-3 dark:border-[#1C4632]">
                                    {item.children.map((child) => (
                                       <Link
                                          key={child.label}
                                          href={child.href}
                                          onClick={onClose}
                                          className="block min-h-[44px] py-2 text-sm text-[#4B6358] transition-colors hover:text-[#0F5132] dark:text-[#9CC7B3] dark:hover:text-[#22C55E]"
                                       >
                                          {child.label}
                                       </Link>
                                    ))}
                                 </div>
                              )}
                           </motion.div>
                        ))}

                        <motion.div variants={itemVariants} className="mt-4 border-t border-[#E3F0E9] pt-4 dark:border-[#1C4632]">
                           <Link
                              href="/admin"
                              onClick={onClose}
                              className="block rounded-xl px-4 py-2.5 text-sm text-[#4B6358] transition-colors hover:bg-[#F6FBF8] dark:text-[#9CC7B3] dark:hover:bg-[#0F2A1E]"
                           >
                              Admin Login
                           </Link>
                        </motion.div>
                     </motion.div>
                  </nav>

                  {/* Bottom CTA */}
                  <div className="border-t border-[#E3F0E9] p-4 dark:border-[#1C4632]">
                     <Link
                        href="/admissions"
                        onClick={onClose}
                        className="block w-full rounded-xl bg-[#0F5132] py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-[#0B3D26]"
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
