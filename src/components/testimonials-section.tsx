'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { cn, easingCurve } from '@/lib/utils';

type Testimonial = (typeof TESTIMONIALS)[number];

// ---------------------------------------------------------------------------
// Vertical Marquee primitive — self-contained, no external deps
// ---------------------------------------------------------------------------
interface VerticalMarqueeProps {
  items: Testimonial[];
  reverse?: boolean;
  duration?: string;
  className?: string;
  repeat?: number;
}

function VerticalMarquee({
  items,
  reverse = false,
  duration = '40s',
  className,
  repeat = 3,
}: VerticalMarqueeProps) {
  return (
    <div
      className={cn(
        'group flex flex-col overflow-hidden [--gap:1rem] [gap:var(--gap)]',
        className,
      )}
      style={{ ['--duration' as string]: duration }}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0 flex-col justify-around [gap:var(--gap)] animate-marquee-v',
            reverse && '[animation-direction:reverse]',
            'group-hover:[animation-play-state:paused]',
          )}
        >
          {items.map((t) => (
            <TestimonialCard key={`${i}-${t.author}`} testimonial={t} />
          ))}
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Testimonial card — Aayulogic glass style, light theme
// ---------------------------------------------------------------------------
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure
      className={cn(
        'relative w-64 sm:w-72 shrink-0 rounded-md',
        'border border-slate-200 bg-white p-5',
        'shadow-[0_10px_30px_-15px_rgba(10,25,47,0.10)]',
        'transition-colors duration-300',
        'hover:border-brand-blue/30',
      )}
    >
      <Quote
        className="absolute top-4 right-4 w-5 h-5 text-brand-cyan/30"
        fill="currentColor"
        aria-hidden
      />

      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-blue/20 flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <figcaption className="min-w-0">
          <p className="text-sm font-bold text-brand-navy truncate">
            {testimonial.author}
          </p>
          <p className="text-xs text-slate-500 truncate">
            {testimonial.role} ·{' '}
            <span className="text-brand-blue font-semibold">
              {testimonial.company}
            </span>
          </p>
        </figcaption>
      </div>

      <blockquote className="mt-3 text-[13px] leading-relaxed text-slate-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export function TestimonialsSection() {
  // Split the list across 4 columns so each lane feels distinct
  const chunk = (arr: Testimonial[], n: number) => {
    const out: Testimonial[][] = Array.from({ length: n }, () => []);
    arr.forEach((item, i) => out[i % n].push(item));
    return out;
  };
  const [colA, colB, colC, colD] = chunk(TESTIMONIALS, 4);

  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Soft branded background wash — subtle, stays white-feeling */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(0,194,255,0.06) 0%, transparent 60%), radial-gradient(50% 50% at 50% 100%, rgba(4,92,179,0.05) 0%, transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0A192F 1px, transparent 1px), linear-gradient(to bottom, #0A192F 1px, transparent 1px)',
          backgroundSize: '64px 64px',
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
            What Industry Leaders Say{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              About Working With Us
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Technology executives, product leaders, and enterprise teams discuss the impact of partnering with Aayulogic — from faster execution and stronger engineering capabilities to scalable systems built for long-term growth.
          </p>
        </motion.div>

        {/* 3D vertical marquee stage */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: easingCurve.industrial }}
          className="relative h-[520px] sm:h-[600px] lg:h-[680px] w-full overflow-hidden [perspective:1000px]"
        >
          {/* Inner 3D tilt — flattens on mobile so it stays readable */}
          <div
            className="
              flex h-full flex-row items-start justify-center
              gap-3 sm:gap-5 lg:gap-6
              [transform:translateZ(-20px)_rotateX(8deg)_rotateY(-6deg)_rotateZ(2deg)]
              sm:[transform:translateZ(-60px)_rotateX(14deg)_rotateY(-10deg)_rotateZ(6deg)]
              lg:[transform:translateZ(-100px)_rotateX(18deg)_rotateY(-12deg)_rotateZ(10deg)]
              [transform-origin:center_center]
            "
          >
            {/* Mobile: 2 columns. Tablet: 3. Desktop: 4 */}
            <VerticalMarquee
              items={colA}
              duration="36s"
              className="h-full"
            />
            <VerticalMarquee
              items={colB}
              reverse
              duration="44s"
              className="h-full"
            />
            <VerticalMarquee
              items={colC}
              duration="40s"
              className="hidden sm:flex h-full"
            />
            <VerticalMarquee
              items={colD}
              reverse
              duration="48s"
              className="hidden lg:flex h-full"
            />
          </div>

          {/* White edge fades — keep the section feeling fully white */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-white via-white/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
