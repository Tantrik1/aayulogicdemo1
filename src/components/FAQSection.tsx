'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { easingCurve } from '@/lib/utils';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    q: "What does Aayulogic actually do?",
    a: "We are a Canadian-headquartered global technology company. We build and operate production software — including flagship platforms like RealHRsoft and custom AI/cloud engagements for enterprise clients across North America."
  },
  {
    q: "How does Aayulogic ensure project success?",
    a: "Every engagement starts with a two-week technical planning and architecture phase (with zero code written). This ensures that timelines are realistic, system designs are fully mapped, and risks are completely understood before we begin building."
  },
  {
    q: "Where is Aayulogic headquartered?",
    a: "Our global headquarters is Aayulogic Inc. in Toronto, Canada. Our primary engineering hub is Aayulogic Systems Pvt. Ltd. in Lalitpur, Kathmandu, Nepal, which has been operating continuously since 2016."
  },
  {
    q: "Are your processes certified for security and quality?",
    a: "Yes. We hold active, independently audited ISO 9001:2015 (Quality Management Systems) and ISO 27001:2022 (Information Security Management Systems) certifications. These standards govern all our client engagements and delivery pipelines."
  }
];

export function FAQSection({
  items = DEFAULT_FAQS,
  title = "Frequently Asked Questions",
  subtitle = "Quick answers about Aayulogic — what we do, how we work, and how we deliver."
}: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      data-theme="dark"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium text-white"
    >
      <div aria-hidden className="cobalt-grain" />

      {/* Decorative radials */}
      <div
        aria-hidden
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(4,92,179,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-brand-cyan/40 bg-brand-navy/60 backdrop-blur-sm'
                    : 'border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-brand-cyan/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between gap-4 p-6 sm:p-7 text-left cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? 'bg-brand-cyan text-brand-navy rotate-180'
                        : 'bg-white/10 text-white hover:bg-brand-cyan hover:text-brand-navy'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: easingCurve.industrial,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 -mt-2">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
