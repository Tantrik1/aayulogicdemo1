'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { easingCurve } from '@/lib/utils';

interface Stat {
  value: string;
  label: string;
}

interface CTA {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  stats?: Stat[];
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  stats,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easingCurve.industrial },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-5 sm:px-6 lg:px-8 overflow-hidden group">
      {/* ============ BACKGROUND — Luminous mesh + particles (matches HeroSection) ============ */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pageHeroMesh1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.85 }} />
              <stop offset="35%" style={{ stopColor: '#E8F7FF', stopOpacity: 0.6 }} />
              <stop offset="60%" style={{ stopColor: '#D0ECFF', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0,194,255,0)', stopOpacity: 0 }} />
            </linearGradient>

            <radialGradient id="pageHeroMesh2" cx="50%" cy="0%" r="80%">
              <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.4 }} />
              <stop offset="40%" style={{ stopColor: '#00C2FF', stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0,194,255,0)', stopOpacity: 0 }} />
            </radialGradient>

            <filter id="pageHeroBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
            </filter>
          </defs>

          <rect width="1440" height="900" fill="url(#pageHeroMesh1)" />
          <rect width="1440" height="900" fill="url(#pageHeroMesh2)" />

          <g opacity="0.6" filter="url(#pageHeroBlur)">
            <path
              d="M 0 200 Q 360 100 720 150 T 1440 200"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="120"
              fill="none"
            />
            <path
              d="M 0 300 Q 360 200 720 250 T 1440 300"
              stroke="rgba(0,194,255,0.2)"
              strokeWidth="100"
              fill="none"
            />
            <path
              d="M 0 400 Q 360 350 720 380 T 1440 420"
              stroke="rgba(4,92,179,0.1)"
              strokeWidth="80"
              fill="none"
            />
          </g>
        </svg>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: -100, x: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, 200, 400],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-white via-brand-cyan to-transparent blur-2xl"
            style={{ pointerEvents: 'none' }}
          />
          <motion.div
            initial={{ opacity: 0, y: -100, x: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, 250, 450],
              x: [0, -60, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
            className="absolute top-40 right-[20%] w-40 h-40 rounded-full bg-gradient-to-br from-brand-cyan via-white to-transparent blur-3xl"
            style={{ pointerEvents: 'none' }}
          />
          <motion.div
            initial={{ opacity: 0, y: -80, x: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, 220, 420],
              x: [0, 80, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
            className="absolute top-32 left-[60%] w-36 h-36 rounded-full bg-gradient-to-br from-white via-cyan-100 to-transparent blur-3xl"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* ============ CONTENT ============ */}
      <div className="relative max-w-5xl mx-auto w-full">
        <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-sm" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 sm:gap-7 lg:gap-8 text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-brand-blue/15 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
              {eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight">
              <span className="text-brand-navy">{title}</span>
              <br />
              <span
                className="inline-block"
                style={{
                  backgroundImage:
                    'linear-gradient(110deg, #045CB3 0%, #1976E8 35%, #2E9BFF 65%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 6px 24px rgba(30, 118, 232, 0.18))',
                }}
              >
                {highlight}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl font-medium"
          >
            {subtitle}
          </motion.p>

          {/* Stat badges */}
          {stats && stats.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 gap-y-3 pt-1"
            >
              {stats.map((badge, idx) => (
                <div key={badge.label} className="flex items-center gap-3 sm:gap-5">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-2xl sm:text-3xl font-black tracking-tight"
                      style={{
                        backgroundImage:
                          'linear-gradient(135deg, #045CB3 0%, #2E9BFF 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {badge.value}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-brand-navy whitespace-nowrap">
                      {badge.label}
                    </span>
                  </div>
                  {idx < stats.length - 1 && (
                    <span aria-hidden className="hidden sm:inline-block w-px h-6 bg-slate-300" />
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-3 justify-center"
            >
              {primaryCta && (
                <motion.a
                  href={primaryCta.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="group relative px-10 sm:px-14 py-5 sm:py-6 text-white font-bold rounded-xl overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
                  <div className="absolute inset-0 backdrop-blur-2xl rounded-xl" />
                  <div className="absolute inset-0 rounded-xl border border-white/50 group-hover:border-white transition-colors" />
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue opacity-0 group-hover:opacity-40 blur-lg transition-opacity" />

                  <span className="relative flex items-center justify-center gap-3 text-lg">
                    {primaryCta.label}
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.a>
              )}

              {secondaryCta && (
                <motion.a
                  href={secondaryCta.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="group relative px-10 sm:px-14 py-5 sm:py-6 text-brand-navy font-bold rounded-xl border-2 border-brand-blue/60 hover:border-brand-blue transition-all shadow-lg hover:shadow-2xl bg-white/70 backdrop-blur"
                >
                  <span className="relative flex items-center justify-center gap-2 text-lg">
                    {secondaryCta.label}
                  </span>
                </motion.a>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
