'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  Zap,
  Target,
  Users,
  Code2,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Brain,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Filter,
  ShieldCheck,
  FileText,
  AlertTriangle,
  RefreshCw,
  ScrollText,
  MessagesSquare,
  GitPullRequest,
  Scale,
  Plus,
  Minus,
  Quote,
  Award,
} from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { easingCurve } from '@/lib/utils';

const TIMELINE = [
  { day: 'Day 1', label: 'Brief intake', detail: 'Same-day discovery call. Tech, seniority, SLAs and ceremonies captured in writing.' },
  { day: 'Day 2', label: 'Shortlist sent', detail: '3 hand-picked profiles with code samples, references, and recent project context.' },
  { day: 'Day 3', label: 'Your interviews', detail: 'You run your bar — technical, behavioural, system design. We never pre-coach.' },
  { day: 'Day 5', label: 'Selection & paperwork', detail: 'Decision locked. MSA, NDA, IP assignment, and onboarding checklist sent.' },
  { day: 'Day 7', label: 'First standup', detail: 'Engineer in your repos, your tools, your ceremonies — pushing PRs by EOD.' },
];

const ROLE_TYPES = [
  { icon: Code2, label: 'Backend Engineers', stack: 'Go · Node · Python · Java · Rust', count: '120+' },
  { icon: Database, label: 'Data Engineers', stack: 'Spark · dbt · Airflow · Snowflake · BigQuery', count: '45+' },
  { icon: Cloud, label: 'DevOps / SRE', stack: 'K8s · Terraform · AWS · Azure · GCP', count: '60+' },
  { icon: Brain, label: 'ML / AI Engineers', stack: 'PyTorch · LangChain · LlamaIndex · Vector DBs', count: '38+' },
  { icon: Smartphone, label: 'Mobile Engineers', stack: 'iOS · Android · React Native · Flutter', count: '40+' },
  { icon: Shield, label: 'Security Engineers', stack: 'AppSec · CloudSec · Zero-Trust · IAM', count: '22+' },
  { icon: Target, label: 'QA Automation', stack: 'Playwright · Cypress · Selenium · k6', count: '50+' },
  { icon: Users, label: 'Frontend Engineers', stack: 'React · Next.js · Vue · TypeScript · Tailwind', count: '85+' },
];

const VETTING_FUNNEL = [
  { stage: 'Inbound applications', count: '2,400/mo', kept: '100%' },
  { stage: 'Code-first screen', count: '740/mo', kept: '31%' },
  { stage: 'Async technical work-sample', count: '210/mo', kept: '9%' },
  { stage: 'Pairing & system design', count: '95/mo', kept: '4%' },
  { stage: 'Bar-raiser & references', count: '38/mo', kept: '1.6%' },
  { stage: 'Bench-ready, client-eligible', count: '24/mo', kept: '1%' },
];

const LIFECYCLE = [
  { week: 'Week 1', heading: 'Onboarding & shadowing', body: 'Engineer reads codebase docs, attends ceremonies as observer, sets up environment, and pairs with a designated buddy from your team.' },
  { week: 'Week 2', heading: 'First contributions', body: 'Picks up scoped tickets — bug fixes, small features. Daily PR cadence, peer-reviewed by your seniors.' },
  { week: 'Week 3-4', heading: 'Full velocity', body: 'Indistinguishable from your FTEs in throughput. Owns feature work, participates in design discussions, contributes to RFCs.' },
  { week: 'Month 2+', heading: 'Compound value', body: 'Becomes a domain expert. Mentors juniors, leads small initiatives, and earns trust on architectural decisions.' },
];

const GOVERNANCE = [
  { icon: ScrollText, title: 'Weekly status reports', body: 'Standardised written report every Friday: tickets closed, blockers, next-week plan, time logged. Signed off by your engineering manager.' },
  { icon: MessagesSquare, title: 'Monthly business review', body: '30-minute call with our delivery lead. Engagement health, KPI tracking, satisfaction score, and roadmap alignment review.' },
  { icon: GitPullRequest, title: 'PR-level visibility', body: 'You see every commit, every PR, every code review comment. We never sit between you and the engineer.' },
  { icon: AlertTriangle, title: 'Escalation pathway', body: 'Three-tier escalation: lead engineer → delivery manager → VP of Engineering. Response SLA: 4 business hours.' },
];

