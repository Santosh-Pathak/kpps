import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
   className?: string
   wordmark?: boolean
   size?: 'sm' | 'md' | 'lg'
   inverted?: boolean
}

const sizes = {
   sm: { badge: 32, text: 'text-sm' },
   md: { badge: 44, text: 'text-base' },
   lg: { badge: 56, text: 'text-xl' },
}

export function Logo({ className, wordmark = true, size = 'md', inverted = false }: LogoProps) {
   const s = sizes[size]
   const textColor = inverted ? 'text-white' : 'text-[#0F5132] dark:text-[#22C55E]'
   const subColor = inverted ? 'text-white/70' : 'text-[#4B6358] dark:text-[#9CC7B3]'

   return (
      <Link href="/" className={cn('flex shrink-0 items-center gap-3', className)}>
         <svg
            width={s.badge}
            height={s.badge}
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
         >
            {/* Badge background */}
            <rect
               x="2" y="2" width="40" height="40" rx="10"
               fill="#D1FAE5"
               className="dark:fill-[#0F3D2E]"
            />
            {/* K */}
            <text
               x="11" y="30"
               fontFamily="var(--font-fraunces), Georgia, serif"
               fontWeight="700"
               fontSize="22"
               fill="#0F5132"
               className="dark:fill-[#22C55E]"
            >
               KP
            </text>
            {/* Leaf accent line */}
            <path
               d="M8 38 Q22 28 36 38"
               stroke="#22C55E"
               strokeWidth="2"
               strokeLinecap="round"
               fill="none"
               className="dark:stroke-[#4ADE80]"
            />
         </svg>

         {wordmark && (
            <div className="hidden sm:block">
               <p className={cn('font-display font-bold leading-tight', s.text, textColor)}>
                  Kids Paradise
               </p>
               <p className={cn('text-xs leading-tight', subColor)}>
                  Sr. Sec. School
               </p>
            </div>
         )}
      </Link>
   )
}
