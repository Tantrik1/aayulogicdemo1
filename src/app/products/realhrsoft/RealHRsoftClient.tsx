'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Users,
  Calendar,
  DollarSign,
  Target,
  BarChart3,
  Shield,
  FileText,
  GraduationCap,
  Sparkles,
  Star,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { FAQSection } from '@/components/FAQSection';
import { easingCurve } from '@/lib/utils';

const realhrsoftFaqs = [
  {
    q: "What is the typical setup and onboarding time for RealHRsoft?",
    a: "Onboarding typically takes 4 to 6 weeks depending on organization size. We provide a dedicated implementation engineer to manage data migration, policy configuration, and user training."
  },
  {
    q: "Does RealHRsoft support biometric integration for attendance tracking?",
    a: "Yes. It supports biometric devices, geo-fenced mobile check-ins, and IP-restricted web check-ins. All punch data syncs into attendance and payroll logs in real-time."
  },
  {
    q: "Is the payroll module compliant with multi-country tax regulations?",
    a: "Yes. Our payroll engine is pre-configured for compliance across South Asia, North America, and Middle East regions, supporting automated tax calculation, payslips, and local bank file exports."
  },
  {
    q: "Can we customize performance review cycles and OKR workflows?",
    a: "Yes. RealHRsoft features a highly flexible review builder supporting 360-degree feedback, custom assessment questionnaires, continuous check-ins, and performance calibration."
  }
];

const FEATURES = [
  {
    icon: Users,
    title: 'Recruitment & Onboarding',
    description:
      'Job posting, candidate pipelines, structured interview kits, and offer letter automation.',
  },
  {
    icon: Calendar,
    title: 'Attendance & Leave',
    description:
      'Biometric, geo-fenced, and IP-restricted clock-ins. Policy-based leave engine.',
  },
  {
    icon: DollarSign,
    title: 'Payroll',
    description:
      'Multi-country payroll runs, tax compliance, payslip generation, and bank file exports.',
  },
  {
    icon: Target,
    title: 'Performance Management',
    description:
      'OKRs, 360 reviews, calibration sessions, and continuous feedback loops.',
  },
  {
    icon: BarChart3,
    title: 'People Analytics',
    description:
      'Headcount, attrition, comp-ratio, and DEI dashboards exportable to BI tools.',
  },
  {
    icon: Shield,
    title: 'Compliance & Audit',
    description:
      'SOC 2 Type II, ISO 27001, GDPR, and country-specific labor compliance modules.',
  },
  {
    icon: FileText,
    title: 'Document Vault',
    description:
      'E-signed contracts, policy acknowledgments, and document expiry reminders.',
  },
  {
    icon: GraduationCap,
    title: 'Learning Integration',
    description:
      'Native Real Learn integration for upskilling tied to performance plans.',
  },
];

const MODULES = [
  { name: 'Core HRIS', items: ['Employee Directory', 'Org Chart', 'Custom Fields'] },
  { name: 'Time & Attendance', items: ['Shift Planner', 'Overtime Engine', 'Biometric Integrations'] },
  { name: 'Payroll', items: ['Multi-Country Runs', 'Tax Tables', 'Pay Slip Builder'] },
  { name: 'Recruitment', items: ['ATS', 'Interview Kits', 'Offer Workflows'] },
  { name: 'Performance', items: ['OKRs', '360 Reviews', 'Calibration'] },
  { name: 'Analytics', items: ['HR Dashboards', 'Headcount Trends', 'DEI Reports'] },
];

const TESTIMONIAL = {
  quote:
    "We replaced two SaaS vendors with one Aayulogic-built platform and cut OpEx by 41%. Roadmap clarity from week one.",
  author: 'Elena Rossi',
  role: 'COO',
  company: 'Verdant Logistics',
};

