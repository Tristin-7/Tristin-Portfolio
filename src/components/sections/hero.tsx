import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container flex flex-col items-center text-center gap-10">
        <div className="animate-in fade-in-0 zoom-in-95 duration-1000">
          <Image
            src="/profile.jpg"
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full object-cover aspect-square border-4 border-background shadow-lg"
            priority
            data-ai-hint="professional person"
          />
        </div>
        <div className="animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-4 tracking-tight">
            Tristin Van Der Lingen
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A creative developer showcasing modern web solutions. Explore my projects and get in touch to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