const VS_TABLE = [
  { factor: 'Time to first commit', aayulogic: '7 business days', agency: '4–6 weeks', freelance: '2–3 weeks' },
  { factor: 'Replacement guarantee', aayulogic: '14 days, no-cost', agency: 'Contractual, slow', freelance: 'None' },
  { factor: 'Bench depth', aayulogic: '400+ engineers', agency: 'Variable', freelance: 'One' },
  { factor: 'Compliance + payroll', aayulogic: 'We handle', agency: 'We handle', freelance: 'You handle' },
  { factor: 'IP assignment', aayulogic: 'Day-one master SOW', agency: 'Per contract', freelance: 'Per contract' },
  { factor: 'Pre-vetted on real code', aayulogic: 'Yes — 4-stage funnel', agency: 'Rarely', freelance: 'Self-attested' },
  { factor: 'Backup engineer on standby', aayulogic: 'Always', agency: 'No', freelance: 'No' },
];

const COMPLIANCE_PILLARS = [
  { icon: Scale, title: 'Master Services Agreement', body: 'Single MSA covers all engagements. Per-role SOWs append in 24 hours. Reviewed by Canadian counsel; aligned with US, UK, and EU norms.' },
  { icon: FileText, title: 'IP assignment & confidentiality', body: 'All work product transfers to you on creation. Background-checked engineers sign personal NDAs in addition to corporate ones.' },
  { icon: ShieldCheck, title: 'Data residency & access', body: 'Engineers work in your VPN, your repos, your accounts. We do not host your data on Aayulogic infrastructure unless explicitly contracted.' },
  { icon: Award, title: 'ISO 27001 + ISO 9001 certified', body: 'Independently audited information security and quality management. Compliance evidence available under NDA for procurement reviews.' },
];

const RISK_GUARANTEES = [
  { title: '14-day no-cost replacement', body: 'If an engineer isn\'t the right fit in the first 14 days — for any reason — we replace at zero cost and zero billable time for the replaced period.' },
  { title: 'Backup engineer on standby', body: 'For every long-term engagement, a secondary engineer shadows the primary one day per week. If the primary becomes unavailable, the backup ramps in days, not weeks.' },
  { title: 'Knowledge continuity contract', body: 'All engagement artefacts — runbooks, ADRs, onboarding docs — are written into your repos as part of weekly cadence. If the engineer leaves, the knowledge stays.' },
];

const CASE_STUDY = {
  client: 'Helix Capital (US Fintech)',
  challenge: 'A Series C trading platform needed three senior Go engineers within two weeks to ship a regulatory deadline feature. Their direct-hire pipeline was estimated at 12 weeks.',
  approach: 'We shortlisted 9 engineers in 48 hours. They interviewed and selected 3 within 5 business days. Engineers were integrated into the existing Bazel monorepo and CI within 7 days.',
  outcome: '47 PRs merged in the first 30 days. Regulatory feature shipped 11 days ahead of deadline. Two of the three engineers were converted to FTE after 9 months at zero conversion fee.',
  metric: '11 days ahead of deadline',
  duration: '14 months and counting',
};

