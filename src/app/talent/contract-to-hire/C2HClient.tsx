'use client';

import { motion } from 'framer-motion';
import {
  Handshake,
  Shield,
  TrendingDown,
  UserCheck,
  Scale,
  FileSignature,
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { easingCurve } from '@/lib/utils';

const FUNNEL_STEPS = [
  {
    width: 'w-full',
    label: 'Engineer joins as contractor',
    sub: 'Aayulogic carries payroll, benefits, compliance.',
  },
  {
    width: 'w-[88%]',
    label: 'Real work, real performance signal',
    sub: 'Months 1-3 — daily code, shipped features, real PRs.',
  },
  {
    width: 'w-[72%]',
    label: 'Mid-contract evaluation',
    sub: 'Optional 30-day improvement plan if needed.',
  },
  {
    width: 'w-[58%]',
    label: 'Conversion decision',
    sub: 'After 3-12 months — your call, on your timeline.',
  },
  {
    width: 'w-[42%]',
    label: 'Direct FTE conversion',
    sub: 'Engineer moves to your payroll. We hand off cleanly.',
  },
];

const PRICING_MATH = [
  {
    period: '< 3 months',
    fee: '100% of one month\'s billing',
    note: 'Discourages early poaching during ramp.',
    highlight: false,
  },
  {
    period: '3-6 months',
    fee: '50% of one month\'s billing',
    note: 'Validation period — partial conversion fee.',
    highlight: false,
  },
  {
    period: '6-12 months',
    fee: '$0 conversion fee',
    note: 'The sweet spot — most C2H conversions land here.',
    highlight: true,
  },
  {
    period: '> 12 months',
    fee: '$0 + 30-day notice',
    note: 'Long-term — clean transition, full hand-off.',
    highlight: false,
  },
];

const DE_RISK = [
  {
    icon: UserCheck,
    title: 'Validate on real work, not interviews',
    body: 'Whiteboard performance ≠ production performance. C2H lets you see how the engineer handles real incidents, real reviews, and real shipping pressure before committing.',
  },
  {
    icon: TrendingDown,
    title: 'Reduce mis-hire cost to zero',
    body: 'A mis-hire at staff level costs ~6 months of comp plus opportunity cost. C2H lets you walk away in 14 days if it isn\'t working — at no cost.',
  },
  {
    icon: Shield,
    title: 'Move the compliance load to us',
    body: 'During the contract period we handle payroll, taxes, benefits, equipment, and IP assignment. You evaluate; we operate.',
  },
  {
    icon: Scale,
    title: 'Convert with confidence',
    body: 'After 6 months you\'ve seen everything — peaks, slumps, escalations. Convert based on signal, not guesses.',
  },
];

const ROLE_FIT = [
  { fit: true, role: 'Staff and Principal engineers' },
  { fit: true, role: 'Engineering leads and managers' },
  { fit: true, role: 'Specialist architects (cloud, security, ML)' },
  { fit: true, role: 'Niche-stack engineers (Rust, Elixir, Erlang)' },
  { fit: false, role: 'Short-term sprint coverage (use Staff Aug)' },
  { fit: false, role: 'Fixed-deliverable scopes (use Dedicated Teams)' },
];

export function C2HClient() {
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
          <span className="text-brand-navy font-medium">Contract-to-Hire</span>
        </div>
      </div>

      {/* Hero — asymmetric */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-cyan/5 pt-24 pb-24 sm:pt-28 sm:pb-32">
        <div
          aria-hidden
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(4,92,179,0.4) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-brand-blue/15 mb-6"
            >
              <Handshake className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                Model 3 · Contract-to-Hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-brand-navy text-balance"
            >
              Hire senior talent —{' '}
              <span className="bg-gradient-to-r from-brand-blue via-brand-system-blue to-brand-cyan bg-clip-text text-transparent">
                with the safety net.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Bring senior engineers on as contractors. Watch them ship real
              work for 3 to 6 months. Convert to FTE when the signal is clear —
              zero conversion fee after six.
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
                <span className="relative">Start a C2H Search</span>
                <ArrowUpRight className="relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-white border border-brand-blue/20 text-brand-navy hover:border-brand-blue/40 transition-all"
              >
                See Conversion Math
                <ArrowUpRight className="w-4 h-4 text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: easingCurve.industrial }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 rounded-3xl bg-white border border-brand-blue/15 shadow-2xl shadow-brand-blue/10">
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-50"
                style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)' }}
              />
              <div className="relative">
                <Sparkles className="w-6 h-6 text-brand-blue mb-4" />
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-2">
                  Convert after 6 months
                </div>
                <div className="text-6xl font-bold text-brand-navy mb-3">$0</div>
                <div className="text-sm text-slate-600 leading-relaxed mb-6">
                  Zero conversion fee. No buyout. No quibbling. Engineer moves
                  to your payroll, we hand off cleanly.
                </div>
                <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-lg font-bold text-brand-navy">68%</div>
                    <div className="text-xs text-slate-500 mt-0.5">C2H conversion rate</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-brand-navy">$0</div>
                    <div className="text-xs text-slate-500 mt-0.5">Replacement cost (14d)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* De-risk section */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Why C2H
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Four ways C2H removes hiring risk.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {DE_RISK.map((d, idx) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: easingCurve.industrial }}
                  className="group flex gap-5 p-7 rounded-xl bg-white border border-brand-blue/12 hover:border-brand-cyan/45 hover:shadow-[0_20px_45px_-15px_rgba(4,92,179,0.2)] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/8 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan flex items-center justify-center flex-shrink-0 transition-all">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">{d.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{d.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion funnel visual */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              The Conversion Funnel
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              From contractor to FTE — in five stages.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FUNNEL_STEPS.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: easingCurve.industrial }}
                className="relative"
              >
                <div
                  className={`relative mx-auto p-5 rounded-xl bg-white border border-brand-blue/15 shadow-sm ${s.width}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-bold text-brand-navy">{s.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
                    </div>
                  </div>
                </div>
                {idx < FUNNEL_STEPS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-brand-blue/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing math */}
      <section id="pricing" className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Conversion Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Transparent. Decreasing. Eventually zero.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              The longer the contract runs, the lower the conversion fee. By
              six months it's gone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRICING_MATH.map((p, idx) => (
              <motion.div
                key={p.period}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: easingCurve.industrial }}
                className={`relative p-6 rounded-2xl ${
                  p.highlight
                    ? 'bg-brand-navy text-white shadow-xl shadow-brand-blue/20 scale-105 z-10'
                    : 'bg-white border border-brand-blue/12'
                }`}
              >
                {p.highlight && (
                  <>
                    <div
                      aria-hidden
                      className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-50"
                      style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)' }}
                    />
                    <div className="relative inline-block px-2 py-0.5 mb-3 rounded text-[9px] font-bold uppercase tracking-[0.18em] bg-brand-cyan text-brand-navy">
                      Most Common
                    </div>
                  </>
                )}
                <div className={`relative text-[10px] font-bold uppercase tracking-[0.18em] mb-2 ${p.highlight ? 'text-brand-cyan' : 'text-brand-blue'}`}>
                  {p.period}
                </div>
                <div className={`relative text-2xl font-bold mb-3 ${p.highlight ? 'text-white' : 'text-brand-navy'}`}>
                  {p.fee}
                </div>
                <p className={`relative text-xs leading-relaxed ${p.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                  {p.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to use */}
      <section className="relative py-20 sm:py-24 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              When To Use C2H
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Good fit, bad fit. Be honest before signing.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              C2H works brilliantly for senior roles where mis-hire cost is
              high. It's the wrong shape for short bursts of capacity or
              fixed-scope deliverables.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-brand-blue/20">
              <FileSignature className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-medium text-brand-navy">Master SOW covers all C2H placements</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {ROLE_FIT.map((r) => (
                <li
                  key={r.role}
                  className={`flex items-center gap-4 p-4 rounded-lg border ${
                    r.fit ? 'bg-white border-brand-blue/15' : 'bg-slate-50/60 border-slate-200'
                  }`}
                >
                  {r.fit ? (
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                  <span className={`text-sm font-medium ${r.fit ? 'text-brand-navy' : 'text-slate-500'}`}>
                    {r.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Start a Search"
        title="Send the role. We'll shortlist contractors with conversion intent."
        body="Tell us what you'd hire FTE for. We'll send 3 contract-to-hire profiles within 48 hours — each pre-screened for long-term fit, not just current-sprint coverage."
        primaryLabel="Start C2H Search"
        secondaryLabel="Talk to Talent"
      />
      <Footer />
    </>
  );
}
