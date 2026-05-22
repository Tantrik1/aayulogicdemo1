'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { easingCurve } from '@/lib/utils';

interface CTABandProps {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABand({
  eyebrow = 'Get Started',
  title,
  body,
  primaryLabel = 'Start a Project',
  primaryHref = '#contact',
  secondaryLabel = 'Talk to Sales',
  secondaryHref = '#contact',
}: CTABandProps) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easingCurve.industrial }}
          className="relative rounded-2xl bg-brand-navy text-white overflow-hidden px-8 sm:px-14 py-14 sm:py-20"
        >
          {/* Accent radials */}
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-50"
            style={{
              background:
                'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)',
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full blur-3xl opacity-40"
            style={{
              background:
                'radial-gradient(circle, rgba(4,92,179,0.5) 0%, transparent 70%)',
            }}
          />

          {/* Grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-4">
                {eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                {title}
              </h2>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {body}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={primaryHref}
                className="group relative inline-flex items-center justify-between gap-2 px-6 py-4 text-sm font-bold rounded-xl text-brand-navy overflow-hidden shadow-lg bg-white hover:bg-brand-cyan transition-colors"
              >
                <span>{primaryLabel}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={secondaryHref}
                className="group inline-flex items-center justify-between gap-2 px-6 py-4 text-sm font-bold rounded-xl border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                <span>{secondaryLabel}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
