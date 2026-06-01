'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CASE_STUDIES } from '@/lib/constants';
import { motionConfig } from '@/lib/utils';

const AUTOPLAY_MS = 3500;
const TRANSITION_MS = 700;

function useSlidesPerView() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setN(1);
      else if (w < 1024) setN(2);
      else setN(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return n;
}

export function CaseStudies() {
  const slidesPerView = useSlidesPerView();
  const total = CASE_STUDIES.length;

  const slides = useMemo(
    () => [...CASE_STUDIES, ...CASE_STUDIES.slice(0, slidesPerView)],
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
    <section
      data-theme="dark"
      className="relative py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden bg-transparent"
    >
      {/* Dynamic Fading Video Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(10,25,47,0.93) 12%, rgba(10,25,47,0.7) 50%, rgba(10,25,47,0.93) 88%, #FFFFFF 100%)'
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 10% 10%, rgba(0,194,255,0.2) 0%, transparent 70%), radial-gradient(40% 30% at 95% 90%, rgba(4,92,179,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Real engineering.{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              Real complexity.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-350 leading-relaxed">
            Anonymised for confidentiality. Named versions available on request for serious conversations.
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
              {slides.map((study, i) => (
                <div
                  key={`${study.title}-${i}`}
                  className="flex-none px-3"
                  style={{ width: `${slideWidth}%` }}
                  aria-hidden={i < index || i >= index + slidesPerView}
                >
                  <CaseStudyCard study={study} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 lg:mt-10 flex items-center justify-between gap-4">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {CASE_STUDIES.map((_, i) => {
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
                          ? 'w-8 bg-brand-cyan'
                          : 'w-2 bg-slate-700 group-hover:bg-slate-500'
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
                className="w-10 h-10 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white hover:border-brand-cyan/40 hover:text-brand-cyan hover:shadow-[0_8px_24px_-12px_rgba(0,194,255,0.35)] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white hover:border-brand-cyan/40 hover:text-brand-cyan hover:shadow-[0_8px_24px_-12px_rgba(0,194,255,0.35)] transition-all"
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

function CaseStudyCard({ study }: { study: (typeof CASE_STUDIES)[number] }) {
  return (
    <a
      href="#"
      className="group relative h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-brand-cyan/40 hover:bg-slate-900/60 hover:shadow-[0_20px_45px_-12px_rgba(0,194,255,0.25)] transition-all duration-500"
    >
      {/* Soft top sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      {/* Cover image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        {/* Bottom fade overlay for legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, transparent 55%, rgba(10,25,47,0.7) 100%)',
          }}
        />

        {/* Floating metric badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy bg-brand-cyan rounded-md">
            {study.metric}
          </span>
        </div>

        {/* Read-article button — appears subtly on hover */}
        <div className="absolute bottom-3 right-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
          <span
            aria-label="Read case study"
            className="w-9 h-9 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-cyan group-hover:text-brand-navy group-hover:border-brand-cyan transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="relative flex flex-col flex-1 p-5 sm:p-6 border-t border-white/5">
        <h3 className="text-base sm:text-[17px] font-bold text-slate-100 leading-snug tracking-tight line-clamp-2 group-hover:text-brand-cyan transition-colors">
          {study.title}
        </h3>
        <p className="mt-3 text-xs sm:text-[13px] text-slate-400 leading-relaxed line-clamp-3">
          {study.description}
        </p>

        {/* Tags */}
        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
          {study.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-cyan bg-brand-cyan/10 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
