'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { socialLinks } from '@/config/site';
import Link from 'next/link';
import { Label } from '../ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactSection() {
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && !state.success && state.errors) {
       toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Leave your details and I'll get back to you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <form ref={formRef} action={dispatch} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required aria-label="Your Name" />
                    {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" required aria-label="Your Email" />
                    {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your Message" rows={5} required aria-label="Your Message" />
                    {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(', ')}</p>}
                </div>
                <SubmitButton />
            </form>
            <div className="flex flex-col justify-center items-center md:items-start space-y-6">
                <h3 className="text-2xl font-headline">Or find me on</h3>
                <div className="flex flex-col space-y-4">
                    {socialLinks.map(({ name, url, icon: Icon }) => (
                         <Link key={name} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                            <Icon className="h-6 w-6 text-primary"/>
                            <span>{name}</span>
                         </Link>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
