'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Quote,
  Plus,
  Minus,
  Target,
  ClipboardCheck,
  TrendingUp,
  Sparkles,
  AlertTriangle,
  ScrollText,
  Scale,
  UserCheck,
  FileText,
  Globe2,
  HeartHandshake,
  RefreshCw,
  Briefcase,
} from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { easingCurve } from '@/lib/utils';

const VALIDATION_TIMELINE = [
  { day: 'Day 0', label: 'Engagement starts', detail: 'Engineer joins your team on a contract basis, fully embedded — same access, same tickets, same expectations as an FTE.' },
  { day: 'Day 30', label: 'Checkpoint #1', detail: 'First milestone review. Onboarding velocity, code quality signals, cultural fit. Either side can exit with 5 days notice.' },
  { day: 'Day 60', label: 'Checkpoint #2', detail: 'Mid-engagement review. Pair-review of contributions, 360 feedback from peers, formal performance write-up.' },
  { day: 'Day 90', label: 'Conversion decision', detail: 'Go / no-go. If go: smooth FTE conversion with offer letter and start date. If no-go: clean exit, both sides aligned.' },
];

const MILESTONES = [
  {
    number: '01',
    name: '30-day onboarding milestone',
    criteria: [
      'Has shipped at least 3 PRs to production',
      'Has independently picked up tickets without hand-holding',
      'Has joined and participated in all major ceremonies',
      'No critical concerns from EM or peers',
    ],
    decision: 'Continue to day 60 / structured concerns plan / exit',
  },
  {
    number: '02',
    name: '60-day contribution milestone',
    criteria: [
      'Sustained velocity matching team average',
      'Code review quality — both giving and receiving',
      'Domain knowledge demonstrably growing',
      'Cultural fit: collaboration, communication, ownership',
    ],
    decision: 'Continue to day 90 / final concerns plan / exit',
  },
  {
    number: '03',
    name: '90-day conversion milestone',
    criteria: [
      'Independent ownership of a feature or sub-system',
      'Mentoring or peer-reviewing others',
      'Comfortable in your incident response',
      'Mutual interest in continuing as FTE',
    ],
    decision: 'Offer letter issued / contract extended / clean exit',
  },
];

const TALENT_BAR = [
  { stage: 'Same vetting funnel', detail: 'C2H engineers go through the identical 4-stage assessment as our full-time bench. We don\'t lower the bar because the engagement is shorter.' },
  { stage: 'Senior or staff level', detail: 'C2H is offered only for senior+ roles. We don\'t place junior engineers on conversion track — the model assumes you\'re hiring someone who can ship on day 30.' },
  { stage: 'Conversion-aligned signals', detail: 'During screening, we explicitly assess long-term fit signals: stability, growth trajectory, location flexibility, comp expectations.' },
  { stage: 'Pre-aligned on comp', detail: 'We confirm comp expectations with the engineer before placement — no day-90 surprises when it\'s time to write the offer letter.' },
];

const CONVERSION_FLOW = [
  { step: 'Day 75', title: 'Conversion conversation', body: 'EM raises the topic with the engineer. We facilitate a structured conversation about future, role, compensation, and growth path.' },
  { step: 'Day 80', title: 'Offer drafting', body: 'You draft the FTE offer. Our team supports comp benchmarking, visa/relocation needs, and start-date planning.' },
  { step: 'Day 85', title: 'Engineer decision', body: 'Engineer reviews the offer with our HR support. We act as honest broker — not advocate for either side.' },
  { step: 'Day 90', title: 'Conversion executed', body: 'Engineer transitions to your payroll. Aayulogic releases the engagement. No work disruption — same day handover.' },
];

