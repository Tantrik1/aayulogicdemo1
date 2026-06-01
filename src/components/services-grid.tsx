'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Code2,
  Plug,
  Cloud,
  ShoppingBag,
  Cpu,
  Building2,
  Users2,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { easingCurve, motionConfig } from '@/lib/utils';

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  Code2,
  Plug,
  Cloud,
  ShoppingBag,
  Cpu,
  Building2,
  Users2,
};

export function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: easingCurve.industrial },
    },
  };

  return (
    <section
      data-theme="dark"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium"
    >
      <div aria-hidden className="cobalt-grain" />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            Engineering across{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
              three core services
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/80">
            We design, build, and operate software systems for companies that have outgrown standard tools — starting with rigorous technical planning.
          </p>
        </motion.div>

        {/* 3 Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const Icon = ICON_MAP[cat.iconKey] ?? Code2;
            return (
              <motion.div
                key={cat.key}
                variants={itemVariants}
                className="group relative flex flex-col rounded-2xl border border-white/12 bg-brand-navy/65 backdrop-blur-md p-8 hover:border-brand-cyan/45 hover:bg-brand-navy/75 hover:shadow-[0_30px_60px_-15px_rgba(0,194,255,0.3)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(0,194,255,0.4)] mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Number */}
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan/80 mb-2 block">
                  0{idx + 1} · Core Service
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-brand-cyan transition-colors">
                  {cat.title}
                </h3>

                {/* Tagline only — concise */}
                <p className="text-sm text-white/75 leading-relaxed mb-8 flex-1">
                  {cat.tagline}
                </p>

                {/* CTA Link */}
                <Link
                  href={`/services/${cat.key}`}
                  className="group/cta inline-flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-white/12 bg-white/5 hover:bg-brand-cyan/15 hover:border-brand-cyan/45 text-sm font-bold text-white transition-all"
                  aria-label={`View ${cat.title} details`}
                >
                  <span>View Service Detail</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
