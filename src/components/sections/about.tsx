import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with a knack for building elegant and efficient solutions for the web. My journey in tech is driven by a desire to create impactful digital experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center animate-in fade-in-0 zoom-in-95 duration-1000">
                <CardHeader>
                    <Award className="h-10 w-10 mx-auto text-primary" />
                    <CardTitle className="font-headline mt-4">Background</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">With a solid foundation in computer science and years of hands-on experience, I've honed my skills across the full stack of web development, from conceptualization to deployment.</p>
                </CardContent>
            </Card>
            <Card className="text-center animate-in fade-in-0 zoom-in-95 delay-200 duration-1000">
                <CardHeader>
                    <Target className="h-10 w-10 mx-auto text-primary" />
                    <CardTitle className="font-headline mt-4">Aspirations</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">I aim to leverage technology to solve real-world problems, continuously learn new skills, and contribute to innovative projects that push the boundaries of what's possible on the web.</p>
                </CardContent>
            </Card>
            <Card className="text-center md:col-span-2 lg:col-span-1 animate-in fade-in-0 zoom-in-95 delay-400 duration-1000">
                <CardHeader>
                    <Users className="h-10 w-10 mx-auto text-primary" />
                    <CardTitle className="font-headline mt-4">Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">I believe in clean code, user-centric design, and collaborative development. My goal is to write software that is not just functional but also maintainable and a joy to use.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
