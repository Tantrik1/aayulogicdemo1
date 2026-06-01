'use client';

import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Package,
  Store,
  Truck,
  TrendingUp,
  Tag,
  Gauge,
  ArrowUpRight,
  Sparkles,
  Boxes,
  Wallet,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { IndustryHero } from '@/components/industry-hero';
import { FAQSection } from '@/components/FAQSection';
import { easingCurve } from '@/lib/utils';

const CHALLENGES = [
  {
    icon: Boxes,
    title: 'Inventory Sync Across Every Surface',
    body: 'Web, store POS, marketplaces, drop-ship vendors — one oversell triggers refunds, chargebacks, and reviews you can&apos;t unwrite.',
  },
  {
    icon: Gauge,
    title: 'Black Friday Without Knee Caps',
    body: 'Storefronts that handle 40x normal traffic without falling over. Cache warming, queue shedding, and DB read fanout proven at scale.',
  },
  {
    icon: Truck,
    title: 'Fulfillment Across Modalities',
    body: 'Split shipments, partial fulfillment, BOPIS, ship-from-store, returns to a different node — OMS logic with audit trails.',
  },
  {
    icon: Tag,
    title: 'Personalization That Converts',
    body: 'Recommendations that actually lift AOV — embeddings + behavior signals, not the &ldquo;people also bought&rdquo; widget from 2014.',
  },
];

const CAPABILITIES = [
  {
    title: 'Headless Storefronts',
    description:
      'Composable commerce on Shopify Hydrogen, Magento, BigCommerce, or fully custom. Edge-rendered, SEO-ready, and lighting fast.',
  },
  {
    title: 'Omnichannel Inventory',
    description:
      'Real-time sync across web, store, marketplaces, and drop-ship. Reservation logic, safety stock, and oversell prevention by design.',
  },
  {
    title: 'Order Management',
    description:
      'OMS with split-shipment, partial fulfillment, BOPIS, ship-from-store, and returns routing. Audit trails for every state change.',
  },
  {
    title: 'Loyalty & Rewards',
    description:
      'Programmable tier and points engines, expiry rules, referral programs, and integration to your CRM and POS systems.',
  },
  {
    title: 'Personalization',
    description:
      'Product recs via vector embeddings + behavior signals, segmented merchandising, and on-site search powered by intent models.',
  },
  {
    title: 'Marketplace Onboarding',
    description:
      'Seller-facing dashboards, payouts, KYC, dispute workflows, and rate-limited APIs for third-party catalog ingestion.',
  },
];

const COMPLIANCE = [
  { name: 'PCI-DSS SAQ-A / SAQ-D', body: 'Tokenized payments, scope minimized' },
  { name: 'PSD2 / SCA', body: '3DS2 and Strong Customer Authentication' },
  { name: 'GDPR & CCPA', body: 'Consent-aware analytics and personalization' },
  { name: 'WCAG 2.2 AA', body: 'Accessibility audited per release' },
  { name: 'SOC 2 Type II', body: 'Annual independent controls audit' },
  { name: 'ISO 27001', body: 'Information security — Aayulogic certified' },
];

const CASE_STUDY = {
  client: 'Verdant Logistics',
  metric: '41% OpEx reduction',
  headline: 'Replaced two SaaS vendors with one Aayulogic-built commerce platform.',
  body: 'Verdant was paying two vendors for storefront and OMS — and stitching them with brittle middleware. We replaced the stack with a single composable platform: headless storefront, real-time inventory, marketplace seller portal. OpEx dropped 41%. Roadmap clarity moved from quarters to weeks.',
  tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
  testimonial:
    'We replaced two SaaS vendors with one Aayulogic-built platform and cut OpEx by 41%. Roadmap clarity from week one.',
  author: 'Elena Rossi',
  role: 'COO',
};

const STATS = [
  { value: '100K', label: 'Daily transactions handled' },
  { value: '40x', label: 'Peak-day traffic absorbed' },
  { value: '< 80ms', label: 'Cart API p95 latency' },
  { value: '8', label: 'Retail engagements live' },
];

