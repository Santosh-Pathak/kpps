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
      // Happy children learning with teacher in a bright classroom
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=900&fit=crop&q=80',
   },
   {
      id: 2,
      headline: 'Building Global Citizens',
      subtext:
         'Sports, arts, cultural events, and educational trips that shape confident, well-rounded individuals.',
      primaryCta: { label: 'Our Facilities', href: '/facilities' },
      secondaryCta: { label: 'Photo Gallery', href: '/gallery' },
      // Kids playing football/soccer on school grounds
      image: 'https://images.unsplash.com/photo-1529680106979-a7fb65d70d28?w=1600&h=900&fit=crop&q=80',
   },
   {
      id: 3,
      headline: 'Excellence in Every Classroom',
      subtext:
         'Consistent board toppers, 100% pass rate, smart classrooms — learning that goes beyond textbooks.',
      primaryCta: { label: 'Explore Academics', href: '/academics' },
      secondaryCta: { label: 'Contact Us', href: '/contact' },
      // Modern classroom with students and projector
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&h=900&fit=crop&q=80',
   },
   {
      id: 4,
      headline: 'A Safe, Caring Campus',
      subtext:
         'CCTV-secured, GPS-tracked transport, and a nurturing environment where every child feels at home.',
      primaryCta: { label: 'Book a Campus Visit', href: '/contact' },
      secondaryCta: { label: 'About KPPS', href: '/about' },
      // Aerial/wide view of university/school campus with greenery
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop&q=80',
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
   // Professional portrait of a woman educator
   photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=faces&q=80',
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
      // Interior of a large, well-lit school/university library with bookshelves
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=500&fit=crop&q=80',
   },
   {
      icon: Microscope,
      name: 'Science Labs',
      desc: 'Physics, Chemistry & Biology',
      // Students working in a science laboratory with equipment
      image: 'https://images.unsplash.com/photo-1532094349884-543290326c36?w=800&h=500&fit=crop&q=80',
   },
   {
      icon: Monitor,
      name: 'Computer Lab',
      desc: 'Latest hardware & broadband',
      // Modern computer lab with laptops/desktops in rows
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop&q=80',
   },
   {
      icon: Trophy,
      name: 'Sports Ground',
      desc: 'Cricket, Football, Basketball',
      // Children playing football/soccer on a school sports ground
      image: 'https://images.unsplash.com/photo-1529680106979-a7fb65d70d28?w=800&h=500&fit=crop&q=80',
   },
   {
      icon: Bus,
      name: 'Safe Transport',
      desc: 'GPS-tracked fleet',
      // Yellow school bus on road
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=500&fit=crop&q=80',
   },
   {
      icon: Mic,
      name: 'Auditorium',
      desc: 'Fully equipped stage & AV',
      // Empty auditorium/lecture hall with rows of seats and stage lighting
      image: 'https://images.unsplash.com/photo-1519327232521-1fc4973a8054?w=800&h=500&fit=crop&q=80',
   },
   {
      icon: Heart,
      name: 'Medical Room',
      desc: 'First aid & nurse on duty',
      // Clean medical/clinic room with first-aid supplies
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=500&fit=crop&q=80',
   },
   {
      icon: UtensilsCrossed,
      name: 'Cafeteria',
      desc: 'Hygienic & nutritious meals',
      // Bright, clean school cafeteria with food counters
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=500&fit=crop&q=80',
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
      // Kids running a race at a school sports day event
      image: 'https://images.unsplash.com/photo-1486218119243-13301543a1b4?w=600&h=800&fit=crop&q=80',
      tall: true,
   },
   {
      title: 'Science Exhibition',
      category: 'Academics',
      // Students working on a science fair experiment/display
      image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&h=400&fit=crop&q=80',
   },
   {
      title: 'Cultural Fest',
      category: 'Arts',
      // Students performing on stage during a cultural event
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&q=80',
   },
   {
      title: 'Educational Tour',
      category: 'Trips',
      // Group of students on an educational excursion/field trip
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=700&fit=crop&q=80',
      tall: true,
   },
   {
      title: 'Art Workshop',
      category: 'Arts',
      // Children working with paint and brushes in an art class
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&q=80',
   },
   {
      title: 'Music Performance',
      category: 'Arts',
      // Student playing piano / musicians performing at school event
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop&q=80',
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
      // Portrait of a woman, warm expression
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80',
   },
   {
      name: 'Rahul Verma',
      role: 'Alumni 2023',
      quote:
         'The foundation built at KPPS helped me score 97% in boards and secure admission in a top engineering college. Forever grateful.',
      // Portrait of a young man, smiling
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces&q=80',
   },
   {
      name: 'Meena Gupta',
      role: 'Parent — Class VI',
      quote:
         'The smart classrooms and activity-based learning have made my son genuinely love going to school every morning. That says it all.',
      // Portrait of a woman with a warm smile
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&q=80',
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
