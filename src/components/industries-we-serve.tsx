'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Landmark,
  HeartPulse,
  FlaskConical,
  GraduationCap,
  Clapperboard,
  ShoppingBag,
  ArrowUpRight,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { motionConfig, easingCurve } from '@/lib/utils';

type Industry = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

// Unsplash imagery — `?auto=format&fit=crop&w=800&q=70` for small payload.
// Hostname is allowed by next.config.ts (remotePatterns: **).
const INDUSTRIES: Industry[] = [
  {
    slug: 'bfsi',
    number: '01',
    title: 'Banking & Digital Finance',
    short: 'BFSI',
    description:
      'Cloud-native ledgers, secure transaction routing, and core-banking modernization for regulated, high-throughput environments.',
    highlights: ['Real-time settlement', 'PCI-DSS · ISO 27001', 'Zero-downtime cutovers'],
    icon: Landmark,
    image:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Modern bank facade architecture',
  },
  {
    slug: 'healthcare',
    number: '02',
    title: 'Healthcare & MedDev',
    short: 'Healthcare',
    description:
      'HIPAA-compliant clinical systems, patient portals, and connected medical devices with the audit trails and uptime guarantees that care demands.',
    highlights: ['FHIR-native APIs', 'HIPAA compliant', 'Device interoperability'],
    icon: HeartPulse,
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Modern clinical environment',
  },
  {
    slug: 'pharma',
    number: '03',
    title: 'Pharma & Life Sciences',
    short: 'Pharma',
    description:
      'GxP-validated clinical trial automation, R&D logging, and field-force enablement — built around FDA 21 CFR Part 11 and EU Annex 11 expectations.',
    highlights: ['EDC integration', 'GxP-validated', 'Audit-ready by default'],
    icon: FlaskConical,
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Pharmaceutical laboratory vials',
  },
  {
    slug: 'professional-services',
    number: '04',
    title: 'Professional Services & EdTech',
    short: 'EdTech',
    description:
      'Custom learning platforms, scalable Moodle architectures, and adaptive AI learning paths built around how learners actually progress.',
    highlights: ['SCORM · LTI 1.3', 'Adaptive AI', 'Multi-tenant ready'],
    icon: GraduationCap,
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Students collaborating with laptops',
  },
  {
    slug: 'media',
    number: '05',
    title: 'Media & Entertainment',
    short: 'Media',
    description:
      'Automated print composition, web-to-print pipelines, and real-time streaming infrastructure that turns editorial deadlines into deployment cadences.',
    highlights: ['Print + Web sync', '4K HLS / DASH', 'Asset orchestration'],
    icon: Clapperboard,
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Professional film camera in studio',
  },
  {
    slug: 'retail',
    number: '06',
    title: 'Retail & Digital Commerce',
    short: 'Retail',
    description:
      'Multi-tenant headless storefronts, omnichannel inventory, and order orchestration engineered for peak-day traffic shapes.',
    highlights: ['Headless storefronts', 'Omnichannel OMS', 'Edge-rendered'],
    icon: ShoppingBag,
    image:
      'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Modern retail storefront interior',
  },
];

const CARD_SIZES =
  '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';

