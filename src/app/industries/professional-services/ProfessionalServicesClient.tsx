'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpenCheck,
  Brain,
  Award,
  Users,
  TrendingUp,
  ScrollText,
  ArrowUpRight,
  Sparkles,
  Library,
  Lightbulb,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { IndustryHero } from '@/components/industry-hero';
import { easingCurve } from '@/lib/utils';

const CHALLENGES = [
  {
    icon: Users,
    title: 'Cohort Scale Without Cohort Chaos',
    body: 'Synchronous classes for 200, breakouts of 8, and async forums for 12,000 — all in one platform that doesn&apos;t buckle on enrollment day.',
  },
  {
    icon: Brain,
    title: 'Adaptive Paths That Actually Adapt',
    body: 'Skill diagnostics, knowledge graphs, and AI-driven sequencing — without locking learners into a black box they can&apos;t reason about.',
  },
  {
    icon: ScrollText,
    title: 'Assessment Integrity at Scale',
    body: 'Auto-grading that respects rubrics, anti-cheat instrumentation that doesn&apos;t treat every learner like a suspect, and audit trails for accreditors.',
  },
  {
    icon: Award,
    title: 'Credentials That Cross Borders',
    body: 'Open Badges, verifiable credentials, transcript portability — and SIS integrations with universities that still run COBOL.',
  },
];

const CAPABILITIES = [
  {
    title: 'Custom Learning Platforms',
    description:
      'White-label LMS for training providers, bootcamps, and corporate L&D — with your brand, your taxonomy, and your reporting model.',
  },
  {
    title: 'Moodle Customization',
    description:
      'Theme, plugin, and scale tuning for institutions running 100K+ learners. Performance benchmarks shipped with every release.',
  },
  {
    title: 'Adaptive AI Learning',
    description:
      'Personalized paths from skill diagnostics, knowledge-graph traversal, and IRT-based difficulty calibration. Explainable to learners.',
  },
  {
    title: 'Cohort & Bootcamp Tools',
    description:
      'Live + async hybrid delivery, breakout management, peer review workflows, and instructor dashboards built for the high-touch model.',
  },
  {
    title: 'Assessment Engines',
    description:
      'Auto-grading, item-bank management, anti-cheat telemetry, and rubric-driven essay scoring with human-in-the-loop calibration.',
  },
  {
    title: 'Credential Issuance',
    description:
      'Open Badges 3.0, W3C Verifiable Credentials, blockchain-anchored transcripts, and bidirectional SIS connectors.',
  },
];

const COMPLIANCE = [
  { name: 'FERPA & GDPR-EDU', body: 'Student data privacy across US and EU' },
  { name: 'WCAG 2.2 AA', body: 'Accessibility audited per release' },
  { name: 'SCORM & xAPI', body: 'Interoperable learning record stores' },
  { name: 'LTI 1.3 / Advantage', body: 'Standards-compliant tool integrations' },
  { name: '1EdTech Certified', body: 'IMS Global stack compatibility' },
  { name: 'ISO 27001', body: 'Information security — Aayulogic certified' },
];

const CASE_STUDY = {
  client: 'Tomoya Robotics Academy',
  metric: '5x cohort throughput',
  headline: 'A bootcamp platform that lets one instructor mentor five cohorts at FAANG-grade depth.',
  body: 'We embedded with the Tomoya Academy team for two quarters and rebuilt their cohort platform from the ground up. Instructor dashboards that surface struggle in real time. Peer-review queues that route by skill gap. The result: a single mentor now runs five cohorts with the depth that used to take five mentors.',
  tags: ['Next.js', 'PostgreSQL', 'LTI 1.3', 'xAPI', 'OpenAI'],
  testimonial:
    "Their squad embedded with ours for two quarters. By the end, our own engineers were shipping at the pace I&apos;d only seen at FAANG. Velocity is contagious.",
  author: 'Kenji Watanabe',
  role: 'Head of Product',
};

const STATS = [
  { value: '120K+', label: 'Active learners served' },
  { value: '5x', label: 'Instructor throughput gains' },
  { value: 'WCAG', label: '2.2 AA accessibility' },
  { value: '11', label: 'EdTech engagements live' },
];

