'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { easingCurve } from '@/lib/utils';

const LINK_GROUPS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Careers', href: '/careers' },
      { label: 'Locations', href: '/locations' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI & Automation', href: '/services/ai' },
      { label: 'Software Engineering', href: '/services/engineering' },
      { label: 'Cloud & DevOps', href: '/services/cloud' },
      { label: 'Digital & Commerce', href: '/services/commerce' },
      { label: 'Enterprise Software', href: '/services/enterprise' },
      { label: 'Emerging Tech & IoT', href: '/services/emerging' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'RealHRsoft', href: '/products/realhrsoft' },
      { label: 'Real Chat', href: '/products/realchat' },
      { label: 'Real Learn', href: '/products/reallearn' },
      { label: 'Industries', href: '/industries' },
      { label: 'Talent & Engagement', href: '/talent' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Cookie Policy', href: '/legal/cookies' },
      { label: 'Security', href: '/legal/security' },
      { label: 'Sitemap', href: '/sitemap.xml' },
    ],
  },
];

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/aayulogic' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/aayulogic' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/aayulogic' },
];

const OFFICES = ['Toronto', 'Kathmandu', 'Louisville', 'Sydney', 'Dubai'];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white text-brand-navy">
      {/* ============ BACKDROP — subtle white wash ============ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 8% 5%, rgba(4,92,179,0.05) 0%, transparent 65%), radial-gradient(55% 60% at 95% 100%, rgba(0,194,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Top glowing edge — brand-blue → cyan */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,194,255,0.45) 30%, rgba(4,92,179,0.45) 70%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-px left-1/2 h-20 w-1/3 -translate-x-1/2 opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(0,194,255,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        {/* ============ MAIN GRID ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easingCurve.industrial }}
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-12"
        >
          {/* Brand identity */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Aayulogic"
              width={1623}
              height={429}
              className="mb-6 h-10 w-auto"
            />
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-600">
              Engineering the future through technology and innovation —
              building scalable digital systems for enterprises across five
              continents.
            </p>

            {/* Direct contact */}
            <a
              href="mailto:hello@aayulogic.com"
              className="group mb-7 inline-flex items-center gap-2.5 text-sm text-brand-navy transition-colors hover:text-brand-blue"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 transition-colors group-hover:border-brand-blue/40 group-hover:bg-brand-blue/5">
                <Mail className="h-3.5 w-3.5 text-brand-blue" />
              </span>
              hello@aayulogic.com
            </a>

            {/* Socials */}
            <div className="flex gap-2.5">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: easingCurve.industrial }}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-slate-50 transition-colors hover:border-brand-blue/40 hover:bg-brand-blue/5"
                >
                  <Icon className="h-4 w-4 text-slate-500 transition-colors group-hover:text-brand-blue" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINK_GROUPS.map((group) => (
            <div key={group.title} className="lg:col-span-1">
              <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => {
                  const isStatic =
                    link.href.startsWith('http') ||
                    link.href.startsWith('mailto:') ||
                    link.href.endsWith('.xml');
                  const linkClass =
                    'group inline-flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-brand-navy';
                  return (
                    <li key={link.label}>
                      {isStatic ? (
                        <a
                          href={link.href}
                          className={linkClass}
                          {...(link.href.startsWith('http')
                            ? {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              }
                            : {})}
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="h-3 w-3 -translate-x-1 text-brand-blue opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </a>
                      ) : (
                        <Link href={link.href} className={linkClass}>
                          <span>{link.label}</span>
                          <ArrowUpRight className="h-3 w-3 -translate-x-1 text-brand-blue opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* ============ OFFICES STRIP ============ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
              Global Offices
            </span>
            <span className="h-px w-6 bg-slate-300" />
            <div className="flex flex-wrap items-center gap-2">
              {OFFICES.map((city, i) => (
                <span key={city} className="inline-flex items-center gap-2">
                  <span className="text-[13px] text-slate-600">{city}</span>
                  {i < OFFICES.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-slate-500">
            <span className="relative flex h-1.5 w-1.5">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-emerald-500"
                animate={{ scale: [1, 2.4, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span>All systems operational</span>
          </div>
        </motion.div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs sm:flex-row">
          <p className="text-slate-500">
            © {currentYear} Aayulogic Systems Pvt. Ltd. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2 text-slate-500">
            <span>Engineered with precision</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Deployed globally</span>
          </p>
        </div>
      </div>

      {/* Bottom gradient hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,194,255,0.2) 50%, transparent 100%)',
        }}
      />
    </footer>
  );
}