function IndustryCard({
  ind,
  delay,
  eager,
}: {
  ind: Industry;
  delay: number;
  eager?: boolean;
}) {
  const reduce = useReducedMotion();
  const Icon = ind.icon;

  // Build a small srcset so retina screens get crisper without overloading mobile.
  const base = ind.image.split('?')[0];
  const srcSet = `${base}?auto=format&fit=crop&w=480&q=70 480w, ${base}?auto=format&fit=crop&w=800&q=70 800w, ${base}?auto=format&fit=crop&w=1200&q=70 1200w`;

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: easingCurve.industrial }}
      className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-[0_1px_2px_rgba(10,25,47,0.04)] hover:border-brand-blue/40 hover:shadow-[0_18px_40px_-18px_rgba(4,92,179,0.28)] transition-[box-shadow,border-color,transform] duration-500 hover:-translate-y-1"
    >
      {/* ===== Media ===== */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${base}?auto=format&fit=crop&w=800&q=70`}
          srcSet={srcSet}
          sizes={CARD_SIZES}
          alt={ind.imageAlt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        {/* Soft gradient overlay for legibility of overlay chips */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-brand-navy/0 to-brand-navy/15"
        />
        {/* Number badge */}
        <span className="absolute top-3 left-3 inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-mono font-bold tracking-wider text-brand-navy shadow-sm">
          {ind.number}
        </span>
        {/* Short label badge */}
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-navy/85 backdrop-blur-sm text-[10px] font-semibold tracking-wider text-white uppercase">
          {ind.short}
        </span>
      </div>

      {/* ===== Body ===== */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Icon + Title row */}
        <div className="flex items-start gap-3 mb-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan shadow-[0_6px_14px_-4px_rgba(4,92,179,0.4)] flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </span>
          <h3 className="text-base sm:text-lg font-bold text-brand-navy leading-tight tracking-tight pt-1.5 group-hover:text-brand-blue transition-colors">
            {ind.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {ind.description}
        </p>

        {/* Highlights — clean bullet list */}
        <ul className="space-y-1.5 mb-5">
          {ind.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-[13px] text-slate-700"
            >
              <span
                aria-hidden
                className="flex-shrink-0 w-1 h-1 rounded-full bg-brand-cyan"
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Footer link */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <a
            href={`#${ind.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-navy transition-colors"
          >
            Explore the {ind.short} playbook
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ViewAllBand({ delay }: { delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: easingCurve.industrial }}
      className="relative mt-8 sm:mt-10 lg:mt-12 overflow-hidden rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-slate-50 via-white to-brand-blue/[0.04]"
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.55] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(4,92,179,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(4,92,179,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 70% 70% at 85% 50%, black 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 70% at 85% 50%, black 20%, transparent 80%)',
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-cyan/15 blur-3xl pointer-events-none"
      />

      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8 p-6 sm:p-7 lg:p-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-2">
            And beyond these six
          </p>
          <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-brand-navy leading-tight tracking-tight">
            Explore the full vertical playbook —{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              case studies, stacks, and outcomes
            </span>{' '}
            for every sector.
          </h3>
        </div>

        <div className="flex flex-shrink-0 items-center gap-3">
          <a
            href="/industries"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold hover:bg-brand-blue transition-colors shadow-[0_10px_24px_-8px_rgba(4,92,179,0.45)]"
          >
            View all industries
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function IndustriesWeServe() {
  return (
    <section
      id="industries"
      className="relative bg-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle blueprint backdrop (very faint) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(4,92,179,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(4,92,179,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 100%)',
        }}
      />
      {/* Soft accent washes */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(36% 26% at 10% 12%, rgba(0,194,255,0.06) 0%, transparent 70%), radial-gradient(40% 30% at 92% 90%, rgba(4,92,179,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* =============== HEADER =============== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-brand-blue text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            <span className="w-6 h-px bg-brand-blue/60" />
            Industries We Serve
            <span className="w-6 h-px bg-brand-blue/60" />
          </span>
          <h2 className="text-[28px] sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.08] tracking-tight">
            Every vertical.{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              One operating standard.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            We carry the compliance, the constraints, and the engineering muscle
            of each sector into every engagement — so domain context is never a
            translation step.
          </p>
        </motion.div>

        {/* =============== GRID =============== */}
        {/*
          Responsive design:
          - Mobile (default): 1 column, generous spacing, image first
          - Tablet (sm 640px+): 2 columns
          - Desktop (lg 1024px+): 3 columns
          - 6 industry cards fill the grid perfectly at every breakpoint.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {INDUSTRIES.map((ind, i) => (
            <IndustryCard
              key={ind.slug}
              ind={ind}
              delay={i * 0.04}
              eager={i < 3}
            />
          ))}
        </div>

        {/* =============== VIEW ALL BAND =============== */}
        <ViewAllBand delay={0.1} />
      </div>
    </section>
  );
}
