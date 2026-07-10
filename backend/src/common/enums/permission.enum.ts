/**
 * Permission-based access control
 * Define granular permissions for specific features/actions
 */
export enum Permission {
  // User Management
  USER_CREATE = 'user:create',
  USER_READ = 'user:read',
  USER_UPDATE = 'user:update',
  USER_DELETE = 'user:delete',
  USER_LIST = 'user:list',

  // Profile Management
  PROFILE_READ = 'profile:read',
  PROFILE_UPDATE = 'profile:update',

  // File Management
  FILE_UPLOAD = 'file:upload',
  FILE_DELETE = 'file:delete',
  FILE_READ = 'file:read',

  // Auth Management
  AUTH_MANAGE_TOKENS = 'auth:manage-tokens',
  AUTH_VERIFY_EMAIL = 'auth:verify-email',

  // Admin Features
  ADMIN_ACCESS = 'admin:access',
  ADMIN_SETTINGS = 'admin:settings',

  // Leads
  LEAD_CREATE = 'lead:create',
  LEAD_READ = 'lead:read',
  LEAD_UPDATE = 'lead:update',
  LEAD_DELETE = 'lead:delete',
  LEAD_LIST = 'lead:list',

  // Student Documents
  STUDENT_DOCUMENT_CREATE = 'student-document:create',
  STUDENT_DOCUMENT_READ = 'student-document:read',
  STUDENT_DOCUMENT_UPDATE = 'student-document:update',
  STUDENT_DOCUMENT_DELETE = 'student-document:delete',
  STUDENT_DOCUMENT_LIST = 'student-document:list',

  // Notices
  NOTICE_CREATE = 'notice:create',
  NOTICE_READ = 'notice:read',
  NOTICE_UPDATE = 'notice:update',
  NOTICE_DELETE = 'notice:delete',
  NOTICE_LIST = 'notice:list',

  // Achievements
  ACHIEVEMENT_CREATE = 'achievement:create',
  ACHIEVEMENT_READ = 'achievement:read',
  ACHIEVEMENT_UPDATE = 'achievement:update',
  ACHIEVEMENT_DELETE = 'achievement:delete',
  ACHIEVEMENT_LIST = 'achievement:list',

  // Media
  MEDIA_CREATE = 'media:create',
  MEDIA_READ = 'media:read',
  MEDIA_UPDATE = 'media:update',
  MEDIA_DELETE = 'media:delete',
  MEDIA_LIST = 'media:list',

  // Site Settings
  SITE_SETTINGS_READ = 'site-settings:read',
  SITE_SETTINGS_UPDATE = 'site-settings:update',

  // Hero Slides
  HERO_SLIDE_CREATE = 'hero-slide:create',
  HERO_SLIDE_READ = 'hero-slide:read',
  HERO_SLIDE_UPDATE = 'hero-slide:update',
  HERO_SLIDE_DELETE = 'hero-slide:delete',
  HERO_SLIDE_LIST = 'hero-slide:list',

  // Testimonials
  TESTIMONIAL_CREATE = 'testimonial:create',
  TESTIMONIAL_READ = 'testimonial:read',
  TESTIMONIAL_UPDATE = 'testimonial:update',
  TESTIMONIAL_DELETE = 'testimonial:delete',
  TESTIMONIAL_LIST = 'testimonial:list',

  // Activities
  ACTIVITY_CREATE = 'activity:create',
  ACTIVITY_READ = 'activity:read',
  ACTIVITY_UPDATE = 'activity:update',
  ACTIVITY_DELETE = 'activity:delete',
  ACTIVITY_LIST = 'activity:list',

  // Public Downloads
  PUBLIC_DOWNLOAD_CREATE = 'public-download:create',
  PUBLIC_DOWNLOAD_READ = 'public-download:read',
  PUBLIC_DOWNLOAD_UPDATE = 'public-download:update',
  PUBLIC_DOWNLOAD_DELETE = 'public-download:delete',
  PUBLIC_DOWNLOAD_LIST = 'public-download:list',

  // Rich Blocks
  RICH_BLOCK_CREATE = 'rich-block:create',
  RICH_BLOCK_READ = 'rich-block:read',
  RICH_BLOCK_UPDATE = 'rich-block:update',
  RICH_BLOCK_DELETE = 'rich-block:delete',
  RICH_BLOCK_LIST = 'rich-block:list',

  // Audit Logs
  AUDIT_LOG_READ = 'audit-log:read',
  AUDIT_LOG_LIST = 'audit-log:list',
}

// Map roles to their default permissions
import { Role } from './role.enum';

