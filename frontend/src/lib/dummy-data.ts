/**
 * Central dummy data store for the KPPS public website.
 * Replace any field with real CMS data — never hardcode content in components.
 * Images: picsum.photos with deterministic seeds so they stay consistent on reload.
 * TODO items mark where real assets need to be swapped in later.
 */

import {
   GraduationCap,
   Shield,
   Bus,
   Trophy,
   Lightbulb,
   BarChart3,
   Library,
   Microscope,
   Monitor,
   Mic,
   Heart,
   UtensilsCrossed,
   Leaf,
   Music,
   Palette,
   Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── School contact info ─────────────────────────────────────────────────────
export const schoolInfo = {
   name: 'Kids Paradise Senior Secondary School',
   short: 'KPPS',
   tagline: 'Nurturing Minds, Building Futures',
   founded: '2001',
   affiliation: 'CBSE',
   phone: '+91 00000 00000',
   email: 'info@kpps.edu.in',
   address: '123 School Road, City, State – 000000',
   whatsapp: '910000000000',
   admissionsYear: '2025–26',
}

// ─── Hero slides ─────────────────────────────────────────────────────────────
export type HeroSlide = {
   id: number
   headline: string
   subtext: string
   primaryCta: { label: string; href: string }
   secondaryCta: { label: string; href: string }
   // TODO: replace src with real campus photo — description: hero campus wide-angle
   image: string
}

export const heroSlides: HeroSlide[] = [
   {
      id: 1,
      headline: 'Admissions Open for 2025–26',
      subtext:
         'Give your child the best start — CBSE excellence, expert faculty, and a campus built for growth.',
      primaryCta: { label: 'Apply Now', href: '/admissions' },
      secondaryCta: { label: 'Explore Academics', href: '/academics' },
      // TODO: replace with real campus photo — description: school building main entrance
      image: 'https://picsum.photos/seed/kpps-hero-1/1600/900',
   },
   {
      id: 2,
      headline: 'Building Global Citizens',
      subtext:
         'Sports, arts, cultural events, and educational trips that shape confident, well-rounded individuals.',
      primaryCta: { label: 'See Activities', href: '/activities' },
      secondaryCta: { label: 'Our Facilities', href: '/facilities' },
      // TODO: replace with real photo — description: students at sports day or cultural event
      image: 'https://picsum.photos/seed/kpps-hero-2/1600/900',
   },
   {
      id: 3,
      headline: 'Excellence in Every Classroom',
      subtext:
         'Consistent board toppers, 100% pass rate, smart classrooms — learning that goes beyond textbooks.',
      primaryCta: { label: 'View Achievements', href: '/achievements' },
      secondaryCta: { label: 'Contact Us', href: '/contact' },
      // TODO: replace with real photo — description: students in a smart classroom
      image: 'https://picsum.photos/seed/kpps-hero-3/1600/900',
   },
   {
      id: 4,
      headline: 'A Safe, Caring Campus',
      subtext:
         'CCTV-secured, GPS-tracked transport, and a nurturing environment where every child feels at home.',
      primaryCta: { label: 'Book a Campus Visit', href: '/contact' },
      secondaryCta: { label: 'About KPPS', href: '/about' },
      // TODO: replace with real photo — description: school campus greenery / playground
      image: 'https://picsum.photos/seed/kpps-hero-4/1600/900',
   },
]

// ─── Stats ───────────────────────────────────────────────────────────────────
export type Stat = {
   icon: LucideIcon
   label: string
   value: number
   suffix?: string
   prefix?: string
   display?: string
}

export const stats: Stat[] = [
   { icon: GraduationCap, label: 'Students Enrolled', value: 1200, suffix: '+' },
   { icon: Users, label: 'Faculty Members', value: 40, suffix: '+' },
   { icon: Trophy, label: 'Board Pass Rate', value: 98, suffix: '%' },
   { icon: Leaf, label: 'Years of Excellence', value: 24, suffix: '+' },
]

// ─── Principal ───────────────────────────────────────────────────────────────
export const principal = {
   name: 'Dr. Anita Sharma',
   qualification: 'M.Ed., Ph.D. | Principal, KPPS',
   // TODO: replace with real principal photo — description: principal professional portrait
   photo: 'https://picsum.photos/seed/kpps-principal/400/400',
   quote:
      'Education is not the filling of a pail, but the lighting of a fire. At KPPS, we kindle that spark of curiosity in every child and guide them to become responsible, knowledgeable, and compassionate human beings.',
   readMoreHref: '/about#principal',
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────
export type WhyCard = {
   icon: LucideIcon
   title: string
   description: string
}

export const whyCards: WhyCard[] = [
   {
      icon: GraduationCap,
      title: 'Experienced Faculty',
      description:
         'Highly qualified teachers with years of subject expertise and a genuine passion for student success.',
   },
   {
      icon: Lightbulb,
      title: 'Smart Classrooms',
      description:
         'Interactive digital boards, projectors, and tech-enabled environments for 21st-century learning.',
   },
   {
      icon: Shield,
      title: 'Safe & Secure Campus',
      description:
         '24×7 CCTV surveillance, trained security staff, and a fully child-safe environment.',
   },
   {
      icon: Bus,
      title: 'Safe Transport',
      description:
         'GPS-tracked school buses with trained drivers covering all major routes.',
   },
   {
      icon: Trophy,
      title: 'Sports & Activities',
      description:
         'Extensive sports facilities, cultural events, and co-curricular programmes for every interest.',
   },
   {
      icon: BarChart3,
      title: 'Outstanding Results',
      description:
         'Consistent board toppers and near-100% pass rate every academic year across all streams.',
   },
]

// ─── Curriculum stages ───────────────────────────────────────────────────────
export type CurriculumStage = {
   range: string
   grades: string
   description: string
   icon: LucideIcon
}

export const curriculumStages: CurriculumStage[] = [
   {
      range: 'Pre-Primary',
      grades: 'Nursery – KG',
      description: 'Play-based learning, phonics, number sense, and foundational life skills.',
      icon: Leaf,
   },
   {
      range: 'Primary',
      grades: 'Class I – V',
      description: 'Strong foundations in Languages, Maths, and EVS with activity-based teaching.',
      icon: Lightbulb,
   },
   {
      range: 'Middle School',
      grades: 'Class VI – VIII',
      description: 'Broadened curriculum with Science, Social Science, and project-based learning.',
      icon: GraduationCap,
   },
   {
      range: 'Secondary',
      grades: 'Class IX – X',
      description: 'CBSE Board preparation with comprehensive coaching and regular assessment.',
      icon: BarChart3,
   },
   {
      range: 'Senior Secondary',
      grades: 'Class XI – XII',
      description: 'Science (Med/Non-Med), Commerce & Arts streams with career counselling.',
      icon: Trophy,
   },
]

// ─── Facilities ──────────────────────────────────────────────────────────────
export type Facility = {
   icon: LucideIcon
   name: string
   desc: string
   // TODO: replace with real facility photo
   image: string
}

export const facilities: Facility[] = [
   {
      icon: Library,
      name: 'Library',
      desc: '3000+ books & digital resources',
      // TODO: replace with real photo — description: school library interior
      image: 'https://picsum.photos/seed/kpps-facility-library/800/500',
   },
   {
      icon: Microscope,
      name: 'Science Labs',
      desc: 'Physics, Chemistry & Biology',
      // TODO: replace with real photo — description: students in science lab
      image: 'https://picsum.photos/seed/kpps-facility-lab/800/500',
   },
   {
      icon: Monitor,
      name: 'Computer Lab',
      desc: 'Latest hardware & broadband',
      // TODO: replace with real photo — description: computer lab with students
      image: 'https://picsum.photos/seed/kpps-facility-computer/800/500',
   },
   {
      icon: Trophy,
      name: 'Sports Ground',
      desc: 'Cricket, Football, Basketball',
      // TODO: replace with real photo — description: school sports ground
      image: 'https://picsum.photos/seed/kpps-facility-sports/800/500',
   },
   {
      icon: Bus,
      name: 'Safe Transport',
      desc: 'GPS-tracked fleet',
      // TODO: replace with real photo — description: school bus
      image: 'https://picsum.photos/seed/kpps-facility-bus/800/500',
   },
   {
      icon: Mic,
      name: 'Auditorium',
      desc: 'Fully equipped stage & AV',
      // TODO: replace with real photo — description: school auditorium
      image: 'https://picsum.photos/seed/kpps-facility-auditorium/800/500',
   },
   {
      icon: Heart,
      name: 'Medical Room',
      desc: 'First aid & nurse on duty',
      // TODO: replace with real photo — description: school medical room
      image: 'https://picsum.photos/seed/kpps-facility-medical/800/500',
   },
   {
      icon: UtensilsCrossed,
      name: 'Cafeteria',
      desc: 'Hygienic & nutritious meals',
      // TODO: replace with real photo — description: school cafeteria
      image: 'https://picsum.photos/seed/kpps-facility-cafeteria/800/500',
   },
]

// ─── Activities gallery ──────────────────────────────────────────────────────
export type Activity = {
   title: string
   category: string
   // TODO: replace with real activity photo
   image: string
   tall?: boolean
}

export const activities: Activity[] = [
   {
      title: 'Annual Sports Day',
      category: 'Sports',
      // TODO: replace with real photo — description: sports day event crowd
      image: 'https://picsum.photos/seed/kpps-act-sports/600/800',
      tall: true,
   },
   {
      title: 'Science Exhibition',
      category: 'Academics',
      // TODO: replace with real photo — description: students at science fair
      image: 'https://picsum.photos/seed/kpps-act-science/600/400',
   },
   {
      title: 'Cultural Fest',
      category: 'Arts',
      // TODO: replace with real photo — description: students performing on stage
      image: 'https://picsum.photos/seed/kpps-act-culture/600/400',
   },
   {
      title: 'Educational Tour',
      category: 'Trips',
      // TODO: replace with real photo — description: students on educational trip
      image: 'https://picsum.photos/seed/kpps-act-trip/600/700',
      tall: true,
   },
   {
      title: 'Art Workshop',
      category: 'Arts',
      // TODO: replace with real photo — description: art class students
      image: 'https://picsum.photos/seed/kpps-act-art/600/400',
   },
   {
      title: 'Music Performance',
      category: 'Arts',
      // TODO: replace with real photo — description: school music performance
      image: 'https://picsum.photos/seed/kpps-act-music/600/400',
   },
]

// ─── Achievements ────────────────────────────────────────────────────────────
export type Achievement = {
   title: string
   detail: string
   year: string
   icon: LucideIcon
}

export const achievementMarquee = [
   'Board Topper 2024 — 98.6%',
   'National Science Olympiad — Gold',
   'State Basketball Champions',
   'Board Topper 2023 — 97.8%',
   'District Quiz Competition — 1st',
   'Inter-School Debate — Winner',
   'National Art Competition — Silver',
   '100% Board Pass Rate',
]

export const featuredAchievements: Achievement[] = [
   {
      icon: Trophy,
      title: 'Board Topper 2024',
      detail: 'Aarav Singh — 98.6% in Class XII Science',
      year: '2024',
   },
   {
      icon: Mic,
      title: 'National Science Olympiad',
      detail: 'Gold Medal — 3 students qualified',
      year: '2024',
   },
   {
      icon: Music,
      title: 'State Basketball Champions',
      detail: 'U-17 Girls Team, State Level',
      year: '2024',
   },
]

// ─── Testimonials ────────────────────────────────────────────────────────────
export type Testimonial = {
   name: string
   role: string
   quote: string
   // TODO: replace with real avatar — description: parent / alumni photo
   avatar: string
}

export const testimonials: Testimonial[] = [
   {
      name: 'Priya Sharma',
      role: 'Parent — Class IX',
      quote:
         "KPPS has been a transformative experience for my daughter. The teachers genuinely care about every child's progress and the environment is wonderfully nurturing.",
      avatar: 'https://picsum.photos/seed/kpps-testi-1/80/80',
   },
   {
      name: 'Rahul Verma',
      role: 'Alumni 2023',
      quote:
         'The foundation built at KPPS helped me score 97% in boards and secure admission in a top engineering college. Forever grateful.',
      avatar: 'https://picsum.photos/seed/kpps-testi-2/80/80',
   },
   {
      name: 'Meena Gupta',
      role: 'Parent — Class VI',
      quote:
         'The smart classrooms and activity-based learning have made my son genuinely love going to school every morning. That says it all.',
      avatar: 'https://picsum.photos/seed/kpps-testi-3/80/80',
   },
]

// ─── Footer ──────────────────────────────────────────────────────────────────
export const footerQuickLinks = [
   { label: 'About Us', href: '/about' },
   { label: 'Academics', href: '/academics' },
   { label: 'Admissions', href: '/admissions' },
   { label: 'Facilities', href: '/facilities' },
   { label: 'Activities', href: '/activities' },
   { label: 'Gallery', href: '/gallery' },
   { label: 'Downloads', href: '/downloads' },
   { label: 'Contact Us', href: '/contact' },
]

export const footerContact = [
   { label: 'Principal', value: '+91 00000 00001' },
   { label: 'Office', value: '+91 00000 00002' },
   { label: 'Admission', value: '+91 00000 00003' },
   { label: 'Transport', value: '+91 00000 00004' },
]

export const activityIcons: Record<string, LucideIcon> = {
   Sports: Trophy,
   Academics: GraduationCap,
   Arts: Palette,
   Trips: Leaf,
}