const WHY_US = [
  'Composable commerce engineers who have shipped at Shopify Plus & Magento scale.',
  'Inventory reservation models that survive Black Friday — measured, not promised.',
  'OMS state machines documented and re-traceable for any order.',
  'Personalization engines you can audit and explain to a CMO.',
  'Marketplace onboarding playbook proven across multi-vendor catalogs.',
  'Edge-rendered storefronts on Cloudflare or Vercel — sub-100ms TTFB.',
  'PCI scope minimized to the smallest possible surface.',
  'Same delivery team from architecture through peak season.',
];

const retailFaqs = [
  {
    q: "What ecommerce engines do you specialize in?",
    a: "We build headless, composable commerce architectures combining fast React/Next.js frontends with Shopify Plus, Magento, BigCommerce, or custom-built carts depending on your transactional scale and catalog complexity.",
  },
  {
    q: "How do you handle rapid scalability during major retail sales?",
    a: "We design auto-scaling container configurations (Kubernetes/ECS), database read-replicas, and distributed Redis caching layers to absorb 40x spikes in traffic and keep checkout latencies under 100ms.",
  },
  {
    q: "How do you secure credit card and transaction data?",
    a: "We minimize PCI scope by implementing tokenized payment collection (via Stripe, Adyen, or Braintree). Customer credit card data never touches our application servers, maintaining complete PCI-DSS compliance by design.",
  },
  {
    q: "How do you ensure inventory remains synced across multiple sales channels?",
    a: "We build robust real-time inventory reconciliation engines with safety-stock threshold alerts, preventing oversells and syncing product availability across physical stores, web, marketplaces, and drop-ship partners.",
  },
];

