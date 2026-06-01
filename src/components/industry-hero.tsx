'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import { easingCurve } from '@/lib/utils';

type Stat = { value: string; label: string };
type CTA = { label: string; href: string; external?: boolean };

export interface IndustryHeroProps {
  industry: string;
  icon?: LucideIcon;
  title: React.ReactNode;
  subtitle: string;
  primary?: CTA;
  secondary?: CTA;
  stats?: Stat[];
  breadcrumbName?: string;
  theme?: 'light' | 'dark';
}

/**
 * Shared hero for every industry page — full-bleed background video,
 * dark or light overlay for legibility, fixed typography rhythm. Industry-specific
 * eyebrow / title / subtitle / CTAs / stats are passed in via props so the
 * silhouette of every industry hero stays identical.
 */
export function IndustryHero({
  industry,
  icon: Icon,
  title,
  subtitle,
  primary,
  secondary,
  stats,
  breadcrumbName,
  theme = 'dark',
}: IndustryHeroProps) {
  return (
    <>
      {/* Breadcrumb (kept above the hero so the video isn't pushed down) */}
      <div className={`transition-colors duration-300 border-b ${
        theme === 'dark' ? 'bg-slate-950 border-white/5' : 'bg-white border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs">
          <Link
            href="/"
            className={`transition-colors ${
              theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-brand-blue'
            }`}
          >
            Home
          </Link>
          <span className={theme === 'dark' ? 'text-slate-600' : 'text-slate-400'}>/</span>
          <Link
            href="/industries"
            className={`transition-colors ${
              theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-brand-blue'
            }`}
          >
            Industries
          </Link>
          {breadcrumbName && (
            <>
              <span className={theme === 'dark' ? 'text-slate-600' : 'text-slate-400'}>/</span>
              <span className={`font-semibold ${theme === 'dark' ? 'text-brand-cyan' : 'text-brand-navy'}`}>
                {breadcrumbName}
              </span>
            </>
          )}
        </div>
      </div>

      <section
        data-theme={theme}
        className={`relative overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-32 min-h-[640px] transition-all duration-500 ${
          theme === 'dark' ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/herobackground.mp4" type="video/mp4" />
        </video>

        {/* Dynamic theme overlays for legibility */}
        <div
          aria-hidden
          className={`absolute inset-0 transition-colors duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-[#0a192f]/90'
              : 'bg-gradient-to-b from-white/95 via-white/80 to-slate-50/90'
          }`}
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full blur-3xl opacity-50 pointer-events-none"
          style={{
            background:
              theme === 'dark'
                ? 'radial-gradient(circle, rgba(0,194,255,0.32) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(4,92,179,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            background:
              theme === 'dark'
                ? 'radial-gradient(circle, rgba(4,92,179,0.55) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(0,194,255,0.2) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className={`absolute inset-0 transition-opacity pointer-events-none ${
            theme === 'dark' ? 'opacity-[0.06]' : 'opacity-[0.04]'
          }`}
          style={{
            backgroundImage:
              theme === 'dark'
                ? 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)'
                : 'linear-gradient(rgba(10,25,47,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,25,47,0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easingCurve.industrial }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 backdrop-blur transition-all ${
              theme === 'dark'
                ? 'bg-white/10 border-white/15 text-brand-cyan'
                : 'bg-brand-blue/8 border-brand-blue/20 text-brand-blue'
            }`}
          >
            {Icon && <Icon className="w-3.5 h-3.5" />}
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
              {industry}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance max-w-4xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
            className={`mt-7 text-lg sm:text-xl leading-relaxed max-w-2xl transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            {subtitle}
          </motion.p>

          {(primary || secondary) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {primary && (
                <CTAButton variant="primary" theme={theme} {...primary} />
              )}
              {secondary && (
                <CTAButton variant="secondary" theme={theme} {...secondary} />
              )}
            </motion.div>
          )}

          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`border-l-2 pl-4 transition-colors ${
                    theme === 'dark' ? 'border-brand-cyan/40' : 'border-brand-blue/40'
                  }`}
                >
                  <div className={`text-2xl sm:text-3xl font-bold transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-brand-navy'
                  }`}>
                    {s.value}
                  </div>
                  <div className={`text-xs font-semibold mt-1 uppercase tracking-wider transition-colors ${
                    theme === 'dark' ? 'text-slate-350' : 'text-slate-600'
                  }`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

function CTAButton({
  label,
  href,
  external,
  variant,
  theme,
}: CTA & { variant: 'primary' | 'secondary'; theme: 'light' | 'dark' }) {
  const base =
    'group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl transition-all shadow-md';
  const styles =
    variant === 'primary'
      ? theme === 'dark'
        ? `${base} bg-white text-brand-navy hover:bg-brand-cyan hover:shadow-lg`
        : `${base} bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-lg`
      : theme === 'dark'
        ? `${base} border border-white/30 text-white hover:border-white hover:bg-white/10`
        : `${base} border border-brand-blue/40 text-brand-navy hover:border-brand-blue hover:bg-brand-blue/5`;

  if (external || href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {label}
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} className={styles}>
        {label}
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {label}
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </Link>
  );
}

