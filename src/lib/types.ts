import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}
