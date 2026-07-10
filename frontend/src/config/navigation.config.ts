/**
 * School admin navigation configuration
 */

import {
   IconDashboard,
   IconUsers,
   IconUserCheck,
   IconPalette,
   IconUser,
   IconFileText,
   IconBell,
   IconTrophy,
   IconPhoto,
   IconSlideshow,
   IconMessageCircle,
   IconCalendarEvent,
   IconDownload,
   IconBlocks,
   IconSettings,
} from '@tabler/icons-react'
import type { UserRole } from '@/types/auth'

export interface NavigationItem {
   id: string
   name: string
   href?: string
   icon: React.ComponentType<{ className?: string }>
   badge?: string | number
   roles: UserRole[]
   permissions?: string[]
   children?: NavigationItem[]
   isExpandable?: boolean
   defaultExpanded?: boolean
   external?: boolean
   disabled?: boolean
   divider?: boolean
   description?: string
   trackingId?: string
   category?: string
}

export interface NavigationSection {
   id: string
   name: string
   items: NavigationItem[]
   roles?: UserRole[]
   collapsible?: boolean
   defaultCollapsed?: boolean
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
   {
      id: 'dashboard',
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: IconDashboard,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_dashboard',
      category: 'overview',
   },
   {
      id: 'leads',
      name: 'Leads',
      href: '/admin/leads',
      icon: IconUserCheck,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_leads',
      category: 'admissions',
   },
   {
      id: 'documents',
      name: 'Documents',
      href: '/admin/documents',
      icon: IconFileText,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_documents',
      category: 'content',
   },
   {
      id: 'notices',
      name: 'Notices',
      href: '/admin/notices',
      icon: IconBell,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_notices',
      category: 'content',
   },
   {
      id: 'achievements',
      name: 'Achievements',
      href: '/admin/achievements',
      icon: IconTrophy,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_achievements',
      category: 'content',
   },
   {
      id: 'media',
      name: 'Media',
      href: '/admin/media',
      icon: IconPhoto,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_media',
      category: 'content',
   },
   {
      id: 'hero-slides',
      name: 'Hero Slides',
      href: '/admin/hero-slides',
      icon: IconSlideshow,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_hero_slides',
      category: 'content',
   },
   {
      id: 'testimonials',
      name: 'Testimonials',
      href: '/admin/testimonials',
      icon: IconMessageCircle,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_testimonials',
      category: 'content',
   },
   {
      id: 'activities',
      name: 'Activities',
      href: '/admin/activities',
      icon: IconCalendarEvent,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_activities',
      category: 'content',
   },
   {
      id: 'downloads',
      name: 'Downloads',
      href: '/admin/downloads',
      icon: IconDownload,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_downloads',
      category: 'content',
   },
   {
      id: 'rich-blocks',
      name: 'Rich Blocks',
      href: '/admin/rich-blocks',
      icon: IconBlocks,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_rich_blocks',
      category: 'content',
   },
   {
      id: 'settings',
      name: 'Settings',
      href: '/admin/settings',
      icon: IconSettings,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_settings',
      category: 'admin',
   },
   {
      id: 'user-management',
      name: 'Users',
      href: '/admin/users',
      icon: IconUsers,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_user_management',
      category: 'admin',
   },
   {
      id: 'theme-management',
      name: 'Themes',
      href: '/admin/themes',
      icon: IconPalette,
      roles: ['admin', 'superAdmin'],
      trackingId: 'nav_theme_management',
      category: 'customization',
   },
   {
      id: 'profile',
      name: 'Profile',
      href: '/admin/profile',
      icon: IconUser,
      roles: ['customer', 'admin', 'superAdmin'],
      trackingId: 'nav_profile',
      category: 'account',
   },
]

export const NAVIGATION_SECTIONS: NavigationSection[] = [
   {
      id: 'main',
      name: 'Main',
      items: NAVIGATION_ITEMS,
   },
]

