'use client'

import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { BinaryRain } from '@/components/binary-rain'

export function SiteBody({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isCreative = theme === 'creative';

  return (
    <div className={cn("antialiased", mounted && isCreative ? 'font-body' : 'font-sans')}>
      {mounted && isCreative && <BinaryRain />}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
