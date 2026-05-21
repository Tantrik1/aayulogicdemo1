// =============================================================================
//  SERVICES — 7 categories, each with a 4-6 card grid
// =============================================================================

export interface ServiceItem {
  title: string;
  description: string;
  techIcons?: string[]; // tech-stack-icons keys for the badge row
}

export interface ServiceCategory {
  key: string;
  title: string;
  tagline: string;
  iconKey: string; // lucide icon name (resolved in component)
  items: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: "ai",
    title: "AI & Automation",
    tagline: "Intelligent systems and autonomous agents",
    iconKey: "Sparkles",
    items: [
      {
        title: "Vibe Coding",
        description:
          "AI-powered rapid development with LLMs and advanced RAG frameworks.",
        techIcons: ["openai", "python", "nextjs2"],
      },
      {
        title: "AI Agents",
        description:
          "Autonomous multi-agent systems for software task automation and logic execution.",
        techIcons: ["openai", "python", "nodejs"],
      },
      {
        title: "Conversational AI",
        description:
          "Enterprise customer-facing chat systems and automated voice agents.",
        techIcons: ["openai", "python", "react"],
      },
      {
        title: "Computer Vision & ML",
        description:
          "Predictive modelling, object tracking, and image recognition patterns.",
        techIcons: ["tensorflow", "pytorch", "python"],
      },
      {
        title: "Data & Analytics",
        description:
          "Centralized ETL pipelines, dynamic BI dashboards, and system governance.",
        techIcons: ["python", "postgresql", "mongodb"],
      },
      {
        title: "RPA & Automation",
        description:
          "Scalable n8n workflows, UiPath scripts, and custom process automation.",
        techIcons: ["python", "nodejs"],
      },
    ],
  },
  {
    key: "engineering",
    title: "Software Engineering",
    tagline: "Production-grade applications, from prototype to global scale",
    iconKey: "Code2",
    items: [
      {
        title: "Full-Stack Backend",
        description:
          "High-throughput Node.js, Go, Python, and Rust backends.",
        techIcons: ["nodejs", "go", "python", "nestjs"],
      },
      {
        title: "Full-Stack Databases",
        description:
          "PostgreSQL clusters, Redis routing, vector stores (ChromaDB/Faiss).",
        techIcons: ["postgresql", "mongodb", "redis", "mysql"],
      },
      {
        title: "Frontend Layers",
        description:
          "React, Angular, Vue with TypeScript and modern tooling.",
        techIcons: ["react", "angular", "vuejs", "typescript"],
      },
      {
        title: "Preconfigured Stacks",
        description:
          "Next.js, Vite, HTMX, and battle-tested templates that ship in days.",
        techIcons: ["nextjs2", "tailwindcss", "typescript"],
      },
      {
        title: "Mobile Frameworks",
        description:
          "React Native (Expo), Flutter, and native iOS/Android clients.",
        techIcons: ["reactnative", "flutter", "swift", "kotlin"],
      },
      {
        title: "Desktop Frameworks",
        description:
          "Cross-platform Electron, Tauri, and native shells for enterprise tools.",
        techIcons: ["typescript", "nodejs"],
      },
      {
        title: "JVM Enterprise",
        description:
          "Java, Kotlin, and Spring-based services for compliance-heavy systems.",
        techIcons: ["kotlin"],
      },
      {
        title: "Automation QA",
        description:
          "Playwright, Cypress, Selenium pipelines integrated with CI.",
        techIcons: ["typescript", "nodejs"],
      },
      {
        title: "Specialized Testing",
        description:
          "Load testing, chaos engineering, security regression suites.",
        techIcons: ["python", "go"],
      },
      {
        title: "Business Core (ERP / Low-Code)",
        description:
          "Custom ERP, low-code dashboards, and internal-tool platforms.",
        techIcons: ["react", "nodejs", "postgresql"],
      },
      {
        title: "Immersive Core (Unity)",
        description:
          "Unity, WebGL, and immersive 3D experiences for training and product.",
        techIcons: [],
      },
    ],
  },
  {
    key: "cloud",
    title: "Cloud & DevOps",
    tagline: "Platforms that run themselves, pipelines that ship daily",
    iconKey: "Cloud",
    items: [
      {
        title: "Platform Operations",
        description:
          "AWS, Azure, GCP architecture, multi-region failover, FinOps.",
        techIcons: ["aws", "azure", "gcloud"],
      },
      {
        title: "DevOps & CI/CD Pipelines",
        description:
          "GitHub Actions, Docker, Kubernetes, Terraform IaC at scale.",
        techIcons: ["docker", "kubernetes", "terraform", "github"],
      },
    ],
  },
  {
    key: "commerce",
    title: "Digital & Commerce",
    tagline: "Storefronts, content systems, and experience layers",
    iconKey: "ShoppingBag",
    items: [
      {
        title: "E-commerce Frameworks",
        description:
          "Shopify Plus, Magento, Headless commerce architectures.",
      },
      {
        title: "Enterprise CMS",
        description:
          "Drupal, AEM, Liferay for compliance-heavy content operations.",
      },
      {
        title: "Web CMS",
        description:
          "WordPress, Strapi, Sanity for marketing and editorial teams.",
        techIcons: ["wordpress"],
      },
      {
        title: "Core Experience",
        description:
          "Product Design, UI/UX research, Supabase-backed apps.",
        techIcons: ["figma", "supabase"],
      },
    ],
  },
  {
    key: "emerging",
    title: "Emerging Tech & IoT",
    tagline: "Frontiers — AR/VR, blockchain, edge, wearables",
    iconKey: "Cpu",
    items: [
      {
        title: "AR/VR Frameworks",
        description:
          "Unity XR, WebXR, immersive training and visualization platforms.",
      },
      {
        title: "Core Connected Systems",
        description:
          "IoT mesh, blockchain ledgers, Smart TV apps, wearables firmware.",
      },
    ],
  },
  {
    key: "enterprise",
    title: "Enterprise Software",
    tagline: "Mission-critical platforms for financial and operational cores",
    iconKey: "Building2",
    items: [
      {
        title: "Financial SaaS",
        description:
          "Ledger systems, reconciliation engines, treasury automation.",
        techIcons: ["postgresql", "python"],
      },
      {
        title: "Microsoft Ecosystem",
        description:
          "Azure-native apps, Dynamics 365 extensions, SharePoint platforms.",
        techIcons: ["microsoft", "azure"],
      },
      {
        title: "Open-Source Core",
        description:
          "Self-hosted ERPs, OSS infrastructure, license-clean stacks.",
      },
      {
        title: "Corporate Tools",
        description:
          "Dayforce, SAP, Stibo MDM, Workday integrations and customizations.",
      },
    ],
  },
];

