'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Pill,
  FlaskConical,
  ShieldCheck,
  ClipboardCheck,
  FileSignature,
  Microscope,
  Beaker,
  Atom,
  ArrowUpRight,
  Sparkles,
  Lock,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { IndustryHero } from '@/components/industry-hero';
import { easingCurve } from '@/lib/utils';

const CHALLENGES = [
  {
    icon: FileSignature,
    title: '21 CFR Part 11 Audit Trails',
    body: 'Electronic records and signatures that survive an FDA inspection. Immutable, attributable, contemporaneous, original, accurate — the ALCOA+ playbook, baked in.',
  },
  {
    icon: ClipboardCheck,
    title: 'CSV That Doesn&apos;t Stop Releases',
    body: 'Computer System Validation aligned with GAMP 5. We ship IQ/OQ/PQ artifacts as a side-effect of CI — not a six-month phase gate.',
  },
  {
    icon: Microscope,
    title: 'Clinical Trial Velocity',
    body: 'eCRF, EDC, ePRO, and randomization systems that hit first-patient-in milestones — without bypassing the controls IRBs require.',
  },
  {
    icon: Atom,
    title: 'R&D Data Provenance',
    body: 'ELN systems, instrument LIMS bridges, and assay management with sample lineage you can re-trace to a specific freezer in 2018.',
  },
];

const CAPABILITIES = [
  {
    title: 'GxP-Validated Systems',
    description:
      'GAMP 5 risk classification, CSV documentation, IQ/OQ/PQ deliverables, and 21 CFR Part 11 e-signatures generated from the codebase.',
  },
  {
    title: 'Clinical Trial Platforms',
    description:
      'eCRF / EDC, ePRO mobile, randomization & trial supply, central monitoring dashboards. CDISC SDTM and ADaM exports out of the box.',
  },
  {
    title: 'R&D & ELN',
    description:
      'Electronic Lab Notebooks, instrument LIMS bridges, assay management, and sample chain-of-custody with cryogenic-storage integration.',
  },
  {
    title: 'Regulatory Submission',
    description:
      'eCTD prep, lifecycle management, response automation for FDA, EMA, PMDA. Plus health-authority correspondence tracking.',
  },
  {
    title: 'Field Force CRM',
    description:
      'HCP-engagement CRM with sample accountability, consent management, and tablet-first reps. PDMA & Sunshine Act compliant.',
  },
  {
    title: 'Serialization & Traceability',
    description:
      'DSCSA, EU FMD, and Russia Crypto-Code compliant track-and-trace. Aggregation, exception handling, and CMO data exchange.',
  },
];

const COMPLIANCE = [
  { name: '21 CFR Part 11', body: 'Electronic records & signatures with ALCOA+ controls' },
  { name: 'GAMP 5 / CSV', body: 'Risk-based validation built into the SDLC' },
  { name: 'EU Annex 11', body: 'Computerized systems for EMA regulated environments' },
  { name: 'HIPAA & GDPR', body: 'Patient data privacy across US and EU trials' },
  { name: 'ICH E6 (R2/R3)', body: 'Good Clinical Practice across global trials' },
  { name: 'ISO 27001', body: 'Information security — Aayulogic certified delivery' },
];

const CASE_STUDY = {
  client: 'Atlas Pharma',
  metric: 'Zero audit findings',
  headline: 'A GxP platform shipped in 9 months that passed the FDA Form 483 with zero findings.',
  body: 'We engineered for Atlas&apos;s compliance constraints instead of negotiating around them. Validation evidence was generated automatically from CI runs. CSV documentation matched the codebase line-for-line. The FDA Form 483 came back with zero findings — a first for the program.',
  tags: ['Python', 'Django', '21 CFR Part 11', 'Veeva Vault', 'AWS GovCloud'],
  testimonial:
    'Aayulogic is the only consultancy that engineered for our compliance constraints instead of negotiating around them. Total game-changer for our GxP program.',
  author: 'Marcus Holt',
  role: 'Director, Platform Engineering',
};

