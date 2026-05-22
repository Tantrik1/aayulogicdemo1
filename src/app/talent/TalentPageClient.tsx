'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  UsersRound,
  Handshake,
  Globe2,
  ChevronDown,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionHero } from '@/components/section/SectionHero';
import { CTABand } from '@/components/section/CTABand';
import { TALENT_MODELS } from '@/lib/constants';
import { easingCurve } from '@/lib/utils';

const MODEL_VISUALS = [
  {
    slug: 'staff-augmentation',
    icon: Users,
    color: 'from-brand-blue to-brand-system-blue',
    leadTime: '7 days',
    commitment: 'Flexible',
    bestFor: 'Filling specific skill gaps inside an existing team',
    keyBenefits: [
      'Pre-vetted senior engineers',
      'Direct integration into your SDLC',
      'No long-term commitment',
      'Skill match within 7 business days',
    ],
  },
  {
    slug: 'dedicated-teams',
    icon: UsersRound,
    color: 'from-brand-system-blue to-brand-cyan',
    leadTime: '2-3 weeks',
    commitment: '6+ months',
    bestFor: 'Owning a product line or roadmap end-to-end',
    keyBenefits: [
      'Cohesive self-managed squad',
      'Dedicated tech lead + scrum master',
      'Sprint cadence aligned with your release cycle',
      'Single point of accountability',
    ],
  },
  {
    slug: 'contract-to-hire',
    icon: Handshake,
    color: 'from-brand-cyan to-brand-blue',
    leadTime: '10 days',
    commitment: '3-6 months → FTE',
    bestFor: 'De-risking senior hires before conversion',
    keyBenefits: [
      'Performance validated on real work',
      'Zero-fee conversion after contract period',
      'Direct employment hand-off',
      'Aayulogic handles compliance during contract',
    ],
  },
  {
    slug: 'build-operate-transfer',
    icon: Globe2,
    color: 'from-brand-blue to-brand-cyan',
    leadTime: '6-12 weeks',
    commitment: '18-36 months',
    bestFor: 'Standing up your own offshore development center',
    keyBenefits: [
      'Aayulogic builds & operates your ODC',
      'Defined transfer milestone and price',
      'Legal entity setup support',
      'Knowledge transfer playbook included',
    ],
  },
];

const HIRING_FUNNEL = [
  {
    step: '01',
    title: 'Brief',
    body: 'Share role spec, tech stack, and SLA expectations. Same-day intake call.',
    duration: 'Day 1',
  },
  {
    step: '02',
    title: 'Shortlist',
    body: 'We send 3 pre-vetted candidate profiles with code samples and references.',
    duration: 'Day 2-3',
  },
  {
    step: '03',
    title: 'Technical screen',
    body: "You run your standard interview loop — we won't pre-coach or filter your bar.",
    duration: 'Day 4-5',
  },
  {
    step: '04',
    title: 'Onboard',
    body: 'Selected engineer integrates with your tools, repos, and standups.',
    duration: 'Day 6-7',
  },
];

const FAQ = [
  {
    q: 'How fast can you actually deploy senior engineers?',
    a: 'Most senior IC roles (backend, frontend, DevOps) — 5 to 7 business days from signed SOW. Specialist roles (ML research, security architects) — 10 to 14 days. Architect-level roles are surge-priced and may take 2-3 weeks.',
  },
  {
    q: 'What happens if an engineer underperforms?',
    a: 'You can request a replacement within the first 14 days at no cost. We absorb the ramp-up time. After 14 days, we work with you on a 30-day improvement plan with weekly check-ins, or replace with a 50% credit on the in-flight days.',
  },
  {
    q: 'Do we get to interview candidates?',
    a: 'Always. We send 3 profiles per role, you run your standard interview loop. We never push candidates — if none meet your bar, we send another shortlist within 48 hours at no charge.',
  },
  {
    q: 'How does Contract-to-Hire conversion pricing work?',
    a: 'Zero conversion fee after a 6-month contract. Earlier conversion (3-6 months) is a flat 50% of one month\'s billing. After 12 months, conversion is free with 30-day notice.',
  },
  {
    q: 'Can engineers work on-site?',
    a: 'Yes — we have engineers in 8 global offices and a remote-first bench across 20 countries. On-site placements come with relocation support handled by us.',
  },
  {
    q: 'What about IP and confidentiality?',
    a: 'All IP created during engagement is assigned to you on day one via our master agreement. Engineers sign your NDA before any code access. We also carry $5M E&O insurance per engagement.',
  },
];

const TRUST_STATS = [
  { label: 'Pre-vetted bench', value: '400+', icon: Users },
  { label: 'Avg. deployment', value: '7 days', icon: Clock },
  { label: 'Retention rate', value: '94%', icon: ShieldCheck },
  { label: 'Conversion fee', value: '$0', icon: Sparkles },
];

