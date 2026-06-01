'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Users2,
  Code2,
  ShieldAlert,
  ArrowUpRight,
  MapPin,
  BadgeCheck,
} from 'lucide-react';
import { motionConfig, easingCurve } from '@/lib/utils';

type TrustItem = {
  logo: string;
  alt: string;
  name: string;
  role: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  kind: 'certification' | 'partner';
};

const CERTIFICATIONS: TrustItem[] = [
  {
    logo: '/ISO-9001.png',
    alt: 'ISO 9001 certified',
    name: 'ISO 9001:2015',
    role: 'Quality Management System',
    desc: 'Independently certified delivery discipline — every release verified against documented quality controls.',
    icon: ShieldCheck,
    kind: 'certification',
  },
  {
    logo: '/ISO-27001.png',
    alt: 'ISO 27001 certified',
    name: 'ISO 27001:2022',
    role: 'Information Security Management System',
    desc: 'Enterprise-grade data, access and infrastructure controls — independently certified to global standards.',
    icon: Lock,
    kind: 'certification',
  },
];

const PARTNERS: TrustItem[] = [
  {
    logo: '/mero-job-jobaxle-1024x126.png',
    alt: 'Merojob and JobAxle',
    name: 'Merojob × JobAxle',
    role: 'Recruitment Partners',
    desc: 'Sourcing top IT and HR talent across Nepal — feeding the engineering pipeline that powers our delivery.',
    icon: Users2,
    kind: 'partner',
  },
  {
    logo: '/awecode.svg',
    alt: 'Awecode',
    name: 'Awecode Pvt. Ltd.',
    role: 'Software Development Partner',
    desc: 'Extended resource pool for urgent or large-scale projects — surge capacity without compromising standards.',
    icon: Code2,
    kind: 'partner',
  },
  {
    logo: '/Greentick-Logo.png',
    alt: 'Greentick Nepal',
    name: 'Greentick Nepal Pvt. Ltd.',
    role: 'Cybersecurity Partner',
    desc: 'Trusted cybersecurity solutions — penetration testing, threat assessment and continuous security posture.',
    icon: ShieldAlert,
    kind: 'partner',
  },
];

export function AboutSection() {
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
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 10% 10%, rgba(0,194,255,0.05) 0%, transparent 70%), radial-gradient(40% 30% at 95% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* =============== HEADER =============== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Your Digital Transformation{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Partner</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Since 2016, Aayulogic has been delivering intelligent digital solutions that
            help businesses modernize operations, accelerate growth, and adapt to an
            evolving technological landscape. By combining strategic innovation with
            world-class engineering, we build scalable enterprise systems, AI-powered
            platforms, and high-performance digital products tailored for long-term success.
          </p>
        </motion.div>

        {/* =============== HERO IMAGE BLOCK =============== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easingCurve.industrial }}
          className="relative group"
        >
          {/* Glow halo */}
          <div
            aria-hidden
            className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-blue/30 via-transparent to-brand-cyan/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"
          />

          {/* Image frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_30px_60px_-20px_rgba(10,25,47,0.18)]">
            <div className="relative aspect-[16/9] sm:aspect-[18/8] lg:aspect-[21/8] bg-brand-navy">
              <Image
                src="/team-image.jpg"
                alt="The Aayulogic team — engineers, designers and operators across our global offices"
                fill
                priority={false}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />

              {/* Cinematic gradient overlays */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(10,25,47,0.35) 0%, rgba(10,25,47,0) 25%, rgba(10,25,47,0) 55%, rgba(10,25,47,0.85) 100%)',
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(10,25,47,0.45) 0%, rgba(10,25,47,0) 30%, rgba(10,25,47,0) 70%, rgba(10,25,47,0.35) 100%)',
                }}
              />

              {/* Subtle grid texture */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />

              {/* Bottom-right locations strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: easingCurve.industrial }}
                className="absolute bottom-0 right-0 p-4 sm:p-6 lg:p-8"
              >
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 font-medium flex-wrap justify-end">
                  <MapPin className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                  <span className="text-white font-semibold">Toronto</span>
                  <span className="text-slate-500">·</span>
                  <span>Kathmandu</span>
                  <span className="text-slate-500">·</span>
                  <span>Louisville</span>
                  <span className="text-slate-500">·</span>
                  <span>Sydney</span>
                  <span className="text-slate-500">·</span>
                  <span>Dubai</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* =============== TRUST SECTION — ISO + PARTNERS =============== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionConfig.default}
          className="mt-16 lg:mt-24"
        >
          {/* === ISO Certifications subheading === */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 lg:mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-brand-blue text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
                <BadgeCheck className="w-3.5 h-3.5" />
                Globally Certified
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy tracking-tight leading-[1.1]">
                Independently audited to{' '}
                <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                  global standards
                </span>
              </h3>
            </div>
            <p className="text-sm text-slate-500 sm:max-w-xs sm:text-right">
              Quality and security aren&apos;t claims — they&apos;re audited, certified and documented.
            </p>
          </div>

          {/* === ISO Certifications — 2 large cards === */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
          >
            {CERTIFICATIONS.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.name}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: easingCurve.industrial }}
                  className="group relative rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50/60 overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(4,92,179,0.22)] transition-all"
                >
                  {/* Glow ribbon */}
                  <div
                    aria-hidden
                    className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-cyan/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ transform: 'translate(40%, -40%)' }}
                  />
                  {/* Subtle grid */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #0A192F 1px, transparent 1px), linear-gradient(to bottom, #0A192F 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />

                  <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
                    {/* LARGE ISO badge */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                      className="relative flex-shrink-0"
                    >
                      <div
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-brand-blue/15 blur-2xl"
                      />
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
                        <Image
                          src={c.logo}
                          alt={c.alt}
                          fill
                          sizes="144px"
                          className="object-contain drop-shadow-[0_8px_16px_rgba(4,92,179,0.25)]"
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Icon className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                          Certified
                        </p>
                      </div>
                      <h4 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-brand-navy leading-tight mb-1.5 tracking-tight">
                        {c.name}
                      </h4>
                      <p className="text-sm sm:text-base font-semibold text-slate-700 leading-snug mb-3">
                        {c.role} Certified
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {c.desc}
                      </p>

                      {/* Verified strip */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-blue/8 text-brand-blue">
                          <BadgeCheck className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-bold uppercase tracking-wider">
                            Audited & Verified
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
