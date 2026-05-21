'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TEAM_MEMBERS } from '@/lib/constants';
import { motionConfig } from '@/lib/utils';

const AUTOPLAY_MS = 3000;
const TRANSITION_MS = 700;

function useSlidesPerView() {
  const [n, setN] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setN(1);
      else if (w < 1024) setN(2);
      else if (w < 1280) setN(3);
      else setN(4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return n;
}

export function TeamSection() {
  const slidesPerView = useSlidesPerView();
  const total = TEAM_MEMBERS.length;

  const slides = useMemo(
    () => [...TEAM_MEMBERS, ...TEAM_MEMBERS.slice(0, slidesPerView)],
    [slidesPerView]
  );

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const indexRef = useRef(index);
  indexRef.current = index;

  const next = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    setAnimate(true);
    setIndex((i) => (i <= 0 ? total - 1 : i - 1));
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, next, slidesPerView]);

  useEffect(() => {
    if (index >= total) {
      const t = window.setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, TRANSITION_MS);
      return () => window.clearTimeout(t);
    }
    if (!animate) {
      const raf = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [index, total, animate]);

  const slideWidth = 100 / slidesPerView;
  const translate = -(index * slideWidth);
  const activeDot = ((index % total) + total) % total;

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden">
      {/* Ambient */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 10% 10%, rgba(0,194,255,0.05) 0%, transparent 70%), radial-gradient(40% 30% at 95% 90%, rgba(4,92,179,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header — centered, matches About / Tech-Stack section style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            The People Behind The Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Senior engineers,{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              empathetic leaders
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our leadership team has shipped products at Google, DeepMind, Goldman Sachs,
            and Fortune 100 enterprises. Now they&apos;re building yours.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionConfig.default}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="overflow-hidden -mx-3">
            <div
              className="flex"
              style={{
                transform: `translate3d(${translate}%, 0, 0)`,
                transition: animate
                  ? `transform ${TRANSITION_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`
                  : 'none',
                willChange: 'transform',
              }}
            >
              {slides.map((member, i) => (
                <div
                  key={`${member.name}-${i}`}
                  className="flex-none px-3"
                  style={{ width: `${slideWidth}%` }}
                  aria-hidden={i < index || i >= index + slidesPerView}
                >
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 lg:mt-10 flex items-center justify-between gap-4">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {TEAM_MEMBERS.map((_, i) => {
                const isActive = i === activeDot;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setAnimate(true);
                      setIndex(i);
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                    className="group p-1.5 -m-1.5"
                  >
                    <span
                      className={`block h-1 rounded-full transition-all duration-500 ${
                        isActive
                          ? 'w-8 bg-brand-blue'
                          : 'w-2 bg-slate-300 group-hover:bg-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md flex items-center justify-center text-brand-navy hover:border-brand-blue/40 hover:text-brand-blue hover:shadow-[0_8px_24px_-12px_rgba(4,92,179,0.35)] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md flex items-center justify-center text-brand-navy hover:border-brand-blue/40 hover:text-brand-blue hover:shadow-[0_8px_24px_-12px_rgba(4,92,179,0.35)] transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function TeamCard({
  member,
}: {
  member: (typeof TEAM_MEMBERS)[number];
}) {
  return (
    <article
      className="group relative h-full rounded-2xl overflow-hidden border border-white/60 ring-1 ring-slate-200/70 bg-white/55 backdrop-blur-xl shadow-[0_10px_40px_-18px_rgba(10,25,47,0.18)] hover:ring-brand-blue/30 hover:shadow-[0_24px_50px_-20px_rgba(4,92,179,0.22)] transition-[box-shadow,border-color] duration-500"
    >
      {/* Soft top sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />

      {/* Avatar */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        {/* Bottom fade for legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, transparent 55%, rgba(10,25,47,0.55) 100%)',
          }}
        />

        {/* Social — appears subtly on hover */}
        <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
          {[Linkedin, Twitter, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Social link"
              className="w-8 h-8 rounded-full bg-white/85 backdrop-blur-md border border-white/70 flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="relative p-5 sm:p-6">
        <h3 className="text-base sm:text-[17px] font-bold text-brand-navy leading-tight tracking-tight">
          {member.name}
        </h3>
        <p className="mt-1 text-[11px] font-bold text-brand-blue uppercase tracking-[0.14em]">
          {member.role}
        </p>
        <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
          {member.bio}
        </p>
      </div>
    </article>
  );
}