export function RealHRsoftClient() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-brand-blue transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-brand-blue transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-brand-navy font-medium">RealHRsoft</span>
        </div>
      </div>

      {/* Hero — split with dashboard mockup */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light via-white to-white pt-20 pb-20 sm:pt-24 sm:pb-28">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(4,92,179,0.25) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-brand-blue/15 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                Trusted by 500+ enterprises
              </span>
            </motion.div>

            <div className="h-14 mb-6">
              <Image
                src="/realhrsoft.png"
                alt="RealHRsoft"
                width={1024}
                height={230}
                priority
                className="h-14 w-auto object-contain object-left"
              />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-brand-navy text-balance"
            >
              Complete HR intelligence{' '}
              <span className="bg-gradient-to-r from-brand-blue via-brand-system-blue to-brand-cyan bg-clip-text text-transparent">
                for modern teams.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl"
            >
              From hiring to payroll to performance — one platform that scales
              from 20 to 20,000 employees without re-implementation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg shadow-brand-blue/20"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
                <span className="relative">Book a Demo</span>
                <ArrowUpRight className="relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-white border border-brand-blue/20 text-brand-navy hover:border-brand-blue/40 transition-all"
              >
                Contact Sales
                <ArrowUpRight className="w-4 h-4 text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex items-center gap-6 text-xs text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-brand-blue" />
                SOC 2 Type II
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-brand-blue" />
                ISO 27001
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-brand-blue" />
                GDPR
              </div>
            </motion.div>
          </div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-blue/20 via-brand-cyan/15 to-transparent blur-2xl"
              />
              <div className="relative rounded-2xl bg-white border border-brand-blue/15 shadow-2xl shadow-brand-blue/15 overflow-hidden">
                {/* Mock app chrome */}
                <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-brand-light/40">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="ml-3 text-[11px] font-medium text-slate-400">
                    app.realhrsoft.com
                  </div>
                </div>

                {/* Real screenshot mockup */}
                <div className="relative aspect-[16/10] w-full bg-slate-50">
                  <Image
                    src="/realhrsoft_dashboard.png"
                    alt="RealHRsoft Dashboard Interface"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Everything HR Needs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Eight modules. One platform. Zero swivel-chair.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, idx) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: easingCurve.industrial,
                  }}
                  className="group p-6 rounded-xl bg-white border border-brand-blue/12 hover:border-brand-cyan/45 hover:-translate-y-1 hover:shadow-[0_20px_45px_-15px_rgba(4,92,179,0.2)] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-4 shadow-md shadow-brand-blue/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules breakdown */}
      <section className="relative py-20 sm:py-24 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Modules
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Activate what you need. Skip what you don't.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((m) => (
              <div
                key={m.name}
                className="p-5 rounded-xl bg-white border border-brand-blue/10"
              >
                <h3 className="text-base font-bold text-brand-navy mb-3">{m.name}</h3>
                <ul className="space-y-2">
                  {m.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <blockquote className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight text-balance mb-8">
            "{TESTIMONIAL.quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white font-bold">
              {TESTIMONIAL.author.split(' ').map((p) => p[0]).join('')}
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-brand-navy">
                {TESTIMONIAL.author}
              </div>
              <div className="text-xs text-slate-500">
                {TESTIMONIAL.role}, {TESTIMONIAL.company}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products Cross-linking */}
      <section className="relative py-20 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Integrations &amp; Suite
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Other products in our SaaS Suite
            </h2>
            <p className="mt-4 text-slate-600">
              RealHRsoft integrates natively with our communication and learning systems to provide a unified enterprise experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/products/realchat"
              className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-brand-blue/30 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                  Real Chat
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Secure team communication and collaboration workspace built for privacy and compliance-sensitive organizations.
                </p>
              </div>
              <span className="text-xs font-semibold text-brand-blue flex items-center gap-1">
                Explore Real Chat <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/products/reallearn"
              className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-brand-blue/30 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                  Real Learn
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Enterprise LMS for onboarding, continuous professional development, and compliance certification training.
                </p>
              </div>
              <span className="text-xs font-semibold text-brand-blue flex items-center gap-1">
                Explore Real Learn <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection items={realhrsoftFaqs} />

      <CTABand
        eyebrow="See It Live"
        title="Book a 30-minute walkthrough."
        body="We'll show you RealHRsoft running with your data shape. No slides — just the product."
        primaryLabel="Book a Demo"
        secondaryLabel="Talk to Sales"
      />
      <Footer />
    </>
  );
}
