'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Coins,
  HeartPulse,
  Home,
  GraduationCap,
  Palmtree,
  Laptop,
  Plane,
  CalendarCheck,
  MapPin,
  Briefcase,
  Clock,
  Sparkles,
  Users2,
  Globe2,
  Code2,
  type LucideIcon,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/section/PageHero';
import { CTABand } from '@/components/section/CTABand';
import {
  JOB_DEPARTMENTS,
  JOB_POSTINGS,
  CAREER_BENEFITS,
  HIRING_PROCESS,
} from '@/lib/constants';
import { easingCurve, motionConfig } from '@/lib/utils';

const BENEFIT_ICONS: Record<string, LucideIcon> = {
  Coins,
  HeartPulse,
  Home,
  GraduationCap,
  Palmtree,
  Laptop,
  Plane,
  CalendarCheck,
};

export default function CareersPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Careers Hub"
        title="Build What's Next,"
        highlight="With Us"
        subtitle="Join a 300-strong engineering organization shipping production systems across four continents. We hire seniors-only, pay for craft, and operate the platforms we ship."
        stats={[
          { value: '10+', label: 'Open Roles' },
          { value: '4', label: 'Continents' },
          { value: '300+', label: 'Engineers' },
        ]}
        primaryCta={{ label: 'View Open Roles', href: '#open-roles' }}
        secondaryCta={{ label: 'How We Hire', href: '#hiring' }}
      />

      <AtGlanceSection />
      <WhyJoinSection />
      <TeamEnvironmentSection />
      <OpenRolesSection />
      <BenefitsSection />
      <HiringProcessSection />

      <CTABand
        eyebrow="Don't See Your Role?"
        title="We're always meeting exceptional engineers."
        body="If you don't see a fit but believe you'd thrive here, send us a note. We keep warm pipelines and reach back when the right role opens."
        primaryLabel="Send a Note"
        primaryHref="mailto:careers@aayulogic.com"
        secondaryLabel="Learn About Us"
        secondaryHref="/about"
      />

      <Footer />
    </>
  );
}

// =============================================================================
//  AT A GLANCE — clean snapshot card right under the hero
// =============================================================================

function AtGlanceSection() {
  const GLANCE = [
    {
      label: 'Hiring bar',
      value: 'Seniors only',
      icon: Code2,
    },
    {
      label: 'Work setup',
      value: 'Remote-first',
      icon: Home,
    },
    {
      label: 'Visa sponsorship',
      value: 'Yes — 3 offices',
      icon: Plane,
    },
    {
      label: 'Time to offer',
      value: '< 4 weeks',
      icon: Clock,
    },
  ];

  return (
    <section className="relative -mt-12 sm:-mt-16 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 z-10">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easingCurve.industrial }}
          className="rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-25px_rgba(10,25,47,0.2)] overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
            {GLANCE.map((g, idx) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.06,
                    ease: easingCurve.industrial,
                  }}
                  className="flex items-center gap-4 p-5 sm:p-6"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-md shadow-brand-blue/15">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1">
                      {g.label}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-brand-navy leading-tight">
                      {g.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
//  WHY JOIN — simpler four-reason layout
// =============================================================================

function WhyJoinSection() {
  const REASONS = [
    {
      title: 'Seniors-only hiring',
      description:
        'No bootcamp churn. You join a team of experienced engineers who pair, review, and push each other to ship better.',
      icon: Code2,
    },
    {
      title: 'Operate what you build',
      description:
        'You carry the pager for what you ship. Direct ownership end-to-end — no throw-it-over-the-wall culture.',
      icon: Briefcase,
    },
    {
      title: 'Real customers, real scale',
      description:
        '15M+ daily transactions across products serving hundreds of organizations. The work has weight from day one.',
      icon: Users2,
    },
    {
      title: 'Global mobility',
      description:
        'Spend quarters in another office. We sponsor visas and relocate engineers across our Toronto-Lalitpur-Brisbane-Louisville network.',
      icon: Globe2,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
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
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-14"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Why Aayulogic
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            A career built on{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              craft and trust
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Four reasons the senior engineers we hire stay — and bring their friends with them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {REASONS.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: easingCurve.industrial,
                }}
                whileHover={{ y: -3 }}
                className="group relative p-6 rounded-2xl border border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_18px_40px_-15px_rgba(4,92,179,0.16)] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-4 shadow-md shadow-brand-blue/15">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2 leading-tight">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  TEAM ENVIRONMENT (image with quote)
// =============================================================================

function TeamEnvironmentSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easingCurve.industrial }}
          className="relative group"
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_30px_60px_-20px_rgba(10,25,47,0.18)]">
            <div className="relative aspect-[16/9] sm:aspect-[18/8] lg:aspect-[21/8] bg-brand-navy">
              <Image
                src="/team-image.jpg"
                alt="Aayulogic engineers collaborating"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />

              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(10,25,47,0.55) 0%, rgba(10,25,47,0.25) 35%, rgba(10,25,47,0.25) 60%, rgba(10,25,47,0.92) 100%)',
                }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
                <div className="max-w-3xl">
                  <Sparkles className="w-6 h-6 text-brand-cyan mb-4" />
                  <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-tight tracking-tight mb-4">
                    &ldquo;Async writing, decision logs, and timezone-aware design from day one — that&apos;s how a team across four continents stays sharp.&rdquo;
                  </p>
                  <p className="text-sm text-brand-cyan font-bold uppercase tracking-[0.2em]">
                    Engineering Culture · Aayulogic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
