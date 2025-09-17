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
