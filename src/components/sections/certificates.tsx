import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certificates } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Licenses & Certifications</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my credentials and professional development. Click a certificate to view it.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Link key={index} href={cert.imageUrl} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="flex flex-col animate-in fade-in-0 zoom-in-95 duration-500 h-full group-hover:shadow-lg transition-shadow" style={{transitionDelay: `${index * 150}ms`}}>
                <CardHeader className="flex-row items-center justify-between">
                  <CardTitle className="font-headline text-lg">{cert.name}</CardTitle>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.name}
                      fill
                      className="object-contain"
                      data-ai-hint={cert.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
