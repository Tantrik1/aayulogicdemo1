'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import StackIcon from 'tech-stack-icons';
import { easingCurve } from '@/lib/utils';
import { CLIENT_BRANDS } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';

const MotionLink = motion.create(Link);

const TRUST_BADGES = [
  { value: '10+', label: 'Years of Experience' },
  { value: '300+', label: 'Engineers' },
  { value: '500+', label: 'Projects Delivered' },
];

export function HeroSection() {
  const containerRef = useRef(null);

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

  return (
    <section ref={containerRef} className="relative flex flex-col items-center justify-center pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-5 sm:px-6 lg:px-8 overflow-hidden group">
      {/* ============ BACKGROUND — Creative Overlay Only (Video from Layout) ============ */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* LUMINOUS GRADIENT MESH OVERLAY — White to Cyan to Transparent */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Animated gradient mesh from white → cyan → transparent */}
            <linearGradient id="meshGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.85 }} />
              <stop offset="35%" style={{ stopColor: '#E8F7FF', stopOpacity: 0.6 }} />
              <stop offset="60%" style={{ stopColor: '#D0ECFF', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0,194,255,0)', stopOpacity: 0 }} />
            </linearGradient>

            {/* Radial mesh for luminous center effect */}
            <radialGradient id="meshGrad2" cx="50%" cy="0%" r="80%">
              <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.4 }} />
              <stop offset="40%" style={{ stopColor: '#00C2FF', stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0,194,255,0)', stopOpacity: 0 }} />
            </radialGradient>

            {/* Animated mesh for dynamic effect */}
            <filter id="meshBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
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

        {/* Floating light particles - premium tech vibes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Particle 1 */}
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

          {/* Particle 2 */}
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

          {/* Particle 3 */}
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
        {/* Smart overlay behind text only */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5 backdrop-blur-sm" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 sm:gap-7 lg:gap-8 text-center"
        >
         
          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight">
              <span className="text-brand-navy">Trusted Partner For</span>
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
                Digital Transformation
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl font-medium"
          >
            Aayulogic Inc. is a Canadian-headquartered global technology company simplifying complexity, enabling digital transformation, and driving sustainable growth.
          </motion.p>

          {/* Stat badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 gap-y-3 pt-1"
          >
            {TRUST_BADGES.map((badge, idx) => (
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
                {idx < TRUST_BADGES.length - 1 && (
                  <span aria-hidden className="hidden sm:inline-block w-px h-6 bg-slate-300" />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-3 justify-center"
          >
            {/* Primary CTA — Premium Glassmorphism with strong presence */}
            <MotionLink
              href="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="group relative px-10 sm:px-14 py-5 sm:py-6 text-white font-bold rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
              <div className="absolute inset-0 bg-white/15 backdrop-blur-2xl rounded-xl" />
              <div className="absolute inset-0 rounded-xl border border-white/50 group-hover:border-white transition-colors" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue opacity-0 group-hover:opacity-40 blur-lg transition-opacity" />
              <span className="relative flex items-center justify-center gap-3 text-lg">
                Start Transformation
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </MotionLink>

            {/* Secondary CTA — Clear outline style */}
            <MotionLink
              href="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="group relative px-10 sm:px-14 py-5 sm:py-6 text-brand-navy font-bold rounded-xl border-2 border-brand-blue/60 hover:border-brand-blue transition-all shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2 text-lg">
                Talk to an Engineer
              </span>
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>

      {/* ============ CLIENT LOGO MARQUEE (integrated, colorful) ============ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: easingCurve.industrial }}
        className="relative w-full max-w-7xl mx-auto mt-14 sm:mt-16 lg:mt-20"
      >
        <div className="marquee">
          {[0, 1].map((groupIdx) => (
            <div
              key={groupIdx}
              className="marquee-group"
              aria-hidden={groupIdx === 1}
            >
              {CLIENT_BRANDS.map((brand) => (
                <div
                  key={`${groupIdx}-${brand.name}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <div className="h-12 px-5 flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                    <div className="w-7 h-7 flex items-center justify-center">
                      <StackIcon name={brand.icon as never} className="w-7 h-7" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-brand-navy whitespace-nowrap">
                      {brand.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
