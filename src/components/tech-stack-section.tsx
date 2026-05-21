'use client';

import { motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import { TECH_STACK } from '@/lib/constants';
import { motionConfig } from '@/lib/utils';

const DEV_CATEGORIES = new Set(['Frontend', 'Backend', 'Database', 'Mobile', 'Tools']);
const OTHERS_CATEGORIES = new Set(['AI & ML', 'Platforms']);

const ROWS = [
  TECH_STACK.filter((t) => DEV_CATEGORIES.has(t.category)),
  TECH_STACK.filter((t) => t.category === 'Cloud'),
  TECH_STACK.filter((t) => OTHERS_CATEGORIES.has(t.category)),
];

export function TechStackSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(45% 30% at 50% 0%, rgba(4,92,179,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Our Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Built on the tools that{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              ship at scale
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            From AI frameworks to cloud-native platforms, our engineering teams work
            with the same proven stack trusted by category-leading enterprises worldwide.
          </p>
        </motion.div>

        {/* 3 marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-5"
        >
          {ROWS.map((items, rowIdx) => (
            <div key={rowIdx} className="marquee">
              {[0, 1].map((groupIdx) => (
                <div
                  key={groupIdx}
                  className="marquee-group"
                  aria-hidden={groupIdx === 1}
                  style={rowIdx % 2 === 1 ? { animationDirection: 'reverse' } : undefined}
                >
                  {items.map((tech) => (
                    <div
                      key={`${rowIdx}-${groupIdx}-${tech.name}`}
                      className="flex-shrink-0 flex items-center justify-center"
                    >
                      <div className="h-12 px-5 flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                        <div className="w-7 h-7 flex items-center justify-center">
                          <StackIcon name={tech.name as never} className="w-7 h-7" />
                        </div>
                        <span className="text-sm sm:text-base font-semibold text-brand-navy whitespace-nowrap">
                          {tech.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
