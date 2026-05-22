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
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { easingCurve } from '@/lib/utils';

const TIMELINE = [
  { day: 'Day 1', label: 'Brief intake', detail: 'Same-day call. Tech, seniority, SLAs captured.' },
  { day: 'Day 2', label: 'Shortlist sent', detail: '3 profiles + code samples + references.' },
  { day: 'Day 3', label: 'Your interviews', detail: 'You run your bar — we never pre-coach.' },
  { day: 'Day 5', label: 'Selection', detail: 'Decision + onboarding paperwork sent.' },
  { day: 'Day 7', label: 'First standup', detail: 'Engineer joins your ceremonies, repos, and tools.' },
];

const ROLE_TYPES = [
  { icon: Code2, label: 'Backend Engineers', stack: 'Go · Node · Python · Java · Rust' },
  { icon: Database, label: 'Data Engineers', stack: 'Spark · dbt · Airflow · Snowflake' },
  { icon: Cloud, label: 'DevOps / SRE', stack: 'K8s · Terraform · AWS · Azure · GCP' },
  { icon: Brain, label: 'ML / AI Engineers', stack: 'PyTorch · LangChain · Vector DBs' },
  { icon: Smartphone, label: 'Mobile Engineers', stack: 'iOS · Android · React Native · Flutter' },
  { icon: Shield, label: 'Security Engineers', stack: 'AppSec · CloudSec · Zero-Trust' },
  { icon: Target, label: 'QA Automation', stack: 'Playwright · Cypress · Selenium' },
  { icon: Users, label: 'Frontend Engineers', stack: 'React · Next.js · Vue · TypeScript' },
];

const VS_TABLE = [
  {
    factor: 'Time to first commit',
    aayulogic: '7 business days',
    agency: '4-6 weeks',
    freelance: '2-3 weeks',
  },
  {
    factor: 'Replacement guarantee',
    aayulogic: '14 days, no-cost',
    agency: 'Contractual, slow',
    freelance: 'None',
  },
  {
    factor: 'Bench depth',
    aayulogic: '400+ engineers',
    agency: 'Variable',
    freelance: 'One',
  },
  {
    factor: 'Compliance + payroll',
    aayulogic: 'We handle',
    agency: 'We handle',
    freelance: 'You handle',
  },
  {
    factor: 'IP assignment',
    aayulogic: 'Day-one master SOW',
    agency: 'Per contract',
    freelance: 'Per contract',
  },
];

export function StaffAugClient() {
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

      {/* Hero */}
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
                Model 1 · Staff Augmentation
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
              just senior muscle, available when you need it.
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

      {/* 7-day timeline */}
      <section id="timeline" className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              The 7-Day Path
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              From signed SOW to first standup.
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
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

      {/* Roles we fill */}
      <section className="relative py-20 sm:py-24 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Roles We Fill
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Eight specialist tracks, every seniority level.
            </h2>
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
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/8 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan flex items-center justify-center mb-4 transition-all">
                    <Icon className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-brand-navy mb-1.5">{r.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.stack}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VS table */}
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

      {/* Pricing model */}
      <section className="relative py-20 sm:py-24 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              Pricing Model
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Flat hourly rate. No platform fee. No conversion fee.
            </h2>
            <p className="mt-5 text-base text-slate-300 leading-relaxed">
              You pay only for tracked engineer hours. Replacements within 14
              days don't restart billing. Convert to FTE for free after 12
              months.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Mid-Senior', rate: '$45', detail: '5-8 yrs · IC' },
              { label: 'Senior', rate: '$65', detail: '8-12 yrs · IC' },
              { label: 'Staff / Principal', rate: '$95', detail: '12+ yrs · Lead' },
            ].map((tier) => (
              <div
                key={tier.label}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan mb-3">
                  {tier.label}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{tier.rate}</span>
                  <span className="text-sm text-slate-400">/hr</span>
                </div>
                <div className="text-xs text-slate-400">{tier.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badge strip */}
      <section className="relative py-16 bg-white">
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

      <CTABand
        eyebrow="Get Matched"
        title="Send the role spec. Get a shortlist in 48 hours."
        body="No RFPs, no panel calls, no nonsense. Tell us the stack, the seniority, and the SLA — we'll send three vetted profiles by end of next business day."
        primaryLabel="Send Role Brief"
        secondaryLabel="Talk to Sales"
      />
      <Footer />
    </>
  );
}
