'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  ArrowUpRight,
  Quote,
  Building2,
  MapPin,
  Globe2,
  Briefcase,
  Users2,
  Award,
  Calendar,
  type LucideIcon,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FAQSection } from '@/components/FAQSection';
import { easingCurve, motionConfig } from '@/lib/utils';

const companyFaqs = [
  {
    q: "What does Aayulogic actually do?",
    a: "We are a Canadian-headquartered global technology company. We build and operate production software — including flagship platforms like RealHRsoft and custom AI/cloud engagements for enterprise clients across North America."
  },
  {
    q: "Where is Aayulogic headquartered?",
    a: "Our global headquarters is Aayulogic Inc. in Toronto, Canada. Our primary engineering hub is Aayulogic Systems Pvt. Ltd. in Lalitpur, Kathmandu, Nepal, which has been operating continuously since 2016."
  },
  {
    q: "How long has Aayulogic been around?",
    a: "Since 2016. We have spent nine years building and operating software — for clients and for ourselves, proving our global engineering capabilities over a decade of continuous growth."
  },
  {
    q: "Are your processes certified for security and quality?",
    a: "Yes. We hold active, independently audited ISO 9001:2015 (Quality Management Systems) and ISO 27001:2022 (Information Security Management Systems) certifications. These standards govern all client engagements and delivery pipelines."
  }
];

// =============================================================================
//  PAGE
// =============================================================================

export default function AboutPage() {
  return (
    <>
      <Header />
      <Hero />
      <WhoWeAre />
      <CompanyStructure />
      <TheModel />
      <TimelineSection />
      <Values />
      <Certifications />
      <FAQSection items={companyFaqs} />
      <FinalCTA />
      <Footer />
    </>
  );
}

// =============================================================================
//  HERO — pure video, text + CTAs
// =============================================================================

function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative w-full min-h-[80svh] flex flex-col items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium"
    >
      <div aria-hidden className="cobalt-grain" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easingCurve.industrial }}
        className="relative max-w-5xl mx-auto w-full text-center flex flex-col items-center gap-7"
      >
        <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-white/85 px-4 py-1.5 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm">
          About Aayulogic
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.02] tracking-tight text-balance text-white">
          A Canadian Engineering Company.{' '}
          <span className="bg-gradient-to-r from-white via-brand-cyan to-white bg-clip-text text-transparent">
            Nine Years in the Making.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl text-white/85">
          Aayulogic Inc. is incorporated in Toronto, Canada, with an engineering hub in Kathmandu, Nepal —
          established in 2016. We build custom software, dedicated engineering teams, and enterprise software
          platforms for startups and growing companies in Canada and the US.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_15px_40px_-10px_rgba(0,194,255,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(0,194,255,0.7)] transition-all"
          >
            Start a Conversation
            <ArrowUpRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full border-2 border-white/40 hover:border-white text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// =============================================================================
//  WHO WE ARE — white
// =============================================================================

function WhoWeAre() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionConfig.default}
        >
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-5">
            Not a consultancy.<br />Not a staffing company.
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
            We are an engineering team that has spent nine years building and operating software — for clients and for ourselves. We have made architecture decisions we later had to undo. We have rebuilt modules from scratch when we got things wrong. We have absorbed the cost of deployment failures and learned from them.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            When we say we bring product-building discipline to client engagements — we mean it literally. We have lived every stage of it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...motionConfig.default, delay: 0.1 }}
          className="relative rounded-2xl bg-brand-navy text-white p-7 sm:p-8 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-16 -right-16 w-60 h-60 rounded-full blur-3xl opacity-40"
            style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.45) 0%, transparent 70%)' }}
          />
          <Quote className="relative w-8 h-8 text-brand-cyan mb-4" />
          <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-brand-cyan/80 mb-3">
            The conviction we were built on
          </p>
          <p className="relative text-xl sm:text-2xl font-medium leading-snug italic mb-5">
            &ldquo;The best engineering should not be limited to companies that can afford local hiring rates.&rdquo;
          </p>
          <p className="relative text-sm text-white/65 leading-relaxed">
            That conviction has shaped every decision we have made since 2016 — from where we built our engineering hub, to why we pursued ISO certification, to how we structure every client engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
