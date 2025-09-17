import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-person');

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center bg-secondary">
      {heroImage && (
         <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
         />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 text-white max-w-4xl mx-auto">
        <div className="animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 tracking-tight">
            Welcome to SkillSlate
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            A creative developer showcasing modern web solutions. Explore my projects and get in touch to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
