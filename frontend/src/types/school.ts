/** School domain types for KPPS public site + admin CMS */

export type LeadStatus = 'NEW' | 'CONTACTED' | 'ENROLLED' | 'CLOSED'
export type LeadSource =
   | 'ENQUIRY_FORM'
   | 'CONTACT_FORM'
   | 'PHONE'
   | 'WALK_IN'
   | 'OTHER'

export type AchievementType =
   | 'TOPPER'
   | 'SPORTS'
   | 'CULTURAL'
   | 'AWARD'
   | 'OTHER'

export type MediaCategory =
   | 'HERO_SLIDER'
   | 'GALLERY'
   | 'FACILITY'
   | 'ACTIVITY'
   | 'ACHIEVEMENT'
   | 'OTHER'

export type StudentDocumentType = 'TC' | 'ADMIT_CARD' | 'RESULT'

export interface SchoolLead {
   id: string
   name: string
   phone: string
   email?: string | null
   classApplying?: string | null
   subject?: string | null
   message?: string | null
   status: LeadStatus
   source: LeadSource | string
   createdAt: string | Date
   updatedAt?: string | Date
}

export interface CreateEnquiryPayload {
   name: string
   phone: string
   email?: string
   classApplying?: string
   message?: string
   source?: string
}

export interface CreateContactPayload {
   name: string
   phone: string
   email?: string
   subject: string
   message: string
   source?: string
}

export interface Notice {
   id: string
   title: string
   body?: string | null
   pinned?: boolean
   publishedAt?: string | Date
   createdAt?: string | Date
   isActive?: boolean
}

export interface Achievement {
   id: string
   type: AchievementType | string
   name: string
   title?: string
   detail?: string | null
   description?: string | null
   year?: string | null
   imageUrl?: string | null
   isActive?: boolean
   createdAt?: string | Date
}

export interface MediaAsset {
   id: string
   url: string
   publicId?: string
   category: MediaCategory | string
   alt?: string | null
   createdAt?: string | Date
}

export interface StudentDocument {
   id?: string
   studentName: string
   className: string
   examSession?: string
   fileUrl: string
   type: StudentDocumentType | string
}

export interface StudentDocumentLookupPayload {
   admissionNo: string
   dob: string
   type: StudentDocumentType
   examSession?: string
}

export interface SiteSettings {
   schoolName: string
   tagline: string
   phone1?: string | null
   phone2?: string | null
   emailOffice?: string | null
   address?: string | null
   foundedYear?: string | null
   affiliationBoard?: string | null
   affiliationNumber?: string | null
   totalStudents?: string | null
   admissionsYear?: string | null
   principalName?: string | null
   principalMessage?: string | null
   whatsappNumber?: string | null
   facebookUrl?: string | null
   instagramUrl?: string | null
   youtubeUrl?: string | null
}

export interface HeroSlide {
   id: string
   headline: string
   subtext?: string | null
   ctaLabel?: string | null
   ctaHref?: string | null
   imageUrl?: string | null
   sortOrder?: number
   isActive?: boolean
}

export interface Testimonial {
   id: string
   name: string
   role?: string | null
   quote: string
   avatarUrl?: string | null
   isActive?: boolean
   sortOrder?: number
}

export interface Activity {
   id: string
   title: string
   category?: string | null
   description?: string | null
   imageUrl?: string | null
   date?: string | null
   isActive?: boolean
}

export interface PublicDownload {
   id: string
   title: string
   category?: string | null
   fileUrl: string
   description?: string | null
   isActive?: boolean
}

export interface RichBlock {
   id: string
   key: string
   title?: string | null
   content: string
   isActive?: boolean
}

export interface LeadStats {
   total?: number
   new?: number
   contacted?: number
   enrolled?: number
   closed?: number
}
