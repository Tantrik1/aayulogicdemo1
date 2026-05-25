'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Users2,
  MessageSquare,
  Briefcase,
  Lock,
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
import { OFFICES_DETAILED } from '@/lib/constants';
import { easingCurve, motionConfig } from '@/lib/utils';

const FLAG_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  CA,
  NP,
  US,
  AU,
  AE,
};

const PROJECT_TYPES = [
  'AI & Automation',
  'Cloud Infrastructure',
  'Enterprise Platform',
  'Mobile Application',
  'Cybersecurity',
  'Talent & Engagement',
  'Something else',
];

const BUDGET_RANGES = [
  'Under $25K',
  '$25K – $100K',
  '$100K – $500K',
  '$500K – $1M',
  '$1M+',
  'Not sure yet',
];

const TIMELINES = [
  'ASAP — within 30 days',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Exploring',
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Something"
        highlight="Together"
        subtitle="Tell us about your project. You'll talk directly to an engineer or operator — no gatekeepers, no qualification calls."
        stats={[
          { value: '24h', label: 'Response Time' },
          { value: '4', label: 'Continents' },
          { value: '15M+', label: 'Daily Txns' },
        ]}
        primaryCta={{ label: 'Email Sales', href: 'mailto:projects@aayulogic.com' }}
        secondaryCta={{ label: 'See Offices', href: '#offices' }}
      />

      <ContactFormSection />
      <DirectChannelsSection />
      <OfficesQuickSection />
      <TrustBandSection />

      <Footer />
    </>
  );
}

// =============================================================================
//  CONTACT FORM (centerpiece — split layout)
// =============================================================================

function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[0],
    timeline: TIMELINES[0],
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Project Type: ${form.projectType}
Budget: ${form.budget}
Timeline: ${form.timeline}

