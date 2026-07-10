import Link from 'next/link'
import {
   GraduationCap,
   Phone,
   Mail,
   MapPin,
   Facebook,
   Instagram,
   Youtube,
} from 'lucide-react'

const quickLinks = [
   { label: 'About Us', href: '/about' },
   { label: 'Academics', href: '/academics' },
   { label: 'Admissions', href: '/admissions' },
   { label: 'Facilities', href: '/facilities' },
   { label: 'Activities', href: '/activities' },
   { label: 'Gallery', href: '/gallery' },
   { label: 'Downloads', href: '/downloads' },
   { label: 'Contact Us', href: '/contact' },
]

const contactLines = [
   { label: 'Principal', value: '+91 00000 00001' },
   { label: 'Office', value: '+91 00000 00002' },
   { label: 'Admission', value: '+91 00000 00003' },
   { label: 'Transport', value: '+91 00000 00004' },
]

export function Footer() {
   return (
      <footer className="bg-navy pt-14 pb-6 text-white">
         <div className="container-kpps">
            <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
               {/* Brand */}
               <div className="lg:col-span-1">
                  <div className="mb-4 flex items-center gap-3">
                     <div className="bg-secondary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                        <GraduationCap className="text-secondary h-6 w-6" />
                     </div>
                     <div>
                        <p className="font-heading text-base leading-tight font-bold">
                           Kids Paradise
                        </p>
                        <p className="text-xs text-white/60">
                           Senior Secondary School
                        </p>
                     </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-white/70">
                     Nurturing young minds with a perfect blend of academic
                     excellence and holistic development since 2001.
                  </p>
                  <div className="flex items-center gap-3">
                     <a
                        href="#"
                        aria-label="Facebook"
                        className="hover:bg-secondary/80 rounded-full bg-white/10 p-2 transition-colors"
                     >
                        <Facebook className="h-4 w-4" />
                     </a>
                     <a
                        href="#"
                        aria-label="Instagram"
                        className="hover:bg-secondary/80 rounded-full bg-white/10 p-2 transition-colors"
                     >
                        <Instagram className="h-4 w-4" />
                     </a>
                     <a
                        href="#"
                        aria-label="YouTube"
                        className="hover:bg-secondary/80 rounded-full bg-white/10 p-2 transition-colors"
                     >
                        <Youtube className="h-4 w-4" />
                     </a>
                  </div>
               </div>

               {/* Quick links */}
               <div>
                  <h4 className="font-heading text-secondary mb-4 font-semibold">
                     Quick Links
                  </h4>
                  <ul className="space-y-2">
                     {quickLinks.map((link) => (
                        <li key={link.label}>
                           <Link
                              href={link.href}
                              className="hover:text-secondary flex items-center gap-1.5 text-sm text-white/70 transition-colors"
                           >
                              <span className="bg-secondary h-1 w-1 rounded-full" />
                              {link.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact */}
               <div>
                  <h4 className="font-heading text-secondary mb-4 font-semibold">
                     Contact
                  </h4>
                  <ul className="space-y-3">
                     {contactLines.map((c) => (
                        <li
                           key={c.label}
                           className="flex items-start gap-2 text-sm text-white/70"
                        >
                           <Phone className="text-secondary mt-0.5 h-3.5 w-3.5 shrink-0" />
                           <span>
                              <span className="font-medium text-white/90">
                                 {c.label}:
                              </span>{' '}
                              <a
                                 href={`tel:${c.value.replace(/\s/g, '')}`}
                                 className="hover:text-secondary transition-colors"
                              >
                                 {c.value}
                              </a>
                           </span>
                        </li>
                     ))}
                     <li className="flex items-start gap-2 text-sm text-white/70">
                        <Mail className="text-secondary mt-0.5 h-3.5 w-3.5 shrink-0" />
                        <a
                           href="mailto:info@kpps.edu.in"
                           className="hover:text-secondary transition-colors"
                        >
                           info@kpps.edu.in
                        </a>
                     </li>
                  </ul>
               </div>

               {/* Address */}
               <div>
                  <h4 className="font-heading text-secondary mb-4 font-semibold">
                     Find Us
                  </h4>
                  <address className="flex gap-2 text-sm text-white/70 not-italic">
                     <MapPin className="text-secondary mt-0.5 h-4 w-4 shrink-0" />
                     <span>
                        123 School Road,
                        <br />
                        City, State – 000000
                     </span>
                  </address>
                  <div className="mt-4 aspect-video overflow-hidden rounded-lg border border-white/10">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345993858!2d144.95373531531614!3d-37.816279742021345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ4JzU4LjYiUyAxNDTCsDU3JzEzLjUiRQ!5e0!3m2!1sen!2sin!4v1234567890"
                        className="h-full w-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="School location"
                     />
                  </div>
               </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
               <p>
                  © {new Date().getFullYear()} Kids Paradise Senior Secondary
                  School. All rights reserved.
               </p>
               <div className="flex gap-4">
                  <Link
                     href="/downloads#disclosure"
                     className="hover:text-secondary transition-colors"
                  >
                     Mandatory Disclosure
                  </Link>
                  <Link
                     href="/contact"
                     className="hover:text-secondary transition-colors"
                  >
                     Privacy Policy
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   )
}
