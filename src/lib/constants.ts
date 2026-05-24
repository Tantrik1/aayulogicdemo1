// =============================================================================
//  SERVICES — 6 categories, each with a 2-11 capability grid
// =============================================================================

export interface ServiceItemDetail {
  highlight: string; // gradient tail on the hero headline
  subtitle: string; // hero paragraph
  stats: { label: string; value: string }[];
  capabilities: { title: string; body: string }[];
  proofPoint: { metric: string; label: string };
  whyBullets: string[];
  stack: string[]; // tech-stack-icons keys
}

export interface ServiceItem {
  title: string;
  slug: string; // kebab-case for URL
  description: string;
  techIcons?: string[]; // legacy badge row
  detail?: ServiceItemDetail;
}

export interface ServiceCategory {
  key: string;
  title: string;
  tagline: string;
  iconKey: string;
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
        slug: "vibe-coding",
        description:
          "AI-powered rapid development with LLMs and advanced RAG frameworks.",
        techIcons: ["openai", "python", "nextjs2"],
        detail: {
          highlight: "AI-augmented engineering at production pace.",
          subtitle:
            "We pair senior engineers with LLM-native tooling so your backlog ships in days, not quarters — without the prototype tax.",
          stats: [
            { label: "Lead time", value: "5x" },
            { label: "Prod readiness", value: "Week 2" },
            { label: "Eval coverage", value: "92%" },
            { label: "Engagements", value: "30+" },
          ],
          capabilities: [
            {
              title: "LLM-pair engineering",
              body: "Cursor, Claude Code, Copilot — wired into your repo with house rules, lint, and review gates.",
            },
            {
              title: "RAG-first prototypes",
              body: "Stand up a grounded retrieval layer against real corpora — not toy data — in the first sprint.",
            },
            {
              title: "Eval harness from day one",
              body: "Regression suites, golden sets, and CI hooks so AI quality is measured, not vibed.",
            },
            {
              title: "Guardrails & redaction",
              body: "PII scrubbing, prompt-injection defenses, and policy filters baked into routing.",
            },
            {
              title: "Spec-to-PR workflows",
              body: "Issues become draft PRs with passing tests — engineers review intent, not boilerplate.",
            },
            {
              title: "Hand-off ready",
              body: "Every system ships with runbooks, eval scripts, and a clean repo your team can own.",
            },
          ],
          proofPoint: {
            metric: "5x",
            label: "Faster feature throughput on AI-paired squads vs. baseline.",
          },
          whyBullets: [
            "Senior engineers driving — not junior devs prompting.",
            "Eval suite written before shipping, not after incidents.",
            "Cost-per-call budgeting baked into routing logic.",
            "Repo conventions, not just chat transcripts, govern AI output.",
            "Audit-ready logs for every LLM call from week one.",
            "Same engineers across discovery, build, and ops — no rotation.",
          ],
          stack: ["openai", "python", "nextjs2", "typescript", "nodejs", "postgresql"],
        },
      },
      {
        title: "AI Agents",
        slug: "ai-agents",
        description:
          "Autonomous multi-agent systems for software task automation and logic execution.",
        techIcons: ["openai", "python", "nodejs"],
        detail: {
          highlight: "agents that close tickets, not just chat.",
          subtitle:
            "Multi-agent systems that plan, call tools, and finish work end-to-end — under guardrails your security and finance teams approve.",
          stats: [
            { label: "Agents in prod", value: "180+" },
            { label: "Tier-1 handled", value: "62%" },
            { label: "Tool calls/day", value: "4M+" },
            { label: "Hallucination rate", value: "<0.6%" },
          ],
          capabilities: [
            {
              title: "Planner / executor topologies",
              body: "LangGraph, CrewAI, and custom orchestrators tuned for the latency and cost envelope you actually have.",
            },
            {
              title: "Tool registry & ACLs",
              body: "Typed tools with per-tenant scopes, audit logs, and break-glass override paths.",
            },
            {
              title: "Reflection & re-planning",
              body: "Agents detect dead-ends, replan, and escalate to humans on policy triggers — not blind retries.",
            },
            {
              title: "Memory architectures",
              body: "Episodic, semantic, and procedural stores wired to your domain — not bolted-on vector dumps.",
            },
            {
              title: "Eval & red-teaming",
              body: "Adversarial test suites, jailbreak coverage, and continuous regression runs in CI.",
            },
            {
              title: "Cost & latency routing",
              body: "Per-step model selection — Haiku for triage, Opus for hard calls — within a single budget envelope.",
            },
          ],
          proofPoint: {
            metric: "62%",
            label: "Tier-1 support volume autonomously handled at NorthCloud Health.",
          },
          whyBullets: [
            "Agents reviewed like services — SLOs, dashboards, on-call.",
            "Tool calls typed and audited, not free-form JSON.",
            "Fallback chains for every external LLM provider.",
            "Per-tenant model selection for cost vs. quality tuning.",
            "Drift monitoring and quarterly re-eval cadence.",
            "Hand-off includes operator playbooks, not just code.",
          ],
          stack: ["openai", "python", "nodejs", "nextjs2", "postgresql", "redis"],
        },
      },
      {
        title: "Conversational AI",
        slug: "conversational-ai",
        description:
          "Enterprise customer-facing chat systems and automated voice agents.",
        techIcons: ["openai", "python", "react"],
        detail: {
          highlight: "voice and chat that resolve, not deflect.",
          subtitle:
            "Production conversational layers — chat, voice, IVR — grounded in your data and measured on resolution, not session length.",
          stats: [
            { label: "Resolution rate", value: "71%" },
            { label: "CSAT lift", value: "+18pt" },
            { label: "P95 latency", value: "640ms" },
            { label: "Languages", value: "24" },
          ],
          capabilities: [
            {
              title: "Grounded RAG over your KB",
              body: "Confluence, Zendesk, SharePoint, custom DBs — indexed with permissions intact.",
            },
            {
              title: "Voice agents",
              body: "Deepgram, ElevenLabs, OpenAI Realtime — barge-in, sub-second TTS, telephony-grade.",
            },
            {
              title: "Handoff to humans",
              body: "Confidence-scored escalation with full context payload to agents — no repeat questions.",
            },
            {
              title: "CRM & ticketing actions",
              body: "Salesforce, HubSpot, Zendesk — read and write with structured tool calls and idempotency.",
            },
            {
              title: "Multilingual at parity",
              body: "Evaluated per locale, not just translated — quality measured language by language.",
            },
            {
              title: "Analytics & coaching",
              body: "Conversation analytics, drop-off heatmaps, and agent-coaching summaries shipped weekly.",
            },
          ],
          proofPoint: {
            metric: "4 min → 11s",
            label: "Clinician search time after RAG conversation layer at Meridian Health.",
          },
          whyBullets: [
            "Resolution measured per-intent, not session length.",
            "Permission-aware retrieval — users only see what they should.",
            "Voice fallbacks and barge-in tuned for telephony reality.",
            "Per-locale eval suites, not best-effort translation.",
            "Sentiment + intent tracking exposed to product analytics.",
            "Hardened against prompt injection and exfiltration attempts.",
          ],
          stack: ["openai", "python", "react", "nextjs2", "postgresql", "redis"],
        },
      },
      {
        title: "Computer Vision & ML",
        slug: "computer-vision-ml",
        description:
          "Predictive modelling, object tracking, and image recognition patterns.",
        techIcons: ["tensorflow", "pytorch", "python"],
        detail: {
          highlight: "vision pipelines that ship to the edge.",
          subtitle:
            "Detection, segmentation, OCR, and predictive models — trained on your data, deployed where the latency requires.",
          stats: [
            { label: "Models in prod", value: "120+" },
            { label: "Edge devices", value: "8K+" },
            { label: "Manual QC cut", value: "73%" },
            { label: "Annotation throughput", value: "3x" },
          ],
          capabilities: [
            {
              title: "Detection & segmentation",
              body: "YOLO, Mask R-CNN, SAM-2 — fine-tuned on your imagery, benchmarked against your KPIs.",
            },
            {
              title: "OCR & document AI",
              body: "Hybrid layout + LLM extraction for invoices, claims, lab reports — even messy scans.",
            },
            {
              title: "Predictive modelling",
              body: "Time-series, churn, propensity — XGBoost, LightGBM, deep nets, fully feature-stored.",
            },
            {
              title: "MLOps pipelines",
              body: "Versioned data, training runs, model registries — Vertex, SageMaker, or self-hosted MLflow.",
            },
            {
              title: "Edge & on-prem deploy",
              body: "ONNX, TensorRT, CoreML — same model, multiple targets, single eval contract.",
            },
            {
              title: "Drift monitoring",
              body: "Production telemetry feeds back into retraining triggers and golden sets.",
            },
          ],
          proofPoint: {
            metric: "73%",
            label: "Manual QC work eliminated via vision pipeline at Cobalt Industries.",
          },
          whyBullets: [
            "Annotated datasets owned by you, not the vendor.",
            "Eval reports per cohort — not just an aggregate F1.",
            "Edge deploy targets chosen for latency and cost, not novelty.",
            "Active-learning loops to cut annotation cost over time.",
            "Model cards, lineage, and bias review on every release.",
            "Operate-what-we-build — we carry pagers for MLOps too.",
          ],
          stack: ["tensorflow", "pytorch", "python", "aws", "docker", "kubernetes"],
        },
      },
      {
        title: "Data & Analytics",
        slug: "data-analytics",
        description:
          "Centralized ETL pipelines, dynamic BI dashboards, and system governance.",
        techIcons: ["python", "postgresql", "mongodb"],
        detail: {
          highlight: "warehouses, lakehouses, and BI that ship.",
          subtitle:
            "Modern data platforms — ingest, model, govern, expose — built so your analysts and AI agents work from the same source of truth.",
          stats: [
            { label: "Events/day", value: "15M+" },
            { label: "Pipeline reliability", value: "99.7%" },
            { label: "Dashboards shipped", value: "400+" },
            { label: "Cost reduction", value: "40%" },
          ],
          capabilities: [
            {
              title: "Ingestion & CDC",
              body: "Fivetran, Airbyte, Debezium, custom connectors — typed, idempotent, monitored.",
            },
            {
              title: "Warehouse modelling",
              body: "dbt + Snowflake / BigQuery / Postgres — with tests, docs, and contracts on every model.",
            },
            {
              title: "Lakehouse architectures",
              body: "Iceberg, Delta, Hudi on object storage for petabyte-scale analytical workloads.",
            },
            {
              title: "BI & semantic layer",
              body: "Looker, Metabase, Superset, Cube — one metric definition, many surfaces.",
            },
            {
              title: "Reverse ETL & activation",
              body: "Hightouch, Census — warehouse data piped into CRM, ads, and product systems.",
            },
            {
              title: "Governance & lineage",
              body: "Column-level lineage, PII tagging, access policies, audit-ready by default.",
            },
          ],
          proofPoint: {
            metric: "40%",
            label: "Average warehouse cost reduction after rearchitecture engagements.",
          },
          whyBullets: [
            "Contracts and tests on every dbt model — no silent breakage.",
            "Semantic layer authored once, exposed everywhere.",
            "Lineage and PII tagging audited continuously.",
            "FinOps reviews per workload — query cost is a first-class metric.",
            "Same engineers across pipelines, warehouse, and BI.",
            "Hand-off includes a runbook and a 90-day operator retainer.",
          ],
          stack: ["python", "postgresql", "mongodb", "aws", "gcloud", "docker"],
        },
      },
      {
        title: "RPA & Automation",
        slug: "rpa-automation",
        description:
          "Scalable n8n workflows, UiPath scripts, and custom process automation.",
        techIcons: ["python", "nodejs"],
        detail: {
          highlight: "back-office automation that survives.",
          subtitle:
            "Workflow automation engineered like software — versioned, tested, observable — replacing brittle macros and click-recorders.",
          stats: [
            { label: "Workflows in prod", value: "900+" },
            { label: "Hours saved/mo", value: "12K+" },
            { label: "Failure rate", value: "<0.4%" },
            { label: "Avg. payback", value: "11 wks" },
          ],
          capabilities: [
            {
              title: "n8n & Temporal workflows",
              body: "Long-running, retried, versioned — for orchestration that has to recover, not just run once.",
            },
            {
              title: "UiPath / Power Automate",
              body: "Where the system has no API — desktop bots wired to a real CI/CD lifecycle.",
            },
            {
              title: "Document workflows",
              body: "Email/file intake → OCR → extraction → ERP — with human-in-the-loop checkpoints.",
            },
            {
              title: "Integration adapters",
              body: "ERP, CRM, HRIS, banking — typed connectors with retry, dedupe, and reconciliation.",
            },
            {
              title: "Observability & alerts",
              body: "Per-workflow SLOs, on-call routing, and failure-mode dashboards from day one.",
            },
            {
              title: "AI-assisted automation",
              body: "LLMs for unstructured decisions inside deterministic workflow scaffolds.",
            },
          ],
          proofPoint: {
            metric: "12K+",
            label: "Operator hours reclaimed per month across active automation engagements.",
          },
          whyBullets: [
            "Workflows reviewed in PRs, not drawn on canvases.",
            "Tested with fixtures before production rollout.",
            "Retries, idempotency, and dedupe are defaults — not nice-to-haves.",
            "Operator dashboards shipped with every workflow.",
            "Human-in-the-loop where the cost of error is high.",
            "Vendor-neutral — n8n, Temporal, UiPath, Make — based on fit.",
          ],
          stack: ["python", "nodejs", "postgresql", "redis", "docker", "github"],
        },
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
        slug: "full-stack-backend",
        description:
          "High-throughput Node.js, Go, Python, and Rust backends.",
        techIcons: ["nodejs", "go", "python", "nestjs"],
        detail: {
          highlight: "backends built for the 99th percentile.",
          subtitle:
            "Services engineered for throughput, observability, and graceful failure — across Node, Go, Python, Rust, and the JVM.",
          stats: [
            { label: "RPS sustained", value: "120K+" },
            { label: "P99 latency", value: "84ms" },
            { label: "Services shipped", value: "600+" },
            { label: "SLA uptime", value: "99.4%" },
          ],
          capabilities: [
            {
              title: "API design & contracts",
              body: "REST, GraphQL, gRPC, tRPC — typed end-to-end, versioned, and documented.",
            },
            {
              title: "Event-driven systems",
              body: "Kafka, NATS, RabbitMQ, SQS — outbox patterns, exactly-once semantics where it matters.",
            },
            {
              title: "Authn / authz",
              body: "OAuth2, OIDC, JWT, mTLS, RBAC, ABAC — built once, audited often.",
            },
            {
              title: "Resilience patterns",
              body: "Circuit breakers, bulkheads, retries with jitter, graceful degradation by default.",
            },
            {
              title: "Observability built-in",
              body: "Structured logs, metrics, traces — OpenTelemetry from the first commit.",
            },
            {
              title: "Migration & rewrites",
              body: "Strangler-fig migrations from PHP, .NET, Rails monoliths to modern stacks — zero downtime.",
            },
          ],
          proofPoint: {
            metric: "84ms p99",
            label: "Trading engine latency after rebuild at Helix Capital — down from 4s spikes.",
          },
          whyBullets: [
            "Contracts before code — no API drift between services.",
            "Load tests in CI, not as an afterthought.",
            "OpenTelemetry baseline — logs, metrics, traces shipping day one.",
            "Same engineer through design, build, and on-call.",
            "Per-endpoint SLOs documented and alerted on.",
            "Zero-downtime deploys via blue/green or progressive rollout.",
          ],
          stack: ["nodejs", "go", "python", "nestjs", "postgresql", "redis"],
        },
      },
      {
        title: "Full-Stack Databases",
        slug: "full-stack-databases",
        description:
          "PostgreSQL clusters, Redis routing, vector stores (ChromaDB/Faiss).",
        techIcons: ["postgresql", "mongodb", "redis", "mysql"],
        detail: {
          highlight: "data layers that don't wake you up.",
          subtitle:
            "Relational, document, cache, and vector stores — schema-designed, tuned, and replicated for the workload you actually run.",
          stats: [
            { label: "Largest cluster", value: "18 TB" },
            { label: "Query p99", value: "12ms" },
            { label: "Failover RTO", value: "<30s" },
            { label: "DBs operated", value: "240+" },
          ],
          capabilities: [
            {
              title: "PostgreSQL at scale",
              body: "Partitioning, logical replication, pgvector, Citus, RDS / Aurora / on-prem.",
            },
            {
              title: "Document & wide-column",
              body: "MongoDB, DynamoDB, Cassandra — modeled for access patterns, not just storage.",
            },
            {
              title: "Cache & queue layers",
              body: "Redis, KeyDB, Memcached — sharded, replicated, with cache-aside or read-through patterns.",
            },
            {
              title: "Vector stores",
              body: "pgvector, Chroma, Weaviate, Pinecone — chosen by recall, latency, and cost envelope.",
            },
            {
              title: "Schema & migration",
              body: "Online migrations with pt-osc / gh-ost / Flyway — no maintenance windows required.",
            },
            {
              title: "Backup & DR",
              body: "PITR, cross-region replicas, restore drills run quarterly — not just documented.",
            },
          ],
          proofPoint: {
            metric: "<30s",
            label: "Multi-region failover RTO measured in production drills, not theory.",
          },
          whyBullets: [
            "Schemas modeled for access patterns, not just normal forms.",
            "Migrations rehearsed against production-sized clones.",
            "Restore drills quarterly — backups proven, not assumed.",
            "Query plans reviewed alongside code in PRs.",
            "Cost-per-query tracked as a first-class metric.",
            "Tunable for OLTP, OLAP, or hybrid workloads.",
          ],
          stack: ["postgresql", "mongodb", "redis", "mysql", "aws", "docker"],
        },
      },
      {
        title: "Frontend Layers",
        slug: "frontend-layers",
        description:
          "React, Angular, Vue with TypeScript and modern tooling.",
        techIcons: ["react", "angular", "vuejs", "typescript"],
        detail: {
          highlight: "frontends that feel as fast as they are.",
          subtitle:
            "React, Vue, Angular, Svelte — engineered with design systems, accessibility, and motion that holds up under real-world latency.",
          stats: [
            { label: "Lighthouse", value: "98+" },
            { label: "Bundle baseline", value: "<140KB" },
            { label: "Apps shipped", value: "350+" },
            { label: "A11y target", value: "WCAG AA" },
          ],
          capabilities: [
            {
              title: "Design system foundations",
              body: "Tokens, primitives, accessible components — shared across web, mobile, and email.",
            },
            {
              title: "Performance engineering",
              body: "Code-splitting, RSC, prefetch, image pipelines — measured at the 75th percentile, not the lab.",
            },
            {
              title: "State & data layers",
              body: "TanStack Query, Zustand, Redux Toolkit, Apollo — chosen for the actual data graph.",
            },
            {
              title: "Accessibility from day one",
              body: "WCAG 2.2 AA conformance reviewed in PRs — axe + manual screen-reader passes.",
            },
            {
              title: "Motion & micro-interactions",
              body: "Framer Motion, GSAP — interactions tuned with easing curves, not default tweens.",
            },
            {
              title: "Test pyramids",
              body: "Vitest, Playwright, Storybook visual diffs — coverage that catches regression, not vanity metrics.",
            },
          ],
          proofPoint: {
            metric: "98",
            label: "Mobile Lighthouse performance score on the average page we ship.",
          },
          whyBullets: [
            "Design tokens shared across web, mobile, and email surfaces.",
            "Bundle budgets enforced in CI — no silent regressions.",
            "A11y reviewed by humans, not just axe-core.",
            "Motion designed with brand-specific easing curves.",
            "Visual regression on every PR via Chromatic / Playwright.",
            "Frontends ship with full Storybook documentation.",
          ],
          stack: ["react", "angular", "vuejs", "typescript", "tailwindcss", "nextjs2"],
        },
      },
      {
        title: "Preconfigured Stacks",
        slug: "preconfigured-stacks",
        description:
          "Next.js, Vite, HTMX, and battle-tested templates that ship in days.",
        techIcons: ["nextjs2", "tailwindcss", "typescript"],
        detail: {
          highlight: "production templates, day-one velocity.",
          subtitle:
            "Battle-tested starter stacks — auth, billing, analytics, CI — so your first sprint ships a feature, not scaffolding.",
          stats: [
            { label: "Time-to-first-deploy", value: "<48h" },
            { label: "Templates", value: "20+" },
            { label: "Lighthouse baseline", value: "95+" },
            { label: "Repos shipped", value: "150+" },
          ],
          capabilities: [
            {
              title: "Next.js app router",
              body: "RSC, streaming, middleware, edge runtime — opinionated, but not painted into a corner.",
            },
            {
              title: "Auth, billing, mail",
              body: "Auth.js / Clerk, Stripe, Resend, Knock — wired up, themed, and tested.",
            },
            {
              title: "Analytics & feature flags",
              body: "PostHog, GrowthBook, Statsig — instrumented from the first push.",
            },
            {
              title: "CI/CD baseline",
              body: "GitHub Actions, preview deploys, Lighthouse budgets, security scans on every PR.",
            },
            {
              title: "Design system kit",
              body: "Tailwind, shadcn/ui, Radix — pre-themed components ready for brand customization.",
            },
            {
              title: "Owner-friendly handoff",
              body: "Templates you'll keep — no lock-in, no vendor SaaS, no proprietary framework.",
            },
          ],
          proofPoint: {
            metric: "<48h",
            label: "From kickoff to first preview deploy on a fresh stack engagement.",
          },
          whyBullets: [
            "MIT-licensed code you own and can fork at will.",
            "No proprietary SDKs — only widely-supported OSS.",
            "Security scans, dependency review, and Lighthouse budgets baked in.",
            "Preview deploys per PR — review experience, not just code.",
            "Docs written in the repo, not in a wiki you can't access.",
            "Same engineers stay on for feature work after handoff.",
          ],
          stack: ["nextjs2", "tailwindcss", "typescript", "react", "postgresql", "vercel"],
        },
      },
      {
        title: "Mobile Frameworks",
        slug: "mobile-frameworks",
        description:
          "React Native (Expo), Flutter, and native iOS/Android clients.",
        techIcons: ["reactnative", "flutter", "swift", "kotlin"],
        detail: {
          highlight: "mobile apps that pass App Store review the first time.",
          subtitle:
            "Cross-platform and native — built for offline, deep-linking, push, IAP, and the messy realities of real-world devices.",
          stats: [
            { label: "Crash-free sessions", value: "99.7%" },
            { label: "Apps shipped", value: "80+" },
            { label: "Avg. App Store rating", value: "4.7" },
            { label: "OTA update latency", value: "<60s" },
          ],
          capabilities: [
            {
              title: "React Native + Expo",
              body: "EAS Build, OTA updates, Hermes, Reanimated — production-tuned for both stores.",
            },
            {
              title: "Flutter at scale",
              body: "Dart 3, Riverpod, melos monorepos — for teams shipping across iOS, Android, and web.",
            },
            {
              title: "Native iOS & Android",
              body: "Swift / SwiftUI, Kotlin / Compose — when the platform requires it, not by default.",
            },
            {
              title: "Offline-first architectures",
              body: "WatermelonDB, Realm, SQLite — sync strategies designed for spotty networks.",
            },
            {
              title: "Push, deep-link, IAP",
              body: "Firebase, OneSignal, Branch, App Store / Play Billing — wired and tested per platform.",
            },
            {
              title: "Release automation",
              body: "Fastlane, EAS, Bitrise — code-signed, store-submitted, and rolled out from CI.",
            },
          ],
          proofPoint: {
            metric: "99.7%",
            label: "Crash-free session rate across mobile apps we operate.",
          },
          whyBullets: [
            "Per-device test farms — Pixel 6 to iPhone SE — not just simulators.",
            "Release pipelines that submit, sign, and stage on every push.",
            "Offline-first sync designed before the UI lands.",
            "Crashlytics + Sentry wired in from week one.",
            "Accessibility tested with VoiceOver and TalkBack.",
            "App Store and Play Store reviews triaged within 24 hours.",
          ],
          stack: ["reactnative", "flutter", "swift", "kotlin", "firebase", "typescript"],
        },
      },
      {
        title: "Desktop Frameworks",
        slug: "desktop-frameworks",
        description:
          "Cross-platform Electron, Tauri, and native shells for enterprise tools.",
        techIcons: ["typescript", "nodejs"],
        detail: {
          highlight: "desktop apps that respect your CPU.",
          subtitle:
            "Electron, Tauri, and native shells — for trading desks, clinical workstations, and any tool that lives outside the browser.",
          stats: [
            { label: "Cold-start budget", value: "<800ms" },
            { label: "Memory baseline", value: "<180MB" },
            { label: "Apps shipped", value: "35+" },
            { label: "Auto-update latency", value: "<5min" },
          ],
          capabilities: [
            {
              title: "Tauri-first when possible",
              body: "Rust core, web frontend — small bundle, low memory, native menus and file I/O.",
            },
            {
              title: "Electron where it fits",
              body: "When you need full Node integration or deep Chromium — built lean, not bloated.",
            },
            {
              title: "Native macOS & Windows",
              body: "Swift / AppKit, .NET / WinUI — for system-tray, drivers, or platform-only APIs.",
            },
            {
              title: "Auto-update & signing",
              body: "Code-signed binaries, notarization, staged rollout via Sparkle / Squirrel / WinRT.",
            },
            {
              title: "Offline + sync",
              body: "SQLite, IndexedDB, CRDTs — apps that work on a plane and reconcile on landing.",
            },
            {
              title: "Hardware & peripherals",
              body: "USB, serial, BLE, printers, badge readers — driven directly from the app shell.",
            },
          ],
          proofPoint: {
            metric: "<180MB",
            label: "Idle memory footprint we target for desktop builds — not 700MB Electron-default.",
          },
          whyBullets: [
            "Tauri prioritized over Electron when feature parity allows.",
            "Cold-start budgets enforced in CI, not aspirational.",
            "Auto-update channels for stable, beta, and internal builds.",
            "Code signing and notarization automated from day one.",
            "Crash reporting and telemetry opt-in, GDPR-aware.",
            "Same UI components shared with mobile and web stacks.",
          ],
          stack: ["typescript", "nodejs", "react", "rust", "tailwindcss", "github"],
        },
      },
      {
        title: "JVM Enterprise",
        slug: "jvm-enterprise",
        description:
          "Java, Kotlin, and Spring-based services for compliance-heavy systems.",
        techIcons: ["kotlin"],
        detail: {
          highlight: "Java and Kotlin services that age well.",
          subtitle:
            "Spring, Quarkus, Micronaut, Ktor — modern JVM platforms for banking, insurance, and government workloads that have to be auditable for a decade.",
          stats: [
            { label: "JVM services in prod", value: "200+" },
            { label: "Avg. heap", value: "<2GB" },
            { label: "Cold start (native)", value: "<150ms" },
            { label: "Compliance frameworks", value: "12" },
          ],
          capabilities: [
            {
              title: "Spring Boot platforms",
              body: "Boot 3, GraalVM native, reactive WebFlux when concurrency demands it.",
            },
            {
              title: "Kotlin services",
              body: "Coroutines, Ktor, Exposed — concise, type-safe alternatives where teams are ready.",
            },
            {
              title: "Quarkus / Micronaut",
              body: "Compile-time DI, lightning cold-start — for serverless and edge deployments.",
            },
            {
              title: "Domain-driven modelling",
              body: "Hexagonal, CQRS, event sourcing — for regulated domains where audit trails matter.",
            },
            {
              title: "Compliance-grade builds",
              body: "Reproducible builds, SBOM, signed artifacts — SOC 2, ISO 27001, PCI alignment by design.",
            },
            {
              title: "Legacy modernization",
              body: "EJB, JBoss, WebLogic, JSF — strangled and migrated to modern Spring without freezes.",
            },
          ],
          proofPoint: {
            metric: "<150ms",
            label: "Cold-start on GraalVM-native Spring services we ship to regulated tenants.",
          },
          whyBullets: [
            "Reproducible builds with signed artifacts and SBOMs.",
            "Test pyramid with property-based + integration coverage.",
            "Migration plans that ship in slices, not big-bang freezes.",
            "Observability via Micrometer / OpenTelemetry, not vendor lock.",
            "JDK upgrade roadmaps reviewed yearly with the team.",
            "Engineers comfortable in both Java idioms and modern Kotlin.",
          ],
          stack: ["kotlin", "postgresql", "redis", "docker", "kubernetes", "github"],
        },
      },
      {
        title: "Automation QA",
        slug: "automation-qa",
        description:
          "Playwright, Cypress, Selenium pipelines integrated with CI.",
        techIcons: ["typescript", "nodejs"],
        detail: {
          highlight: "test suites your team will keep running.",
          subtitle:
            "Playwright, Cypress, Selenium, Appium — pyramids designed for signal, not green-bar theatre, wired into your CI from day one.",
          stats: [
            { label: "Suites shipped", value: "180+" },
            { label: "Flake rate", value: "<1.2%" },
            { label: "CI runtime cut", value: "62%" },
            { label: "Coverage uplift", value: "+40pp" },
          ],
          capabilities: [
            {
              title: "End-to-end with Playwright",
              body: "Parallel sharding, trace viewer, video-on-failure — the modern e2e default.",
            },
            {
              title: "Mobile automation",
              body: "Appium, Detox, Maestro — device-farm runs on every PR, not just before release.",
            },
            {
              title: "API & contract tests",
              body: "Pact, REST-Assured, Postman / Newman — contracts verified between services.",
            },
            {
              title: "Visual regression",
              body: "Chromatic, Percy, Playwright snapshots — pixel diffs in the PR, not on staging.",
            },
            {
              title: "Test data management",
              body: "Factories, fixtures, anonymized prod clones — repeatable tests without leaking PII.",
            },
            {
              title: "CI integration",
              body: "Sharded runs, retries with quarantine, flake dashboards — green doesn't mean lucky.",
            },
          ],
          proofPoint: {
            metric: "<1.2%",
            label: "Flake rate we hold across active e2e suites — measured weekly, not annually.",
          },
          whyBullets: [
            "Tests authored alongside features, not after release.",
            "Flake budgets enforced — quarantine, not ignore.",
            "Reports tied to product-owner-friendly tags and trends.",
            "Visual regression on every PR, not just smoke tests.",
            "Device coverage from Pixel 6 to iPhone SE.",
            "Hand-off includes a test playbook your team will actually use.",
          ],
          stack: ["typescript", "nodejs", "python", "github", "docker"],
        },
      },
      {
        title: "Specialized Testing",
        slug: "specialized-testing",
        description:
          "Load testing, chaos engineering, security regression suites.",
        techIcons: ["python", "go"],
        detail: {
          highlight: "load, chaos, and security tests under one roof.",
          subtitle:
            "Performance, chaos, security, and accessibility programs — designed to catch the failure modes that ordinary QA cannot reach.",
          stats: [
            { label: "Concurrency tested", value: "1M+" },
            { label: "Chaos drills/yr", value: "60+" },
            { label: "CVEs blocked pre-prod", value: "240+" },
            { label: "WCAG conformance", value: "AA" },
          ],
          capabilities: [
            {
              title: "Load & soak testing",
              body: "k6, Gatling, Locust — repeatable scenarios pointing at production-like environments.",
            },
            {
              title: "Chaos engineering",
              body: "LitmusChaos, Chaos Mesh, Gremlin — controlled drills against staging and prod.",
            },
            {
              title: "Security regression",
              body: "SAST, DAST, dependency / container scans wired into CI — with policy gates, not just reports.",
            },
            {
              title: "Pen-test partner ops",
              body: "We coordinate third-party pen-tests and remediate findings on a tracked SLA.",
            },
            {
              title: "Accessibility audits",
              body: "Manual + automated WCAG 2.2 audits, with remediation pull requests.",
            },
            {
              title: "Performance budgets",
              body: "Per-endpoint and per-page budgets enforced in CI — regressions blocked, not logged.",
            },
          ],
          proofPoint: {
            metric: "240+",
            label: "Pre-production CVEs blocked across active engagements last year.",
          },
          whyBullets: [
            "Tests authored against business SLOs, not arbitrary thresholds.",
            "Chaos drills run on a recurring calendar — not one-offs.",
            "Security findings tracked in your issue tracker, not PDFs.",
            "Remediation PRs land alongside findings.",
            "Accessibility verified by users, not just tools.",
            "Hand-off includes runbooks for each drill type.",
          ],
          stack: ["python", "go", "github", "docker", "kubernetes", "terraform"],
        },
      },
      {
        title: "Business Core (ERP / Low-Code)",
        slug: "business-core",
        description:
          "Custom ERP, low-code dashboards, and internal-tool platforms.",
        techIcons: ["react", "nodejs", "postgresql"],
        detail: {
          highlight: "internal tools that look like products.",
          subtitle:
            "Custom ERPs, ops dashboards, and admin consoles — built on Retool, Appsmith, Refine, or bespoke React when the workflow demands it.",
          stats: [
            { label: "Internal apps shipped", value: "260+" },
            { label: "Avg. build time", value: "3 wks" },
            { label: "Ops headcount saved", value: "30%" },
            { label: "Daily users", value: "120K+" },
          ],
          capabilities: [
            {
              title: "Low-code platforms",
              body: "Retool, Appsmith, Tooljet — wired to your warehouse with role-based auth.",
            },
            {
              title: "Refine / React admin",
              body: "Bespoke admin shells when low-code can't reach — same speed, more polish.",
            },
            {
              title: "Custom ERP modules",
              body: "Finance, supply chain, HR — modeled against your processes, not generic templates.",
            },
            {
              title: "Workflow & approvals",
              body: "Multi-step approvals, audit trails, and notifications — engineered, not duct-taped.",
            },
            {
              title: "Reporting & exports",
              body: "Scheduled reports, CSV / Excel / PDF exports, BI-tool embeds.",
            },
            {
              title: "SSO & access control",
              body: "Okta, Azure AD, Google Workspace SSO with row-level and column-level policies.",
            },
          ],
          proofPoint: {
            metric: "30%",
            label: "Ops headcount typically saved within a year of a bespoke internal-tool rollout.",
          },
          whyBullets: [
            "Tools built by engineers who'll use them on-call.",
            "Auth, audit, and access control treated as features.",
            "Designed for accessibility and keyboard-first workflows.",
            "Reports versioned and tested, not edited live.",
            "Hand-off includes a per-screen owner runbook.",
            "Stack chosen by fit — low-code or bespoke, not dogma.",
          ],
          stack: ["react", "nodejs", "postgresql", "typescript", "tailwindcss", "redis"],
        },
      },
      {
        title: "Immersive Core (Unity)",
        slug: "immersive-core",
        description:
          "Unity, WebGL, and immersive 3D experiences for training and product.",
        techIcons: [],
        detail: {
          highlight: "3D and WebGL that runs on the laptops you have.",
          subtitle:
            "Unity, Unreal, Three.js, WebGPU — training simulators, product configurators, and digital twins designed for real GPUs.",
          stats: [
            { label: "Frame budget", value: "60fps" },
            { label: "Cross-platform builds", value: "iOS / Android / Web / Desktop" },
            { label: "Trainee throughput", value: "8x" },
            { label: "Asset library", value: "5K+" },
          ],
          capabilities: [
            {
              title: "Unity & Unreal",
              body: "URP / HDRP, addressables, multiplayer netcode — production pipelines, not jam-game shortcuts.",
            },
            {
              title: "WebGL / WebGPU",
              body: "Three.js, React-Three-Fiber, Babylon — for product configurators and data viz in-browser.",
            },
            {
              title: "Digital twins",
              body: "Real-time data overlay on 3D models — factories, buildings, networks, fleets.",
            },
            {
              title: "Training simulators",
              body: "Branching scenarios, scoring, LMS integration — measurable training, not screensavers.",
            },
            {
              title: "Asset & content pipelines",
              body: "GLTF / FBX optimization, LOD chains, automated bake-and-ship workflows.",
            },
            {
              title: "XR-ready",
              body: "Quest, Vision Pro, HoloLens — same scene, multiple targets, shared input layer.",
            },
          ],
          proofPoint: {
            metric: "8x",
            label: "Trainee throughput uplift after replacing video-based training with interactive sims.",
          },
          whyBullets: [
            "Frame budgets honored on mid-range hardware, not just RTX 4090s.",
            "Asset pipelines automated — no hand-baking before every build.",
            "Multiplayer netcode reviewed for lag and cheating.",
            "Cross-target builds run from a single source of truth.",
            "Performance profiled per release, not at the end.",
            "Hand-off includes content-author tooling, not just the runtime.",
          ],
          stack: ["typescript", "nodejs", "react"],
        },
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
        slug: "platform-operations",
        description:
          "AWS, Azure, GCP architecture, multi-region failover, FinOps.",
        techIcons: ["aws", "azure", "gcloud"],
        detail: {
          highlight: "multi-cloud platforms that pay for themselves.",
          subtitle:
            "AWS, Azure, GCP — architected for the SLO you target, the bill you can afford, and the audit you'll pass.",
          stats: [
            { label: "Cloud bill cut", value: "40%" },
            { label: "Platforms operated", value: "60+" },
            { label: "Regions live", value: "32" },
            { label: "SLA uptime", value: "99.99%" },
          ],
          capabilities: [
            {
              title: "Landing zones",
              body: "Multi-account/subscription baselines, IAM, networking — Control Tower / Azure Landing Zones / GCP Foundations.",
            },
            {
              title: "Multi-region failover",
              body: "Active-active or active-passive — designed against actual RTO and RPO targets.",
            },
            {
              title: "FinOps & cost governance",
              body: "Tagging, allocation, anomaly detection, RIs / SPs — bills you can actually defend.",
            },
            {
              title: "Networking & edge",
              body: "VPC / VNet design, Transit Gateways, CloudFront / Cloudflare, private connectivity.",
            },
            {
              title: "Compliance baselines",
              body: "SOC 2, HIPAA, ISO 27001, PCI — controls implemented in code, evidence collected automatically.",
            },
            {
              title: "Migration & repatriation",
              body: "Datacenter-to-cloud, cloud-to-cloud, or selective repatriation — by waves, not big bang.",
            },
          ],
          proofPoint: {
            metric: "40%",
            label: "Average cloud-bill reduction within 90 days of a platform engagement.",
          },
          whyBullets: [
            "Architecture documented in ADRs, not just diagrams.",
            "All infra in code — Terraform, Pulumi, or CDK.",
            "Compliance evidence collected continuously, not at audit time.",
            "Cost reviewed weekly with FinOps dashboards.",
            "Disaster recovery drills run quarterly.",
            "Engineers carry pagers for what they ship.",
          ],
          stack: ["aws", "azure", "gcloud", "terraform", "kubernetes", "docker"],
        },
      },
      {
        title: "DevOps & CI/CD Pipelines",
        slug: "devops-cicd",
        description:
          "GitHub Actions, Docker, Kubernetes, Terraform IaC at scale.",
        techIcons: ["docker", "kubernetes", "terraform", "github"],
        detail: {
          highlight: "pipelines that ship every hour, safely.",
          subtitle:
            "GitHub Actions, GitLab CI, Argo, Tekton — wired with progressive delivery, policy gates, and golden paths your engineers want to use.",
          stats: [
            { label: "Deploys/day", value: "300+" },
            { label: "Lead time", value: "<35min" },
            { label: "Change-fail rate", value: "<5%" },
            { label: "MTTR", value: "<25min" },
          ],
          capabilities: [
            {
              title: "Pipeline platforms",
              body: "GitHub Actions, GitLab CI, Buildkite — reusable workflows, OIDC, ephemeral runners.",
            },
            {
              title: "Kubernetes platforms",
              body: "EKS / AKS / GKE / on-prem — GitOps via Argo CD or Flux, with progressive delivery.",
            },
            {
              title: "Infrastructure as code",
              body: "Terraform, Pulumi, CDK — modular, tested, and reviewed in PRs like application code.",
            },
            {
              title: "Container & image supply chain",
              body: "Distroless bases, SBOMs, signed images, scanning — Sigstore + Cosign baseline.",
            },
            {
              title: "Progressive delivery",
              body: "Canary, blue/green, feature flags, automatic rollback on SLO breach.",
            },
            {
              title: "Developer experience",
              body: "Golden paths via Backstage, CLIs, and templates — fewer Jira tickets per deploy.",
            },
          ],
          proofPoint: {
            metric: "<35min",
            label: "Commit-to-prod lead time on platforms we operate — DORA Elite territory.",
          },
          whyBullets: [
            "DORA metrics reported monthly, with improvement targets.",
            "Pipelines reusable across services — no copy-paste YAML sprawl.",
            "Secrets handled via OIDC and short-lived tokens.",
            "Supply chain signed and verifiable end-to-end.",
            "Rollback paths tested, not just designed.",
            "Hand-off includes platform docs and a 90-day retainer.",
          ],
          stack: ["docker", "kubernetes", "terraform", "github", "aws", "azure"],
        },
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
        slug: "ecommerce-frameworks",
        description:
          "Shopify Plus, Magento, Headless commerce architectures.",
        detail: {
          highlight: "storefronts that scale on Black Friday.",
          subtitle:
            "Shopify Plus, commercetools, Magento, Medusa, Saleor — headless or monolithic, chosen by what your catalog actually needs.",
          stats: [
            { label: "Peak RPS handled", value: "60K" },
            { label: "Stores live", value: "120+" },
            { label: "Avg. conversion lift", value: "+22%" },
            { label: "Time-to-launch", value: "8 wks" },
          ],
          capabilities: [
            {
              title: "Shopify Plus & Hydrogen",
              body: "Storefronts, B2B, custom apps, Functions — production-tuned for catalogs of any size.",
            },
            {
              title: "Headless with commercetools / Saleor",
              body: "Composable commerce when SKUs, locales, or pricing rules outgrow monoliths.",
            },
            {
              title: "Magento / Adobe Commerce",
              body: "M2 builds, upgrades, B2B portals, and migrations to headless — without freezing roadmap.",
            },
            {
              title: "Search & merchandising",
              body: "Algolia, Klevu, vector search — relevance tuned by SKU performance, not defaults.",
            },
            {
              title: "OMS & fulfillment",
              body: "Fluent, EnVista, custom OMS — integrated with WMS, carriers, and marketplaces.",
            },
            {
              title: "Payments, tax, fraud",
              body: "Stripe, Adyen, Avalara, Forter — wired with retries, recon, and dispute workflows.",
            },
          ],
          proofPoint: {
            metric: "+22%",
            label: "Average conversion lift after a search + merchandising overhaul we ran in 2025.",
          },
          whyBullets: [
            "Performance budgets per PDP and PLP — enforced in CI.",
            "Load tests run against last year's Black Friday traffic + 50%.",
            "Search relevance tuned with real SKU click-through data.",
            "Payments wired with retry, recon, and dispute paths.",
            "Migration plans phased — no big-bang relaunches.",
            "Stores handed off with editor-friendly playbooks.",
          ],
          stack: ["nextjs2", "react", "typescript", "nodejs", "postgresql", "redis"],
        },
      },
      {
        title: "Enterprise CMS",
        slug: "enterprise-cms",
        description:
          "Drupal, AEM, Liferay for compliance-heavy content operations.",
        detail: {
          highlight: "CMS platforms for regulated brands.",
          subtitle:
            "Drupal, Adobe Experience Manager, Sitecore, Liferay — multi-brand, multi-locale, workflow-governed content operations.",
          stats: [
            { label: "Brands managed", value: "40+" },
            { label: "Locales live", value: "60+" },
            { label: "Avg. publish latency", value: "<2min" },
            { label: "Compliance frameworks", value: "8" },
          ],
          capabilities: [
            {
              title: "Drupal at scale",
              body: "Drupal 10 / 11, decoupled with Next.js or Nuxt, multisite, with editorial workflows.",
            },
            {
              title: "Adobe Experience Manager",
              body: "AEM Sites, Assets, and Forms — Edge Delivery Services and headless when fit demands.",
            },
            {
              title: "Sitecore XM Cloud",
              body: "Composable Sitecore — XM Cloud, Search, Personalize, OrderCloud integrations.",
            },
            {
              title: "Liferay DXP",
              body: "Portal-grade platforms for B2B, government, and member-only experiences.",
            },
            {
              title: "Editorial workflow",
              body: "Multi-stage approvals, scheduled publishes, audit trails, and role-aware previews.",
            },
            {
              title: "Personalization & A/B",
              body: "Audience targeting, experimentation, and analytics that respect privacy regulations.",
            },
          ],
          proofPoint: {
            metric: "<2min",
            label: "Average publish-to-live latency on enterprise CMS platforms we operate.",
          },
          whyBullets: [
            "Workflows modeled around real editorial teams.",
            "Multi-locale parity treated as a launch requirement.",
            "Personalization defaults respect GDPR / CCPA / DPDP.",
            "Migrations run incrementally — no editorial freeze.",
            "Editor experience tested with the actual content team.",
            "Hand-off includes editor training and a runbook.",
          ],
          stack: ["nodejs", "python", "postgresql", "redis", "docker", "aws"],
        },
      },
      {
        title: "Web CMS",
        slug: "web-cms",
        description:
          "WordPress, Strapi, Sanity for marketing and editorial teams.",
        techIcons: ["wordpress"],
        detail: {
          highlight: "marketing sites your team actually wants to edit.",
          subtitle:
            "WordPress, Strapi, Sanity, Payload, Contentful — paired with modern frontends so marketing ships pages without filing tickets.",
          stats: [
            { label: "Sites shipped", value: "200+" },
            { label: "Lighthouse baseline", value: "95+" },
            { label: "Time-to-page", value: "<1 day" },
            { label: "Editor adoption", value: "98%" },
          ],
          capabilities: [
            {
              title: "Headless WordPress",
              body: "ACF / Faust / WPGraphQL with Next.js — editor-friendly without the front-end bloat.",
            },
            {
              title: "Sanity & Contentful",
              body: "Schema-driven structured content with live preview and Visual Editing.",
            },
            {
              title: "Strapi & Payload",
              body: "Open-source CMS you host yourself — no per-record pricing, no vendor lock.",
            },
            {
              title: "Component-driven authoring",
              body: "Block libraries that match your design system, not generic Gutenberg defaults.",
            },
            {
              title: "Multi-site & multi-locale",
              body: "Translation workflows, locale fallbacks, hreflang, and locale-aware routing.",
            },
            {
              title: "SEO & analytics",
              body: "Structured data, sitemaps, GA4 / Plausible / PostHog — measured from launch.",
            },
          ],
          proofPoint: {
            metric: "<1 day",
            label: "Average time from brief to published page once the system is live.",
          },
          whyBullets: [
            "Block libraries aligned with your design system.",
            "Editor experience tested with marketing, not just engineers.",
            "Open-source CMS preferred when fit is equal.",
            "Lighthouse and SEO budgets enforced in CI.",
            "Migrations preserve URLs and redirects — no SEO bleed.",
            "Hand-off includes editor training and a help video library.",
          ],
          stack: ["wordpress", "nextjs2", "react", "typescript", "tailwindcss", "supabase"],
        },
      },
      {
        title: "Core Experience",
        slug: "core-experience",
        description:
          "Product Design, UI/UX research, Supabase-backed apps.",
        techIcons: ["figma", "supabase"],
        detail: {
          highlight: "product design that ships, not just inspires.",
          subtitle:
            "Research, design systems, and full-stack product builds on Supabase / Postgres — design and engineering on the same squad.",
          stats: [
            { label: "Products shipped", value: "90+" },
            { label: "Avg. NPS uplift", value: "+24" },
            { label: "Design tokens", value: "4K+" },
            { label: "Usability rounds", value: "200+" },
          ],
          capabilities: [
            {
              title: "Discovery & research",
              body: "Interviews, JTBD, diary studies, analytics review — research that informs build, not slides.",
            },
            {
              title: "Design systems",
              body: "Figma libraries, tokens, primitives, and shipped React component libraries.",
            },
            {
              title: "Product design",
              body: "End-to-end flows — onboarding, billing, dashboards — designed against measurable outcomes.",
            },
            {
              title: "Prototyping",
              body: "Figma + Framer + code prototypes — fidelity matched to the question we're answering.",
            },
            {
              title: "Supabase / full-stack builds",
              body: "Supabase, Postgres, RLS, edge functions — production apps without a separate backend team.",
            },
            {
              title: "Usability & accessibility",
              body: "Moderated and unmoderated testing, WCAG 2.2 audits, with remediation PRs.",
            },
          ],
          proofPoint: {
            metric: "+24 NPS",
            label: "Average NPS lift across product redesigns measured 90 days post-launch.",
          },
          whyBullets: [
            "Design embedded in engineering squads, not over the wall.",
            "Tokens shared in code and Figma — single source of truth.",
            "Research feeds prioritization, not just inspiration.",
            "Accessibility verified before launch, not after a lawsuit.",
            "Prototypes tested with real users every sprint.",
            "Hand-off includes design system docs and contribution guide.",
          ],
          stack: ["figma", "supabase", "react", "nextjs2", "typescript", "tailwindcss"],
        },
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
        slug: "ar-vr-frameworks",
        description:
          "Unity XR, WebXR, immersive training and visualization platforms.",
        detail: {
          highlight: "XR experiences for Quest, Vision Pro, and the web.",
          subtitle:
            "Unity XR, Unreal, WebXR — training, visualization, and field-ops apps for headsets and the browsers they fall back to.",
          stats: [
            { label: "Headsets supported", value: "9" },
            { label: "Frame target", value: "90fps" },
            { label: "XR apps shipped", value: "30+" },
            { label: "Avg. session length", value: "22 min" },
          ],
          capabilities: [
            {
              title: "Unity XR & PolySpatial",
              body: "Quest, Vision Pro, HoloLens — single codebase with platform-aware input and rendering.",
            },
            {
              title: "WebXR & Three.js",
              body: "Browser-based AR/VR for low-friction distribution and enterprise BYOD scenarios.",
            },
            {
              title: "Spatial UI patterns",
              body: "Hand-tracking, gaze, controller — interaction patterns tuned per device class.",
            },
            {
              title: "3D asset pipelines",
              body: "GLTF / USDZ optimization, LOD, draco / meshopt compression for headset-friendly sizes.",
            },
            {
              title: "Multi-user XR",
              body: "Photon, Normcore, Mirror — co-located and remote collaboration patterns.",
            },
            {
              title: "Enterprise distribution",
              body: "ArborXR, ManageXR, MDM-managed deployment to fleets of headsets.",
            },
          ],
          proofPoint: {
            metric: "60%",
            label: "Reduction in field training time after switching to immersive simulators.",
          },
          whyBullets: [
            "Frame budgets honored per headset class.",
            "Comfort tested — locomotion patterns, no induced nausea.",
            "Cross-device builds from a single codebase.",
            "Asset pipelines automated end-to-end.",
            "Distribution wired to MDM, not sideloaded.",
            "Hand-off includes content author tooling and runbooks.",
          ],
          stack: ["typescript", "nodejs", "react"],
        },
      },
      {
        title: "Core Connected Systems",
        slug: "connected-systems",
        description:
          "IoT mesh, blockchain ledgers, Smart TV apps, wearables firmware.",
        detail: {
          highlight: "IoT, wearables, Smart TV, and on-chain — under one team.",
          subtitle:
            "Embedded firmware, BLE / LoRa / cellular fleets, Smart TV apps, and audited on-chain systems — engineered to survive the field.",
          stats: [
            { label: "Devices in fleet", value: "1.2M+" },
            { label: "OTA success", value: "99.6%" },
            { label: "Smart TV apps live", value: "40+" },
            { label: "Audit-pass rate", value: "100%" },
          ],
          capabilities: [
            {
              title: "IoT firmware & gateways",
              body: "ESP32, STM32, nRF, Yocto Linux — Zephyr / FreeRTOS / Embedded Rust where it fits.",
            },
            {
              title: "Fleet management",
              body: "AWS IoT, Azure IoT Hub, Balena, Mender — provisioning, OTA, telemetry, alerts.",
            },
            {
              title: "Wearables",
              body: "WearOS, watchOS, custom BLE peripherals — battery-life-first engineering.",
            },
            {
              title: "Smart TV / OTT",
              body: "Roku, Tizen, webOS, Apple TV, Fire TV — same content app, all the living-room targets.",
            },
            {
              title: "Blockchain & on-chain",
              body: "Solidity, Move, Anchor — auditable smart contracts, hardware-wallet flows, custody integrations.",
            },
            {
              title: "Edge AI",
              body: "TensorRT, CoreML, ONNX — vision and audio inference on-device, offline-capable.",
            },
          ],
          proofPoint: {
            metric: "99.6%",
            label: "OTA update success rate across the device fleets we operate today.",
          },
          whyBullets: [
            "Firmware engineered for power and over-the-air realities.",
            "OTA pipelines staged, signed, and observable.",
            "Smart TV apps tested on real hardware, not just emulators.",
            "Smart contracts independently audited before mainnet.",
            "Telemetry respects user privacy and applicable regulations.",
            "Hand-off includes fleet operator playbooks.",
          ],
          stack: ["python", "nodejs", "typescript", "go", "aws", "docker"],
        },
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
        slug: "financial-saas",
        description:
          "Ledger systems, reconciliation engines, treasury automation.",
        techIcons: ["postgresql", "python"],
        detail: {
          highlight: "ledgers, recon, and treasury that reconcile to the penny.",
          subtitle:
            "Double-entry ledgers, reconciliation engines, treasury automation, and partner-facing APIs — engineered to the auditor's standard, not the demo's.",
          stats: [
            { label: "Daily txns", value: "5M+" },
            { label: "Recon variance", value: "$0.00" },
            { label: "Settlement SLA", value: "T+0" },
            { label: "Compliance frameworks", value: "PCI, SOC 2, SOX" },
          ],
          capabilities: [
            {
              title: "Double-entry ledgers",
              body: "Append-only, idempotent, multi-currency — built on Postgres with materialized balances.",
            },
            {
              title: "Reconciliation engines",
              body: "Match against banks, processors, marketplaces — explainable mismatches, audit trails.",
            },
            {
              title: "Treasury automation",
              body: "Cash positioning, sweeps, FX hedging integrations, payment file generation.",
            },
            {
              title: "Payments & disbursements",
              body: "Stripe, Adyen, Modern Treasury, ACH, SEPA, real-time rails — with retry and dispute logic.",
            },
            {
              title: "Compliance & reporting",
              body: "SOX, PCI-DSS, SOC 2 — controls implemented in code, evidence collected automatically.",
            },
            {
              title: "Partner APIs",
              body: "OpenAPI specs, OAuth2, mTLS, webhook reliability — APIs partners actually want to integrate.",
            },
          ],
          proofPoint: {
            metric: "$0.00",
            label: "Reconciliation variance across the ledgers we operate — accuracy is non-negotiable.",
          },
          whyBullets: [
            "Ledgers append-only and idempotent by design.",
            "Reconciliation explainable to non-engineers.",
            "Audit evidence collected continuously, not at year-end.",
            "Engineers with banking and fintech domain depth.",
            "Webhooks with retry, idempotency, and replay tooling.",
            "Operate-what-we-build — same team on-call.",
          ],
          stack: ["postgresql", "python", "nodejs", "go", "kubernetes", "aws"],
        },
      },
      {
        title: "Microsoft Ecosystem",
        slug: "microsoft-ecosystem",
        description:
          "Azure-native apps, Dynamics 365 extensions, SharePoint platforms.",
        techIcons: ["microsoft", "azure"],
        detail: {
          highlight: "Microsoft-stack platforms, engineered the modern way.",
          subtitle:
            ".NET 8, Azure-native architectures, Dynamics 365 customization, Power Platform, and SharePoint — built by engineers, not just consultants.",
          stats: [
            { label: ".NET services shipped", value: "180+" },
            { label: "Azure subscriptions", value: "60+" },
            { label: "Dynamics customizations", value: "120+" },
            { label: "Power Platform apps", value: "200+" },
          ],
          capabilities: [
            {
              title: ".NET 8 / C#",
              body: "Minimal APIs, Aspire, AOT — modern .NET deployed to Azure, AKS, or anywhere Linux runs.",
            },
            {
              title: "Azure-native apps",
              body: "AKS, App Service, Functions, Service Bus, Cosmos — wired with Managed Identity end-to-end.",
            },
            {
              title: "Dynamics 365",
              body: "Sales, Customer Service, F&O, Business Central — plugins, PCFs, and integrations.",
            },
            {
              title: "Power Platform",
              body: "Power Apps, Power Automate, Power Pages — wired to Dataverse with ALM and governance.",
            },
            {
              title: "SharePoint & M365",
              body: "SPFx, Graph API, Teams apps — modern, code-first SharePoint and Teams integrations.",
            },
            {
              title: "Identity & security",
              body: "Entra ID, Conditional Access, PIM — zero-trust posture by default.",
            },
          ],
          proofPoint: {
            metric: "60+",
            label: "Azure tenants we operate — across regulated and consumer workloads.",
          },
          whyBullets: [
            "Modern .NET — not legacy WebForms or old WCF.",
            "Infra in Bicep / Terraform — clickops avoided.",
            "Dynamics customizations source-controlled and ALM-governed.",
            "Power Platform with naming, security, and ALM standards.",
            "Identity wired with Managed Identity, not shared secrets.",
            "Hand-off includes ALM playbooks and operator runbooks.",
          ],
          stack: ["microsoft", "azure", "typescript", "nodejs", "postgresql", "docker"],
        },
      },
      {
        title: "Open-Source Core",
        slug: "open-source-core",
        description:
          "Self-hosted ERPs, OSS infrastructure, license-clean stacks.",
        detail: {
          highlight: "OSS-first stacks you'll never be priced out of.",
          subtitle:
            "Self-hosted ERPs, identity, observability, and data infrastructure — vendor-neutral platforms you own end-to-end.",
          stats: [
            { label: "OSS platforms deployed", value: "120+" },
            { label: "License cost saved", value: "$8M+" },
            { label: "Migrations completed", value: "60+" },
            { label: "Avg. uptime", value: "99.5%" },
          ],
          capabilities: [
            {
              title: "Self-hosted ERPs",
              body: "Odoo, ERPNext, Frappe — customized, hardened, and operated against enterprise SLAs.",
            },
            {
              title: "Identity & access",
              body: "Keycloak, Authelia, Ory — SSO, OIDC, and policy engines you control.",
            },
            {
              title: "Observability stacks",
              body: "Grafana, Loki, Tempo, Mimir, OpenTelemetry — alternatives to costly SaaS telemetry.",
            },
            {
              title: "Data & messaging",
              body: "Postgres, ClickHouse, NATS, Kafka, Redpanda — owned and operated at scale.",
            },
            {
              title: "Container & platform",
              body: "Kubernetes, Cilium, Argo, Crossplane — modern platform engineering without lock-in.",
            },
            {
              title: "SaaS-to-OSS migrations",
              body: "Repatriation playbooks from Datadog, Auth0, Stripe Tax, and others — when economics flip.",
            },
          ],
          proofPoint: {
            metric: "$8M+",
            label: "Software-license spend retired across OSS migrations we've delivered.",
          },
          whyBullets: [
            "License audits done upfront — no compliance surprises.",
            "Platforms operated with runbooks and SLOs.",
            "Upgrade cadences documented and rehearsed.",
            "Hardening reviewed against CIS / NIST baselines.",
            "Backup, restore, and DR drills run quarterly.",
            "Hand-off includes a 90-day operator retainer.",
          ],
          stack: ["postgresql", "redis", "kubernetes", "docker", "terraform", "github"],
        },
      },
      {
        title: "Corporate Tools",
        slug: "corporate-tools",
        description:
          "Dayforce, SAP, Stibo MDM, Workday integrations and customizations.",
        detail: {
          highlight: "SAP, Workday, Dayforce — integrated cleanly.",
          subtitle:
            "Customizations and integrations for the systems of record your finance, HR, and supply-chain teams already live in.",
          stats: [
            { label: "Integrations live", value: "300+" },
            { label: "Enterprises served", value: "80+" },
            { label: "Sync latency", value: "<2min" },
            { label: "Audit-pass rate", value: "100%" },
          ],
          capabilities: [
            {
              title: "SAP integrations",
              body: "S/4HANA, ECC, BTP — REST/OData/IDoc connectors with retry, dedupe, and lineage.",
            },
            {
              title: "Workday",
              body: "RaaS reports, Web Services, EIBs, Workday Studio — bi-directional with downstream systems.",
            },
            {
              title: "Dayforce / UKG / ADP",
              body: "Payroll, T&A, and HR integrations engineered for accuracy at scale.",
            },
            {
              title: "Stibo / Informatica MDM",
              body: "Master-data flows, golden-record management, and downstream propagation.",
            },
            {
              title: "Integration platforms",
              body: "MuleSoft, Boomi, Workato, Tray, n8n — chosen by fit, not bias.",
            },
            {
              title: "Custom middleware",
              body: "Bespoke integration services when COTS platforms can't reach — typed, tested, observable.",
            },
          ],
          proofPoint: {
            metric: "<2min",
            label: "End-to-end sync latency across enterprise integrations we operate.",
          },
          whyBullets: [
            "Integration contracts versioned and documented.",
            "Replay tooling for every event-driven flow.",
            "Lineage and audit trails wired in from day one.",
            "Engineers with deep SAP, Workday, and Dayforce experience.",
            "Vendor-neutral — we pick platforms by fit, not by partnership.",
            "Hand-off includes integration catalog and operator runbook.",
          ],
          stack: ["microsoft", "azure", "nodejs", "python", "postgresql", "docker"],
        },
      },
    ],
  },
];

// Helper: find sub-service by category + slug
export function findServiceItem(categoryKey: string, itemSlug: string) {
  const category = SERVICE_CATEGORIES.find((c) => c.key === categoryKey);
  if (!category) return null;
  const item = category.items.find((i) => i.slug === itemSlug);
  if (!item) return null;
  return { category, item };
}

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
