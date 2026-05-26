'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Briefcase,
  Users,
  ShieldCheck,
  Handshake,
  Plus,
  Minus,
  Search,
  MessageCircle,
  Mail,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/section/PageHero';
import { CTABand } from '@/components/section/CTABand';
import { FAQ_CATEGORIES } from '@/lib/constants';
import { easingCurve, motionConfig } from '@/lib/utils';

const CAT_ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  Briefcase,
  Users,
  ShieldCheck,
  HandshakeIcon: Handshake,
};

export default function FaqPage() {
  const [activeCat, setActiveCat] = useState<string>(FAQ_CATEGORIES[0].key);
  const [query, setQuery] = useState('');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const activeCategory =
    FAQ_CATEGORIES.find((c) => c.key === activeCat) ?? FAQ_CATEGORIES[0];

  const filteredItems = normalizedQuery
    ? FAQ_CATEGORIES.flatMap((c) =>
        c.items
          .filter(
            (i) =>
              i.q.toLowerCase().includes(normalizedQuery) ||
              i.a.toLowerCase().includes(normalizedQuery)
          )
          .map((i) => ({ ...i, catLabel: c.label, catKey: c.key }))
      )
    : activeCategory.items.map((i) => ({
        ...i,
        catLabel: activeCategory.label,
        catKey: activeCategory.key,
      }));

  const totalQuestions = FAQ_CATEGORIES.reduce(
    (acc, c) => acc + c.items.length,
    0
  );

  return (
    <>
      <Header />

      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Quick answers about Aayulogic — what we do, how we work, how we hire, and how we partner. Search or browse by category below."
        stats={[
          { value: `${totalQuestions}`, label: 'Questions' },
          { value: `${FAQ_CATEGORIES.length}`, label: 'Categories' },
          { value: '<24h', label: 'Direct Reply' },
        ]}
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'About Aayulogic', href: '/about' }}
      />

      {/* ============ SEARCH + CATEGORIES + ACCORDION ============ */}
      <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(40% 30% at 10% 10%, rgba(0,194,255,0.05) 0%, transparent 70%), radial-gradient(40% 30% at 95% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={motionConfig.default}
            className="max-w-2xl mx-auto mb-10 lg:mb-12"
          >
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpenItem(null);
                }}
                placeholder="Search questions — try 'remote', 'security', or 'hiring'..."
                className="w-full pl-14 pr-5 py-4 sm:py-5 rounded-2xl border border-slate-200 bg-white text-base text-brand-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-brand-blue transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-10">
            {/* Sidebar — categories */}
            {!normalizedQuery && (
              <motion.aside
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={motionConfig.default}
                className="lg:sticky lg:top-24 lg:self-start"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
                  Browse by Category
                </p>
                <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {FAQ_CATEGORIES.map((cat) => {
                    const Icon = CAT_ICON_MAP[cat.iconKey] ?? Building2;
                    const isActive = activeCat === cat.key;
                    return (
                      <button
                        key={cat.key}
                        onClick={() => {
                          setActiveCat(cat.key);
                          setOpenItem(null);
                        }}
                        className={`group flex-shrink-0 lg:flex-shrink lg:w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                          isActive
                            ? 'bg-brand-navy text-white shadow-lg shadow-brand-navy/20'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-brand-blue/40 hover:text-brand-blue'
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                            isActive
                              ? 'bg-white/15'
                              : 'bg-brand-blue/10 text-brand-blue'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold leading-tight">
                            {cat.label}
                          </p>
                          <p
                            className={`text-[11px] mt-0.5 ${
                              isActive ? 'text-slate-300' : 'text-slate-500'
                            }`}
                          >
                            {cat.items.length} questions
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.aside>
            )}

            {/* Accordion */}
            <div className={normalizedQuery ? 'lg:col-span-2' : ''}>
              {!normalizedQuery && (
                <motion.div
                  key={activeCategory.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: easingCurve.industrial }}
                  className="mb-6"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-2">
                    {activeCategory.label}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600">
                    {activeCategory.blurb}
                  </p>
                </motion.div>
              )}

              {normalizedQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <p className="text-sm font-bold text-brand-blue uppercase tracking-[0.18em] mb-2">
                    Search Results
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy leading-tight">
                    {filteredItems.length}{' '}
                    {filteredItems.length === 1 ? 'result' : 'results'} for &ldquo;
                    {query}&rdquo;
                  </h2>
                </motion.div>
              )}

              <div className="space-y-3">
                {filteredItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-10 rounded-2xl border border-slate-200 bg-white text-center"
                  >
                    <MessageCircle className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                    <p className="text-base font-bold text-brand-navy mb-2">
                      No matching questions found
                    </p>
                    <p className="text-sm text-slate-600 mb-5">
                      Send us a direct note — we&apos;ll reply within one business day.
                    </p>
                    <a
                      href="mailto:hello@aayulogic.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-sm font-bold hover:bg-brand-blue transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      hello@aayulogic.com
                    </a>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, idx) => {
                      const itemId = `${item.catKey}-${idx}`;
                      const isOpen = openItem === itemId;
                      return (
                        <motion.div
                          key={itemId}
                          layout
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -16 }}
                          transition={{
                            duration: 0.4,
                            delay: idx * 0.03,
                            ease: easingCurve.industrial,
                          }}
                          className={`group relative rounded-2xl border bg-white overflow-hidden transition-all ${
                            isOpen
                              ? 'border-brand-blue/40 shadow-[0_20px_50px_-15px_rgba(4,92,179,0.22)]'
                              : 'border-slate-200 hover:border-brand-blue/30'
                          }`}
                        >
                          <button
                            onClick={() =>
                              setOpenItem(isOpen ? null : itemId)
                            }
                            className="w-full flex items-center gap-4 sm:gap-6 p-5 sm:p-6 text-left"
                          >
                            <div className="flex-1 min-w-0">
                              {normalizedQuery && (
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-1.5 inline-block">
                                  {item.catLabel}
                                </span>
                              )}
                              <p className="text-base sm:text-lg font-bold text-brand-navy leading-snug pr-2">
                                {item.q}
                              </p>
                            </div>
                            <span
                              className={`flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                                isOpen
                                  ? 'bg-brand-blue text-white rotate-180'
                                  : 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'
                              }`}
                            >
                              {isOpen ? (
                                <Minus className="w-4 h-4" />
                              ) : (
                                <Plus className="w-4 h-4" />
                              )}
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.35,
                                  ease: easingCurve.industrial,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 sm:px-6 pb-6 pt-0">
                                  <div className="border-t border-slate-100 pt-5">
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                      {item.a}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STILL HAVE QUESTIONS BAND ============ */}
      <StillHaveQuestionsSection />

      <CTABand
        eyebrow="Talk to a Human"
        title="Can't find what you need?"
        body="Reach out directly — every note is read by a real engineer or operator, not a bot. We typically reply within one business day."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Browse Careers"
        secondaryHref="/careers"
      />

      <Footer />
    </>
  );
}

// =============================================================================
//  STILL HAVE QUESTIONS — direct contact strip
// =============================================================================

function StillHaveQuestionsSection() {
  const ROUTES = [
    {
      title: 'Sales & Partnerships',
      email: 'sales@aayulogic.com',
      blurb: 'Engagements, RFPs, and partnership discussions.',
      iconKey: 'Handshake',
    },
    {
      title: 'Careers & Hiring',
      email: 'careers@aayulogic.com',
      blurb: 'Open roles, referrals, and recruitment questions.',
      iconKey: 'Users',
    },
    {
      title: 'General Enquiry',
      email: 'hello@aayulogic.com',
      blurb: 'Anything else — we route it to the right person.',
      iconKey: 'MessageCircle',
    },
  ];

  const ICONS: Record<string, LucideIcon> = {
    Handshake,
    Users,
    MessageCircle,
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-12"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Direct Lines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Skip the form —{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              email the right team
            </span>
            .
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ROUTES.map((r, idx) => {
            const Icon = ICONS[r.iconKey] ?? MessageCircle;
            return (
              <motion.a
                key={r.email}
                href={`mailto:${r.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: easingCurve.industrial,
                }}
                whileHover={{ y: -3 }}
                className="group relative p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/60 hover:border-brand-blue/40 hover:shadow-[0_18px_40px_-15px_rgba(4,92,179,0.18)] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-md shadow-brand-blue/15">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue group-hover:-translate-y-px group-hover:translate-x-px transition-all" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-1.5 leading-tight">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {r.blurb}
                </p>
                <p className="text-sm font-bold text-brand-blue group-hover:underline">
                  {r.email}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
