import { httpService } from '@/services/http'
import { API_ENDPOINTS } from '@/constants/urls'

export type CreateEnquiryPayload = {
   name: string
   phone: string
   email?: string
   classApplying?: string
   message?: string
}

export type CreateContactPayload = {
   name: string
   phone: string
   email?: string
   subject: string
   message: string
}

export type LeadStats = {
   new?: number
   total?: number
   contacted?: number
   closed?: number
   [key: string]: number | undefined
}

export type SchoolLead = {
   _id: string
   name: string
   phone: string
   email?: string
   classApplying?: string
   subject?: string
   message?: string
   type?: 'enquiry' | 'contact'
   status?: string
   createdAt?: string
   updatedAt?: string
}

/** School admission / contact leads (public + admin) */
export const LeadsAPI = {
   createEnquiry: (data: CreateEnquiryPayload) =>
      httpService.post<SchoolLead>(API_ENDPOINTS.LEADS.CREATE, data, {
         skipAuth: true,
      }),

   createContact: (data: CreateContactPayload) =>
      httpService.post<SchoolLead>(API_ENDPOINTS.LEADS.CONTACT, data, {
         skipAuth: true,
      }),

   getAll: () => httpService.get<SchoolLead[]>(API_ENDPOINTS.LEADS.GET_ALL),

   getStats: () => httpService.get<LeadStats>(API_ENDPOINTS.LEADS.STATS),

   updateStatus: (id: string, status: string) =>
      httpService.patch<SchoolLead>(
         API_ENDPOINTS.LEADS.UPDATE_STATUS.replace(':id', id),
         { status }
      ),
}
