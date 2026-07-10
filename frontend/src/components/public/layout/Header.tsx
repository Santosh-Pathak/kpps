'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
// AnimatePresence kept for theme toggle animation below
import { Sun, Moon, Phone, Mail, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/public/shared/Logo'
import { MobileNav } from './MobileNav'
import { schoolInfo } from '@/lib/dummy-data'

const navItems = [
   {
      label: 'About Us',
      href: '/about',
      children: [
         { label: 'History & Vision', href: '/about#history' },
         { label: "Principal's Message", href: '/about#principal' },
         { label: 'Management', href: '/about#management' },
      ],
   },
   {
      label: 'Academics',
      href: '/academics',
      children: [
         { label: 'Curriculum', href: '/academics#curriculum' },
         { label: 'Streams (XI–XII)', href: '/academics#streams' },
         { label: 'Syllabus & Book Lists', href: '/academics#downloads' },
      ],
   },
   { label: 'Admissions', href: '/admissions' },
   { label: 'Facilities', href: '/facilities' },
   { label: 'Activities', href: '/activities' },
   { label: 'Achievements', href: '/achievements' },
   {
      label: 'Media',
      href: '/gallery',
      children: [
         { label: 'Photo Gallery', href: '/gallery#photos' },
         { label: 'Videos', href: '/gallery#videos' },
      ],
   },
   { label: 'Contact', href: '/contact' },
]

export function Header() {
   const [mobileOpen, setMobileOpen] = useState(false)
   const [dark, setDark] = useState(false)
   const [mounted, setMounted] = useState(false)
   const [utilityVisible, setUtilityVisible] = useState(true)
   const lastYRef = useRef(0)

   const { scrollY } = useScroll()
   const navBg = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'])
   const navShadow = useTransform(
      scrollY,
      [60, 100],
      ['0 0 0 0 rgba(0,0,0,0)', '0 2px 16px 0 rgba(15,81,50,0.10)']
   )

   useEffect(() => {
      setMounted(true)
      const stored = localStorage.getItem('kpps-theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isDark = stored === 'dark' || (!stored && prefersDark)
      document.documentElement.classList.toggle('dark', isDark)
      setDark(isDark)

      const onScroll = () => {
         const y = window.scrollY
         setUtilityVisible(y < lastYRef.current || y < 40)
         lastYRef.current = y
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
   }, [])

   const toggleTheme = () => {
      const next = !dark
      setDark(next)
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('kpps-theme', next ? 'dark' : 'light')
   }

   return (
      <>
         {/* Top utility bar — desktop only, fades out on scroll down (no height change = no layout shift) */}
         <div
            className="hidden bg-[#0F5132] text-xs text-white transition-opacity duration-200 md:block"
            style={{ opacity: utilityVisible ? 1 : 0, pointerEvents: utilityVisible ? 'auto' : 'none' }}
         >
            <div className="container-kpps flex items-center justify-between py-1.5">
               <div className="flex items-center gap-4">
                  <a
                     href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
                     className="flex items-center gap-1 transition-colors hover:text-[#22C55E]"
                  >
                     <Phone className="h-3 w-3" />
                     {schoolInfo.phone}
                  </a>
                  <a
                     href={`mailto:${schoolInfo.email}`}
                     className="flex items-center gap-1 transition-colors hover:text-[#22C55E]"
                  >
                     <Mail className="h-3 w-3" />
                     {schoolInfo.email}
                  </a>
               </div>
               <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#D1FAE5]">
                     Admissions Open {schoolInfo.admissionsYear}
                  </span>
                  <Link href="/admissions">
                     <button className="rounded-full bg-[#22C55E] px-3 py-0.5 text-[10px] font-bold text-white transition-colors hover:bg-[#16a34a]">
                        Apply Now
                     </button>
                  </Link>
               </div>
            </div>
         </div>

         {/* Main header — starts transparent (hero overlap), transitions to solid on scroll */}
         <motion.header
            className="sticky top-0 z-50 w-full bg-white/0 dark:bg-[#0A1F16]/0"
            style={{
               backgroundColor: navBg,
               boxShadow: navShadow,
               backdropFilter: 'blur(12px)',
            }}
         >
            <div className="container-kpps flex h-16 items-center justify-between md:h-20">
               <Logo size="md" />

               {/* Desktop nav */}
               <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
                  {navItems.map((item) =>
                     item.children ? (
                        <div key={item.label} className="group relative">
                           <Link
                              href={item.href}
                              className="flex items-center gap-0.5 rounded-lg px-3 py-2 text-sm font-medium text-[#0B1F17] transition-colors hover:bg-[#D1FAE5] hover:text-[#0F5132] dark:text-[#F0FBF6] dark:hover:bg-[#0F3D2E] dark:hover:text-[#22C55E]"
                           >
                              {item.label}
                              <ChevronDown className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180" />
                           </Link>
                           {/* Animated underline */}
                           <span className="absolute bottom-0.5 left-3 right-3 h-px origin-left scale-x-0 bg-[#22C55E] transition-transform duration-200 group-hover:scale-x-100" />
                           <div className="invisible absolute top-full left-0 z-50 mt-1 w-52 rounded-xl border border-[#E3F0E9] bg-white opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 dark:border-[#1C4632] dark:bg-[#0F2A1E]">
                              {item.children.map((child) => (
                                 <Link
                                    key={child.label}
                                    href={child.href}
                                    className="block px-4 py-2.5 text-sm text-[#0B1F17] transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-[#F6FBF8] hover:text-[#0F5132] dark:text-[#F0FBF6] dark:hover:bg-[#0F3D2E] dark:hover:text-[#22C55E]"
                                 >
                                    {child.label}
                                 </Link>
                              ))}
                           </div>
                        </div>
                     ) : (
                        <Link
                           key={item.label}
                           href={item.href}
                           className="relative rounded-lg px-3 py-2 text-sm font-medium text-[#0B1F17] transition-colors hover:bg-[#D1FAE5] hover:text-[#0F5132] dark:text-[#F0FBF6] dark:hover:bg-[#0F3D2E] dark:hover:text-[#22C55E]"
                        >
                           {item.label}
                        </Link>
                     )
                  )}
               </nav>

               {/* Right side */}
               <div className="flex items-center gap-2">
                  {/* Theme toggle */}
                  {mounted && (
                     <motion.button
                        onClick={toggleTheme}
                        className="rounded-lg p-2 text-[#0B1F17] transition-colors hover:bg-[#D1FAE5] dark:text-[#F0FBF6] dark:hover:bg-[#0F3D2E]"
                        aria-label="Toggle theme"
                        whileTap={{ scale: 0.9 }}
                     >
                        <AnimatePresence mode="wait" initial={false}>
                           <motion.span
                              key={dark ? 'sun' : 'moon'}
                              initial={{ rotate: -90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: 90, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="block"
                           >
                              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                           </motion.span>
                        </AnimatePresence>
                     </motion.button>
                  )}

                  {/* Apply Now CTA */}
                  <Link href="/admissions" className="hidden lg:block">
                     <Button
                        variant="cta"
                        size="sm"
                        className="rounded-full px-5 text-xs font-bold tracking-wide"
                     >
                        Apply Now
                     </Button>
                  </Link>

                  {/* Mobile hamburger */}
                  <motion.button
                     className="rounded-lg p-2 text-[#0B1F17] transition-colors hover:bg-[#D1FAE5] dark:text-[#F0FBF6] dark:hover:bg-[#0F3D2E] xl:hidden"
                     onClick={() => setMobileOpen(true)}
                     aria-label="Open menu"
                     whileTap={{ scale: 0.9 }}
                  >
                     <div className="flex h-5 w-5 flex-col justify-between">
                        <span className="block h-0.5 w-full rounded bg-current" />
                        <span className="block h-0.5 w-4/5 rounded bg-current" />
                        <span className="block h-0.5 w-full rounded bg-current" />
                     </div>
                  </motion.button>
               </div>
            </div>
         </motion.header>

         <MobileNav items={navItems} open={mobileOpen} onClose={() => setMobileOpen(false)} />

         {/* Mobile sticky bottom CTA bar */}
         <div className="fixed right-0 bottom-0 left-0 z-40 flex border-t border-[#E3F0E9] bg-white xl:hidden dark:border-[#1C4632] dark:bg-[#0A1F16]">
            <a
               href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
               className="flex flex-1 items-center justify-center gap-2 border-r border-[#E3F0E9] py-3.5 text-sm font-semibold text-[#0B1F17] dark:border-[#1C4632] dark:text-[#F0FBF6]"
            >
               <Phone className="h-4 w-4 text-[#0F5132] dark:text-[#22C55E]" />
               Call Now
            </a>
            <Link
               href="/admissions"
               className="flex flex-1 items-center justify-center gap-2 bg-[#0F5132] py-3.5 text-sm font-semibold text-white"
            >
               Apply Now
            </Link>
         </div>
      </>
   )
}
