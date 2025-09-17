import type { NavItem, Project, Skill, SocialLink } from '@/lib/types';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const navItems: NavItem[] = [
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
    title: 'Vehicle Classifier',
    description: 'A cutting-edge web application that classifies vehicles using machine learning. Built with React and Node.js.',
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
  { name: 'System Support & Troubleshooting', level: 90 },
  { name: 'Html/CSS', level: 85 },
  { name: 'Machine Learning Fundamentals', level: 80 },
  { name: 'Artificial Intelligence', level: 80 },
  { name: 'Cloud Computing Basics', level: 75 },
  { name: 'Javascript', level: 85 },
];

export const softSkills: Skill[] = [
  { name: 'Technical Communication', level: 95 },
  { name: 'Professional Communication', level: 90 },
  { name: 'Team Collaboration', level: 95 },
  { name: 'Project Management Basics', level: 85 },
  { name: 'Problem-Solving & Critical Thinking', level: 90 },
  { name: 'Continuous Learning & Development', level: 95 },
];
