
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/config/site";
import { GraduationCap } from "lucide-react";
import MatrixAnimation from "@/components/matrix-animation";

export function EducationSection() {
  return (
    <section id="education" className="relative py-16 md:py-24 bg-transparent overflow-hidden flex-1 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <MatrixAnimation />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Education</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="animate-in fade-in-0 zoom-in-95 duration-500 bg-background/80" style={{transitionDelay: `${index * 150}ms`}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="space-y-1.5">
                        <CardTitle className="font-headline text-lg">{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution} | {edu.duration}</CardDescription>
                    </div>
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
