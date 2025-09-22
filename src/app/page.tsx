
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

type Section = 'hero' | 'skills' | 'experience' | 'education' | 'projects' | 'certificates' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextSection, setNextSection] = useState<Section | null>(null);

  const handleSectionChange = (section: Section) => {
    if (section !== activeSection) {
      setNextSection(section);
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    if (isTransitioning && nextSection) {
      const timer = setTimeout(() => {
        setActiveSection(nextSection);
        setIsTransitioning(false);
        setNextSection(null);
      }, 400); 

      return () => clearTimeout(timer);
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
            "flex-1 flex flex-col glitch-wrapper",
            isTransitioning ? "glitch" : "transition-opacity duration-300 ease-in-out"
          )}
        >
          {renderSection()}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
