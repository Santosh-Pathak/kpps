interface OrganicBlobProps {
   className?: string
   size?: number
   opacity?: number
}

/**
 * Signature organic blob — the single permitted "flourish" per design brief.
 * Uses CSS currentColor so the blob automatically responds to the colour
 * context it is placed in (accent-soft on light, dark-accent-soft on dark).
 * Callers can control colour via `text-[var(--sp-accent-soft)]` on the parent.
 */
export function OrganicBlob({ className = '', size = 400, opacity = 0.35 }: OrganicBlobProps) {
   return (
      <svg
         className={`pointer-events-none absolute ${className}`}
         width={size}
         height={size}
         viewBox="0 0 400 400"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true"
      >
         <path
            d="M300,180 C320,240 280,310 220,330 C160,350 90,320 60,260 C30,200 60,120 120,90 C180,60 260,80 300,130 Z"
            fill="var(--sp-accent-soft, #D1FAE5)"
            opacity={opacity}
         />
      </svg>
   )
}
