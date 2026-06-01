'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HeroClockBackground() {
  const [secAngle, setSecAngle] = useState(0);
  const [minAngle, setMinAngle] = useState(0);
  const [hourAngle, setHourAngle] = useState(0);
  const [digitalTime, setDigitalTime] = useState('');
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  // Time & Angles Hook
  useEffect(() => {
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

      // Seconds hand rotates continuously clockwise
      setSecAngle(totalSecs * 6);
      // Minutes and Hours rotate based on exact current times
      setMinAngle(m * 6 + s * 0.1);
      setHourAngle((h % 12) * 30 + m * 0.5);
    };

    updateAngles();
    const interval = setInterval(updateAngles, 1000);
    return () => clearInterval(interval);
  }, []);

  // 60 FPS Milliseconds Digital Readout Hook
  useEffect(() => {
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
  }, []);

  // 3D Parallax Mouse Move Hook
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Get normalized coordinate offset from center (-0.5 to 0.5)
      const nx = e.clientX / innerWidth - 0.5;
      const ny = e.clientY / innerHeight - 0.5;

      // Soft tilt (max 10 degrees)
      setTiltX(-ny * 10);
      setTiltY(nx * 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
              <stop offset="0%" stopColor="#0078FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="minGrad" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#0052FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* ========================================== */}
          {/*          BACKGROUND COORDINATE SYSTEM      */}
          {/* ========================================== */}
          
          {/* Concentric grids */}
          <circle cx="400" cy="400" r="390" fill="none" stroke="rgba(0, 229, 255, 0.02)" strokeWidth="1" />
          <circle cx="400" cy="400" r="380" fill="none" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="1.5" />
          <circle cx="400" cy="400" r="280" fill="none" stroke="rgba(0, 229, 255, 0.02)" strokeWidth="1" strokeDasharray="4, 16" />
          <circle cx="400" cy="400" r="180" fill="none" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="1" />
          
          {/* Axis lines */}
          <line x1="400" y1="15" x2="400" y2="785" stroke="rgba(0, 229, 255, 0.02)" strokeWidth="1.5" strokeDasharray="4, 8" />
          <line x1="15" y1="400" x2="785" y2="400" stroke="rgba(0, 229, 255, 0.02)" strokeWidth="1.5" strokeDasharray="4, 8" />

          {/* Dynamic 45-degree angle lines */}
          <line x1="120" y1="120" x2="680" y2="680" stroke="rgba(0, 229, 255, 0.015)" strokeWidth="1" strokeDasharray="2, 6" />
          <line x1="120" y1="680" x2="680" y2="120" stroke="rgba(0, 229, 255, 0.015)" strokeWidth="1" strokeDasharray="2, 6" />

          {/* RIPPLE WAVE PULSING ON EVERY CRITICAL SECOND TICK */}
          <AnimatePresence initial={false}>
            <motion.circle
              key={secAngle}
              cx="400"
              cy="400"
              r="280"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2.5"
              filter="url(#strongGlow)"
              initial={{ scale: 0.35, opacity: 0.8 }}
              animate={{ scale: 1.4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          </AnimatePresence>

          {/* ========================================== */}
          {/*           ROTATING CYBERNETIC RINGS        */}
          {/* ========================================== */}

          {/* Outer Ring: Rotating Gear & Compass Bearings (Clockwise) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 210, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Concentric tick marks */}
            <circle
              cx="400"
              cy="400"
              r="360"
              fill="none"
              stroke="rgba(0, 229, 255, 0.08)"
              strokeWidth="6"
              strokeDasharray="4, 20"
            />
            {/* Solid accent blocks */}
            <circle cx="400" cy="40" r="5" fill="#00E5FF" filter="url(#glow)" />
            <circle cx="400" cy="760" r="5" fill="#00E5FF" />
            <circle cx="40" cy="400" r="5" fill="#00E5FF" />
            <circle cx="760" cy="400" r="5" fill="#00E5FF" />
          </motion.g>

          {/* Middle Ring: Slowly Rotating HUD Degrees (Counter-Clockwise) */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '400px 400px' }}
          >
            <circle
              cx="400"
              cy="400"
              r="320"
              fill="none"
              stroke="rgba(0, 229, 255, 0.12)"
              strokeWidth="2.5"
              strokeDasharray="2, 8"
            />
            <circle
              cx="400"
              cy="400"
              r="310"
              fill="none"
              stroke="rgba(0, 229, 255, 0.04)"
              strokeWidth="1.5"
              strokeDasharray="60, 40"
            />
            <g transform="translate(400, 400)">
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <text
                  key={deg}
                  x="0"
                  y="-328"
                  transform={`rotate(${deg})`}
                  fill="rgba(0, 229, 255, 0.25)"
                  fontSize="8"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {String(deg).padStart(3, '0')}
                </text>
              ))}
            </g>
          </motion.g>

          {/* Inner Ring: Continuous Radar Sweep */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Glowing sweep trail */}
            <path
              d="M400,400 L400,120 A280,280 0 0,1 598,202 Z"
              fill="rgba(0, 229, 255, 0.015)"
            />
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="120"
              stroke="rgba(0, 229, 255, 0.15)"
              strokeWidth="2"
              filter="url(#glow)"
            />
          </motion.g>

          {/* Inner solid dial line */}
          <circle cx="400" cy="400" r="280" fill="none" stroke="rgba(0, 229, 255, 0.06)" strokeWidth="2.5" />
          <circle cx="400" cy="400" r="270" fill="none" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="1" strokeDasharray="10, 10" />

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
            fill="rgba(0, 229, 255, 0.2)"
            fontSize="9"
            fontFamily="monospace"
            letterSpacing="3"
            textAnchor="middle"
          >
            UTC OVERLAP SYSTEM
          </text>

          {/* ========================================== */}
          {/*      perfectly balanced clock hands        */}
          {/* ========================================== */}

          {/* 
            BUG SOLUTION: By extending an invisible/transparent identical vector
            in the exact opposite (180 deg) direction, we force the bounding box 
            to be perfectly centered at (400, 400). This guarantees absolutely 
            perfect wobbyless transform-origin rotation.
          */}

          {/* HOUR HAND */}
          <motion.g
            animate={{ rotate: hourAngle }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Visible Hour Hand */}
            <path
              d="M394,400 L396,230 L404,230 L406,400 Z"
              fill="url(#hourGrad)"
              filter="url(#glow)"
            />
            {/* Symmetrical Balancing Vector (Invisible) */}
            <path
              d="M394,400 L396,570 L404,570 L406,400 Z"
              fill="transparent"
            />
          </motion.g>

          {/* MINUTE HAND */}
          <motion.g
            animate={{ rotate: minAngle }}
            transition={{ type: 'spring', stiffness: 110, damping: 15 }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Visible Minute Hand */}
            <path
              d="M396,400 L398,160 L402,160 L404,400 Z"
              fill="url(#minGrad)"
              filter="url(#glow)"
            />
            <circle cx="400" cy="180" r="3.5" fill="#00E5FF" filter="url(#glow)" />
            {/* Symmetrical Balancing Vector (Invisible) */}
            <path
              d="M396,400 L398,640 L402,640 L404,400 Z"
              fill="transparent"
            />
          </motion.g>

          {/* SECONDS HAND (Spring Snap Recoil Ticking) */}
          <motion.g
            animate={{ rotate: secAngle }}
            transition={{ type: 'spring', stiffness: 220, damping: 12 }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Visible thin neon-cyan hand */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="90"
              stroke="#00E5FF"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            {/* Center axle pointer details */}
            <circle
              cx="400"
              cy="130"
              r="10"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <circle cx="400" cy="130" r="3.5" fill="#00E5FF" />
            
            {/* Decorative counterweight tail */}
            <circle cx="400" cy="450" r="6" fill="#00E5FF" />
            <circle cx="400" cy="450" r="10" fill="none" stroke="#00E5FF" strokeWidth="1.5" />
            
            {/* Symmetrical Balancing Vector (Invisible) */}
            <line
              x1="400"
              y1="400"
              x2="400"
              y2="710"
              stroke="transparent"
              strokeWidth="2"
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