const FAQS = [
  {
    q: 'How do you maintain engineer quality at this volume?',
    a: 'Our vetting funnel rejects 99% of applicants before bench-eligibility. Engineers go through a 4-stage process: code-first screen, async work sample, live pairing on a real bug from a production codebase, and a bar-raiser interview by a staff-level engineer who is not part of the hiring panel.',
  },
  {
    q: 'What time zones can we get coverage in?',
    a: 'Our 400+ bench spans every major time zone. We can staff PST-aligned, EST-aligned, GMT-aligned, IST-aligned, or AEST-aligned shifts. For 24/7 coverage, we structure follow-the-sun teams of 2–3 engineers across hubs.',
  },
  {
    q: 'How do you handle engineers who underperform after the 14-day window?',
    a: 'If concerns emerge after 14 days, we run a structured performance review with you within 5 business days. If the gap is coachable, we add a senior engineer as a mentor at no charge for 30 days. If it\'s a fundamental mismatch, we replace — usually within 10 days — and credit the underperforming period.',
  },
  {
    q: 'Can engineers work in our existing Jira, Slack, GitHub, and other tools?',
    a: 'Yes — that\'s the default. Engineers integrate fully into your tooling on day one. We do not impose our own tracking, time logging, or communication tools. The only reporting overhead is the weekly written status report.',
  },
  {
    q: 'Do you sign our paperwork or yours?',
    a: 'Either. We have a standard MSA reviewed by Canadian counsel that 80% of clients sign as-is. For Fortune 500 clients with their own legal templates, we redline and sign theirs. Average legal turnaround: 6 business days.',
  },
  {
    q: 'What happens to the engineer if we end the contract early?',
    a: 'Engineers are full-time Aayulogic employees with continuous employment. If your engagement ends, they roll to the bench or another engagement — they don\'t lose income or benefits. This is why our engagement retention is 94% and why we attract senior talent.',
  },
  {
    q: 'Can we convert a staff-aug engineer to a direct hire?',
    a: 'Yes, after 12 months at zero conversion fee. Before 12 months, a one-time conversion fee applies (industry standard, transparent rate card available). We treat conversion as a successful outcome, not a leakage event.',
  },
  {
    q: 'How do you protect our IP and trade secrets?',
    a: 'Three layers: corporate NDA between you and Aayulogic, personal NDA between you and the engineer, and IP-on-creation assignment in the MSA. Engineers work in your repos and your cloud — your code never lives on our infrastructure unless contracted.',
  },
];

