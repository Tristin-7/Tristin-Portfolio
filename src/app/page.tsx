
'use client';

import { useState, useEffect } from 'react';
import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import { ExperienceSection } from '@/components/sections/experience';
import { CertificatesSection } from '@/components/sections/certificates';
import { EducationSection } from '@/components/sections/education';
import { cn } from '@/lib/utils';
import { navItems } from '@/config/site';
import { useTheme } from 'next-themes';

type Section = 'hero' | 'skills' | 'experience' | 'education' | 'projects' | 'certificates' | 'contact';

const sectionOrder: Section[] = ['hero', ...navItems.map(item => item.href.substring(1) as Section)];

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('hero');
  const [nextSection, setNextSection] = useState<Section | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const handleSectionChange = (section: Section, event?: React.MouseEvent | KeyboardEvent) => {
    if (section !== activeSection && !isTransitioning) {
      if (event && 'clientX' in event) {
        setClickPosition({ x: event.clientX, y: event.clientY });
      } else {
        setClickPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      }
      setNextSection(section);
      setIsTransitioning(true);
      setIsExiting(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTransitioning) return;

      const currentIndex = sectionOrder.indexOf(activeSection);
      let newIndex = -1;

      if (event.key === 'ArrowRight') {
        newIndex = (currentIndex + 1) % sectionOrder.length;
      } else if (event.key === 'ArrowLeft') {
        newIndex = (currentIndex - 1 + sectionOrder.length) % sectionOrder.length;
      }
      
      if (newIndex !== -1) {
        handleSectionChange(sectionOrder[newIndex], event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection, isTransitioning]);

  const onAnimationEnd = () => {
    if (isExiting && nextSection) {
      setActiveSection(nextSection);
      setNextSection(null);
      setIsExiting(false);
    } else if (isTransitioning) {
      setIsTransitioning(false);
    }
  };
  

  const renderSection = () => {
    const sections: { [key in Section]: JSX.Element } = {
      hero: <HeroSection setActiveSection={handleSectionChange} />,
      skills: <SkillsSection />,
      experience: <ExperienceSection />,
      education: <EducationSection />,
      projects: <ProjectsSection />,
      certificates: <CertificatesSection />,
      contact: <ContactSection />,
    };
    return sections[activeSection];
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn("flex min-h-screen flex-col", theme === 'matrix' ? 'bg-background/80' : 'bg-background')}>
      <SiteHeader activeSection={activeSection} setActiveSection={handleSectionChange} />
      <main className="flex-1 flex flex-col">
        <div 
          onAnimationEnd={onAnimationEnd}
          style={{ transformOrigin: `${clickPosition.x}px ${clickPosition.y}px` }}
          className={cn(
            "flex-1 flex flex-col",
            isTransitioning && !isExiting && "magnetic-in",
            isExiting && "magnetic-out"
          )}
        >
          {renderSection()}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
