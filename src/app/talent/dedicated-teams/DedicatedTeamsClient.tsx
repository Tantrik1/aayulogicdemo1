'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Layers,
  GitBranch,
  Activity,
  BookOpenCheck,
  Workflow,
  Gauge,
  Scaling,
  Quote,
  Plus,
  Minus,
  Crown,
  Code2,
  TestTube2,
  Palette,
  ClipboardList,
  Repeat,
  Calendar,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { easingCurve } from '@/lib/utils';

const SQUAD_COMPOSITION = [
  { icon: Crown, role: 'Engineering Manager', count: '1', detail: 'Owns delivery, hiring, performance, and your weekly steering call.' },
  { icon: ClipboardList, role: 'Product Manager', count: '0–1', detail: 'Optional — embed yours, or we provide a senior PM with domain depth.' },
  { icon: Code2, role: 'Senior Engineers', count: '3–6', detail: 'Full-stack or specialist mix calibrated to your roadmap.' },
  { icon: TestTube2, role: 'QA Automation', count: '1', detail: 'Owns test pyramid, regression suites, and release gates.' },
  { icon: Palette, role: 'Product Designer', count: '0–1', detail: 'Add when the roadmap is UX-heavy — Figma, design tokens, prototyping.' },
  { icon: Activity, role: 'SRE / DevOps', count: '0–1', detail: 'Embed for platform-heavy work; on-demand otherwise.' },
];

const MATURITY_PHASES = [
  {
    week: 'Weeks 1–2',
    phase: 'Forming',
    heading: 'Discovery & onboarding',
    body: 'Squad embeds in your tools, repos, and rituals. Architectural read-out, codebase walk-through, customer interviews, baseline metrics captured.',
    output: 'Discovery report · Codebase audit · Risk register',
  },
  {
    week: 'Weeks 3–6',
    phase: 'Storming',
    heading: 'First sprints, real friction',
    body: 'Velocity is uneven on purpose. We surface assumptions, recalibrate estimates, and make scope tradeoffs visible. This is when broken processes get fixed.',
    output: 'RFCs · Working agreements · Definition of Done',
  },
  {
    week: 'Weeks 7–12',
    phase: 'Norming',
    heading: 'Predictable cadence',
    body: 'Sprint commitment hit rate climbs above 85%. Squad runs its own ceremonies, owns the backlog grooming, and starts proposing roadmap items.',
    output: 'Velocity baseline · Roadmap proposals',
  },
  {
    week: 'Week 13+',
    phase: 'Performing',
    heading: 'Roadmap ownership',
    body: 'Squad delivers initiatives end-to-end with minimal directional input. You measure outcomes, not output. Steering becomes monthly, not weekly.',
    output: 'Quarterly OKRs · Outcome reports',
  },
];

const CADENCE = [
  { icon: Calendar, title: 'Daily standup', when: '15 min · daily', body: 'Async-first via Slack thread, sync only when blockers warrant. Your time zone, not ours.' },
  { icon: Workflow, title: 'Sprint planning', when: '90 min · biweekly', body: 'Squad pre-grooms, you approve. We bring estimates and trade-off matrices, not blank slates.' },
  { icon: Repeat, title: 'Retrospective', when: '60 min · biweekly', body: 'Blameless. Action items tracked in your project tool. Last sprint\'s actions reviewed first.' },
  { icon: Activity, title: 'Demo day', when: '45 min · biweekly', body: 'Live product walkthrough. Stakeholders invited. Recordings archived in your shared drive.' },
  { icon: Gauge, title: 'Steering call', when: '30 min · weekly → monthly', body: 'Engagement health, KPIs, roadmap. Frequency tapers as squad matures.' },
  { icon: BookOpenCheck, title: 'Architecture review', when: '60 min · monthly', body: 'ADRs reviewed by your CTO. Major decisions logged before code lands.' },
];

