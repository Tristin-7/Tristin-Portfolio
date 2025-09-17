import type { NavItem, Project, Skill, SocialLink } from '@/lib/types';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { name: 'Email', url: 'mailto:hello@example.com', icon: Mail },
];

export const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge web application that solves a modern problem with a clean and intuitive user interface. Built with React and Node.js.',
    imageUrl: 'https://picsum.photos/seed/project-1/600/400',
    imageHint: 'web application',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Beta',
    description: 'A mobile-first platform for social connectivity. It features real-time chat and a dynamic feed. Developed using Flutter and Firebase.',
    imageUrl: 'https://picsum.photos/seed/project-2/600/400',
    imageHint: 'mobile app',
    demoUrl: '#',
  },
  {
    title: 'Project Gamma',
    description: 'An open-source library for data visualization. Simplifies complex datasets into beautiful and interactive charts. Written in TypeScript.',
    imageUrl: 'https://picsum.photos/seed/project-3/600/400',
    imageHint: 'code screen',
    repoUrl: '#',
  },
];

export const technicalSkills: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 95 },
  { name: 'React / Next.js', level: 90 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'HTML & CSS / Tailwind', level: 95 },
  { name: 'Databases (SQL & NoSQL)', level: 80 },
  { name: 'Cloud Services (AWS/GCP)', level: 75 },
];

export const softSkills: Skill[] = [
  { name: 'Problem Solving', level: 95 },
  { name: 'Communication', level: 90 },
  { name: 'Teamwork & Collaboration', level: 95 },
  { name: 'Adaptability', level: 85 },
  { name: 'Creativity', level: 90 },
  { name: 'Leadership', level: 80 },
];