export function TalentPageClient() {
  const [activeModel, setActiveModel] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const active = TALENT_MODELS[activeModel];
  const activeVisual = MODEL_VISUALS[activeModel];
  const ActiveIcon = activeVisual.icon;

  return (
    <>
      <Header />

      <SectionHero
        eyebrow="Talent & Engagement"
        title="Senior engineering talent —"
        highlight="deployed in 7 days."
        subtitle="Four engagement models. One pre-vetted global bench of 400+ engineers. Whether you need a specialist for a sprint or a 30-person offshore center, we match dedicated muscle to your operating model."
        primaryCta={{ label: 'Match a Team', href: '#contact' }}
        secondaryCta={{ label: 'See Engagement Models', href: '#models' }}
      />

      {/* Trust band */}
      <section className="relative bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {TRUST_STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-4 p-5 rounded-xl bg-brand-light/40 border border-brand-blue/8"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-md shadow-brand-blue/20 flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-2xl font-bold text-brand-navy">
                      {s.value}
                    </div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider truncate">
                      {s.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement models — tabbed comparison */}
      <section id="models" className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Engagement Models
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Four ways to bring our engineers onto your team.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Click a model to see deployment timing, commitment shape, and what
              it's best for.
            </p>
          </div>

          {/* Tab bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {TALENT_MODELS.map((m, idx) => {
              const Icon = MODEL_VISUALS[idx].icon;
              const isActive = idx === activeModel;
              return (
                <button
                  key={m.slug}
                  onClick={() => setActiveModel(idx)}
                  className={`group relative p-5 rounded-xl border text-left transition-all overflow-hidden ${
                    isActive
                      ? 'border-brand-blue/40 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 shadow-md'
                      : 'border-brand-blue/10 bg-white hover:border-brand-blue/30'
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, rgba(0,194,255,0.7), transparent)',
                      }}
                    />
                  )}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-9 h-9 rounded-md flex items-center justify-center transition-all ${
                        isActive
                          ? `bg-gradient-to-br ${MODEL_VISUALS[idx].color}`
                          : 'bg-brand-blue/8 group-hover:bg-brand-blue/15'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          isActive ? 'text-white' : 'text-brand-blue'
                        }`}
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Model {idx + 1}
                    </span>
                  </div>
                  <h3
                    className={`text-sm font-bold leading-tight ${
                      isActive ? 'text-brand-blue' : 'text-brand-navy'
                    }`}
                  >
                    {m.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active model detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: easingCurve.industrial }}
              className="grid lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-white border border-brand-blue/15 shadow-md shadow-brand-blue/5">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activeVisual.color} flex items-center justify-center shadow-lg shadow-brand-blue/20 flex-shrink-0`}
                  >
                    <ActiveIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-1">
                      {active.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {active.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="p-3 rounded-md bg-brand-light/40">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1">
                      Lead Time
                    </div>
                    <div className="text-base font-bold text-brand-navy">
                      {activeVisual.leadTime}
                    </div>
                  </div>
                  <div className="p-3 rounded-md bg-brand-light/40">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1">
                      Commitment
                    </div>
                    <div className="text-base font-bold text-brand-navy">
                      {activeVisual.commitment}
                    </div>
                  </div>
                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-3">
                  Best For
                </p>
                <p className="text-sm text-brand-navy font-medium mb-6">
                  {activeVisual.bestFor}
                </p>

                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-3">
                  What You Get
                </p>
                <ul className="space-y-3">
                  {activeVisual.keyBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-lg bg-brand-navy text-white hover:bg-brand-blue transition-colors"
                >
                  Start with {active.title}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Side comparison rail */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-brand-navy text-white relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)',
                  }}
                />
                <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-5">
                  Compare At A Glance
                </p>
                <div className="relative space-y-3">
                  {TALENT_MODELS.map((m, idx) => {
                    const visual = MODEL_VISUALS[idx];
                    const Icon = visual.icon;
                    const isActive = idx === activeModel;
                    return (
                      <button
                        key={m.slug}
                        onClick={() => setActiveModel(idx)}
                        className={`w-full text-left p-4 rounded-lg border transition-all flex items-center gap-3 ${
                          isActive
                            ? 'border-brand-cyan/50 bg-white/5'
                            : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 flex-shrink-0 ${
                            isActive ? 'text-brand-cyan' : 'text-slate-400'
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-semibold truncate ${
                              isActive ? 'text-white' : 'text-slate-200'
                            }`}
                          >
                            {m.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {visual.leadTime} · {visual.commitment}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Hiring funnel */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              The 7-Day Hiring Funnel
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              From brief to first standup — in a week.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {HIRING_FUNNEL.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                  ease: easingCurve.industrial,
                }}
                className="relative p-6 rounded-xl bg-white border border-brand-blue/10"
              >
                {idx < HIRING_FUNNEL.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden lg:block absolute top-1/2 -right-2.5 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-brand-blue/30 z-10"
                  />
                )}
                <div className="text-5xl font-bold bg-gradient-to-br from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {step.body}
                </p>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue px-2 py-1 rounded bg-brand-blue/8">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Frequently Asked
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Questions our clients ask before signing.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className={`rounded-xl border transition-colors overflow-hidden ${
                    isOpen
                      ? 'border-brand-blue/30 bg-brand-light/30'
                      : 'border-brand-blue/10 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-base font-semibold text-brand-navy">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: easingCurve.industrial,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Get Matched"
        title="Tell us what you need. We'll send a shortlist in 48 hours."
        body="No long-form RFPs. Send your role spec, tech stack, and SLA expectations — we'll respond with 3 candidate profiles and references within two business days."
        primaryLabel="Match a Team"
        secondaryLabel="Talk to Sales"
      />
      <Footer />
    </>
  );
}
