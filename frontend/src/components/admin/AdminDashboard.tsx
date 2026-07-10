'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Users, Bell, Trophy, ArrowRight } from 'lucide-react'
import { LeadsAPI } from '@/services/apis/leads.api'
import { NoticesAPI, AchievementsAPI } from '@/services/apis/school.api'
import { ROUTES } from '@/constants/urls'

type StatCard = {
   label: string
   value: number | string
   href: string
   icon: typeof Users
   color: string
}

export function AdminDashboard() {
   const [newLeads, setNewLeads] = useState(0)
   const [noticesCount, setNoticesCount] = useState(0)
   const [achievementsCount, setAchievementsCount] = useState(0)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      Promise.all([
         LeadsAPI.getStats()
            .then((s) => setNewLeads(s.new ?? 0))
            .catch(() => setNewLeads(0)),
         NoticesAPI.getAll()
            .then((n) => setNoticesCount(n.length))
            .catch(() => setNoticesCount(0)),
         AchievementsAPI.getAll()
            .then((a) => setAchievementsCount(a.length))
            .catch(() => setAchievementsCount(0)),
      ]).finally(() => setLoading(false))
   }, [])

   const cards: StatCard[] = [
      {
         label: 'New Leads',
         value: newLeads,
         href: ROUTES.ADMIN_LEADS,
         icon: Users,
         color: 'bg-blue-500/10 text-blue-600',
      },
      {
         label: 'Notices',
         value: noticesCount,
         href: ROUTES.ADMIN_NOTICES,
         icon: Bell,
         color: 'bg-amber-500/10 text-amber-600',
      },
      {
         label: 'Achievements',
         value: achievementsCount,
         href: ROUTES.ADMIN_ACHIEVEMENTS,
         icon: Trophy,
         color: 'bg-green-500/10 text-green-600',
      },
   ]

   if (loading) {
      return <p className="text-muted-foreground text-sm">Loading dashboard…</p>
   }

   return (
      <div>
         <p className="text-muted-foreground mb-6 text-sm">
            Welcome to the KPPS admin control panel.
         </p>

         <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
               <Link
                  key={card.label}
                  href={card.href}
                  className="bg-background border-border group rounded-xl border p-5 transition-shadow hover:shadow-md"
               >
                  <div className="flex items-start justify-between">
                     <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.color}`}
                     >
                        <card.icon className="h-5 w-5" />
                     </div>
                     <ArrowRight className="text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="font-heading mt-4 text-3xl font-bold">
                     {card.value}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">
                     {card.label}
                  </p>
               </Link>
            ))}
         </div>

         <div className="bg-background border-border rounded-xl border p-6">
            <h2 className="font-heading mb-4 text-base font-semibold">
               Quick Links
            </h2>
            <div className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
               {[
                  { label: 'Manage Leads', href: ROUTES.ADMIN_LEADS },
                  { label: 'Upload Media', href: ROUTES.ADMIN_MEDIA },
                  { label: 'Site Settings', href: ROUTES.ADMIN_SETTINGS },
                  { label: 'Hero Slides', href: ROUTES.ADMIN_HERO_SLIDES },
               ].map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     className="text-primary hover:underline"
                  >
                     {link.label} →
                  </Link>
               ))}
            </div>
         </div>
      </div>
   )
}