// Conversion funnel visualization
function ConversionFunnel() {
  const stages = [
    { label: 'Visitors', value: 100, color: '#34D399' },
    { label: 'Sessions', value: 72, color: '#10B981' },
    { label: 'Carts', value: 28, color: '#059669' },
    { label: 'Checkout', value: 18, color: '#047857' },
    { label: 'Purchase', value: 12, color: '#065F46' },
  ];

  return (
    <div className="flex flex-col gap-2" aria-hidden>
      {stages.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12, ease: easingCurve.industrial }}
          className="origin-left flex items-center gap-3"
        >
          <div className="w-20 text-[10px] font-semibold text-slate-600 uppercase tracking-wider">
            {s.label}
          </div>
          <div className="flex-1 h-6 rounded-md bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-md flex items-center justify-end pr-2 text-[10px] font-bold text-white tabular-nums"
              style={{ width: `${s.value}%`, background: s.color }}
            >
              {s.value}%
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function RetailClient() {
  return (
    <>
      <Header />

      <IndustryHero
        breadcrumbName="Retail & Digital Commerce"
        industry="Retail & Digital Commerce"
        icon={ShoppingCart}
        title={
          <>
            Commerce that holds up{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-clip-text text-transparent">
              on the worst day of the year.
            </span>
          </>
        }
        subtitle="Headless storefronts, real-time inventory, OMS with audit trails. We engineer commerce platforms that survive Black Friday — and convert better the other 364 days too."
        primary={{ label: 'Scope a Commerce Build', href: '#contact' }}
        secondary={{ label: 'Read the case study', href: '#case-study' }}
        stats={STATS}
      />

      {/* Hero — bright commerce emerald + slate (LEGACY — hidden) */}
      <section className="hidden relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.25) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute top-1/2 -left-40 w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)' }}
        />
        {/* Dotted grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(5,150,105,0.7) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-6 shadow-sm"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-800">
                Retail & Digital Commerce
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance text-brand-navy"
            >
              Commerce that holds up{' '}
              <span
                className="inline-block"
                style={{
                  backgroundImage: 'linear-gradient(120deg, #047857 0%, #059669 40%, #0891B2 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                on the worst day of the year.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Headless storefronts, real-time inventory, OMS with audit
              trails. We engineer commerce platforms that survive Black
              Friday — and convert better the other 364 days too.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 transition-all"
              >
                <span>Scope a Commerce Build</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#case-study"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-emerald-200 bg-white text-emerald-800 hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
              >
                Read the Verdant Case Study
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Commerce dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white border border-emerald-200 shadow-[0_30px_60px_-25px_rgba(5,150,105,0.25)] p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700">LIVE · Conversion Funnel</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Today</span>
              </div>

              <ConversionFunnel />

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-md bg-emerald-50 p-2 border border-emerald-100">
                  <div className="text-[9px] font-semibold text-emerald-700 uppercase tracking-wider">GMV</div>
                  <div className="text-sm font-bold text-emerald-900 tabular-nums">$184K</div>
                </div>
                <div className="rounded-md bg-cyan-50 p-2 border border-cyan-100">
                  <div className="text-[9px] font-semibold text-cyan-700 uppercase tracking-wider">AOV</div>
                  <div className="text-sm font-bold text-cyan-900 tabular-nums">$87</div>
                </div>
                <div className="rounded-md bg-slate-50 p-2 border border-slate-100">
                  <div className="text-[9px] font-semibold text-slate-600 uppercase tracking-wider">CR</div>
                  <div className="text-sm font-bold text-slate-900 tabular-nums">3.2%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
          className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-emerald-200/50 pt-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-emerald-400/60 pl-4">
              <div className="text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">{s.value}</div>
              <div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-3">
              What Keeps Heads of Digital Commerce Up At Night
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
                  className="group flex gap-5 p-7 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-[0_20px_45px_-15px_rgba(5,150,105,0.2)] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all">
                    <Icon className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-emerald-700 transition-colors">
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
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-3">
              Our Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Six commerce-grade practices, ready to embed.
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
                className="group p-6 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div
                  className="text-3xl font-bold mb-3"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #047857 0%, #0891B2 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-emerald-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-3">
              Payments & Privacy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              PCI scope minimized. Consent treated as code.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              We tokenize early, minimize PCI scope, and treat consent flows
              as part of the platform — not bolted on at launch. SCA, PSD2,
              and accessibility are first-class concerns.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                <Wallet className="w-6 h-6 text-emerald-700 mb-2" />
                <div className="text-xs font-bold text-emerald-900">Tokenized payments</div>
                <div className="text-[10px] text-emerald-700/70 mt-0.5">PCI SAQ-A by default</div>
              </div>
              <div className="rounded-xl border border-cyan-100 bg-cyan-50/50 p-4">
                <Store className="w-6 h-6 text-cyan-700 mb-2" />
                <div className="text-xs font-bold text-cyan-900">SCA / 3DS2</div>
                <div className="text-[10px] text-cyan-700/70 mt-0.5">PSD2 ready</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {COMPLIANCE.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50/40 border border-emerald-100"
                >
                  <Package className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
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
        style={{ background: 'linear-gradient(135deg, #042F2E 0%, #064E3B 50%, #0E7490 100%)' }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.45) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-3">
                Case Study · {CASE_STUDY.client}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {CASE_STUDY.headline}
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <Sparkles className="w-5 h-5 text-emerald-300" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">Outcome</div>
                  <div className="text-xl font-bold text-white">{CASE_STUDY.metric}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-emerald-50/85 leading-relaxed">{CASE_STUDY.body}</p>

              <div className="flex flex-wrap gap-2">
                {CASE_STUDY.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-emerald-100"
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                    ER
                  </div>
                  <div>
                    <div className="text-sm font-bold">{CASE_STUDY.author}</div>
                    <div className="text-xs text-emerald-200/80">
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
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-3">
              Why Retail Picks Aayulogic
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Composable commerce muscle without the integrator markup.
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_US.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50/40 border border-emerald-100"
              >
                <TrendingUp className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-navy leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection items={retailFaqs} />

      <CTABand
        eyebrow="Scope a Commerce Engagement"
        title="Send the merchant brief. We'll respond with a platform sketch."
        body="Retail teams don&apos;t have time for vendor questionnaires. Share your roadmap, traffic projections, and channel mix — we&apos;ll come back with an architecture and engagement model within two business days."
        primaryLabel="Send Brief"
        secondaryLabel="Read Case Studies"
      />
      <Footer />
    </>
  );
}
