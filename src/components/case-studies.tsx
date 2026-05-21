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
            <motion.div
              key={study.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative  rounded-md overflow-hidden border border-slate-200 hover:border-brand-blue/40 hover:shadow-[0_30px_60px_-20px_rgba(4,92,179,0.25)] transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 30%, rgba(10,25,47,0.65) 100%)',
                  }}
                />
                {/* Metric badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-cyan mb-1">
                      Impact
                    </p>
                    <p className="text-2xl font-bold text-white">{study.metric}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-5">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{study.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-md border border-brand-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 group-hover:border-brand-blue/30 transition-colors">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue group-hover:text-brand-navy transition-colors">
                    View Transformation Framework
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
