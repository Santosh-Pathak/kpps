'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Sun, Moon, Phone, Mail, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MobileNav } from './MobileNav'

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
   { label: 'Downloads', href: '/downloads' },
   { label: 'Contact', href: '/contact' },
]

export function Header() {
   const [scrolled, setScrolled] = useState(false)
   const [mobileOpen, setMobileOpen] = useState(false)
   const [dark, setDark] = useState(false)
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
      const stored = localStorage.getItem('kpps-theme')
      const prefersDark = window.matchMedia(
         '(prefers-color-scheme: dark)'
      ).matches
      const isDark = stored === 'dark' || (!stored && prefersDark)
      document.documentElement.classList.toggle('dark', isDark)
      setDark(isDark)

      const onScroll = () => setScrolled(window.scrollY > 10)
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
         {/* Top utility bar */}
         <div className="bg-navy hidden text-xs text-white md:block">
            <div className="container-kpps flex items-center justify-between py-1.5">
               <div className="flex items-center gap-4">
                  <a
                     href="tel:+910000000000"
                     className="hover:text-secondary flex items-center gap-1 transition-colors"
                  >
                     <Phone className="h-3 w-3" />
                     +91 00000 00000
                  </a>
                  <a
                     href="mailto:info@kpps.edu.in"
                     className="hover:text-secondary flex items-center gap-1 transition-colors"
                  >
                     <Mail className="h-3 w-3" />
                     info@kpps.edu.in
                  </a>
               </div>
               <div className="flex items-center gap-3">
                  <span className="text-secondary font-semibold">
                     Admissions Open 2025–26
                  </span>
                  <Link href="/admissions">
                     <Button
                        variant="cta"
                        size="sm"
                        className="h-6 px-3 text-xs"
                     >
                        Apply Now
                     </Button>
                  </Link>
               </div>
            </div>
         </div>

         {/* Main header */}
         <header
            className={cn(
               'sticky top-0 z-50 w-full transition-all duration-300',
               scrolled
                  ? 'bg-background/95 shadow-md backdrop-blur-md'
                  : 'bg-background'
            )}
         >
            <div className="container-kpps flex h-16 items-center justify-between md:h-20">
               {/* Logo */}
               <Link href="/" className="flex shrink-0 items-center gap-3">
                  <div className="bg-navy flex h-10 w-10 items-center justify-center rounded-full md:h-12 md:w-12">
                     <GraduationCap className="text-secondary h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <div className="hidden sm:block">
                     <p className="font-heading text-navy dark:text-secondary text-base leading-tight font-bold md:text-lg">
                        Kids Paradise
                     </p>
                     <p className="text-muted-foreground text-xs leading-tight">
                        Sr. Sec. School
                     </p>
                  </div>
               </Link>

               {/* Desktop nav */}
               <nav className="hidden items-center gap-1 xl:flex">
                  {navItems.map((item) =>
                     item.children ? (
                        <div key={item.label} className="group relative">
                           <Link
                              href={item.href}
                              className="hover:bg-muted flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                           >
                              {item.label}
                              <svg
                                 className="h-3 w-3 opacity-60"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                 />
                              </svg>
                           </Link>
                           <div className="bg-popover border-border invisible absolute top-full left-0 z-50 mt-1 w-52 rounded-lg border opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                              {item.children.map((child) => (
                                 <Link
                                    key={child.label}
                                    href={child.href}
                                    className="hover:bg-muted block px-4 py-2.5 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg"
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
                           className="hover:bg-muted rounded-md px-3 py-2 text-sm font-medium transition-colors"
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
                     <button
                        onClick={toggleTheme}
                        className="hover:bg-muted rounded-md p-2 transition-colors"
                        aria-label="Toggle theme"
                     >
                        {dark ? (
                           <Sun className="h-5 w-5" />
                        ) : (
                           <Moon className="h-5 w-5" />
                        )}
                     </button>
                  )}

                  {/* Apply Now (desktop) */}
                  <Link href="/admissions" className="hidden lg:block">
                     <Button variant="cta" size="sm">
                        Apply Now
                     </Button>
                  </Link>

                  {/* Admin link */}
                  <Link href="/admin" className="hidden lg:block">
                     <button
                        className="hover:bg-muted rounded-md p-2 opacity-50 transition-colors hover:opacity-100"
                        aria-label="Admin"
                     >
                        <svg
                           className="h-4 w-4"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                           />
                        </svg>
                     </button>
                  </Link>

                  {/* Mobile hamburger */}
                  <button
                     className="hover:bg-muted rounded-md p-2 transition-colors xl:hidden"
                     onClick={() => setMobileOpen(true)}
                     aria-label="Open menu"
                  >
                     <Menu className="h-5 w-5" />
                  </button>
               </div>
            </div>
         </header>

         {/* Mobile Nav */}
         <MobileNav
            items={navItems}
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
         />

         {/* Mobile sticky CTA bar */}
         <div className="bg-navy border-navy-700 fixed right-0 bottom-0 left-0 z-40 flex border-t xl:hidden">
            <a
               href="tel:+910000000000"
               className="border-navy-700 flex flex-1 items-center justify-center gap-2 border-r py-3 text-sm font-semibold text-white"
            >
               <Phone className="h-4 w-4" />
               Call Now
            </a>
            <Link
               href="/admissions"
               className="bg-accent flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-white"
            >
               <GraduationCap className="h-4 w-4" />
               Apply Now
            </Link>
         </div>
      </>
   )
}
