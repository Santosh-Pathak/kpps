'use client'

import { motion } from 'framer-motion'

export function GalleryContent() {
   return (
      <section className="section-pad">
         <div className="container-kpps">
            <motion.div
               initial={{ opacity: 0, y: 16 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-muted/40 border-border rounded-2xl border border-dashed py-20 text-center"
            >
               <p className="mb-4 text-4xl">🖼️</p>
               <h2 className="font-heading mb-3 text-2xl font-bold">
                  Gallery Coming Soon
               </h2>
               <p className="text-muted-foreground mx-auto max-w-md text-sm">
                  Photos and videos will be uploaded by the school
                  administrator. Follow us on Instagram and Facebook for the
                  latest updates.
               </p>
               <div className="mt-6 flex justify-center gap-4">
                  <a
                     href="#"
                     className="text-primary text-sm font-medium hover:underline"
                  >
                     Instagram
                  </a>
                  <a
                     href="#"
                     className="text-primary text-sm font-medium hover:underline"
                  >
                     Facebook
                  </a>
                  <a
                     href="#"
                     className="text-primary text-sm font-medium hover:underline"
                  >
                     YouTube
                  </a>
               </div>
            </motion.div>
         </div>
      </section>
   )
}
