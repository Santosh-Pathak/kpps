'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
   GraduationCap,
   LayoutDashboard,
   Image,
   FileText,
   Users,
   Bell,
   Trophy,
   Settings,
   LogOut,
   ChevronRight,
   SlidersHorizontal,
   MessageSquareQuote,
   CalendarDays,
   Download,
   Blocks,
   UserCircle,
   Palette,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/store/auth.store'

const navItems = [
   {
      href: '/admin/dashboard',
      icon: LayoutDashboard,
      label: 'Dashboard',
      exact: true,
   },
   { href: '/admin/leads', icon: Users, label: 'Leads / Enquiries' },
   { href: '/admin/documents', icon: FileText, label: 'Documents' },
   { href: '/admin/notices', icon: Bell, label: 'Notices' },
   { href: '/admin/achievements', icon: Trophy, label: 'Achievements' },
   { href: '/admin/media', icon: Image, label: 'Media' },
   {
      href: '/admin/hero-slides',
      icon: SlidersHorizontal,
      label: 'Hero Slides',
   },
   {
      href: '/admin/testimonials',
      icon: MessageSquareQuote,
      label: 'Testimonials',
   },
   { href: '/admin/activities', icon: CalendarDays, label: 'Activities' },
   { href: '/admin/downloads', icon: Download, label: 'Public Downloads' },
   { href: '/admin/rich-blocks', icon: Blocks, label: 'Rich Blocks' },
   { href: '/admin/settings', icon: Settings, label: 'Settings' },
   { href: '/admin/users', icon: Users, label: 'Users' },
   { href: '/admin/themes', icon: Palette, label: 'Themes' },
   { href: '/admin/profile', icon: UserCircle, label: 'Profile' },
]

export function AdminNav() {
   const pathname = usePathname()
   const router = useRouter()
   const logout = useAuthStore((s) => s.logout)

   const handleLogout = () => {
      logout()
      router.push('/admin')
   }

   return (
      <aside className="bg-navy sticky top-0 hidden h-screen w-56 shrink-0 flex-col text-white md:flex">
         <div className="border-b border-white/10 p-5">
            <div className="flex items-center gap-2">
               <GraduationCap className="text-secondary h-6 w-6" />
               <div>
                  <p className="font-heading text-sm leading-tight font-bold">
                     KPPS Admin
                  </p>
                  <p className="text-xs text-white/50">Control Panel</p>
               </div>
            </div>
         </div>

         <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
            {navItems.map((item) => {
               const active = item.exact
                  ? pathname === item.href
                  : pathname.startsWith(item.href)
               return (
                  <Link
                     key={item.href}
                     href={item.href}
                     className={cn(
                        'flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors',
                        active
                           ? 'bg-white/15 font-medium text-white'
                           : 'text-white/70 hover:bg-white/10 hover:text-white'
                     )}
                  >
                     <item.icon className="h-4 w-4 shrink-0" />
                     <span className="flex-1">{item.label}</span>
                     {active && <ChevronRight className="h-3 w-3" />}
                  </Link>
               )
            })}
         </nav>

         <div className="border-t border-white/10 p-3">
            <button
               onClick={handleLogout}
               className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
               <LogOut className="h-4 w-4" />
               Sign Out
            </button>
            <Link
               href="/"
               className="mt-1 flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-white/40 transition-colors hover:text-white/70"
            >
               View Site →
            </Link>
         </div>
      </aside>
   )
}
