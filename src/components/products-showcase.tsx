'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Users2,
  CalendarCheck,
  TrendingUp,
  Hash,
  Lock,
  Send,
  Smile,
  Paperclip,
  BookOpen,
  PlayCircle,
  Award,
} from 'lucide-react';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { easingCurve } from '@/lib/utils';

type DashboardKey = 'hrsoft' | 'chat' | 'learn';

type Product = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoAlt: string;
  href: string;
  dashboard: DashboardKey;
};

const PRODUCTS: Product[] = [
  {
    index: '01',
    name: 'RealHRsoft',
    tagline: 'HR Intelligence Platform',
    description:
      'Complete human-resource operations — payroll, attendance, performance, and analytics — running every day for hundreds of organizations across South Asia.',
    logo: '/realhrsoft.png',
    logoAlt: 'RealHRsoft',
    href: '#',
    dashboard: 'hrsoft',
  },
  {
    index: '02',
    name: 'Real Chat',
    tagline: 'Secure Team Messaging',
    description:
      'Enterprise-grade collaboration with end-to-end encryption, voice and video, and native HRsoft sign-on — built for distributed, security-first teams.',
    logo: '/realchat.png',
    logoAlt: 'Real Chat',
    href: '#',
    dashboard: 'chat',
  },
  {
    index: '03',
    name: 'Real Learn',
    tagline: 'Learning Management System',
    description:
      'Structured training and continuous upskilling — from onboarding paths to compliance certification — with real analytics on skill velocity and completion.',
    logo: '/reallearn.png',
    logoAlt: 'Real Learn',
    href: '#',
    dashboard: 'learn',
  },
];

// =============================================================================
//  Main
// =============================================================================

// Middle panel gets a clean white background — bookend transparent panels show video.
const PANEL_TONE: ('transparent' | 'white')[] = ['transparent', 'white', 'transparent'];

export function ProductsShowcase() {
  return (
    <section
      id="products-showcase"
      aria-label="See our real products serving millions of customers"
      className="relative w-full"
    >
      {/* ============ SECTION HEADER (scrolls above the pinned panels) ============ */}
      <div className="relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden">
        {/* Ambient backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(40% 30% at 80% 10%, rgba(0,194,255,0.06) 0%, transparent 70%), radial-gradient(40% 30% at 0% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: easingCurve.industrial }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Real products serving{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              millions of customers
            </span>
            .
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Three platforms running in production every day — built, operated, and
            iterated by the same engineers who partner with you.
          </p>
        </motion.div>
      </div>

      {/* ============ PINNED PANELS (tablet/desktop pin + flip-in) ============ */}
      <FlowArt aria-label="Product showcase scroll">
        {PRODUCTS.map((product, i) => (
          <ProductPanel
            key={product.index}
            product={product}
            tone={PANEL_TONE[i]}
            reverse={i % 2 === 1}
          />
        ))}
      </FlowArt>
    </section>
  );
}

export default ProductsShowcase;

// =============================================================================
//  Panel — one row per product
// =============================================================================

