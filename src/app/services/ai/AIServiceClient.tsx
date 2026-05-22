'use client';

import { motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import {
  Sparkles,
  Bot,
  MessageSquare,
  Eye,
  Database,
  Workflow,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionHero } from '@/components/section/SectionHero';
import { CTABand } from '@/components/section/CTABand';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { easingCurve } from '@/lib/utils';

const CAPABILITY_ICONS = [Sparkles, Bot, MessageSquare, Eye, Database, Workflow];

const AI_STACK = [
  'openai',
  'python',
  'pytorch',
  'tensorflow',
  'nextjs2',
  'nodejs',
  'postgresql',
  'mongodb',
];

const PROOF_POINTS = [
  {
    metric: '62%',
    label: 'Tier-1 support volume handled by AI agents at NorthCloud Health',
  },
  {
    metric: '4 min → 11s',
    label: 'Clinician search time after RAG pipeline rollout at Meridian Health',
  },
  {
    metric: '73%',
    label: 'Manual QC reduction via Computer Vision at Cobalt Industries',
  },
];

const HOW_WE_WORK = [
  {
    step: '01',
    title: 'Discovery & Feasibility',
    body: 'Two-week sprint mapping your use case to a build vs. buy decision. We tell you when not to build.',
  },
  {
    step: '02',
    title: 'Prototype with Real Data',
    body: 'No demo data — we evaluate against your actual signal. You see hit rate and cost-per-call by week 3.',
  },
  {
    step: '03',
    title: 'Productionize',
    body: 'Eval harness, guardrails, observability, fallback chains. Hand-off ready, not just demo-ready.',
  },
  {
    step: '04',
    title: 'Operate & Iterate',
    body: 'Optional MLOps retainer — drift monitoring, eval re-runs, and quarterly model upgrades.',
  },
];

export function AIServiceClient() {
  const category = SERVICE_CATEGORIES.find((c) => c.key === 'ai')!;

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-brand-blue transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/services" className="hover:text-brand-blue transition-colors">
            Services
          </a>
          <span>/</span>
          <span className="text-brand-navy font-medium">AI & Automation</span>
        </div>
      </div>

      <SectionHero
        eyebrow="AI & Automation"
        title="Production AI —"
        highlight="not demos, not slideware."
        subtitle="We ship AI systems that survive real traffic, real edge cases, and real auditors. From RAG to multi-agent orchestration, our engineers think in production, not papers."
        primaryCta={{ label: 'Scope an AI Build', href: '#contact' }}
        secondaryCta={{ label: 'See How We Work', href: '#how-we-work' }}
        stats={[
          { label: 'AI engagements', value: '60+' },
          { label: 'Agents in production', value: '180+' },
          { label: 'P99 latency reduction', value: '90%' },
          { label: 'Avg. eval coverage', value: '94%' },
        ]}
      />

      {/* Capabilities */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                What We Build
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
                Six AI capabilities, one delivery bench.
              </h2>
            </div>
            <p className="lg:col-span-5 text-base text-slate-600 leading-relaxed">
              Each capability comes with its own eval harness, fallback chain,
              and audit trail. We engineer for the messy real world, not the
              happy path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.items.map((item, idx) => {
              const Icon = CAPABILITY_ICONS[idx] ?? Sparkles;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: easingCurve.industrial,
                  }}
                  className="group relative p-7 rounded-xl bg-white border border-brand-blue/12 hover:border-brand-cyan/50 hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.25)] transition-all duration-300 overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(0,194,255,0.6), transparent)',
                    }}
                  />
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-5 shadow-md shadow-brand-blue/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                  {item.techIcons && item.techIcons.length > 0 && (
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100 group-hover:border-brand-blue/20 transition-colors">
                      {item.techIcons.slice(0, 4).map((tech) => (
                        <div
                          key={tech}
                          className="w-6 h-6 rounded bg-white border border-slate-200 flex items-center justify-center p-0.5"
                          title={tech}
                        >
                          <StackIcon name={tech} className="w-4 h-4" />
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="relative py-20 sm:py-24 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-50"
          style={{
            background:
              'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(4,92,179,0.5) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              In Production
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Three numbers from real Aayulogic AI deployments.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROOF_POINTS.map((p, idx) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: easingCurve.industrial,
                }}
                className="p-8 rounded-xl bg-white/5 backdrop-blur border border-white/10"
              >
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent mb-4">
                  {p.metric}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {p.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                Tech Stack
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
                Models, frameworks, and platforms we deploy on.
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                We're stack-agnostic — but opinionated about what works in
                production. We'll match the right tool to your latency,
                privacy, and budget envelope.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-4 gap-3">
                {AI_STACK.map((tech) => (
                  <div
                    key={tech}
                    className="aspect-square rounded-xl bg-white border border-brand-blue/12 flex items-center justify-center hover:border-brand-cyan/45 hover:-translate-y-1 hover:shadow-md transition-all p-4"
                  >
                    <StackIcon name={tech} className="w-full h-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how-we-work" className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Four phases. No POC purgatory.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_WE_WORK.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: easingCurve.industrial,
                }}
                className="p-6 rounded-xl bg-white border border-brand-blue/10"
              >
                <div className="text-5xl font-bold bg-gradient-to-br from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Why Aayulogic for AI
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              We engineer for the auditor, not the demo.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              The hard part of AI isn't the model — it's the eval harness, the
              guardrails, the fallback chain, and the cost envelope. We've
              built all of those, in production, for regulated industries.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-lg bg-brand-navy text-white hover:bg-brand-blue transition-colors"
            >
              Scope an AI Build
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'Eval harness designed before model selection.',
                'Fallback chains for every external LLM call.',
                'Cost-per-call budgeting baked into routing logic.',
                'PII detection and redaction at the edge.',
                'Per-tenant model selection for cost vs. quality tuning.',
                'Drift monitoring and quarterly re-eval cadence.',
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 p-4 rounded-lg bg-brand-light/40 border border-brand-blue/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-navy leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Scope an AI Build"
        title="Send us the use case. We'll tell you whether to build it."
        body="No vendor lock-in talk. We do feasibility analysis first — if the right answer is buy, not build, we'll say so and recommend the vendor."
        primaryLabel="Send a Brief"
        secondaryLabel="Talk to an Engineer"
      />
      <Footer />
    </>
  );
}
