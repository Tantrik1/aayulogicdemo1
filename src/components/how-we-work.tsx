'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Compass,
  PenTool,
  Code2,
  Workflow,
  Rocket,
  LineChart,
} from 'lucide-react';
import { motionConfig, easingCurve } from '@/lib/utils';

type Step = {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
};

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We start by understanding your business, users, and goals — translating vision into a clear technical roadmap with measurable outcomes.',
    icon: Compass,
    accent: 'from-brand-blue to-brand-cyan',
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description:
      'Wireframes, system design, and UI prototypes are built collaboratively — ensuring scalable architecture before a single line of code is written.',
    icon: PenTool,
    accent: 'from-brand-cyan to-brand-blue',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Our engineers ship in agile sprints with code reviews, version control, and continuous integration — building reliable, maintainable systems.',
    icon: Code2,
    accent: 'from-brand-blue to-brand-cyan',
  },
  {
    number: '04',
    title: 'Automation & QA',
    description:
      'Automated testing, CI/CD pipelines, and quality gates ensure every release is verified, secure, and ready for production at scale.',
    icon: Workflow,
    accent: 'from-brand-cyan to-brand-blue',
  },
  {
    number: '05',
    title: 'Deployment & Launch',
    description:
      'We deploy with zero-downtime strategies, monitoring, and rollback plans — so your launch is smooth, predictable, and instrumented from day one.',
    icon: Rocket,
    accent: 'from-brand-blue to-brand-cyan',
  },
  {
    number: '06',
    title: 'Iterate & Scale',
    description:
      'Post-launch, we monitor performance, gather insights, and continuously improve — turning every release into a foundation for the next.',
    icon: LineChart,
    accent: 'from-brand-cyan to-brand-blue',
  },
];

// Subtle floating orbs in the backdrop
const ORBS = [
  { top: '8%', left: '6%', size: 280, delay: 0 },
  { top: '55%', left: '88%', size: 360, delay: 1.2 },
  { top: '78%', left: '12%', size: 220, delay: 2.4 },
];