const OWNERSHIP_MATRIX = [
  { area: 'Roadmap prioritization', squad: 'Inform', client: 'Decide' },
  { area: 'Sprint scope', squad: 'Decide', client: 'Approve' },
  { area: 'Technical architecture', squad: 'Decide', client: 'Review' },
  { area: 'Release schedule', squad: 'Recommend', client: 'Decide' },
  { area: 'Hiring squad members', squad: 'Decide', client: 'Review' },
  { area: 'Tooling & process', squad: 'Decide', client: 'Inform' },
  { area: 'KPIs & success metrics', squad: 'Recommend', client: 'Decide' },
  { area: 'Customer communications', squad: 'Support', client: 'Decide' },
];

const CONTINUITY = [
  { icon: BookOpenCheck, title: 'Living documentation', body: 'ADRs, runbooks, onboarding docs written into your repo as part of the Definition of Done. Knowledge ages with the code, not in someone\'s head.' },
  { icon: Users, title: '12-month rotation cap', body: 'Engineers stay on a squad for minimum 12 months. Rotations are planned, not surprise. 8-week shadowing precedes every transition.' },
  { icon: GitBranch, title: 'Pair programming default', body: 'Critical paths pair-coded. Reduces bus-factor risk and accelerates ramp time for any new squad member.' },
  { icon: Repeat, title: 'Quarterly knowledge audits', body: 'We test the docs: a new engineer is asked to ship a feature using only the runbook. Gaps become next-quarter tickets.' },
];

const TOOLING_INTEGRATION = [
  { category: 'Source control', tools: 'GitHub · GitLab · Bitbucket · Azure DevOps' },
  { category: 'Project mgmt', tools: 'Jira · Linear · Asana · Shortcut · ClickUp' },
  { category: 'Comms', tools: 'Slack · Teams · Discord · Zoom · Google Meet' },
  { category: 'Docs', tools: 'Confluence · Notion · Coda · Google Docs' },
  { category: 'CI/CD', tools: 'GitHub Actions · CircleCI · Buildkite · Jenkins' },
  { category: 'Observability', tools: 'Datadog · New Relic · Grafana · Sentry · PagerDuty' },
];

const METRICS = [
  { metric: 'Deployment frequency', target: 'Daily', source: 'DORA' },
  { metric: 'Lead time for changes', target: '< 24h', source: 'DORA' },
  { metric: 'Change failure rate', target: '< 8%', source: 'DORA' },
  { metric: 'MTTR', target: '< 1h', source: 'DORA' },
  { metric: 'Sprint commitment accuracy', target: '> 85%', source: 'Internal' },
  { metric: 'Squad NPS (client)', target: '> 60', source: 'Quarterly survey' },
  { metric: 'Story cycle time', target: '< 5 days', source: 'Jira/Linear' },
  { metric: 'Engineer NPS (squad)', target: '> 50', source: 'Quarterly survey' },
];

const SCALING_POLICY = [
  { trigger: 'Roadmap expansion', response: 'Add 1–2 engineers within 21 days. No re-bidding. Same MSA, same SOW addendum.', icon: TrendingUp },
  { trigger: 'Product launch surge', response: 'Time-boxed +30% capacity for 8–12 weeks. Surge engineers from bench, not new hires.', icon: Scaling },
  { trigger: 'Strategic pivot', response: 'Squad composition rebalanced. Swap backend for ML, mobile for web, etc. — within one sprint cycle.', icon: Compass },
  { trigger: 'Roadmap contraction', response: 'Step down with 30-day notice. Engineers redeploy without termination. No exit penalties.', icon: Layers },
];

const CASE_STUDY = {
  client: 'Atlas Pharma (US · GxP-validated)',
  squad: 'PM + EM + 4 engineers + 1 QA + 1 designer',
  challenge: 'Atlas needed to modernize a 12-year-old clinical trial logging system. Their internal team owned three other platforms and couldn\'t carve out roadmap ownership.',
  approach: 'We embedded a 7-person squad in week 4 after a discovery sprint. Squad took full roadmap ownership under Atlas\'s VP of R&D Technology. Worked inside Atlas\'s GxP-validated SDLC with 21 CFR Part 11 controls.',
  outcome: '14 quarterly releases shipped without a single validation finding. New trial onboarding time dropped from 7 weeks to 9 days. Squad has been with Atlas for 28 months and counting; two engineers were converted to direct hires by mutual agreement.',
  metric: '7 weeks → 9 days',
  duration: '28 months',
};

