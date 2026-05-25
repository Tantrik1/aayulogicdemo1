'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cpu,
  Terminal,
  Server,
  Code2,
  GitBranch,
  Zap,
  Gauge,
  ArrowUpRight,
  Sparkles,
  Network,
  Box,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { easingCurve } from '@/lib/utils';

const CHALLENGES = [
  {
    icon: GitBranch,
    title: 'Velocity Without Wreckage',
    body: 'Shipping daily without breaking customer integrations. Trunk-based, feature-flagged, observable from commit through canary.',
  },
  {
    icon: Server,
    title: 'Scale Without a Rewrite',
    body: 'Reaching the next order of magnitude in users, traffic, or data — without the &ldquo;we need to rewrite in Rust&rdquo; conversation.',
  },
  {
    icon: Gauge,
    title: 'FinOps That Doesn&apos;t Hurt',
    body: 'Cloud bills doubling every six months. Right-sizing, request-batching, and architectural cuts that recover 30–60% with zero downtime.',
  },
  {
    icon: Network,
    title: 'API as a Product',
    body: 'Public APIs that customers build on. Versioning, metering, SDK generation, dev portal — not the spec hand-written in Confluence.',
  },
];

const CAPABILITIES = [
  {
    title: 'Architecture Optimization',
    description:
      'Re-platforming legacy stacks to cloud-native. Bounded-context analysis, strangler-fig migration, and incremental cutover playbooks.',
  },
  {
    title: 'MVP Acceleration',
    description:
      'Production-grade in 12 weeks, not 12 months. Preconfigured stacks, validated UX patterns, and ship-ready CI/CD from day one.',
  },
  {
    title: 'Scale Engineering',
    description:
      'Sharding, queue tuning, read-replica fanout, caching architecture, and connection-pool right-sizing for the next 10x.',
  },
  {
    title: 'Developer Tooling',
    description:
      'Internal platforms, CLIs, golden-path templates, and SDKs that turn org-wide best practices into the path of least resistance.',
  },
  {
    title: 'API Productization',
    description:
      'Public APIs with metering, rate-limit tiers, SDK auto-generation, dev portal, and lifecycle tooling for breaking-change comms.',
  },
  {
    title: 'FinOps & Cost Tuning',
    description:
      'Cloud bill audits, right-sizing, reserved capacity strategy, and architectural recommendations that cut spend without service risk.',
  },
];

const COMPLIANCE = [
  { name: 'SOC 2 Type II', body: 'Customer-facing trust report' },
  { name: 'ISO 27001', body: 'Information security — Aayulogic certified' },
  { name: 'GDPR & CCPA', body: 'Data residency and consent automation' },
  { name: 'HIPAA / PCI-DSS', body: 'When customers run regulated workloads' },
  { name: 'CIS Benchmarks', body: 'Hardening baselines across cloud accounts' },
  { name: 'SLSA Level 3', body: 'Supply-chain integrity in CI/CD' },
];

const CASE_STUDY = {
  client: 'Helix Capital',
  metric: '4s → 84ms p99',
  headline: 'A trading engine rebuilt in 5 months — every sprint commitment met.',
  body: 'We rebuilt Helix&apos;s trading engine from monolith to event-driven services. Latency spikes that peaked at 4 seconds collapsed to a steady 84ms p99. Not a single sprint commitment was missed. Their VP of Engineering signed up for a second engagement before the first one closed.',
  tags: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL', 'Datadog'],
  testimonial:
    'Aayulogic rebuilt our trading engine in under five months. We went from 4-second latency spikes to a steady 84ms p99 — without missing a single sprint commitment.',
  author: 'Daniel Kerr',
  role: 'VP of Engineering',
};

const STATS = [
  { value: '12 wk', label: 'MVP to production' },
  { value: '10x', label: 'Typical scale headroom delivered' },
  { value: '40%', label: 'Average cloud cost reduction' },
  { value: '15', label: 'SaaS engagements live' },
];

const WHY_US = [
  'Architecture reviews that move the needle — not decks that ladder up to nothing.',
  'Engineers who have shipped at FAANG and at Series A — both registers, on demand.',
  'Trunk-based, feature-flagged, observable shipping practices wired into CI.',
  'Bounded-context modeling that survives the next product-market pivot.',
  'FinOps recommendations measured in actual bill deltas, not theoretical savings.',
  'API productization playbook with OpenAPI, SDK gen, and dev portal templates.',
  'SLSA-aligned supply chain across build, sign, and provenance.',
  'Same delivery team from MVP through scale to long-tail platform owner.',
];

// Animated terminal lines
const TERMINAL_LINES = [
  { type: 'cmd', text: '$ aayulogic deploy --env prod --canary 5%' },
  { type: 'log', text: '> compiling typescript ........ ok' },
  { type: 'log', text: '> running migrations 0142..0147 ok' },
  { type: 'log', text: '> rollout: canary 5% → 25% → 100%' },
  { type: 'log', text: '> p99 latency: 84ms · 5xx: 0' },
  { type: 'ok', text: '✓ deployed in 47s · zero downtime' },
];

function Terminal3D() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-orange-300/20 bg-[#0B0D12] p-4 shadow-[0_30px_80px_-20px_rgba(251,146,60,0.4)] font-mono text-[12px] leading-relaxed">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 text-[10px] uppercase tracking-widest text-white/40">aayulogic@prod</span>
      </div>
      <div className="space-y-1">
        {TERMINAL_LINES.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.25, ease: 'easeOut' }}
            className={
              l.type === 'cmd'
                ? 'text-cyan-300'
                : l.type === 'ok'
                ? 'text-orange-300 font-bold'
                : 'text-white/70'
            }
          >
            {l.text}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: 2 }}
          className="text-cyan-300"
        >
          $ <span className="inline-block w-2 h-3 bg-cyan-300 align-middle" />
        </motion.div>
      </div>
    </div>
  );
}