function ProductPanel({
  product,
  tone,
  reverse,
}: {
  product: Product;
  tone: 'transparent' | 'white';
  reverse: boolean;
}) {
  const reduce = useReducedMotion();
  const isWhite = tone === 'white';

  const initialUp = reduce ? false : { opacity: 0, y: 28 };
  const animateIn = { opacity: 1, y: 0 };

  return (
    <FlowSection
      aria-label={`${product.index} — ${product.name}`}
      data-theme="light"
      className={isWhite ? 'bg-white' : 'bg-transparent'}
    >
      {/* Ambient backdrop — subtle radial glow, consistent across panels */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background: isWhite
            ? 'radial-gradient(40% 30% at 90% 10%, rgba(0,194,255,0.08) 0%, transparent 70%), radial-gradient(40% 30% at 10% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)'
            : 'radial-gradient(40% 30% at 80% 10%, rgba(0,194,255,0.06) 0%, transparent 70%), radial-gradient(40% 30% at 0% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 items-center">
        <div className="grid w-full grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12 xl:gap-x-14">
        {/* ============ CONTENT ============ */}
        <motion.div
          initial={initialUp}
          whileInView={animateIn}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easingCurve.industrial }}
          className={`order-1 lg:col-span-5 ${
            reverse ? 'lg:order-2 lg:col-start-8' : 'lg:order-1'
          }`}
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white text-[10px] font-bold sm:h-8 sm:w-8 sm:text-[11px]">
              {product.index}
            </span>
            <span className="h-px w-6 bg-brand-blue/40 sm:w-10" />
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue sm:text-[11px] sm:tracking-[0.32em]">
              {product.index} / 03
            </p>
          </div>

          {/* Logo */}
          <motion.div
            initial={initialUp}
            whileInView={animateIn}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08, ease: easingCurve.industrial }}
            className="mb-5 flex"
            style={{ height: 'clamp(2.5rem, 4vw, 3rem)' }}
          >
            <Image
              src={product.logo}
              alt={product.logoAlt}
              width={1024}
              height={230}
              className="h-full w-auto object-contain object-left"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={initialUp}
            whileInView={animateIn}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12, ease: easingCurve.industrial }}
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue sm:mb-4"
          >
            {product.tagline}
          </motion.p>

          {/* Title */}
          <motion.h3
            initial={initialUp}
            whileInView={animateIn}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.14, ease: easingCurve.industrial }}
            className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight tracking-tight"
          >
            {product.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={initialUp}
            whileInView={animateIn}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.18, ease: easingCurve.industrial }}
            className="mb-7 max-w-[46ch] text-base sm:text-lg text-slate-600 leading-relaxed sm:mb-8"
          >
            {product.description}
          </motion.p>

          {/* View Product */}
          <motion.a
            initial={initialUp}
            whileInView={animateIn}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.24, ease: easingCurve.industrial }}
            href={product.href}
            className="group inline-flex min-h-[44px] items-center gap-2 border-b border-brand-blue/30 pb-2 text-[13px] font-bold uppercase tracking-[0.18em] text-brand-blue transition-colors hover:border-brand-blue sm:text-sm"
          >
            View Product
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

        {/* ============ DASHBOARD ============ */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.12, ease: easingCurve.industrial }}
          className={`order-2 lg:col-span-7 ${
            reverse ? 'lg:order-1 lg:col-start-1' : 'lg:order-2'
          }`}
        >
          <DashboardFrame>
            {product.dashboard === 'hrsoft' && <HRSoftDash />}
            {product.dashboard === 'chat' && <ChatDash />}
            {product.dashboard === 'learn' && <LearnDash />}
          </DashboardFrame>
        </motion.div>
        </div>
      </div>
    </FlowSection>
  );
}

// =============================================================================
//  Dashboard frame — chrome + glow + subtle tilt
// =============================================================================

function DashboardFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative transition-transform duration-500 ease-out hover:scale-[1.012]">
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[2rem] bg-brand-blue/15 blur-3xl transition-opacity duration-500 sm:-inset-6 group-hover:opacity-90"
      />

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0A1428] shadow-[0_30px_60px_-15px_rgba(4,12,32,0.5),0_15px_30px_-10px_rgba(4,92,179,0.4)] sm:rounded-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3">
          <span className="h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80 sm:h-2.5 sm:w-2.5" />
          <div className="ml-2 flex-1 rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[9px] text-white/50 sm:ml-3 sm:px-3 sm:text-[10px]">
            app.aayulogic.com
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

// =============================================================================
//  HRSoft Dashboard
// =============================================================================

