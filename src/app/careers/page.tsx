'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Briefcase,
  ShieldCheck,
  Sparkles,
  Search,
  Globe2,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { easingCurve, motionConfig } from '@/lib/utils';

const HRMS_BASE = 'https://hrms.realhrsoft.com/careers';

type Role = {
  title: string;
  slug: string;
  team: string;
  type: string;
  location: string;
  tags: string[];
};

const ROLES: Role[] = [
  {
    title: 'Senior Backend Engineer',
    slug: 'senior-backend-engineer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Kathmandu',
    tags: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    title: 'Frontend Engineer — Vue.js',
    slug: 'frontend-engineer-vue',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Kathmandu',
    tags: ['Vue.js', 'TypeScript', 'Vite'],
  },
  {
    title: 'QA Engineer',
    slug: 'qa-engineer',
    team: 'Quality Assurance',
    type: 'Full-time',
    location: 'Kathmandu',
    tags: ['Automation', 'CI', 'Test Pyramid'],
  },
  {
    title: 'DevOps Engineer',
    slug: 'devops-engineer',
    team: 'Infrastructure',
    type: 'Full-time',
    location: 'Kathmandu',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    title: 'Business Development Manager',
    slug: 'business-development-manager',
    team: 'Growth — Canada & US',
    type: 'Full-time',
    location: 'Toronto',
    tags: ['B2B', 'Enterprise', 'Sales'],
  },
  {
    title: 'Business Partnerships Manager',
    slug: 'business-partnerships-manager',
    team: 'Partnerships — Global',
    type: 'Full-time',
    location: 'Remote / Toronto',
    tags: ['Alliances', 'Channel', 'GTM'],
  },
];

const TEAMS = Array.from(new Set(ROLES.map((r) => r.team)));

const STATS = [
  { value: 'Est. 2016', label: 'Hub established in Kathmandu' },
  { value: '50+', label: 'Engineers on the team' },
  { value: 'ISO', label: '9001 & 27001 certified' },
  { value: '18+', label: 'Industries we have built for' },
];



const TECH_STACK = ['Python', 'Django', 'Vue.js', 'Flutter', 'AWS', 'Docker', 'PostgreSQL', 'Redis'];

function roleHref(slug: string) {
  return `${HRMS_BASE}?role=${slug}`;
}

import { FAQSection } from '@/components/FAQSection';

const careersFaqs = [
  {
    q: "What's it like to work at Aayulogic?",
    a: "We have a senior-heavy team, async-first communication, clear processes, and a solid focus on engineering craft. We support hybrid and remote work across all our hubs."
  },
  {
    q: "Do you hire junior developers?",
    a: "We rarely hire juniors. Our production roles are typically senior-heavy (5+ years of experience with real production systems) because our clients expect senior engineering velocity and quality."
  },
  {
    q: "Is remote work supported?",
    a: "Yes. We operate as a remote-first company across our offices in Toronto, Lalitpur, and Brisbane. Async communication is a core tool in how we build and collaborate."
  },
  {
    q: "How long does the hiring process take?",
    a: "Our hiring process is thorough but fast, usually taking 3-4 weeks across four stages: initial screening, technical discussion, paid work sample project, and final leadership review."
  }
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <Hero />
      <TheWork />
      <CurrentOpenings />
      <FAQSection items={careersFaqs} />
      <FinalCTA />
      <Footer />
    </>
  );
}

// =============================================================================
//  HERO
// =============================================================================

