
'use client';

import { Button } from '@/components/ui/button';
import { socialLinks } from '@/config/site';
import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';
import MatrixAnimation from '@/components/matrix-animation';

export function ContactSection() {
  const emailLink = socialLinks.find(link => link.name === 'Email');
  const linkedinLink = socialLinks.find(link => link.name === 'LinkedIn');

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-transparent overflow-hidden flex-1 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
            <MatrixAnimation />
            <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container relative z-10">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            </div>
            <div className="max-w-md mx-auto flex flex-col items-center gap-6">
                {linkedinLink && (
                <Button size="lg" asChild className="w-full">
                    <Link href={linkedinLink.url} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Message me on LinkedIn
                    </Link>
                </Button>
                )}
                {emailLink && (
                    <Button size="lg" variant="outline" asChild className="w-full">
                        <Link href={emailLink.url} target="_blank" rel="noopener noreferrer">
                            <Mail className="mr-2 h-5 w-5" />
                            Send me an Email
                        </Link>
                    </Button>
                )}
            </div>
      </div>
    </section>
  );
}
