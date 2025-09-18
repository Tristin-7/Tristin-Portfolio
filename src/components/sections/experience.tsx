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
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="animate-in fade-in-0 zoom-in-95 duration-500">
                <CardHeader className="items-center text-center">
                  <div className="p-2 bg-secondary rounded-full">
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
