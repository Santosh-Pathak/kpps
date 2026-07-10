import { httpService } from '@/services/http'
import type {
   Achievement,
   Activity,
   HeroSlide,
   MediaAsset,
   Notice,
   PublicDownload,
   RichBlock,
   SiteSettings,
   Testimonial,
} from '@/types/school'

/** Notices */
export const NoticesAPI = {
   getPublic: () =>
      httpService.get<Notice[]>('/api/v1/notices/public', { skipAuth: true }),
   getAll: () => httpService.get<Notice[]>('/api/v1/notices'),
   create: (data: Partial<Notice>) =>
      httpService.post<Notice>('/api/v1/notices', data),
   update: (id: string, data: Partial<Notice>) =>
      httpService.patch<Notice>(`/api/v1/notices/${id}`, data),
   delete: (id: string) => httpService.delete<void>(`/api/v1/notices/${id}`),
}

/** Achievements */
export const AchievementsAPI = {
   getPublic: () =>
      httpService.get<Achievement[]>('/api/v1/achievements/public', {
         skipAuth: true,
      }),
   getAll: () => httpService.get<Achievement[]>('/api/v1/achievements'),
   create: (data: Partial<Achievement>) =>
      httpService.post<Achievement>('/api/v1/achievements', data),
   update: (id: string, data: Partial<Achievement>) =>
      httpService.patch<Achievement>(`/api/v1/achievements/${id}`, data),
   delete: (id: string) =>
      httpService.delete<void>(`/api/v1/achievements/${id}`),
}

/** Media */
export const MediaAPI = {
   getAll: (category?: string) => {
      const qs = category ? `?category=${encodeURIComponent(category)}` : ''
      return httpService.get<MediaAsset[]>(`/api/v1/media${qs}`)
   },
   upload: (formData: FormData) =>
      httpService.upload<MediaAsset>('/api/v1/media', formData),
   delete: (id: string) => httpService.delete<void>(`/api/v1/media/${id}`),
}

/** Site settings */
export const SettingsAPI = {
   get: () =>
      httpService.get<SiteSettings>('/api/v1/site-settings', {
         skipAuth: true,
         showErrorToast: false,
      }),
   update: (data: Partial<SiteSettings>) =>
      httpService.patch<SiteSettings>('/api/v1/site-settings', data, {
         showErrorToast: false,
      }),
}

/** Hero slides */
export const HeroSlidesAPI = {
   getAll: () => httpService.get<HeroSlide[]>('/api/v1/hero-slides'),
   getPublic: () =>
      httpService.get<HeroSlide[]>('/api/v1/hero-slides/public', {
         skipAuth: true,
         showErrorToast: false,
      }),
   create: (data: Partial<HeroSlide>) =>
      httpService.post<HeroSlide>('/api/v1/hero-slides', data),
   update: (id: string, data: Partial<HeroSlide>) =>
      httpService.patch<HeroSlide>(`/api/v1/hero-slides/${id}`, data),
   delete: (id: string) =>
      httpService.delete<void>(`/api/v1/hero-slides/${id}`),
}

/** Testimonials */
export const TestimonialsAPI = {
   getAll: () => httpService.get<Testimonial[]>('/api/v1/testimonials'),
   getPublic: () =>
      httpService.get<Testimonial[]>('/api/v1/testimonials/public', {
         skipAuth: true,
         showErrorToast: false,
      }),
   create: (data: Partial<Testimonial>) =>
      httpService.post<Testimonial>('/api/v1/testimonials', data),
   update: (id: string, data: Partial<Testimonial>) =>
      httpService.patch<Testimonial>(`/api/v1/testimonials/${id}`, data),
   delete: (id: string) =>
      httpService.delete<void>(`/api/v1/testimonials/${id}`),
}

/** Activities */
export const ActivitiesAPI = {
   getAll: () => httpService.get<Activity[]>('/api/v1/activities'),
   getPublic: () =>
      httpService.get<Activity[]>('/api/v1/activities/public', {
         skipAuth: true,
         showErrorToast: false,
      }),
   create: (data: Partial<Activity>) =>
      httpService.post<Activity>('/api/v1/activities', data),
   update: (id: string, data: Partial<Activity>) =>
      httpService.patch<Activity>(`/api/v1/activities/${id}`, data),
   delete: (id: string) => httpService.delete<void>(`/api/v1/activities/${id}`),
}

/** Public downloads */
export const PublicDownloadsAPI = {
   getAll: () => httpService.get<PublicDownload[]>('/api/v1/public-downloads'),
   getPublic: () =>
      httpService.get<PublicDownload[]>('/api/v1/public-downloads/public', {
         skipAuth: true,
         showErrorToast: false,
      }),
   create: (data: Partial<PublicDownload>) =>
      httpService.post<PublicDownload>('/api/v1/public-downloads', data),
   update: (id: string, data: Partial<PublicDownload>) =>
      httpService.patch<PublicDownload>(`/api/v1/public-downloads/${id}`, data),
   delete: (id: string) =>
      httpService.delete<void>(`/api/v1/public-downloads/${id}`),
}

/** Rich content blocks */
export const RichBlocksAPI = {
   getAll: () => httpService.get<RichBlock[]>('/api/v1/rich-blocks'),
   create: (data: Partial<RichBlock>) =>
      httpService.post<RichBlock>('/api/v1/rich-blocks', data),
   update: (id: string, data: Partial<RichBlock>) =>
      httpService.patch<RichBlock>(`/api/v1/rich-blocks/${id}`, data),
   delete: (id: string) =>
      httpService.delete<void>(`/api/v1/rich-blocks/${id}`),
}
