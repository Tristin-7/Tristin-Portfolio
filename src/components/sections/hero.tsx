import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import MatrixAnimation from '@/components/matrix-animation';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MatrixAnimation />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-10">
        <div className="animate-in fade-in-0 zoom-in-95 duration-1000">
          <div className="relative group">
            <Image
              src="/profile-Photoroom (2).png"
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square"
              priority
              data-ai-hint="professional person"
            />
          </div>
        </div>
        <div className="animate-in fade-in-0 slide-in-from-bottom-12 duration-1000 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight">
            Tristin Van Der Lingen
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-medium mt-2 mb-4">System Support Associate</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mt-12 mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            I am a Systems Support Associate with a strong interest in technology and continuous learning. I am currently enhancing my skills through Coursera courses in machine learning, Python, AI, professional communications, and professional development, while actively working on practical AI projects such as an AI resume builder as part of an AI bootcamp. My goal is to leverage these skills and project experience to contribute to innovative technology solutions and further develop my expertise in AI and related fields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
