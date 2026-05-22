'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/constants';
import { motionConfig } from '@/lib/utils';

export function CaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: motionConfig.default,
    },
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Strategic Proofs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Case Studies &{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real transformations, measurable results, concrete technical achievements
            across industries — from AI-powered platforms to enterprise-grade
            infrastructure built to scale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {CASE_STUDIES.map((study) => (
            <motion.a
              key={study.title}
              href="#"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative block rounded-2xl overflow-hidden border border-slate-300 ring-1 ring-brand-blue/15 bg-white shadow-[0_12px_32px_-12px_rgba(4,92,179,0.28),0_4px_12px_-4px_rgba(10,25,47,0.12)] hover:border-brand-blue/60 hover:ring-brand-blue/40 hover:shadow-[0_24px_56px_-16px_rgba(4,92,179,0.45),0_8px_20px_-6px_rgba(0,194,255,0.25)] transition-[box-shadow,border-color,--tw-ring-color] duration-500"
            >
              {/* Soft top sheen */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
              />

              {/* Cover image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                {/* Bottom fade for legibility */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 55%, rgba(10,25,47,0.55) 100%)',
                  }}
                />

                {/* Floating impact badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white bg-brand-blue/90 backdrop-blur-sm rounded-md">
                    Impact · {study.metric}
                  </span>
                </div>

                {/* Read-more button — appears on hover */}
                <div className="absolute bottom-3 right-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <span
                    aria-label="View case study"
                    className="w-9 h-9 rounded-full bg-white/85 backdrop-blur-md border border-white/70 flex items-center justify-center text-brand-navy group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="relative p-5 sm:p-6">
                <h3 className="text-base sm:text-[17px] font-bold text-brand-navy leading-snug tracking-tight line-clamp-2 group-hover:text-brand-blue transition-colors">
                  {study.title}
                </h3>
                <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
                  {study.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-blue bg-brand-blue/8 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
