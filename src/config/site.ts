
import type { NavItem, Project, Skill, SocialLink, Experience, Certificate } from '@/lib/types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Tristin-7', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tristin-van-der-lingen-95a067350/', icon: Linkedin },
  { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=vanderlingentristin3@gmail.com', icon: Mail },
];

export const projects: Project[] = [
  {
    title: 'Vehicle Classifier',
    description: 'A cutting-edge web application that classifies vehicles using machine learning. Built with React and Node.js.',
    imageUrl: '/project 1 Vehicle classifier.png',
    imageHint: 'vehicle classifier',
    demoUrl: 'https://tristin-7.github.io/System-Syncers-Vehicle-Classifier/',
  },
  {
    title: 'AI Resume Builder',
    description: 'An intelligent application that helps users create professional resumes with the power of AI. Built with Next.js and Genkit.',
    imageUrl: '/project 2 ai resume builder.png',
    imageHint: 'ai resume',
    demoUrl: 'https://tristin-7.github.io/System-Syncers-AI-Resume-Builder/',
  },
  {
    title: 'News Sentiment Navigator',
    description: 'A web application that analyzes news headlines and determines the sentiment of the news.',
    imageUrl: '/project 3 Sentiment Navigator.png',
    imageHint: 'news sentiment',
    demoUrl: 'https://9000-firebase-studio-1756966665623.cluster-etsqrqvqyvd4erxx7qq32imrjk.cloudworkstations.dev',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Systems Support Associate',
    company: 'Company Inc.',
    duration: 'Jan 2022 - Present',
    description: [
      'Provided technical assistance and support for incoming queries and issues related to computer systems, software, and hardware.',
      'Responded to queries either in person or over the phone, and trained computer users.',
      'Maintained daily performance of computer systems and resolved technical problems with Local Area Networks (LAN), Wide Area Networks (WAN), and other systems.',
    ],
  },
];

export const certificates: Certificate[] = [
  {
    name: 'Google IT Support Professional Certificate',
    issuer: 'Coursera',
    date: '2023',
    url: '#',
  },
  {
    name: 'Foundations of Project Management',
    issuer: 'Coursera',
    date: '2023',
    url: '#',
  },
  {
    name: 'AI Essentials',
    issuer: 'Google',
    date: '2024',
    url: '#',
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