export const PERMISSION_MAPPINGS = {
   view_dashboard: ['admin', 'superAdmin'],
   manage_leads: ['admin', 'superAdmin'],
   manage_users: ['admin', 'superAdmin'],
   manage_themes: ['admin', 'superAdmin'],
   view_profile: ['customer', 'admin', 'superAdmin'],
   edit_profile: ['customer', 'admin', 'superAdmin'],
   access_admin_panel: ['admin', 'superAdmin'],
   system_admin: ['superAdmin'],
} as const

export class NavigationUtils {
   static filterByRole(
      items: NavigationItem[],
      userRole?: UserRole
   ): NavigationItem[] {
      if (!userRole) return []

      return items
         .filter((item) => item.roles.includes(userRole))
         .map((item) => ({
            ...item,
            children: item.children
               ? this.filterByRole(item.children, userRole)
               : undefined,
         }))
         .filter((item) => !item.children || item.children.length > 0)
   }

   static filterSectionsByRole(
      sections: NavigationSection[],
      userRole?: UserRole
   ): NavigationSection[] {
      if (!userRole) return []

      return sections
         .filter(
            (section) => !section.roles || section.roles.includes(userRole)
         )
         .map((section) => ({
            ...section,
            items: this.filterByRole(section.items, userRole),
         }))
         .filter((section) => section.items.length > 0)
   }

   static hasPermission(
      item: NavigationItem,
      userRole?: UserRole,
      permissions?: string[]
   ): boolean {
      if (!userRole) return false
      if (!item.roles.includes(userRole)) return false
      if (item.permissions && permissions) {
         return item.permissions.some((permission) =>
            permissions.includes(permission)
         )
      }
      return true
   }

   static getFlattenedItems(items: NavigationItem[]): NavigationItem[] {
      const flattened: NavigationItem[] = []
      items.forEach((item) => {
         flattened.push(item)
         if (item.children) {
            flattened.push(...this.getFlattenedItems(item.children))
         }
      })
      return flattened
   }

   static findItemById(
      items: NavigationItem[],
      id: string
   ): NavigationItem | null {
      for (const item of items) {
         if (item.id === id) return item
         if (item.children) {
            const found = this.findItemById(item.children, id)
            if (found) return found
         }
      }
      return null
   }

   static findItemByHref(
      items: NavigationItem[],
      href: string
   ): NavigationItem | null {
      for (const item of items) {
         if (item.href === href) return item
         if (item.children) {
            const found = this.findItemByHref(item.children, href)
            if (found) return found
         }
      }
      return null
   }

   static getBreadcrumbPath(
      items: NavigationItem[],
      href: string
   ): NavigationItem[] {
      for (const item of items) {
         if (item.href === href) {
            return [item]
         }
         if (item.children) {
            const childPath = this.getBreadcrumbPath(item.children, href)
            if (childPath.length > 0) {
               return [item, ...childPath]
            }
         }
      }
      return []
   }

   static isItemActive(item: NavigationItem, currentPath: string): boolean {
      if (!item.href) return false
      if (item.href === currentPath) return true
      if (currentPath.startsWith(item.href)) {
         const remaining = currentPath.slice(item.href.length)
         if (remaining === '' || remaining.startsWith('/')) {
            return true
         }
      }
      if (item.children) {
         return item.children.some((child) =>
            this.isItemActive(child, currentPath)
         )
      }
      return false
   }

   static getNavigationStats(items: NavigationItem[], userRole?: UserRole) {
      const filteredItems = this.filterByRole(items, userRole)
      const flatItems = this.getFlattenedItems(filteredItems)
      return {
         totalItems: flatItems.length,
         expandableItems: flatItems.filter((item) => item.isExpandable).length,
         categoryCounts: flatItems.reduce(
            (acc, item) => {
               if (item.category) {
                  acc[item.category] = (acc[item.category] || 0) + 1
               }
               return acc
            },
            {} as Record<string, number>
         ),
         roleSpecificItems: {
            admin: this.filterByRole(items, 'admin').length,
            superAdmin: this.filterByRole(items, 'superAdmin').length,
         },
      }
   }
}

export const navigationConfig = {
   items: NAVIGATION_ITEMS,
   sections: NAVIGATION_SECTIONS,
   permissions: PERMISSION_MAPPINGS,
   utils: NavigationUtils,
}

export default navigationConfig
