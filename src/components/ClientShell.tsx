'use client';

import { memo, useEffect, type ReactNode } from 'react';
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
      <motion.div
        key={pathname}
        initial={{ opacity: 0.55 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex flex-col min-h-[100dvh] relative"
      >
        <main className="flex-1">{children}</main>
      </motion.div>
    </>
  );
}
