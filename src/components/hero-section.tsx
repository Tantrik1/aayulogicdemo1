'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { easingCurve } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { HeroClockBackground } from '@/components/HeroClockBackground';

const MotionLink = motion.create(Link);

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.13,
        delayChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easingCurve.industrial },
    },
  };

  return (
    <section className="hero-section bg-cobalt-premium relative w-full flex flex-col items-center justify-center overflow-hidden">
      <div aria-hidden className="cobalt-grain" />
      <HeroClockBackground />
      {/* Half-height on mobile + tablet, full viewport on desktop.
          Padding-top reserves the navbar so the title never sits behind it. */}
      <style>{`
        .hero-section {
          min-height: 60svh;
          padding-top: var(--header-h, 4rem);
          padding-bottom: clamp(1.5rem, 4vh, 3rem);
          padding-left: clamp(1rem, 4vw, 2.5rem);
          padding-right: clamp(1rem, 4vw, 2.5rem);
        }
        @supports not (min-height: 60svh) {
          .hero-section { min-height: 60vh; }
        }
        @media (min-width: 768px) {
          .hero-section { min-height: 70svh; }
        }
        @media (min-width: 1024px) {
          .hero-section {
            height: 100svh;
            min-height: 100svh;
            max-height: 100dvh;
          }
        }
      `}</style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full mx-auto flex flex-col items-center justify-center text-center"
        style={{
          maxWidth: 'min(80rem, 94vw)',
          gap: 'clamp(0.75rem, 2vh, 1.75rem)',
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants}>
          <span
            className="inline-block font-semibold uppercase text-white/85 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm whitespace-nowrap"
            style={{
              fontSize: 'clamp(0.625rem, 1vw, 0.8125rem)',
              letterSpacing: '0.3em',
              paddingInline: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              paddingBlock: 'clamp(0.25rem, 0.6vh, 0.5rem)',
            }}
          >
            Canadian Engineering · Global Delivery
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-black text-balance text-white"
          style={{
            fontSize: 'clamp(2.125rem, 7.5vw, 7.5rem)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            maxWidth: '22ch',
          }}
        >
          <span className="block">Trusted Partner For</span>
          <span
            className="block bg-gradient-to-r from-white via-brand-cyan to-white bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Digital Transformation
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="font-medium text-white/90 leading-snug"
          style={{
            fontSize: 'clamp(0.9rem, 1.35vw, 1.3rem)',
            maxWidth: 'min(44rem, 92vw)',
            lineHeight: 1.5,
          }}
        >
          Aayulogic Inc. is a Canadian-headquartered global technology company simplifying complexity,
          enabling digital transformation, and driving sustainable growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center w-full sm:w-auto"
          style={{
            gap: 'clamp(0.625rem, 1.2vw, 1rem)',
            marginTop: 'clamp(0.25rem, 0.8vh, 0.625rem)',
          }}
        >
          <MotionLink
            href="/contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="group relative inline-flex items-center justify-center gap-2 text-white font-bold rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan transition-all"
            style={{
              paddingInline: 'clamp(1.5rem, 2.2vw, 2.25rem)',
              paddingBlock: 'clamp(0.7rem, 1.2vh, 1rem)',
              fontSize: 'clamp(0.85rem, 1.05vw, 1.0625rem)',
              boxShadow: '0 12px 32px -10px rgba(0, 194, 255, 0.5)',
            }}
          >
            Start Transformation
            <ArrowUpRight
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              style={{
                width: 'clamp(0.95rem, 1.2vw, 1.2rem)',
                height: 'clamp(0.95rem, 1.2vw, 1.2rem)',
              }}
            />
          </MotionLink>

          <MotionLink
            href="/contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="group inline-flex items-center justify-center gap-2 font-bold rounded-full border-2 border-white/40 hover:border-white text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
            style={{
              paddingInline: 'clamp(1.5rem, 2.2vw, 2.25rem)',
              paddingBlock: 'clamp(0.7rem, 1.2vh, 1rem)',
              fontSize: 'clamp(0.85rem, 1.05vw, 1.0625rem)',
            }}
          >
            Talk to an Engineer
          </MotionLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