Message:
${form.message}`;
    const subject = `New project inquiry — ${form.company || form.name}`;
    window.location.href = `mailto:projects@aayulogic.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const update =
    <K extends keyof typeof form>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

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
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={motionConfig.default}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
              Start a Project
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight mb-5">
              Tell us where{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                you&apos;re going
              </span>
              .
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              The form goes straight to delivery leadership. We read every inquiry within 24 hours and reply with a real engineer or operator on the thread.
            </p>

            {/* Trust list */}
            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  title: 'First reply in 24 hours',
                  desc: 'Often same-day during business hours across our four timezones.',
                },
                {
                  icon: Users2,
                  title: 'Direct to an operator',
                  desc: 'No qualification calls, no sales tickets — you talk to the team that will build it.',
                },
                {
                  icon: ShieldCheck,
                  title: 'NDA-ready',
                  desc: 'Confidentiality framework on file. Mutual NDA can be in place within hours.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-blue/20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-navy mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: easingCurve.industrial }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Glow halo */}
              <div
                aria-hidden
                className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-brand-blue/15 via-transparent to-brand-cyan/15 blur-2xl opacity-60"
              />

              <div className="relative rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-20px_rgba(4,92,179,0.18)] overflow-hidden">
                {submitted ? (
                  <SuccessState onReset={() => setSubmitted(false)} />
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field
                        label="Full Name"
                        required
                        type="text"
                        placeholder="Jane Patel"
                        value={form.name}
                        onChange={update('name')}
                      />
                      <Field
                        label="Work Email"
                        required
                        type="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={update('email')}
                      />
                    </div>

                    <Field
                      label="Company"
                      type="text"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={update('company')}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <SelectField
                        label="Project Type"
                        value={form.projectType}
                        onChange={update('projectType')}
                        options={PROJECT_TYPES}
                      />
                      <SelectField
                        label="Budget"
                        value={form.budget}
                        onChange={update('budget')}
                        options={BUDGET_RANGES}
                      />
                      <SelectField
                        label="Timeline"
                        value={form.timeline}
                        onChange={update('timeline')}
                        options={TIMELINES}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-navy mb-2">
                        Project Details <span className="text-brand-blue">*</span>
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Tell us about the problem you're solving, the stack you're on, and what success looks like."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10 transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                      <p className="text-xs text-slate-500 leading-relaxed flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                        Your information stays with delivery leadership. We never share it.
                      </p>
                      <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-brand-blue/30 whitespace-nowrap"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
                        <div className="absolute inset-0 rounded-xl border border-white/40 group-hover:border-white transition-colors" />
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue opacity-0 group-hover:opacity-40 blur-lg transition-opacity" />
                        <span className="relative flex items-center gap-2">
                          Send Inquiry
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required = false,
  ...props
}: {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-navy mb-2">
        {label} {required && <span className="text-brand-blue">*</span>}
      </label>
      <input
        required={required}
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10 transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  ...props
}: {
  label: string;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-navy mb-2">
        {label}
      </label>
      <select
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-brand-navy focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10 transition-all appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23045CB3%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px] bg-[right_1rem_center] bg-no-repeat pr-10"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="p-10 sm:p-14 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: easingCurve.industrial,
          type: 'spring',
          stiffness: 200,
          damping: 18,
        }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan mb-6 shadow-lg shadow-brand-blue/30"
      >
        <CheckCircle2 className="w-10 h-10 text-white" />
      </motion.div>
      <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
        Your email client should be opening
      </h3>
      <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-8">
        We&apos;ve pre-filled the inquiry. Send it from your inbox and we&apos;ll be on the thread within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-brand-blue/30 bg-white text-sm font-bold text-brand-navy hover:border-brand-blue hover:text-brand-blue transition-colors"
        >
          Submit Another
        </button>
        <Link
          href="/locations"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-700 hover:border-brand-blue/30 hover:bg-white transition-colors"
        >
          View Offices
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

// =============================================================================
//  DIRECT CHANNELS
// =============================================================================

function DirectChannelsSection() {
  const CHANNELS = [
    {
      title: 'General Inquiries',
      email: 'hello@aayulogic.com',
      description: 'For partnerships, press, and anything that doesn’t fit elsewhere.',
      icon: MessageSquare,
    },
    {
      title: 'New Projects',
      email: 'projects@aayulogic.com',
      description: 'Engagements, RFPs, and consulting briefs. Routed to delivery leadership.',
      icon: Briefcase,
    },
    {
      title: 'Careers',
      email: 'careers@aayulogic.com',
      description: 'Applications and warm pipeline. Read within 5 business days.',
      icon: Users2,
    },
    {
      title: 'Security',
      email: 'security@aayulogic.com',
      description: 'Responsible disclosure, security audits, and ISO 27001 inquiries.',
      icon: Lock,
    },
  ];

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
            Direct Channels
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Prefer to{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              skip the form?
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Four routes by intent. Emails go to the humans actually working on it — no ticketing, no auto-replies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {CHANNELS.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.title}
                href={`mailto:${c.email}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: easingCurve.industrial,
                }}
                className="group relative flex flex-col p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-brand-blue/40 hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.22)] transition-all overflow-hidden"
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
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-5 shadow-md shadow-brand-blue/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-2">
                    {c.title}
                  </p>
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-3 leading-tight group-hover:text-brand-blue transition-colors break-all">
                    {c.email}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                    {c.description}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Send Email
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  OFFICES QUICK CARDS
// =============================================================================

function OfficesQuickSection() {
  return (
    <section
      id="offices"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
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
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-12"
        >
          <div>
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-3">
              Visit an Office
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-[1.1] tracking-tight">
              Reach a region{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                directly
              </span>
              .
            </h2>
          </div>
          <Link
            href="/locations"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-brand-blue/30 bg-white text-sm font-bold text-brand-navy hover:border-brand-blue hover:text-brand-blue transition-colors self-start"
          >
            See full office details
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {OFFICES_DETAILED.map((office, idx) => {
            const Flag = FLAG_MAP[office.countryCode];
            const isHQ = office.badge === 'Head Office';
            return (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: easingCurve.industrial,
                }}
                className={`group relative p-5 rounded-xl border transition-all flex flex-col ${
                  isHQ
                    ? 'border-brand-blue/40 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 hover:border-brand-blue/60 hover:shadow-[0_20px_40px_-15px_rgba(4,92,179,0.25)]'
                    : 'border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_16px_32px_-12px_rgba(4,92,179,0.18)]'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {Flag && (
                    <div className="rounded-md overflow-hidden ring-1 ring-slate-200/80 w-10 h-7 flex-shrink-0">
                      <Flag className="w-full h-full object-cover" />
                    </div>
                  )}
                  {isHQ && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-brand-blue text-white text-[9px] font-bold uppercase tracking-[0.15em]">
                      HQ
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-brand-navy leading-tight mb-1">
                  {office.city}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{office.country}</p>

                {office.contact ? (
                  <a
                    href={`mailto:${office.contact.email}`}
                    className="group/link mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-navy transition-colors break-all"
                  >
                    <Mail className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{office.contact.email}</span>
                  </a>
                ) : (
                  <p className="mt-auto text-xs text-amber-700 font-semibold">
                    Opening 2026
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  TRUST BAND (dark — promises)
// =============================================================================

function TrustBandSection() {
  const PROMISES = [
    {
      icon: Clock,
      title: '24-hour first response',
      description: 'Often same day during business hours across our four timezones.',
    },
    {
      icon: Users2,
      title: 'Direct to engineers',
      description: 'No qualification calls. You talk to whoever will actually build it.',
    },
    {
      icon: ShieldCheck,
      title: 'ISO 27001 certified',
      description: 'Your inquiry is handled under audited information security controls.',
    },
    {
      icon: Globe2,
      title: '24/7 timezone coverage',
      description: 'Toronto, Lalitpur, Louisville, Brisbane, Dubai — someone is awake.',
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
            What to Expect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
            Four promises{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
              we operate on
            </span>
            .
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PROMISES.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.07,
                  ease: easingCurve.industrial,
                }}
                className="group relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-brand-cyan/30 transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-cyan to-white/80 flex items-center justify-center mb-4 shadow-md shadow-brand-cyan/30">
                  <Icon className="w-5 h-5 text-brand-navy" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={motionConfig.default}
          className="mt-14 lg:mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-white flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-brand-navy" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-cyan mb-1">
                Prefer Email?
              </p>
              <p className="text-base sm:text-lg font-bold text-white leading-tight">
                hello@aayulogic.com
              </p>
            </div>
          </div>
          <a
            href="mailto:hello@aayulogic.com"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-sm font-bold text-brand-navy hover:bg-brand-cyan transition-colors whitespace-nowrap"
          >
            Send a Note
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
