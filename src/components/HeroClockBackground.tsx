'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HeroClockBackground() {
  const [secAngle, setSecAngle] = useState(0);
  const [minAngle, setMinAngle] = useState(0);
  const [hourAngle, setHourAngle] = useState(0);

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

  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none overflow-hidden bg-transparent">
      {/* Large scale-up for screen coverage, positioned centered */}
      <div className="w-[36rem] h-[36rem] sm:w-[54rem] sm:h-[54rem] lg:w-[68rem] lg:h-[68rem] relative flex items-center justify-center opacity-15">
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full text-brand-cyan filter drop-shadow-[0_0_15px_rgba(0,229,255,0.15)]"
          aria-hidden
        >
          <defs>
            {/* Glow filters */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradients */}
            <linearGradient id="hourGrad" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="minGrad" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#0078FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* BACKGROUND TECH GRID */}
          <circle cx="400" cy="400" r="390" fill="none" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="1" />
          <circle cx="400" cy="400" r="300" fill="none" stroke="rgba(0, 229, 255, 0.04)" strokeWidth="1" strokeDasharray="5, 10" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="1" />
          
          {/* Axis Crosshairs */}
          <line x1="400" y1="10" x2="400" y2="790" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="1" strokeDasharray="3, 9" />
          <line x1="10" y1="400" x2="790" y2="400" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="1" strokeDasharray="3, 9" />

          {/* RIPPLE WAVE ON EVERY SECOND TICK */}
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
              initial={{ scale: 0.4, opacity: 0.6 }}
              animate={{ scale: 1.35, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.95, ease: 'easeOut' }}
            />
          </AnimatePresence>

          {/* SLOW ROTATING OUTER DEGREE TRACK (CLOCKWISE) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Dashed outer gear ring */}
            <circle
              cx="400"
              cy="400"
              r="370"
              fill="none"
              stroke="rgba(0, 229, 255, 0.08)"
              strokeWidth="6"
              strokeDasharray="4, 14"
            />
            {/* Tech markers on outer ring */}
            <circle cx="400" cy="30" r="4" fill="#00E5FF" filter="url(#glow)" />
            <circle cx="400" cy="770" r="4" fill="#00E5FF" />
            <circle cx="30" cy="400" r="4" fill="#00E5FF" />
            <circle cx="770" cy="400" r="4" fill="#00E5FF" />
          </motion.g>

          {/* SLOW ROTATING COUNTER-CLOCKWISE INNER RING */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Concentric tick lines */}
            <circle
              cx="400"
              cy="400"
              r="340"
              fill="none"
              stroke="rgba(0, 229, 255, 0.12)"
              strokeWidth="2"
              strokeDasharray="1, 8"
            />
            <circle
              cx="400"
              cy="400"
              r="330"
              fill="none"
              stroke="rgba(0, 229, 255, 0.06)"
              strokeWidth="1"
              strokeDasharray="40, 20"
            />
            {/* Degree nodes */}
            <g transform="translate(400, 400)">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <text
                  key={deg}
                  x="0"
                  y="-345"
                  transform={`rotate(${deg})`}
                  fill="rgba(0, 229, 255, 0.2)"
                  fontSize="9"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {deg}°
                </text>
              ))}
            </g>
          </motion.g>

          {/* INNER SCALE & SOLID TRACK */}
          <circle cx="400" cy="400" r="260" fill="none" stroke="rgba(0, 229, 255, 0.05)" strokeWidth="2" />
          <circle
            cx="400"
            cy="400"
            r="250"
            fill="none"
            stroke="rgba(0, 229, 255, 0.08)"
            strokeWidth="4"
            strokeDasharray="2, 6"
          />

          {/* COMPASS COMPONENT (DECORATIVE ROTATING ELEMENT) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '400px 400px' }}
          >
            <path
              d="M390,280 L400,265 L410,280 L402,280 L402,320 L398,320 L398,280 Z"
              fill="rgba(0, 229, 255, 0.12)"
            />
            <path
              d="M390,520 L400,535 L410,520 L402,520 L402,480 L398,480 L398,520 Z"
              fill="rgba(0, 229, 255, 0.12)"
            />
          </motion.g>

          {/* ========================================== */}
          {/*                 CLOCK HANDS                */}
          {/* ========================================== */}

          {/* HOUR HAND */}
          <motion.g
            animate={{ rotate: hourAngle }}
            transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Glowing hour hand block */}
            <path
              d="M394,400 L396,250 L404,250 L406,400 Z"
              fill="url(#hourGrad)"
              filter="url(#glow)"
            />
          </motion.g>

          {/* MINUTE HAND */}
          <motion.g
            animate={{ rotate: minAngle }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* Detailed tech minute hand */}
            <path
              d="M396,400 L398,170 L402,170 L404,400 Z"
              fill="url(#minGrad)"
              filter="url(#glow)"
            />
            <circle cx="400" cy="185" r="3" fill="#00E5FF" />
          </motion.g>

          {/* SECONDS HAND (Precise physical spring mechanical snap tick) */}
          <motion.g
            animate={{ rotate: secAngle }}
            transition={{ type: 'spring', stiffness: 150, damping: 14 }}
            style={{ transformOrigin: '400px 400px' }}
          >
            <line
              x1="400"
              y1="460"
              x2="400"
              y2="100"
              stroke="#00E5FF"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            {/* Needle indicator ring */}
            <circle
              cx="400"
              cy="140"
              r="12"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <circle cx="400" cy="140" r="3" fill="#00E5FF" />
            
            {/* Counterweight tail circle */}
            <circle cx="400" cy="460" r="6" fill="#00E5FF" />
            <circle cx="400" cy="460" r="10" fill="none" stroke="#00E5FF" strokeWidth="1.5" />
          </motion.g>

          {/* CENTER CAP (AXLE) */}
          <circle cx="400" cy="400" r="15" fill="#0B0D12" stroke="#00E5FF" strokeWidth="3" filter="url(#glow)" />
          <circle cx="400" cy="400" r="6" fill="#00E5FF" />
          <circle cx="400" cy="400" r="2" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
}
