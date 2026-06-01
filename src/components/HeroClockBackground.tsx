'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HeroClockBackground() {
  const [mounted, setMounted] = useState(false);
  const [secAngle, setSecAngle] = useState(0);
  const [minAngle, setMinAngle] = useState(0);
  const [hourAngle, setHourAngle] = useState(0);
  const [digitalTime, setDigitalTime] = useState('');
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  // Mount exclusively on client to avoid Next.js SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Time & Angles Hook (100ms rapid polling to maintain absolute real-time ticking)
  useEffect(() => {
    if (!mounted) return;

    const startTime = Date.now();
    const now = new Date();
    // Calculate initial accumulated seconds to prevent wrap-around reverse rotation glitch
    const initialSecs = now.getSeconds() + now.getMinutes() * 60 + (now.getHours() % 12) * 3600;

    const updateAngles = () => {
      const current = Date.now();
      const elapsedSeconds = Math.floor((current - startTime) / 1000);
      const totalSecs = initialSecs + elapsedSeconds;

      const d = new Date();
      const s = d.getSeconds();
      const m = d.getMinutes();
      const h = d.getHours();

      // Seconds hand rotates continuously clockwise (monotonically increasing)
      setSecAngle(totalSecs * 6);
      // Minutes and Hours rotate based on exact current times
      setMinAngle(m * 6 + s * 0.1);
      setHourAngle((h % 12) * 30 + m * 0.5);
    };

    updateAngles();
    const interval = setInterval(updateAngles, 100);
    return () => clearInterval(interval);
  }, [mounted]);

  // 60 FPS Milliseconds Digital Readout Hook
  useEffect(() => {
    if (!mounted) return;

    let frameId: number;
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');

      setDigitalTime(`${h}:${m}:${s}:${ms}`);
      frameId = requestAnimationFrame(updateTime);
    };
    frameId = requestAnimationFrame(updateTime);
    return () => cancelAnimationFrame(frameId);
  }, [mounted]);

  // 3D Parallax Mouse Move Hook
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Get normalized coordinate offset from center (-0.5 to 0.5)
      const nx = e.clientX / innerWidth - 0.5;
      const ny = e.clientY / innerHeight - 0.5;

      // Soft tilt (max 8 degrees)
      setTiltX(-ny * 8);
      setTiltY(nx * 8);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  // Render nothing during server-side pre-rendering to prevent hydration mismatches
  if (!mounted) {
    return null;
  }

  // Pre-calculate exact polar coordinates for the 12 hour indicators (Reference watch face)
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const h = i + 1;
    const isMajor = h % 3 === 0; // 12, 3, 6, 9 are major nodes
    const angle = (h * 30 - 90) * Math.PI / 180;
    const radius = 260; // Tick circle boundary
    return {
      h,
      cx: 400 + radius * Math.cos(angle),
      cy: 400 + radius * Math.sin(angle),
      r: isMajor ? 12 : 6,
    };
  });

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none overflow-hidden bg-transparent"
      style={{ perspective: 1200 }}
    >
      {/* Responsive container with springy parallax tilt */}
      <motion.div
        animate={{ rotateX: tiltX, rotateY: tiltY }}
        transition={{ type: 'spring', stiffness: 75, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-[36rem] h-[36rem] sm:w-[54rem] sm:h-[54rem] lg:w-[68rem] lg:h-[68rem] relative flex items-center justify-center opacity-[0.16]"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full text-brand-cyan filter drop-shadow-[0_0_20px_rgba(0,229,255,0.12)]"
          aria-hidden
        >
          <defs>
            {/* Soft Glow filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* High-intensity Glow filter */}
            <filter id="strongGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Premium linear gradients */}
            <linearGradient id="hourGrad" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#0078FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="minGrad" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#0052FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* ========================================== */}
          {/*          BACKGROUND COORDINATE SYSTEM      */}
          {/* ========================================== */}
          
          {/* Concentric grids */}
          <circle cx="400" cy="400" r="390" fill="none" stroke="rgba(0, 229, 255, 0.02)" strokeWidth="1" />
          <circle cx="400" cy="400" r="380" fill="none" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="1.5" />
          <circle cx="400" cy="400" r="180" fill="none" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="1" />
          
          {/* Axis lines */}
          <line x1="400" y1="15" x2="400" y2="785" stroke="rgba(0, 229, 255, 0.02)" strokeWidth="1.5" strokeDasharray="4, 8" />
          <line x1="15" y1="400" x2="785" y2="400" stroke="rgba(0, 229, 255, 0.02)" strokeWidth="1.5" strokeDasharray="4, 8" />

          {/* RIPPLE WAVE PULSING ON EVERY TICK */}
          <AnimatePresence initial={false}>
            <motion.circle
              key={secAngle}
              cx="400"
              cy="400"
              r="260"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2"
              filter="url(#strongGlow)"
              initial={{ scale: 0.35, opacity: 0.7 }}
              animate={{ scale: 1.4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.95, ease: 'easeOut' }}
            />
          </AnimatePresence>

          {/* ========================================== */}
          {/*           ROTATING CYBERNETIC RINGS        */}
          {/* ========================================== */}

          {/* Outer Ring: Rotating Gear & Compass Bearings (Clockwise) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Concentric tick marks */}
            <circle
              cx="400"
              cy="400"
              r="350"
              fill="none"
              stroke="rgba(0, 229, 255, 0.06)"
              strokeWidth="4"
              strokeDasharray="2, 16"
            />
          </motion.g>

          {/* Middle Ring: Slowly Rotating HUD Degrees (Counter-Clockwise) */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '400px 400px' }}
          >
            <circle
              cx="400"
              cy="400"
              r="310"
              fill="none"
              stroke="rgba(0, 229, 255, 0.03)"
              strokeWidth="1.5"
              strokeDasharray="40, 40"
            />
          </motion.g>

          {/* Inner Ring: Continuous Radar Sweep */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Glowing sweep trail */}
            <path
              d="M400,400 L400,140 A260,260 0 0,1 584,215 Z"
              fill="rgba(0, 229, 255, 0.012)"
            />
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="140"
              stroke="rgba(0, 229, 255, 0.12)"
              strokeWidth="1.5"
              filter="url(#glow)"
            />
          </motion.g>

          {/* ========================================== */}
          {/*      12 DIAL TICKS (REFERENCE ALIGNED)     */}
          {/* ========================================== */}
          {ticks.map((t) => (
            <circle
              key={t.h}
              cx={t.cx}
              cy={t.cy}
              r={t.r}
              fill={t.h % 3 === 0 ? 'rgba(0, 229, 255, 0.85)' : 'rgba(0, 229, 255, 0.35)'}
              filter={t.h % 3 === 0 ? 'url(#glow)' : ''}
            />
          ))}

          {/* ========================================== */}
          {/*          DYNAMIC MONOSPACE DIGITAL READOUT */}
          {/* ========================================== */}
          
          <text
            x="400"
            y="575"
            fill="rgba(0, 229, 255, 0.45)"
            fontSize="18"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="6"
            textAnchor="middle"
            filter="url(#glow)"
          >
            {digitalTime}
          </text>
          
          <text
            x="400"
            y="600"
            fill="rgba(0, 229, 255, 0.18)"
            fontSize="9"
            fontFamily="monospace"
            letterSpacing="3"
            textAnchor="middle"
          >
            UTC OVERLAP SYSTEM
          </text>

          {/* ========================================== */}
          {/*      PERFECTLY BALANCED THREE HANDS        */}
          {/* ========================================== */}

          {/* 
            BUG SOLUTION: By extending an invisible/transparent identical vector
            in the exact opposite (180 deg) direction, we force the bounding box 
            to be perfectly centered at (400, 400). This guarantees absolutely 
            perfect wobbyless transform-origin rotation.
          */}

          {/* 1. HOUR HAND */}
          <motion.g
            animate={{ rotate: hourAngle }}
            transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Visible Hour Hand (Medium length, solid, gradient) */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="240"
              stroke="url(#hourGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            {/* Symmetrical Balancing Vector (Invisible) */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="560"
              stroke="transparent"
              strokeWidth="8"
            />
          </motion.g>

          {/* 2. MINUTE HAND */}
          <motion.g
            animate={{ rotate: minAngle }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Visible Minute Hand (Long, solid, gradient) */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="170"
              stroke="url(#minGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            {/* Open circle at the tip as in reference image */}
            <circle
              cx="400"
              cy="190"
              r="10"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="3"
              filter="url(#glow)"
            />
            {/* Symmetrical Balancing Vector (Invisible) */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="630"
              stroke="transparent"
              strokeWidth="5"
            />
          </motion.g>

          {/* 3. SECONDS HAND (Spring Snap Recoil Ticking) */}
          <motion.g
            animate={{ rotate: secAngle }}
            transition={{ type: 'spring', stiffness: 220, damping: 13 }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Visible thin neon-cyan hand */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="120"
              stroke="#00E5FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            {/* Open circle as in reference image */}
            <circle
              cx="400"
              cy="150"
              r="8"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2"
              filter="url(#glow)"
            />
            {/* Symmetrical Balancing Vector (Invisible) */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="680"
              stroke="transparent"
              strokeWidth="2.5"
            />
          </motion.g>

          {/* ========================================== */}
          {/*                 CENTER AXLE CAP            */}
          {/* ========================================== */}
          
          <circle cx="400" cy="400" r="18" fill="#0A0D14" stroke="#00E5FF" strokeWidth="3" filter="url(#glow)" />
          <circle cx="400" cy="400" r="8" fill="#00E5FF" />
          <circle cx="400" cy="400" r="3" fill="#FFFFFF" />
        </svg>
      </motion.div>
    </div>
  );
}
