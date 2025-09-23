'use client'

import { useTheme } from 'next-themes'
import MatrixAnimation from '@/components/matrix-animation'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

export function SiteBody({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isMatrix = theme === 'matrix';

  return (
    <div className={cn("antialiased", mounted && isMatrix ? 'font-body' : 'font-sans')}>
      {mounted && isMatrix && <MatrixAnimation />}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