function Hero() {
  const theme = 'dark';

  return (
    <section
      data-theme={theme}
      className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-36 transition-all duration-500 text-white bg-cobalt-premium"
    >
      <div aria-hidden className="cobalt-grain" />

      {/* Dynamic theme overlays for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/10 to-[#0a1c4a]/30"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(4,92,179,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 backdrop-blur transition-all ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/15 text-brand-cyan'
                  : 'bg-brand-blue/8 border-brand-blue/20 text-brand-blue'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Join Aayulogic
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl"
            >
              We are building something real in{' '}
              <span
                className="inline-block"
                style={{
                  backgroundImage:
                    theme === 'dark'
                      ? 'linear-gradient(110deg, #00C2FF 0%, #FFFFFF 100%)'
                      : 'linear-gradient(110deg, #045CB3 0%, #00C2FF 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Kathmandu.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className={`mt-6 text-base sm:text-lg leading-relaxed max-w-2xl transition-colors duration-350 ${
                theme === 'dark' ? 'text-slate-200/90' : 'text-slate-700'
              }`}
            >
              Not a support centre. Not a delivery outpost. An engineering hub that has built and operated enterprise software for commercial banks, developed platforms used by organisations across 18 industries, and earned ISO 9001:2015 and ISO 27001:2022 certification.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#open-roles"
                className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl transition-all shadow-md ${
                  theme === 'dark'
                    ? 'bg-white text-brand-navy hover:bg-brand-cyan hover:shadow-lg'
                    : 'bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-lg'
                }`}
              >
                View all open roles
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={HRMS_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl border transition-all ${
                  theme === 'dark'
                    ? 'border-white/30 text-white hover:border-white hover:bg-white/10'
                    : 'border-brand-blue/40 text-brand-navy hover:border-brand-blue hover:bg-brand-blue/5'
                }`}
              >
                Apply via HRMS portal
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-5"
          >
            <div className={`rounded-2xl border backdrop-blur p-6 transition-all duration-500 ${
              theme === 'dark'
                ? 'border-white/15 bg-white/5 shadow-2xl'
                : 'border-brand-blue/15 bg-white/80 shadow-lg'
            }`}>
              <p className={`text-[10px] font-bold uppercase tracking-[0.22em] mb-4 ${
                theme === 'dark' ? 'text-brand-cyan' : 'text-brand-blue'
              }`}>
                Where we stand
              </p>
              <div className={`grid grid-cols-2 gap-px rounded-xl overflow-hidden ${
                theme === 'dark' ? 'bg-white/10' : 'bg-brand-blue/10'
              }`}>
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className={`p-5 text-center transition-all ${
                      theme === 'dark' ? 'bg-slate-950/40 text-white' : 'bg-slate-50/60 text-brand-navy'
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                      {s.value}
                    </div>
                    <div className={`text-[11px] mt-1 uppercase tracking-wider ${
                      theme === 'dark' ? 'text-white/60' : 'text-slate-500'
                    }`}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className={`mt-5 pt-5 border-t ${
                theme === 'dark' ? 'border-white/10' : 'border-slate-100'
              }`}>
                <p className={`text-xs font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                }`}>
                  Hiring right now
                </p>
                <ul className="space-y-2">
                  {ROLES.slice(0, 3).map((r) => (
                    <li key={r.slug}>
                      <a
                        href={roleHref(r.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-between text-sm transition-colors ${
                          theme === 'dark' ? 'text-white/85 hover:text-white' : 'text-slate-700 hover:text-brand-blue'
                        }`}
                      >
                        <span className="truncate">{r.title}</span>
                        <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          theme === 'dark' ? 'text-brand-cyan' : 'text-brand-blue'
                        }`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



// =============================================================================
//  THE WORK
// =============================================================================

function TheWork() {
  return (
    <section className="relative bg-slate-50 py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="max-w-3xl mb-10"
        >
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            The Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            What engineering at Aayulogic actually looks like.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
            {[
              {
                label: 'Tech Stack',
                value: (
                  <div className="flex flex-wrap gap-1.5">
                    {TECH_STACK.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-semibold text-brand-blue bg-brand-blue/8 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ),
              },
              {
                label: 'Project Types',
                value: 'Enterprise platforms, custom software for regulated sectors, cloud infrastructure, mobile applications',
              },
              {
                label: 'Team Structure',
                value: 'Cross-functional — engineering, QA, DevOps. Clear ownership. Defined processes.',
              },
              {
                label: 'Onboarding',
                value: 'Structured process. ISO-certified from day one. Architecture review included.',
              },
              {
                label: 'Standards',
                value: 'ISO 9001:2015 and ISO 27001:2022 across all engagements',
              },
            ].map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[140px_1fr] border-b border-slate-100 last:border-b-0"
              >
                <div className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50 border-r border-slate-100">
                  {row.label}
                </div>
                <div className="px-4 py-3 text-sm text-slate-700 leading-relaxed">
                  {typeof row.value === 'string' ? row.value : row.value}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 self-start">
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              The engineering work here is not abstract. It runs payroll for thousands of bank employees on fixed cycles. It processes compliance data for regulated financial institutions. It powers platforms serving national-scale traffic.
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              Every engineer at Aayulogic works to the same standards we built for our most demanding clients — regardless of which project you are on.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-brand-blue bg-brand-blue/8 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-brand-blue bg-brand-blue/8 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                ISO 27001:2022
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-brand-blue bg-brand-blue/8 rounded-full">
                <Globe2 className="w-3.5 h-3.5" />
                Canadian Inc.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  CURRENT OPENINGS — searchable, deeplinked
// =============================================================================

function CurrentOpenings() {
  const [query, setQuery] = useState('');
  const [activeTeam, setActiveTeam] = useState<string>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ROLES.filter((r) => {
      if (activeTeam !== 'All' && r.team !== activeTeam) return false;
      if (!q) return true;
      const hay = [r.title, r.team, r.location, ...r.tags].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [query, activeTeam]);

  return (
    <section id="open-roles" className="relative py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
        >
          <div>
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-3">
              Current Openings
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              Open roles — Kathmandu hub.
            </h2>
          </div>
          <a
            href={HRMS_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-navy"
          >
            See all on HRMS portal
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by role, team, location, or skill"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', ...TEAMS].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTeam(t)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTeam === t
                    ? 'bg-brand-blue text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Roles table */}
        <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-sm text-slate-500">
              No roles match your search.{' '}
              <a
                href={HRMS_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue font-semibold"
              >
                Browse all on HRMS →
              </a>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filtered.map((r) => (
                <a
                  key={r.slug}
                  href={roleHref(r.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 sm:grid-cols-[2fr_1.2fr_1fr_auto] gap-3 items-center p-5 hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {r.title}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {r.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-100 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">{r.team}</div>
                  <div className="text-sm text-slate-500">
                    {r.location} · {r.type}
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-white bg-brand-blue rounded-lg group-hover:bg-brand-navy transition-colors">
                      Apply
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Don't see a fit */}
        <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200 grid sm:grid-cols-[1fr_auto] gap-4 items-center">
          <div>
            <h4 className="text-base font-bold text-brand-navy mb-1">
              Don&apos;t see the right role?
            </h4>
            <p className="text-sm text-slate-600">
              We are always interested in strong engineers. Submit a general application on our HRMS portal.
            </p>
          </div>
          <a
            href={HRMS_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg bg-brand-navy text-white hover:bg-brand-blue transition-colors"
          >
            Submit CV
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  FINAL CTA
// =============================================================================

function FinalCTA() {
  return (
    <section className="relative bg-cobalt-premium text-white py-20 sm:py-24 px-6 text-center overflow-hidden">
      <div aria-hidden className="cobalt-grain" />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)' }}
      />
      <div className="relative max-w-3xl mx-auto">
        <Briefcase className="w-10 h-10 text-brand-cyan mx-auto mb-5" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Ready to do serious engineering work?
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
          Send your CV and a short note about what you are working on.
        </p>
        <a
          href={HRMS_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg hover:shadow-xl transition-all"
        >
          Apply on HRMS portal
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
