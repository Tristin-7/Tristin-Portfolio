'use client'

import React from 'react';
import Link from 'next/link';
import { socialLinks } from '@/config/site';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function SiteFooter() {
  const { theme } = useTheme();
  const isCreative = theme === 'creative';

  return (
    <footer className={cn("py-6 md:px-8 md:py-0 border-t relative overflow-hidden", isCreative ? 'bg-background/80' : 'bg-background')}>
      {isCreative && <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[pulse_5s_ease-in-out_infinite]" />}
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row relative z-10">
        <p className={cn("text-center text-sm leading-loose text-muted-foreground md:text-left", isCreative && 'font-code text-primary/80')}>
          &copy; {new Date().getFullYear()} Tristin Van Der Lingen. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className={cn("text-muted-foreground hover:text-primary transition-colors", isCreative && "text-primary/80 hover:drop-shadow-[0_0_5px_hsl(var(--primary))]")}
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
