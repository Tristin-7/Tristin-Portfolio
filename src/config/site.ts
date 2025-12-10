
import type { NavItem, Project, Skill, SocialLink, Experience, Certificate, Education } from '@/lib/types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
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
    description: 'A cutting-edge web application that classifies vehicles using machine learning. Built with Google Teachable Machine.',
    imageUrl: '/project 1 Vehicle classifier.png',
    imageHint: 'vehicle classifier',
    demoUrl: 'https://tristin-7.github.io/System-Syncers-Vehicle-Classifier/',
  },
  {
    title: 'AI Resume Builder',
    description: 'An intelligent application that helps users create professional resumes with the power of AI. Built with Deepseek AI and Gemini',
    imageUrl: '/project 2 ai resume builder.png',
    imageHint: 'ai resume',
    demoUrl: 'https://tristin-7.github.io/System-Syncers-AI-Resume-Builder/',
  },
  {
    title: 'News Sentiment Navigator',
    description: 'A web application that analyzes news headlines and determines the sentiment of the news. Built with Firebase Studio',
    imageUrl: '/chatbot.png',
    imageHint: 'news sentiment',
    demoUrl: 'https://tristinssentimentnavigator.netlify.app/',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Systems Support Associate',
    company: 'Capaciti',
    duration: 'July 2025 - Present',
    description: 'As a Systems Support Associate at Capaciti, I provide IT support while actively applying and expanding my technical skills through hands-on projects. I have contributed to AI-focused initiatives, including the development of an AI resume builder as part of an AI bootcamp, allowing me to apply Python, machine learning, and AI concepts to practical solutions.',
  },
];

export const certificates: Certificate[] = [
  {
    name: 'AI Foundations',
    imageUrl: '/AIFoundations.png',
    imageHint: 'ai foundations',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/H4O8RDKZXK1X',
  },
  {
    name: 'Generative AI with LLMs',
    imageUrl: '/Generative AI with LLMs.png',
    imageHint: 'generative ai llms',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/R97A2YUJNO9R',
  },
  {
    name: 'AI Essentials',
    imageUrl: '/AIEssentials.png',
    imageHint: 'ai essentials',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/0MDR6369COIG',
  },
  {
    name: 'Developing Interpersonal Skills',
    imageUrl: '/Developing Interpersonal Skills.png',
    imageHint: 'interpersonal skills',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/GZOK0II1YP4R',
  },
  {
    name: 'Finding Your Professional Voice',
    imageUrl: '/Finding your professional voice.png',
    imageHint: 'professional voice',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/DL3JZA96FP92',
  },
  {
    name: 'Verbal Communications and Presentation Skills',
    imageUrl: '/Verbal Communications and Presntation Skiils.png',
    imageHint: 'communication skills',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/HYPJE6IRNND0',
  },
];

export const education: Education[] = [
    {
      institution: 'Cape Peninsula University of Technology',
      degree: 'Higher Certificate in ICT',
      duration: '2024',
      description: 'Completed a Higher Certificate in Information and Communication Technology.',
    },
    {
      institution: 'Elsies River High School',
      degree: 'National Senior Certificate',
      duration: '2022',
      description: 'Successfully completed matriculation.',
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
