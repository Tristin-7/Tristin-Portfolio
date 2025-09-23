
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/config/site";
import { Briefcase } from "lucide-react";
import { DecodeText } from "../decode-text";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const { theme } = useTheme();
  const isCreative = theme === 'creative';

  return (
    <section id="experience" className={cn("relative py-16 md:py-24 overflow-hidden flex-1 flex items-center justify-center", isCreative ? 'bg-transparent' : 'bg-background')}>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          {isCreative ? (
            <DecodeText text="Work Experience" className="text-3xl md:text-4xl font-headline font-bold" />
          ) : (
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Work Experience</h2>
          )}
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={cn("animate-in fade-in-0 zoom-in-95 duration-500", isCreative ? 'bg-background/80' : 'bg-card')}>
                <CardHeader className="items-center text-center">
                  <div className={cn("p-2 rounded-full", isCreative ? 'bg-secondary' : 'bg-primary/10')}>
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                    <CardDescription>{exp.company} | {exp.duration}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
