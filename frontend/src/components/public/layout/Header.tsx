'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Phone, Mail, ChevronDown, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/public/shared/Logo'
import { MobileNav } from './MobileNav'
import { schoolInfo } from '@/lib/dummy-data'
import { cn } from '@/lib/utils'

// Navigation items — broken destinations (/activities, /achievements) removed
// until their pages are built; dead nav links erode trust.
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
   const pathname = usePathname()

   const { scrollY } = useScroll()

   // Transparent over hero → solid with soft shadow on scroll
   const navBg = useTransform(
      scrollY,
      [0, 80],
      ['rgba(255,255,255,0)', 'rgba(255,255,255,1)']
   )
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

      // Utility bar fades on scroll-down, returns on scroll-up
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

   // A nav item is "active" if the current path equals or starts with its href
   function isActive(href: string) {
      if (href === '/') return pathname === '/'
      return pathname === href || pathname.startsWith(href + '/')
   }

   return (
      <>
         {/* ── Utility bar: contact info only, desktop ─────────────────────── */}
         {/* Opacity-only toggle keeps layout stable (no height flash) */}
         <div
            aria-hidden={!utilityVisible}
            className="hidden bg-[var(--sp-primary)] text-xs text-white md:block"
            style={{
               opacity: utilityVisible ? 1 : 0,
               pointerEvents: utilityVisible ? 'auto' : 'none',
               transition: 'opacity 200ms ease',
            }}
         >
            <div className="container-kpps flex items-center justify-between py-1.5">
               <div className="flex items-center gap-5">
                  <a
                     href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
                     className="flex items-center gap-1.5 opacity-80 transition-opacity hover:opacity-100"
                  >
                     <Phone className="h-3 w-3" aria-hidden="true" />
                     {schoolInfo.phone}
                  </a>
                  <a
                     href={`mailto:${schoolInfo.email}`}
                     className="flex items-center gap-1.5 opacity-80 transition-opacity hover:opacity-100"
                  >
                     <Mail className="h-3 w-3" aria-hidden="true" />
                     {schoolInfo.email}
                  </a>
               </div>
               <p className="font-medium text-[var(--sp-accent-soft)]">
                  Admissions Open — {schoolInfo.admissionsYear}
               </p>
            </div>
         </div>

         {/* ── Main header ─────────────────────────────────────────────────── */}
         <motion.header
            className="sticky top-0 z-50 w-full"
            style={{
               backgroundColor: navBg,
               boxShadow: navShadow,
               backdropFilter: 'blur(12px)',
               WebkitBackdropFilter: 'blur(12px)',
            }}
         >
            <div className="container-kpps flex h-16 items-center justify-between md:h-20">

               <Logo size="md" />

               {/* ── Desktop nav (lg+) ─────────────────────────────────────── */}
               {/* Breakpoint moved from xl → lg so tablet users get the full nav */}
               <nav
                  className="hidden items-center gap-0.5 lg:flex"
                  aria-label="Main navigation"
               >
                  {navItems.map((item) =>
                     item.children ? (
                        <DropdownItem
                           key={item.label}
                           item={item}
                           active={isActive(item.href)}
                        />
                     ) : (
                        <NavLink
                           key={item.label}
                           href={item.href}
                           active={isActive(item.href)}
                        >
                           {item.label}
                        </NavLink>
                     )
                  )}
               </nav>

               {/* ── Right controls ────────────────────────────────────────── */}
               <div className="flex items-center gap-1.5">

                  {/* Theme toggle — mounted guard prevents hydration flicker */}
                  {mounted && (
                     <button
                        onClick={toggleTheme}
                        className={cn(
                           'flex h-9 w-9 items-center justify-center rounded-md',
                           'text-[var(--sp-text)] transition-colors duration-150',
                           'hover:bg-[var(--sp-accent-soft)]',
                           'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)] focus-visible:ring-offset-1'
                        )}
                        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                     >
                        <AnimatePresence mode="wait" initial={false}>
                           <motion.span
                              key={dark ? 'sun' : 'moon'}
                              initial={{ rotate: -90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: 90, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                              className="block"
                           >
                              {dark
                                 ? <Sun className="h-4 w-4" aria-hidden="true" />
                                 : <Moon className="h-4 w-4" aria-hidden="true" />
                              }
                           </motion.span>
                        </AnimatePresence>
                     </button>
                  )}

                  {/* Primary CTA — single Apply point on desktop header */}
                  <Button
                     variant="primary"
                     size="sm"
                     className="hidden rounded-full px-5 text-xs font-bold tracking-wide lg:inline-flex"
                     asChild
                  >
                     <Link href="/admissions">Apply Now</Link>
                  </Button>

                  {/* Hamburger — lg and below only */}
                  <button
                     className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-md lg:hidden',
                        'text-[var(--sp-text)] transition-colors duration-150',
                        'hover:bg-[var(--sp-accent-soft)]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)] focus-visible:ring-offset-1'
                     )}
                     onClick={() => setMobileOpen(true)}
                     aria-label="Open navigation menu"
                     aria-expanded={mobileOpen}
                     aria-controls="mobile-nav-drawer"
                  >
                     <Menu className="h-5 w-5" aria-hidden="true" />
                  </button>
               </div>
            </div>
         </motion.header>

         <MobileNav
            id="mobile-nav-drawer"
            items={navItems}
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            currentPath={pathname}
         />

         {/* ── Mobile sticky bottom CTA bar (lg and below) ───────────────── */}
         <div
            className="fixed right-0 bottom-0 left-0 z-40 flex border-t border-[var(--sp-border)] bg-white lg:hidden dark:border-[var(--sp-border)] dark:bg-[var(--sp-bg)]"
            role="complementary"
            aria-label="Quick actions"
         >
            <a
               href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
               className={cn(
                  'flex min-h-[3.25rem] flex-1 items-center justify-center gap-2',
                  'border-r border-[var(--sp-border)] text-sm font-semibold',
                  'text-[var(--sp-text)] transition-colors',
                  'hover:bg-[var(--sp-accent-soft)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--sp-accent)]'
               )}
            >
               <Phone className="h-4 w-4 text-[var(--sp-primary)]" aria-hidden="true" />
               Call Now
            </a>
            <Link
               href="/admissions"
               className={cn(
                  'flex min-h-[3.25rem] flex-1 items-center justify-center gap-2',
                  'bg-[var(--sp-primary)] text-sm font-semibold text-white',
                  'transition-colors hover:bg-[var(--sp-primary-dark)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white'
               )}
            >
               Apply Now
            </Link>
         </div>
      </>
   )
}