export function StaffAugClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          <span className="text-brand-navy font-medium">IT Staff Augmentation</span>
        </div>
      </div>

      {/* ============ 1. HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light via-white to-white pt-24 pb-24 sm:pt-28 sm:pb-32">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-brand-blue/15 mb-6"
            >
              <Zap className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                Engagement Model 01 · Staff Augmentation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-brand-navy text-balance"
            >
              Senior engineers,{' '}
              <span className="bg-gradient-to-r from-brand-blue via-brand-system-blue to-brand-cyan bg-clip-text text-transparent">
                in seven days.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Slot pre-vetted specialists directly into your active SDLC. No
              recruitment drag, no rotating bench, no long-term commitment —
              just senior muscle, available the week you ask for it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg shadow-brand-blue/20"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
                <span className="relative">Send Role Brief</span>
                <ArrowUpRight className="relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#timeline"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-white border border-brand-blue/20 text-brand-navy hover:border-brand-blue/40 transition-all"
              >
                See the 7-day timeline
                <ArrowUpRight className="w-4 h-4 text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Big-number visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square rounded-3xl bg-brand-navy text-white overflow-hidden p-8 flex flex-col justify-between shadow-2xl shadow-brand-blue/20">
              <div
                aria-hidden
                className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-60"
                style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.4) 0%, transparent 70%)' }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative">
                <Clock className="w-8 h-8 text-brand-cyan" />
              </div>

              <div className="relative">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
                  Median Deployment
                </div>
                <div className="text-[120px] font-bold leading-none tracking-tighter bg-gradient-to-br from-white to-brand-cyan bg-clip-text text-transparent">
                  7
                </div>
                <div className="text-2xl font-bold text-white -mt-2">business days</div>
                <div className="mt-6 grid grid-cols-3 gap-2 text-xs">
                  <div className="px-2 py-1.5 rounded bg-white/5 border border-white/10 text-center">
                    <div className="text-white font-bold">400+</div>
                    <div className="text-slate-400">bench</div>
                  </div>
                  <div className="px-2 py-1.5 rounded bg-white/5 border border-white/10 text-center">
                    <div className="text-white font-bold">94%</div>
                    <div className="text-slate-400">retention</div>
                  </div>
                  <div className="px-2 py-1.5 rounded bg-white/5 border border-white/10 text-center">
                    <div className="text-white font-bold">14d</div>
                    <div className="text-slate-400">guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 2. THE BRIEF — when this model fits ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                The Brief
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
                When staff augmentation is the right call.
              </h2>
              <p className="mt-6 text-base text-slate-600 leading-relaxed">
                Staff augmentation isn&apos;t the right answer to every hiring problem.
                Here&apos;s a candid view of when it shines — and when you should
                consider a dedicated squad or contract-to-hire instead.
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/40">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">When it fits</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>You have a strong engineering manager and clear SDLC — you just need more hands at the keyboard.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>A bounded project (3–18 months) with a defined scope and exit point.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>A regulatory or product deadline that direct hiring can&apos;t meet.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>A specialist skill (ML, security, Rust) you need for one initiative, not forever.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>Headcount approved but the recruiting funnel is months behind.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/40">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-700">When it doesn&apos;t</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You need a full squad with a PM, EM, and QA — that&apos;s a Dedicated Team.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You want a try-before-you-hire path — that&apos;s Contract-to-Hire.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You&apos;re building an offshore center — that&apos;s Build-Operate-Transfer.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You don&apos;t have an EM to direct the work — you need a leader first.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>The roadmap is ambiguous — define scope before adding bodies.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3. 7-DAY TIMELINE ============ */}
      <section id="timeline" className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              The 7-Day Path
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              From signed SOW to first standup.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              We&apos;ve compressed what most agencies take six weeks to do into
              seven business days — without skipping a single quality gate.
              Here&apos;s the day-by-day from intake to onboarding.
            </p>
          </div>

          <div className="relative">
            <div aria-hidden className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-brand-blue/10 via-brand-cyan/40 to-brand-blue/10" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {TIMELINE.map((t, idx) => (
                <motion.div
                  key={t.day}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1, ease: easingCurve.industrial }}
                  className="relative"
                >
                  <div className="relative w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-blue/30 z-10">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  <div className="p-5 rounded-xl bg-white border border-brand-blue/10 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-1">
                      {t.day}
                    </div>
                    <div className="text-base font-bold text-brand-navy mb-2">{t.label}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{t.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. ROLE CATALOG ============ */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Role Catalog
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Eight specialist tracks, every seniority level.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              Mid-senior through staff/principal. Each engineer is matched on
              three dimensions: stack depth, domain familiarity, and team-fit
              signals from our internal performance graph.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROLE_TYPES.map((r, idx) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04, ease: easingCurve.industrial }}
                  className="group p-5 rounded-xl bg-white border border-brand-blue/10 hover:border-brand-cyan/40 hover:-translate-y-1 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/8 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan flex items-center justify-center transition-all">
                      <Icon className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
                      {r.count}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-brand-navy mb-1.5">{r.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.stack}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 5. VETTING FUNNEL ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              The Vetting Funnel
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
              99% rejected — before they reach your shortlist.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              We don&apos;t recruit when you ask. We recruit continuously, and the
              engineers we put in front of you have already cleared four stages
              of evaluation before your name enters the conversation.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue/8 border border-brand-blue/15">
              <Filter className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-bold text-brand-navy">2,400 in → 24 bench-ready / month</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {VETTING_FUNNEL.map((stage, idx) => {
              const width = 100 - idx * 16;
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="relative"
                >
                  <div
                    className="relative rounded-lg p-4 bg-gradient-to-r from-brand-navy to-brand-blue text-white overflow-hidden"
                    style={{ width: `${width}%` }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan mb-0.5">Stage {idx + 1}</div>
                        <div className="text-sm font-bold">{stage.stage}</div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs text-slate-300">{stage.count}</div>
                        <div className="text-xs font-bold text-brand-cyan">{stage.kept} kept</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 6. ENGAGEMENT LIFECYCLE ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Engagement Lifecycle
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              What the first 60 days actually look like.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              No engineer is at full productivity from day one — anyone who
              promises that is selling. Here&apos;s the realistic week-by-week
              ramp we&apos;ve refined across 1,200+ engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {LIFECYCLE.map((phase, idx) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-6 rounded-2xl border border-brand-blue/10 bg-gradient-to-br from-white to-brand-light/30"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
                  {phase.week}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{phase.heading}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{phase.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. PERFORMANCE GOVERNANCE ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              Performance Governance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              You see the work. Not a glossy slide deck.
            </h2>
            <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-2xl">
              Every staff-aug engagement runs on the same governance rhythm.
              No vanity dashboards, no surprise invoices, no engineering theatre —
              just the artefacts your engineering manager already expects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {GOVERNANCE.map((g, idx) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{g.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{g.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 8. REPLACEMENT & RISK ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                Replacement & Risk Mitigation
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
                Three commitments that change the math.
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                The historic risk of staff augmentation is talent volatility —
                an engineer leaves or underperforms and your roadmap takes the
                hit. Our model is structured to absorb that risk on our side of
                the contract, not yours.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200">
                <RefreshCw className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-bold text-emerald-700">Replacement rate: 4.1% of all engagements</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {RISK_GUARANTEES.map((r, idx) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="relative p-6 rounded-2xl border border-brand-blue/10 bg-gradient-to-r from-brand-light/40 to-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/8 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">{r.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 9. IP, COMPLIANCE & LEGAL ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              IP, Compliance & Legal
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Procurement-ready, audit-grade, contract-clean.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              Four pillars your legal team will sign off on without redlining
              for weeks. Every clause has been negotiated with Fortune 500
              counsel before — we know what they look for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {COMPLIANCE_PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-7 rounded-2xl bg-white border border-brand-blue/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">{p.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 10. COMPARISON MATRIX ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Why Not An Agency
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Aayulogic vs. traditional staffing.
            </h2>
          </div>

          <div className="rounded-2xl border border-brand-blue/15 overflow-hidden">
            <div className="grid grid-cols-4 bg-brand-navy text-white text-xs font-bold uppercase tracking-[0.18em]">
              <div className="px-5 py-4">Factor</div>
              <div className="px-5 py-4 bg-gradient-to-br from-brand-blue/80 to-brand-cyan/80 text-white">Aayulogic</div>
              <div className="px-5 py-4 text-slate-300">Traditional Agency</div>
              <div className="px-5 py-4 text-slate-300">Freelancer</div>
            </div>
            {VS_TABLE.map((row, idx) => (
              <div
                key={row.factor}
                className={`grid grid-cols-4 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-light/30'}`}
              >
                <div className="px-5 py-4 font-semibold text-brand-navy">{row.factor}</div>
                <div className="px-5 py-4 text-brand-blue font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  {row.aayulogic}
                </div>
                <div className="px-5 py-4 text-slate-600">{row.agency}</div>
                <div className="px-5 py-4 text-slate-600 flex items-center gap-2">
                  {row.freelance === 'None' ? <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0" /> : null}
                  {row.freelance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 11. CASE STUDY ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
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
              Eight questions every buyer asks us.
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

      {/* Trust badge strip */}
      <section className="relative py-16 bg-brand-light/30">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Sparkles, label: '14-day no-cost replacement' },
            { icon: Shield, label: 'IP assigned day one' },
            { icon: Clock, label: 'Same-day intake call' },
            { icon: CheckCircle2, label: '94% engagement retention' },
          ].map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.label} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-medium text-brand-navy">{t.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <div id="contact">
        <CTABand
          eyebrow="Get Matched"
          title="Send the role spec. Get a shortlist in 48 hours."
          body="No RFPs, no panel calls, no nonsense. Tell us the stack, the seniority, and the SLA — we'll send three vetted profiles by end of next business day."
          primaryLabel="Send Role Brief"
          secondaryLabel="Talk to Sales"
        />
      </div>
      <Footer />
    </>
  );
}