const PERFORMANCE_DOCS = [
  { icon: ClipboardCheck, title: '30/60/90-day reviews', body: 'Structured written reviews at each milestone. Cover technical contributions, collaboration, growth, and any concerns. Stored in your HRIS as part of the engineer\'s permanent record.' },
  { icon: ScrollText, title: '360 peer feedback', body: 'At day 60, we collect anonymous feedback from your engineers who\'ve worked alongside the C2H candidate. This is the most predictive single signal we\'ve found.' },
  { icon: TrendingUp, title: 'Contribution telemetry', body: 'PR velocity, code review patterns, ticket completion, on-call participation. Auto-collected from your tools — no manual reporting.' },
  { icon: HeartHandshake, title: 'Engineer self-assessment', body: 'At each milestone, the engineer writes their own assessment. We compare to manager and peer views — gaps surface coaching needs early.' },
];

const RISK_OPTIONS = [
  { icon: RefreshCw, title: 'Replacement option', body: 'If concerns emerge at the 30-day or 60-day milestone, we offer a replacement at no conversion-fee charge. The replacement starts a fresh 90-day clock.' },
  { icon: AlertTriangle, title: 'Clean exit', body: 'Either side can exit at any milestone with 5 business days notice. No conversion fees, no penalties, no debate. The contract is designed to make stopping easy.' },
  { icon: Target, title: 'Extension option', body: 'If you need more data at day 90, the contract can extend by 30 or 60 days. Same terms, same milestone framework. Conversion deferred, not denied.' },
];

const COMPLIANCE = [
  { icon: Globe2, title: 'Cross-border employment', body: 'For US, Canada, UK, EU and APAC engagements, we handle employer-of-record compliance through the contract period. Engineer is a legal Aayulogic employee until conversion day.' },
  { icon: FileText, title: 'IP cleanroom', body: 'All work product is assigned to you on creation under the MSA. Day-90 conversion is a paper change for the engineer, not a re-assignment of IP — everything they built is already yours.' },
  { icon: Scale, title: 'Visa & immigration support', body: 'If conversion requires visa sponsorship (US H-1B, Canada Work Permit, UK Skilled Worker), our immigration partners support the transition. Average lead time: built into the 90-day window.' },
  { icon: Briefcase, title: 'Background & reference verification', body: 'Pre-engagement we run background, education, and 3-reference checks. You receive the report before the engineer starts — no surprises at day 90.' },
];

const VS_TABLE = [
  { factor: 'Time to evaluate', c2h: '90 days on real work', direct: '3-5 hours of interviews', staffaug: 'Not a hiring path' },
  { factor: 'Wrong-hire risk', c2h: 'Validated before commit', direct: 'High — interview bias', staffaug: 'N/A' },
  { factor: 'Conversion-period payroll', c2h: 'We handle', direct: 'You handle', staffaug: 'We handle' },
  { factor: 'Engineer protection', c2h: 'Continuous employment', direct: 'Burned bridges on no-hire', staffaug: 'N/A' },
  { factor: 'Cost of wrong hire', c2h: '~5% of annual comp', direct: '~30-50% of annual comp', staffaug: 'N/A' },
  { factor: 'Conversion guarantee', c2h: 'Clear go/no-go criteria', direct: 'No formal mechanism', staffaug: 'After 12 months free' },
  { factor: 'Compatible with H-1B / visas', c2h: 'Yes — with planning', direct: 'Yes', staffaug: 'No path to direct hire' },
];

const CASE_STUDY = {
  client: 'Lumen Trade (US Fintech)',
  challenge: 'Lumen had been burned twice on senior backend hires who looked great in interviews and underperformed in week 3. Their CTO wanted a model that validated on real work before commitment.',
  approach: 'We placed two senior Go engineers on 90-day C2H contracts. Both were embedded in Lumen\'s payment-routing team with full FTE responsibilities. Structured 30/60/90 reviews ran with Lumen\'s EM and three of their peers.',
  outcome: 'One engineer converted at day 90 and is now a Staff Engineer at Lumen 22 months later. The second engineer raised concerns mutually at day 60 — Lumen exited cleanly and we placed the engineer on a different engagement within 11 days. Zero wrong-hire cost.',
  metric: '0 wrong-hire losses',
  duration: '22 months retention',
};

