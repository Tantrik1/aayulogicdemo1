'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/section/PageHero';
import { easingCurve } from '@/lib/utils';

export interface LegalSection {
  heading: string;
  body: string[];
  list?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  contactEmail?: string;
}

export function LegalPage({
  eyebrow,
  title,
  highlight,
  subtitle,
  lastUpdated,
  intro,
  sections,
  contactEmail = 'legal@aayulogic.com',
}: LegalPageProps) {
  return (
    <>
      <Header />
      <PageHero
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <section className="relative bg-white">
        <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          {/* Last updated badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easingCurve.industrial }}
            className="flex flex-wrap items-center gap-3 mb-10 pb-8 border-b border-slate-200"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/15 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Effective {lastUpdated}
            </span>
            <span className="text-xs text-slate-500">
              Aayulogic Systems Pvt. Ltd. · Aayulogic Inc. (Toronto)
            </span>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easingCurve.industrial }}
            className="text-base sm:text-lg text-slate-700 leading-relaxed mb-12"
          >
            {intro}
          </motion.p>

          {/* Numbered sections */}
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  ease: easingCurve.industrial,
                }}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-brand-blue">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
                    {section.heading}
                  </h2>
                </div>
                <div className="pl-0 sm:pl-12 space-y-4">
                  {section.body.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm sm:text-[15px] text-slate-700 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-3 space-y-2">
                      {section.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easingCurve.industrial }}
            className="mt-16 p-6 sm:p-8 rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-cyan/5"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Questions?
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-3">
              Reach our legal & compliance team.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              For requests related to this policy — including data access,
              correction, deletion, or compliance enquiries — contact us
              directly.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors"
            >
              <Mail className="w-4 h-4" />
              {contactEmail}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
