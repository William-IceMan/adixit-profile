export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  name: string;
  issuer?: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  linkedinUrl: string;
}