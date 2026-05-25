'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { motionConfig } from '@/lib/utils';

export function DigitalTransformCTA() {
  return (
    <section
      id="digital-transform"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      {/* Soft single ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 80% 10%, rgba(0,194,255,0.07) 0%, transparent 70%), radial-gradient(40% 30% at 0% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Let&apos;s Build What&apos;s Next
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Are you ready to{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              digitally transform
            </span>{' '}
            your business with us?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            From strategy to scale — we map the shortest path from your current stack
            to the one you actually want.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15, ...motionConfig.default }}
          className="mt-9 sm:mt-10"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-7 py-3.5 text-sm font-semibold hover:bg-brand-blue transition-colors shadow-[0_12px_32px_-12px_rgba(4,92,179,0.45)]"
          >
            Start your transformation
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