function HRSoftDash() {
  return (
    <div className="grid grid-cols-12 gap-2.5 p-3 text-white sm:gap-3 sm:p-4 lg:p-5">
      <aside className="col-span-3 hidden flex-col gap-1 rounded-lg bg-white/[0.04] p-2.5 md:flex lg:gap-1.5 lg:rounded-xl lg:p-3">
        <p className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-white/40 lg:text-[9px]">
          Workspace
        </p>
        {['Dashboard', 'Employees', 'Attendance', 'Payroll', 'Performance', 'Reports'].map(
          (item, i) => (
            <div
              key={item}
              className={`flex items-center gap-1.5 rounded px-2 py-1 text-[10px] lg:gap-2 lg:px-2.5 lg:py-1.5 lg:text-[11px] ${
                i === 0
                  ? 'bg-brand-cyan/15 font-semibold text-brand-cyan'
                  : 'text-white/65'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 0 ? 'bg-brand-cyan' : 'bg-white/25'
                }`}
              />
              {item}
            </div>
          ),
        )}
      </aside>

      <div className="col-span-12 space-y-2.5 sm:space-y-3 md:col-span-9">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { icon: Users2, value: '2,458', label: 'Employees', delta: '+4.2%' },
            { icon: CalendarCheck, value: '96.4%', label: 'Attendance', delta: '+0.8%' },
            { icon: TrendingUp, value: '128', label: 'Open Roles', delta: '+12' },
          ].map((k) => {
            const Icon = k.icon;
            return (
              <div
                key={k.label}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 transition-colors hover:bg-white/[0.06] sm:rounded-xl sm:p-3"
              >
                <div className="mb-1.5 flex items-center justify-between sm:mb-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-cyan/15 text-brand-cyan sm:h-7 sm:w-7">
                    <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </span>
                  <span className="text-[8px] font-bold text-emerald-400 sm:text-[9px]">
                    {k.delta}
                  </span>
                </div>
                <p className="text-base font-bold leading-none sm:text-lg">{k.value}</p>
                <p className="mt-1 text-[9px] uppercase tracking-wider text-white/45 sm:text-[10px]">
                  {k.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 sm:rounded-xl sm:p-3">
          <div className="mb-2 flex items-center justify-between sm:mb-3">
            <p className="text-[10px] font-semibold text-white/80 sm:text-[11px]">
              Attendance · 30 days
            </p>
            <div className="flex items-center gap-2 text-[8px] text-white/45 sm:text-[9px]">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" /> Present
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" /> Leave
              </span>
            </div>
          </div>
          <Sparkbars />
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 sm:rounded-xl sm:p-3">
          <p className="mb-1.5 text-[10px] font-semibold text-white/80 sm:mb-2 sm:text-[11px]">
            Recent activity
          </p>
          <div className="space-y-1 sm:space-y-1.5">
            {[
              { name: 'Aarav Sharma', role: 'Payroll · processed', time: '2m' },
              { name: 'Priya Khatri', role: 'Leave · approved', time: '14m' },
              { name: 'Rohan Pradhan', role: 'Review · submitted', time: '38m' },
            ].map((r, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md px-1.5 py-1 text-[10px] sm:px-2 sm:py-1.5 sm:text-[11px]"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-[9px] font-bold text-brand-cyan sm:h-6 sm:w-6">
                    {r.name[0]}
                  </span>
                  <span className="truncate text-white/85">{r.name}</span>
                </div>
                <span className="flex-shrink-0 text-white/45">
                  <span className="hidden sm:inline">{r.role} · </span>
                  {r.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkbars() {
  const bars = [
    62, 78, 71, 84, 80, 88, 92, 85, 90, 76, 82, 88, 94, 91, 86, 90, 95, 88, 92, 96,
    93, 88, 92, 95, 97, 93, 90, 96, 98, 95,
  ];
  return (
    <div className="flex h-16 items-end gap-[3px] sm:h-20 sm:gap-1">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${h}%`,
            background:
              i % 7 === 6
                ? 'linear-gradient(to top, rgba(255,255,255,0.18), rgba(255,255,255,0.08))'
                : 'linear-gradient(to top, #00C2FF, rgba(0,194,255,0.45))',
          }}
        />
      ))}
    </div>
  );
}

// =============================================================================
//  Chat Dashboard
// =============================================================================

function ChatDash() {
  return (
    <div
      className="grid grid-cols-12 text-white"
      style={{ minHeight: 'clamp(320px, 38vw, 460px)' }}
    >
      <aside className="col-span-4 hidden border-r border-white/10 bg-white/[0.03] p-2.5 sm:block sm:p-3">
        <div className="mb-2.5 flex items-center justify-between sm:mb-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">
            Channels
          </p>
          <Lock className="h-3 w-3 text-brand-cyan" />
        </div>
        <div className="space-y-0.5 sm:space-y-1">
          {[
            { name: 'engineering', count: 3, active: true },
            { name: 'design-system', count: 0 },
            { name: 'announcements', count: 1 },
            { name: 'support-rota', count: 0 },
            { name: 'product-launch', count: 8 },
          ].map((c) => (
            <div
              key={c.name}
              className={`flex items-center justify-between rounded-md px-1.5 py-1 text-[10px] transition-colors sm:px-2 sm:py-1.5 sm:text-[11px] ${
                c.active
                  ? 'bg-brand-cyan/15 text-white'
                  : 'text-white/65 hover:bg-white/[0.04]'
              }`}
            >
              <span className="flex min-w-0 items-center gap-1.5">
                <Hash className="h-3 w-3 flex-shrink-0 opacity-60" />
                <span className="truncate">{c.name}</span>
              </span>
              {c.count > 0 && (
                <span className="flex-shrink-0 rounded-full bg-brand-cyan px-1.5 py-px text-[9px] font-bold text-brand-navy">
                  {c.count}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-3 mb-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white/45 sm:mt-4 sm:mb-2 sm:text-[10px]">
          Direct
        </p>
        <div className="space-y-0.5 sm:space-y-1">
          {[
            { name: 'Aarav S.', dot: 'emerald' },
            { name: 'Priya K.', dot: 'amber' },
            { name: 'Rohan P.', dot: 'slate' },
          ].map((d) => (
            <div
              key={d.name}
              className="flex items-center gap-2 rounded-md px-1.5 py-1 text-[10px] text-white/70 sm:px-2 sm:py-1.5 sm:text-[11px]"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  d.dot === 'emerald'
                    ? 'bg-emerald-400'
                    : d.dot === 'amber'
                      ? 'bg-amber-400'
                      : 'bg-slate-500'
                }`}
              />
              {d.name}
            </div>
          ))}
        </div>
      </aside>

      <div className="col-span-12 flex flex-col sm:col-span-8">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5 sm:px-4 sm:py-3">
          <div>
            <p className="text-[11px] font-semibold sm:text-[12px]">#engineering</p>
            <p className="text-[9px] text-white/45 sm:text-[10px]">
              14 members · end-to-end encrypted
            </p>
          </div>
          <Lock className="h-3.5 w-3.5 text-brand-cyan" />
        </div>

        <div className="flex-1 space-y-2.5 overflow-hidden p-3 sm:space-y-3 sm:p-4">
          <Message
            initial="A"
            name="Aarav"
            time="10:42"
            text="Pushed the payroll batch — green across the board."
          />
          <Message
            initial="P"
            name="Priya"
            time="10:43"
            text="Nice. CI just turned green on the chat-edge worker too."
            accent
          />
          <Message
            initial="R"
            name="Rohan"
            time="10:45"
            text="Cutting the 4.6 release tag now."
          />
          <div className="flex items-center gap-2 px-1 text-[9px] text-white/45 sm:text-[10px]">
            <span className="flex gap-0.5">
              <span className="h-1 w-1 animate-pulse rounded-full bg-brand-cyan" />
              <span className="h-1 w-1 animate-pulse rounded-full bg-brand-cyan [animation-delay:120ms]" />
              <span className="h-1 w-1 animate-pulse rounded-full bg-brand-cyan [animation-delay:240ms]" />
            </span>
            Priya is typing…
          </div>
        </div>

        <div className="border-t border-white/10 p-2.5 sm:p-3">
          <div className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-2.5 py-1.5 sm:px-3 sm:py-2">
            <Smile className="h-3.5 w-3.5 text-white/45" />
            <span className="flex-1 truncate text-[10px] text-white/35 sm:text-[11px]">
              Message #engineering
            </span>
            <Paperclip className="h-3.5 w-3.5 text-white/45" />
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-cyan text-brand-navy">
              <Send className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Message({
  initial,
  name,
  time,
  text,
  accent,
}: {
  initial: string;
  name: string;
  time: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-start gap-2 sm:gap-2.5">
      <span
        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-[10px] font-bold sm:h-7 sm:w-7 ${
          accent ? 'bg-brand-cyan text-brand-navy' : 'bg-white/10 text-white/85'
        }`}
      >
        {initial}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] sm:text-[11px]">
          <span className="font-semibold text-white">{name}</span>
          <span className="ml-2 text-white/40">{time}</span>
        </p>
        <p className="text-[11px] leading-relaxed text-white/80 sm:text-[12px]">
          {text}
        </p>
      </div>
    </div>
  );
}

// =============================================================================
//  Learn Dashboard
// =============================================================================

function LearnDash() {
  return (
    <div className="space-y-3 p-3 text-white sm:space-y-4 sm:p-4 lg:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">
            My Learning Path
          </p>
          <p className="mt-0.5 text-sm font-semibold sm:mt-1 sm:text-base">
            Senior Engineering · Q3 Track
          </p>
        </div>
        <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 sm:gap-3 sm:rounded-xl sm:px-3 sm:py-2">
          <Award className="h-3.5 w-3.5 text-brand-cyan sm:h-4 sm:w-4" />
          <div>
            <p className="text-[8px] uppercase tracking-wider text-white/45 sm:text-[9px]">
              Completion
            </p>
            <p className="text-xs font-bold leading-none sm:text-sm">78%</p>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-[9px] text-white/55 sm:text-[10px]">
          <span>Progress</span>
          <span>14 of 18 modules</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-white"
            style={{ width: '78%' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
        {[
          {
            title: 'System Design Fundamentals',
            chapter: 'Chapter 6 of 8',
            progress: 75,
            grad: 'from-[#045CB3] to-[#00C2FF]',
          },
          {
            title: 'Distributed Architecture',
            chapter: 'Chapter 3 of 7',
            progress: 42,
            grad: 'from-[#0A1E48] to-[#045CB3]',
          },
          {
            title: 'Production Reliability',
            chapter: 'Chapter 8 of 8',
            progress: 100,
            grad: 'from-[#00C2FF] to-[#7FE2FF]',
          },
        ].map((c) => (
          <div
            key={c.title}
            className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition-colors hover:border-white/20 sm:rounded-xl"
          >
            <div
              className={`relative flex h-16 items-end justify-between bg-gradient-to-br ${c.grad} p-2.5 sm:h-20 sm:p-3`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />
              <PlayCircle className="relative h-5 w-5 text-white drop-shadow sm:h-6 sm:w-6" />
              <span className="relative rounded-md bg-white/15 px-1.5 py-0.5 text-[9px] font-bold text-white backdrop-blur">
                {c.progress}%
              </span>
            </div>
            <div className="p-2.5 sm:p-3">
              <p className="text-[11px] font-semibold leading-tight text-white">{c.title}</p>
              <p className="mt-0.5 text-[10px] text-white/50 sm:mt-1">{c.chapter}</p>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10 sm:mt-2">
                <div
                  className="h-full rounded-full bg-brand-cyan"
                  style={{ width: `${c.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 sm:gap-3 sm:rounded-xl sm:px-4 sm:py-3">
        {[
          { icon: BookOpen, label: 'Enrolled', value: '12 courses' },
          { icon: Award, label: 'Certificates', value: '7 earned' },
          { icon: TrendingUp, label: 'This week', value: '4.5 hrs' },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex items-center gap-2 sm:gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-cyan/15 text-brand-cyan sm:h-7 sm:w-7">
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
              <div>
                <p className="text-[8px] uppercase tracking-wider text-white/45 sm:text-[9px]">
                  {s.label}
                </p>
                <p className="text-[10px] font-semibold sm:text-[11px]">{s.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
