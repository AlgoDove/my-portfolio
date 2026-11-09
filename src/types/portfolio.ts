export interface ProjectArchitectureItem {
  layer: string;
  technology: string;
  purpose: string;
}

export interface ProjectTradeOff {
  decision: string;
  rationale: string;
  tradeOff: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack & Backend' | 'Backend & Enterprise' | 'Distributed Systems & AI' | 'Civic Tech & Web';
  statusBadge: string;
  githubUrl: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  individualContribution: string[];
  engineeringDecisions: ProjectTradeOff[];
  architectureSummary: string;
  technologies: {
    name: string;
    role: string;
  }[];
  verifiedMetrics?: {
    label: string;
    value: string;
    detail: string;
  }[];
  architectureLayers?: ProjectArchitectureItem[];
  imagePath?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  programme: string;
  location: string;
  period: string;
  status: string;
  context: string;
  keyActivities: string[];
  technicalScope: string[];
  disclaimer?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface AwsServiceItem {
  name: string;
  purpose: string;
  focusArea: string;
}