const FAQS = [
  {
    q: 'How is this different from staff augmentation?',
    a: 'Staff augmentation gives you engineers; you provide direction. A dedicated squad gives you a self-managed team with its own EM and (optionally) PM — they own delivery against outcomes you set. You measure roadmap progress, not tickets. Best fit when you have a product but not enough leadership bandwidth to direct day-to-day execution.',
  },
  {
    q: 'Who manages the squad day-to-day?',
    a: 'A dedicated Engineering Manager from our side runs the squad. They report to a designated stakeholder on your side (typically a VP of Engineering or CTO). Steering happens at the outcome level — features shipped, KPIs moved — not at the ticket level.',
  },
  {
    q: 'Can we use our own product manager?',
    a: 'Yes. Roughly 60% of our squads run with the client\'s PM. The other 40% use ours when the client\'s PM bandwidth is constrained or when domain expertise (HR, pharma, fintech) is critical. Mid-engagement swaps are also common.',
  },
  {
    q: 'What happens when an engineer needs to leave the squad?',
    a: 'Planned rotations: 8-week shadowing with the replacement, documented handover, paired sprints. Unplanned departures (rare — 6% annual squad-level turnover): backup engineer ramps in 5–10 business days, supported by the squad\'s living documentation.',
  },
  {
    q: 'Can the squad work across multiple time zones?',
    a: 'Yes. Default model is 6+ hours of overlap with your core hours. We can structure full-overlap (squad in your time zone), partial-overlap (4–6 hours), or follow-the-sun for 24/7 coverage with multiple squads.',
  },
  {
    q: 'How do you handle scope and priority changes?',
    a: 'Scope changes are normal — the squad re-plans every two weeks. Priority changes mid-sprint are also fine; the EM will surface the trade-off (what falls out, what shifts) so you make the call with full information. We never silently descope.',
  },
  {
    q: 'What if we want to take the squad in-house?',
    a: 'We support full team conversions. Conversion is structured as a transfer-by-engineer with no cliff. Engineers can be converted individually as roles open up on your side. Standard conversion terms apply (transparent, MSA-defined).',
  },
  {
    q: 'How does this compare cost-wise to building in-house?',
    a: 'A dedicated squad typically costs 60–70% of a fully-loaded in-house equivalent (salary + benefits + tooling + facilities + management overhead). The bigger value is time: a squad is producing in week 4. A new in-house team takes 6–9 months to reach the same maturity.',
  },
];