const FAQS = [
  {
    q: 'How is C2H different from a probation period after a direct hire?',
    a: 'A probation period happens after you\'ve committed — issued the offer, started payroll, given equity, dealt with visa transfers. Exit costs are high (severance, re-recruitment, brand risk). C2H validates before you commit: the engineer is on our payroll during the 90 days, exit costs are near zero, and there\'s no career hit for the engineer either.',
  },
  {
    q: 'Won\'t the best engineers refuse a contract role?',
    a: 'Some do — we don\'t place engineers on C2H without their explicit consent. The engineers who accept are typically people early in a job search who want to validate fit too, or candidates exploring a new domain. We\'ve found about 35% of our senior bench is open to C2H placements.',
  },
  {
    q: 'What if we want to keep the engineer past 90 days but not convert?',
    a: 'We extend the contract. Standard extensions are 30 or 60 days under the same terms. Some clients run for 6 months as extended contract and only convert when an internal headcount slot opens. The flexibility is the point.',
  },
  {
    q: 'Who decides the conversion comp?',
    a: 'You do. We provide market benchmarks (we have rich data from 1,200+ placements) and we facilitate the conversation with the engineer. But the offer is yours to make and the engineer\'s to accept. We act as honest broker, not negotiator.',
  },
  {
    q: 'What happens to the engineer if we don\'t convert?',
    a: 'They remain a full-time Aayulogic employee with continuous employment, benefits, and pay. They roll to the bench and onto the next engagement — typically within 2 weeks. This is why senior engineers accept C2H: there\'s no career or income risk to them.',
  },
  {
    q: 'Do you charge a conversion fee?',
    a: 'Yes, a transparent one-time conversion fee at day 90 — significantly lower than recruiter fees because we\'ve already de-risked the hire. After 12 months of engagement (rare for C2H, since most convert at 90), conversion is free. Specific rates shared with role spec.',
  },
  {
    q: 'Can we run a C2H trial for an engineering manager or PM, not just engineers?',
    a: 'Yes. C2H works for senior+ ICs and managers. We have placed VP Engineering, Director of Product, and Engineering Manager candidates on C2H tracks. The milestone framework is the same; the criteria adjust to the role.',
  },
  {
    q: 'How is performance assessed at each milestone?',
    a: 'A standard rubric across four dimensions: technical contribution, collaboration, growth trajectory, cultural fit. Each is scored 1-5 by the EM, peers, and the engineer. We share the rubric upfront — both you and the engineer know what success looks like.',
  },
];

