'use client'

import { useTheme } from 'next-themes'
import MatrixAnimation from '@/components/matrix-animation'
import { cn } from '@/lib/utils'

export function SiteBody({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const isMatrix = theme === 'matrix'

  return (
    <div className={cn("antialiased", isMatrix ? 'font-body' : 'font-sans')}>
      {isMatrix && <MatrixAnimation />}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
