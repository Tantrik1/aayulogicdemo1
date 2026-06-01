'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Clapperboard,
  Video,
  Layers,
  Image as ImageIcon,
  Radio,
  Newspaper,
  Wand2,
  ArrowUpRight,
  Sparkles,
  Tv,
  Megaphone,
  Cast,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { IndustryHero } from '@/components/industry-hero';
import { easingCurve } from '@/lib/utils';

const CHALLENGES = [
  {
    icon: Cast,
    title: 'Low-Latency Live Delivery',
    body: 'Sub-2-second glass-to-glass for sports & news. HLS/DASH with LL-CMAF, edge transcoding, and per-region CDN steering.',
  },
  {
    icon: ImageIcon,
    title: 'Asset Sprawl at Scale',
    body: 'Three million stills, half a million clips, no consistent metadata. We bring CV-driven auto-tagging and IPTC discipline.',
  },
  {
    icon: Newspaper,
    title: 'Print Composition Pipelines',
    body: 'Adobe InDesign Server orchestration, dynamic templates, and per-edition variant runs that ship on the press deadline.',
  },
  {
    icon: Megaphone,
    title: 'Monetization Without Friction',
    body: 'Metered paywalls, subscription bundling, ad inventory routing — without breaking the SEO surface or the reader experience.',
  },
];

const CAPABILITIES = [
  {
    title: 'Real-Time Streaming',
    description:
      'Low-latency HLS/DASH delivery, LL-CMAF, ABR ladders, per-region steering, and live captioning pipelines.',
  },
  {
    title: 'DAM & Asset Pipelines',
    description:
      'Computer Vision auto-tagging, IPTC/XMP enforcement, version trees, and rights-management workflows.',
  },
  {
    title: 'Automated Print Composition',
    description:
      'Adobe InDesign Server at scale, dynamic templates, edition variant runs, and pre-press output verification.',
  },
  {
    title: 'Web-to-Print Platforms',
    description:
      'Self-service print storefronts with variable-data engines, online proofing, and direct-to-press handoffs.',
  },
  {
    title: 'Subscription & Paywalls',
    description:
      'Metered access, bundling, gift subscriptions, and consent-aware analytics that survive iOS privacy changes.',
  },
  {
    title: 'Ad Inventory Routing',
    description:
      'Header-bidding integrations, programmatic guaranteed deals, and brand-safety guardrails wired into the SSP/DSP stack.',
  },
];

const COMPLIANCE = [
  { name: 'DRM (Widevine / FairPlay / PlayReady)', body: 'Multi-DRM for premium content' },
  { name: 'CEA-608 / 708 & WebVTT', body: 'Accessibility captioning across delivery' },
  { name: 'WCAG 2.2 AA', body: 'Audited per release for reader experiences' },
  { name: 'GDPR & CCPA', body: 'Consent-aware paywalls and ad routing' },
  { name: 'C2PA Provenance', body: 'Content credentials for editorial trust' },
  { name: 'ISO 27001', body: 'Information security — Aayulogic certified' },
];

const CASE_STUDY = {
  client: 'Cobalt Industries',
  metric: '40% less manual work',
  headline: 'A Computer Vision DAM that cut manual asset tagging from 6 FTEs to 0.6.',
  body: 'We shipped a CV pipeline that auto-tagged 1.4M assets across 12 brands. Editorial teams went from spending 6 FTE-quarters per year tagging to spending under one — and search recall on stock photography went from 64% to 93%.',
  tags: ['Python', 'CV', 'S3', 'React', 'OpenSearch'],
  testimonial:
    "The Computer Vision pipeline they shipped cut manual QC work by 73%. Their ML engineers think in production, not papers.",
  author: 'Mateo Álvarez',
  role: 'Head of Operations',
};

const STATS = [
  { value: '< 2s', label: 'Glass-to-glass live latency' },
  { value: '1.4M', label: 'Assets auto-tagged / year' },
  { value: '12', label: 'Publisher brands served' },
  { value: '93%', label: 'Search recall on stock' },
];