// ── Sub-components ────────────────────────────────────────────────────────────

interface NavLinkProps {
   href: string
   active: boolean
   children: React.ReactNode
}

/** Plain nav link with shared layoutId pill for the active indicator */
function NavLink({ href, active, children }: NavLinkProps) {
   return (
      <Link
         href={href}
         className={cn(
            'relative rounded-md px-3 py-2 text-sm font-medium',
            'transition-colors duration-150',
            'hover:bg-[var(--sp-accent-soft)] hover:text-[var(--sp-primary)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)]',
            active
               ? 'text-[var(--sp-primary)] dark:text-[var(--sp-accent)]'
               : 'text-[var(--sp-text)] dark:text-[var(--sp-text)]'
         )}
         aria-current={active ? 'page' : undefined}
      >
         {/* Animated active-pill — slides between links via shared layoutId */}
         {active && (
            <motion.span
               layoutId="nav-active-pill"
               className="absolute inset-0 rounded-md bg-[var(--sp-accent-soft)] dark:bg-[var(--sp-accent-soft)]"
               transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
            />
         )}
         <span className="relative z-10">{children}</span>
      </Link>
   )
}

interface DropdownItemProps {
   item: { label: string; href: string; children: { label: string; href: string }[] }
   active: boolean
}

/** Nav item with a CSS-hover dropdown (no JS needed; keyboard accessible via focus-within) */
function DropdownItem({ item, active }: DropdownItemProps) {
   return (
      <div className="group relative">
         <Link
            href={item.href}
            className={cn(
               'relative flex items-center gap-0.5 rounded-md px-3 py-2 text-sm font-medium',
               'transition-colors duration-150',
               'hover:bg-[var(--sp-accent-soft)] hover:text-[var(--sp-primary)]',
               'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sp-accent)]',
               active
                  ? 'text-[var(--sp-primary)] dark:text-[var(--sp-accent)]'
                  : 'text-[var(--sp-text)] dark:text-[var(--sp-text)]'
            )}
            aria-current={active ? 'page' : undefined}
         >
            {active && (
               <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-md bg-[var(--sp-accent-soft)]"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
               />
            )}
            <span className="relative z-10 flex items-center gap-0.5">
               {item.label}
               <ChevronDown
                  className="h-3 w-3 opacity-50 transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden="true"
               />
            </span>
         </Link>

         {/* Dropdown panel — CSS hover + focus-within for keyboard nav */}
         <div
            className={cn(
               'invisible absolute top-full left-0 z-50 mt-1.5 w-52',
               'rounded-lg border border-[var(--sp-border)] bg-white',
               'shadow-[var(--shadow-elevated,0_8px_32px_rgba(15,81,50,0.12))]',
               'opacity-0 transition-all duration-150',
               'group-hover:visible group-hover:opacity-100',
               'group-focus-within:visible group-focus-within:opacity-100',
               'dark:border-[var(--sp-border)] dark:bg-[var(--sp-bg-alt)]'
            )}
            role="menu"
            aria-label={`${item.label} submenu`}
         >
            {item.children.map((child, i) => (
               <Link
                  key={child.label}
                  href={child.href}
                  role="menuitem"
                  className={cn(
                     'block px-4 py-2.5 text-sm text-[var(--sp-text)]',
                     'transition-colors duration-100',
                     'hover:bg-[var(--sp-bg-alt)] hover:text-[var(--sp-primary)]',
                     'focus-visible:outline-none focus-visible:bg-[var(--sp-accent-soft)] focus-visible:text-[var(--sp-primary)]',
                     i === 0 && 'rounded-t-lg',
                     i === item.children.length - 1 && 'rounded-b-lg'
                  )}
               >
                  {child.label}
               </Link>
            ))}
         </div>
      </div>
   )
}