//  OPEN ROLES — cleaner role list
// =============================================================================

function OpenRolesSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredJobs =
    activeFilter === 'all'
      ? JOB_POSTINGS
      : JOB_POSTINGS.filter((j) => j.department === activeFilter);

  const DEPT_LABEL: Record<string, string> = JOB_DEPARTMENTS.reduce(
    (acc, d) => ({ ...acc, [d.key]: d.label }),
    {}
  );

  return (
    <section
      id="open-roles"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
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
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Open Positions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Find your{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              next chapter
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {JOB_POSTINGS.length} roles currently open across engineering, product, and operations.
          </p>
        </motion.div>

        {/* Department filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 lg:mb-12">
          {JOB_DEPARTMENTS.map((dept) => {
            const isActive = activeFilter === dept.key;
            const count =
              dept.key === 'all'
                ? JOB_POSTINGS.length
                : JOB_POSTINGS.filter((j) => j.department === dept.key).length;
            return (
              <button
                key={dept.key}
                onClick={() => setActiveFilter(dept.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-brand-navy text-white shadow-lg'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue'
                }`}
              >
                {dept.label}
                <span
                  className={`ml-2 text-xs ${
                    isActive ? 'text-brand-cyan' : 'text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Jobs list — cleaner with department badge */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, idx) => (
              <motion.a
                key={job.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.04,
                  ease: easingCurve.industrial,
                }}
                href="mailto:careers@aayulogic.com"
                className="group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-brand-blue/40 hover:shadow-[0_18px_36px_-12px_rgba(4,92,179,0.18)] transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-blue/10 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-blue">
                      {DEPT_LABEL[job.department] ?? job.department}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      <Clock className="w-3 h-3" />
                      {job.experience}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors leading-tight">
                    {job.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-brand-blue" />
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:flex-shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                    Apply
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/15 text-brand-blue transition-all group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  BENEFITS — grouped into 2 clear themes for easier scanning
// =============================================================================

function BenefitsSection() {
  const GROUPS = [
    {
      title: 'Compensation & Growth',
      blurb: 'Pay for craft, invest in learning, reward longevity.',
      keys: ['Coins', 'GraduationCap', 'Palmtree', 'CalendarCheck'],
    },
    {
      title: 'Work & Wellbeing',
      blurb: 'Flexibility, equipment, mobility, and real health cover.',
      keys: ['Home', 'Laptop', 'HeartPulse', 'Plane'],
    },
  ];

  const benefitsByKey: Record<string, (typeof CAREER_BENEFITS)[number]> =
    CAREER_BENEFITS.reduce(
      (acc, b) => ({ ...acc, [b.iconKey]: b }),
      {} as Record<string, (typeof CAREER_BENEFITS)[number]>
    );

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Benefits & Perks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Compensation that{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              respects your craft
            </span>
            .
          </h2>
        </motion.div>

        <div className="space-y-10 lg:space-y-12">
          {GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: groupIdx * 0.08,
                ease: easingCurve.industrial,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy leading-tight">
                    {group.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{group.blurb}</p>
                </div>
                <div className="h-px flex-1 sm:max-w-xs bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                {group.keys.map((key) => {
                  const b = benefitsByKey[key];
                  if (!b) return null;
                  const Icon = BENEFIT_ICONS[b.iconKey] ?? Sparkles;
                  return (
                    <motion.div
                      key={b.title}
                      whileHover={{ y: -3 }}
                      transition={{
                        duration: 0.3,
                        ease: easingCurve.industrial,
                      }}
                      className="group relative p-5 rounded-xl border border-slate-200 bg-white/80 backdrop-blur hover:border-brand-blue/30 hover:bg-white hover:shadow-[0_18px_36px_-15px_rgba(4,92,179,0.18)] transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-3 shadow-md shadow-brand-blue/15">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-brand-navy mb-1.5 leading-tight">
                        {b.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {b.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  HIRING PROCESS
// =============================================================================

function HiringProcessSection() {
  return (
    <section
      id="hiring"
      data-theme="dark"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-navy text-white"
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
            How We Hire
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
            A process that{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
              respects your time
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Four focused conversations, decision in under four weeks. No whiteboards, no trick questions, no ghosting.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {HIRING_PROCESS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: easingCurve.industrial,
              }}
              className="group relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-brand-cyan/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-brand-cyan">
                  {step.step}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  {step.duration}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
