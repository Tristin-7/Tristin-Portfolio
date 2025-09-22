
'use client';

import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navItems } from '@/config/site';
import { cn } from '@/lib/utils';

type Section = 'hero' | 'skills' | 'experience' | 'education' | 'projects' | 'certificates' | 'contact';

interface SiteHeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section, event?: React.MouseEvent) => void;
}

export function SiteHeader({ activeSection, setActiveSection }: SiteHeaderProps) {
  const handleNavClick = (section: string, event: React.MouseEvent) => {
    const sectionName = section.startsWith('#') ? section.substring(1) : section;
    setActiveSection(sectionName as Section, event);
  };
  
  const handleLogoClick = (event: React.MouseEvent) => {
    setActiveSection('hero', event);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex">
          <button onClick={handleLogoClick} className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-xl">Tristin</span>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={(e) => handleNavClick(item.href, e)}
              className={cn(
                "transition-colors hover:text-primary",
                activeSection === item.href.substring(1) ? "text-primary" : ""
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <a href="/TristinResume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <SheetClose asChild>
                  <button onClick={handleLogoClick} className="mr-6 flex items-center space-x-2 text-left">
                    <span className="font-bold font-headline text-lg">Tristin</span>
                  </button>
                </SheetClose>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <button
                      onClick={(e) => handleNavClick(item.href, e)}
                      className={cn(
                        "text-lg transition-colors hover:text-primary text-left",
                         activeSection === item.href.substring(1) ? "text-primary" : ""
                      )}
                    >
                      {item.label}
                    </button>
                  </SheetClose>
                ))}
                 <Button asChild className="mt-4">
                  <a href="/TristinResume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
