'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { easingCurve } from '@/lib/utils';
import { SectionHero } from './SectionHero';
import { CTABand } from './CTABand';
import { SECTION_ICONS } from './sectionIcons';

interface DetailItem {
  title: string;
  description: string;
}

interface DetailHighlight {
  label: string;
  value: string;
}

interface SectionDetailTemplateProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  parentLabel: string;
  parentHref: string;
  itemsHeading?: string;
  items: DetailItem[];
  bullets?: string[];
  highlights?: DetailHighlight[];
  iconName?: string;
  ctaTitle?: string;
  ctaBody?: string;
}

export function SectionDetailTemplate({
  eyebrow,
  title,
  highlight,
  subtitle,
  parentLabel,
  parentHref,
  itemsHeading = 'What we deliver',
  items,
  bullets,
  highlights,
  iconName,
  ctaTitle,
  ctaBody,
}: SectionDetailTemplateProps) {
  const Icon = iconName ? SECTION_ICONS[iconName] : undefined;
  return (
    <>
      {/* Breadcrumb strip */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-brand-blue transition-colors">
            Home
          </a>
          <span>/</span>
          <a
            href={parentHref}
            className="hover:text-brand-blue transition-colors"
          >
            {parentLabel}
          </a>
          <span>/</span>
          <span className="text-brand-navy font-medium">{title}</span>
        </div>
      </div>

      <SectionHero
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        subtitle={subtitle}
        primaryCta={{ label: 'Talk to an Expert', href: '#contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '#case-studies' }}
        stats={highlights}
      />

      {/* Items grid */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              {itemsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.04,
                  ease: easingCurve.industrial,
                }}
                className="group relative p-6 rounded-xl bg-white border border-brand-blue/12 hover:border-brand-cyan/45 hover:-translate-y-1 hover:shadow-[0_20px_45px_-15px_rgba(4,92,179,0.2)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/8 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan transition-all">
                  {Icon ? (
                    <Icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                  ) : (
                    <span className="text-brand-blue group-hover:text-white text-xs font-bold transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bullets / Why-us strip */}
      {bullets && bullets.length > 0 && (
        <section className="relative py-20 sm:py-24 bg-brand-light/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                Why Aayulogic
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
                Engineering partners, not just vendors.
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                Our teams embed with yours from architecture through production
                hand-off — bringing the same standards that power 15M+ daily
                transactions across our engagements.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors"
              >
                See how we engage
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-4">
                {bullets.map((b, idx) => (
                  <motion.li
                    key={b}
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
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <CTABand
        eyebrow="Next Step"
        title={ctaTitle ?? `Let's talk about your ${title} initiative.`}
        body={
          ctaBody ??
          'Schedule a 30-minute scoping call with our solutions engineers. We respond within one business day.'
        }
      />
    </>
  );
}