const STATS = [
  { value: '21 CFR', label: 'Part 11 default posture' },
  { value: 'GAMP 5', label: 'CSV-aligned SDLC' },
  { value: '9', label: 'Pharma engagements live' },
  { value: 'Zero', label: 'Audit findings across launches' },
];

const WHY_US = [
  'CSV documentation generated from the codebase — not retrofitted.',
  'GAMP 5 risk classification embedded in the architecture review.',
  'eCTD-ready submission packages shipped with every release.',
  'Practicing QA specialists in every delivery squad.',
  'CDISC SDTM and ADaM expertise across phase I–IV.',
  'CMO and partner data-exchange harnesses built before kickoff.',
  'Single-tenant deployment for sponsor and HCP confidentiality.',
  'Validation team that has been audited and survived — repeatedly.',
];

// Molecular structure SVG decoration
function MoleculeOrbit() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="orbCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.4" />
        </radialGradient>
      </defs>

      {/* Orbits */}
      {[0, 60, 120].map((rot) => (
        <ellipse
          key={rot}
          cx="150"
          cy="150"
          rx="120"
          ry="48"
          fill="none"
          stroke="rgba(167,139,250,0.35)"
          strokeWidth="1"
          transform={`rotate(${rot} 150 150)`}
        />
      ))}

      {/* Core */}
      <circle cx="150" cy="150" r="22" fill="url(#orbCore)" />
      <circle cx="150" cy="150" r="32" fill="none" stroke="rgba(167,139,250,0.5)" strokeWidth="1" strokeDasharray="2 4" />

      {/* Electrons (animated) */}
      {[0, 120, 240].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 150 + Math.cos(rad) * 120;
        const cy = 150 + Math.sin(rad) * 48;
        return (
          <motion.g
            key={angle}
            initial={{ rotate: angle }}
            animate={{ rotate: angle + 360 }}
            transition={{ duration: 16 + i * 4, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '150px 150px' }}
          >
            <circle cx={cx} cy={cy} r="7" fill="#06B6D4" />
            <circle cx={cx} cy={cy} r="12" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
          </motion.g>
        );
      })}
    </svg>
  );
}

