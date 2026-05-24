'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Users2,
  Calendar,
  ArrowUpRight,
  Building2,
  Globe2,
} from 'lucide-react';
import CA from 'country-flag-icons/react/3x2/CA';
import NP from 'country-flag-icons/react/3x2/NP';
import US from 'country-flag-icons/react/3x2/US';
import AU from 'country-flag-icons/react/3x2/AU';
import AE from 'country-flag-icons/react/3x2/AE';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/section/PageHero';
import { CTABand } from '@/components/section/CTABand';
import { OFFICES_DETAILED } from '@/lib/constants';
import { easingCurve, motionConfig } from '@/lib/utils';

const FLAG_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  CA,
  NP,
  US,
  AU,
  AE,
};

export default function LocationsPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Global Locations"
        title="Engineering Across"
        highlight="Four Continents"
        subtitle="A Canadian global HQ, a 300-engineer hub in Lalitpur, finance in Louisville, APAC operations in Brisbane, and a Dubai office opening in 2026."
        stats={[
          { value: '5', label: 'Locations' },
          { value: '4', label: 'Continents' },
          { value: '24/7', label: 'Coverage' },
        ]}
        primaryCta={{ label: 'Contact a Region', href: '#contact-hub' }}
        secondaryCta={{ label: 'See Our Team', href: '/leadership' }}
      />

      <OfficesGridSection />
      <EngineeringCentersSection />
      <ContactHubSection />

      <CTABand
        eyebrow="Ready to Talk"
        title="Whichever timezone, we'll meet you there."
        body="Our offices span 24 hours of working time. Reach the team closest to you, or send a single note and we'll route it to the right region."
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
//  OFFICES GRID
// =============================================================================

function OfficesGridSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
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
            Our Offices
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            One company,{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              five timezones
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Each office has a named leader, a defined focus, and direct accountability — no faceless regional offices, no opaque org charts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {OFFICES_DETAILED.map((office) => {
            const Flag = FLAG_MAP[office.countryCode];
            const isHQ = office.badge === 'Head Office';
            const isComingSoon = office.badge === 'Coming Soon';
            return (
              <motion.div
                key={office.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: easingCurve.industrial }}
                className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all ${
                  isHQ
                    ? 'border-brand-blue/40 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 hover:border-brand-blue/60 hover:shadow-[0_30px_60px_-20px_rgba(4,92,179,0.3)]'
                    : 'border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.22)]'
                }`}
              >
                {/* Header strip */}
                <div className="relative p-6 sm:p-7 border-b border-slate-100">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      {Flag && (
                        <div className="rounded-md overflow-hidden ring-1 ring-slate-200/80 w-14 h-9 shadow-sm flex-shrink-0">
                          <Flag className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-brand-navy leading-tight">
                          {office.city}
                        </h3>
                        <p className="text-sm text-slate-500 mt-0.5">{office.country}</p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap ${
                        isHQ
                          ? 'bg-brand-blue text-white'
                          : isComingSoon
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {office.badge}
                    </span>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                    {office.role}
                  </p>
                </div>

                {/* Body */}
                <div className="relative p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Meta grid */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <MetaItem icon={Clock} label="Hours" value={office.hours} />
                    <MetaItem icon={Globe2} label="Timezone" value={office.timezone} />
                    <MetaItem icon={Users2} label="Team" value={office.headcount} />
                    <MetaItem icon={Calendar} label="Since" value={office.established} />
                  </div>

                  {/* Focus areas */}
                  <div className="mb-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2">
                      Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {office.focus.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 text-xs text-slate-500 mb-5 pb-5 border-b border-slate-100">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{office.address}</span>
                  </div>

                  {/* Contact */}
                  {office.contact ? (
                    <div className="mt-auto">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-3">
                        Regional Lead
                      </p>
                      <p className="text-sm font-bold text-brand-navy">
                        {office.contact.name}
                      </p>
                      <p className="text-xs text-slate-500 mb-3">{office.contact.title}</p>
                      <div className="space-y-1.5">
                        <a
                          href={`tel:${office.contact.phone}`}
                          className="group/link flex items-center gap-2 text-xs text-slate-600 hover:text-brand-blue transition-colors"
                        >
                          <Phone className="w-3 h-3 text-brand-blue" />
                          <span className="font-mono">{office.contact.phone}</span>
                        </a>
                        <a
                          href={`mailto:${office.contact.email}`}
                          className="group/link flex items-center gap-2 text-xs text-slate-600 hover:text-brand-blue transition-colors break-all"
                        >
                          <Mail className="w-3 h-3 text-brand-blue flex-shrink-0" />
                          <span>{office.contact.email}</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-auto flex items-center gap-2 px-4 py-3 rounded-lg bg-amber-50 border border-amber-200">
                      <Building2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="text-xs text-amber-800 font-semibold">
                        Office opening 2026 — early-access partners welcome
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-1.5 mb-1">
        <Icon className="w-3 h-3 text-brand-blue flex-shrink-0" />
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {label}
        </p>
      </div>
      <p className="text-xs font-semibold text-brand-navy truncate">{value}</p>
    </div>
  );
}

// =============================================================================
//  ENGINEERING CENTERS (dark spotlight)
// =============================================================================

function EngineeringCentersSection() {
  const CENTERS = [
    {
      city: 'Lalitpur',
      country: 'Nepal',
      role: 'Primary Engineering Hub',
      description:
        'Our largest delivery center — 300+ engineers across product, platform, AI/ML, and SRE. The team that built RealHRsoft, Real Chat, and Real Learn.',
      stats: [
        { value: '300+', label: 'Engineers' },
        { value: '2016', label: 'Established' },
        { value: '6', label: 'Practice Areas' },
      ],
    },
    {
      city: 'Toronto',
      country: 'Canada',
      role: 'Global Headquarters',
      description:
        'Anchors strategy, North American client delivery, and senior engineering leadership. Where the executive team meets and global decisions get made.',
      stats: [
        { value: '20+', label: 'Team' },
        { value: '2022', label: 'Established' },
        { value: '24/7', label: 'Coverage' },
      ],
    },
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
            Engineering Centers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
            Two anchor sites,{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
              one delivery culture
            </span>
            .
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {CENTERS.map((c, idx) => (
            <motion.div
              key={c.city}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: easingCurve.industrial,
              }}
              whileHover={{ y: -4 }}
              className="group relative p-7 sm:p-8 lg:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-brand-cyan/30 transition-all overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(circle, rgba(0,194,255,0.4) 0%, transparent 70%)',
                }}
              />

              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-cyan mb-3">
                  {c.role}
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-2">
                  {c.city}
                </h3>
                <p className="text-sm text-slate-300 mb-6">{c.country}</p>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                  {c.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div
                        className="text-2xl sm:text-3xl font-black tracking-tight mb-1"
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
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  CONTACT HUB
// =============================================================================

function ContactHubSection() {
  const CHANNELS = [
    {
      title: 'General Inquiries',
      email: 'hello@aayulogic.com',
      description: 'For partnerships, press, and anything that doesn’t fit elsewhere.',
    },
    {
      title: 'New Projects',
      email: 'projects@aayulogic.com',
      description: 'Engagements, RFPs, and consulting briefs. Routed directly to delivery leadership.',
    },
    {
      title: 'Careers',
      email: 'careers@aayulogic.com',
      description: 'Applications and warm pipeline. Read by the talent team within 5 business days.',
    },
    {
      title: 'Security',
      email: 'security@aayulogic.com',
      description: 'Responsible disclosure, security audits, and ISO 27001 inquiries.',
    },
  ];

  return (
    <section
      id="contact-hub"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
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
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Contact Hub
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Reach the{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              right team, fast
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct routes by intent. No contact forms, no ticketing — emails go to the humans actually working on it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {CHANNELS.map((c, idx) => (
            <motion.a
              key={c.title}
              href={`mailto:${c.email}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.06,
                ease: easingCurve.industrial,
              }}
              className="group relative p-7 sm:p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/60 hover:border-brand-blue/40 hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.22)] transition-all overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)',
                }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-2">
                    {c.title}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 leading-tight group-hover:text-brand-blue transition-colors break-all">
                    {c.email}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-blue/15 text-brand-blue transition-all group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
