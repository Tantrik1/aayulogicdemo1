'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Landmark,
  ShieldCheck,
  Lock,
  AlertTriangle,
  TrendingUp,
  Layers,
  GitBranch,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { easingCurve } from '@/lib/utils';

const CHALLENGES = [
  {
    icon: AlertTriangle,
    title: 'Legacy Core Migration',
    body: 'Mainframe COBOL systems with decades of business logic, untested in cloud-native execution models.',
  },
  {
    icon: Lock,
    title: 'Compliance Velocity',
    body: 'PCI-DSS, SOX, Basel III, and country-specific regulators expecting same-week response on platform changes.',
  },
  {
    icon: TrendingUp,
    title: 'Latency at Peak',
    body: 'Settlement windows that can\'t slip, retail apps that need p99 under 100ms, and real-time fraud scoring under 50ms.',
  },
  {
    icon: GitBranch,
    title: 'Multi-Region Resilience',
    body: 'Active-active topologies, RPO/RTO objectives measured in seconds, and data residency rules across jurisdictions.',
  },
];

const SOLUTIONS = [
  {
    title: 'Cloud-Native Core Banking',
    description:
      'Strangler-pattern migrations from mainframe to event-driven microservices. Zero-downtime cutover playbook proven across 5 tier-1 banks.',
  },
  {
    title: 'Real-Time Fraud Routing',
    description:
      'Sub-50ms decision engines combining rules, ML scoring, and graph traversal. PCI-DSS Level 1 compliant by default.',
  },
  {
    title: 'Settlement & Reconciliation',
    description:
      'Idempotent ledger engines, two-phase commit alternatives, and reconciliation tools that close books on time.',
  },
  {
    title: 'Open Banking APIs',
    description:
      'PSD2, FAPI 2.0, and Open Banking standard implementations with consent management and rate-limit governance.',
  },
  {
    title: 'KYC / AML Automation',
    description:
      'Document OCR, biometric liveness, sanctions screening, and case management — integrated into one onboarding pipeline.',
  },
  {
    title: 'Treasury & Risk Platforms',
    description:
      'Position management, FX hedging engines, VaR computation, and regulatory reporting feeds.',
  },
];

const COMPLIANCE = [
  { name: 'PCI-DSS Level 1', body: 'Cardholder data environment hardening' },
  { name: 'SOC 2 Type II', body: 'Annual audit-ready controls' },
  { name: 'ISO 27001', body: 'Aayulogic-certified delivery process' },
  { name: 'ISO 9001', body: 'Quality management for regulated builds' },
  { name: 'GDPR & DPDP', body: 'Data residency and consent flows' },
  { name: 'Basel III aligned', body: 'Capital and liquidity reporting' },
];

const CASE_STUDY = {
  client: 'Nordvik Bank',
  metric: 'Zero downtime',
  headline: 'Mainframe to Go microservices in 14 months — zero settlement misses.',
  body: 'We migrated 4 decades of COBOL business logic to a Go microservices fabric using a strangler-pattern rollout. Bank operations never paused, every reconciliation report closed on time, and per-transaction cost dropped 38%.',
  tags: ['Go', 'Kubernetes', 'PostgreSQL', 'Kafka', 'Vault'],
  testimonial:
    'Migrated our mainframe core to a Go microservices fabric with zero downtime. They run quiet, ship surgical, and document like the SREs we wish we had.',
  author: 'Sara Lindqvist',
  role: 'CTO',
};

const STATS = [
  { value: '15M+', label: 'Daily transactions processed' },
  { value: '< 50ms', label: 'Fraud-scoring p99 latency' },
  { value: '99.99%', label: 'Active-active availability' },
  { value: '5', label: 'Tier-1 bank engagements' },
];