export function DedicatedTeamsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Header />

      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-brand-blue transition-colors">Home</a>
          <span>/</span>
          <a href="/talent" className="hover:text-brand-blue transition-colors">Talent & Engagement</a>
          <span>/</span>
          <span className="text-brand-navy font-medium">Dedicated Product Engineering Teams</span>
        </div>
      </div>

      {/* ============ 1. HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-[#0a1334] text-white pt-24 pb-28 sm:pt-28 sm:pb-36">
        <div
          aria-hidden
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.4) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easingCurve.industrial }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur border border-white/20 mb-7"
          >
            <Users className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
              Engagement Model 02 · Dedicated Squad
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: easingCurve.industrial }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight max-w-5xl text-balance"
          >
            A squad that{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-clip-text text-transparent">
              owns your roadmap.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: easingCurve.industrial }}
            className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl"
          >
            Not bodies you direct. A cohesive, self-managed product engineering
            team — with its own EM, its own cadence, and a contract to ship
            outcomes against a roadmap you set together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: easingCurve.industrial }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-brand-navy bg-white hover:bg-brand-cyan transition-colors shadow-xl"
            >
              <span>Scope a Squad</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#composition"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              See squad anatomy
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10"
          >
            {[
              { value: '4–12', label: 'engineers per squad' },
              { value: '85%+', label: 'sprint commitment hit rate' },
              { value: '6%', label: 'annual squad turnover' },
              { value: '28 mo', label: 'longest active engagement' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-bold text-brand-cyan mb-1">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ 2. THE BRIEF ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                The Brief
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
                What &quot;dedicated&quot; really means.
              </h2>
              <p className="mt-6 text-base text-slate-600 leading-relaxed">
                Most vendors say &quot;dedicated&quot; and mean &quot;not shared between
                clients.&quot; That&apos;s table stakes. Real dedication is a squad
                with continuity of context, ownership of outcomes, and the
                authority to make engineering decisions in your name.
              </p>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                A staff-aug engineer waits for the next ticket. A dedicated
                squad asks why the ticket exists, whether it&apos;s the right
                next move, and whether there&apos;s a cheaper path to the same
                outcome. The difference compounds quarterly.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/40">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">When it fits</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>You have a product with a multi-quarter roadmap.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>Your leadership bandwidth can&apos;t direct another team day-to-day.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>You want outcome-level accountability, not task-level oversight.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>The work is product engineering, not one-off project delivery.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>Engagement horizon is 12+ months.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/40">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-700">When it doesn&apos;t</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You need a specialist for a 3-month sprint — use Staff Augmentation.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>The roadmap is ambiguous and changes weekly.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You want to build a captive offshore center — use BOT.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You need a try-before-you-hire arrangement — use C2H.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You can&apos;t commit to a 12-month engagement.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3. SQUAD COMPOSITION ============ */}
      <section id="composition" className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Squad Anatomy
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Six roles. Composed for your roadmap.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Squads scale from 4 to 12 people. Every squad has an Engineering
              Manager and at least three senior engineers. The other roles flex
              based on what your roadmap actually needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SQUAD_COMPOSITION.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.role}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="relative p-6 rounded-2xl bg-white border border-brand-blue/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Count</div>
                      <div className="text-2xl font-bold text-brand-navy">{s.count}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{s.role}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 4. SQUAD MATURITY PHASES ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Squad Maturity Curve
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              13 weeks from kickoff to roadmap ownership.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              The Tuckman model is real. We don&apos;t pretend a new squad is
              performing in week one — instead we engineer the path through
              forming, storming, and norming as deliberately as the product itself.
            </p>
          </div>

          <div className="space-y-5">
            {MATURITY_PHASES.map((phase, idx) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="grid lg:grid-cols-12 gap-5 p-6 rounded-2xl border border-brand-blue/10 bg-gradient-to-r from-brand-light/40 to-white"
              >
                <div className="lg:col-span-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-2">{phase.week}</div>
                  <div className="text-2xl font-bold text-brand-navy">{phase.phase}</div>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{phase.heading}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{phase.body}</p>
                </div>
                <div className="lg:col-span-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-2">Artefacts</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{phase.output}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. OPERATING CADENCE ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Operating Cadence
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Six ceremonies. Zero theatre.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              The cadence below is the default. Every squad calibrates within
              the first three sprints — what works for a B2B SaaS team won&apos;t
              fit a regulated pharma platform. The principle stays the same:
              minimum ceremony, maximum signal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CADENCE.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-white border border-brand-blue/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan">{c.when}</span>
                  </div>
                  <h3 className="text-base font-bold text-brand-navy mb-2">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 6. OWNERSHIP MODEL ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Ownership Model
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Who decides what — written down in week one.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              Most engagement friction comes from unclear decision rights. We
              co-author a RACI matrix in the first sprint and review it every
              quarter. Here&apos;s the default we start from.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-blue/15 overflow-hidden">
            <div className="grid grid-cols-3 bg-brand-navy text-white text-xs font-bold uppercase tracking-[0.18em]">
              <div className="px-5 py-4">Decision area</div>
              <div className="px-5 py-4 bg-gradient-to-br from-brand-blue/80 to-brand-cyan/80">Squad</div>
              <div className="px-5 py-4 bg-white/5">You</div>
            </div>
            {OWNERSHIP_MATRIX.map((row, idx) => (
              <div
                key={row.area}
                className={`grid grid-cols-3 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-light/30'}`}
              >
                <div className="px-5 py-4 font-semibold text-brand-navy">{row.area}</div>
                <div className="px-5 py-4 text-brand-blue font-bold">{row.squad}</div>
                <div className="px-5 py-4 text-slate-700 font-semibold">{row.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. KNOWLEDGE CONTINUITY ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              Knowledge Continuity
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              The squad changes. The knowledge doesn&apos;t.
            </h2>
            <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-2xl">
              Bus-factor is the silent killer of long engagements. Every
              practice below is contractual — they show up in our Definition
              of Done, not as nice-to-have aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {CONTINUITY.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 8. TOOLING INTEGRATION ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                Tooling & Integration
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
                Your stack. Not ours.
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                The squad joins your Slack, your Jira, your repos. We do not
                impose a parallel toolchain or send weekly PDF reports. If you
                use it, we use it — and if your tooling needs an upgrade,
                that&apos;s a roadmap item, not a vendor mandate.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {TOOLING_INTEGRATION.map((t, idx) => (
                <motion.div
                  key={t.category}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-brand-light/40 border border-brand-blue/10"
                >
                  <div className="text-sm font-bold text-brand-navy">{t.category}</div>
                  <div className="col-span-2 text-sm text-slate-600">{t.tools}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 9. VELOCITY & QUALITY METRICS ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Velocity & Quality Metrics
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Measured against DORA. Reported every sprint.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              We instrument every squad with the same telemetry. You see the
              real numbers, not a curated subset. If a metric trends the wrong
              way, the next retro starts with that line on the board.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {METRICS.map((m, idx) => (
              <motion.div
                key={m.metric}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-5 rounded-xl bg-white border border-brand-blue/10"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-2">{m.source}</div>
                <div className="text-sm font-bold text-brand-navy mb-2">{m.metric}</div>
                <div className="text-2xl font-bold text-brand-cyan">{m.target}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10. SCALING POLICY ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Flex Policy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Scale up or down without re-negotiating the contract.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {SCALING_POLICY.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.trigger}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-6 rounded-2xl border border-brand-blue/10 bg-gradient-to-br from-white to-brand-light/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan mb-1">Trigger</div>
                      <h3 className="text-base font-bold text-brand-navy mb-2">{s.trigger}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{s.response}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 11. CASE STUDY ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
                Case Study
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {CASE_STUDY.client}
              </h2>
              <div className="mt-4 text-xs text-slate-400 uppercase tracking-widest">Squad shape</div>
              <p className="mt-1 text-sm text-slate-300">{CASE_STUDY.squad}</p>

              <div className="mt-6 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <Quote className="w-5 h-5 text-brand-cyan" />
                <div>
                  <div className="text-xl font-bold text-brand-cyan">{CASE_STUDY.metric}</div>
                  <div className="text-xs text-slate-400">{CASE_STUDY.duration}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-2">Challenge</div>
                <p className="text-base text-slate-200 leading-relaxed">{CASE_STUDY.challenge}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-2">Approach</div>
                <p className="text-base text-slate-200 leading-relaxed">{CASE_STUDY.approach}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-2">Outcome</div>
                <p className="text-base text-slate-200 leading-relaxed">{CASE_STUDY.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 12. FAQ ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Frequently Asked
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              What buyers ask before signing a squad SOW.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-xl border border-brand-blue/10 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-brand-light/20 transition-colors"
                >
                  <span className="text-base font-bold text-brand-navy pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-brand-blue/5 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact">
        <CTABand
          eyebrow="Scope a Squad"
          title="From discovery call to first sprint — in four weeks."
          body="Tell us about the roadmap. We'll come back with a recommended squad composition, a 90-day plan, and a steering proposal. No procurement deck required."
          primaryLabel="Scope a Squad"
          secondaryLabel="Talk to Sales"
        />
      </div>
      <Footer />
    </>
  );
}
