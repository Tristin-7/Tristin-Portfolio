
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
import './portal.css';

type Section = 'hero' | 'skills' | 'experience' | 'education' | 'projects' | 'certificates' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextSection, setNextSection] = useState<Section | null>(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleSectionChange = (section: Section, event?: React.MouseEvent) => {
    if (section !== activeSection && !isTransitioning) {
      if (event) {
        setClickPosition({ x: event.clientX, y: event.clientY });
      } else {
        // Fallback for non-click events or when event is not passed
        setClickPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      }
      setNextSection(section);
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const animationTime = 600; // Corresponds to portal-animation duration

      // Phase 1: Let the portal expand
      const phase1Timer = setTimeout(() => {
        if (nextSection) {
          setActiveSection(nextSection);
        }
      }, animationTime / 2);

      // Phase 2: Let the new section show and portal shrink
      const phase2Timer = setTimeout(() => {
        setIsTransitioning(false);
        setNextSection(null);
      }, animationTime);

      return () => {
        clearTimeout(phase1Timer);
        clearTimeout(phase2Timer);
      };
    }
  }, [isTransitioning, nextSection]);


  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection setActiveSection={handleSectionChange} />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'certificates':
        return <CertificatesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setActiveSection={handleSectionChange} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background/80">
      <SiteHeader activeSection={activeSection} setActiveSection={handleSectionChange} />
      <main className="flex-1 flex flex-col">
        <div 
          className={cn(
            "flex-1 flex flex-col transition-opacity duration-300 ease-in-out",
            isTransitioning && nextSection && "opacity-0"
          )}
        >
          {renderSection()}
        </div>
      </main>
      {isTransitioning && (
        <div
          className="portal-ring"
          style={{
            top: `${clickPosition.y}px`,
            left: `${clickPosition.x}px`,
          }}
        />
      )}
      <SiteFooter />
    </div>
  );
}
