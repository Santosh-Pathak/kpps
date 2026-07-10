'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bell, Download, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Placeholder notices until DB is connected
const notices = [
   {
      id: '1',
      title: 'Result Declaration — Annual Examination 2024-25',
      publishedAt: new Date('2025-04-15'),
      fileUrl: null,
   },
   {
      id: '2',
      title: 'Summer Vacation Notice: School closed 20 May – 25 June',
      publishedAt: new Date('2025-04-10'),
      fileUrl: null,
   },
   {
      id: '3',
      title: 'Admission Schedule & Important Dates 2025-26',
      publishedAt: new Date('2025-04-01'),
      fileUrl: '/placeholder.pdf',
   },
   {
      id: '4',
      title: 'Annual Sports Day — Registration Open',
      publishedAt: new Date('2025-03-20'),
      fileUrl: null,
   },
   {
      id: '5',
      title: 'Parent-Teacher Meeting: 26 March 2025',
      publishedAt: new Date('2025-03-15'),
      fileUrl: null,
   },
]

export function NewsNotices() {
   return (
      <section className="section-pad">
         <div className="container-kpps">
            <div className="grid gap-12 lg:grid-cols-2">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <div className="mb-6 flex items-center justify-between">
                     <div>
                        <p className="text-secondary mb-1 text-sm font-semibold tracking-widest uppercase">
                           Updates
                        </p>
                        <h2 className="font-heading text-2xl font-bold">
                           News & Notices
                        </h2>
                     </div>
                     <Link
                        href="/downloads"
                        className="text-primary flex items-center gap-1 text-sm font-medium hover:underline"
                     >
                        View all <ArrowRight className="h-3.5 w-3.5" />
                     </Link>
                  </div>

                  <div className="space-y-3">
                     {notices.map((notice, i) => (
                        <motion.div
                           key={notice.id}
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.08 }}
                           className="bg-muted/50 hover:bg-muted group flex items-start gap-3 rounded-xl p-4 transition-colors"
                        >
                           <div className="bg-navy/10 dark:bg-secondary/20 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                              <Bell className="text-navy dark:text-secondary h-4 w-4" />
                           </div>
                           <div className="min-w-0 flex-1">
                              <p className="truncate pr-2 text-sm leading-snug font-medium">
                                 {notice.title}
                              </p>
                              <p className="text-muted-foreground mt-0.5 text-xs">
                                 {formatDate(notice.publishedAt)}
                              </p>
                           </div>
                           {notice.fileUrl && (
                              <a
                                 href={notice.fileUrl}
                                 className="hover:bg-secondary/20 shrink-0 rounded p-1.5 transition-colors"
                                 aria-label="Download"
                              >
                                 <Download className="text-muted-foreground h-4 w-4" />
                              </a>
                           )}
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* Principal message preview */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-navy flex flex-col rounded-2xl p-8 text-white"
               >
                  <p className="text-secondary mb-2 text-sm font-semibold tracking-widest uppercase">
                     Message
                  </p>
                  <h2 className="font-heading mb-6 text-2xl font-bold">
                     From the Principal&apos;s Desk
                  </h2>
                  <div className="mb-6 flex items-start gap-4">
                     <div className="bg-secondary/20 font-heading text-secondary flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-2xl font-bold">
                        P
                     </div>
                     <div>
                        <p className="font-semibold">
                           Dr. / Mrs. [Principal Name]
                        </p>
                        <p className="text-xs text-white/60">
                           M.Ed., Ph.D. | Principal, KPPS
                        </p>
                     </div>
                  </div>
                  <blockquote className="flex-1 leading-relaxed text-white/80 italic">
                     &ldquo;Education is not the filling of a pail, but the
                     lighting of a fire. At KPPS, we are committed to kindling
                     that spark of curiosity in every child and guiding them to
                     become responsible, knowledgeable, and compassionate human
                     beings.&rdquo;
                  </blockquote>
                  <Link
                     href="/about#principal"
                     className="text-secondary mt-6 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  >
                     Read Full Message <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
               </motion.div>
            </div>
         </div>
      </section>
   )
}
