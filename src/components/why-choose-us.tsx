'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  Globe2,
  Clock4,
  ArrowUpRight,
} from 'lucide-react';
import { easingCurve, motionConfig } from '@/lib/utils';

type Reason = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    icon: Cpu,
    title: 'Engineering depth',
    description: '300+ engineers across AI, cloud, and platform disciplines.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    description: 'ISO 27001 & 9001 certified, with audit trails by default.',
  },
  {
    icon: Globe2,
    title: 'Global delivery',
    description: 'Canadian HQ, six offices, follow-the-sun execution.',
  },
  {
    icon: Clock4,
    title: 'Predictable velocity',
    description: 'Agile sprints and CI/CD — fewer surprises, faster releases.',
  },
];

export function WhyChooseUs() {
  const reduce = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: reduce ? 0 : i * 0.07,
        ease: easingCurve.industrial,
      },
    }),
  };

  return (
    <section
      id="why-choose-us"
      data-theme="dark"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent"
    >
      {/* Dynamic Fading Video Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(10,25,47,0.93) 12%, rgba(10,25,47,0.7) 50%, rgba(10,25,47,0.93) 88%, #FFFFFF 100%)'
        }}
      />

      {/* Ambient backdrop — matches Services section */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 80% 10%, rgba(0,194,255,0.2) 0%, transparent 70%), radial-gradient(40% 30% at 0% 90%, rgba(4,92,179,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Why Choose Aayulogic
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            Built different —{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              proven in production
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-350 leading-relaxed">
            We engineer compounding systems, ship them with operators on the team,
            and stay long after the launch.
          </p>
        </motion.div>

        {/* Reasons — minimal 4-up row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="group relative rounded-xl border border-white/10 bg-slate-900/40 p-5 sm:p-6 hover:border-brand-cyan/40 hover:bg-slate-900/60 hover:shadow-[0_12px_32px_-12px_rgba(0,194,255,0.35)] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan shadow-[0_6px_16px_-4px_rgba(4,92,179,0.35)] mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-brand-cyan transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-350 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionConfig.default}
          className="mt-12 lg:mt-14 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-7 py-3.5 text-sm font-semibold hover:bg-brand-cyan transition-colors shadow-[0_12px_32px_-12px_rgba(0,194,255,0.45)]"
          >
            Request a partnership deck
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Tailored case studies and references within one business day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
