'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  if (!mounted) {
    return null;
  }

  // Precompute 60 exact chronological markings around the dial face
  // Consists of 12 solid hour dots and 48 minute/second radial tick lines
  const dialTicks = Array.from({ length: 60 }, (_, i) => {
    const angle = (i * 6 - 90) * Math.PI / 180;
    const isHour = i % 5 === 0;
    const isMajorHour = i % 15 === 0; // 12, 3, 6, 9
    const radiusOuter = 260; // outer alignment boundary

    if (isHour) {
      return {
        type: 'dot',
        h: i / 5 + 1,
        cx: 400 + radiusOuter * Math.cos(angle),
        cy: 400 + radiusOuter * Math.sin(angle),
        r: isMajorHour ? 11 : 6.5,
        color: isMajorHour ? '#00E5FF' : 'rgba(0, 229, 255, 0.7)',
        key: `dot-${i}`,
      };
    } else {
      const radiusInner = 250; // Inner tick limit (makes 10px long lines)
      return {
        type: 'line',
        x1: 400 + radiusInner * Math.cos(angle),
        y1: 400 + radiusInner * Math.sin(angle),
        x2: 400 + radiusOuter * Math.cos(angle),
        y2: 400 + radiusOuter * Math.sin(angle),
        color: 'rgba(0, 229, 255, 0.35)',
        key: `line-${i}`,
      };
    }
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
        className="w-[36rem] h-[36rem] sm:w-[54rem] sm:h-[54rem] lg:w-[68rem] lg:h-[68rem] relative flex items-center justify-center opacity-100"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full text-brand-cyan filter drop-shadow-[0_0_20px_rgba(0,229,255,0.15)]"
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
          </defs>

          {/* ========================================== */}
          {/*          BACKGROUND DECORATIVE GRID        */}
          {/* ========================================== */}
          
          <g className="opacity-15">
            <circle cx="400" cy="400" r="390" fill="none" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="1" />
            <circle cx="400" cy="400" r="380" fill="none" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1.5" />
            <circle cx="400" cy="400" r="180" fill="none" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1" />
            <line x1="400" y1="15" x2="400" y2="785" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="1.5" strokeDasharray="4, 8" />
            <line x1="15" y1="400" x2="785" y2="400" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="1.5" strokeDasharray="4, 8" />
          </g>

          {/* ========================================== */}
          {/*           ROTATING CYBERNETIC DETAILS      */}
          {/* ========================================== */}

          {/* Outer Ring: Rotating HUD Marks (Clockwise) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: 'center' }}
            className="opacity-25"
          >
            <circle
              cx="400"
              cy="400"
              r="350"
              fill="none"
              stroke="rgba(0, 229, 255, 0.4)"
              strokeWidth="4"
              strokeDasharray="2, 24"
            />
          </motion.g>

          {/* Inner Ring: Continuous Radar Sweep */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: 'center' }}
            className="opacity-15"
          >
            <path
              d="M400,400 L400,140 A260,260 0 0,1 584,215 Z"
              fill="rgba(0, 229, 255, 0.05)"
            />
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="140"
              stroke="rgba(0, 229, 255, 0.4)"
              strokeWidth="1.5"
              filter="url(#glow)"
            />
          </motion.g>

          {/* ========================================== */}
          {/*      60 DIAL MARKINGS (REFERENCE ALIGNED)    */}
          {/* ========================================== */}
          
          <g className="opacity-40">
            {dialTicks.map((t) => {
              if (t.type === 'dot') {
                return (
                  <circle
                    key={t.key}
                    cx={t.cx}
                    cy={t.cy}
                    r={t.r}
                    fill={t.color}
                    filter="url(#glow)"
                  />
                );
              } else {
                return (
                  <line
                    key={t.key}
                    x1={t.x1}
                    y1={t.y1}
                    x2={t.x2}
                    y2={t.y2}
                    stroke={t.color}
                    strokeWidth="1.5"
                  />
                );
              }
            })}
          </g>

          {/* ========================================== */}
          {/*          DYNAMIC MONOSPACE DIGITAL READOUT */}
          {/* ========================================== */}
          
          <g className="opacity-30">
            <text
              x="400"
              y="575"
              fill="rgba(0, 229, 255, 0.75)"
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
              fill="rgba(0, 229, 255, 0.4)"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="3"
              textAnchor="middle"
            >
              UTC OVERLAP SYSTEM
            </text>
          </g>

          {/* ========================================== */}
          {/*      SOLID CONTRAST THREE HANDS            */}
          {/* ========================================== */}

          {/* 
            BUG SOLUTION 1: Standard linearGradients fail on perfectly straight 
            vertical lines with zero bounding width. We replaced gradients with 
            solid, high-contrast, beautiful cyber-brand colors.
 
            BUG SOLUTION 2: Direct CSS transformOrigin on SVG groups can be buggy 
            in standard browsers. By passing transformOrigin: 'center' in style,
            Framer Motion forces pin-point, wobble-free rotation.
 
            BUG SOLUTION 3: Opposing transparent lines are retained to maintain
            perfect geometric symmetry and prevent rendering shifts.
          */}

          {/* 1. HOUR HAND (Solid White, Bold) */}
          <motion.g
            animate={{ rotate: hourAngle }}
            transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            style={{ transformOrigin: 'center' }}
            className="opacity-90"
          >
            {/* Visible Hour Hand */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="245"
              stroke="#FFFFFF"
              strokeWidth="9"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            {/* Symmetrical Balancing Vector (Invisible) */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="555"
              stroke="transparent"
              strokeWidth="9"
            />
          </motion.g>

          {/* 2. MINUTE HAND (Solid Cyan, Long, Open Ring near Tip) */}
          <motion.g
            animate={{ rotate: minAngle }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            style={{ transformOrigin: 'center' }}
            className="opacity-90"
          >
            {/* Visible Minute Hand */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="170"
              stroke="#00E5FF"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            {/* Open circle at the tip as in reference image */}
            <circle
              cx="400"
              cy="195"
              r="11"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="3.5"
              filter="url(#glow)"
            />
            {/* Symmetrical Balancing Vector (Invisible) */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="630"
              stroke="transparent"
              strokeWidth="6"
            />
          </motion.g>

          {/* 3. SECONDS HAND (Solid Neon-Orange/Red Chrono Hand) */}
          <motion.g
            animate={{ rotate: secAngle }}
            transition={{ type: 'spring', stiffness: 220, damping: 13 }}
            style={{ transformOrigin: 'center' }}
            className="opacity-95"
          >
            {/* Visible thin neon-orange hand */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="115"
              stroke="#FF3D00"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            {/* Open circle as in reference image */}
            <circle
              cx="400"
              cy="145"
              r="9.5"
              fill="none"
              stroke="#FF3D00"
              strokeWidth="2.5"
              filter="url(#glow)"
            />
            {/* Symmetrical Balancing Vector (Invisible) */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="685"
              stroke="transparent"
              strokeWidth="3.5"
            />
          </motion.g>

          {/* ========================================== */}
          {/*                 CENTER AXLE CAP            */}
          {/* ========================================== */}
          
          <g className="opacity-95">
            <circle cx="400" cy="400" r="18" fill="#0A0D14" stroke="#00E5FF" strokeWidth="3.5" filter="url(#glow)" />
            <circle cx="400" cy="400" r="8.5" fill="#00E5FF" />
            <circle cx="400" cy="400" r="3" fill="#FFFFFF" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