export function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  // Vertical progress rail tied to scroll position over the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 30%'],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: easingCurve.industrial },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      {/* =============== AMBIENT BACKDROP =============== */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 10% 10%, rgba(0,194,255,0.05) 0%, transparent 70%), radial-gradient(40% 30% at 95% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Faint grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0A192F 1px, transparent 1px), linear-gradient(to bottom, #0A192F 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at center, black 35%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 35%, transparent 80%)',
        }}
      />

      {/* Floating orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute rounded-full pointer-events-none"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            background:
              i % 2 === 0
                ? 'radial-gradient(circle, rgba(0,194,255,0.10) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(4,92,179,0.10) 0%, transparent 70%)',
            filter: 'blur(40px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 18,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto">
        {/* =============== HEADER =============== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            6 Easy Steps To{' '}
            <span className="inline-block pb-1 bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              Work With Us
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            From strategy and design to development, automation, and deployment — we
            follow a transparent, agile, and collaborative workflow that ensures every
            project is delivered with speed, precision, and long-term scalability.
          </p>
        </motion.div>

        {/* =============== STEPS — TIMELINE LAYOUT =============== */}
        <div ref={gridRef} className="relative">
          {/* Center vertical rail (lg+) */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(4,92,179,0.18) 8%, rgba(4,92,179,0.18) 92%, transparent 100%)',
            }}
          />
          {/* Animated scroll-progress fill on the rail */}
          <motion.div
            aria-hidden
            className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] rounded-full bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-blue origin-top"
            style={{ height: railHeight, boxShadow: '0 0 12px rgba(0,194,255,0.55)' }}
          />

          {/* Mobile: single column. Tablet: 2-column. Desktop: zig-zag along center rail */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={gridInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-0"
          >
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={[
                    'relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center',
                    i !== 0 ? 'lg:-mt-6' : '',
                  ].join(' ')}
                >
                  {/* Center node on rail */}
                  <div
                    aria-hidden
                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center"
                  >
                    <motion.span
                      className="block w-3 h-3 rounded-full bg-white border-2 border-brand-blue shadow-[0_0_0_4px_rgba(4,92,179,0.12)]"
                      animate={{
                        boxShadow: [
                          '0 0 0 4px rgba(4,92,179,0.12)',
                          '0 0 0 10px rgba(0,194,255,0.04)',
                          '0 0 0 4px rgba(4,92,179,0.12)',
                        ],
                      }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                      }}
                    />
                  </div>

                  {/* Card column */}
                  <div
                    className={[
                      'relative py-3 lg:py-12',
                      isLeft ? 'lg:col-start-1' : 'lg:col-start-2',
                    ].join(' ')}
                  >
                    {/* Connector arm from rail to card (desktop) */}
                    <div
                      aria-hidden
                      className={[
                        'hidden lg:block absolute top-1/2 -translate-y-1/2 h-px',
                        isLeft
                          ? 'right-0 left-auto w-12 bg-gradient-to-l from-brand-blue/40 to-transparent'
                          : 'left-0 right-auto w-12 bg-gradient-to-r from-brand-blue/40 to-transparent',
                      ].join(' ')}
                      style={{
                        [isLeft ? 'right' : 'left']: '-48px',
                      } as React.CSSProperties}
                    />

                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.4, ease: easingCurve.industrial }}
                      className="group relative rounded-2xl shadow-[0_12px_32px_-12px_rgba(4,92,179,0.18),0_4px_12px_-4px_rgba(10,25,47,0.06)] hover:shadow-[0_30px_60px_-20px_rgba(4,92,179,0.32),0_8px_20px_-6px_rgba(10,25,47,0.08)] transition-shadow"
                    >
                      {/* Gradient border wrapper */}
                      <div
                        aria-hidden
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/40 via-slate-200 to-brand-cyan/40 group-hover:from-brand-blue/70 group-hover:via-brand-blue/30 group-hover:to-brand-cyan/70 transition-colors duration-500 pointer-events-none"
                      />

                      {/* Inner white card */}
                      <div className="relative m-[1.5px] rounded-[15px] bg-white p-6 sm:p-7 lg:p-8 flex flex-col overflow-hidden">
                      {/* Hover glow ribbon */}
                      <div
                        aria-hidden
                        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-cyan/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{ transform: 'translate(40%, -40%)' }}
                      />
                      {/* Soft inner gradient wash for depth */}
                      <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none opacity-60"
                        style={{
                          background:
                            'radial-gradient(120% 80% at 0% 0%, rgba(4,92,179,0.04) 0%, transparent 55%), radial-gradient(100% 70% at 100% 100%, rgba(0,194,255,0.05) 0%, transparent 60%)',
                        }}
                      />
                      {/* Diagonal sheen on hover */}
                      <motion.div
                        aria-hidden
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(135deg, transparent 30%, rgba(0,194,255,0.08) 50%, transparent 70%)',
                        }}
                      />

                      <div className="relative flex items-start justify-between mb-5">
                        {/* Icon tile with rotating ring */}
                        <div className="relative">
                          {/* Rotating dashed ring */}
                          <motion.div
                            aria-hidden
                            className="absolute -inset-2 rounded-2xl"
                            style={{
                              background:
                                'conic-gradient(from 0deg, rgba(4,92,179,0.35), rgba(0,194,255,0.35), rgba(4,92,179,0) 60%, rgba(4,92,179,0.35))',
                              WebkitMask:
                                'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
                              mask:
                                'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 14,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          />
                          {/* Blur glow */}
                          <div
                            aria-hidden
                            className="absolute inset-0 rounded-xl bg-brand-blue/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"
                          />
                          <motion.div
                            whileHover={{ scale: 1.08, rotate: -4 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                            className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-[0_10px_24px_-6px_rgba(4,92,179,0.5)]`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>

                        {/* Step number — massive, faint */}
                        <motion.span
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: i * 0.08 + 0.3,
                            duration: 0.6,
                            ease: easingCurve.industrial,
                          }}
                          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-brand-blue/30 group-hover:to-brand-cyan/40 transition-colors leading-none tracking-tight select-none"
                        >
                          {step.number}
                        </motion.span>
                      </div>

                      <div className="relative flex flex-col flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-brand-navy leading-tight tracking-tight mb-3 group-hover:text-brand-blue transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom accent line — grows on hover */}
                      <div
                        aria-hidden
                        className="relative mt-6 h-[2px] w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan opacity-70 group-hover:w-24 transition-all duration-500"
                      />

                      {/* Corner micro-dots */}
                      <div
                        aria-hidden
                        className="absolute top-3 right-3 flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-blue" />
                        <span className="w-1 h-1 rounded-full bg-brand-cyan" />
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                      </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty opposite column on desktop preserves layout */}
                  <div
                    aria-hidden
                    className={[
                      'hidden lg:block',
                      isLeft ? 'lg:col-start-2' : 'lg:col-start-1',
                    ].join(' ')}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* End-of-rail flourish (desktop) */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: easingCurve.industrial }}
            className="hidden lg:flex absolute left-1/2 -bottom-2 -translate-x-1/2 items-center justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-brand-cyan/40 blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan shadow-[0_0_20px_rgba(0,194,255,0.6)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
