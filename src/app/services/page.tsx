'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Users,
  Cloud,
  ShieldCheck,
  Brain,
  Layers,
  Clock,
  ArrowRight,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { easingCurve } from '@/lib/utils';
import { CTABand } from '@/components/section/CTABand';

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easingCurve.industrial },
    },
  };

  const serviceIcons = {
    'custom-software': Code2,
    'dedicated-teams': Users,
    'devops': Cloud,
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 bg-white overflow-hidden">
        {/* Ambient background glow */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 0%, rgba(0,194,255,0.06) 0%, transparent 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="max-w-4xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-4 block">
              What We Build and Deliver
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-navy tracking-tight leading-[1.05] mb-6">
              Three things we build.{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent block sm:inline">
                One way we start.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              We design and operate software systems for companies that have outgrown standard tools.
              Every partnership starts with architectural planning because building before understanding is the most expensive mistake a team can make.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section — "One Way We Start" */}
      <section className="py-20 sm:py-24 bg-brand-light/30 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/8 px-3 py-1.5 rounded-full inline-block mb-4">
                00 · Kickoff Phase
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-5">
                Technical Planning &amp; Solution Architecture
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Every engagement starts with a technical planning and solution architecture phase —{' '}
                <strong>two weeks, no code written</strong> — because we have learned that starting to build before understanding the problem is one of the most expensive mistakes a team can make.
              </p>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-brand-blue/10 shadow-sm">
                <Clock className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-navy">
                  2 weeks · Before any build
                </span>
              </div>
            </div>

            {/* Right side outputs */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(4,92,179,0.12)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 mb-6">
                  Four Outputs Delivered in Week 2:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'System Design', desc: 'Complete high-level architectural diagram matching your current stack.', icon: Layers },
                    { title: 'Realistic Timeline', desc: 'Milestone-based delivery plan with realistic dependencies mapped.', icon: Clock },
                    { title: 'Defined Scope', desc: 'Granular breakdown of features to prevent scope creep.', icon: FileText },
                    { title: 'Honest Risk List', desc: 'Identification of technical bottlenecks and integration risks upfront.', icon: AlertCircle },
                  ].map((output) => {
                    const Icon = output.icon;
                    return (
                      <div
                        key={output.title}
                        className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-brand-blue/5 flex items-center justify-center mb-3">
                          <Icon className="w-4.5 h-4.5 text-brand-blue" />
                        </div>
                        <h3 className="text-sm font-bold text-brand-navy mb-1.5">
                          {output.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {output.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Three Service Deliveries
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We align our Kathmandu engineering hub with Canadian commercial oversight to deliver scalable software, long-term capacity, and reliable cloud operations.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {SERVICE_CATEGORIES.map((cat, idx) => {
              const Icon = serviceIcons[cat.key as keyof typeof serviceIcons] || Code2;
              return (
                <motion.div
                  key={cat.key}
                  variants={itemVariants}
                  className="group relative flex flex-col justify-between p-8 rounded-2xl border border-slate-200 bg-white hover:border-brand-blue/50 hover:shadow-[0_30px_60px_-15px_rgba(4,92,179,0.15)] transition-all duration-300"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/8 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan transition-colors">
                      <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>

                    <span className="text-xs font-bold text-slate-400 block mb-1">
                      Core Service 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    {/* What's Included list */}
                    <div className="border-t border-slate-100 pt-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                        What's Included:
                      </p>
                      <ul className="space-y-2 mb-6">
                        {cat.whatsIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 flex-shrink-0" />
                            <span className="leading-normal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={`/services/${cat.key}`}
                    className="mt-6 flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-brand-blue/5 border border-slate-100 group-hover:border-brand-blue/35 transition-all text-xs font-bold text-brand-navy group-hover:text-brand-blue"
                  >
                    View Service Detail
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Capabilities Section */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3 block">
              Supporting Our Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Additional Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI-Enabled Solutions',
                desc: 'Intelligent features and automation layers built into enterprise systems where they add measurable value. Not AI for its own sake — AI where it solves a specific operational problem.',
                icon: Brain,
              },
              {
                title: 'Cybersecurity Services',
                desc: 'Penetration testing, security assessments, endpoint protection, and digital forensics. Available as a supporting service for engineering engagements where security requirements are elevated.',
                icon: ShieldCheck,
              },
              {
                title: 'Other Engineering Services',
                desc: 'Additional engineering capabilities available on request. If your requirement is not listed above — start a conversation and we will assess whether we are a fit.',
                icon: Layers,
              },
            ].map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/8 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABand
        title="Ready to talk about your engineering challenge?"
        body="Tell us what you are working on. We will respond within one business day."
      />

      <Footer />
    </>
  );
}
