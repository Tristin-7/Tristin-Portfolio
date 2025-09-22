
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/config/site';
import type { Project } from '@/lib/types';
import { ExternalLink } from 'lucide-react';
import MatrixAnimation from "@/components/matrix-animation";

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <Card className="flex flex-col overflow-hidden animate-in fade-in-0 zoom-in-95 duration-500 bg-background/80" style={{transitionDelay: `${index * 150}ms`}}>
      <div className="relative aspect-video">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={project.imageHint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="gap-2">
        {project.demoUrl && (
          <Button asChild className="flex-1">
            <Link href={project.demoUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}


export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-transparent overflow-hidden flex-1 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <MatrixAnimation />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
