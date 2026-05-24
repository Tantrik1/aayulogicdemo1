'use client';

import { motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionHero } from '@/components/section/SectionHero';
import { CTABand } from '@/components/section/CTABand';
import { SECTION_ICONS } from '@/components/section/sectionIcons';
import type { ServiceCategory, ServiceItem } from '@/lib/constants';
import { easingCurve } from '@/lib/utils';

interface ServiceItemTemplateProps {
  category: ServiceCategory;
  item: ServiceItem;
  siblingItems: ServiceItem[];
}

export function ServiceItemTemplate({
  category,
  item,
  siblingItems,
}: ServiceItemTemplateProps) {
  const detail = item.detail!;
  const CategoryIcon = SECTION_ICONS[category.iconKey] ?? Sparkles;

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-brand-blue transition-colors">
            Home
          </a>
          <span>/</span>
          <a
            href="/services"
            className="hover:text-brand-blue transition-colors"
          >
            Services
          </a>
          <span>/</span>
          <a
            href={`/services/${category.key}`}
            className="hover:text-brand-blue transition-colors"
          >
            {category.title}
          </a>
          <span>/</span>
          <span className="text-brand-navy font-medium">{item.title}</span>
        </div>
      </div>

      <SectionHero
        eyebrow={category.title}
        title={item.title}
        highlight={detail.highlight}
        subtitle={detail.subtitle}
        primaryCta={{ label: 'Talk to an Engineer', href: '/contact' }}
        secondaryCta={{ label: 'See Capabilities', href: '#capabilities' }}
        stats={detail.stats}
      />

      {/* Capabilities */}
      <section id="capabilities" className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                What We Build
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
                {detail.capabilities.length} capabilities, one engineering
                bench.
              </h2>
            </div>
            <p className="lg:col-span-5 text-base text-slate-600 leading-relaxed">
              {item.description}{' '}
              <span className="text-slate-500">
                Every engagement ships with documentation, observability, and a
                90-day operator retainer.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {detail.capabilities.map((cap, idx) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: easingCurve.industrial,
                }}
                className="group relative p-7 rounded-xl bg-white border border-brand-blue/12 hover:border-brand-cyan/50 hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.25)] transition-all duration-300 overflow-hidden"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(0,194,255,0.6), transparent)',
                  }}
                />
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-md shadow-brand-blue/20">
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 tracking-wider">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cap.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof point */}
      <section className="relative py-20 sm:py-24 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-50"
          style={{
            background:
              'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(4,92,179,0.5) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              In Production
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
              One number from a live {item.title} deployment.
            </h2>
            <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-xl">
              We ship into messy real-world systems — measured against business
              SLOs, not lab benchmarks.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easingCurve.industrial }}
            className="lg:col-span-5 p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
          >
            <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent mb-4">
              {detail.proofPoint.metric}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {detail.proofPoint.label}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech stack */}
      {detail.stack && detail.stack.length > 0 && (
        <section className="relative py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                  Tech Stack
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
                  Frameworks and platforms we deploy on.
                </h2>
                <p className="mt-5 text-base text-slate-600 leading-relaxed">
                  We&apos;re stack-agnostic — but opinionated about what works
                  in production. The right tool for your latency, privacy, and
                  budget envelope.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {detail.stack.map((tech) => (
                    <div
                      key={tech}
                      className="aspect-square rounded-xl bg-white border border-brand-blue/12 flex items-center justify-center hover:border-brand-cyan/45 hover:-translate-y-1 hover:shadow-md transition-all p-3 sm:p-4"
                      title={tech}
                    >
                      <StackIcon name={tech} className="w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Aayulogic */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Why Aayulogic
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Engineered for the auditor, not the demo.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              The hard part isn&apos;t the headline tech — it&apos;s the
              observability, the failure modes, and the hand-off. We&apos;ve
              built {item.title.toLowerCase()} platforms in production for
              regulated industries.
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-lg bg-brand-navy text-white hover:bg-brand-blue transition-colors"
            >
              Scope a {item.title} Build
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-4">
              {detail.whyBullets.map((bullet, idx) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: easingCurve.industrial,
                  }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white border border-brand-blue/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-navy leading-relaxed">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sibling services */}
      {siblingItems.length > 0 && (
        <section className="relative py-20 sm:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                  More in {category.title}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                  Related capabilities on the same bench.
                </h2>
              </div>
              <a
                href={`/services/${category.key}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors"
              >
                See all {category.title}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {siblingItems.map((sib) => (
                <a
                  key={sib.slug}
                  href={`/services/${category.key}/${sib.slug}`}
                  className="group p-5 rounded-xl bg-white border border-brand-blue/10 hover:border-brand-cyan/45 hover:-translate-y-0.5 hover:shadow-md transition-all flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/8 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan transition-all">
                    <CategoryIcon className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors flex items-center gap-1">
                      {sib.title}
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {sib.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        eyebrow="Next Step"
        title={`Let's scope your ${item.title} initiative.`}
        body="Send a brief — architecture, constraints, timeline. We respond within one business day with a recommended engagement model and a senior engineer on the call."
        primaryLabel="Send a Brief"
        secondaryLabel="Talk to an Engineer"
      />
      <Footer />
    </>
  );
}
