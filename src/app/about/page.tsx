'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Wrench,
  TrendingUp,
  ShieldCheck,
  Globe2,
  BadgeCheck,
  MapPin,
  Sparkles,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/section/PageHero';
import { CTABand } from '@/components/section/CTABand';
import {
  COMPANY_TIMELINE,
  COMPANY_VALUES,
  ENGINEERING_PRINCIPLES,
} from '@/lib/constants';
import { easingCurve, motionConfig } from '@/lib/utils';

const VALUE_ICON_MAP: Record<string, LucideIcon> = {
  Wrench,
  TrendingUp,
  ShieldCheck,
  Globe2,
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Our Company"
        title="Engineering the Future of"
        highlight="Digital Transformation"
        subtitle="Aayulogic Inc. is a Canadian-headquartered global technology company. Since 2016, we've quietly built the platforms, products, and partnerships that 500+ organizations depend on every day."
        stats={[
          { value: '10+', label: 'Years Building' },
          { value: '300+', label: 'Engineers' },
          { value: '4', label: 'Continents' },
        ]}
        primaryCta={{ label: 'Meet the Team', href: '/leadership' }}
        secondaryCta={{ label: 'See Our Locations', href: '/locations' }}
      />

      {/* ============ STORY TIMELINE ============ */}
      <StorySection />

      {/* ============ PHILOSOPHY & VALUES ============ */}
      <ValuesSection />

      {/* ============ ENGINEERING PRINCIPLES ============ */}
      <PrinciplesSection />

      {/* ============ BY THE NUMBERS ============ */}
      <NumbersSection />

      {/* ============ CERTIFICATIONS ============ */}
      <CertificationsSection />

      <CTABand
        eyebrow="Let's Build Together"
        title="Ready to engineer your next chapter?"
        body="Whether you're modernizing a legacy system or launching a new platform, our team can match the right engineering muscle to your roadmap."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Open Roles"
        secondaryHref="/careers"
      />

      <Footer />
    </>
  );
}

// =============================================================================
//  STORY TIMELINE
// =============================================================================

function StorySection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
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
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            A decade of{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              compounding craft
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Started in Kathmandu with six engineers, anchored in Toronto today — every milestone shipped, never just announced.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/40 via-brand-cyan/30 to-transparent sm:-translate-x-px"
          />

          <div className="space-y-10 sm:space-y-12">
            {COMPANY_TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  ease: easingCurve.industrial,
                }}
                className={`relative flex flex-col sm:flex-row gap-6 sm:gap-10 ${
                  idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Year marker */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-brand-blue ring-4 ring-white shadow-[0_0_0_2px_rgba(4,92,179,0.2)]" />
                </div>

                {/* Card */}
                <div className="ml-12 sm:ml-0 sm:flex-1 sm:max-w-md">
                  <div className="group relative p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_20px_50px_-15px_rgba(4,92,179,0.18)] transition-all">
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/[0.03] to-brand-cyan/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    />
                    <div className="relative">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden sm:block sm:flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  VALUES
// =============================================================================

function ValuesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: motionConfig.default,
    },
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 80% 10%, rgba(0,194,255,0.06) 0%, transparent 70%), radial-gradient(40% 30% at 0% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
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
            Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            What we{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              actually believe
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Four principles that shape every engagement, every release, and every hire we make.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
        >
          {COMPANY_VALUES.map((value) => {
            const Icon = VALUE_ICON_MAP[value.iconKey] ?? Sparkles;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: easingCurve.industrial }}
                className="group relative p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur hover:border-brand-blue/30 hover:bg-white hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.2)] transition-all overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)',
                  }}
                />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-5 shadow-lg shadow-brand-blue/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
//  ENGINEERING PRINCIPLES
// =============================================================================

function PrinciplesSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Engineering Principles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            How we{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              ship software
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Six rules that govern our codebases — written for engineers, enforced in review, audited in production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {ENGINEERING_PRINCIPLES.map((principle, idx) => (
            <motion.div
              key={principle.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: easingCurve.industrial,
              }}
              whileHover={{ y: -3 }}
              className="group relative p-6 sm:p-7 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/60 hover:border-brand-blue/30 hover:shadow-[0_16px_32px_-12px_rgba(4,92,179,0.16)] transition-all"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-sm font-black tracking-tight text-brand-blue">
                  {principle.index}
                </span>
                <h3 className="flex-1 text-lg sm:text-xl font-bold text-brand-navy leading-tight pt-1">
                  {principle.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  BY THE NUMBERS (dark band)
// =============================================================================

function NumbersSection() {
  const STATS = [
    { value: '300+', label: 'Engineers' },
    { value: '15M+', label: 'Daily Transactions' },
    { value: '99.4%', label: 'SLA Stability' },
    { value: '500+', label: 'Enterprises Served' },
    { value: '10+', label: 'Years Building' },
    { value: '4', label: 'Continents' },
  ];

  return (
    <section
      data-theme="dark"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-navy text-white"
    >
      <div
        aria-hidden
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(4,92,179,0.5) 0%, transparent 70%)',
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

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            By the Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
            Built quietly,{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
              measured precisely
            </span>
            .
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {STATS.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: easingCurve.industrial,
              }}
              className="text-center"
            >
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #00C2FF 0%, #FFFFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {s.value}
              </div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  CERTIFICATIONS
// =============================================================================

function CertificationsSection() {
  const CERTS = [
    {
      logo: '/ISO-9001.png',
      name: 'ISO 9001:2015',
      role: 'Quality Management System',
      description:
        'Independently certified delivery discipline — every release verified against documented quality controls.',
    },
    {
      logo: '/ISO-27001.png',
      name: 'ISO 27001:2022',
      role: 'Information Security Management',
      description:
        'Enterprise-grade data, access, and infrastructure controls — independently certified to global standards.',
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
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
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10 lg:mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-brand-blue text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
              <BadgeCheck className="w-3.5 h-3.5" />
              Globally Certified
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-[1.1] tracking-tight">
              Independently audited to{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                global standards
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 sm:max-w-xs sm:text-right">
            Quality and security aren&apos;t claims — they&apos;re audited, certified, and documented.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {CERTS.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="group relative rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50/60 overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(4,92,179,0.22)] transition-all"
            >
              <div
                aria-hidden
                className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-cyan/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ transform: 'translate(40%, -40%)' }}
              />

              <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 flex-shrink-0">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    sizes="144px"
                    className="object-contain drop-shadow-[0_8px_16px_rgba(4,92,179,0.25)]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-2">
                    Certified
                  </p>
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-brand-navy leading-tight mb-1.5 tracking-tight">
                    {c.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-700 leading-snug mb-3">
                    {c.role}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">{c.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HQ banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={motionConfig.default}
          className="mt-10 lg:mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 sm:p-8 rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-1">
                Global HQ
              </p>
              <p className="text-base sm:text-lg font-bold text-brand-navy leading-tight">
                Aayulogic Inc. — Toronto, Ontario, Canada
              </p>
            </div>
          </div>
          <a
            href="/locations"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-brand-blue/30 bg-white text-sm font-bold text-brand-navy hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            See all offices
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
