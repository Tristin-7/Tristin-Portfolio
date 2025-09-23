
'use client'

import { Progress } from "@/components/ui/progress";
import { softSkills, technicalSkills } from "@/config/site";
import type { Skill } from "@/lib/types";
import { DecodeText } from "../decode-text";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

function SkillCategory({ title, skills }: { title: string, skills: Skill[] }) {
  return (
    <div>
      <h3 className="text-2xl font-headline mb-6 text-center md:text-left">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="animate-in fade-in-0 slide-in-from-bottom-12 delay-150 duration-1000" style={{'--index': index} as React.CSSProperties}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { theme } = useTheme();
  const isCreative = theme === 'creative';

  return (
    <section id="skills" className={cn("relative py-16 md:py-24 overflow-hidden flex-1 flex items-center justify-center", isCreative ? 'bg-transparent' : 'bg-background')}>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <DecodeText text="My Skillset" className="text-3xl md:text-4xl font-headline font-bold" />
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A glimpse into the technologies I work with and my professional abilities.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <SkillCategory title="Technical Skills" skills={technicalSkills} />
          <SkillCategory title="Soft Skills" skills={softSkills} />
        </div>
      </div>
    </section>
  );
}
