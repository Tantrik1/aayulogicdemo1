'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronRight,
  X,
  Sparkles,
  Code2,
  Plug,
  Cloud,
  ShoppingBag,
  Cpu,
  Building2,
  ArrowUpRight,
  Mail,
  CalendarCheck,
  ShieldCheck,
  Globe2,
  type LucideIcon,
} from 'lucide-react';
import {
  SERVICE_CATEGORIES,
  PRODUCTS,
  INDUSTRIES_NEW,
  TALENT_MODELS,
  COMPANY_LINKS,
} from '@/lib/constants';
import { easingCurve } from '@/lib/utils';

const TOP_NAV = [
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'products', label: 'Products', href: '/products' },
  { key: 'industries', label: 'Industries', href: '/industries' },
  { key: 'talent', label: 'Talent & Engagement', href: '/talent' },
  { key: 'company', label: 'Company', href: '/about' },
] as const;

type NavKey = (typeof TOP_NAV)[number]['key'];

const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  Code2,
  Plug,
  Cloud,
  ShoppingBag,
  Cpu,
  Building2,
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<NavKey | null>(null);
  const [activeServiceTab, setActiveServiceTab] = useState<string>(
    SERVICE_CATEGORIES[0].key,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const openMenu = (key: NavKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Lock body scroll when mobile open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Detect when the sticky header overlaps a [data-theme="dark"] section.
  // Used to flip nav text/logo to white over the dark ProductsShowcase panels.
  useEffect(() => {
    let frame = 0;

    const check = () => {
      frame = 0;
      const headerEl = headerRef.current;
      if (!headerEl) return;
      const headerBottom = headerEl.getBoundingClientRect().bottom;
      const darks = document.querySelectorAll<HTMLElement>('[data-theme="dark"]');
      let overDark = false;
      for (const el of Array.from(darks)) {
        const r = el.getBoundingClientRect();
        if (r.top < headerBottom && r.bottom > 0) {
          overDark = true;
          break;
        }
      }
      setIsOverDark(overDark);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(check);
    };

    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Glass-themed header with frosted glass effect — switches to solid white when mega menu is open,
          and to a translucent dark glass when overlapping a dark section (e.g., ProductsShowcase). */}
      <div
        className={`relative border-b shadow-lg transition-colors duration-300 ${
          activeMenu
            ? 'bg-white border-brand-blue/15'
            : isOverDark
              ? 'bg-brand-navy/40 backdrop-blur-2xl border-white/10'
              : '/10 backdrop-blur-2xl border-white/20'
        }`}
      >
        {/* Top luminous line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Bottom subtle glow */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group" aria-label="Aayulogic — Home">
              <Image
                src="/logo.png"
                alt="Aayulogic"
                width={1623}
                height={429}
                priority
                className={`h-10 sm:h-11 lg:h-12 w-auto group-hover:opacity-90 transition-[filter,opacity] duration-300 ${
                  isOverDark && !activeMenu ? 'brightness-0 invert' : ''
                }`}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" onMouseLeave={scheduleClose}>
              {TOP_NAV.map((item) => (
                <button
                  key={item.key}
                  onMouseEnter={() => openMenu(item.key)}
                  onClick={() =>
                    setActiveMenu(activeMenu === item.key ? null : item.key)
                  }
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeMenu === item.key
                      ? 'text-brand-blue bg-brand-blue/5'
                      : isOverDark
                        ? 'text-white hover:text-brand-cyan hover:bg-white/10'
                        : 'text-brand-navy hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeMenu === item.key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* Desktop CTA — Same as Hero Button */}
            <div className="hidden lg:flex items-center">
              <motion.a
                href="/contact"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3, ease: easingCurve.industrial }}
                className="group relative px-8 py-3.5 text-sm font-bold rounded-xl overflow-hidden shadow-lg"
              >
                {/* Premium glassmorphic gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
                <div className="absolute inset-0 /15 backdrop-blur-2xl rounded-xl" />

                {/* Border glow */}
                <div className="absolute inset-0 rounded-xl border border-white/50 group-hover:border-white transition-colors" />

                {/* Hover glow effect */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue opacity-0 group-hover:opacity-30 blur-lg transition-opacity" />

                <span className="relative flex items-center gap-2 text-white group-hover:text-white/95 transition-colors">
                  Start Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </motion.a>
            </div>

            {/* Mobile Hamburger — animated three-line, brand-tinted */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden group relative w-11 h-11 -mr-1 rounded-xl flex items-center justify-center transition-all ${
                isOverDark
                  ? 'text-white hover:bg-white/10'
                  : 'text-brand-navy hover:bg-slate-100'
              }`}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              {/* Subtle ring on hover */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-xl border border-transparent group-hover:border-brand-blue/30 transition-colors"
              />
              <span className="relative flex flex-col items-end gap-[5px]">
                <span className="block h-[2px] w-6 rounded-full bg-current transition-all duration-300 group-hover:w-5" />
                <span className="block h-[2px] w-4 rounded-full bg-current transition-all duration-300 group-hover:w-6" />
                <span className="block h-[2px] w-5 rounded-full bg-current transition-all duration-300 group-hover:w-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Mega Panel — Premium Luminous */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: easingCurve.industrial }}
              onMouseEnter={() => openMenu(activeMenu)}
              onMouseLeave={scheduleClose}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white/94 backdrop-blur-xl border-b border-brand-blue/15 shadow-[0_25px_60px_-12px_rgba(4,92,179,0.28)] overflow-hidden"
            >
              {/* Top accent glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
              <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
                {/* Subtle accent gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  {activeMenu === 'services' && (
                    <ServicesPanel
                      activeTab={activeServiceTab}
                      onTabChange={setActiveServiceTab}
                    />
                  )}
                  {activeMenu === 'products' && <ProductsPanel />}
                  {activeMenu === 'industries' && <IndustriesPanel />}
                  {activeMenu === 'talent' && <TalentPanel />}
                  {activeMenu === 'company' && <CompanyPanel />}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileDrawer onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}

// =============================================================================
//  Services Panel (Vertical Tabs)
// =============================================================================

function ServicesPanel({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (key: string) => void;
}) {
  const active = SERVICE_CATEGORIES.find((c) => c.key === activeTab) ?? SERVICE_CATEGORIES[0];
  const ActiveIcon = SERVICE_ICON_MAP[active.iconKey] ?? Sparkles;

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Left Vertical Tabs */}
      <div className="col-span-3 border-r border-slate-200 pr-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-4">
          Capabilities
        </p>
        <div className="space-y-1">
          {SERVICE_CATEGORIES.map((cat) => {
            const Icon = SERVICE_ICON_MAP[cat.iconKey] ?? Sparkles;
            const isActive = cat.key === active.key;
            return (
              <button
                key={cat.key}
                onMouseEnter={() => onTabChange(cat.key)}
                onClick={() => onTabChange(cat.key)}
                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all ${
                  isActive
                    ? 'bg-brand-blue/8 text-brand-blue font-semibold'
                    : 'text-brand-navy hover:bg-slate-50 hover:text-brand-blue'
                }`}
              >
                <Icon
                  className={`w-4 h-4 flex-shrink-0 ${
                    isActive ? 'text-brand-blue' : 'text-slate-400'
                  }`}
                />
                <span className="flex-1 leading-tight">{cat.title}</span>
                {isActive && <ChevronRight className="w-4 h-4 text-brand-blue" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Dynamic Content */}
      <div className="col-span-9">
        <motion.div
          key={active.key}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: easingCurve.industrial }}
        >
          {/* Overview header */}
          <div className="flex items-start gap-4 pb-5 mb-6 border-b border-slate-200">
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-brand-blue to-brand-system-blue flex items-center justify-center flex-shrink-0">
              <ActiveIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-brand-navy mb-1">{active.title}</h3>
              <p className="text-sm text-slate-600">{active.tagline}</p>
            </div>
            <a
              href={`/services/${active.key}`}
              className="hidden sm:flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-navy"
            >
              Overview <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Service items grid */}
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
            {active.items.map((item) => (
              <a
                key={item.title}
                href={`/services/${active.key}/${item.slug}`}
                className="group relative p-4 rounded-lg border border-brand-blue/10 hover:border-brand-cyan/40 bg-white/50 hover:bg-white/70 backdrop-blur transition-all overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-brand-blue/5 via-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h4>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// =============================================================================
//  Products Panel
// =============================================================================

function ProductsPanel() {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-5">
        Our Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PRODUCTS.map((product) => (
          <a
            key={product.title}
            href={`/products/${product.slug}`}
            className="group relative flex flex-col p-6 rounded-xl overflow-hidden /70 border border-brand-blue/15 hover:border-brand-cyan/50 backdrop-blur hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.3)] transition-all duration-300"
          >
            {/* Top luminous line */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(0,194,255,0.5), transparent)',
              }}
            />
            {/* Corner accent glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)',
              }}
            />

            {/* Logo */}
            <div className="relative h-10 mb-4 flex items-start">
              <Image
                src={product.logo}
                alt={product.title}
                width={1024}
                height={230}
                className="h-10 w-auto object-contain object-left"
              />
            </div>

            {/* Tagline */}
            <p className="relative text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-2">
              {product.tagline}
            </p>

            {/* Description */}
            <p className="relative text-xs text-slate-600 leading-relaxed mb-5 flex-1">
              {product.description}
            </p>

            {/* Footer */}
            <div className="relative pt-3 border-t border-slate-100 group-hover:border-brand-blue/20 transition-colors">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue group-hover:gap-1.5 transition-all">
                Learn More
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
//  Industries Panel
// =============================================================================

function IndustriesPanel() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-5">
          Verticals We Serve
        </p>
        <div className="grid grid-cols-2 gap-3">
          {INDUSTRIES_NEW.map((ind) => (
            <a
              key={ind.title}
              href={`/industries/${ind.slug}`}
              className="group p-4 rounded-md border border-transparent hover:border-brand-blue/20 hover:bg-slate-50/80 transition-all"
            >
              <h4 className="text-sm font-semibold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors flex items-center justify-between gap-2">
                {ind.title}
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">{ind.description}</p>
            </a>
          ))}
        </div>
        {/* Bottom stat row */}
        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap gap-x-6 gap-y-2 text-xs">
          <span><span className="font-bold text-brand-blue">7</span> Verticals</span>
          <span><span className="font-bold text-brand-blue">200+</span> Engagements</span>
          <span><span className="font-bold text-brand-blue">99.4%</span> SLA Stability</span>
        </div>
      </div>

      <SpotlightPanel
        heading="Tailor-made solutions"
        body="Calibrated to your target vertical constraints. We match dedicated engineering muscle to sector-specific compliance rules."
        cta="See All Industry Roadmaps"
        href="/industries"
      />
    </div>
  );
}

// =============================================================================
//  Talent Panel
// =============================================================================

function TalentPanel() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-5">
          Engagement Models
        </p>
        <div className="grid grid-cols-2 gap-3">
          {TALENT_MODELS.map((t) => (
            <a
              key={t.title}
              href={`/talent/${t.slug}`}
              className="group p-4 rounded-md border border-transparent hover:border-brand-blue/20 hover:bg-slate-50/80 transition-all"
            >
              <h4 className="text-sm font-semibold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                {t.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">{t.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Light spotlight variant for Talent */}
      <div className="col-span-4 p-7 rounded-md border border-brand-blue/10">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
          Rapid Resource Deployment
        </p>
        <p className="text-sm text-brand-navy leading-relaxed mb-4">
          Scale up system capabilities with <span className="font-bold">pre-vetted senior engineering talent deployed within 7 business days.</span>
        </p>
        <a
          href="/talent"
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-navy transition-colors"
        >
          Match a Team
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

// =============================================================================
//  Company Panel
// =============================================================================

function CompanyPanel() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-5">
          Corporate Operations
        </p>
        <div className="grid grid-cols-2 gap-3">
          {COMPANY_LINKS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group p-4 rounded-md border border-transparent hover:border-brand-blue/20 hover:bg-slate-50/80 transition-all"
            >
              <h4 className="text-sm font-semibold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                {c.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">{c.description}</p>
            </a>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap gap-x-6 gap-y-2 text-xs">
          <span><span className="font-bold text-brand-blue">400+</span> Engineers</span>
          <span><span className="font-bold text-brand-blue">15M+</span> Daily Txns</span>
          <span><span className="font-bold text-brand-blue">2026</span> Scale Milestone</span>
        </div>
      </div>

      <SpotlightPanel
        heading="Architecting infrastructure that runs modern operations"
        body="Managing core database transactions, full-stack application builds, and automated systems globally."
        cta="Read Our Corporate Story"
        href="/about"
      />
    </div>
  );
}

// =============================================================================
//  Reusable Dark Spotlight Panel
// =============================================================================

function SpotlightPanel({
  heading,
  body,
  cta,
  href,
}: {
  heading: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="col-span-4 relative p-7 rounded-md bg-brand-navy text-white overflow-hidden">
      {/* Subtle accent */}
      <div
        aria-hidden
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00C2FF 0%, transparent 70%)' }}
      />
      <div className="relative">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
          Featured
        </p>
        <h4 className="text-lg font-bold leading-tight mb-3">{heading}</h4>
        <p className="text-sm text-slate-300 leading-relaxed mb-5">{body}</p>
        <a
          href={href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:text-white transition-colors"
        >
          {cta}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// =============================================================================
//  Mobile Drawer (full screen, accordion + sub-accordion)
// =============================================================================

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<NavKey | null>(null);
  const [serviceSub, setServiceSub] = useState<string | null>(null);
  const [productSub, setProductSub] = useState<string | null>(null);

  const toggle = (key: NavKey) => {
    setExpanded(expanded === key ? null : key);
    setServiceSub(null);
    setProductSub(null);
  };

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop — dark, blurred, click-to-close */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: easingCurve.industrial }}
        onClick={onClose}
        aria-hidden
        className="lg:hidden fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-md"
      />

      {/* Side Panel — slides in from the right */}
      <motion.aside
        key="drawer"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.45, ease: easingCurve.industrial }}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[88%] max-w-md bg-white flex flex-col shadow-[-24px_0_60px_-12px_rgba(4,12,40,0.45)]"
      >
        {/* Top luminous accent line */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue"
        />
        {/* Decorative corner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full blur-3xl opacity-50"
          style={{
            background:
              'radial-gradient(circle, rgba(0,194,255,0.22) 0%, transparent 70%)',
          }}
        />

        {/* Branded Header */}
        <div className="relative flex items-center justify-between h-20 px-6 border-b border-slate-100 flex-shrink-0">
          <a
            href="/"
            onClick={onClose}
            className="flex items-center"
            aria-label="Aayulogic — Home"
          >
            <Image
              src="/logo.png"
              alt="Aayulogic"
              width={1623}
              height={429}
              className="h-10 w-auto"
            />
          </a>
          <button
            onClick={onClose}
            className="group relative w-10 h-10 rounded-full bg-slate-50 hover:bg-brand-blue text-brand-navy hover:text-white flex items-center justify-center transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Brand tagline strip */}
        <div className="relative px-6 py-4 border-b border-slate-100 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-cyan/5 flex-shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-1 flex items-center gap-2">
            <Globe2 className="w-3 h-3" />
            Canadian HQ · Global Delivery
          </p>
          <p className="text-sm text-brand-navy leading-snug">
            Engineering infrastructure for modern operations.
          </p>
        </div>

        {/* Scrollable nav body */}
        <div className="relative flex-1 overflow-y-auto overscroll-contain px-4 py-4">
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-2">
            Navigate
          </p>
          <div className="space-y-1">
            {TOP_NAV.map((item) => {
              const isOpen = expanded === item.key;
              return (
                <div key={item.key}>
                  <button
                    onClick={() => toggle(item.key)}
                    className={`w-full flex items-center justify-between py-3.5 px-3 text-[15px] font-semibold rounded-xl transition-colors ${
                      isOpen
                        ? 'bg-brand-blue/8 text-brand-blue'
                        : 'text-brand-navy hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          isOpen ? 'bg-brand-blue scale-125' : 'bg-slate-300'
                        }`}
                      />
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-all duration-300 ${
                        isOpen ? 'rotate-180 text-brand-blue' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: easingCurve.industrial }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 pr-1 pb-2 pt-1 space-y-0.5">
                          {item.key === 'services' &&
                            SERVICE_CATEGORIES.map((cat) => {
                              const Icon = SERVICE_ICON_MAP[cat.iconKey] ?? Sparkles;
                              const isSubOpen = serviceSub === cat.key;
                              return (
                                <div key={cat.key}>
                                  <button
                                    onClick={() =>
                                      setServiceSub(isSubOpen ? null : cat.key)
                                    }
                                    className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                                  >
                                    <span className="flex items-center gap-2.5 text-sm font-semibold text-brand-navy">
                                      <span className="w-7 h-7 rounded-md bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 flex items-center justify-center">
                                        <Icon className="w-3.5 h-3.5 text-brand-blue" />
                                      </span>
                                      {cat.title}
                                    </span>
                                    <ChevronDown
                                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${
                                        isSubOpen ? 'rotate-180 text-brand-blue' : ''
                                      }`}
                                    />
                                  </button>
                                  <AnimatePresence initial={false}>
                                    {isSubOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                          duration: 0.25,
                                          ease: easingCurve.industrial,
                                        }}
                                        className="overflow-hidden"
                                      >
                                        <div className="ml-6 pl-3 border-l border-brand-blue/15 py-1 space-y-0.5">
                                          <a
                                            href={`/services/${cat.key}`}
                                            onClick={onClose}
                                            className="flex items-center justify-between py-1.5 px-2 rounded text-xs font-semibold text-brand-blue hover:bg-brand-blue/5 transition-colors"
                                          >
                                            View all {cat.title}
                                            <ArrowUpRight className="w-3 h-3" />
                                          </a>
                                          {cat.items.map((it) => (
                                            <a
                                              key={it.title}
                                              href={`/services/${cat.key}/${it.slug}`}
                                              onClick={onClose}
                                              className="block py-1.5 px-2 rounded text-xs text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                                            >
                                              {it.title}
                                            </a>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}

                          {item.key === 'products' &&
                            PRODUCTS.map((p) => {
                              const isSubOpen = productSub === p.title;
                              return (
                                <div key={p.title}>
                                  <button
                                    onClick={() =>
                                      setProductSub(isSubOpen ? null : p.title)
                                    }
                                    className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                                  >
                                    <span className="text-sm font-semibold text-brand-navy">
                                      {p.title}
                                    </span>
                                    <ChevronDown
                                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${
                                        isSubOpen ? 'rotate-180 text-brand-blue' : ''
                                      }`}
                                    />
                                  </button>
                                  <AnimatePresence initial={false}>
                                    {isSubOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                          duration: 0.25,
                                          ease: easingCurve.industrial,
                                        }}
                                        className="overflow-hidden"
                                      >
                                        <div className="ml-3 pl-3 border-l border-brand-blue/15 py-2 pr-2">
                                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-1.5">
                                            {p.tagline}
                                          </p>
                                          <p className="text-xs text-slate-600 leading-relaxed mb-3">
                                            {p.description}
                                          </p>
                                          <a
                                            href={`/products/${p.slug}`}
                                            onClick={onClose}
                                            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:gap-1.5 transition-all"
                                          >
                                            Learn More
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                          </a>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}

                          {item.key === 'industries' && (
                            <>
                              <a
                                href="/industries"
                                onClick={onClose}
                                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-brand-blue hover:bg-brand-blue/5 transition-colors"
                              >
                                View all Industries
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                              {INDUSTRIES_NEW.map((s) => (
                                <a
                                  key={s.title}
                                  href={`/industries/${s.slug}`}
                                  onClick={onClose}
                                  className="block py-2.5 px-3 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-colors"
                                >
                                  {s.title}
                                </a>
                              ))}
                            </>
                          )}

                          {item.key === 'talent' && (
                            <>
                              <a
                                href="/talent"
                                onClick={onClose}
                                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-brand-blue hover:bg-brand-blue/5 transition-colors"
                              >
                                View Talent & Engagement
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                              {TALENT_MODELS.map((s) => (
                                <a
                                  key={s.title}
                                  href={`/talent/${s.slug}`}
                                  onClick={onClose}
                                  className="block py-2.5 px-3 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-colors"
                                >
                                  {s.title}
                                </a>
                              ))}
                            </>
                          )}

                          {item.key === 'company' &&
                            COMPANY_LINKS.map((s) => (
                              <a
                                key={s.title}
                                href={s.href}
                                onClick={onClose}
                                className="block py-2.5 px-3 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-colors"
                              >
                                {s.title}
                              </a>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick contact strip */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-2">
              Reach Out
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="mailto:hello@aayulogic.com"
                className="group flex items-center gap-2.5 py-3 px-3 rounded-xl border border-slate-200 hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all"
              >
                <span className="w-9 h-9 rounded-lg bg-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white text-brand-blue flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Email
                  </span>
                  <span className="text-xs font-semibold text-brand-navy">hello@</span>
                </span>
              </a>
              <a
                href="/contact"
                onClick={onClose}
                className="group flex items-center gap-2.5 py-3 px-3 rounded-xl border border-slate-200 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all"
              >
                <span className="w-9 h-9 rounded-lg bg-brand-cyan/10 group-hover:bg-brand-cyan group-hover:text-white text-brand-cyan flex items-center justify-center transition-colors">
                  <CalendarCheck className="w-4 h-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Schedule
                  </span>
                  <span className="text-xs font-semibold text-brand-navy">Book a Call</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA + trust footer */}
        <div className="relative flex-shrink-0 overflow-hidden">
          {/* Dark gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-[#0a1c4a]" />
          <div
            aria-hidden
            className="absolute -top-8 -left-8 w-40 h-40 rounded-full blur-3xl opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(0,194,255,0.4) 0%, transparent 70%)',
            }}
          />

          <div className="relative p-6 space-y-3">
            {/* Primary CTA */}
            <motion.a
              href="/contact"
              onClick={onClose}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: easingCurve.industrial }}
              className="group relative w-full px-5 py-4 text-white text-sm font-bold rounded-xl overflow-hidden shadow-xl block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-xl" />
              <div className="absolute inset-0 rounded-xl border border-white/40 group-hover:border-white/70 transition-colors" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue opacity-0 group-hover:opacity-40 blur-lg transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                Start Your Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <a
              href="mailto:projects@aayulogic.com"
              className="group relative w-full px-5 py-3 text-white/90 hover:text-white text-sm font-semibold rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/5 flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4" />
              Email Sales
            </a>

            {/* Trust badges */}
            <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-center gap-3 text-[10px] text-white/60">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brand-cyan" />
                ISO 27001
              </span>
              <span className="text-white/30">·</span>
              <span>ISO 9001</span>
              <span className="text-white/30">·</span>
              <span>SOC 2</span>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
