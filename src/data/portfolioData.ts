import type { Project, ExperienceItem, SkillCategory, AwsServiceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Gokulaselvan I',
  wordmark: 'GOKUL.',
  title: 'Software Engineer',
  location: 'Colombo, Sri Lanka',
  email: 'algodove77@gmail.com',
  github: 'https://github.com/AlgoDove',
  linkedin: 'https://linkedin.com/in/gokul-indhreshan-075874237/',
  headline: 'Building software. Thinking in systems.',
  centralIdea: 'I architect and implement software solutions, with an interest in the engineering decisions that make them work.',
  status: 'Open to Engineering Opportunities & Collaborations',
  cvFilename: 'Gokulaselvan-I-Resume.pdf',
  cvPath: '/files/Gokulaselvan-I-Resume.pdf',
};

export const SELECTED_PROJECTS: Project[] = [
  {
    id: 'procura',
    title: 'Procura',
    tagline: 'AI-Assisted Enterprise Procurement Management System',
    category: 'Full-Stack & Backend',
    statusBadge: 'Production-Grade Architecture',
    githubUrl: 'https://github.com/AlgoDove/Procura',
    problem: 'Enterprise procurement lifecycles suffer from disconnected communication between departmental requesters, quotation collectors, and approval executives. Manual quote synthesis creates administrative bottlenecks, and untracked drafts risk budget leakages.',
    solution: 'A modular monolith backend with unified web and mobile clients. Orchestrates the end-to-end procurement lifecycle with multi-role access control (Employee, Procurement Officer, Manager, Admin) and an agentic AI subsystem powered by Google Gemini, enforced by deterministic business validation guardrails.',
    architectureSummary: 'Modular Controller-Service-Repository-DTO architecture built on ASP.NET Core 8, Entity Framework Core, and PostgreSQL, interfaced with React 18 and Flutter mobile clients.',
    individualContribution: [
      'Architected and implemented the Procurement Request Subsystem (Component 1) backend using a modular Controller-Service-Repository-DTO pattern.',
      'Designed and enforced request lifecycle state-transition machines (DRAFT → SUBMITTED → IN_REVIEW → APPROVED / REJECTED) with strict ownership checks.',
      'Implemented JWT stateless authentication and granular role-based access control (RBAC) across endpoints.',
      'Constructed automated cost aggregation logic calculating line item totals, currency validations, and budget variance.',
      'Resolved complex Entity Framework Core change tracking and concurrency issues on nested collection updates.',
      'Authored comprehensive automated test suites using xUnit, Moq, and WebApplicationFactory (217 backend automated tests passing).',
      'Integrated deterministic validation guardrails (ValidateDraftDataTool) interfacing with the Google Gemini tool-gated AI orchestrator.',
      'Ensured full contract compatibility with React 18 web client (Vite/TanStack Query) and Flutter 3.x cross-platform mobile client.'
    ],
    engineeringDecisions: [
      {
        decision: 'Modular Monolith Architecture over Microservices',
        rationale: 'Procurement workflows require tight ACID transactions across requests, items, and audit records. A modular monolith within ASP.NET Core eliminated distributed transaction latency and network failure modes.',
        tradeOff: 'All modules share a unified deployment pipeline, mitigated by strict project folder and namespace boundaries.'
      },
      {
        decision: 'Deterministic Guardrails around Agentic AI',
        rationale: 'LLMs can hallucinate non-existent products, negative prices, or invalid units. AI drafting endpoints pass generated data through deterministic validators before persisting anything to PostgreSQL.',
        tradeOff: 'Adds explicit validation code paths, but guarantees zero corrupted entities enter the database.'
      },
      {
        decision: 'EF Core AsNoTracking & Concurrency Resolution',
        rationale: 'High-frequency read queries for procurement reporting caused change-tracker memory overhead. Explicit AsNoTracking() cut query memory by ~40% while concurrency stamps prevented conflicting updates.',
        tradeOff: 'Entities require explicit re-attachment when transitioning back to update workflows.'
      }
    ],
    technologies: [
      { name: 'ASP.NET Core 8', role: 'Web API & Modular Monolith Runtime' },
      { name: 'C# 12', role: 'Strongly-typed Backend Logic' },
      { name: 'Entity Framework Core 8', role: 'ORM & Database Migrations' },
      { name: 'PostgreSQL', role: 'Relational Persistence (Local & Neon)' },
      { name: 'xUnit & Moq', role: '217 Passing Automated Unit & Integration Tests' },
      { name: 'Google Gemini API', role: 'Agentic Tool-Gated AI Subsystem' },
      { name: 'React 18 & TypeScript', role: 'Web Client with TanStack Query' },
      { name: 'Flutter', role: 'Cross-Platform Mobile Client' }
    ],
    verifiedMetrics: [
      { label: 'Backend Tests', value: '217 Passing', detail: 'xUnit & Moq integration coverage' },
      { label: 'Migrations Pending', value: '0', detail: 'Synchronized PostgreSQL schema' },
      { label: 'Role Governance', value: '4 Roles', detail: 'Employee, Officer, Manager, Admin' }
    ],
    architectureLayers: [
      { layer: 'Presentation', technology: 'React 18 (Vite, TS) + Flutter 3 (Android)', purpose: 'Role-specific web dashboards and mobile approval workflows' },
      { layer: 'API Gateway & DI', technology: 'ASP.NET Core 8 Web API', purpose: 'Single source of truth, routing, JWT Bearer validation, and Swagger docs' },
      { layer: 'Business & State', technology: 'C# Services & State Machines', purpose: 'Procurement lifecycle rules, budget checks, and deterministic AI guardrails' },
      { layer: 'AI Orchestration', technology: 'Google Gemini (gemini-3.5-flash) + ToolRegistry', purpose: 'Natural-language draft extraction and quotation scoring' },
      { layer: 'Persistence Layer', technology: 'Entity Framework Core 8 + PostgreSQL', purpose: 'ACID transactional storage, indexes, and audit logs' }
    ],
    imagePath: '/images/projects/procura/overview.png'
  },
  {
    id: 'approval-workflow',
    title: 'Enterprise Approval Workflow Engine',
    tagline: 'Multi-Tenant Sequential Workflow Engine with Audit Logs',
    category: 'Backend & Enterprise',
    statusBadge: 'Core Enterprise Backend',
    githubUrl: 'https://github.com/AlgoDove/enterprise-approval-engine',
    problem: 'Organizational requests (expense approvals, internal resource grants, leave requests) need rigid multi-step validation where progression depends strictly on hierarchy, and every stage requires non-repudiable audit trails.',
    solution: 'A Spring Boot 3 backend system implementing sequential multi-step approval workflows with JWT authentication, role-based access control, and complete audit logging of decisions and status transitions.',
    architectureSummary: 'Controller-Service-Repository architecture with Spring Security filter chains, Spring Data JPA, Hibernate ORM, and PostgreSQL.',
    individualContribution: [
      'Designed and developed the core Spring Boot 3 application with layered Controller-Service-Repository architecture.',
      'Configured Spring Security filter chains implementing stateless JWT authentication and role-based authorization for ADMIN, MANAGER, and EMPLOYEE.',
      'Built sequential multi-step approval validation ensuring requests cannot skip intermediate managerial approvals.',
      'Implemented state transition handling (PENDING → IN_PROGRESS → APPROVED / REJECTED) with entity validation.',
      'Developed audit log persistence tracking request creators, approver timestamps, decision outcomes, and step history in PostgreSQL.'
    ],
    engineeringDecisions: [
      {
        decision: 'Sequential Step Verification in Service Layer',
        rationale: 'Enforcing step ordering in the business service layer prevents out-of-order approvals even if an API endpoint is hit directly with valid credentials.',
        tradeOff: 'Requires looking up the parent workflow definition step sequence on every approval action.'
      },
      {
        decision: 'Dedicated Audit History Table',
        rationale: 'Separating the mutable request state from the immutable audit trail guarantees compliance and simplifies historical timeline queries.',
        tradeOff: 'Additional write operation per approval transition, negligible compared to compliance value.'
      }
    ],
    technologies: [
      { name: 'Java 17', role: 'Backend Language' },
      { name: 'Spring Boot 3', role: 'Enterprise Application Framework' },
      { name: 'Spring Security', role: 'JWT Filter Chains & RBAC' },
      { name: 'Spring Data JPA', role: 'Repository Abstraction' },
      { name: 'Hibernate', role: 'Object-Relational Mapping' },
      { name: 'PostgreSQL', role: 'Database Persistence' },
      { name: 'Maven', role: 'Build & Dependency Management' }
    ],
    verifiedMetrics: [
      { label: 'Runtime', value: 'Java 17 / Spring Boot 3', detail: 'Modern enterprise runtime' },
      { label: 'Security', value: 'Stateless JWT', detail: 'Token-based RBAC' },
      { label: 'Audit Trail', value: '100% Logged', detail: 'Full lifecycle traceability' }
    ],
    architectureLayers: [
      { layer: 'Security Filter', technology: 'Spring Security JWT Filter', purpose: 'Intercepts Bearer tokens and injects SecurityContext' },
      { layer: 'Controller Layer', technology: 'Spring MVC REST Controllers', purpose: 'Exposes /auth, /requests, /approvals, /workflows endpoints' },
      { layer: 'Workflow Engine', technology: 'Spring Service Components', purpose: 'Enforces sequential step checks and transition logic' },
      { layer: 'Persistence Layer', technology: 'Spring Data JPA + PostgreSQL', purpose: 'Manages workflow definitions, requests, and audit entities' }
    ],
    imagePath: '/images/projects/approval-workflow/overview.png'
  },
  {
    id: 'fixmyarea',
    title: 'FixMyArea',
    tagline: 'Civic Infrastructure Reporting & Transparency Platform',
    category: 'Civic Tech & Web',
    statusBadge: 'Full-Stack Civic Platform',
    githubUrl: 'https://github.com/AlgoDove/FixMyArea',
    problem: 'Recurring local infrastructure failures in Sri Lankan towns (potholes in Kelaniya/Negombo, broken streetlights, clogged monsoon drains) go uncataloged because formal municipal channels require tedious logins or provide no public tracking.',
    solution: 'A transparent civic reporting hub allowing citizens to submit local infrastructure disruptions with zero account barriers, while enforcing server-authoritative timestamps, multi-attribute neighborhood filtering, and HMAC-authenticated moderator status tracking.',
    architectureSummary: 'ASP.NET Core 8 Web API backend + React 19 / TypeScript / Vite / Tailwind CSS frontend + Neon Serverless PostgreSQL with SQLite offline fallback.',
    individualContribution: [
      'Engineered the full-stack application architecture from backend API to responsive frontend.',
      'Designed server-authoritative issue submission: issues lock immediately to "Reported" with UTC timestamps generated exclusively by the server to prevent spoofing.',
      'Implemented lightweight moderator authorization using constant-time password verification and HMAC-signed session tokens (X-Moderator-Token).',
      'Structured strict lifecycle status progression (Reported → Under Review → Resolved) gated by moderator verification.',
      'Developed real-time multi-attribute search and neighborhood filtering across titles, locations (e.g. Negombo, Colombo 05), categories, and severity.',
      'Configured dual-database strategy: Neon cloud PostgreSQL for production/cloud and SQLite fallback for instant offline local development.'
    ],
    engineeringDecisions: [
      {
        decision: 'No-Barrier Reporting with Server-Locked Status',
        rationale: 'Removing mandatory user signup drastically lowers the barrier for reporting urgent community hazards, while server-side status locks prevent public tampering.',
        tradeOff: 'Requires strong input validation and payload size caps to guard against spam submissions.'
      },
      {
        decision: 'HMAC-Signed Moderator Session Tokens',
        rationale: 'A lightweight HMAC signature verified on status mutation endpoints provided robust security for authorized community moderators without heavy OAuth/Identity overhead.',
        tradeOff: 'Tokens are session-bound without fine-grained multi-tier permissions, optimal for the platform’s scope.'
      }
    ],
    technologies: [
      { name: 'ASP.NET Core 8', role: 'C# REST API Backend' },
      { name: 'React 19', role: 'Modern Component Frontend' },
      { name: 'TypeScript', role: 'End-to-end Type Safety' },
      { name: 'Tailwind CSS', role: 'Responsive Civic Interface' },
      { name: 'EF Core 8', role: 'Database ORM & Migrations' },
      { name: 'PostgreSQL / Neon', role: 'Cloud Relational Database' },
      { name: 'Vite', role: 'Optimized Bundler & Dev Server' }
    ],
    verifiedMetrics: [
      { label: 'Reporting Barrier', value: 'Zero Friction', detail: 'No account required to report' },
      { label: 'Security', value: 'HMAC Moderator', detail: 'Constant-time verification' },
      { label: 'Persistence', value: 'PostgreSQL / SQLite', detail: 'Cloud Neon + Local fallback' }
    ],
    architectureLayers: [
      { layer: 'Client App', technology: 'React 19 + TypeScript + Tailwind', purpose: 'Public reporting forms, search filters, and moderator dashboard' },
      { layer: 'API & Auth', technology: 'ASP.NET Core 8 + HMAC Token Auth', purpose: 'IssuesController, ModeratorController, and validation filters' },
      { layer: 'Data Access', technology: 'EF Core 8 (Npgsql & SQLite Providers)', purpose: 'AppDbContext with indexes on status, category, and timestamps' },
      { layer: 'Hosting Targets', technology: 'Vercel (Client) + Render (API) + Neon (DB)', purpose: 'Modern decoupled cloud deployment stack' }
    ],
    imagePath: '/images/projects/fixmyarea/overview.png'
  },
  {
    id: 'fraud-detection',
    title: 'Fraud Detection System',
    tagline: 'Autoencoder-Based Anomaly Detection in Digital Transactions',
    category: 'Distributed Systems & AI',
    statusBadge: 'Machine Learning Engineering',
    githubUrl: 'https://github.com/AlgoDove/Fraud-Detection-System',
    problem: 'Financial transaction fraud evolves rapidly and exhibits extreme class imbalance (less than 0.1% fraudulent). Supervised classifiers overfit on known attack patterns, failing to detect zero-day or novel payment anomalies.',
    solution: 'An unsupervised deep learning autoencoder trained exclusively on normal transaction patterns. Anomalies are flagged in real-time when the model’s reconstruction error exceeds a mathematically tuned threshold, served via a Flask REST API.',
    architectureSummary: 'Python data pipeline with Pandas & NumPy, TensorFlow/Keras Autoencoder architecture, and Flask inference endpoint.',
    individualContribution: [
      'Engineered domain-specific velocity features, including transaction counts within 1-hour and 24-hour windows and deviation from historical average amounts.',
      'Constructed an unsupervised autoencoder network using TensorFlow/Keras that compresses input features into a latent representation and reconstructs them.',
      'Calibrated the reconstruction error threshold against synthetic digital payment distributions.',
      'Conducted rigorous evaluation under severe class imbalance, achieving AUC-ROC of 0.9999 and 1.0 Recall on test anomalies.',
      'Developed and containerized a Flask REST API service (POST /predict) providing real-time inference with reconstruction error and anomaly flags.'
    ],
    engineeringDecisions: [
      {
        decision: 'Prioritizing Recall over Precision for Fraud Detection',
        rationale: 'In financial transactions, the cost of a missed fraud event (False Negative) is catastrophic, whereas a false alarm (False Positive) can be routed for quick secondary verification.',
        tradeOff: 'Precision was 0.1656 due to extreme imbalance, requiring downstream tiered filtering in a production banking pipeline.'
      },
      {
        decision: 'Unsupervised Autoencoder over Supervised Tree Models',
        rationale: 'Supervised models only recognize historical fraud labels. An autoencoder models what "normal" looks like, allowing it to detect entirely novel attack patterns through high reconstruction error.',
        tradeOff: 'Threshold tuning requires statistical calibration against transaction variance.'
      }
    ],
    technologies: [
      { name: 'Python 3', role: 'Core ML Development' },
      { name: 'TensorFlow / Keras', role: 'Autoencoder Architecture' },
      { name: 'scikit-learn', role: 'Preprocessing & Metric Evaluation' },
      { name: 'Pandas & NumPy', role: 'Feature Engineering & Array Math' },
      { name: 'Flask', role: 'Real-time REST Inference API' }
    ],
    verifiedMetrics: [
      { label: 'AUC-ROC', value: '0.9999', detail: 'High discriminative capacity' },
      { label: 'Recall', value: '1.0 (100%)', detail: 'Zero missed fraud occurrences' },
      { label: 'Inference', value: 'REST API', detail: 'JSON payload to anomaly flag' }
    ],
    architectureLayers: [
      { layer: 'Feature Engineering', technology: 'Pandas / NumPy / StandardScaler', purpose: 'Time-window velocity calculations and normalization' },
      { layer: 'Neural Network', technology: 'TensorFlow / Keras Autoencoder', purpose: 'Latent dimension compression and reconstruction error calculation' },
      { layer: 'Inference API', technology: 'Flask REST Endpoint', purpose: 'Real-time POST /predict endpoint returning anomaly scores' }
    ],
    imagePath: '/images/projects/fraud-detection/model-results.png'
  }
];

