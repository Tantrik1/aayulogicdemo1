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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: motionConfig.default },
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 10% 10%, rgba(0,194,255,0.05) 0%, transparent 70%), radial-gradient(40% 30% at 95% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Real engineering.{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              Real complexity.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Anonymised for confidentiality. Named versions available on request for serious conversations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
        >
          {CASE_STUDIES.map((study) => (
            <motion.a
              key={study.title}
              href="#"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-white shadow-[0_10px_28px_-12px_rgba(4,92,179,0.18)] hover:border-brand-blue/50 hover:shadow-[0_20px_44px_-14px_rgba(4,92,179,0.35)] transition-[box-shadow,border-color] duration-500"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
              />

              {/* Cover */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 55%, rgba(10,25,47,0.55) 100%)',
                  }}
                />
                {/* Metric chip */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white bg-brand-blue/90 backdrop-blur-sm rounded">
                    {study.metric}
                  </span>
                </div>
              </div>

              {/* Body — blog-style compact */}
              <div className="relative flex flex-col flex-1 p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-bold text-brand-navy leading-snug tracking-tight line-clamp-2 group-hover:text-brand-blue transition-colors">
                  {study.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {study.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {study.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-blue bg-brand-blue/8 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 flex items-center gap-1 text-xs font-semibold text-brand-blue">
                  Read case study
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
