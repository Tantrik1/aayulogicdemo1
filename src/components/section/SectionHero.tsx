'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { easingCurve } from '@/lib/utils';

interface SectionHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: { label: string; value: string }[];
}

export function SectionHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
}: SectionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light via-white to-white pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* Background accents */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(4,92,179,0.25) 0%, transparent 70%)',
        }}
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(4,92,179,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(4,92,179,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur border border-brand-blue/15 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.05,
              ease: easingCurve.industrial,
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-brand-navy text-balance"
          >
            {title}{' '}
            {highlight && (
              <span className="bg-gradient-to-r from-brand-blue via-brand-system-blue to-brand-cyan bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.12,
              ease: easingCurve.industrial,
            }}
            className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: easingCurve.industrial,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg shadow-brand-blue/20"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
                  <span className="absolute inset-0 rounded-xl border border-white/40 group-hover:border-white transition-colors" />
                  <span className="relative">{primaryCta.label}</span>
                  <ArrowUpRight className="relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-white/70 backdrop-blur border border-brand-blue/20 text-brand-navy hover:border-brand-blue/40 hover:bg-white transition-all"
                >
                  {secondaryCta.label}
                  <ArrowUpRight className="w-4 h-4 text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </motion.div>
          )}

          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: easingCurve.industrial,
              }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-brand-blue/30 pl-4"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-brand-navy">
                    {s.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
