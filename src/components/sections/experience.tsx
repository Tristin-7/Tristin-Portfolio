import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/config/site";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Work Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-px bg-border h-full" aria-hidden="true" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 -translate-y-2">
                  <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left ml-auto'}`}>
                  <Card className="animate-in fade-in-0 zoom-in-95 duration-500">
                    <CardHeader>
                      <CardTitle className="font-headline">{exp.role}</CardTitle>
                      <CardDescription>{exp.company} | {exp.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
