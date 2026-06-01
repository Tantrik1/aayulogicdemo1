'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import { cn, easingCurve } from '@/lib/utils';

type Testimonial = (typeof TESTIMONIALS)[number];

const AUTOPLAY_MS = 5500;
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure
      className={cn(
        'relative h-full flex flex-col rounded-2xl',
        'border border-slate-200 bg-white p-6 sm:p-7',
        'shadow-[0_12px_30px_-16px_rgba(10,25,47,0.12)]',
        'hover:border-brand-blue/30 transition-colors duration-300',
      )}
    >
      <Quote
        className="absolute top-5 right-5 w-7 h-7 text-brand-cyan/25"
        fill="currentColor"
        aria-hidden
      />

      <blockquote className="text-[15px] leading-relaxed text-slate-700 mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-brand-blue/20 flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-brand-navy truncate">
            {testimonial.author}
          </p>
          <p className="text-xs text-slate-500 truncate">
            {testimonial.role} ·{' '}
            <span className="text-brand-blue font-semibold">{testimonial.company}</span>
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  const slidesPerView = useSlidesPerView();
  const total = TESTIMONIALS.length;

  // Pad with copies of the head so the loop wraps seamlessly.
  const slides = useMemo(
    () => [...TESTIMONIALS, ...TESTIMONIALS.slice(0, slidesPerView)],
    [slidesPerView],
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

  // Snap back to start without transition once we've crossed the duplicates.
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
    <section className="relative bg-white py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(0,194,255,0.05) 0%, transparent 60%), radial-gradient(50% 50% at 50% 100%, rgba(4,92,179,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: easingCurve.industrial }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Voices of Partnership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
            What leaders say about{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              working with us
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Technology executives, product leaders, and enterprise teams on the impact of partnering with Aayulogic — faster execution, stronger engineering, systems built to last.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translate3d(${translate}%, 0, 0)`,
                transition: animate
                  ? `transform ${TRANSITION_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`
                  : 'none',
              }}
            >
              {slides.map((t, i) => (
                <div
                  key={`${t.author}-${i}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${slideWidth}%` }}
                >
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrow controls */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="hidden sm:flex absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="hidden sm:flex absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                setAnimate(true);
                setIndex(i);
              }}
              className={cn(
                'h-1.5 rounded-full transition-all',
                i === activeDot
                  ? 'w-8 bg-brand-blue'
                  : 'w-1.5 bg-slate-300 hover:bg-brand-blue/60',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
