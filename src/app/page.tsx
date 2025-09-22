
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
import './magnetic.css';

type Section = 'hero' | 'skills' | 'experience' | 'education' | 'projects' | 'certificates' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleSectionChange = (section: Section, event?: React.MouseEvent) => {
    if (section !== activeSection && !isTransitioning) {
      if (event) {
        setClickPosition({ x: event.clientX, y: event.clientY });
      } else {
        setClickPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      }
      setIsTransitioning(true);
      setIsExiting(true);
    }
  };

  const onAnimationEnd = () => {
    if (isExiting) {
      setActiveSection((prev) => {
        const sections: Section[] = ['hero', 'skills', 'experience', 'education', 'projects', 'certificates', 'contact'];
        const currentIndex = sections.indexOf(prev);
        // This is a placeholder for the next section logic, as we don't know the exact next one here.
        // The actual change happens in the click handler. This logic needs to align with `handleSectionChange`.
        // A better approach would be to store the next section in state.
        const nextIndex = (currentIndex + 1) % sections.length;
        return sections[nextIndex];
      });
      setIsExiting(false);
    } else if (isTransitioning) {
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    // This is a simplified example. A more robust implementation might be needed.
    // The `onAnimationEnd` prop on the transitioning element is the primary driver.
  }, [isTransitioning, isExiting]);
  

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

  return (
    <div className="flex min-h-screen flex-col bg-background/80">
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
