'use client';

import { motion } from 'framer-motion';
import {
  Compass,
  PenTool,
  Code2,
  Workflow,
  Rocket,
  LineChart,
  type LucideIcon,
} from 'lucide-react';
import { easingCurve, motionConfig } from '@/lib/utils';

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We understand your business, users, and goals — translating vision into a clear technical roadmap.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description:
      'Wireframes, system design, and prototypes. Scalable architecture before a single line of code.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Agile sprints with code reviews, version control, and continuous integration on every PR.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Automation & QA',
    description:
      'Automated testing and quality gates verify every release for production-grade reliability.',
    icon: Workflow,
  },
  {
    number: '05',
    title: 'Deployment & Launch',
    description:
      'Zero-downtime strategies, monitoring, and rollback plans instrumented from day one.',
    icon: Rocket,
  },
  {
    number: '06',
    title: 'Iterate & Scale',
    description:
      'Live telemetry and continuous delivery — every release becomes the foundation for the next.',
    icon: LineChart,
  },
];

export function HowWeWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: easingCurve.industrial },
    },
  };

  return (
    <section
      id="how-we-work"
      data-theme="dark"
      className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-hidden bg-cobalt-premium"
    >
      <div aria-hidden className="cobalt-grain" />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Six steps.{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
              One way we work.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
            A transparent, repeatable engineering workflow that turns vision into systems built to last.
          </p>
        </motion.div>

        {/* =================== ZIGZAG FLOW =================== */}
        {/* Desktop: horizontal wave with SVG connector. Tablet/Mobile: vertical timeline. */}

        {/* ---- Desktop (lg+) horizontal zigzag ---- */}
        <div className="hidden lg:block relative">
          {/* SVG wave path connecting all nodes */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 460"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#00C2FF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00C2FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* S-wave path: weaves through 6 node positions */}
            <motion.path
              d="M 100 130 Q 200 130 300 230 T 500 230 Q 600 230 700 130 T 900 130 Q 1000 130 1100 230"
              fill="none"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.6, ease: easingCurve.industrial, delay: 0.4 }}
            />
          </svg>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative grid grid-cols-6 gap-4 min-h-[460px]"
          >
            {STEPS.map((step, idx) => {
              const isTop = idx % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={`relative flex flex-col items-center ${
                    isTop ? 'justify-start pt-2' : 'justify-end pb-2'
                  }`}
                >
                  {isTop ? (
                    <>
                      <IconNode icon={step.icon} />
                      <StepText step={step} className="mt-5 text-center" />
                    </>
                  ) : (
                    <>
                      <StepText step={step} className="mb-5 text-center" />
                      <IconNode icon={step.icon} />
                    </>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ---- Tablet/Mobile vertical timeline ---- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:hidden relative"
        >
          {/* Vertical dashed spine */}
          <div
            aria-hidden
            className="absolute left-[36px] sm:left-[44px] top-0 bottom-0 w-px border-l-2 border-dashed border-brand-cyan/35"
          />

          <div className="space-y-8 sm:space-y-10">
            {STEPS.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative flex items-start gap-5 sm:gap-7"
              >
                <IconNode icon={step.icon} size="md" />
                <StepText step={step} className="flex-1 pt-3" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
//  Sub-components
// =============================================================================

function IconNode({
  icon: Icon,
  size = 'lg',
}: {
  icon: LucideIcon;
  size?: 'md' | 'lg';
}) {
  const dim =
    size === 'lg'
      ? 'w-[72px] h-[72px] lg:w-[88px] lg:h-[88px]'
      : 'w-[72px] h-[72px] sm:w-[88px] sm:h-[88px]';
  const iconDim =
    size === 'lg' ? 'w-7 h-7 lg:w-9 lg:h-9' : 'w-7 h-7 sm:w-9 sm:h-9';

  return (
    <div className={`relative flex-shrink-0 ${dim}`}>
      {/* Outer cyan ring with subtle glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #00C2FF, #045CB3, #00C2FF)',
        }}
      />
      {/* Inner padding ring */}
      <div className="absolute inset-[3px] rounded-full bg-brand-navy" />
      {/* Inner gradient core */}
      <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-brand-blue/40 via-brand-navy to-brand-navy flex items-center justify-center shadow-[0_15px_35px_-10px_rgba(0,194,255,0.5)]">
        <Icon className={`${iconDim} text-brand-cyan`} strokeWidth={1.75} />
      </div>
      {/* Outer ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-2 rounded-full blur-xl opacity-50 -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(0,194,255,0.45) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

function StepText({
  step,
  className = '',
}: {
  step: Step;
  className?: string;
}) {
  return (
    <div className={className}>
      <p
        className="font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan to-white leading-none mb-1"
        style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', letterSpacing: '-0.02em' }}
      >
        {step.number}
      </p>
      <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-tight">
        {step.title}
      </h3>
      <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed max-w-[240px]">
        {step.description}
      </p>
    </div>
  );
}
