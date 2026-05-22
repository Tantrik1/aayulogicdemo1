'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BLOG_POSTS } from '@/lib/constants';
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

export function BlogSection() {
  const slidesPerView = useSlidesPerView();
  const total = BLOG_POSTS.length;

  const slides = useMemo(
    () => [...BLOG_POSTS, ...BLOG_POSTS.slice(0, slidesPerView)],
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
        {/* Header — centered, matches Team section style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={motionConfig.default}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Thought Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            Latest from our{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              engineering minds
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Field notes, deep dives, and engineering perspectives from the team
            shipping AI, cloud, and platform systems for enterprises worldwide.
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
              {slides.map((post, i) => (
                <div
                  key={`${post.title}-${i}`}
                  className="flex-none px-3"
                  style={{ width: `${slideWidth}%` }}
                  aria-hidden={i < index || i >= index + slidesPerView}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 lg:mt-10 flex items-center justify-between gap-4">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {BLOG_POSTS.map((_, i) => {
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

function BlogCard({ post }: { post: (typeof BLOG_POSTS)[number] }) {
  return (
    <a
      href="#"
      className="group relative h-full block rounded-2xl overflow-hidden border border-slate-300 ring-1 ring-brand-blue/15 bg-white shadow-[0_12px_32px_-12px_rgba(4,92,179,0.28),0_4px_12px_-4px_rgba(10,25,47,0.12)] hover:border-brand-blue/60 hover:ring-brand-blue/40 hover:shadow-[0_24px_56px_-16px_rgba(4,92,179,0.45),0_8px_20px_-6px_rgba(0,194,255,0.25)] transition-[box-shadow,border-color,--tw-ring-color] duration-500"
    >
      {/* Soft top sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />

      {/* Cover image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

        {/* Floating category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white bg-brand-blue/90 backdrop-blur-sm rounded-md">
            {post.category}
          </span>
        </div>

        {/* Read-article button — appears subtly on hover */}
        <div className="absolute bottom-3 right-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
          <span
            aria-label="Read article"
            className="w-9 h-9 rounded-full bg-white/85 backdrop-blur-md border border-white/70 flex items-center justify-center text-brand-navy group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="relative p-5 sm:p-6">
        <h3 className="text-base sm:text-[17px] font-bold text-brand-navy leading-snug tracking-tight line-clamp-2 group-hover:text-brand-blue transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-[11px] font-bold text-brand-blue uppercase tracking-[0.14em]">
          {post.category}
        </p>
        <p className="mt-3 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
          {post.date}
        </p>
      </div>
    </a>
  );
}
