interface WaveDividerProps {
   flip?: boolean
   fromColor?: string
   toColor?: string
   className?: string
}

export function WaveDivider({
   flip = false,
   fromColor = 'fill-[#F6FBF8] dark:fill-[#0F2A1E]',
   toColor = 'fill-[#FFFFFF] dark:fill-[#0A1F16]',
   className = '',
}: WaveDividerProps) {
   return (
      <div
         className={`pointer-events-none overflow-hidden leading-none ${className}`}
         style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
         aria-hidden="true"
      >
         <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className={`h-10 w-full ${fromColor}`}
         >
            <path d="M0,40 C240,0 480,60 720,30 C960,0 1200,60 1440,20 L1440,60 L0,60 Z" />
         </svg>
      </div>
   )
}
