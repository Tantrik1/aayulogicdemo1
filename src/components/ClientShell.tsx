'use client';

import { memo, useEffect, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const VideoBackdrop = memo(function VideoBackdrop() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
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
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (hasMountedRef.current) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
    hasMountedRef.current = true;
  }, [pathname]);

  return (
    <>
      <VideoBackdrop />
      <motion.div
        key={pathname}
        initial={hasMountedRef.current ? { opacity: 0.6 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex flex-col min-h-[100dvh] relative"
      >
        <main className="flex-1">{children}</main>
      </motion.div>
    </>
  );
}
