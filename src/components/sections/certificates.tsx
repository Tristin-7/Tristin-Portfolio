import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { certificates } from "@/config/site";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Licenses & Certifications</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my credentials and professional development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="flex flex-col animate-in fade-in-0 zoom-in-95 duration-500" style={{transitionDelay: `${index * 150}ms`}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1.5">
                    <CardTitle className="font-headline text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer} - {cert.date}</CardDescription>
                  </div>
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button asChild variant="outline" className="w-full">
                  <Link href={cert.url} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