export function TechnologyClient() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/industries" className="hover:text-brand-blue transition-colors">Industries</Link>
          <span>/</span>
          <span className="text-brand-navy font-medium">Technology & SaaS</span>
        </div>
      </div>

      {/* Hero — slate / electric blue / orange terminal vibe */}
      <section className="relative overflow-hidden bg-[#0B0D12] text-white pt-24 pb-24 sm:pt-28 sm:pb-32">
        {/* Background grid + glows */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at top, black 35%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[620px] h-[620px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.35) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute top-1/3 -left-40 w-[560px] h-[560px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-orange-300/30 mb-6"
            >
              <Cpu className="w-3.5 h-3.5 text-orange-300" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-200">
                Technology & SaaS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance"
            >
              Architecture reviews that{' '}
              <span
                className="inline-block"
                style={{
                  backgroundImage: 'linear-gradient(120deg, #FB923C 0%, #FBBF24 30%, #60A5FA 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                move the needle, not just the deck.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className="mt-7 text-lg sm:text-xl text-slate-300/85 leading-relaxed max-w-2xl"
            >
              MVP acceleration, scale engineering, FinOps that recovers
              real dollars, API productization. We engineer for the next
              10x — and the one after it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-[#0B0D12] overflow-hidden shadow-2xl bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400 hover:from-orange-200 hover:to-amber-200 transition-all"
              >
                <span>Scope a SaaS Build</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#case-study"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-orange-300/40 text-white hover:border-orange-200 hover:bg-white/5 transition-colors"
              >
                Read the Helix Case Study
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Terminal visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-5"
          >
            <Terminal3D />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
          className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-orange-300/20 pt-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-orange-400/50 pl-4">
              <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{s.value}</div>
              <div className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-700 mb-3">
              What Keeps VPs of Engineering Up At Night
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
                  transition={{ duration: 0.45, delay: idx * 0.07, ease: easingCurve.industrial }}
                  className="group flex gap-5 p-7 rounded-xl bg-white border border-orange-100 hover:border-orange-300 hover:shadow-[0_20px_45px_-15px_rgba(251,146,60,0.25)] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-blue-600 transition-all">
                    <Icon className="w-6 h-6 text-orange-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-orange-700 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-700 mb-3">
              Our Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Six platform-grade practices, ready to embed.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: easingCurve.industrial }}
                className="group p-6 rounded-xl bg-white border border-orange-100 hover:border-orange-300 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div
                  className="text-3xl font-bold mb-3"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #EA580C 0%, #2563EB 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-orange-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-700 mb-3">
              Trust & Supply Chain
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              SOC 2 by reflex. Supply chain by design.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              SaaS customers buy trust as much as features. We ship SOC 2-ready
              controls, hardened cloud baselines, and SLSA-aligned CI/CD so
              your security questionnaire returns clean.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-orange-100 bg-orange-50/50 p-4">
                <Box className="w-6 h-6 text-orange-700 mb-2" />
                <div className="text-xs font-bold text-orange-900">SLSA Level 3</div>
                <div className="text-[10px] text-orange-700/70 mt-0.5">Build provenance signed</div>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                <Zap className="w-6 h-6 text-blue-700 mb-2" />
                <div className="text-xs font-bold text-blue-900">CIS Hardened</div>
                <div className="text-[10px] text-blue-700/70 mt-0.5">Baselines auto-enforced</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {COMPLIANCE.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 p-4 rounded-lg bg-orange-50/40 border border-orange-100"
                >
                  <Code2 className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-brand-navy">{c.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{c.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section
        id="case-study"
        className="relative py-20 sm:py-28 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B0D12 0%, #1E3A8A 60%, #C2410C 100%)' }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.45) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-300 mb-3">
                Case Study · {CASE_STUDY.client}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {CASE_STUDY.headline}
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <Sparkles className="w-5 h-5 text-orange-300" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-300">Outcome</div>
                  <div className="text-xl font-bold text-white">{CASE_STUDY.metric}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-orange-50/85 leading-relaxed">{CASE_STUDY.body}</p>

              <div className="flex flex-wrap gap-2">
                {CASE_STUDY.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-orange-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <blockquote className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <p className="text-sm sm:text-base text-white leading-relaxed mb-4 italic">
                  &ldquo;{CASE_STUDY.testimonial}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    DK
                  </div>
                  <div>
                    <div className="text-sm font-bold">{CASE_STUDY.author}</div>
                    <div className="text-xs text-orange-200/70">
                      {CASE_STUDY.role}, {CASE_STUDY.client}
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-700 mb-3">
              Why Technology Picks Aayulogic
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Platform engineers who think in production, not papers.
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_US.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-lg bg-orange-50/40 border border-orange-100"
              >
                <Terminal className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-navy leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        eyebrow="Scope a Platform Engagement"
        title="Send the architecture brief. We'll respond with a recommendation."
        body="SaaS teams don&apos;t have time for vendor questionnaires. Share your stack, scale targets, and burn rate — we&apos;ll come back with an architecture and engagement model within two business days."
        primaryLabel="Send Brief"
        secondaryLabel="Read Case Studies"
      />
      <Footer />
    </>
  );
}
