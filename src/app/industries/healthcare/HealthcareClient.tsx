'use client';

import { motion } from 'framer-motion';
import {
  HeartPulse,
  ShieldCheck,
  Activity,
  Stethoscope,
  FileLock2,
  Network,
  Cpu,
  Bluetooth,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { IndustryHero } from '@/components/industry-hero';
import { FAQSection } from '@/components/FAQSection';
import { easingCurve } from '@/lib/utils';

const CHALLENGES = [
  {
    icon: FileLock2,
    title: 'PHI Segregation at Scale',
    body: 'Multi-tenant systems where one mis-routed record can trigger a BAA breach. Audit trails that survive a 6-year retention window.',
  },
  {
    icon: Network,
    title: 'FHIR Interop Across Silos',
    body: 'Epic, Cerner, Allscripts, athenahealth — each with their own dialect. Mapping CCD/CDA to FHIR R4 without losing clinical fidelity.',
  },
  {
    icon: Activity,
    title: 'Real-Time Vitals Pipelines',
    body: 'Continuous monitoring streams from BLE wearables and bedside devices. Edge filtering, MQTT brokers, and clinical-alert SLAs.',
  },
  {
    icon: Stethoscope,
    title: 'Workflow Fit, Not Workflow Disruption',
    body: 'Clinicians have 4 minutes per patient. UX that adds clicks loses adoption — and loses lives that the data could have saved.',
  },
];

const CAPABILITIES = [
  {
    title: 'EHR Integration Layer',
    description:
      'Epic App Orchard, Cerner CODE, SMART on FHIR, HL7v2 bridges. We have shipped certified connectors across all four major systems.',
  },
  {
    title: 'HIPAA-Compliant Cloud',
    description:
      'AWS HealthLake, Azure Health Data Services, GCP Healthcare API. BAA-ready hosting with PHI segregation baked into the IaC.',
  },
  {
    title: 'Patient Portals & Telehealth',
    description:
      'Secure messaging, appointment scheduling, lab access, low-latency video consult with encrypted recordings and consent capture.',
  },
  {
    title: 'Connected Device Platforms',
    description:
      'BLE wearables, Matter-enabled home devices, bedside monitors. Edge gateways, MQTT/CoAP, and clinical-grade pipelines.',
  },
  {
    title: 'Clinical Decision Support',
    description:
      'Rule engines + ML scoring for sepsis prediction, readmission risk, and care-pathway adherence. Explainability ships with every alert.',
  },
  {
    title: 'Imaging & DICOM',
    description:
      'PACS connectors, DICOMweb viewers, AI-assisted radiology workflows. WADO-RS pipelines that scale to 3M studies a year.',
  },
];

const COMPLIANCE = [
  { name: 'HIPAA / HITECH', body: 'BAA, breach notification, audit log retention' },
  { name: 'SOC 2 Type II', body: 'Annual independent audits for security & availability' },
  { name: 'ISO 27001', body: 'Information security management — Aayulogic certified' },
  { name: 'FDA Class II Software', body: 'IEC 62304-aligned SDLC for SaMD products' },
  { name: 'GDPR & PIPEDA', body: 'EU and Canadian patient data residency' },
  { name: 'HL7 FHIR R4', body: 'US Core, IPS, and international profiles' },
];

const CASE_STUDY = {
  client: 'Meridian Health',
  metric: '4 min → 11 sec',
  headline: 'Clinician search time collapsed by 95% with a vetted clinical RAG layer.',
  body: 'We built a clinician-facing RAG system over 11M de-identified patient encounters. The team got healthcare data — not just LLMs. We anchored every response to verified clinical sources, surfaced citations, and integrated directly into Epic via SMART on FHIR.',
  tags: ['Python', 'FHIR R4', 'pgvector', 'SMART', 'Epic'],
  testimonial:
    "The RAG layer they built reduced our clinician search time from 4 minutes to 11 seconds. The team gets healthcare data — not just LLMs.",
  author: 'Dr. Rohan Mehta',
  role: 'Chief Medical Informatics Officer',
};

const STATS = [
  { value: '3M+', label: 'Imaging studies / year' },
  { value: '11M', label: 'De-identified records indexed' },
  { value: 'HIPAA', label: 'Default delivery posture' },
  { value: '14', label: 'Hospital network engagements' },
];

const WHY_US = [
  'CMIO and Clinical Informatics advisors embedded from day one.',
  'SMART on FHIR launch flows shipped, not slideware.',
  'IRB-friendly de-identification pipelines available off the shelf.',
  'Privacy-by-design — PHI is segregated at the schema layer.',
  'Clinical workflows reviewed by practicing physicians before release.',
  'IEC 62304-aligned process for any FDA Class II SaMD work.',
  'Auditor-grade evidence generated automatically from CI.',
  'On-call clinical informaticists for go-live and stabilization.',
];

const healthcareFaqs = [
  {
    q: "Are Aayulogic's healthcare systems HIPAA and PHI compliant?",
    a: "Yes, 100%. We secure Protected Health Information (PHI) with AES-256 encryption in transit and at rest, detailed access-control logs (audit trails), and HIPAA-compliant database topologies on AWS, GCP, and Azure.",
  },
  {
    q: "How do you handle integrations with existing EHR/EMR platforms?",
    a: "We build secure HL7, FHIR R4, and custom API layers using SMART on FHIR launch flows to connect seamlessly with major EHR systems like Epic, Cerner, and athenahealth.",
  },
  {
    q: "Do you align with IEC 62304 standards for Software as a Medical Device (SaMD)?",
    a: "Yes, our software development processes align with IEC 62304 for Class I and Class II medical devices, incorporating rigorous risk analysis, software verification, and automated evidence pipelines.",
  },
  {
    q: "How do you ensure audit trails survive retention requirements?",
    a: "We implement immutable audit logging (using secure cloud logs with object locks or ledger databases) that satisfies HIPAA and FDA 21 CFR Part 11 requirements for the standard 6-year retention window.",
  },
];

// SVG: stylized ECG/heartbeat line — animated draw
function EcgLine() {
  return (
    <svg
      viewBox="0 0 600 120"
      className="w-full h-24 sm:h-28"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="ecgGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
          <stop offset="20%" stopColor="#10B981" stopOpacity="0.9" />
          <stop offset="80%" stopColor="#06B6D4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,60 L80,60 L100,60 L115,30 L130,90 L145,20 L160,90 L175,60 L260,60 L280,60 L295,30 L310,90 L325,20 L340,90 L355,60 L450,60 L470,60 L485,30 L500,90 L515,20 L530,90 L545,60 L600,60"
        fill="none"
        stroke="url(#ecgGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 0.5 }}
      />
    </svg>
  );
}

export function HealthcareClient() {
  return (
    <>
      <Header />

      <IndustryHero
        breadcrumbName="Healthcare & MedDev"
        industry="Healthcare & MedDev"
        icon={HeartPulse}
        title={
          <>
            Built around{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-clip-text text-transparent">
              the four minutes a clinician has.
            </span>
          </>
        }
        subtitle="HIPAA by default. FHIR-native by reflex. We ship clinical systems that auditors approve and clinicians actually use — from patient portals to connected devices to imaging pipelines."
        primary={{ label: 'Scope a Clinical Build', href: '#contact' }}
        secondary={{ label: 'Read the Meridian Case Study', href: '#case-study' }}
        stats={STATS}
      />

      {/* Hero — calm clinical white-teal (LEGACY — HIDDEN, kept for context) */}
      <section className="hidden relative overflow-hidden bg-gradient-to-b from-white via-[#F4FBFB] to-[#E6F7F6] pt-20 pb-24 sm:pt-24 sm:pb-32">
        {/* Soft mesh */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute top-1/3 -left-40 w-[460px] h-[460px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.16) 0%, transparent 70%)' }}
        />
        {/* Soft graph paper texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,118,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,118,110,0.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easingCurve.industrial }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 mb-6 shadow-sm"
            >
              <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                Healthcare & MedDev
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easingCurve.industrial }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance text-brand-navy"
            >
              Built around{' '}
              <span
                className="inline-block"
                style={{
                  backgroundImage: 'linear-gradient(120deg, #047857 0%, #0891B2 50%, #0E7490 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                the four minutes a clinician has.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easingCurve.industrial }}
              className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              HIPAA by default. FHIR-native by reflex. We ship clinical systems
              that auditors approve and clinicians actually use — from patient
              portals to connected devices to imaging pipelines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easingCurve.industrial }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 transition-all"
              >
                <span>Scope a Clinical Build</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#case-study"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-emerald-200 bg-white text-emerald-800 hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
              >
                Read the Meridian Case Study
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Hero visual: vitals monitor mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easingCurve.industrial }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-[0_30px_60px_-25px_rgba(15,118,110,0.25)] p-5 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700">LIVE · ICU Room 7B</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">FHIR R4</span>
              </div>

              {/* ECG */}
              <div className="rounded-lg bg-slate-900 p-3 overflow-hidden">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">HR</span>
                  <span className="text-2xl font-bold text-emerald-400 tabular-nums">72</span>
                </div>
                <EcgLine />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[
                  { label: 'SpO2', value: '98%', color: 'text-cyan-600' },
                  { label: 'BP', value: '118/76', color: 'text-emerald-600' },
                  { label: 'Temp', value: '36.8', color: 'text-teal-600' },
                ].map((s) => (
                  <div key={s.label} className="rounded-md bg-slate-50 p-2 border border-slate-100">
                    <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">{s.label}</div>
                    <div className={`text-sm font-bold tabular-nums ${s.color}`}>{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Alerts */}
              <div className="mt-3 space-y-1.5">
                {[
                  { txt: 'Sepsis risk: low (model v3.2)', tone: 'emerald' },
                  { txt: 'Care pathway adherence: 96%', tone: 'cyan' },
                  { txt: 'PHI access logged · clinician #4423', tone: 'slate' },
                ].map((a) => (
                  <div key={a.txt} className={`flex items-center gap-2 text-[10px] px-2 py-1.5 rounded-md bg-${a.tone}-50 border border-${a.tone}-100`}>
                    <CheckCircle2 className={`w-3 h-3 text-${a.tone}-600`} />
                    <span className="text-slate-700 font-medium">{a.txt}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
          className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-emerald-200/50 pt-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-emerald-400/50 pl-4">
              <div className="text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">{s.value}</div>
              <div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-3">
              What Keeps CMIOs Up At Night
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              The four hard problems we solve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CHALLENGES.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.07, ease: easingCurve.industrial }}
                  className="group flex gap-5 p-7 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-[0_20px_45px_-15px_rgba(16,185,129,0.2)] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all">
                    <Icon className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-emerald-700 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#F4FBFB] to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-3">
              Our Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Six clinical-grade practices, ready to embed.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: easingCurve.industrial }}
                className="group p-6 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div
                  className="text-3xl font-bold mb-3"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #047857 0%, #0891B2 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-emerald-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-3">
              Regulatory Posture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              HIPAA isn&apos;t a milestone — it&apos;s the starting line.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Every engagement starts with a BAA in hand, PHI segregation in
              the IaC, and audit logging wired into the platform layer.
              Compliance is a property of how we build, not a phase we tack on.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                <ShieldCheck className="w-6 h-6 text-emerald-700 mb-2" />
                <div className="text-xs font-bold text-emerald-900">ISO 27001 certified</div>
                <div className="text-[10px] text-emerald-700/70 mt-0.5">Aayulogic SDLC controls</div>
              </div>
              <div className="rounded-xl border border-cyan-100 bg-cyan-50/50 p-4">
                <Cpu className="w-6 h-6 text-cyan-700 mb-2" />
                <div className="text-xs font-bold text-cyan-900">IEC 62304 aligned</div>
                <div className="text-[10px] text-cyan-700/70 mt-0.5">SaMD lifecycle process</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {COMPLIANCE.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50/40 border border-emerald-100"
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-brand-navy">{c.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{c.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case study — clinical deep teal */}
      <section
        id="case-study"
        className="relative py-20 sm:py-28 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #042F2E 0%, #064E3B 60%, #0F766E 100%)' }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.45) 0%, transparent 70%)' }}
        />
        {/* Faint ECG decoration */}
        <div aria-hidden className="absolute inset-x-0 bottom-10 opacity-20">
          <EcgLine />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-3">
                Case Study · {CASE_STUDY.client}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {CASE_STUDY.headline}
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <Sparkles className="w-5 h-5 text-emerald-300" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                    Outcome
                  </div>
                  <div className="text-xl font-bold text-white tabular-nums">{CASE_STUDY.metric}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-emerald-50/85 leading-relaxed">{CASE_STUDY.body}</p>

              <div className="flex flex-wrap gap-2">
                {CASE_STUDY.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-emerald-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <blockquote className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <p className="text-sm sm:text-base text-white leading-relaxed mb-4 italic">
                  &ldquo;{CASE_STUDY.testimonial}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                    RM
                  </div>
                  <div>
                    <div className="text-sm font-bold">{CASE_STUDY.author}</div>
                    <div className="text-xs text-emerald-200/80">
                      {CASE_STUDY.role}, {CASE_STUDY.client}
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-3">
              Why Health Systems Pick Aayulogic
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Clinical-informatics depth without the consultancy markup.
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_US.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50/40 border border-emerald-100"
              >
                <Bluetooth className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-navy leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection items={healthcareFaqs} />

      <CTABand
        eyebrow="Scope a Clinical Engagement"
        title="Send the clinical brief. We'll respond with an architecture sketch."
        body="Health systems can't afford vendor questionnaires. Share your roadmap — we'll send back a compliance-aware architecture and a recommended engagement model within two business days."
        primaryLabel="Send Brief"
        secondaryLabel="Read Case Studies"
      />
      <Footer />
    </>
  );
}