export const EXPERIENCE_DATA: ExperienceItem = {
  role: 'Software Engineering Intern',
  organization: 'Sri Lanka Judicial Service Commission',
  programme: 'Associated with the national e-Courts digitalisation programme',
  location: 'Colombo, Sri Lanka',
  period: 'October 2026 – Present',
  status: 'Active Internship',
  context: 'Direct technical involvement in the ongoing modernisation of court administration and judicial workflows across Sri Lanka, supporting core internal operational software and digital transition systems.',
  keyActivities: [
    'Develop and improve digital systems supporting daily court operations, internal ERP modules, and operational web and mobile applications.',
    'Analyse existing judicial software architectures to identify operational bottlenecks and propose concrete engineering improvements.',
    'Investigate, reproduce, and debug technical defects in operational systems to restore service consistency for judicial staff.',
    'Design and execute rigorous test cases validating critical application behavior, business rules, and data persistence before release.',
    'Support legacy-system data migration and technical integration workflows as court registries transition from paper-based and legacy records.',
    'Analyse complex court operational requirements and translate administrative procedures into clean software specifications and testable code.',
    'Communicate technical concepts and system behavior clearly to non-technical judicial personnel and administrative registrars.',
    'Support technical knowledge transfer and operational onboarding for court staff across diverse court districts.'
  ],
  technicalScope: [
    'Court Operations ERP Systems',
    'Operational Web & Mobile Applications',
    'Legacy System Data Migration Analysis',
    'System Behaviour & Test Case Validation',
    'Defect Investigation & Performance Debugging',
    'Judicial Domain Workflow Modeling'
  ],
  disclaimer: 'Note: The e-Courts digitalisation programme is a national judicial initiative. My contributions focus on direct engineering activities, module improvements, defect investigation, and technical testing within internal systems, working in collaboration with the wider engineering and administrative teams.'
};

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Languages applied across production backends, typed web clients, and machine learning models.',
    skills: [
      { name: 'C#', context: 'Primary language for ASP.NET Core 8 Web APIs, EF Core, and enterprise backend logic' },
      { name: 'Java', context: 'Spring Boot 3, Spring Security, Hibernate ORM, and workflow engine services' },
      { name: 'TypeScript', context: 'Typed frontend development in React 18/19, API contract typing, and Vite tooling' },
      { name: 'JavaScript', context: 'Modern ES6+ syntax, browser APIs, and asynchronous event architectures' },
      { name: 'Python', context: 'TensorFlow/Keras autoencoder pipelines, Pandas feature engineering, and Flask APIs' },
      { name: 'SQL', context: 'PostgreSQL schema design, complex joins, indexing, and migration planning' },
      { name: 'Dart', context: 'Flutter 3 mobile application development and Provider state management' },
      { name: 'HTML5 & CSS3', context: 'Semantic layout, responsive design, and accessible markup hierarchy' }
    ]
  },
  {
    title: 'Backend Engineering & APIs',
    description: 'Frameworks and architectures used to build dependable, authenticated services.',
    skills: [
      { name: 'ASP.NET Core 8', context: 'Controller-Service-Repository modular monoliths, DI, and middleware' },
      { name: 'Spring Boot 3', context: 'Enterprise microservices and multi-tier approval workflow engines' },
      { name: 'REST API Design', context: 'Consistent HTTP status codes, structured JSON payloads, and idempotency' },
      { name: 'JWT & RBAC', context: 'Stateless token issuance, role claims validation, and endpoint authorization' },
      { name: 'Spring Security', context: 'Security filter chains, password hashing, and token inspection' },
      { name: 'Node.js & Express.js', context: 'Lightweight JavaScript backend microservices and utility scripts' },
      { name: 'Flask', context: 'Python microservice serving machine learning model inferences' },
      { name: 'Swagger / OpenAPI', context: 'Interactive API documentation with Bearer token authentication testing' }
    ]
  },
  {
    title: 'Frontend & Mobile Engineering',
    description: 'Client technologies delivering responsive, accessible user interfaces.',
    skills: [
      { name: 'React (18 & 19)', context: 'Component architecture, custom hooks, and server-state integration' },
      { name: 'Vite', context: 'High-speed build tooling, hot module replacement, and bundle optimization' },
      { name: 'Tailwind CSS', context: 'Design-system styling, responsive breakpoints, and dark mode tokens' },
      { name: 'TanStack Query', context: 'Server state caching, background refetching, and mutation management' },
      { name: 'React Router', context: 'Client-side SPA routing, protected routes, and navigation guards' },
      { name: 'Flutter', context: 'Cross-platform mobile apps for Android with typed HTTP clients and Provider' }
    ]
  },
  {
    title: 'Databases & Persistence',
    description: 'Relational and document storage solutions for structured business data.',
    skills: [
      { name: 'PostgreSQL', context: 'Primary relational database (local installations and Neon Serverless)' },
      { name: 'Entity Framework Core 8', context: 'LINQ querying, migrations, change tracking tuning, and relationship mapping' },
      { name: 'Spring Data JPA & Hibernate', context: 'Repository interfaces, entity lifecycle hooks, and JPQL queries' },
      { name: 'MongoDB & Mongoose', context: 'Document modeling and secondary unstructured data storage' },
      { name: 'SQLite', context: 'Lightweight local database for offline development fallbacks' }
    ]
  },
  {
    title: 'Testing & Verification',
    description: 'Automated test suites ensuring business logic and security contracts hold.',
    skills: [
      { name: 'xUnit', context: '217 backend unit and integration test assertions across Procura modules' },
      { name: 'Moq', context: 'Mocking service dependencies, repositories, and external AI orchestrators' },
      { name: 'WebApplicationFactory', context: 'End-to-end HTTP integration testing in ASP.NET Core test hosts' },
      { name: 'Vitest & React Testing Library', context: 'Frontend component rendering and user event verification' },
      { name: 'Postman', context: 'Automated collection runs, environment variable scripting, and token testing' },
      { name: 'k6', context: 'Performance and load testing backend endpoints under simulated concurrency' }
    ]
  },
  {
    title: 'Machine Learning & AI',
    description: 'Applied machine learning and agentic workflows integrated into software.',
    skills: [
      { name: 'TensorFlow & Keras', context: 'Building and training deep autoencoders for anomaly detection' },
      { name: 'scikit-learn', context: 'Data preprocessing, feature scaling, and evaluation metrics (AUC-ROC, Recall)' },
      { name: 'Pandas & NumPy', context: 'Time-window velocity feature engineering and vectorized calculations' },
      { name: 'Google Gemini API', context: 'Agentic tool-gated workflows with deterministic business validation gates' }
    ]
  },
  {
    title: 'DevOps & Engineering Tools',
    description: 'Tools used for version control, automated delivery, and runtime inspection.',
    skills: [
      { name: 'Git & GitHub', context: 'Feature branching, code reviews, and commit hygiene' },
      { name: 'GitHub Actions', context: 'CI pipelines running automated build and test suites on main branch' },
      { name: 'Docker', context: 'Multi-stage container builds for ASP.NET Core, Java, and Python services' },
      { name: 'Flutter DevTools', context: 'Widget inspection, memory profiling, and network call debugging' }
    ]
  }
];