//  COMPANY STRUCTURE — video bg
// =============================================================================

const FACTS: { label: string; value: string; icon: LucideIcon }[] = [
  { label: 'Global Headquarters', value: 'Toronto, Ontario, Canada', icon: Building2 },
  { label: 'Engineering Hub', value: 'Kathmandu, Nepal — Est. 2016', icon: MapPin },
  { label: 'Representative Offices', value: 'USA (Louisville, KY) · Australia (Brisbane, QLD)', icon: Globe2 },
  { label: 'Target Markets', value: 'Canada and United States', icon: Briefcase },
  { label: 'Engineering Team', value: '50+ across engineering, product, and operations', icon: Users2 },
  { label: 'ISO Certifications', value: 'ISO 9001:2015 — Quality Management · ISO 27001:2022 — Information Security', icon: ShieldCheck },
  { label: 'Incorporation', value: 'Aayulogic Inc. — Canada · Aayulogic Pvt. Ltd. — Nepal', icon: Award },
];

function CompanyStructure() {
  return (
    <section
      data-theme="dark"
      className="relative py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden bg-cobalt-premium"
    >
      <div aria-hidden className="cobalt-grain" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionConfig.default}
          className="max-w-3xl mb-10"
        >
          <p className="text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            Company Structure
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The facts, plainly stated.
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-white/10 overflow-hidden bg-slate-900/40 backdrop-blur-sm">
          {FACTS.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: easingCurve.industrial }}
                className="grid grid-cols-1 sm:grid-cols-[280px_1fr] border-b border-white/10 last:border-b-0"
              >
                <div className="flex items-center gap-3 px-5 py-4 bg-slate-900/40 border-b sm:border-b-0 sm:border-r border-white/10">
                  <Icon className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                    {f.label}
                  </span>
                </div>
                <div className="px-5 py-4 text-sm sm:text-base text-white/90">{f.value}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  THE MODEL — white
// =============================================================================

function TheModel() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionConfig.default}
          className="max-w-3xl mb-10"
        >
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            The Model
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Two countries. One engineering standard.<br />Built over nine years.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-slate-900 text-white p-7 sm:p-9 border border-slate-800 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-60 h-60 rounded-full blur-3xl opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)' }}
            />
            <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              Canada — Toronto
            </p>
            <h3 className="relative text-xl sm:text-2xl font-semibold mb-4">
              Global Headquarters &amp; Commercial Oversight
            </h3>
            <ul className="relative space-y-2.5 text-sm text-white/75 leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-cyan">·</span> Canadian incorporation</li>
              <li className="flex gap-2"><span className="text-brand-cyan">·</span> Toronto-based point of contact for every engagement</li>
              <li className="flex gap-2"><span className="text-brand-cyan">·</span> IP ownership for all international markets</li>
              <li className="flex gap-2"><span className="text-brand-cyan">·</span> Western-standard governance and accountability</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-slate-900 text-white p-7 sm:p-9 border border-slate-800 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-60 h-60 rounded-full blur-3xl opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)' }}
            />
            <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              Nepal — Kathmandu
            </p>
            <h3 className="relative text-xl sm:text-2xl font-semibold mb-4">
              Engineering Hub — Est. 2016
            </h3>
            <ul className="relative space-y-2.5 text-sm text-white/75 leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-cyan">·</span> 50+ engineers, operating continuously since 2016</li>
              <li className="flex gap-2"><span className="text-brand-cyan">·</span> ISO 9001:2015 &amp; ISO 27001:2022 certified</li>
              <li className="flex gap-2"><span className="text-brand-cyan">·</span> The same standards built for commercial banks</li>
              <li className="flex gap-2"><span className="text-brand-cyan">·</span> Applied to every engagement, every industry</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-brand-light/50 border border-brand-blue/10 p-6 sm:p-8 text-center leading-relaxed text-slate-700">
          <p className="mb-3">
            Our engineering hub in Kathmandu was established in 2016. Nepal now has a stable majority government — the first in almost seven decades — and has formally declared IT a strategic economic sector.
          </p>
          <p>
            For Canadian clients: you get a Canadian company with Canadian accountability, and an engineering team operating under the same security and quality standards we built for regulated financial institutions.{' '}
            <strong className="text-brand-navy font-semibold">That is not outsourcing. That is structured, certified engineering capability.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  TIMELINE — video bg
