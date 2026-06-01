// =============================================================================
//  SERVICES — 6 categories, each with a 2-11 capability grid
// =============================================================================

export interface ServiceFlowStage {
  title: string;
  detail: string;
}

export interface ServiceCategory {
  key: string;
  title: string;
  tagline: string;
  iconKey: string;
  description: string;
  extraParagraphs?: string[];
  whatsIncluded: string[];
  idealFor: string[];
  flowTitle: string;
  flowStages: ServiceFlowStage[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: "custom-software",
    title: "Custom Software Development",
    tagline: "Tailor-made software built exactly for your operational workflows.",
    iconKey: "Code2",
    description: "We design and build custom software for growing companies whose operations have outgrown off-the-shelf tools — or whose specific workflow requires a system built exactly for them.",
    extraParagraphs: [
      "We have built for commercial banks, healthcare organisations, hospitality groups, manufacturing companies, and NGOs. The industries are different. The discipline is the same.",
      "Every engagement starts with technical planning and solution architecture. Two weeks. No code written. We map your operations, design the system, define the scope, and give you an honest assessment of what will be hard."
    ],
    whatsIncluded: [
      "Custom software — planning to deployment",
      "Enterprise systems — ERP, CRM, POS, billing",
      "Workflow and process automation",
      "Legacy system modernisation",
      "Full IP ownership for the client"
    ],
    idealFor: [
      "Founders whose business has outgrown Excel",
      "Companies replacing legacy systems",
      "Workflows generic software cannot handle",
      "Startups needing a technical planning partner"
    ],
    flowTitle: "Custom Software — Engagement Flow",
    flowStages: [
      { title: "Technical Planning & Architecture", detail: "Week 1–2 · System design · Scope definition" },
      { title: "Architecture Review & Sign-off", detail: "Before any line of code is written" },
      { title: "Engineering & Build", detail: "Kathmandu hub · ISO-certified · Full visibility" },
      { title: "QA & Testing", detail: "Integrated into every sprint" },
      { title: "Deploy & Go-Live", detail: "Canadian oversight · We stay involved" },
      { title: "Support & Scale", detail: "Beyond handover · Your IP · Your system" }
    ]
  },
  {
    key: "dedicated-teams",
    title: "Dedicated Engineering Teams",
    tagline: "Long-term extension of your engineering capacity.",
    iconKey: "Users2",
    description: "When your business needs sustained engineering capacity — not a one-off project — Aayulogic provides dedicated engineering teams that work as long-term extensions of your organisation.",
    extraParagraphs: [
      "There are no freelancers here. No anonymous developers. No revolving door of resources. You get a team with real institutional knowledge of your system.",
      "Our teams are based in our Kathmandu hub. ISO 9001 and ISO 27001 certified. Every team has a defined communication structure and Canadian commercial oversight."
    ],
    whatsIncluded: [
      "Dedicated teams matched to your stack",
      "Product engineering and roadmap delivery",
      "QA, DevOps, and systems support integrated",
      "Long-term technical partnership",
      "Canadian commercial oversight throughout"
    ],
    idealFor: [
      "CTOs who need to scale engineering capacity",
      "Companies building or scaling a product",
      "Teams growing without Canadian hiring timelines",
      "Ongoing development beyond project work"
    ],
    flowTitle: "Dedicated Team — Structure",
    flowStages: [
      { title: "Canadian Point of Contact", detail: "Toronto · Commercial oversight · Your relationship" },
      { title: "Engineering Lead", detail: "Kathmandu · Architecture decisions · Codebase ownership" },
      { title: "Senior Engineers (2–4)", detail: "Matched to your stack · Know your roadmap" },
      { title: "QA Engineer", detail: "Integrated · Not contracted separately" },
      { title: "Time zone advantage", detail: "Assign at 5pm Toronto → reviewed by 9am" }
    ]
  },
  {
    key: "devops",
    title: "Cloud, DevOps & Infrastructure",
    tagline: "Reliable infrastructure layer built for scale and security.",
    iconKey: "Cloud",
    description: "The infrastructure layer that makes everything else reliable. We design and build cloud architecture, CI/CD pipelines, deployment automation, monitoring, and security hardening for engineering teams whose infrastructure is becoming a bottleneck.",
    extraParagraphs: [
      "We run this infrastructure for our own platform — a 31-module system that has to process payroll correctly for thousands of employees on fixed cycles. We know what breaks under load because we have seen it break.",
      "Every Cloud and DevOps engagement starts with an audit — we look at what you have, what needs to change, and what the actual risk looks like before recommending anything."
    ],
    whatsIncluded: [
      "Cloud architecture design and implementation",
      "CI/CD pipeline setup and automation",
      "Infrastructure-as-code",
      "Monitoring, alerting, incident response",
      "Security hardening & cost optimisation",
      "AWS, Docker, PostgreSQL, Redis"
    ],
    idealFor: [
      "Teams whose deployment pipeline is unreliable",
      "Cloud costs growing faster than the product",
      "Startups preparing to scale infrastructure",
      "Monitoring that is reactive not proactive"
    ],
    flowTitle: "Infrastructure Stack",
    flowStages: [
      { title: "Infrastructure Audit", detail: "What you have · What needs to change · Risk" },
      { title: "Cloud Architecture — AWS", detail: "Scalable · Documented · Enterprise standard" },
      { title: "CI/CD Pipeline — Docker", detail: "Automated deployment · Zero-surprise releases" },
      { title: "Database Layer", detail: "PostgreSQL · Redis · Performance-tested" },
      { title: "Monitoring & Alerting", detail: "Catch problems before your clients do" },
      { title: "Security Hardening", detail: "ISO 27001:2022 standard · Every engagement" }
    ]
  }
];

export function findServiceItem(_categoryKey?: string, _itemSlug?: string) {
  return null;
}