const WHY_US = [
  'Learning scientists embedded alongside engineers — not bolted on.',
  'IRT and CTT psychometrics implemented, audited, and explainable.',
  'Accessibility audited per release — not as a launch milestone.',
  'Open Badges, xAPI, and LTI 1.3 reference implementations on hand.',
  'Cohort tools tested at 12K-learner scale on enrollment day.',
  'Adaptive engines you can debug — no black-box recommendation hell.',
  'SIS/LMS bridge expertise across PowerSchool, Banner, Canvas, Moodle.',
  'Anti-cheat that respects learners and still satisfies accreditors.',
];

// Learning path visualization — connected nodes
function LearningPath() {
  const nodes = [
    { x: 50, y: 100, label: 'Diagnostic', status: 'done' },
    { x: 150, y: 60, label: 'Foundations', status: 'done' },
    { x: 250, y: 120, label: 'Core', status: 'active' },
    { x: 350, y: 70, label: 'Applied', status: 'pending' },
    { x: 450, y: 110, label: 'Capstone', status: 'pending' },
    { x: 550, y: 60, label: 'Credential', status: 'pending' },
  ];

  return (
    <svg viewBox="0 0 600 200" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="pathGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>

      {/* Connection lines */}
      {nodes.slice(0, -1).map((n, i) => (
        <motion.line
          key={i}
          x1={n.x}
          y1={n.y}
          x2={nodes[i + 1].x}
          y2={nodes[i + 1].y}
          stroke="url(#pathGrad)"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: i * 0.15, ease: 'easeInOut' }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => {
        const fill =
          n.status === 'done' ? '#F59E0B' : n.status === 'active' ? '#6366F1' : '#E2E8F0';
        const stroke =
          n.status === 'active' ? '#6366F1' : n.status === 'done' ? '#D97706' : '#CBD5E1';
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.12, type: 'spring' }}
          >
            {n.status === 'active' && (
              <motion.circle
                cx={n.x}
                cy={n.y}
                r="18"
                fill="none"
                stroke="#6366F1"
                strokeWidth="1.5"
                opacity="0.4"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
              />
            )}
            <circle cx={n.x} cy={n.y} r="10" fill={fill} stroke={stroke} strokeWidth="2" />
            <text
              x={n.x}
              y={n.y + 32}
              fill="#475569"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
            >
              {n.label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

export function ProfessionalServicesClient() {
  return (
    <>
      <Header />

      <IndustryHero
        breadcrumbName="Professional Services & EdTech"
        industry="Professional Services & EdTech"
        icon={GraduationCap}
        title={
          <>
            Learning platforms with{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-clip-text text-transparent">
              pedagogy in their bones.
            </span>
          </>
        }
        subtitle="Adaptive, accessible, accredited. We build learning systems — from cohort bootcamps to enterprise L&D — that learning scientists, not just engineers, would actually use."
        primary={{ label: 'Scope a Learning Build', href: '#contact' }}
        secondary={{ label: 'Read the case study', href: '#case-study' }}
        stats={STATS}
      />

      {/* Hero — academic warm cream / amber / indigo (LEGACY — hidden) */}
      <section className="hidden relative overflow-hidden bg-gradient-to-br from-[#FFFBF1] via-white to-[#F5F3FF] pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
        />
        {/* Notebook-line texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 31px, #6366F1 31px, #6366F1 32px)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-6 shadow-sm"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-800">
                Professional Services & EdTech
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance text-brand-navy"
            >
              Learning platforms with{' '}
              <span
                className="inline-block"
                style={{
                  backgroundImage: 'linear-gradient(120deg, #B45309 0%, #6366F1 60%, #4338CA 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                pedagogy in their bones.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Adaptive, accessible, accredited. We build learning systems —
              from cohort bootcamps to enterprise L&D — that learning
              scientists, not just engineers, would actually use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg bg-gradient-to-r from-amber-600 to-indigo-600 hover:from-amber-500 hover:to-indigo-500 transition-all"
              >
                <span>Scope a Learning Build</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#case-study"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-indigo-200 bg-white text-indigo-800 hover:border-indigo-400 hover:bg-indigo-50 transition-colors"
              >
                Read the Tomoya Case Study
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Learning path visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white border border-amber-100 shadow-[0_30px_60px_-25px_rgba(180,83,9,0.15)] p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BookOpenCheck className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-semibold text-slate-700">Adaptive Learning Path</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">xAPI</span>
              </div>

              <div className="h-44">
                <LearningPath />
              </div>

              <div className="mt-2 grid grid-cols-3 gap-2 text-[10px]">
                <div className="rounded-md bg-amber-50 p-2 border border-amber-100">
                  <div className="font-bold text-amber-900 tabular-nums">4 / 6</div>
                  <div className="text-amber-700/70">modules complete</div>
                </div>
                <div className="rounded-md bg-indigo-50 p-2 border border-indigo-100">
                  <div className="font-bold text-indigo-900 tabular-nums">87%</div>
                  <div className="text-indigo-700/70">mastery</div>
                </div>
                <div className="rounded-md bg-slate-50 p-2 border border-slate-100">
                  <div className="font-bold text-slate-900 tabular-nums">12h</div>
                  <div className="text-slate-600">to credential</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
          className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-amber-200/50 pt-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-amber-400/50 pl-4">
              <div className="text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">{s.value}</div>
              <div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-700 mb-3">
              What Keeps EdTech Leaders Up At Night
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
                  className="group flex gap-5 p-7 rounded-xl bg-white border border-amber-100 hover:border-amber-300 hover:shadow-[0_20px_45px_-15px_rgba(180,83,9,0.2)] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-indigo-600 transition-all">
                    <Icon className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-amber-700 transition-colors">
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
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-amber-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-700 mb-3">
              Our Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Six learning-grade practices, ready to embed.
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
                className="group p-6 rounded-xl bg-white border border-amber-100 hover:border-amber-300 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div
                  className="text-3xl font-bold mb-3"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #B45309 0%, #4338CA 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-amber-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance / Standards */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-700 mb-3">
              Standards & Interoperability
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Standards-first. Lock-in last.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Learning platforms outlive their first vendor. We build on
              standards — LTI 1.3, xAPI, SCORM, Open Badges — so your data,
              learners, and credentials travel with you.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                <Library className="w-6 h-6 text-amber-700 mb-2" />
                <div className="text-xs font-bold text-amber-900">WCAG 2.2 AA</div>
                <div className="text-[10px] text-amber-700/70 mt-0.5">Per-release audit</div>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                <Lightbulb className="w-6 h-6 text-indigo-700 mb-2" />
                <div className="text-xs font-bold text-indigo-900">1EdTech</div>
                <div className="text-[10px] text-indigo-700/70 mt-0.5">Certified compatibility</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {COMPLIANCE.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 p-4 rounded-lg bg-amber-50/40 border border-amber-100"
                >
                  <BookOpenCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
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
        style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #3730A3 50%, #B45309 100%)' }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(252,211,77,0.45) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300 mb-3">
                Case Study · {CASE_STUDY.client}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {CASE_STUDY.headline}
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300">Outcome</div>
                  <div className="text-xl font-bold text-white">{CASE_STUDY.metric}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-amber-50/85 leading-relaxed">{CASE_STUDY.body}</p>

              <div className="flex flex-wrap gap-2">
                {CASE_STUDY.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-amber-100"
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                    KW
                  </div>
                  <div>
                    <div className="text-sm font-bold">{CASE_STUDY.author}</div>
                    <div className="text-xs text-amber-200/80">
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
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-700 mb-3">
              Why EdTech Picks Aayulogic
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Learning depth that engineers — and learners — can trust.
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_US.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-lg bg-amber-50/40 border border-amber-100"
              >
                <TrendingUp className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-navy leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        eyebrow="Scope an EdTech Engagement"
        title="Send the curriculum brief. We'll respond with a platform sketch."
        body="EdTech teams don't have time for vendor questionnaires. Share your pedagogy and scale targets — we'll come back with an architecture and engagement model within two business days."
        primaryLabel="Send Brief"
        secondaryLabel="Read Case Studies"
      />
      <Footer />
    </>
  );
}