// Legacy export — old code reads SERVICES as a record. Map new structure to it.
export const SERVICES = SERVICE_CATEGORIES.reduce((acc, cat) => {
  acc[cat.key] = {
    title: cat.title,
    items: cat.items.map((i) => i.title),
  };
  return acc;
}, {} as Record<string, { title: string; items: string[] }>);

// =============================================================================
//  PRODUCTS — Our flagship products
// =============================================================================

export const PRODUCTS = [
  {
    title: "RealHRsoft",
    tagline: "Complete HR Intelligence Technology",
    description:
      "End-to-end HR software that streamlines processes and scales with businesses of every size.",
    logo: "/realhrsoft.png",
    icon: "Users",
  },
  {
    title: "Real Chat",
    tagline: "Secure Team Communication",
    description:
      "A secure collaboration tool for modern workplaces — standalone or fully integrated with RealHRsoft.",
    logo: "/realchat.png",
    icon: "MessageCircle",
  },
  {
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
    title: "Banking & Digital Finance (BFSI)",
    description:
      "Cloud-native architectures, secure ledgers, and transaction routing modernization.",
  },
  {
    title: "Healthcare & MedDev",
    description:
      "HIPAA-compliant clinical systems, patient portals, and connected medical devices.",
  },
  {
    title: "Pharma & Life Sciences",
    description:
      "Validated clinical trial automation, R&D logging, and field-force platforms.",
  },
  {
    title: "Professional Services & EdTech",
    description:
      "Custom learning platforms, scalable Moodle structures, adaptive AI learning.",
  },
  {
    title: "Media & Entertainment",
    description:
      "Automated print composition, web-to-print, and real-time streaming.",
  },
  {
    title: "Retail & Digital Commerce",
    description:
      "Multi-tenant headless storefronts, omnichannel inventory, order processing.",
  },
  {
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
    title: "IT Staff Augmentation",
    description:
      "On-demand technical specialists integrated into your active SDLC.",
  },
  {
    title: "Dedicated Product Engineering Teams",
    description:
      "Cohesive, self-managed squads handling dedicated platform roadmaps.",
  },
  {
    title: "Contract-to-Hire (C2H)",
    description:
      "Flexible, milestone-validated engineering resources for strategic conversion.",
  },
  {
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
    description: "Our history, philosophy, and engineering principles.",
  },
  {
    title: "Careers Hub",
    description: "Open engineering positions and team environment.",
  },
  {
    title: "Leadership Team",
    description: "Executive profiles routing architectures and operations.",
  },
  {
    title: "Global Locations",
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