export const AWS_EXPLORATION_SCOPE: AwsServiceItem[] = [
  {
    id: 'vpc',
    name: 'Amazon VPC',
    category: 'Network & Perimeter',
    zone: 'ZONE_01 // INGRESS',
    zoneTitle: 'Network Boundary & Ingress Gateway',
    explanation: 'A private, logically isolated virtual network dedicated to your cloud resources where you control IP address ranges, subnets, and routing rules.',
    purpose: 'Enforces strict network isolation; separates public-facing entry points (ALB) from private backend application tasks and databases with zero direct internet exposure.',
    relatedServices: ['Application Load Balancer (Public Subnets)', 'Amazon ECS / EC2 (Private Subnets)', 'Amazon RDS (Isolated DB Subnets)'],
    learningStatus: 'Hands-on Lab Exploration',
    concepts: ['CIDR Subnetting (/24, /28)', 'Public vs. Private Subnets', 'Route Tables & Internet Gateways', 'Stateful Security Groups'],
    focusArea: 'Multi-AZ subnet architecture, NAT Gateway routing, and database security group ingress isolation.'
  },
  {
    id: 'alb',
    name: 'Application Load Balancer',
    category: 'Traffic Ingress & Routing',
    zone: 'ZONE_01 // INGRESS',
    zoneTitle: 'Network Boundary & Ingress Gateway',
    explanation: 'An intelligent layer-7 reverse proxy that terminates incoming HTTP/HTTPS connections and distributes traffic evenly across healthy backend targets.',
    purpose: 'Serves as the single public entry point for client traffic (React web and mobile apps), handling TLS/SSL termination and path-based routing to backend APIs.',
    relatedServices: ['Amazon VPC (Deployed across multi-AZ public subnets)', 'Amazon ECS / EC2 (Forwards traffic to target groups)', 'AWS Secrets Manager / ACM (SSL certificates)'],
    learningStatus: 'Architecture Blueprinting',
    concepts: ['Path-based Routing Rules', 'Target Group Health Checks', 'SSL/TLS Offloading', 'Connection Draining'],
    focusArea: 'Health probe intervals, path forwarding rules, and HTTPS listener configuration.'
  },
  {
    id: 'ecs-fargate',
    name: 'Amazon ECS (Fargate)',
    category: 'Container Runtime',
    zone: 'ZONE_02 // COMPUTE',
    zoneTitle: 'Compute & Container Runtime',
    explanation: 'A fully managed container orchestration service that executes Docker containers using AWS Fargate serverless compute without provisioning underlying virtual servers.',
    purpose: 'Hosts the modular monolith ASP.NET Core 8 Web API and Spring Boot 3 workflow engine, providing automated task recovery, scaling, and zero-patching infrastructure.',
    relatedServices: ['Amazon ECR (Pulls versioned Docker images)', 'Application Load Balancer (Receives forwarded HTTP requests)', 'AWS IAM (Task execution roles for credentials)'],
    learningStatus: 'Hands-on Lab Exploration',
    concepts: ['Task Definitions & Container Specs', 'Fargate CPU/Memory Sizing', 'Service Auto-Recovery', 'Runtime Secret Injection'],
    focusArea: 'Task definition configuration, memory allocation, and automated task restarts upon process failure.'
  },
  {
    id: 'ec2',
    name: 'Amazon EC2',
    category: 'Virtual Compute',
    zone: 'ZONE_02 // COMPUTE',
    zoneTitle: 'Compute & Container Runtime',
    explanation: 'On-demand virtual server instances that provide complete administrative control over the operating system, compute capacity, and storage volumes.',
    purpose: 'Explored as a foundational compute alternative for staging environments, custom background worker processes, and direct Linux system operations.',
    relatedServices: ['Amazon VPC (Resides inside private app subnets)', 'Application Load Balancer (Registered as target instances)', 'Amazon CloudWatch (Host telemetry agent)'],
    learningStatus: 'Hands-on Lab Exploration',
    concepts: ['Instance Family Sizing (t3/t4g)', 'Security Group Ingress Rules', 'SSH Keypair Security', 'User Data Bootstrap Scripts'],
    focusArea: 'Linux instance hardening, security group ingress rules, and initialization scripts.'
  },
  {
    id: 'ecr',
    name: 'Amazon ECR',
    category: 'Image Registry',
    zone: 'ZONE_02 // COMPUTE',
    zoneTitle: 'Compute & Container Runtime',
    explanation: 'A private, fully managed Docker container registry that securely stores, encrypts, and scans container images for software vulnerabilities.',
    purpose: 'Stores production-ready container images built by GitHub Actions CI pipelines, automatically scanning them for Common Vulnerabilities and Exposures (CVEs).',
    relatedServices: ['GitHub Actions (Pushes tagged release images)', 'Amazon ECS (Pulls images during deployment)', 'AWS IAM (Registry authorization policies)'],
    learningStatus: 'Configuration & Policy Design',
    concepts: ['Semantic Image Tagging', 'Lifecycle Pruning Rules', 'Automated Vulnerability Scanning', 'IAM Registry Token Authentication'],
    focusArea: 'Repository lifecycle policies to prune untagged images and scan-on-push security configuration.'
  },
  {
    id: 'rds',
    name: 'Amazon RDS',
    category: 'Managed Relational DB',
    zone: 'ZONE_03 // PERSISTENCE',
    zoneTitle: 'Persistence & Object Store',
    explanation: 'A managed relational database service that automates database setup, hardware maintenance, OS patching, automated daily snapshots, and high-availability failover.',
    purpose: 'Stores critical ACID relational data including procurement requests, line items, user accounts, and immutable audit logs in high-availability PostgreSQL.',
    relatedServices: ['Amazon VPC (Isolated in private database subnets)', 'Amazon ECS / EC2 (Only allowed compute tier via port 5432)', 'AWS Secrets Manager (Master password rotation)'],
    learningStatus: 'Local-to-Cloud Migration',
    concepts: ['Multi-AZ Failover Topologies', 'Automated Daily Snapshots & PITR', 'Connection Pooling Limits', 'Security Group Whitelisting'],
    focusArea: 'PostgreSQL instance parameter tuning, multi-AZ standby replication, and automated backup windows.'
  },
  {
    id: 's3',
    name: 'Amazon S3',
    category: 'Object Storage',
    zone: 'ZONE_03 // PERSISTENCE',
    zoneTitle: 'Persistence & Object Store',
    explanation: 'High-durability (99.999999999%) cloud object storage designed to securely store and retrieve any volume of unstructured data from anywhere on the web.',
    purpose: 'Stores user-uploaded attachments, vendor quotation PDF documents for Procura, infrastructure hazard photos for FixMyArea, and automated database backup exports.',
    relatedServices: ['Amazon ECS (Generates short-lived pre-signed URLs for client uploads)', 'AWS IAM (Least-privilege bucket access policies)', 'Amazon CloudWatch (Storage metrics and access logs)'],
    learningStatus: 'Hands-on Lab Exploration',
    concepts: ['Bucket Access Policies', 'Pre-Signed Upload & Download URLs', 'Block Public Access Enforcement', 'Server-Side Encryption (SSE-S3 / SSE-KMS)'],
    focusArea: 'Time-limited pre-signed URL generation so clients upload directly without bottlenecking API servers.'
  },
  {
    id: 'iam',
    name: 'AWS IAM',
    category: 'Security & Identity',
    zone: 'ZONE_04 // GOVERNANCE',
    zoneTitle: 'Governance, Secrets & Observability',
    explanation: 'The central identity and access management service that manages authentication and granular permissions for both human users and cloud services.',
    purpose: 'Enforces the Principle of Least Privilege across all tiers—ensuring backend containers only receive permission to read their specific secrets and access designated S3 buckets.',
    relatedServices: ['Amazon ECS (Task Execution Roles)', 'AWS Secrets Manager (Restricts secret reads to verified services)', 'Amazon S3 (Bucket access controls)'],
    learningStatus: 'Configuration & Policy Design',
    concepts: ['IAM Roles vs. Users vs. Groups', 'Granular Least-Privilege JSON Policies', 'Trust Relationships & AssumeRole', 'Credential-Free AWS SDK Calls'],
    focusArea: 'Authoring scoped JSON policies for container execution roles without hardcoding AWS access keys.'
  },
  {
    id: 'secrets-manager',
    name: 'AWS Secrets Manager',
    category: 'Secrets Management',
    zone: 'ZONE_04 // GOVERNANCE',
    zoneTitle: 'Governance, Secrets & Observability',
    explanation: 'A dedicated security service to protect secrets (database passwords, API keys, JWT signing keys) needed to access applications, services, and IT resources.',
    purpose: 'Replaces plain-text environment variables; securely stores PostgreSQL credentials and API tokens, delivering them directly to containers at launch time via IAM.',
    relatedServices: ['Amazon RDS (Stores and automates rotation of DB credentials)', 'Amazon ECS (Injects secrets into tasks at runtime)', 'AWS IAM (Governs decryption permissions)'],
    learningStatus: 'Architecture Blueprinting',
    concepts: ['KMS Key Encryption', 'Runtime Secret Injection', 'Automated Rotation Lambdas', 'Access Audit Logging via CloudTrail'],
    focusArea: 'Dynamic secret injection into ECS task definition environments via IAM role permissions.'
  },
  {
    id: 'cloudwatch',
    name: 'Amazon CloudWatch',
    category: 'Observability & Metrics',
    zone: 'ZONE_04 // GOVERNANCE',
    zoneTitle: 'Governance, Secrets & Observability',
    explanation: 'A monitoring and observability service that collects application log streams, performance metrics, and events to provide operational insight.',
    purpose: 'Aggregates structured application logs from ASP.NET Core and Spring Boot, tracks system metrics (CPU, Memory, 5xx HTTP spikes), and triggers automated alerts.',
    relatedServices: ['Amazon ECS / EC2 (Streams container stdout/stderr via awslogs driver)', 'Amazon RDS (Monitors query throughput and connection saturation)', 'Application Load Balancer (Access logs and latency metrics)'],
    learningStatus: 'Hands-on Lab Exploration',
    concepts: ['Log Groups & Streams (awslogs driver)', 'Metric Alarms (CPU/Memory breach triggers)', 'Composite Health Alarms', 'Synthetic Canary Probes'],
    focusArea: 'Container log streaming, error-rate alarm thresholds, and synthetic health probe monitoring.'
  }
];

