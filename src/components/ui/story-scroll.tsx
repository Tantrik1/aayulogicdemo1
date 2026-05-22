'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

// =============================================================================
//  FlowSection — one pinned card. Background sits in a separate static layer so
//  the inner content can rotate/scale without dragging the bg with it.
// =============================================================================

export interface FlowSectionProps {
  className?: string;
  innerClassName?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  background?: React.ReactNode;
  'aria-label'?: string;
  'data-theme'?: 'dark' | 'light';
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  innerClassName,
  style = {},
  children,
  background,
  'aria-label': ariaLabel,
  'data-theme': dataTheme,
}) => (
  <section
    data-flow-section
    data-theme={dataTheme}
    aria-label={ariaLabel}
    className={cx(
      'relative isolate w-full overflow-hidden',
      // Phone keeps a comfortable height; desktop pins to viewport
      'min-h-[clamp(640px,88dvh,860px)]',
      'lg:min-h-[100dvh]',
      className,
    )}
  >
    {/* Static background layer — never rotates with the inner */}
    {background && (
      <div data-flow-bg className="absolute inset-0 z-0 pointer-events-none">
        {background}
      </div>
    )}

    {/* Inner content layer — receives the GSAP rotation/scale */}
    <div
      data-flow-inner
      className={cx(
        'relative z-10 flex w-full flex-col min-h-[inherit]',
        // Clear the sticky header (~64-80px) and breathe
        'px-5 pt-24 pb-12',
        'sm:px-8 sm:pt-28 sm:pb-16',
        'lg:px-[5vw] lg:pt-[clamp(6rem,9vw,7.5rem)] lg:pb-[clamp(2rem,5vw,4rem)]',
        'will-change-transform',
        innerClassName,
      )}
      style={{ transformOrigin: '0% 100%', ...style }}
    >
      {children}
    </div>
  </section>
);

// =============================================================================
//  FlowArt — pinned-stack engine. Each panel except the last gets pinned at the
//  viewport top; the next panel slides up and over with a subtle rotate/scale
//  "page-turn" entrance, anchored to its bottom-left corner.
// =============================================================================

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

const childCount = (children: React.ReactNode) => React.Children.count(children);

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return;

      const mm = gsap.matchMedia();

      // Desktop only — fine pointer, room for pinning
      mm.add('(min-width: 1024px) and (pointer: fine)', () => {
        const sections = Array.from(
          containerRef.current!.querySelectorAll<HTMLElement>('[data-flow-section]'),
        );
        if (sections.length === 0) return;

        sections.forEach((section, i) => {
          // Higher index = on top of stack
          gsap.set(section, { zIndex: i + 1 });

          // Pin every panel except the last so the next one covers it
          if (i < sections.length - 1) {
            ScrollTrigger.create({
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
            });
          }

          // Rotation entrance — panel 2 onward swings in from bottom-left
          if (i > 0) {
            const inner = section.querySelector<HTMLElement>('[data-flow-inner]');
            if (!inner) return;

            gsap.set(inner, {
              rotation: 6,
              scale: 0.94,
              yPercent: 4,
              transformOrigin: '0% 100%',
              force3D: true,
            });

            gsap.to(inner, {
              rotation: 0,
              scale: 1,
              yPercent: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'top 12%',
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            });
          }
        });

        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [childCount(children), reducedMotion] },
  );

  return (
    <div
      ref={containerRef}
      aria-label={ariaLabel}
      role="region"
      className={cx('relative w-full overflow-x-hidden', className)}
    >
      {children}
    </div>
  );
};

export default FlowArt;