export const SERVICES = SERVICE_CATEGORIES.reduce((acc, cat) => {
  acc[cat.key] = {
    title: cat.title,
    items: [],
  };
  return acc;
}, {} as Record<string, any>);

// =============================================================================
//  PRODUCTS — Our flagship products
// =============================================================================

export const PRODUCTS = [
  {
    slug: "realhrsoft",
    title: "RealHRsoft",
    tagline: "Complete HR Intelligence Technology",
    description:
      "End-to-end HR software that streamlines processes and scales with businesses of every size.",
    logo: "/realhrsoft.png",
    icon: "Users",
  },
  {
    slug: "realchat",
    title: "Real Chat",
    tagline: "Secure Team Communication",
    description:
      "A secure collaboration tool for modern workplaces — standalone or fully integrated with RealHRsoft.",
    logo: "/realchat.png",
    icon: "MessageCircle",
  },
  {
    slug: "reallearn",
    title: "Real Learn",
    tagline: "Empower Growth, Drive Success",
    description:
      "An advanced LMS for structured training, progress tracking, and continuous upskilling.",
    logo: "/reallearn.png",
    icon: "GraduationCap",
  },
];

// =============================================================================
//  INDUSTRIES — Verticals
// =============================================================================

export const INDUSTRIES_NEW = [
  {
    slug: "bfsi",
    title: "Banking & Digital Finance (BFSI)",
    description:
      "Cloud-native architectures, secure ledgers, and transaction routing modernization.",
  },
  {
    slug: "healthcare",
    title: "Healthcare & MedDev",
    description:
      "HIPAA-compliant clinical systems, patient portals, and connected medical devices.",
  },
  {
    slug: "pharma",
    title: "Pharma & Life Sciences",
    description:
      "Validated clinical trial automation, R&D logging, and field-force platforms.",
  },
  {
    slug: "professional-services",
    title: "Professional Services & EdTech",
    description:
      "Custom learning platforms, scalable Moodle structures, adaptive AI learning.",
  },
  {
    slug: "media",
    title: "Media & Entertainment",
    description:
      "Automated print composition, web-to-print, and real-time streaming.",
  },
  {
    slug: "retail",
    title: "Retail & Digital Commerce",
    description:
      "Multi-tenant headless storefronts, omnichannel inventory, order processing.",
  },
  {
    slug: "technology",
    title: "Technology & SaaS",
    description:
      "Architecture optimization, MVP acceleration, scale engineering support.",
  },
];

// Legacy
export const INDUSTRIES = INDUSTRIES_NEW.map((i) => i.title);

// =============================================================================
//  TALENT & ENGAGEMENT
// =============================================================================

export const TALENT_MODELS = [
  {
    slug: "staff-augmentation",
    title: "IT Staff Augmentation",
    description:
      "On-demand technical specialists integrated into your active SDLC.",
  },
  {
    slug: "dedicated-teams",
    title: "Dedicated Product Engineering Teams",
    description:
      "Cohesive, self-managed squads handling dedicated platform roadmaps.",
  },
  {
    slug: "contract-to-hire",
    title: "Contract-to-Hire (C2H)",
    description:
      "Flexible, milestone-validated engineering resources for strategic conversion.",
  },
  {
    slug: "build-operate-transfer",
    title: "Build-Operate-Transfer (BOT)",
    description:
      "Offshore development center configuration, management, and ownership transfer.",
  },
];

// =============================================================================
//  COMPANY
// =============================================================================

export const COMPANY_LINKS = [
  {
    title: "About Aayulogic",
    href: "/about",
    description: "Our history, philosophy, and engineering principles.",
  },
  {
    title: "Careers Hub",
    href: "/careers",
    description: "Open engineering positions and team environment.",
  },
  {
    title: "Leadership Team",
    href: "/leadership",
    description: "Executive profiles routing architectures and operations.",
  },
  {
    title: "Global Locations",
    href: "/locations",
    description: "Engineering centers, branches, and contact nodes.",
  },
];

// =============================================================================
//  STATS / METRICS
// =============================================================================

export const METRICS = [
  { label: "SLA Uptime", value: "99.4%", suffix: "" },
  { label: "Cost Reduction", value: "40", suffix: "%+" },
  { label: "Daily Transactions", value: "15M", suffix: "+" },
  { label: "Global Offices", value: "8", suffix: "+" },
];

// =============================================================================
//  CASE STUDIES
// =============================================================================

export const CASE_STUDIES = [
  {
    title: "E-Commerce Scale-Up",
    description: "Helped a retail platform scale to 100K daily transactions.",
    tags: ["Node.js", "PostgreSQL", "Redis", "AWS"],
    metric: "8x throughput",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Healthcare Data Pipeline",
    description: "Built HIPAA-compliant AI data processing system.",
    tags: ["Python", "NLP", "FHIR", "Kubernetes"],
    metric: "3M records/day",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Financial System Modernization",
    description: "Migrated legacy mainframe to cloud microservices.",
    tags: ["Go", "Kubernetes", "OAuth2", "Azure"],
    metric: "Zero downtime",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Media Asset Management",
    description: "Computer Vision platform for automated tagging & delivery.",
    tags: ["Python", "CV", "S3", "React"],
    metric: "40% less manual work",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
  },
];

// =============================================================================
//  TESTIMONIALS
// =============================================================================

