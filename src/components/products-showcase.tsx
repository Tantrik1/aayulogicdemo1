'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { easingCurve, motionConfig } from '@/lib/utils';

// =============================================================================
//  Data
// =============================================================================

type Product = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoAlt: string;
  href: string;
  highlights: string[];
};

const PRODUCTS: Product[] = [
  {
    index: '01',
    name: 'RealHRsoft',
    tagline: 'HR Intelligence Platform',
    description:
      'Payroll, attendance, performance, and analytics — running every day for hundreds of organizations across South Asia.',
    logo: '/realhrsoft.png',
    logoAlt: 'RealHRsoft',
    href: '/products/realhrsoft',
    highlights: ['Payroll automation', 'Attendance & leave', 'Performance reviews'],
  },
  {
    index: '02',
    name: 'Real Chat',
    tagline: 'Secure Team Messaging',
    description:
      'Enterprise collaboration with end-to-end encryption, voice and video, and native HRsoft sign-on — built for distributed teams.',
    logo: '/realchat.png',
    logoAlt: 'Real Chat',
    href: '/products/realchat',
    highlights: ['End-to-end encrypted', 'Voice & video calls', 'HRsoft SSO'],
  },
  {
    index: '03',
    name: 'Real Learn',
    tagline: 'Learning Management System',
    description:
      'Structured training and continuous upskilling — from onboarding paths to compliance certification with real completion analytics.',
    logo: '/reallearn.png',
    logoAlt: 'Real Learn',
    href: '/products/reallearn',
    highlights: ['Learning paths', 'Compliance training', 'Skill analytics'],
  },
];

// =============================================================================
//  Section
// =============================================================================

export function ProductsShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: easingCurve.industrial },
    },
  };

  return (
    <section
      id="products-showcase"
      aria-label="Our products"
      className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Ambient backdrop — matches sibling sections */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 80% 10%, rgba(0,194,255,0.06) 0%, transparent 70%), radial-gradient(40% 30% at 0% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
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
            Three platforms running in production every day — built, operated, and iterated by the same engineers who partner with you.
          </p>
        </motion.div>

        {/* =============== CARDS =============== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.index} product={product} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProductsShowcase;

// =============================================================================
//  Card
// =============================================================================

function ProductCard({
  product,
  variants,
}: {
  product: Product;
  // Variants object accepted from the parent motion.div
  variants: Parameters<typeof motion.a>[0]['variants'];
}) {
  return (
    <motion.a
      variants={variants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: easingCurve.industrial }}
      href={product.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-blue/10 bg-white/80 p-7 backdrop-blur transition-colors hover:border-brand-cyan/40 hover:bg-white hover:shadow-[0_25px_50px_-15px_rgba(4,92,179,0.25)] sm:p-8"
    >
      {/* Top luminous line on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(0,194,255,0.55), transparent)',
        }}
      />
      {/* Corner accent glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle, rgba(0,194,255,0.30) 0%, transparent 70%)',
        }}
      />

      {/* Index badge */}
      <div className="relative mb-6 flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-[11px] font-bold tracking-tight text-brand-blue">
          {product.index}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-brand-blue/20 to-transparent" />
      </div>

      {/* Logo */}
      <div className="relative mb-5 flex" style={{ height: 'clamp(2.25rem, 3.2vw, 2.75rem)' }}>
        <Image
          src={product.logo}
          alt={product.logoAlt}
          width={1024}
          height={230}
          className="h-full w-auto object-contain object-left"
        />
      </div>

      {/* Tagline */}
      <p className="relative mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
        {product.tagline}
      </p>

      {/* Title */}
      <h3 className="relative mb-3 text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.65rem]">
        {product.name}
      </h3>

      {/* Description */}
      <p className="relative mb-6 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
        {product.description}
      </p>

      {/* Highlights */}
      <ul className="relative mb-7 space-y-2 border-t border-slate-100 pt-5">
        {product.highlights.map((h) => (
          <li
            key={h}
            className="flex items-center gap-2.5 text-[13px] text-slate-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            {h}
          </li>
        ))}
      </ul>

      {/* CTA — sits at bottom */}
      <div className="relative mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue transition-colors group-hover:text-brand-navy">
          Learn More
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue/15 text-brand-blue transition-all duration-300 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white">
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
        </span>
      </div>
    </motion.a>
  );
}