// =============================================================================

type Milestone = {
  year: string;
  title: string;
  description: string;
};

const TIMELINE: Milestone[] = [
  {
    year: '2016',
    title: 'Engineering hub established in Kathmandu, Nepal.',
    description:
      'Operations begin. Aayulogic delivers Merojob.com and Rojgari Services — Nepal\'s largest job portals.',
  },
  {
    year: '2017–2019',
    title: 'First enterprise clients. RealHRsoft launched.',
    description:
      'Nepal\'s first enterprise HR Management solution launches. First regulated-sector deployments in financial services.',
  },
  {
    year: '2020–2021',
    title: 'ISO 9001:2015 certified. First banking client onboarded.',
    description:
      'Quality Management Systems certification achieved. First commercial bank deploys on platform. Mobile applications launched.',
  },
  {
    year: '2023',
    title: 'ISO 27001:2022 certified. RealChat launched.',
    description:
      'Information Security Management certification achieved. Portfolio expanded with Real Chat and Cloud & DevOps services.',
  },
  {
    year: '2024',
    title: 'Client base reaches 100+ organisations.',
    description:
      'IT solutions delivered to Canadian & US clients, proving global capabilities. Two major commercial banks live on platform.',
  },
  {
    year: '2025',
    title: 'Aayulogic Inc. incorporated in Toronto, Canada.',
    description:
      'Global Head Office established. Representative offices in USA and Australia. International commercialisation begins in earnest.',
  },
  {
    year: '2026 — Now',
    title: 'Canadian market expansion. Engineering services pipeline building.',
    description: 'Toronto headquarters active. Canadian client engagements underway.',
  },
];