export const TESTIMONIALS = [
  {
    quote:
      "Aayulogic rebuilt our trading engine in under five months. We went from 4-second latency spikes to a steady 84ms p99 — without missing a single sprint commitment.",
    author: "Daniel Kerr",
    role: "VP of Engineering",
    company: "Helix Capital",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their AI agents team didn't just deliver a chatbot — they built a self-improving multi-agent orchestration layer that handles 62% of our tier-1 support volume.",
    author: "Priya Anand",
    role: "Chief Product Officer",
    company: "NorthCloud Health",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Aayulogic is the only consultancy that engineered for our compliance constraints instead of negotiating around them. Total game-changer for our GxP program.",
    author: "Marcus Holt",
    role: "Director, Platform Engineering",
    company: "Atlas Pharma",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Migrated our mainframe core to a Go microservices fabric with zero downtime. They run quiet, ship surgical, and document like the SREs we wish we had.",
    author: "Sara Lindqvist",
    role: "CTO",
    company: "Nordvik Bank",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their squad embedded with ours for two quarters. By the end, our own engineers were shipping at the pace I'd only seen at FAANG. Velocity is contagious.",
    author: "Kenji Watanabe",
    role: "Head of Product",
    company: "Tomoya Robotics",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Three weeks from kickoff to a fully validated Kubernetes platform across two regions. They understand FinOps without being asked.",
    author: "Amelia Chen",
    role: "VP Cloud Infrastructure",
    company: "Lumen Trade",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The RAG layer they built reduced our clinician search time from 4 minutes to 11 seconds. The team gets healthcare data — not just LLMs.",
    author: "Dr. Rohan Mehta",
    role: "Chief Medical Informatics Officer",
    company: "Meridian Health",
    avatar:
      "https://images.unsplash.com/photo-1559548331-f9cb98280344?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "We replaced two SaaS vendors with one Aayulogic-built platform and cut OpEx by 41%. Roadmap clarity from week one.",
    author: "Elena Rossi",
    role: "COO",
    company: "Verdant Logistics",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Best engineering partner we've worked with in a decade. Architecture reviews that actually move the needle, not just decks.",
    author: "Olu Adeyemi",
    role: "Principal Engineer",
    company: "Kola Pay",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Zero-trust rollout across 14 services in six weeks. Their security folks pair with our SREs like they've been on the team for years.",
    author: "Hannah Becker",
    role: "Director of Security",
    company: "Alpenwerk AG",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The Computer Vision pipeline they shipped cut manual QC work by 73%. Their ML engineers think in production, not papers.",
    author: "Mateo Álvarez",
    role: "Head of Operations",
    company: "Cobalt Industries",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "I've outsourced engineering for fifteen years. Aayulogic is the first vendor I think of as a partner, not a supplier.",
    author: "Lena Müller",
    role: "Chief Digital Officer",
    company: "Berliner Versicherung",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

// =============================================================================
//  TEAM
// =============================================================================

export const TEAM_MEMBERS = [
  {
    name: "Anika Sharma",
    role: "Chief Executive Officer",
    bio: "Former Goldman Sachs platform lead. Architects strategy across 8 global offices.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rohan Mehta",
    role: "Chief Technology Officer",
    bio: "Open-source contributor. 15+ years scaling backends from MVP to 100M users.",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Elena Volkov",
    role: "VP of AI & Research",
    bio: "PhD ML, ex-DeepMind. Leads agent orchestration and applied research.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Daniel Okafor",
    role: "VP of Cloud Infrastructure",
    bio: "Multi-cloud architect, AWS Hero alumnus. Owns platform reliability globally.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sofia Reyes",
    role: "Head of Design Systems",
    bio: "Built design systems for three Fortune 100s. Obsessed with motion and clarity.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kenji Tanaka",
    role: "Director of Cybersecurity",
    bio: "Former Red Team lead. Pioneers our zero-trust delivery practices.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lena Müller",
    role: "VP of Engineering, Europe",
    bio: "Scaled the Berlin office from 4 to 80 engineers in three years.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Aarav Khatri",
    role: "Head of Product Engineering",
    bio: "Ships things. Believes velocity is a craft, not a tradeoff.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
];

// =============================================================================
//  BLOG
// =============================================================================

export const BLOG_POSTS = [
  {
    title: "Index Optimization for PostgreSQL at Scale",
    category: "Engineering",
    date: "May 18, 2026",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Building Scalable Multi-Agent Systems",
    category: "AI",
    date: "May 15, 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Zero-Trust Architecture in 2026",
    category: "Security",
    date: "May 12, 2026",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kubernetes Cost Optimization Strategies",
    category: "DevOps",
    date: "May 10, 2026",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
  },
];

// =============================================================================
//  CLIENT BRANDS (trust marquee — tech-stack-icons keys)
// =============================================================================

export const CLIENT_BRANDS = [
  { name: "Microsoft", icon: "microsoft" },
  { name: "Google", icon: "google" },
  { name: "Meta", icon: "meta" },
  { name: "AWS", icon: "aws" },
  { name: "Azure", icon: "azure" },
  { name: "Google Cloud", icon: "gcloud" },
  { name: "Oracle", icon: "oracle" },
  { name: "Salesforce", icon: "salesforce" },
  { name: "Adobe", icon: "adobe" },
  { name: "Stripe", icon: "stripe" },
  { name: "Slack", icon: "slack" },
  { name: "OpenAI", icon: "openai" },
  { name: "GitHub", icon: "github" },
  { name: "Vercel", icon: "vercel" },
  { name: "Figma", icon: "figma" },
  { name: "Supabase", icon: "supabase" },
  { name: "Linear", icon: "linear" },
  { name: "Notion", icon: "notion" },
];

export const CLIENT_LOGOS = CLIENT_BRANDS.map((b) => b.name);

// =============================================================================
//  TECH STACK (showcase by category)
// =============================================================================

export const TECH_STACK = [
  { name: "tensorflow", label: "TensorFlow", category: "AI & ML" },
  { name: "pytorch", label: "PyTorch", category: "AI & ML" },
  { name: "openai", label: "OpenAI", category: "AI & ML" },
  { name: "react", label: "React", category: "Frontend" },
  { name: "nextjs2", label: "Next.js", category: "Frontend" },
  { name: "vuejs", label: "Vue.js", category: "Frontend" },
  { name: "angular", label: "Angular", category: "Frontend" },
  { name: "typescript", label: "TypeScript", category: "Frontend" },
  { name: "tailwindcss", label: "Tailwind", category: "Frontend" },
  { name: "nodejs", label: "Node.js", category: "Backend" },
  { name: "python", label: "Python", category: "Backend" },
  { name: "go", label: "Go", category: "Backend" },
  { name: "laravel", label: "Laravel", category: "Backend" },
  { name: "nestjs", label: "NestJS", category: "Backend" },
  { name: "postgresql", label: "PostgreSQL", category: "Database" },
  { name: "mongodb", label: "MongoDB", category: "Database" },
  { name: "redis", label: "Redis", category: "Database" },
  { name: "mysql", label: "MySQL", category: "Database" },
  { name: "aws", label: "AWS", category: "Cloud" },
  { name: "azure", label: "Azure", category: "Cloud" },
  { name: "gcloud", label: "GCP", category: "Cloud" },
  { name: "docker", label: "Docker", category: "Cloud" },
  { name: "kubernetes", label: "Kubernetes", category: "Cloud" },
  { name: "terraform", label: "Terraform", category: "Cloud" },
  { name: "reactnative", label: "React Native", category: "Mobile" },
  { name: "flutter", label: "Flutter", category: "Mobile" },
  { name: "swift", label: "Swift", category: "Mobile" },
  { name: "kotlin", label: "Kotlin", category: "Mobile" },
  { name: "wordpress", label: "WordPress", category: "Platforms" },
  { name: "firebase", label: "Firebase", category: "Platforms" },
  { name: "supabase", label: "Supabase", category: "Platforms" },
  { name: "github", label: "GitHub", category: "Tools" },
  { name: "git", label: "Git", category: "Tools" },
];

// =============================================================================
//  ABOUT — STORY TIMELINE
// =============================================================================

export const COMPANY_TIMELINE = [
  {
    year: "2016",
    title: "Founded in Kathmandu",
    description:
      "Aayulogic Systems Pvt. Ltd. is established with a 6-engineer founding team focused on enterprise HR systems.",
  },
  {
    year: "2018",
    title: "RealHRsoft launches",
    description:
      "First flagship product ships into production — payroll and attendance for the first 50 client organizations.",
  },
  {
    year: "2020",
    title: "ISO 9001 Certified",
    description:
      "Quality Management System independently audited and certified — formalizing delivery discipline across teams.",
  },
  {
    year: "2022",
    title: "Toronto HQ established",
    description:
      "Aayulogic Inc. is incorporated in Canada — anchoring global operations and North American client delivery.",
  },
  {
    year: "2023",
    title: "ISO 27001 Certified",
    description:
      "Information Security Management System certified to global standards — enterprise-grade controls audited.",
  },
  {
    year: "2024",
    title: "Cross-continent expansion",
    description:
      "Representative offices opened in Louisville, Brisbane, and Dubai. Engineering crosses 300 strong.",
  },
  {
    year: "2026",
    title: "AI division & next chapter",
    description:
      "Dedicated AI & Research practice formalized. 15M+ daily transactions running across product and partner platforms.",
  },
];

// =============================================================================
//  ABOUT — PHILOSOPHY & VALUES
// =============================================================================

export const COMPANY_VALUES = [
  {
    title: "Engineering over theatre",
    description:
      "We earn trust by shipping production systems, not by selling decks. Every claim is auditable, every release reviewed.",
    iconKey: "Wrench",
  },
  {
    title: "Compounding craft",
    description:
      "Codebases we own get better every quarter — never frozen, never abandoned. Continuous improvement is a contractual norm.",
    iconKey: "TrendingUp",
  },
  {
    title: "Operator-grade reliability",
    description:
      "99.4% SLA stability across hundreds of customers. We measure ourselves the same way mature SRE teams do.",
    iconKey: "ShieldCheck",
  },
  {
    title: "Distributed by design",
    description:
      "Four continents, one delivery culture. Asynchronous writing, decision logs, and timezone-aware design from day one.",
    iconKey: "Globe2",
  },
];

// =============================================================================
//  ABOUT — ENGINEERING PRINCIPLES
// =============================================================================

export const ENGINEERING_PRINCIPLES = [
  {
    index: "01",
    title: "Boring technology, by default",
    description:
      "We pick proven stacks for production. Novelty belongs in R&D — not in the systems your business depends on.",
  },
  {
    index: "02",
    title: "Write it down, then build it",
    description:
      "Architecture decisions are documented before code lands. ADRs, RFCs, and runbooks ship alongside every system.",
  },
  {
    index: "03",
    title: "Observability is non-negotiable",
    description:
      "If we can't see it, we don't ship it. Structured logs, metrics, and traces are part of the definition of done.",
  },
  {
    index: "04",
    title: "Security from the first commit",
    description:
      "Secrets, IAM, and threat models are designed in — not bolted on. ISO 27001 controls govern every repo.",
  },
  {
    index: "05",
    title: "Operate what we build",
    description:
      "Engineers carry pagers for the systems they ship. No throw-it-over-the-wall handoffs — accountability is end-to-end.",
  },
  {
    index: "06",
    title: "Optimize for clarity",
    description:
      "Code is read more than written. We pick readability over cleverness, and small reversible changes over big rewrites.",
  },
];

// =============================================================================
//  CAREERS — JOB OPENINGS
// =============================================================================

export const JOB_DEPARTMENTS = [
  { key: "all", label: "All Roles" },
  { key: "engineering", label: "Engineering" },
  { key: "product", label: "Product & Design" },
  { key: "operations", label: "Operations" },
  { key: "leadership", label: "Leadership" },
];

export const JOB_POSTINGS = [
  {
    title: "Senior Backend Engineer — Platform",
    department: "engineering",
    location: "Lalitpur, NP · Toronto, CA",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Own core service architecture for RealHRsoft scaling to 5M+ daily users. Stack: Node.js, PostgreSQL, Redis, Kubernetes.",
  },
  {
    title: "Staff AI Engineer — Agents",
    department: "engineering",
    location: "Toronto, CA · Remote",
    type: "Full-time",
    experience: "7+ years",
    description:
      "Lead multi-agent orchestration practice. Build production LLM systems for enterprise customers across BFSI and healthcare.",
  },
  {
    title: "Site Reliability Engineer",
    department: "engineering",
    location: "Lalitpur, NP",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Run the platform behind 15M+ daily transactions. Own incident response, capacity planning, and observability standards.",
  },
  {
    title: "Senior Frontend Engineer — Design Systems",
    department: "engineering",
    location: "Remote · Lalitpur, NP",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Build the cross-product design system used by RealHRsoft, Real Chat, and Real Learn. React, TypeScript, Tailwind.",
  },
  {
    title: "Product Manager — HR Suite",
    department: "product",
    location: "Toronto, CA · Lalitpur, NP",
    type: "Full-time",
    experience: "6+ years",
    description:
      "Own roadmap and outcomes for RealHRsoft. Partner with engineering, design, and customer success across four continents.",
  },
  {
    title: "Senior Product Designer",
    department: "product",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Shape product UX across the Aayulogic suite. Translate complex enterprise workflows into clean, calm interfaces.",
  },
  {
    title: "DevOps Engineer — Cloud Platform",
    department: "engineering",
    location: "Lalitpur, NP",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Build and operate multi-cloud delivery pipelines. Terraform, Kubernetes, GitHub Actions, AWS/Azure/GCP.",
  },
  {
    title: "Director of Engineering — North America",
    department: "leadership",
    location: "Toronto, CA",
    type: "Full-time",
    experience: "10+ years",
    description:
      "Lead the Toronto engineering organization. Hire, mentor, and architect across enterprise client engagements.",
  },
  {
    title: "Customer Success Manager — Enterprise",
    department: "operations",
    location: "Toronto, CA · Brisbane, AU",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Own the post-sale relationship for our top 20 enterprise accounts. Drive renewal, expansion, and product feedback.",
  },
  {
    title: "Talent Acquisition Lead",
    department: "operations",
    location: "Lalitpur, NP",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Scale engineering and product hiring across four continents. Build the playbook for senior-only recruitment.",
  },
];

// =============================================================================
//  CAREERS — BENEFITS
// =============================================================================

export const CAREER_BENEFITS = [
  {
    title: "Competitive base + equity",
    description: "Above-market compensation calibrated regionally, with long-term equity in the company you help build.",
    iconKey: "Coins",
  },
  {
    title: "Comprehensive health cover",
    description: "Full medical, dental, and mental health benefits for you and your family — across every office.",
    iconKey: "HeartPulse",
  },
  {
    title: "Remote-first flexibility",
    description: "Work from any of our four offices or fully remote. Async communication is a first-class engineering tool.",
    iconKey: "Home",
  },
  {
    title: "Learning budget",
    description: "Annual stipend for conferences, courses, books, and certifications — invest in your craft on us.",
    iconKey: "GraduationCap",
  },
  {
    title: "Sabbatical program",
    description: "Paid sabbatical at five years. Step away, rest, return with perspective the company benefits from.",
    iconKey: "Palmtree",
  },
  {
    title: "Modern equipment",
    description: "Top-tier MacBook Pro, ultrawide monitor, mechanical keyboard, ergonomic chair — your call.",
    iconKey: "Laptop",
  },
  {
    title: "Global mobility",
    description: "Spend quarters in another office. We sponsor visas and relocate engineers across our network.",
    iconKey: "Plane",
  },
  {
    title: "Generous time off",
    description: "Minimum 25 days paid leave plus public holidays. We track minimums, not maximums.",
    iconKey: "CalendarCheck",
  },
];

// =============================================================================
//  CAREERS — HIRING PROCESS
// =============================================================================

export const HIRING_PROCESS = [
  {
    step: "01",
    title: "Application & screen",
    description:
      "We read every application. Initial screen with our talent team within 5 business days — focused on the work you've shipped.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Technical conversation",
    description:
      "A 60-minute discussion with a senior engineer. Real architecture problems from our codebase — no whiteboard trivia.",
    duration: "Week 2",
  },
  {
    step: "03",
    title: "Practical work sample",
    description:
      "A short, paid take-home or pairing session reflecting the actual role. We respect your time and pay for it.",
    duration: "Week 2-3",
  },
  {
    step: "04",
    title: "Team & leadership round",
    description:
      "Meet your potential teammates and a leader. References, offer, and onboarding plan within 5 days of the final round.",
    duration: "Week 3-4",
  },
];

// =============================================================================
//  LEADERSHIP — EXECUTIVES
// =============================================================================

export const LEADERSHIP_TEAM = [
  {
    name: "Puspa Khadka",
    role: "Chief Executive Officer",
    location: "Toronto, Canada",
    bio: "Anchors global strategy and North American operations from our Toronto HQ. Ten years in enterprise software, previously led platform engineering for a Canadian fintech.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
    email: "puspa.khadka@aayulogic.com",
  },
  {
    name: "Ratish Raj Guragain",
    role: "CEO, Engineering & Operations",
    location: "Lalitpur, Nepal",
    bio: "Runs the engineering organization and our largest delivery hub. Co-founder. Scaled the team from 6 to 300+ engineers across a decade.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
    email: "ratish.guragain@aayulogic.com",
  },
  {
    name: "Aanand Shrestha",
    role: "Chief Technology Officer",
    location: "Toronto, Canada",
    bio: "Owns architecture and platform strategy across the product suite and client engagements. Background in distributed systems and large-scale databases.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
    email: "aanand.shrestha@aayulogic.com",
  },
  {
    name: "Sneha Adhikari",
    role: "Chief Product Officer",
    location: "Lalitpur, Nepal",
    bio: "Leads product strategy for RealHRsoft, Real Chat, and Real Learn. Translates customer reality into shippable roadmaps the team executes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
    email: "sneha.adhikari@aayulogic.com",
  },
  {
    name: "Dipendra Tiwari",
    role: "Head of Finance — Americas",
    location: "Louisville, USA",
    bio: "CPA, MBA. Oversees finance, compliance, and treasury for our North American operations. Twenty years in cross-border financial leadership.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
    email: "dtiwari.cpa@gmail.com",
  },
  {
    name: "Santosh Kumar Dhakal",
    role: "Head of Operations — APAC",
    location: "Brisbane, Australia",
    bio: "FCA, CPA. Leads APAC client operations and our Australian representative office. Specializes in regulated industries and audit-grade delivery.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
    email: "kr.dhakal@gmail.com",
  },
];

// =============================================================================
//  LEADERSHIP — ADVISORY BOARD
// =============================================================================

export const ADVISORY_BOARD = [
  {
    name: "Dr. Bishal Pradhan",
    role: "Strategic Advisor — Healthcare & Compliance",
    bio: "Former CMIO of a North American hospital network. Advises on healthcare data, HIPAA, and clinical AI deployments.",
    image: "https://images.unsplash.com/photo-1559548331-f9cb98280344?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Marcus Holt",
    role: "Strategic Advisor — Enterprise Platforms",
    bio: "Three-decade platform engineering leader. Advises on enterprise architecture and Fortune 500 client engagements.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Elena Volkov",
    role: "Strategic Advisor — AI & Research",
    bio: "PhD ML, former DeepMind researcher. Guides our AI roadmap, agent architecture, and applied research practice.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

// =============================================================================
//  LOCATIONS — DETAILED OFFICES
// =============================================================================

export const OFFICES_DETAILED = [
  {
    id: 1,
    country: "Canada",
    city: "Toronto, Ontario",
    role: "Global Headquarters",
    countryCode: "CA",
    address: "Aayulogic Inc., Toronto, Ontario, Canada",
    timezone: "EST (UTC-5)",
    hours: "Mon–Fri · 9:00 – 18:00",
    focus: ["Executive leadership", "North American client delivery", "Strategic partnerships"],
    contact: {
      name: "Puspa Khadka",
      title: "Chief Executive Officer",
      phone: "+1 (437) 220-1943",
      email: "puspa.khadka@aayulogic.com",
    },
    headcount: "20+",
    established: "2022",
    badge: "Head Office",
  },
  {
    id: 2,
    country: "Nepal",
    city: "Lalitpur",
    role: "Primary Engineering Hub",
    countryCode: "NP",
    address: "Aayulogic Systems Pvt. Ltd., Lalitpur, Nepal",
    timezone: "NPT (UTC+5:45)",
    hours: "Sun–Fri · 9:30 – 18:30",
    focus: ["Product engineering", "Platform R&D", "AI & research practice"],
    contact: {
      name: "Ratish Raj Guragain",
      title: "CEO, Engineering & Operations",
      phone: "+977-9802011777",
      email: "ratish.guragain@aayulogic.com",
    },
    headcount: "300+",
    established: "2016",
    badge: "Engineering Hub",
  },
  {
    id: 3,
    country: "United States",
    city: "Louisville, Kentucky",
    role: "Americas Finance & Operations",
    countryCode: "US",
    address: "Louisville, Kentucky, USA",
    timezone: "EST (UTC-5)",
    hours: "Mon–Fri · 9:00 – 17:00",
    focus: ["US client operations", "Finance & compliance", "Treasury"],
    contact: {
      name: "Dipendra Tiwari",
      title: "Head of Finance — Americas (CPA, MBA)",
      phone: "+1 (502) 618-1677",
      email: "dtiwari.cpa@gmail.com",
    },
    headcount: "Representative",
    established: "2024",
    badge: "Representative",
  },
  {
    id: 4,
    country: "Australia",
    city: "Brisbane, Queensland",
    role: "APAC Operations",
    countryCode: "AU",
    address: "Brisbane, Queensland, Australia",
    timezone: "AEST (UTC+10)",
    hours: "Mon–Fri · 9:00 – 17:00",
    focus: ["APAC client delivery", "Regulated industries", "Audit-grade engagements"],
    contact: {
      name: "Santosh Kumar Dhakal",
      title: "Head of Operations — APAC (FCA, CPA)",
      phone: "+61 (424) 125-042",
      email: "kr.dhakal@gmail.com",
    },
    headcount: "Representative",
    established: "2024",
    badge: "Representative",
  },
  {
    id: 5,
    country: "United Arab Emirates",
    city: "Dubai",
    role: "Middle East Office",
    countryCode: "AE",
    address: "Dubai, UAE",
    timezone: "GST (UTC+4)",
    hours: "Sun–Thu · 9:00 – 18:00",
    focus: ["Middle East expansion", "Government & BFSI", "Partnership development"],
    contact: null,
    headcount: "Opening 2026",
    established: "2026",
    badge: "Coming Soon",
  },
];

// =============================================================================
//  ABOUT — MISSION & VISION PILLARS
// =============================================================================

export const MISSION_VISION = {
  mission: {
    title: "Our Mission",
    statement:
      "Engineer dependable software systems that compound in value — for the organizations the world quietly depends on.",
    detail:
      "We exist to build the platforms, products, and partnerships that mature businesses can run on for a decade — not the demos that look great on a slide and quietly fail under load.",
  },
  vision: {
    title: "Our Vision",
    statement:
      "A world where great engineering is a service, not an artisanal scarcity.",
    detail:
      "A future where companies in any market — not just Silicon Valley — can access senior, production-grade engineering at the cadence their business actually needs.",
  },
  pillars: [
    {
      title: "Customers come first, always",
      description:
        "Every roadmap decision, every release, every escalation — anchored in measurable customer outcomes, not internal politics.",
      iconKey: "Heart",
    },
    {
      title: "Operator-grade discipline",
      description:
        "We measure ourselves like an SRE team. SLAs, audits, runbooks, decision logs — all real, all in production.",
      iconKey: "ShieldCheck",
    },
    {
      title: "Compounding craft",
      description:
        "Codebases get better quarter over quarter. Talent gets sharper year over year. Nothing we own is allowed to rot.",
      iconKey: "TrendingUp",
    },
  ],
};

// =============================================================================
//  ABOUT — FOUNDER SPOTLIGHT
// =============================================================================

export const FOUNDERS = [
  {
    name: "Ratish Raj Guragain",
    role: "Co-Founder · CEO, Engineering & Operations",
    location: "Lalitpur, Nepal",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    quote:
      "We started with six engineers and a refusal to ship anything we wouldn't operate ourselves. A decade later, that's still the only rule.",
    contributions: [
      "Scaled engineering from 6 to 300+ across a decade",
      "Authored the operating principles every team still ships against",
      "Founded the Lalitpur engineering hub — now our largest",
    ],
  },
  {
    name: "Puspa Khadka",
    role: "Co-Founder · Chief Executive Officer",
    location: "Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    quote:
      "Building from Kathmandu and anchoring in Toronto wasn't an accident — it was the only structure that lets us serve mature enterprises without losing engineering depth.",
    contributions: [
      "Incorporated Aayulogic Inc. in Canada (2022)",
      "Architected our cross-continent delivery model",
      "Owns global strategy and North American enterprise relationships",
    ],
  },
];

// =============================================================================
//  ABOUT — REGIONAL HEADQUARTERS (condensed for about page)
// =============================================================================

export const REGIONAL_HEADQUARTERS = [
  {
    region: "North America",
    city: "Toronto, Canada",
    role: "Global HQ",
    countryCode: "CA",
    focus: "Strategy · Enterprise delivery · Partnerships",
    established: "2022",
    headcount: "20+",
  },
  {
    region: "South Asia",
    city: "Lalitpur, Nepal",
    role: "Engineering Hub",
    countryCode: "NP",
    focus: "Product engineering · Platform R&D · AI research",
    established: "2016",
    headcount: "300+",
  },
  {
    region: "Americas",
    city: "Louisville, USA",
    role: "Finance & Operations",
    countryCode: "US",
    focus: "Finance · Compliance · US client operations",
    established: "2024",
    headcount: "Representative",
  },
  {
    region: "APAC",
    city: "Brisbane, Australia",
    role: "Regional Operations",
    countryCode: "AU",
    focus: "APAC delivery · Regulated industries · Audit-grade",
    established: "2024",
    headcount: "Representative",
  },
  {
    region: "MENA",
    city: "Dubai, UAE",
    role: "Middle East Office",
    countryCode: "AE",
    focus: "Government · BFSI · Partnership development",
    established: "2026",
    headcount: "Opening 2026",
  },
];

// =============================================================================
//  ABOUT — TEAM / DEPARTMENTS BREAKDOWN
// =============================================================================

export const COMPANY_DEPARTMENTS = [
  {
    name: "Platform Engineering",
    description: "Backend, infrastructure, and the systems behind 15M+ daily transactions.",
    size: "120+",
    iconKey: "Server",
  },
  {
    name: "Product & Design",
    description: "Roadmaps, UX, and design systems across RealHRsoft, Real Chat, and Real Learn.",
    size: "40+",
    iconKey: "Compass",
  },
  {
    name: "AI & Research",
    description: "Multi-agent orchestration, applied ML, and production LLM systems.",
    size: "25+",
    iconKey: "Sparkles",
  },
  {
    name: "Frontend & Mobile",
    description: "Cross-platform interfaces, design systems, and customer-facing apps.",
    size: "60+",
    iconKey: "Layout",
  },
  {
    name: "Site Reliability",
    description: "Observability, incident response, and capacity planning at scale.",
    size: "20+",
    iconKey: "Activity",
  },
  {
    name: "Operations & Success",
    description: "Customer success, finance, talent, and global business operations.",
    size: "35+",
    iconKey: "Briefcase",
  },
];

// =============================================================================
//  ABOUT — AWARDS & RECOGNITION
// =============================================================================

export const AWARDS_RECOGNITION = [
  {
    year: "2024",
    title: "ISO 27001:2022 Certified",
    body: "Independently audited information security management system — global standard.",
    issuer: "International Organization for Standardization",
  },
  {
    year: "2024",
    title: "Top HR Tech Vendor — South Asia",
    body: "RealHRsoft recognized among the region's leading enterprise HR platforms.",
    issuer: "Regional Industry Council",
  },
  {
    year: "2023",
    title: "Best Engineering Workplace",
    body: "Recognized for engineering culture, async-first practices, and retention.",
    issuer: "Tech Employer Survey",
  },
  {
    year: "2020",
    title: "ISO 9001:2015 Certified",
    body: "Quality Management System independently certified across delivery practices.",
    issuer: "International Organization for Standardization",
  },
];

// =============================================================================
//  FAQ PAGE — CATEGORIES & QUESTIONS
// =============================================================================

export const FAQ_CATEGORIES = [
  {
    key: "company",
    label: "Company",
    iconKey: "Building2",
    blurb: "About Aayulogic — who we are and how we operate.",
    items: [
      {
        q: "What does Aayulogic actually do?",
        a: "We're a Canadian-headquartered global technology company. We build and operate production software — flagship products (RealHRsoft, Real Chat, Real Learn) and custom engagements for enterprise clients across AI, cloud, and engineering. 300+ engineers across four continents.",
      },
      {
        q: "Where is Aayulogic headquartered?",
        a: "Global HQ is Aayulogic Inc. in Toronto, Canada (incorporated 2022). Our primary engineering hub is Aayulogic Systems Pvt. Ltd. in Lalitpur, Nepal — where we started in 2016 — and we have representative offices in Louisville (USA), Brisbane (Australia), and a Dubai (UAE) office opening in 2026.",
      },
      {
        q: "How long has Aayulogic been around?",
        a: "Since 2016. A decade of compounding craft — same operating principles, same focus on shippable systems, just at much larger scale today.",
      },
      {
        q: "Are you certified for enterprise procurement?",
        a: "Yes. We hold ISO 9001:2015 (Quality Management) and ISO 27001:2022 (Information Security Management) — both independently audited and current. We can support enterprise vendor due diligence on request.",
      },
    ],
  },
  {
    key: "services",
    label: "Services & Engagements",
    iconKey: "Briefcase",
    blurb: "Working with us — scope, model, and what to expect.",
    items: [
      {
        q: "What engagement models do you offer?",
        a: "Four core models: Staff Augmentation (senior engineers embedded in your team), Dedicated Teams (a complete pod owned by us, accountable to your roadmap), Contract-to-Hire (try before you commit), and Build-Operate-Transfer (we stand up a function, then hand the keys over). The model is shaped by your timeline and risk profile, not the other way around.",
      },
      {
        q: "What's a typical engagement size and length?",
        a: "Most engagements run 6 to 36 months and involve 3 to 20 engineers. We don't take on staffing-shop short-tail work — we're built for compounding relationships. Discovery to first sprint is typically 2-4 weeks.",
      },
      {
        q: "Do you work with startups or only enterprises?",
        a: "Primarily mature businesses and enterprises — that's where our operator-grade discipline matters most. We do partner with funded startups when the engineering ambition matches ours and the runway justifies senior engineering depth.",
      },
      {
        q: "Which industries do you serve?",
        a: "Financial services (BFSI), healthcare, education, public sector, retail and commerce, and SaaS platform companies. ISO 27001 + sector experience makes us a fit for regulated environments where audit-grade matters.",
      },
    ],
  },
  {
    key: "hiring",
    label: "Hiring & Careers",
    iconKey: "Users",
    blurb: "Joining the team — what the process looks like.",
    items: [
      {
        q: "What's it like to work at Aayulogic?",
        a: "Senior-heavy team, async-first communication, decision logs and runbooks for everything, and a clear bar for operate-what-you-build. We pay for craft, sponsor visas, and run a real sabbatical program at five years.",
      },
      {
        q: "Do you hire juniors?",
        a: "Rarely. Our hiring bar is seniors-only for production roles — typically 5+ years of experience with real systems in production. We invest deeply in those we hire instead of running a high-churn pipeline.",
      },
      {
        q: "Is remote work supported?",
        a: "Yes. We're remote-first across all offices. You can work from any of our four locations, fully remote, or a hybrid blend. Async communication is treated as a first-class engineering tool.",
      },
      {
        q: "How long does the hiring process take?",
        a: "Four focused conversations over 3-4 weeks. Application screen (week 1), technical conversation (week 2), paid work sample (week 2-3), team and leadership round (week 3-4). Offer and onboarding plan within 5 days of the final round.",
      },
      {
        q: "Do you offer visa sponsorship or relocation?",
        a: "Yes — across Toronto, Lalitpur, and Brisbane. We've relocated engineers between continents and routinely sponsor work permits for the right hires. Global mobility is part of our retention story.",
      },
    ],
  },
  {
    key: "technical",
    label: "Technical & Security",
    iconKey: "ShieldCheck",
    blurb: "How we engineer, secure, and operate what we ship.",
    items: [
      {
        q: "What's your engineering stack?",
        a: "Production stacks lean on proven choices: Node.js, Python, Go, PostgreSQL, Redis, Kubernetes, Terraform, AWS/Azure/GCP. We pick boring technology by default — novelty belongs in R&D, not in systems your business depends on.",
      },
      {
        q: "How do you handle data security and compliance?",
        a: "ISO 27001:2022 controls govern every repo. Threat models, IAM, secrets management, and audit logging are designed in — not bolted on. We support SOC-style customer audits and operate dedicated security review on every engagement.",
      },
      {
        q: "Do you sign NDAs and DPAs?",
        a: "Yes — standard mutual NDA before any technical discussion, and DPA (data processing agreement) is part of every contract that touches customer data. We have template language ready and have signed against major enterprise paper.",
      },
      {
        q: "Who owns the IP we build together?",
        a: "You do. All custom engagement IP is assigned to the client at delivery — clean ownership, no patent encumbrances, full source. Our product IP (RealHRsoft, Real Chat, Real Learn) stays with us, of course.",
      },
    ],
  },
  {
    key: "partnerships",
    label: "Partnerships & Procurement",
    iconKey: "HandshakeIcon",
    blurb: "Getting started commercially — partnerships and procurement.",
    items: [
      {
        q: "How do we get started?",
        a: "Send a note via the contact form or email hello@aayulogic.com. We'll schedule a 45-minute discovery call with the engineering or product lead closest to your context — not an account manager. From there, scope, statement of work, and a kickoff plan typically takes 2-4 weeks.",
      },
      {
        q: "Can we visit one of your offices?",
        a: "Absolutely. We host clients regularly in Toronto and Lalitpur. We'll arrange engineering deep-dives, leadership meetings, and a walk-through of how teams actually operate. Most enterprise engagements start with at least one office visit.",
      },
      {
        q: "Do you participate in vendor due diligence?",
        a: "Yes — we have a standard vendor-vetting pack covering certifications (ISO 9001 / 27001), insurance, governance, financials, references, and security architecture. Ready to share under NDA on request.",
      },
      {
        q: "What's your billing and payment model?",
        a: "Standard models: fixed-scope (for clearly bounded deliverables), time-and-materials (for evolving engagements), and dedicated team (monthly recurring). We bill in CAD, USD, AUD, or AED depending on the entity. Net-30 terms standard, customizable for enterprise.",
      },
    ],
  },
];
