export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company?: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  highlights?: string[];
  image?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  phone?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
