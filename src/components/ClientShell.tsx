'use client';

import { memo, useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { easingCurve } from '@/lib/utils';

const VideoBackdrop = memo(function VideoBackdrop() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/herobackground-poster.jpg"
      className="fixed inset-0 w-full h-full object-cover -z-10"
      aria-hidden
      style={{ pointerEvents: 'none' }}
    >
      <source src="/herobackground.mp4" type="video/mp4" />
    </video>
  );
});

export function ClientShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <>
      <VideoBackdrop />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: easingCurve.industrial }}
          className="flex flex-col min-h-[100dvh] relative"
        >
          <main className="flex-1">{children}</main>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
