'use client';

import { motion } from 'framer-motion';
import { motionConfig } from '@/lib/utils';
import CA from 'country-flag-icons/react/3x2/CA';
import NP from 'country-flag-icons/react/3x2/NP';
import US from 'country-flag-icons/react/3x2/US';
import AU from 'country-flag-icons/react/3x2/AU';
import AE from 'country-flag-icons/react/3x2/AE';

interface Office {
  id: number;
  country: string;
  city: string;
  flagComponent: React.ComponentType<{ className?: string }>;
  contact?: {
    name: string;
    title: string;
    phone: string;
    email: string;
  };
  badge: {
    icon: string;
    label: string;
    color: 'green' | 'neutral';
  };
}

const offices: Office[] = [
  {
    id: 1,
    country: 'Canada',
    city: 'Toronto, ON',
    flagComponent: CA,
    contact: {
      name: 'Puspa Khadka',
      title: 'CEO',
      phone: '+1 (437) 220-1943',
      email: 'puspa.khadka@aayulogic.com',
    },
    badge: {
      icon: '🏢',
      label: 'Head Office',
      color: 'green',
    },
  },
  {
    id: 2,
    country: 'Nepal',
    city: 'Lalitpur',
    flagComponent: NP,
    contact: {
      name: 'Ratish Raj Guragain',
      title: 'CEO',
      phone: '+977-9802011777',
      email: 'ratish.guragain@aayulogic.com',
    },
    badge: {
      icon: '⚙️',
      label: 'Dev Hub',
      color: 'neutral',
    },
  },
  {
    id: 3,
    country: 'USA',
    city: 'Louisville, KY',
    flagComponent: US,
    contact: {
      name: 'Dipendra Tiwari',
      title: 'CPA, MBA',
      phone: '+1 (502) 618-1677',
      email: 'dtiwari.cpa@gmail.com',
    },
    badge: {
      icon: '🌟',
      label: 'Representative',
      color: 'neutral',
    },
  },
  {
    id: 4,
    country: 'Australia',
    city: 'Brisbane, QLD',
    flagComponent: AU,
    contact: {
      name: 'Santosh Kumar Dhakal',
      title: 'FCA, CPA',
      phone: '+61 (424) 125-042',
      email: 'kr.dhakal@gmail.com',
    },
    badge: {
      icon: '🌟',
      label: 'Representative',
      color: 'neutral',
    },
  },
  {
    id: 5,
    country: 'UAE',
    city: 'Dubai',
    flagComponent: AE,
    badge: {
      icon: '🚀',
      label: 'Coming Soon',
      color: 'neutral',
    },
  },
];

function getBadgeStyles(color: string) {
  const styles = {
    green: 'bg-brand-blue/15 text-brand-blue border border-brand-blue/30',
    neutral: 'bg-white/70 text-slate-700 border border-slate-200/70',
  };
  return styles[color as keyof typeof styles] || styles.neutral;
}

export default function GlobalOffices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: motionConfig.default.ease },
    },
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={motionConfig.default}
        className="relative max-w-3xl mx-auto text-center mb-12 lg:mb-16"
      >
        <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-[0.18em] mb-4">
          Global Presence
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
          Built Across{' '}
          <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
            Four Continents
          </span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
          With teams, partners, and operations spanning four continents, Aayulogic brings together global expertise, diverse perspectives, and engineering excellence to deliver impactful digital solutions at scale.
        </p>
      </motion.div>

      {/* Grid (sm+) / Carousel (mobile) */}
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="flex sm:grid sm:grid-cols-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-2.5 sm:gap-4 lg:gap-5 -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {offices.map((office) => {
            const FlagIcon = office.flagComponent;
            return (
              <motion.div
                key={office.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative shrink-0 w-[82%] sm:w-auto snap-center p-5 sm:p-4 lg:p-6 rounded-2xl border border-white/60 sm:border-slate-200/70 bg-white/80 sm:bg-gradient-to-br sm:from-white/60 sm:to-white/40 backdrop-blur-xl shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)] sm:shadow-none hover:border-brand-blue/50 hover:shadow-[0_18px_36px_-12px_rgba(4,92,179,0.28)] transition-all duration-300 overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Flag */}
                  <div className="mb-4 rounded-md overflow-hidden ring-1 ring-slate-200/80 w-12 h-8 shadow-sm">
                    <FlagIcon className="w-full h-full object-cover" />
                  </div>

                  {/* Country & City */}
                  <h3 className="text-lg sm:text-base lg:text-xl font-bold text-brand-navy mb-1.5 leading-tight group-hover:text-brand-blue transition-colors duration-300">
                    {office.country}
                  </h3>
                  <p className="text-sm sm:text-xs lg:text-base text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    {office.city}
                  </p>

                  {/* Divider */}
                  <div className="w-8 h-px bg-brand-blue/40 mb-4" />

                  {/* Contact Info */}
                  {office.contact ? (
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs font-bold text-brand-navy">{office.contact.name}</p>
                        <p className="text-xs text-slate-500 font-medium mt-1">{office.contact.title}</p>
                      </div>
                      <div className="space-y-1 text-xs">
                        <p className="text-slate-600 font-mono break-all">{office.contact.phone}</p>
                        <p className="text-slate-600 break-all text-[11px]">{office.contact.email}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <p className="text-xs text-slate-500 font-medium italic">Office opening 2026</p>
                    </div>
                  )}

                  {/* Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getBadgeStyles(office.badge.color)}`}>
                    <span>{office.badge.icon}</span>
                    <span>{office.badge.label}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
