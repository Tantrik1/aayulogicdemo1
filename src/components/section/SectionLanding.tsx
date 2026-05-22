'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { easingCurve } from '@/lib/utils';
import { SECTION_ICONS } from './sectionIcons';

interface LandingCard {
  href: string;
  title: string;
  description: string;
  iconName?: string;
  tag?: string;
}

interface SectionLandingProps {
  eyebrow: string;
  title: string;
  cards: LandingCard[];
}

export function SectionLanding({ eyebrow, title, cards }: SectionLandingProps) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              {eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => {
            const Icon = card.iconName ? SECTION_ICONS[card.iconName] : undefined;
            return (
              <motion.a
                key={card.href}
                href={card.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: easingCurve.industrial,
                }}
                className="group relative flex flex-col p-6 rounded-xl overflow-hidden bg-white border border-brand-blue/12 hover:border-brand-cyan/45 hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.25)] transition-all duration-300"
              >
                {/* Top luminous line on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(0,194,255,0.6), transparent)',
                  }}
                />
                {/* Corner glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)',
                  }}
                />

                {/* Icon + tag row */}
                <div className="relative flex items-start justify-between mb-5">
                  {Icon ? (
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-md shadow-brand-blue/20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-lg bg-brand-blue/8 flex items-center justify-center">
                      <span className="text-brand-blue font-bold text-sm">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                  {card.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue/70">
                      {card.tag}
                    </span>
                  )}
                </div>

                <h3 className="relative text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                  {card.title}
                </h3>
                <p className="relative text-sm text-slate-600 leading-relaxed flex-1">
                  {card.description}
                </p>

                <div className="relative mt-5 pt-4 border-t border-slate-100 group-hover:border-brand-blue/20 transition-colors">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue group-hover:gap-1.5 transition-all">
                    Explore
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