export function C2HClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Header />

      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/talent" className="hover:text-brand-blue transition-colors">Talent & Engagement</Link>
          <span>/</span>
          <span className="text-brand-navy font-medium">Contract-to-Hire (C2H)</span>
        </div>
      </div>

      {/* ============ 1. HERO — Split: text + giant 90 ============ */}
      <section className="relative overflow-hidden bg-white pt-24 pb-24 sm:pt-28 sm:pb-32">
        <div
          aria-hidden
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(0,194,255,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(4,92,179,0.1) 0%, transparent 50%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/8 border border-brand-blue/20 mb-6"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                Engagement Model 03 · Contract-to-Hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-brand-navy text-balance"
            >
              Try the talent.{' '}
              <span className="bg-gradient-to-r from-brand-blue via-brand-system-blue to-brand-cyan bg-clip-text text-transparent">
                Then keep them.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: easingCurve.industrial }}
              className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              The historic problem with senior hires is that the interview is
              a fiction and the first 90 days is the truth. C2H flips the
              order: validate on real work first, commit after.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: easingCurve.industrial }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg shadow-brand-blue/20"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
                <span className="relative">Start a C2H Search</span>
                <ArrowUpRight className="relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#milestones"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-white border border-brand-blue/20 text-brand-navy hover:border-brand-blue/40 transition-all"
              >
                See the milestone framework
                <ArrowUpRight className="w-4 h-4 text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right visual — big 90-day badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-brand-blue via-brand-system-blue to-brand-cyan text-white overflow-hidden p-8 flex flex-col justify-between shadow-2xl shadow-brand-blue/30">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
              <div className="relative flex items-start justify-between">
                <Target className="w-8 h-8 text-white/80" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">Validation Window</span>
              </div>
              <div className="relative">
                <div className="text-[160px] font-bold leading-none tracking-tighter">90</div>
                <div className="text-2xl font-bold -mt-3">days on real work</div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="px-3 py-2 rounded bg-white/15 border border-white/20 text-center">
                    <div className="text-white font-bold text-sm">3</div>
                    <div className="text-xs text-white/80">milestones</div>
                  </div>
                  <div className="px-3 py-2 rounded bg-white/15 border border-white/20 text-center">
                    <div className="text-white font-bold text-sm">5d</div>
                    <div className="text-xs text-white/80">exit notice</div>
                  </div>
                  <div className="px-3 py-2 rounded bg-white/15 border border-white/20 text-center">
                    <div className="text-white font-bold text-sm">0</div>
                    <div className="text-xs text-white/80">surprises</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 2. THE BRIEF — the hiring problem ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              The Hiring Problem
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
              A wrong senior hire costs you 30–50% of their first-year comp.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Plus the opportunity cost of the months it took to identify the mismatch
              — and the months it will take to backfill. C2H absorbs that risk on
              our side of the contract.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              { stat: '46%', label: 'of senior hires turn out to be a mismatch in the first 18 months', source: 'Industry average, 2024' },
              { stat: '$240k', label: 'fully-loaded cost of replacing a senior engineer', source: 'SHRM, 2024' },
              { stat: '5.2 mo', label: 'average time to identify a wrong hire after start date', source: 'Aayulogic engagement data' },
            ].map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-7 rounded-2xl bg-white border border-brand-blue/10 text-center"
              >
                <div className="text-5xl font-bold text-brand-blue mb-3">{s.stat}</div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">{s.label}</p>
                <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{s.source}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. 90-DAY VALIDATION TIMELINE ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              The 90-Day Validation Window
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Three checkpoints. Clean decisions.
            </h2>
          </div>

          <div className="relative">
            <div aria-hidden className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-brand-blue/10 via-brand-cyan/40 to-brand-blue/10" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {VALIDATION_TIMELINE.map((t, idx) => (
                <motion.div
                  key={t.day}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="relative w-24 mx-auto mb-5">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-xl shadow-brand-blue/30 z-10 relative">
                      <span className="text-white font-bold text-xl">{t.day}</span>
                    </div>
                  </div>
                  <div className="p-5 rounded-xl bg-white border border-brand-blue/10 text-center">
                    <div className="text-base font-bold text-brand-navy mb-2">{t.label}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{t.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. MILESTONE FRAMEWORK ============ */}
      <section id="milestones" className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Milestone Framework
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Criteria written down on day one — for both sides.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              The engineer knows exactly what success looks like. Your EM
              knows exactly what to evaluate against. The conversion decision
              is structured, not subjective.
            </p>
          </div>

          <div className="space-y-6">
            {MILESTONES.map((m, idx) => (
              <motion.div
                key={m.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="grid lg:grid-cols-12 gap-6 p-7 rounded-2xl bg-white border border-brand-blue/10"
              >
                <div className="lg:col-span-2">
                  <div className="text-5xl font-bold bg-gradient-to-br from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                    {m.number}
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{m.name}</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {m.criteria.map((c) => (
                      <li key={c} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-4">
                  <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/15 h-full">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-2">Decision</div>
                    <p className="text-sm font-semibold text-brand-navy">{m.decision}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. TALENT BAR ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                The Talent Bar
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
                Same bar as direct hire. Different commitment.
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                A short-term contract is not an excuse to lower the hiring
                bar. The engineers we place on C2H tracks are the same people
                we&apos;d place on a 3-year dedicated squad — pre-vetted,
                senior-level, and conversion-aligned.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30">
                <Sparkles className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-brand-navy">~73% conversion rate at day 90</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {TALENT_BAR.map((t, idx) => (
                <motion.div
                  key={t.stage}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="p-5 rounded-xl border border-brand-blue/10 bg-gradient-to-r from-brand-light/30 to-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-brand-navy mb-1.5">{t.stage}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{t.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6. CONVERSION FLOW ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              The Conversion Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              From go-decision to first FTE paycheck in 15 days.
            </h2>
            <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-2xl">
              Most C2H processes break at the conversion gate — surprise comp
              gaps, visa hiccups, awkward salary negotiations. We engineer the
              last 15 days as deliberately as the first 75.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONVERSION_FLOW.map((c, idx) => (
              <motion.div
                key={c.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">{c.step}</div>
                <h3 className="text-base font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. PERFORMANCE DOCUMENTATION ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Performance Documentation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              The paper trail you&apos;d wish you had after every interview.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              At conversion, you don&apos;t just have a gut feeling — you have
              90 days of structured assessment, peer feedback, and contribution
              telemetry. That data lives in your HRIS as the engineer&apos;s
              permanent record on day 91.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {PERFORMANCE_DOCS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-7 rounded-2xl border border-brand-blue/10 bg-gradient-to-br from-white to-brand-light/30"
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

      {/* ============ 8. RISK & EXIT OPTIONS ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Risk & Exit Options
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Three off-ramps. Pick whichever fits.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              The contract is designed to make exits easy — that&apos;s the
              point. If exits are painful, the model fails. Here&apos;s how
              you can step away at any milestone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {RISK_OPTIONS.map((r, idx) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-white border border-brand-blue/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{r.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 9. LEGAL, IP & CROSS-BORDER ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Legal, IP & Cross-Border
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Procurement-clean. Conversion-ready. Globally compliant.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {COMPLIANCE.map((p, idx) => {
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

      {/* ============ 10. COMPARISON TABLE ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              C2H vs. direct hire vs. staff aug.
            </h2>
          </div>

          <div className="rounded-2xl border border-brand-blue/15 overflow-hidden">
            <div className="grid grid-cols-4 bg-brand-navy text-white text-xs font-bold uppercase tracking-[0.18em]">
              <div className="px-5 py-4">Factor</div>
              <div className="px-5 py-4 bg-gradient-to-br from-brand-blue/80 to-brand-cyan/80 text-white">C2H</div>
              <div className="px-5 py-4 text-slate-300">Direct Hire</div>
              <div className="px-5 py-4 text-slate-300">Staff Aug</div>
            </div>
            {VS_TABLE.map((row, idx) => (
              <div
                key={row.factor}
                className={`grid grid-cols-4 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-light/30'}`}
              >
                <div className="px-5 py-4 font-semibold text-brand-navy">{row.factor}</div>
                <div className="px-5 py-4 text-brand-blue font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  {row.c2h}
                </div>
                <div className="px-5 py-4 text-slate-600">{row.direct}</div>
                <div className="px-5 py-4 text-slate-600 flex items-center gap-2">
                  {row.staffaug === 'N/A' || row.staffaug.includes('Not') || row.staffaug.includes('No path') ? <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0" /> : null}
                  {row.staffaug}
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
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
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
              The questions every hiring manager asks before signing.
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
          eyebrow="Start a C2H Search"
          title="Send the role brief. Shortlist in 5 business days."
          body="Tell us what success looks like and what doesn't. We'll come back with 3 conversion-aligned candidates — interview-ready, comp-confirmed, milestone-framework attached."
          primaryLabel="Start a C2H Search"
          secondaryLabel="Talk to Sales"
        />
      </div>
      <Footer />
    </>
  );
}