export function BFSIClient() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-brand-blue transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/industries" className="hover:text-brand-blue transition-colors">
            Industries
          </a>
          <span>/</span>
          <span className="text-brand-navy font-medium">Banking & Digital Finance</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy via-brand-navy to-[#0d1f3d] text-white pt-24 pb-24 sm:pt-28 sm:pb-32">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(4,92,179,0.6) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easingCurve.industrial }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 mb-6"
          >
            <Landmark className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
              Banking & Digital Finance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance max-w-4xl"
          >
            Engineering for the{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-clip-text text-transparent">
              regulators in the room.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
            className="mt-7 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl"
          >
            We modernize core banking, ship sub-50ms fraud engines, and prove
            our work to auditors. Five tier-1 bank engagements, fifteen million
            daily transactions, zero settlement misses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-brand-navy overflow-hidden shadow-lg bg-white hover:bg-brand-cyan transition-colors"
            >
              <span>Scope a Banking Build</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#case-study"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Read the Nordvik Case Study
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl"
          >
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-brand-cyan/40 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {s.value}
                </div>
                <div className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges we solve */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              What Keeps Banking CTOs Up At Night
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              The four hard problems we solve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CHALLENGES.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.07,
                    ease: easingCurve.industrial,
                  }}
                  className="group flex gap-5 p-7 rounded-xl bg-white border border-brand-blue/12 hover:border-brand-cyan/45 hover:shadow-[0_20px_45px_-15px_rgba(4,92,179,0.2)] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/8 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan transition-all">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our solutions */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Six engineering practices, banking-tuned.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: easingCurve.industrial,
                }}
                className="group p-6 rounded-xl bg-white border border-brand-blue/10 hover:border-brand-cyan/40 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div className="text-3xl font-bold bg-gradient-to-br from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & certifications */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Compliance & Certifications
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Audit-ready by default.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Our delivery process is ISO 27001 and ISO 9001 certified.
              Engagement-level compliance scaffolding ships in the first sprint —
              not the last one.
            </p>

            <div className="mt-7 flex items-center gap-6">
              <div className="relative w-20 h-20 rounded-lg bg-white shadow-md p-3 flex items-center justify-center">
                <Image
                  src="/ISO-27001.png"
                  alt="ISO 27001"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative w-20 h-20 rounded-lg bg-white shadow-md p-3 flex items-center justify-center">
                <Image
                  src="/ISO-9001.png"
                  alt="ISO 9001"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {COMPLIANCE.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 p-4 rounded-lg bg-brand-light/40 border border-brand-blue/10"
                >
                  <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-brand-navy">
                      {c.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{c.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section id="case-study" className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
                Case Study · {CASE_STUDY.client}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {CASE_STUDY.headline}
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <Sparkles className="w-5 h-5 text-brand-cyan" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
                    Outcome
                  </div>
                  <div className="text-xl font-bold text-white">
                    {CASE_STUDY.metric}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-slate-300 leading-relaxed">
                {CASE_STUDY.body}
              </p>

              <div className="flex flex-wrap gap-2">
                {CASE_STUDY.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <blockquote className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <p className="text-sm sm:text-base text-white leading-relaxed mb-4 italic">
                  "{CASE_STUDY.testimonial}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white text-xs font-bold">
                    SL
                  </div>
                  <div>
                    <div className="text-sm font-bold">{CASE_STUDY.author}</div>
                    <div className="text-xs text-slate-400">
                      {CASE_STUDY.role}, {CASE_STUDY.client}
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why us bullets */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Why Banks Pick Aayulogic
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Tier-1 delivery muscle without the tier-1 markup.
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Engineers who have shipped settlement engines in production.',
              'Strangler-pattern migration playbook proven across 5 banks.',
              'Real-time fraud scoring under 50ms — not "near real-time".',
              'Single-tenant deployment for regulated workloads.',
              'Same delivery team from architecture through production.',
              'Auditor-friendly documentation generated as a side-effect.',
              'Multi-region active-active topology expertise.',
              'Open Banking, PSD2, and FAPI 2.0 reference implementations.',
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-lg bg-brand-light/40 border border-brand-blue/10"
              >
                <Layers className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-navy leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        eyebrow="Scope an Engagement"
        title="Send your architecture brief. We'll respond with a recommendation."
        body="Banking teams don't have time for vendor questionnaires. Share your roadmap — we'll send back an architecture sketch and recommended engagement model within two business days."
        primaryLabel="Send Brief"
        secondaryLabel="Read Case Studies"
      />
      <Footer />
    </>
  );
}
