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
}

/**
 * Shared hero for every industry page — full-bleed background video,
 * dark overlay for legibility, fixed typography rhythm. Industry-specific
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
}: IndustryHeroProps) {
  return (
    <>
      {/* Breadcrumb (kept above the hero so the video isn't pushed down) */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-brand-blue transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/industries" className="hover:text-brand-blue transition-colors">
            Industries
          </Link>
          {breadcrumbName && (
            <>
              <span>/</span>
              <span className="text-brand-navy font-medium">{breadcrumbName}</span>
            </>
          )}
        </div>
      </div>

      <section className="relative overflow-hidden text-white pt-24 pb-24 sm:pt-28 sm:pb-32 min-h-[640px]">
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

        {/* Dark overlays for legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-brand-navy/85 via-brand-navy/70 to-[#0d1f3d]/90"
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(0,194,255,0.32) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(4,92,179,0.55) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easingCurve.industrial }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 mb-6"
          >
            {Icon && <Icon className="w-3.5 h-3.5 text-brand-cyan" />}
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
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
            className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl"
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
                <CTAButton variant="primary" {...primary} />
              )}
              {secondary && (
                <CTAButton variant="secondary" {...secondary} />
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
                <div key={s.label} className="border-l-2 border-brand-cyan/40 pl-4">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-xs font-medium text-slate-300 mt-1 uppercase tracking-wider">
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
}: CTA & { variant: 'primary' | 'secondary' }) {
  const base =
    'group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl transition-colors';
  const styles =
    variant === 'primary'
      ? `${base} bg-white text-brand-navy hover:bg-brand-cyan shadow-lg`
      : `${base} border border-white/30 text-white hover:border-white hover:bg-white/10`;

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