function TimelineSection() {
  const [active, setActive] = useState(TIMELINE.length - 1);
  const m = TIMELINE[active];

  return (
    <section
      data-theme="dark"
      className="relative py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden bg-cobalt-premium"
    >
      <div aria-hidden className="cobalt-grain" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionConfig.default}
          className="max-w-3xl mb-10"
        >
          <p className="text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            Company Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Nine years of building.{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
              Here is how it happened.
            </span>
          </h2>
        </motion.div>

        <div className="relative mb-10">
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-brand-cyan/15 via-brand-cyan/50 to-brand-cyan/15 -translate-y-1/2"
          />
          <div className="relative grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 lg:gap-3">
            {TIMELINE.map((t, i) => {
              const isActive = i === active;
              const isLast = i === TIMELINE.length - 1;
              return (
                <button
                  key={t.year}
                  onClick={() => setActive(i)}
                  className="group relative flex flex-col items-center gap-2"
                >
                  <span
                    className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 transition-all ${
                      isActive
                        ? 'bg-gradient-to-br from-brand-blue to-brand-cyan border-white shadow-[0_0_0_4px_rgba(0,194,255,0.25)] scale-110'
                        : isLast
                          ? 'bg-slate-900/60 border-brand-cyan text-brand-cyan'
                          : 'bg-slate-900/40 border-white/30 text-white/60 group-hover:border-brand-cyan group-hover:text-brand-cyan'
                    }`}
                  >
                    {isActive ? (
                      <Calendar className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-[10px] font-bold">{i + 1}</span>
                    )}
                  </span>
                  <span
                    className={`text-[11px] lg:text-xs font-bold tracking-wider transition-colors ${
                      isActive ? 'text-brand-cyan' : 'text-white/70 group-hover:text-white'
                    }`}
                  >
                    {t.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="relative rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-white/10 p-7 sm:p-10 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-60 h-60 rounded-full blur-3xl opacity-50"
                style={{
                  background: 'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)',
                }}
              />
              <div className="relative grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-10 items-start">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-2">
                    Milestone {active + 1} of {TIMELINE.length}
                  </p>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    {m.year}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-3">
                    {m.title}
                  </h3>
                  <p className="text-base text-white/75 leading-relaxed">{m.description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-between text-sm">
            <button
              onClick={() => setActive((i) => Math.max(0, i - 1))}
              disabled={active === 0}
              className="inline-flex items-center gap-1.5 font-semibold text-white/70 hover:text-brand-cyan disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Previous
            </button>
            <span className="text-xs text-white/50">Click any year above to jump</span>
            <button
              onClick={() => setActive((i) => Math.min(TIMELINE.length - 1, i + 1))}
              disabled={active === TIMELINE.length - 1}
              className="inline-flex items-center gap-1.5 font-semibold text-white/70 hover:text-brand-cyan disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  VALUES — white
// =============================================================================

const VALUES = [
  {
    number: '01',
    title: 'Build it right, not just fast.',
    body: 'We have rebuilt modules from scratch after 18 months because we got the architecture wrong. We absorbed the cost. Speed matters — but a system that breaks at scale costs more than the time it takes to design it properly.',
  },
  {
    number: '02',
    title: 'Canadian accountability, Nepal capability.',
    body: 'Every engagement has a Canadian point of contact. Every line of code is written by a Kathmandu team operating under ISO 9001 and ISO 27001 — not because it looks good on a document, but because our bank clients required it.',
  },
  {
    number: '03',
    title: 'Stay involved, not just delivered.',
    body: 'We do not hand over and disappear. We have seen what happens when a team does that — we have cleaned it up. We stay through deployment and beyond because that is when the real problems surface.',
  },
];

function Values() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionConfig.default}
          className="max-w-3xl mb-12"
        >
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            Our Values
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Three values. Specific, honest,<br />earned through experience.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: easingCurve.industrial }}
              className="group relative p-7 rounded-2xl border border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_24px_50px_-20px_rgba(4,92,179,0.2)] transition-all"
            >
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-brand-blue/30 group-hover:to-brand-cyan/40 transition-colors leading-none mb-4">
                {v.number}
              </p>
              <h3 className="text-base font-bold text-brand-navy mb-3 leading-tight">
                {v.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  CERTIFICATIONS — video bg
// =============================================================================

function Certifications() {
  return (
    <section
      data-theme="dark"
      className="relative py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden bg-cobalt-premium"
    >
      <div aria-hidden className="cobalt-grain" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionConfig.default}
          className="max-w-3xl mb-10"
        >
          <p className="text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Not marketing badges.<br />Operating standards.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              badge: 'ISO 9001:2015',
              role: 'Quality Management Systems',
              title: 'Quality Management Systems',
              body: 'This certification governs our engineering processes, delivery standards, and quality controls. It means every project follows a documented, auditable process — not informal practices. Built for clients who cannot accept inconsistent delivery.',
              icon: ShieldCheck,
            },
            {
              badge: 'ISO 27001:2022',
              role: 'Information Security Management',
              title: 'Information Security Management',
              body: 'This certification governs how we handle data, access controls, incident response, and security protocols. It is the standard our commercial bank clients required. It applies to every engagement we take on — not just banking clients.',
              icon: Lock,
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.badge}
                className="p-7 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-cyan/15 mb-5">
                  <Icon className="w-4 h-4 text-brand-cyan" />
                  <span className="text-sm font-bold text-brand-cyan">{c.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{c.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-5 rounded-xl bg-slate-900/50 backdrop-blur-sm border-l-4 border-brand-cyan">
          <p className="text-sm italic text-white/80 leading-relaxed">
            These certifications are not marketing badges. They are operating standards we built because our clients demanded them — and we now apply them to every engagement regardless of industry.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  FINAL CTA — white
// =============================================================================

function FinalCTA() {
  return (
    <section className="relative bg-white py-20 sm:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div
          data-theme="dark"
          className="relative rounded-2xl bg-cobalt-premium text-white overflow-hidden px-8 sm:px-14 py-14 sm:py-20 text-center"
        >
          <div aria-hidden className="cobalt-grain" />
          <div
            aria-hidden
            className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)' }}
          />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              See how we work.
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8">
              Nine years of engineering operations. ISO-certified. Canadian accountability.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-[0_15px_40px_-10px_rgba(0,194,255,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(0,194,255,0.7)] transition-all"
            >
              Start a conversation
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
