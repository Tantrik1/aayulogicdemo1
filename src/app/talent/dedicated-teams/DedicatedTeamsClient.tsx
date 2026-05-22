'use client';

import { motion } from 'framer-motion';
import {
  UsersRound,
  Crown,
  Code2,
  TestTube2,
  Palette,
  Briefcase,
  GitBranch,
  Calendar,
  Activity,
  Compass,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { easingCurve } from '@/lib/utils';

const SQUAD_ROLES = [
  { icon: Briefcase, role: 'Product Manager', level: 'Senior', detail: 'Owns roadmap, scope, and stakeholder comms.' },
  { icon: Crown, role: 'Tech Lead', level: 'Staff', detail: 'Architectural decisions and code review.' },
  { icon: Code2, role: '4 × Engineers', level: 'Sr / Mid', detail: 'Full-stack mix tuned to your stack.' },
  { icon: TestTube2, role: 'QA Engineer', level: 'Senior', detail: 'Test strategy, automation, release sign-off.' },
  { icon: Palette, role: 'Designer (optional)', level: 'Senior', detail: 'UX + UI for product-led squads.' },
];

const CONTROL_SPLIT = [
  {
    title: 'You control',
    items: [
      'Roadmap and priorities',
      'Definition of done',
      'Release calendar',
      'Direct line to PM and TL',
      'Quarterly OKRs',
      'Budget and team size',
    ],
    accent: 'brand-blue',
  },
  {
    title: 'We handle',
    items: [
      'Hiring, replacements, retention',
      'Payroll, taxes, benefits',
      'Scrum ceremonies and cadence',
      'Engineering rituals (code review, RFCs)',
      'Knowledge management and docs',
      'On-call rotation within the squad',
    ],
    accent: 'brand-cyan',
  },
];

const CADENCE = [
  { time: 'Daily', what: 'Stand-up · async or sync to your TZ' },
  { time: 'Weekly', what: 'Demo · roadmap review · retro' },
  { time: 'Bi-weekly', what: 'Sprint planning · stakeholder review' },
  { time: 'Monthly', what: 'Architecture sync · risk review' },
  { time: 'Quarterly', what: 'OKR planning · health audit · cost review' },
];

const LIFECYCLE = [
  {
    phase: 'Phase 1',
    weeks: 'Weeks 1-3',
    title: 'Squad assembly',
    body: 'PM + TL selected first. They help co-interview the remaining squad to ensure cultural and technical fit.',
  },
  {
    phase: 'Phase 2',
    weeks: 'Weeks 3-5',
    title: 'Onboarding & ramp',
    body: 'Repo walkthrough, architecture deep-dive, shadow sprints with your team. Charter and RACI signed.',
  },
  {
    phase: 'Phase 3',
    weeks: 'Weeks 5-12',
    title: 'Velocity ramp',
    body: 'First product slice shipped to production. Squad sets its own velocity baseline by week 12.',
  },
  {
    phase: 'Phase 4',
    weeks: 'Quarter 2+',
    title: 'Steady-state ownership',
    body: 'Squad owns roadmap delivery. Quarterly health reviews. Continuous evolution as scope expands.',
  },
];

export function DedicatedTeamsClient() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-brand-blue transition-colors">Home</a>
          <span>/</span>
          <a href="/talent" className="hover:text-brand-blue transition-colors">Talent & Engagement</a>
          <span>/</span>
          <span className="text-brand-navy font-medium">Dedicated Teams</span>
        </div>
      </div>

      {/* Hero — centered with squad pyramid visual */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light via-white to-white pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(0,194,255,0.4) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easingCurve.industrial }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-brand-blue/15 mb-6"
          >
            <UsersRound className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
              Model 2 · Dedicated Teams
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-brand-navy text-balance"
          >
            One squad. One roadmap.{' '}
            <span className="bg-gradient-to-r from-brand-blue via-brand-system-blue to-brand-cyan bg-clip-text text-transparent">
              One accountability.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
            className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            A cohesive, self-managed engineering squad that owns your product
            roadmap end-to-end. Dedicated tech lead, scrum master, and senior
            engineers — operating on your release cadence with a single point
            of accountability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg shadow-brand-blue/20"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
              <span className="relative">Compose a Squad</span>
              <ArrowUpRight className="relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#squad"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-white border border-brand-blue/20 text-brand-navy hover:border-brand-blue/40 transition-all"
            >
              See Squad Composition
              <ArrowUpRight className="w-4 h-4 text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: '6-12', label: 'Avg. squad size' },
              { value: '6+ mo', label: 'Min. engagement' },
              { value: '2-3 wks', label: 'To form' },
              { value: '0%', label: 'Engineer rotation' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-brand-navy">{s.value}</div>
                <div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Squad composition */}
      <section id="squad" className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Squad Composition
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              A reference squad, tunable to your scope.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              This is a default — we shape size and seniority blend to the
              product surface area, regulatory load, and release cadence you're
              operating against.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {SQUAD_ROLES.map((r, idx) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.role}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: easingCurve.industrial }}
                  className="group relative p-6 rounded-xl bg-white border border-brand-blue/12 hover:border-brand-cyan/45 hover:-translate-y-1 hover:shadow-md transition-all overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)' }}
                  />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-4 shadow-md shadow-brand-blue/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="relative text-base font-bold text-brand-navy mb-1">{r.role}</h3>
                  <p className="relative text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-2">{r.level}</p>
                  <p className="relative text-sm text-slate-600 leading-relaxed">{r.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Control split */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Roles & Responsibilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              You stay strategic. We run the operational load.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {CONTROL_SPLIT.map((col) => (
              <div
                key={col.title}
                className="p-8 rounded-2xl bg-white border border-brand-blue/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg ${col.accent === 'brand-blue' ? 'bg-brand-blue' : 'bg-brand-cyan'} flex items-center justify-center`}>
                    {col.accent === 'brand-blue' ? <Compass className="w-5 h-5 text-white" /> : <Activity className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">{col.title}</h3>
                </div>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${col.accent === 'brand-blue' ? 'text-brand-blue' : 'text-brand-cyan'} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-brand-navy leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadence */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Operating Cadence
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Predictable rhythms. Visible work. No surprises.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Squads run on a transparent, ceremony-driven rhythm aligned with
              your release calendar. You always know what shipped, what's
              in-flight, and what's at risk.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <Calendar className="w-5 h-5 text-brand-blue" />
              <span className="text-sm font-semibold text-brand-navy">Aligned to your TZ — sync or async</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {CADENCE.map((c, idx) => (
              <motion.div
                key={c.time}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: easingCurve.industrial }}
                className="grid grid-cols-12 items-center gap-4 p-5 rounded-xl bg-brand-light/40 border border-brand-blue/10 hover:border-brand-cyan/40 transition-colors"
              >
                <div className="col-span-3 sm:col-span-2">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                    {c.time}
                  </div>
                </div>
                <div className="col-span-9 sm:col-span-10 text-sm text-brand-navy font-medium">
                  {c.what}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              Engagement Lifecycle
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Four phases from kickoff to steady-state.
            </h2>
          </div>

          <div className="space-y-4">
            {LIFECYCLE.map((phase, idx) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: easingCurve.industrial }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
              >
                <div className="lg:col-span-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan mb-1">
                    {phase.phase}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-br from-white to-brand-cyan bg-clip-text text-transparent">
                    {phase.weeks}
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{phase.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing model */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="rounded-3xl bg-gradient-to-br from-brand-blue/8 via-brand-cyan/5 to-transparent border border-brand-blue/15 p-10 sm:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-blue/20 mb-5">
                  <GitBranch className="w-3.5 h-3.5 text-brand-blue" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">Pricing Model</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
                  Fixed monthly squad rate.
                </h2>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  One predictable invoice covering the whole squad — engineers,
                  tools, ceremonies, and on-call. No per-hour tracking, no
                  surprises in month four.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Reference squad (6 engineers + PM + TL)', rate: '$48-72K /mo' },
                  { label: 'Specialist squad (ML / blockchain / embedded)', rate: 'Custom' },
                  { label: 'Squad of 2-3 (sub-squad pod)', rate: '$18-26K /mo' },
                ].map((t) => (
                  <div key={t.label} className="flex items-center justify-between gap-4 p-4 rounded-lg bg-white border border-brand-blue/10">
                    <span className="text-sm font-medium text-brand-navy">{t.label}</span>
                    <span className="text-sm font-bold text-brand-blue whitespace-nowrap">{t.rate}</span>
                  </div>
                ))}
                <p className="text-xs text-slate-500 leading-relaxed pt-2">
                  Rates assume 6-month minimum, 24/5 coverage, and a North America / Europe time-zone overlap of 4 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Compose a Squad"
        title="Tell us the roadmap. We'll propose the squad."
        body="Share product surface area, release cadence, and tech constraints. We'll come back with a proposed squad shape and reference rate within two business days."
        primaryLabel="Compose a Squad"
        secondaryLabel="Talk to Engineering"
      />
      <Footer />
    </>
  );
}
