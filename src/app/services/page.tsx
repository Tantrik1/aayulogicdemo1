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
  ArrowRight,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { easingCurve } from '@/lib/utils';
import { CTABand } from '@/components/section/CTABand';
import { FAQSection } from '@/components/FAQSection';

const servicesFaqs = [
  {
    q: "What engagement models do you offer?",
    a: "We offer four core models: Staff Augmentation (senior engineers embedded in your team), Dedicated Teams (a complete pod owned and managed by us), Contract-to-Hire (flexibility to transition), and Build-Operate-Transfer (BOT)."
  },
  {
    q: "What's a typical engagement size and length?",
    a: "Most engagements run 6 to 36 months and involve 3 to 20 engineers. We build deep, long-term partnerships rather than short-term contract work."
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "We primarily partner with mature businesses and enterprises that require robust, operator-grade engineering discipline, but we also work with funded startups when technical complexity is high."
  },
  {
    q: "What's your engineering stack?",
    a: "We use proven production technologies: Node.js, Python, Go, PostgreSQL, Redis, Kubernetes, Terraform, and AWS/Azure/GCP. We choose reliable technology to build systems your business can depend on."
  }
];

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

      <section
        data-theme="dark"
        className="relative w-full min-h-[80svh] flex flex-col items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium"
      >
        <div aria-hidden className="cobalt-grain" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easingCurve.industrial }}
          className="relative max-w-5xl mx-auto w-full text-center flex flex-col items-center gap-7"
        >
          <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-white/85 px-4 py-1.5 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm">
            What We Build & Deliver
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.02] tracking-tight text-balance text-white">
            Three things we build.{' '}
            <span className="bg-gradient-to-r from-white via-brand-cyan to-white bg-clip-text text-transparent">
              One way we start.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl text-white/85">
            We design and operate software systems for companies that have outgrown standard tools.
            Every partnership starts with architectural planning — because building before understanding
            is the most expensive mistake a team can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_15px_40px_-10px_rgba(0,194,255,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(0,194,255,0.7)] transition-all"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full border-2 border-white/40 hover:border-white text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ============ KICKOFF PHASE — white ============ */}
      <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3 block">
                The Architecture Phase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-[1.1] mb-6">
                Two weeks of planning.<br />Zero lines of code.
              </h2>
              <p className="text-sm sm:text-base text-slate-650 leading-relaxed mb-5">
                Every client engagement begins with our Standard Architecture Kickoff. Before we assign a single engineer or write a single file — we dedicate two weeks to system architecture, database schema, risk mapping, and integrations.
              </p>
              <p className="text-sm sm:text-base text-slate-650 leading-relaxed mb-6">
                At the end of these two weeks, you receive a full Technical Blueprint containing database diagrams, API endpoints, structural designs, and an audited timeline. If you choose not to proceed with us, you keep the blueprint. No lock-in, total transparency.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-lg hover:bg-brand-blue transition-colors"
                >
                  Book a Kickoff
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Database Schema & Design',
                  desc: 'Full Entity Relationship Diagrams (ERD), normalization rules, and partitioning structures mapped to your target throughput.',
                },
                {
                  title: 'API Specifications',
                  desc: 'Complete OpenAPI/Swagger specifications detailing endpoints, response payloads, authentication, and error codes.',
                },
                {
                  title: 'Security & Compliance Review',
                  desc: 'Threat modeling and ISO 27001-aligned controls mapped to your industry standards (e.g., healthcare HIPAA or banking SOC 2).',
                },
                {
                  title: 'Deployment & CI/CD Architecture',
                  desc: 'Kubernetes topologies, Terraform infrastructure-as-code layouts, and automated delivery pipeline definitions.',
                },
              ].map((step, idx) => (
                <div
                  key={step.title}
                  className="p-6 rounded-xl border border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_15px_30px_-15px_rgba(4,92,179,0.1)] transition-all"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-brand-blue/8 text-[11px] font-bold text-brand-blue mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-brand-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE SERVICES — cobalt ============ */}
      <section
        id="services"
        data-theme="dark"
        className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium"
      >
        <div aria-hidden className="cobalt-grain" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Engineered with precision.<br />Delivered at scale.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              We align our Kathmandu engineering hub with Canadian commercial oversight to deliver
              scalable software, long-term capacity, and reliable cloud operations.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {SERVICE_CATEGORIES.map((cat, idx) => {
              const Icon = serviceIcons[cat.key as keyof typeof serviceIcons] || Code2;
              return (
                <motion.div
                  key={cat.key}
                  variants={itemVariants}
                  className="group relative flex flex-col justify-between p-7 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-brand-cyan/40 hover:bg-slate-900/60 hover:shadow-[0_30px_60px_-15px_rgba(0,194,255,0.25)] transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-6 shadow-[0_8px_24px_-6px_rgba(0,194,255,0.4)]">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <span className="text-xs font-bold text-brand-cyan/80 block mb-1">
                      Core Service 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-white/75 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="border-t border-white/10 pt-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3">
                        What's Included:
                      </p>
                      <ul className="space-y-2 mb-6">
                        {cat.whatsIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-white/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 flex-shrink-0" />
                            <span className="leading-normal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={`/services/${cat.key}`}
                    className="mt-6 flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-brand-cyan/15 border border-white/10 group-hover:border-brand-cyan/40 transition-all text-xs font-bold text-white"
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

      {/* ============ ADDITIONAL CAPABILITIES — white ============ */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3 block">
              Supporting Our Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-[1.1]">
              Additional Capabilities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Specialist services available as standalone engagements or layered into our core deliveries.
            </p>
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
                  className="p-6 rounded-xl border border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_20px_40px_-20px_rgba(4,92,179,0.18)] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={servicesFaqs} />

      {/* CTA Section */}
      <CTABand
        title="Ready to talk about your engineering challenge?"
        body="Tell us what you are working on. We will respond within one business day."
      />

      <Footer />
    </>
  );
}