const WHY_US = [
  'Adobe InDesign Server expertise that survives 2am press deadlines.',
  'Live streaming engineers who run their own broadcast rigs.',
  'CV models trained on editorial taxonomies — not COCO labels.',
  'Multi-DRM packaging pipelines for Widevine, FairPlay, PlayReady.',
  'C2PA content credentials integrated into editorial workflow.',
  'Paywall expertise that doesn&apos;t torch SEO surface.',
  'Header-bidding and brand-safety wired in from day one.',
  'Editorial CMS UX designed for journalists, not engineers.',
];

// Animated waveform for hero
function Waveform() {
  const bars = Array.from({ length: 48 });
  return (
    <div className="flex items-end gap-[3px] h-20 sm:h-24" aria-hidden>
      {bars.map((_, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-full"
          style={{
            background: `linear-gradient(180deg, #F472B6 0%, #FB7185 50%, #FBBF24 100%)`,
          }}
          initial={{ height: '20%' }}
          animate={{
            height: [
              `${20 + ((i * 7) % 60)}%`,
              `${30 + ((i * 11) % 60)}%`,
              `${15 + ((i * 5) % 60)}%`,
            ],
          }}
          transition={{
            duration: 1.4 + (i % 5) * 0.1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.02,
          }}
        />
      ))}
    </div>
  );
}