export const EDUCATION_DATA = {
  institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
  degree: 'BSc (Hons) in Information Technology',
  specialisation: 'Specialisation in Software Engineering',
  expectedGraduation: '2028',
  wgpa: '3.85 / 4.00',
  highlights: [
    'Three-time Dean’s List recipient for academic excellence across semesters.',
    'Awarded Tuition Fee Waiver — Third Year, Semester 1, based on Academic Merit.',
    'Rigorous coursework across Data Structures & Algorithms, Object-Oriented Analysis & Design, Database Management Systems, and Software Architecture.'
  ]
};

export const BEYOND_ENGINEERING = [
  {
    title: 'Athletics & Track',
    description: 'Sprint and track training. Competitive athletics instills high discipline, physical endurance, and consistency—principles that translate directly into sustained focus when solving demanding engineering problems.'
  },
  {
    title: 'Reading Technical & Literary Works',
    description: 'An avid reader of systems literature, historical perspectives, and philosophical essays. Broad reading cultivates clarity of thought and deepens understanding of how complex human and technical systems interact.'
  },
  {
    title: 'Writing Books & Short Stories',
    description: 'Authoring fiction and short stories. Crafting coherent narrative arcs demands empathy, structural precision, and meticulous editing—habits that mirror writing expressive code and transparent technical documentation.'
  }
];