export function PharmaClient() {
  return (
    <>
      <Header />

      <IndustryHero
        breadcrumbName="Pharma & Life Sciences"
        industry="Pharma & Life Sciences"
        icon={FlaskConical}
        title={
          <>
            Validation as a{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-clip-text text-transparent">
              build artifact, not a phase gate.
            </span>
          </>
        }
        subtitle="21 CFR Part 11 by default. GAMP 5 risk classification in every ADR. We ship GxP platforms — clinical trial systems, ELNs, field force CRMs — that pass FDA Form 483s without rework."
        primary={{ label: 'Scope a GxP Build', href: '#contact' }}
        secondary={{ label: 'Read the case study', href: '#case-study' }}
        stats={STATS}
      />

      {/* Hero — laboratory violet (LEGACY — hidden) */}
      <section className="hidden relative overflow-hidden bg-gradient-to-br from-[#0F0524] via-[#1E0B47] to-[#2A0F5F] text-white pt-24 pb-24 sm:pt-28 sm:pb-32">
        {/* Molecular grid background */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(167,139,250,0.6) 1.5px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.45) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-violet-300/20 mb-6"
            >
              <FlaskConical className="w-3.5 h-3.5 text-violet-300" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-200">
                Pharma & Life Sciences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance"
            >
              Validation as a{' '}
              <span
                className="inline-block"
                style={{
                  backgroundImage: 'linear-gradient(120deg, #C4B5FD 0%, #67E8F9 60%, #A78BFA 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                build artifact, not a phase gate.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className="mt-7 text-lg sm:text-xl text-violet-100/80 leading-relaxed max-w-2xl"
            >
              21 CFR Part 11 by default. GAMP 5 risk classification in every
              ADR. We ship GxP platforms — clinical trial systems, ELNs, field
              force CRMs — that pass FDA Form 483s without rework.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-[#1E0B47] overflow-hidden shadow-lg bg-gradient-to-r from-violet-200 via-white to-cyan-200 hover:from-violet-100 hover:to-cyan-100 transition-all"
              >
                <span>Scope a GxP Build</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#case-study"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-violet-300/40 text-white hover:border-violet-200 hover:bg-white/5 transition-colors"
              >
                Read the Atlas Case Study
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Molecule visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <MoleculeOrbit />
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
          className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-violet-300/15 pt-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-violet-300/50 pl-4">
              <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{s.value}</div>
              <div className="text-xs font-medium text-violet-200/70 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-700 mb-3">
              What Keeps Pharma CIOs Up At Night
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
                  className="group flex gap-5 p-7 rounded-xl bg-white border border-violet-100 hover:border-violet-300 hover:shadow-[0_20px_45px_-15px_rgba(124,58,237,0.2)] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-cyan-500 transition-all">
                    <Icon className="w-6 h-6 text-violet-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-violet-700 transition-colors">
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
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-violet-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-700 mb-3">
              Our Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Six pharma-grade practices, ready to embed.
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
                className="group p-6 rounded-xl bg-white border border-violet-100 hover:border-violet-300 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div
                  className="text-3xl font-bold mb-3"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-violet-700 transition-colors">
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
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-700 mb-3">
              Regulatory Posture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              GxP is not a vendor opinion. It&apos;s a property of the system.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Every commit produces validation evidence. Every release ships
              with traceability matrices and signed CSV deliverables. Auditors
              see the work continuously — not just at gate reviews.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-4">
                <Lock className="w-6 h-6 text-violet-700 mb-2" />
                <div className="text-xs font-bold text-violet-900">ALCOA+ enforced</div>
                <div className="text-[10px] text-violet-700/70 mt-0.5">By platform, not policy</div>
              </div>
              <div className="rounded-xl border border-cyan-100 bg-cyan-50/50 p-4">
                <Beaker className="w-6 h-6 text-cyan-700 mb-2" />
                <div className="text-xs font-bold text-cyan-900">CSV in CI</div>
                <div className="text-[10px] text-cyan-700/70 mt-0.5">IQ/OQ/PQ from pipeline</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {COMPLIANCE.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 p-4 rounded-lg bg-violet-50/40 border border-violet-100"
                >
                  <ShieldCheck className="w-5 h-5 text-violet-700 flex-shrink-0 mt-0.5" />
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
        style={{ background: 'linear-gradient(135deg, #1E0B47 0%, #2A0F5F 60%, #0E7490 100%)' }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.45) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300 mb-3">
                Case Study · {CASE_STUDY.client}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {CASE_STUDY.headline}
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <Sparkles className="w-5 h-5 text-violet-300" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">Outcome</div>
                  <div className="text-xl font-bold text-white">{CASE_STUDY.metric}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-violet-100/80 leading-relaxed">{CASE_STUDY.body}</p>

              <div className="flex flex-wrap gap-2">
                {CASE_STUDY.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-violet-100"
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                    MH
                  </div>
                  <div>
                    <div className="text-sm font-bold">{CASE_STUDY.author}</div>
                    <div className="text-xs text-violet-200/70">
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
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-700 mb-3">
              Why Pharma Picks Aayulogic
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Validation muscle that ships at engineering velocity.
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_US.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-lg bg-violet-50/40 border border-violet-100"
              >
                <Pill className="w-5 h-5 text-violet-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-navy leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        eyebrow="Scope a GxP Engagement"
        title="Send the validation brief. We'll respond with a GAMP 5 risk sketch."
        body="Pharma teams can't waste cycles on vendors who treat compliance as overhead. Share your roadmap — we'll come back with risk classification, a CSV plan, and an engagement model within two business days."
        primaryLabel="Send Brief"
        secondaryLabel="Read Case Studies"
      />
      <Footer />
    </>
  );
}
