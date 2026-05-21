'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import {
  Sparkles,
  Code2,
  Plug,
  Cloud,
  ShoppingBag,
  Cpu,
  Building2,
  ArrowUpRight,
  ChevronDown,
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
};

export function ServicesGrid() {
  const [activeKey, setActiveKey] = useState<string>(SERVICE_CATEGORIES[0].key);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Sticky tab bar (mobile/tablet) — sits beneath the navbar while the user
  // scrolls through service items, then releases when the next section enters.
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
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 80% 10%, rgba(0,194,255,0.06) 0%, transparent 70%), radial-gradient(40% 30% at 0% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Engineering across{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              seven capability domains
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            From AI agents to enterprise platforms — pick a domain to see how we build,
            integrate, and operate at scale.
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
              transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300
              ${
                isStuck
                  ? 'bg-white/92 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_8px_16px_-8px_rgba(10,25,47,0.12)] lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:shadow-none lg:py-0'
                  : ''
              }
            `}
          >
            {/* Mobile Scroll Gradient Fade */}
            {showLeftScroll && (
              <div className="absolute left-0 top-0 bottom-0 w-8 md:hidden bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-20" />
            )}
            {showRightScroll && (
              <div className="absolute right-0 top-0 bottom-0 w-8 md:hidden bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-20" />
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
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-r-lg bg-gradient-to-r from-white via-white to-transparent hover:from-slate-50 transition-all"
                  whileHover={{ scale: 1.1 }}
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
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-l-lg bg-gradient-to-l from-white via-white to-transparent hover:from-slate-50 transition-all"
                  whileHover={{ scale: 1.1 }}
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
                      className={`relative flex-shrink-0 flex items-center gap-2 px-3 sm:px-4 py-3 rounded-full border text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-brand-blue text-white border-brand-blue shadow-[0_8px_24px_-6px_rgba(4,92,179,0.3)]'
                          : 'bg-white text-brand-navy border-slate-200 hover:border-brand-blue/40 hover:bg-slate-50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="flex items-center gap-1.5"
                        initial={false}
                        animate={{
                          color: isActive ? '#FFFFFF' : '#045CB3',
                        }}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
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
              <ServiceContent category={active} />
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

function ServiceContent({ category }: { category: typeof SERVICE_CATEGORIES[number] }) {
  const Icon = ICON_MAP[category.iconKey] ?? Sparkles;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easingCurve.industrial },
    },
  };

  return (
    <div className="rounded-lg border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.08)] bg-white/40 backdrop-blur-sm">
      {/* Header with animated icon */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easingCurve.industrial }}
        className="flex items-start gap-4 sm:gap-6 pb-6 sm:pb-8 mb-8 sm:mb-10 border-b border-slate-100"
      >
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-brand-blue to-brand-system-blue flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_-6px_rgba(4,92,179,0.2)]"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight tracking-tight">
            {category.title}
          </h3>
          <p className="text-base sm:text-lg text-slate-600 mt-2 sm:mt-3 leading-relaxed">{category.tagline}</p>
        </div>
      </motion.div>

      {/* Items Grid with Staggered Reveals */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {category.items.map((item) => (
          <motion.a
            key={item.title}
            href="#"
            variants={itemVariants}
            className="group relative p-5 sm:p-6 rounded-lg border border-slate-200 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm hover:border-brand-blue/50 hover:shadow-[0_16px_32px_-12px_rgba(4,92,179,0.25)] transition-all overflow-hidden"
            whileHover={{
              y: -4,
              boxShadow: '0 20px 40px -12px rgba(4, 92, 179, 0.3)',
            }}
            transition={{ duration: 0.3, ease: easingCurve.industrial }}
          >
            {/* Animated gradient background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={false}
            />

            {/* Card content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h4 className="text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors leading-tight pr-2">
                  {item.title}
                </h4>
                <motion.div
                  initial={{ opacity: 0.5, x: 0, y: 0 }}
                  whileHover={{ opacity: 1, x: 2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-brand-blue flex-shrink-0" />
                </motion.div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors">
                {item.description}
              </p>

              {/* Tech Icons Footer */}
              {item.techIcons && item.techIcons.length > 0 && (
                <motion.div
                  className="flex items-center gap-2.5 pt-4 sm:pt-5 border-t border-slate-100/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.techIcons.slice(0, 4).map((t, i) => (
                    <motion.div
                      key={t}
                      className="w-6 h-6 flex items-center justify-center hover:scale-125 transition-transform"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      whileHover={{ scale: 1.3 }}
                      title={t}
                    >
                      <StackIcon name={t as never} className="w-6 h-6" />
                    </motion.div>
                  ))}
                  {item.techIcons.length > 4 && (
                    <motion.span
                      className="text-xs font-semibold text-slate-500 ml-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      +{item.techIcons.length - 4} more
                    </motion.span>
                  )}
                </motion.div>
              )}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