export function MediaClient() {
  return (
    <>
      <Header />

      <IndustryHero
        breadcrumbName="Media & Entertainment"
        industry="Media & Entertainment"
        icon={Clapperboard}
        title={
          <>
            Built for the{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-clip-text text-transparent">
              press deadline &amp; the live whistle.
            </span>
          </>
        }
        subtitle="Low-latency streaming, CV-powered DAM, automated print composition, and paywalls that don't crater SEO. We engineer for the moment newsrooms have, not the moment they wish they had."
        primary={{ label: 'Scope a Media Build', href: '#contact' }}
        secondary={{ label: 'Read the Cobalt Case Study', href: '#case-study' }}
        stats={STATS}
      />

      {/* Hero — cinematic black + magenta (LEGACY — hidden) */}
      <section className="hidden relative overflow-hidden bg-[#0A0612] text-white pt-24 pb-24 sm:pt-28 sm:pb-32">
        {/* Vibrant accent radials */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[620px] h-[620px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.45) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute top-1/3 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.4) 0%, transparent 70%)' }}
        />

        {/* Film grain */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 0.6px, transparent 0)',
            backgroundSize: '4px 4px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-pink-300/30 mb-6"
            >
              <Clapperboard className="w-3.5 h-3.5 text-pink-300" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-pink-200">
                Media & Entertainment
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance"
            >
              Built for the{' '}
              <span
                className="inline-block"
                style={{
                  backgroundImage: 'linear-gradient(120deg, #F472B6 0%, #FBBF24 50%, #C084FC 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                press deadline & the live whistle.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className="mt-7 text-lg sm:text-xl text-pink-100/75 leading-relaxed max-w-2xl"
            >
              Low-latency streaming, CV-powered DAM, automated print
              composition, and paywalls that don&apos;t crater SEO. We engineer for
              the moment newsrooms have, not the moment they wish they had.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-[#0A0612] overflow-hidden shadow-2xl bg-gradient-to-r from-pink-400 via-fuchsia-400 to-amber-300 hover:from-pink-300 hover:to-amber-200 transition-all"
              >
                <span>Scope a Media Build</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#case-study"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-pink-300/40 text-white hover:border-pink-200 hover:bg-white/5 transition-colors"
              >
                Read the Cobalt Case Study
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Cinematic player mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-pink-300/20 bg-gradient-to-br from-[#1A0F2C] to-[#0A0612] p-5 shadow-[0_30px_80px_-20px_rgba(244,114,182,0.4)]">
              {/* Player chrome */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-pink-200">Live · 4K HDR</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-pink-200/50">LL-CMAF</span>
              </div>

              {/* "Video" surface with waveform */}
              <div className="rounded-lg bg-gradient-to-br from-fuchsia-900/40 via-pink-900/30 to-amber-900/20 p-5 border border-pink-300/10">
                <Waveform />

                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-wider text-pink-200/80">
                  <span>Bitrate · 22 Mbps</span>
                  <span className="text-pink-300 font-bold">Latency · 1.6s</span>
                  <span>Viewers · 184K</span>
                </div>
              </div>

              {/* Asset row */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {['#sports', '#breaking', '#brandsafe'].map((tag) => (
                  <div key={tag} className="rounded-md bg-white/5 border border-pink-300/15 p-2 text-center">
                    <div className="text-[10px] font-bold text-pink-200">{tag}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-[10px] text-pink-200/60 flex items-center gap-2">
                <Tv className="w-3 h-3" />
                C2PA verified · Auto-tagged via CV
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
          className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-pink-300/20 pt-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-pink-400/60 pl-4">
              <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{s.value}</div>
              <div className="text-xs font-medium text-pink-200/60 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-pink-700 mb-3">
              What Keeps Heads of Digital Up At Night
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              The four hard problems we solve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CHALLENGES.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.07, ease: easingCurve.industrial }}
                  className="group flex gap-5 p-7 rounded-xl bg-white border border-pink-100 hover:border-pink-300 hover:shadow-[0_20px_45px_-15px_rgba(244,114,182,0.25)] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-amber-400 transition-all">
                    <Icon className="w-6 h-6 text-pink-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-pink-700 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-pink-700 mb-3">
              Our Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Six broadcast-grade practices, ready to ship.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: easingCurve.industrial }}
                className="group p-6 rounded-xl bg-white border border-pink-100 hover:border-pink-300 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div
                  className="text-3xl font-bold mb-3"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #DB2777 0%, #F59E0B 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-pink-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-pink-700 mb-3">
              Standards & Trust
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Trust the rights chain. Trust the credentials.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Rights protection across DRMs, accessibility captions, consent
              and content credentials — engineered in from the codec layer up,
              not bolted on at distribution.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-pink-100 bg-pink-50/50 p-4">
                <Radio className="w-6 h-6 text-pink-700 mb-2" />
                <div className="text-xs font-bold text-pink-900">Multi-DRM</div>
                <div className="text-[10px] text-pink-700/70 mt-0.5">Widevine, FairPlay, PlayReady</div>
              </div>
              <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                <Wand2 className="w-6 h-6 text-amber-700 mb-2" />
                <div className="text-xs font-bold text-amber-900">C2PA Provenance</div>
                <div className="text-[10px] text-amber-700/70 mt-0.5">Editorial trust signals</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {COMPLIANCE.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 p-4 rounded-lg bg-pink-50/40 border border-pink-100"
                >
                  <Layers className="w-5 h-5 text-pink-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-brand-navy">{c.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{c.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section
        id="case-study"
        className="relative py-20 sm:py-28 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A0612 0%, #4A044E 60%, #B45309 100%)' }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.45) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-pink-300 mb-3">
                Case Study · {CASE_STUDY.client}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {CASE_STUDY.headline}
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <Sparkles className="w-5 h-5 text-pink-300" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-300">Outcome</div>
                  <div className="text-xl font-bold text-white">{CASE_STUDY.metric}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-pink-50/85 leading-relaxed">{CASE_STUDY.body}</p>

              <div className="flex flex-wrap gap-2">
                {CASE_STUDY.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-pink-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <blockquote className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <p className="text-sm sm:text-base text-white leading-relaxed mb-4 italic">
                  &ldquo;{CASE_STUDY.testimonial}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-amber-400 flex items-center justify-center text-white text-xs font-bold">
                    MA
                  </div>
                  <div>
                    <div className="text-sm font-bold">{CASE_STUDY.author}</div>
                    <div className="text-xs text-pink-200/70">
                      {CASE_STUDY.role}, {CASE_STUDY.client}
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-pink-700 mb-3">
              Why Media Picks Aayulogic
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Newsroom-tested. Broadcast-grade. Engineered for tomorrow&apos;s edition.
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_US.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-lg bg-pink-50/40 border border-pink-100"
              >
                <Video className="w-5 h-5 text-pink-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-navy leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        eyebrow="Scope a Media Engagement"
        title="Send the editorial brief. We'll respond with a delivery sketch."
        body="Media teams don&apos;t have time for vendor questionnaires. Share your roadmap — we&apos;ll come back with an architecture and engagement model within two business days."
        primaryLabel="Send Brief"
        secondaryLabel="Read Case Studies"
      />
      <Footer />
    </>
  );
}
