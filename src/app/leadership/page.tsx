'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, ArrowUpRight, Quote } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/section/PageHero';
import { CTABand } from '@/components/section/CTABand';
import { LEADERSHIP_TEAM, ADVISORY_BOARD } from '@/lib/constants';
import { easingCurve, motionConfig } from '@/lib/utils';

export default function LeadershipPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Leadership Team"
        title="Meet the Architects"
        highlight="Behind Aayulogic"
        subtitle="An operator-led organization spanning four continents. The same engineers who built RealHRsoft, scaled to 300+ people, and quietly run 15M+ daily transactions."
        stats={[
          { value: '6', label: 'C-Level Leaders' },
          { value: '4', label: 'Continents' },
          { value: '10+', label: 'Years Together' },
        ]}
        primaryCta={{ label: 'Join the Team', href: '/careers' }}
        secondaryCta={{ label: 'See Our Story', href: '/about' }}
      />

      <ExecutiveTeamSection />
      <PhilosophySection />
      <AdvisoryBoardSection />

      <CTABand
        eyebrow="Partner With Us"
        title="Talk directly to the team running the work."
        body="Our leaders aren't behind a layer of account managers. Reach out — you'll talk to the engineer or operator who actually owns it."
        primaryLabel="Reach Out"
        primaryHref="/contact"
        secondaryLabel="Open Roles"
        secondaryHref="/careers"
      />

      <Footer />
    </>
  );
}

// =============================================================================
//  EXECUTIVE TEAM
// =============================================================================

function ExecutiveTeamSection() {
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
            Executive Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Operators, not{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              account managers
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Six leaders running engineering, product, finance, and global operations — each accountable for what their teams ship.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {LEADERSHIP_TEAM.map((leader) => (
            <motion.div
              key={leader.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35, ease: easingCurve.industrial }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.25)] transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-brand-navy overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,25,47,0) 0%, rgba(10,25,47,0) 50%, rgba(10,25,47,0.85) 100%)',
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                    <MapPin className="w-3 h-3 text-brand-cyan" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                      {leader.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex-1 flex flex-col p-6 sm:p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-2">
                  {leader.role}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                  {leader.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5">
                  {leader.bio}
                </p>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <a
                    href={`mailto:${leader.email}`}
                    aria-label={`Email ${leader.name}`}
                    className="group/btn flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue hover:bg-brand-blue/5 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                  <a
                    href={leader.linkedin}
                    aria-label={`${leader.name} on LinkedIn`}
                    className="group/btn flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue hover:bg-brand-blue/5 transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
//  PHILOSOPHY (dark quote section)
// =============================================================================

function PhilosophySection() {
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

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
        >
          <Quote className="w-12 h-12 text-brand-cyan mx-auto mb-6 opacity-80" />
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-6">
            Leadership Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] tracking-tight mb-8">
            &ldquo;We hire seniors, write architecture down, and operate what we ship.{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
              The rest takes care of itself
            </span>
            .&rdquo;
          </h2>
          <div className="inline-flex items-center gap-3 mt-4">
            <div className="w-12 h-px bg-brand-cyan/50" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan">
              The Aayulogic Operating Principle
            </p>
            <div className="w-12 h-px bg-brand-cyan/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
//  ADVISORY BOARD
// =============================================================================

function AdvisoryBoardSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
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
            Advisory Board
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Specialist counsel,{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              where it matters
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Independent advisors in healthcare, enterprise platforms, and AI — sharpening decisions in domains where the cost of being wrong is high.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {ADVISORY_BOARD.map((advisor, idx) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: easingCurve.industrial,
              }}
              className="group relative p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/60 hover:border-brand-blue/30 hover:shadow-[0_20px_40px_-15px_rgba(4,92,179,0.18)] transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-brand-blue/15 flex-shrink-0">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy leading-tight mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue leading-snug">
                    {advisor.role}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{advisor.bio}</p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Independent Advisor
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