const SCHOOL_CMS_PERMISSIONS: Permission[] = [
  Permission.LEAD_CREATE,
  Permission.LEAD_READ,
  Permission.LEAD_UPDATE,
  Permission.LEAD_DELETE,
  Permission.LEAD_LIST,
  Permission.STUDENT_DOCUMENT_CREATE,
  Permission.STUDENT_DOCUMENT_READ,
  Permission.STUDENT_DOCUMENT_UPDATE,
  Permission.STUDENT_DOCUMENT_DELETE,
  Permission.STUDENT_DOCUMENT_LIST,
  Permission.NOTICE_CREATE,
  Permission.NOTICE_READ,
  Permission.NOTICE_UPDATE,
  Permission.NOTICE_DELETE,
  Permission.NOTICE_LIST,
  Permission.ACHIEVEMENT_CREATE,
  Permission.ACHIEVEMENT_READ,
  Permission.ACHIEVEMENT_UPDATE,
  Permission.ACHIEVEMENT_DELETE,
  Permission.ACHIEVEMENT_LIST,
  Permission.MEDIA_CREATE,
  Permission.MEDIA_READ,
  Permission.MEDIA_UPDATE,
  Permission.MEDIA_DELETE,
  Permission.MEDIA_LIST,
  Permission.SITE_SETTINGS_READ,
  Permission.SITE_SETTINGS_UPDATE,
  Permission.HERO_SLIDE_CREATE,
  Permission.HERO_SLIDE_READ,
  Permission.HERO_SLIDE_UPDATE,
  Permission.HERO_SLIDE_DELETE,
  Permission.HERO_SLIDE_LIST,
  Permission.TESTIMONIAL_CREATE,
  Permission.TESTIMONIAL_READ,
  Permission.TESTIMONIAL_UPDATE,
  Permission.TESTIMONIAL_DELETE,
  Permission.TESTIMONIAL_LIST,
  Permission.ACTIVITY_CREATE,
  Permission.ACTIVITY_READ,
  Permission.ACTIVITY_UPDATE,
  Permission.ACTIVITY_DELETE,
  Permission.ACTIVITY_LIST,
  Permission.PUBLIC_DOWNLOAD_CREATE,
  Permission.PUBLIC_DOWNLOAD_READ,
  Permission.PUBLIC_DOWNLOAD_UPDATE,
  Permission.PUBLIC_DOWNLOAD_DELETE,
  Permission.PUBLIC_DOWNLOAD_LIST,
  Permission.RICH_BLOCK_CREATE,
  Permission.RICH_BLOCK_READ,
  Permission.RICH_BLOCK_UPDATE,
  Permission.RICH_BLOCK_DELETE,
  Permission.RICH_BLOCK_LIST,
  Permission.AUDIT_LOG_READ,
  Permission.AUDIT_LOG_LIST,
];

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  // Super Admin - Full system access
  [Role.SUPER_ADMIN]: Object.values(Permission),

  // Admin - Administrative operations + all school CMS
  [Role.ADMIN]: [
    Permission.USER_CREATE,
    Permission.USER_READ,
    Permission.USER_UPDATE,
    Permission.USER_LIST,
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE,
    Permission.FILE_UPLOAD,
    Permission.FILE_DELETE,
    Permission.FILE_READ,
    Permission.AUTH_MANAGE_TOKENS,
    Permission.ADMIN_ACCESS,
    Permission.ADMIN_SETTINGS,
    ...SCHOOL_CMS_PERMISSIONS,
  ],

  // Media Manager - content media modules (not users/settings delete)
  [Role.MEDIA_MANAGER]: [
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE,
    Permission.FILE_UPLOAD,
    Permission.FILE_READ,
    Permission.MEDIA_CREATE,
    Permission.MEDIA_READ,
    Permission.MEDIA_UPDATE,
    Permission.MEDIA_DELETE,
    Permission.MEDIA_LIST,
    Permission.NOTICE_CREATE,
    Permission.NOTICE_READ,
    Permission.NOTICE_UPDATE,
    Permission.NOTICE_DELETE,
    Permission.NOTICE_LIST,
    Permission.ACHIEVEMENT_CREATE,
    Permission.ACHIEVEMENT_READ,
    Permission.ACHIEVEMENT_UPDATE,
    Permission.ACHIEVEMENT_DELETE,
    Permission.ACHIEVEMENT_LIST,
    Permission.ACTIVITY_CREATE,
    Permission.ACTIVITY_READ,
    Permission.ACTIVITY_UPDATE,
    Permission.ACTIVITY_DELETE,
    Permission.ACTIVITY_LIST,
    Permission.HERO_SLIDE_CREATE,
    Permission.HERO_SLIDE_READ,
    Permission.HERO_SLIDE_UPDATE,
    Permission.HERO_SLIDE_DELETE,
    Permission.HERO_SLIDE_LIST,
    Permission.PUBLIC_DOWNLOAD_CREATE,
    Permission.PUBLIC_DOWNLOAD_READ,
    Permission.PUBLIC_DOWNLOAD_UPDATE,
    Permission.PUBLIC_DOWNLOAD_DELETE,
    Permission.PUBLIC_DOWNLOAD_LIST,
  ],

  // Developer - Development and user management
  [Role.DEVELOPER]: [
    Permission.USER_READ,
    Permission.USER_LIST,
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE,
    Permission.FILE_UPLOAD,
    Permission.FILE_READ,
    Permission.AUTH_VERIFY_EMAIL,
  ],
};

// Export as Map for efficient lookups (similar to roleRights pattern)
export const roleRights = new Map(Object.entries(ROLE_PERMISSIONS));

// Get permissions for a specific role
export function getRolePermissions(role: Role): Permission[] {
  return roleRights.get(role) || [];
}

/**
 * Check if a role has any of the required permissions
 */
export function hasAnyPermission(role: Role, permissions: Permission[]): boolean {
  const rolePermissions = ROLE_PERMISSIONS[role] || [];
  return permissions.some((permission) => rolePermissions.includes(permission));
}

/**
 * Check if a role has all of the required permissions
 */
export function hasAllPermissions(role: Role, permissions: Permission[]): boolean {
  const rolePermissions = ROLE_PERMISSIONS[role] || [];
  return permissions.every((permission) => rolePermissions.includes(permission));
}
