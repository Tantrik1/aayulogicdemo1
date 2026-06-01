'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { easingCurve } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const MotionLink = motion.create(Link);

const TRUST_BADGES = [
  { value: '10+', label: 'Years of Experience' },
  { value: '300+', label: 'Engineers' },
  { value: '500+', label: 'Projects Delivered' },
];

export function HeroSection() {
  const containerRef = useRef(null);
  const theme = 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
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

  const meshColors = {
    light: {
      stop1: '#FFFFFF',
      stop2: '#E8F7FF',
      stop3: '#D0ECFF',
      radialStop1: '#FFFFFF',
      radialStop2: '#00C2FF',
    },
    dark: {
      stop1: '#0A192F',
      stop2: '#0D213F',
      stop3: '#102A50',
      radialStop1: '#0A192F',
      radialStop2: '#005C9E',
    }
  };

  const colors = meshColors.dark;

  return (
    <section
      ref={containerRef}
      data-theme={theme}
      className="relative w-full h-screen min-h-[620px] md:min-h-[680px] flex flex-col items-center justify-center pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-12 lg:pb-14 px-5 sm:px-6 lg:px-8 overflow-hidden group transition-all duration-500 bg-transparent"
    >

      {/* ============ BACKGROUND — Creative Overlay Only (Video from Layout) ============ */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* LUMINOUS GRADIENT MESH OVERLAY */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Animated gradient mesh from white/navy → cyan → solid white at bottom */}
            <linearGradient id="meshGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: colors.stop1, stopOpacity: 0.95 }} />
              <stop offset="35%" style={{ stopColor: colors.stop2, stopOpacity: 0.85 }} />
              <stop offset="70%" style={{ stopColor: '#0A192F', stopOpacity: 0.55 }} />
              <stop offset="88%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.75 }} />
              <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
            </linearGradient>

            {/* Radial mesh for luminous center effect */}
            <radialGradient id="meshGrad2" cx="50%" cy="40%" r="60%">
              <stop offset="0%" style={{ stopColor: colors.radialStop1, stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: colors.radialStop2, stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0,194,255,0)', stopOpacity: 0 }} />
            </radialGradient>

            {/* Animated mesh for dynamic effect */}
            <filter id="meshBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
            </filter>
          </defs>

          {/* Primary linear overlay — white to transparent */}
          <rect width="1440" height="900" fill="url(#meshGrad1)" />

          {/* Radial luminous center */}
          <rect width="1440" height="900" fill="url(#meshGrad2)" />

          {/* Subtle animated gradient curves for mesh effect */}
          <g opacity="0.6" filter="url(#meshBlur)">
            <path
              d="M 0 200 Q 360 100 720 150 T 1440 200"
              stroke="rgba(0,194,255,0.2)"
              strokeWidth="160"
              fill="none"
            />
            <path
              d="M 0 300 Q 360 200 720 250 T 1440 300"
              stroke="rgba(0,194,255,0.15)"
              strokeWidth="140"
              fill="none"
            />
          </g>
        </svg>

        {/* Floating light particles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Particle 1 */}
          <motion.div
            initial={{ opacity: 0, y: -100, x: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, 250, 500],
              x: [0, 60, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-white via-brand-cyan to-transparent blur-3xl pointer-events-none"
          />

          {/* Particle 2 */}
          <motion.div
            initial={{ opacity: 0, y: -100, x: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, 300, 600],
              x: [0, -80, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'easeInOut',
            }}
            className="absolute top-40 right-[15%] w-56 h-56 rounded-full bg-gradient-to-br from-brand-cyan via-white to-transparent blur-3xl pointer-events-none"
          />
        </div>
      </div>

      {/* ============ CONTENT ============ */}
      <div className="relative max-w-6xl mx-auto w-full flex flex-col justify-center items-center flex-1">
        {/* Subtle high-contrast text backing glow */}
        <div className="absolute -inset-4 -z-10 rounded-[2.5rem] transition-all duration-500 pointer-events-none bg-slate-950/20 backdrop-blur-[2px]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-5 sm:gap-7 lg:gap-9 text-center w-full"
        >
          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.05] tracking-tight text-balance">
              <span className="text-white">
                Trusted Partner For
              </span>
              <br />
              <span
                className="inline-block pb-2"
                style={{
                  backgroundImage:
                    'linear-gradient(110deg, #045CB3 0%, #1976E8 35%, #2E9BFF 65%, #00C2FF 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 8px 30px rgba(0, 194, 255, 0.25))',
                }}
              >
                Digital Transformation
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] xl:text-[1.85rem] leading-relaxed max-w-4xl font-medium transition-colors duration-300 text-slate-300"
          >
            Aayulogic Inc. is a Canadian-headquartered global technology company simplifying complexity, enabling digital transformation, and driving sustainable growth.
          </motion.p>

          {/* Stat badges - premium columns grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 w-full max-w-4xl pt-3"
          >
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center justify-center p-3 xs:p-5 sm:p-7 rounded-2xl border backdrop-blur-md shadow-lg transition-all duration-500 border-white/10 bg-slate-950/80 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-brand-cyan/30"
              >
                <span
                  className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-1"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #045CB3 0%, #2E9BFF 50%, #00C2FF 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {badge.value}
                </span>
                <span
                  className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider text-center leading-tight transition-colors duration-300 text-slate-400"
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto pt-4 justify-center px-4 sm:px-0"
          >
            {/* Primary CTA */}
            <MotionLink
              href="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="group relative px-6 py-4 xs:px-10 xs:py-5 sm:px-14 sm:py-6 text-white font-bold rounded-xl overflow-hidden shadow-xl text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
              <div className="absolute inset-0 bg-white/15 backdrop-blur-2xl rounded-xl" />
              <div className="absolute inset-0 rounded-xl border border-white/50 group-hover:border-white transition-colors" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue opacity-0 group-hover:opacity-40 blur-lg transition-opacity" />
              <span className="relative flex items-center justify-center gap-3 text-base sm:text-lg lg:text-xl">
                Start Transformation
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </MotionLink>

            {/* Secondary CTA */}
            <MotionLink
              href="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="group relative px-6 py-4 xs:px-10 xs:py-5 sm:px-14 sm:py-6 font-bold rounded-xl border-2 transition-all shadow-md hover:shadow-xl text-center text-white border-white/20 hover:border-white/50 bg-white/5"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2 text-base sm:text-lg lg:text-xl">
                Talk to an Engineer
              </span>
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
