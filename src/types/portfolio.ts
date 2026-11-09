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
  id: string;
  name: string;
  category: 'Network & Perimeter' | 'Traffic Ingress & Routing' | 'Container Runtime' | 'Virtual Compute' | 'Image Registry' | 'Managed Relational DB' | 'Object Storage' | 'Security & Identity' | 'Secrets Management' | 'Observability & Metrics';
  zone: 'ZONE_01 // INGRESS' | 'ZONE_02 // COMPUTE' | 'ZONE_03 // PERSISTENCE' | 'ZONE_04 // GOVERNANCE';
  zoneTitle: string;
  explanation: string;
  purpose: string;
  relatedServices: string[];
  learningStatus: 'Hands-on Lab Exploration' | 'Architecture Blueprinting' | 'Configuration & Policy Design' | 'Local-to-Cloud Migration';
  concepts: string[];
  focusArea: string;
}
