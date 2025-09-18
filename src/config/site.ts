
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
  { name: 'Email', url: 'mailto:vanderlingentristin3@gmail.com', icon: Mail },
];

export const projects: Project[] = [
  {
    title: 'Vehicle Classifier',
    description: 'A cutting-edge web application that classifies vehicles using machine learning. Built with React and Node.js.',
    imageUrl: '/project 1 Vehicle classifier.png',
    imageHint: 'vehicle classifier',
    demoUrl: '#',
  },
  {
    title: 'AI Resume Builder',
    description: 'An intelligent application that helps users create professional resumes with the power of AI. Built with Next.js and Genkit.',
    imageUrl: '/project 2 ai resume builder.png',
    imageHint: 'ai resume',
    demoUrl: '#',
  },
  {
    title: 'News Sentiment Navigator',
    description: 'A web application that analyzes news headlines and determines the sentiment of the news.',
    imageUrl: '/project 3 Sentiment Navigator.png',
    imageHint: 'news sentiment',
    demoUrl: '#',
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
