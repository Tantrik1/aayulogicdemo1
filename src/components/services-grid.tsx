'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Code2,
  Plug,
  Cloud,
  ShoppingBag,
  Cpu,
  Building2,
  ChevronDown,
  Users2,
  Check,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { easingCurve, motionConfig } from '@/lib/utils';

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  Code2,
  Plug,
  Cloud,
  ShoppingBag,
  Cpu,
  Building2,
  Users2,
};

export function ServicesGrid() {
  const [activeKey, setActiveKey] = useState<string>(SERVICE_CATEGORIES[0].key);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Dynamic Theme state (dark or light)
  const theme = 'dark';


  // Sticky tab bar (mobile/tablet)
  const stickyBarRef = useRef<HTMLDivElement>(null);
  const stickySentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  const active =
    SERVICE_CATEGORIES.find((c) => c.key === activeKey) ?? SERVICE_CATEGORIES[0];

  const handleTabClick = (key: string) => {
    const activeIdx = SERVICE_CATEGORIES.findIndex((c) => c.key === activeKey);
    const newIdx = SERVICE_CATEGORIES.findIndex((c) => c.key === key);
    setDirection(newIdx > activeIdx ? 'right' : 'left');
    setActiveKey(key);
    handleStickyTabAlign();
  };

  // Mobile scroll detection
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftScroll(scrollLeft > 0);
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      container?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  // Detect when the tab bar is "stuck" beneath the navbar so we can apply
  // a heavier glass background only while pinned (clean look at rest).
  useEffect(() => {
    const sentinel = stickySentinelRef.current;
    if (!sentinel) return;

    // 64px = mobile/tablet navbar height (h-16). Sticky bar sits right below it.
    const NAV_OFFSET = 64;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Stuck when the sentinel has scrolled above the navbar zone
        // (but still consider not-stuck when the section is below the viewport).
        setIsStuck(
          !entry.isIntersecting && entry.boundingClientRect.top <= NAV_OFFSET,
        );
      },
      { rootMargin: `-${NAV_OFFSET}px 0px 0px 0px`, threshold: [0, 1] },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // When stuck and the user picks a different tab, gently scroll back so the
  // new panel starts from the top — avoids landing deep inside a shorter panel.
  const handleStickyTabAlign = () => {
    if (!isStuck || !stickyBarRef.current) return;
    const NAV_OFFSET = 64;
    const rect = stickyBarRef.current.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - NAV_OFFSET;
    if (Math.abs(window.scrollY - targetY) > 4) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <section
      data-theme={theme}
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-500 bg-transparent"
    >
      {/* Dynamic Fading Video Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(10,25,47,0.93) 12%, rgba(10,25,47,0.7) 50%, rgba(10,25,47,0.93) 88%, #FFFFFF 100%)'
        }}
      />

      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(40% 30% at 80% 10%, rgba(0,194,255,0.1) 0%, transparent 70%), radial-gradient(40% 30% at 0% 90%, rgba(4,92,179,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Our Services
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-brand-navy'
            }`}
          >
            Engineering across{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              three core services
            </span>
          </h2>
          <p
            className={`mt-5 text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            We design, build, and operate software systems for companies that have outgrown standard tools — starting with rigorous technical planning.
          </p>
        </motion.div>

        {/* UNIVERSAL — Responsive Tab System (all breakpoints) */}
        <div>
          {/* Sentinel — detects when the sticky tab bar is pinned beneath the navbar */}
          <div ref={stickySentinelRef} aria-hidden className="h-px -mb-px" />

          {/* Horizontal Pill Tabs — sticky beneath navbar on mobile/tablet,
              releases naturally when the section's bottom scrolls past */}
          <div
            ref={stickyBarRef}
            className={`
              relative mb-8 lg:mb-12
              sticky top-16 z-40 lg:static lg:z-auto
              -mx-4 sm:-mx-6 lg:mx-0
              py-2 lg:py-0
              transition-all duration-300
              ${
                isStuck
                  ? theme === 'dark'
                    ? 'bg-slate-950/92 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_16px_-8px_rgba(0,0,0,0.5)] lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:shadow-none lg:py-0'
                    : 'bg-white/92 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_8px_16px_-8px_rgba(10,25,47,0.12)] lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:shadow-none lg:py-0'
                  : ''
              }
            `}
          >
            {/* Mobile Scroll Gradient Fade */}
            {showLeftScroll && (
              <div
                className={`absolute left-0 top-0 bottom-0 w-8 md:hidden pointer-events-none z-20 transition-all ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent'
                    : 'bg-gradient-to-r from-white via-white/80 to-transparent'
                }`}
              />
            )}
            {showRightScroll && (
              <div
                className={`absolute right-0 top-0 bottom-0 w-8 md:hidden pointer-events-none z-20 transition-all ${
                  theme === 'dark'
                    ? 'bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent'
                    : 'bg-gradient-to-l from-white via-white/80 to-transparent'
                }`}
              />
            )}

            {/* Tab Scroll Container with enhanced scroll indicators */}
            <div className="relative">
              {/* Left scroll fade indicator */}
              {showLeftScroll && (
                <motion.button
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                    }
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-r-lg bg-transparent hover:scale-105 transition-transform"
                >
                  <ChevronDown className="w-5 h-5 text-brand-blue rotate-90" />
                </motion.button>
              )}

              {/* Right scroll fade indicator */}
              {showRightScroll && (
                <motion.button
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-l-lg bg-transparent hover:scale-105 transition-transform"
                >
                  <ChevronDown className="w-5 h-5 text-brand-blue -rotate-90" />
                </motion.button>
              )}

              <div
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto pb-2 px-4 sm:px-6 lg:justify-center lg:overflow-x-visible scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
              >
                {SERVICE_CATEGORIES.map((cat) => {
                  const Icon = ICON_MAP[cat.iconKey] ?? Sparkles;
                  const isActive = cat.key === active.key;
                  return (
                    <motion.button
                      key={cat.key}
                      onClick={() => handleTabClick(cat.key)}
                      layoutId={`indicator-${cat.key}`}
                      className={`relative flex-shrink-0 flex items-center gap-2 px-3 sm:px-5 py-3 rounded-full border text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                        isActive
                          ? theme === 'dark'
                            ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white border-transparent shadow-[0_8px_24px_-6px_rgba(0,194,255,0.4)]'
                            : 'bg-brand-blue text-white border-brand-blue shadow-[0_8px_24px_-6px_rgba(4,92,179,0.3)]'
                          : theme === 'dark'
                            ? 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-850/60'
                            : 'bg-white text-brand-navy border-slate-200 hover:border-brand-blue/40 hover:bg-slate-50'
                      }`}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="flex items-center gap-1.5"
                        initial={false}
                        animate={{
                          color: isActive ? '#FFFFFF' : theme === 'dark' ? '#00C2FF' : '#045CB3',
                        }}
                      >
                        <Icon className="w-4.5 h-4.5 flex-shrink-0" />
                        <span className="truncate">{cat.title}</span>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Panel with Staggered Card Reveals */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{
                opacity: 0,
                x: direction === 'right' ? 24 : -24,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: direction === 'right' ? -24 : 24,
              }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
            >
              <ServiceContent category={active} theme={theme} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
//  Service Content Panel with Staggered Animations
// =============================================================================

function ServiceContent({
  category,
  theme,
}: {
  category: typeof SERVICE_CATEGORIES[number];
  theme: 'light' | 'dark';
}) {
  const Icon = ICON_MAP[category.iconKey] ?? Sparkles;

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 lg:p-10 transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-slate-950/70 border-white/10 shadow-2xl shadow-brand-blue/5 backdrop-blur-md'
          : 'bg-white border-slate-200/80 shadow-[0_15px_40px_-20px_rgba(10,25,47,0.08)]'
      }`}
    >
      {/* Header with animated icon */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easingCurve.industrial }}
        className={`flex items-start gap-4 sm:gap-6 pb-6 sm:pb-8 mb-8 border-b transition-colors duration-300 ${
          theme === 'dark' ? 'border-white/5' : 'border-slate-100'
        }`}
      >
        <motion.div
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-brand-blue to-brand-cyan shadow-brand-blue/20'
              : 'bg-gradient-to-br from-brand-blue to-brand-system-blue shadow-brand-blue/15'
          }`}
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </motion.div>
        <div className="flex-1">
          <h3
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-brand-navy'
            }`}
          >
            {category.title}
          </h3>
          <p
            className={`text-base sm:text-lg mt-2 leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {category.tagline}
          </p>
        </div>
      </motion.div>

      {/* Two columns layout: details and timeline flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: What's Included & Ideal For */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              What's Included:
            </h4>
            <ul className="space-y-2.5">
              {category.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base leading-snug">
                  <span
                    className={`w-5.5 h-5.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      theme === 'dark' ? 'bg-brand-cyan/10' : 'bg-brand-blue/8'
                    }`}
                  >
                    <Check
                      className={`w-3 h-3 stroke-[3px] transition-colors ${
                        theme === 'dark' ? 'text-brand-cyan' : 'text-brand-blue'
                      }`}
                    />
                  </span>
                  <span
                    className={`transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`pt-4 border-t transition-colors duration-300 ${
            theme === 'dark' ? 'border-white/5' : 'border-slate-100'
          }`}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Ideal For:
            </h4>
            <ul className="space-y-2.5">
              {category.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base leading-snug">
                  <span
                    className={`w-5.5 h-5.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      theme === 'dark' ? 'bg-brand-cyan/10' : 'bg-brand-cyan/8'
                    }`}
                  >
                    <Check className="w-3 h-3 text-brand-cyan stroke-[3px]" />
                  </span>
                  <span
                    className={`transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Flow / Process */}
        <div
          className={`lg:col-span-6 border rounded-2xl p-5 sm:p-6 transition-colors duration-500 ${
            theme === 'dark'
              ? 'bg-slate-900/30 border-white/5'
              : 'bg-slate-50/50 border-slate-100'
          }`}
        >
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
            {category.flowTitle}:
          </h4>
          <div className="space-y-4">
            {category.flowStages.slice(0, 5).map((stage, idx) => (
              <div key={stage.title} className="flex items-start gap-3.5">
                <div
                  className={`w-6.5 h-6.5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-colors ${
                    theme === 'dark' ? 'bg-brand-cyan text-brand-navy' : 'bg-brand-blue text-white'
                  }`}
                >
                  {idx + 1}
                </div>
                <div>
                  <div
                    className={`text-sm sm:text-base font-bold leading-tight transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-brand-navy'
                    }`}
                  >
                    {stage.title}
                  </div>
                  <div
                    className={`text-xs sm:text-sm mt-0.5 leading-normal transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {stage.detail}
                  </div>
                </div>
              </div>
            ))}
            {category.flowStages.length > 5 && (
              <div className="text-xs sm:text-sm font-semibold text-slate-400 pl-10 pt-1">
                + {category.flowStages.length - 5} more stages
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Service Learn More CTA button */}
      <div className={`mt-8 pt-6 border-t flex justify-end transition-colors duration-300 ${
        theme === 'dark' ? 'border-white/5' : 'border-slate-100'
      }`}>
        <Link
          href={`/services/${category.key}`}
          className={`group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:opacity-90 shadow-brand-blue/15'
              : 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-brand-blue/10'
          }`}
        >
          <span>Learn More about {category.title}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
