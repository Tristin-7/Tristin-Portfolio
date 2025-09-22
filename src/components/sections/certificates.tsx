
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { certificates } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import MatrixAnimation from "@/components/matrix-animation";

export function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-16 md:py-24 bg-transparent overflow-hidden flex-1 flex items-center justify-center">
       <div className="absolute inset-0 z-0">
        <MatrixAnimation />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Licenses & Certifications</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my licenses and certifications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="flex flex-col animate-in fade-in-0 zoom-in-95 duration-500 h-full hover:shadow-lg transition-shadow bg-background/80" style={{transitionDelay: `${index * 150}ms`}}>
              <CardHeader>
                <CardTitle className="font-headline text-lg">{cert.name}</CardTitle>
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
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={cert.verifyUrl || cert.imageUrl} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
