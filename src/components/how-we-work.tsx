'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  PenTool,
  Code2,
  Workflow,
  Rocket,
  LineChart,
} from 'lucide-react';
import { easingCurve } from '@/lib/utils';

type Step = {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
};

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We start by understanding your business, users, and goals — translating vision into a clear technical roadmap with measurable outcomes.',
    icon: Compass,
    highlights: ['Stakeholder interviews', 'Outcome KPIs', 'Roadmap'],
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description:
      'Wireframes, system design, and prototypes built collaboratively — scalable architecture before a single line of code is written.',
    icon: PenTool,
    highlights: ['System design', 'UI prototypes', 'Scope sign-off'],
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Engineers ship in agile sprints with code reviews, version control, and continuous integration — building reliable, maintainable systems.',
    icon: Code2,
    highlights: ['Agile sprints', 'Code reviews', 'CI on every PR'],
  },
  {
    number: '04',
    title: 'Automation & QA',
    description:
      'Automated testing and quality gates ensure every release is verified, secure, and ready for production at scale.',
    icon: Workflow,
    highlights: ['Test pyramid', 'Security checks', 'Quality gates'],
  },
  {
    number: '05',
    title: 'Deployment & Launch',
    description:
      'Zero-downtime strategies, monitoring, and rollback plans — your launch is smooth, predictable, and instrumented from day one.',
    icon: Rocket,
    highlights: ['Zero-downtime', 'Observability', 'Rollback plan'],
  },
  {
    number: '06',
    title: 'Iterate & Scale',
    description:
      'Post-launch we monitor performance, gather insights, and continuously improve — turning every release into a foundation for the next.',
    icon: LineChart,
    highlights: ['Live telemetry', 'Continuous delivery', 'Scale playbooks'],
  },
];

const AUTO_MS = 4800;

export function HowWeWork() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % STEPS.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const ActiveIcon = STEPS[active].icon;

  return (
    <section
      id="how-we-work"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background:
            'radial-gradient(45% 35% at 85% 10%, rgba(0,194,255,0.08) 0%, transparent 70%), radial-gradient(45% 35% at 5% 90%, rgba(4,92,179,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: easingCurve.industrial }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Six steps.{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              One way we work.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            A transparent, repeatable engineering workflow that turns vision into systems built to last.
          </p>
        </motion.div>

        {/* Step Tabs Row */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3 mb-8 lg:mb-10">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === active;
            return (
              <button
                key={step.number}
                onClick={() => setActive(i)}
                className={`group relative rounded-xl p-3 lg:p-4 text-left border transition-all overflow-hidden ${
                  isActive
                    ? 'border-brand-blue/40 bg-white shadow-[0_10px_28px_-14px_rgba(4,92,179,0.32)]'
                    : 'border-slate-200 bg-white/60 hover:border-brand-blue/20 hover:bg-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="howActiveBar"
                    className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan"
                    transition={{ duration: 0.4, ease: easingCurve.industrial }}
                  />
                )}
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gradient-to-br from-brand-blue to-brand-cyan text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:text-brand-blue'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </span>
                  <span
                    className={`text-[10px] lg:text-xs font-bold tracking-[0.16em] ${
                      isActive ? 'text-brand-blue' : 'text-slate-400'
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className={`text-xs lg:text-sm font-semibold leading-tight ${
                    isActive ? 'text-brand-navy' : 'text-slate-600'
                  }`}
                >
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Stage — split panel */}
        <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-6 lg:gap-8 items-stretch">
          {/* Left: Copy */}
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-[0_18px_44px_-22px_rgba(4,92,179,0.28)] overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-cyan/20 blur-3xl pointer-events-none"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: easingCurve.industrial }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan shadow-md shadow-brand-blue/30">
                    <ActiveIcon className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
                    Step {STEPS[active].number} of 06
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight tracking-tight mb-4">
                  {STEPS[active].title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {STEPS[active].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {STEPS[active].highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 text-xs font-semibold text-brand-blue bg-brand-blue/8 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <div className="mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Orbit visual */}
          <div className="relative rounded-2xl bg-gradient-to-br from-brand-navy via-[#0a1c4a] to-brand-navy overflow-hidden min-h-[320px] lg:min-h-[420px] flex items-center justify-center">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-brand-blue/30 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full bg-brand-cyan/25 blur-3xl"
            />

            {/* Rotating rings */}
            {[1, 2, 3].map((r, i) => (
              <motion.div
                key={r}
                aria-hidden
                className="absolute inset-0 m-auto rounded-full border border-white/10"
                style={{
                  width: `${42 + i * 18}%`,
                  height: `${42 + i * 18}%`,
                  borderStyle: i === 1 ? 'dashed' : 'solid',
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 36 + i * 8, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            {/* Step dots on outer ring */}
            <div className="absolute inset-0 m-auto" style={{ width: '78%', height: '78%' }}>
              {STEPS.map((_, i) => {
                const angle = (i / STEPS.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 50 * Math.cos(rad);
                const y = 50 + 50 * Math.sin(rad);
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    aria-label={`Go to step ${i + 1}`}
                  >
                    <span
                      className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-[10px] sm:text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-gradient-to-br from-brand-blue to-brand-cyan text-white scale-125 shadow-[0_0_24px_rgba(0,194,255,0.6)]'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {i + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Center medallion */}
            <div className="relative flex flex-col items-center justify-center">
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full bg-brand-cyan/40 blur-2xl"
                animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.7, 0.45] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ scale: 0.7, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.7, opacity: 0, rotate: 20 }}
                  transition={{ duration: 0.4, ease: easingCurve.industrial }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-[0_18px_44px_-12px_rgba(0,194,255,0.6)]"
                >
                  <ActiveIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </motion.div>
              </AnimatePresence>
              <p className="relative mt-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-white/60">
                Currently
              </p>
              <p className="relative text-sm sm:text-base font-semibold text-white">
                {STEPS[active].title}
              </p>
            </div>
          </div>
        </div>

        {/* Auto-advance hint */}
        <p className="mt-6 text-center text-xs text-slate-400">
          {paused ? 'Paused' : 'Auto-advancing'} · click any step to jump
        </p>
      </div>
    </section>
  );
}
