'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Quote,
  Plus,
  Minus,
  Hammer,
  Activity,
  Repeat,
  Users,
  ScrollText,
  ShieldCheck,
  BookOpenCheck,
  AlertTriangle,
  Scale,
  Landmark,
  KeyRound,
  GitBranch,
  Briefcase,
  TrendingUp,
  Lock,
} from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { easingCurve } from '@/lib/utils';

const PHASES_OVERVIEW = [
  {
    icon: Hammer,
    phase: 'BUILD',
    months: 'Months 0–6',
    headline: 'Stand up the centre.',
    summary: 'Entity formation, office lease, IT infrastructure, recruitment, and onboarding of the founding team.',
  },
  {
    icon: Activity,
    phase: 'OPERATE',
    months: 'Months 6–24',
    headline: 'Run it like our own.',
    summary: 'Aayulogic owns delivery accountability. Centre ships your roadmap under joint governance. Continuous hiring, knowledge codification.',
  },
  {
    icon: Repeat,
    phase: 'TRANSFER',
    months: 'Months 24–36',
    headline: 'Hand over the keys.',
    summary: 'Pre-agreed valuation. Asset transfer, employment continuity, entity restructuring. Centre becomes your wholly-owned subsidiary.',
  },
];

const BUILD_DEEP_DIVE = [
  { week: 'Weeks 1–4', title: 'Legal entity formation', body: 'Local subsidiary incorporated in jurisdictions of choice (Nepal, India, Vietnam, Philippines, or our Toronto/Brisbane bases). Banking, tax registrations, employer ID, social security setup.' },
  { week: 'Weeks 4–8', title: 'Office & infrastructure', body: 'Commercial lease secured, fit-out completed. Network, secure VPN to your environment, MDM, badge access, biometric controls. ISO 27001-aligned from day one.' },
  { week: 'Weeks 6–16', title: 'Founding team recruitment', body: 'Hiring leader recruited first (typically a Head of Engineering Centre). Then EM layer, then senior engineers. We recruit FOR your centre, not from our bench — these are your future employees.' },
  { week: 'Weeks 12–20', title: 'Onboarding & training', body: 'Founding team trained on your stack, product, and engineering principles. Shadow rotations with your in-house team. Custom onboarding curriculum built into the centre\'s training system.' },
  { week: 'Weeks 16–24', title: 'First production deliveries', body: 'Centre starts shipping. Initially scoped, low-risk features under joint architectural oversight. By month 6, centre is contributing to the same roadmap as your in-house team.' },
];

const OPERATE_DEEP_DIVE = [
  { icon: Users, title: 'Delivery accountability', body: 'Aayulogic owns the centre\'s performance against agreed SLAs and OKRs. Monthly business reviews. Quarterly steering with your CTO and our COO.' },
  { icon: TrendingUp, title: 'Continuous expansion', body: 'Centre grows from founding team (15–25 people) to full operating size (typically 40–120). Hiring is forecast 2 quarters ahead based on your roadmap.' },
  { icon: BookOpenCheck, title: 'Knowledge codification', body: 'Every process, runbook, decision is documented in your wiki. We deliberately build institutional memory in writing — so transfer day isn\'t a knowledge cliff.' },
  { icon: Repeat, title: 'Cadence rituals', body: 'Centre runs its own ceremonies in alignment with your time zone overlap. Weekly architecture sync with your in-house leads. Quarterly all-hands joined by your executives.' },
  { icon: ShieldCheck, title: 'Security & compliance posture', body: 'Centre operates under ISO 27001 + SOC 2-aligned controls. Quarterly audits. Pen-tests every 6 months. Compliance evidence delivered to your security team monthly.' },
  { icon: Activity, title: 'Talent retention focus', body: 'Centre attrition target: < 12% annual. Quarterly engagement surveys, career growth frameworks, competitive comp benchmarking. Retention is contractually measured.' },
];

const TRANSFER_DEEP_DIVE = [
  { milestone: 'T-12 months', title: 'Transfer triggered', body: 'You notify Aayulogic of intent to begin transfer at the contractual milestone. Joint transfer committee formed. Valuation framework activated per pre-agreed formula.' },
  { milestone: 'T-9 months', title: 'Due diligence & employment offers', body: 'Your HR and legal team complete due diligence on the centre. Pre-aligned employment offers extended to centre employees. Acceptance window: 60 days.' },
  { milestone: 'T-6 months', title: 'Asset & contract assignment', body: 'Office lease, IT assets, vendor contracts, IP, and operational systems formally assigned to your designated entity. Legal closure of inter-company agreements.' },
  { milestone: 'T-3 months', title: 'Operational handover', body: 'Governance shifts. You take over financial control, vendor management, and HR operations. Aayulogic management transitions to advisory role.' },
  { milestone: 'T-0', title: 'Full transfer complete', body: 'Centre is your wholly-owned subsidiary. All employees on your payroll. Aayulogic exits operational involvement. Optional 6-month advisory contract available.' },
];

const GOVERNANCE = [
  { icon: Briefcase, title: 'Joint Steering Committee', body: 'Quarterly. Your CTO + COO and our CEO + Head of BOT. Reviews KPIs, hiring plan, financial performance, risk register, transfer readiness.' },
  { icon: Activity, title: 'Monthly Business Review', body: 'Your designated executive and our Centre Director. Operational metrics, project status, escalations, hiring pipeline health.' },
  { icon: AlertTriangle, title: 'Escalation Pathways', body: 'Three-tier escalation defined in MSA. L1 issues resolved in 24h, L2 in 72h, L3 in 5 business days with executive involvement.' },
  { icon: ScrollText, title: 'Transparent Reporting', body: 'Real-time dashboard for headcount, financials, project burn-down, risk indicators. You see everything we see — no curated reports.' },
];

const TALENT_STRATEGY = [
  { stage: 'Define the EVP', detail: 'We co-author the employer value proposition for the centre. Career path, growth, compensation philosophy, technical environment. This drives all sourcing.' },
  { stage: 'Local market positioning', detail: 'Centre is positioned as YOUR company in the local market, not Aayulogic. This is critical for senior hires who want long-term career bets — and for transfer-day continuity.' },
  { stage: 'Two-stage interview design', detail: 'Round 1: our Aayulogic technical bar. Round 2: your engineering leadership confirms cultural fit. You sit on every senior hire interview.' },
  { stage: 'Long-horizon hiring', detail: 'We hire people who want a 5+ year career, knowing they will transition to your direct payroll. Recruiter scripts and EVP messaging are calibrated for this.' },
];

const KNOWLEDGE_TRANSFER = [
  { icon: BookOpenCheck, title: 'Architecture decision records', body: 'Every meaningful technical decision documented as an ADR in your repo. Why we chose X, what we considered, what we rejected. ADRs accumulate as institutional memory.' },
  { icon: ScrollText, title: 'Runbooks for everything', body: 'Every recurring operational task — incident response, release management, vendor onboarding — has a runbook. Updated quarterly. Tested by rotating new hires through them.' },
  { icon: GitBranch, title: 'Codebase ownership maps', body: 'Service-by-service ownership map maintained in your repo. Who owns it, who can review, what depends on it. Transfer day is just an ownership reassignment, not a re-discovery.' },
  { icon: Users, title: 'Shadow & reverse-shadow programs', body: 'Quarterly shadow rotations between your in-house team and the centre. By transfer day, your in-house leaders have worked alongside the centre\'s leaders for 24+ months.' },
];

const RISK_FRAMEWORK = [
  { risk: 'Key-person dependency', mitigation: 'No system or process can have a single owner. Bus-factor of every critical role is tested quarterly. Pair-leadership default for the Centre Director role.' },
  { risk: 'IP & data leakage', mitigation: 'IP cleanroom controls, DLP tooling, code-leaving-network monitoring, periodic IP audits. All work product assigned to you on creation.' },
  { risk: 'Talent attrition spike', mitigation: 'Contractually-tracked attrition < 12%. Quarterly engagement surveys. Retention bonuses tied to transfer milestone. Talent pipeline 2 quarters ahead.' },
  { risk: 'Geopolitical or regulatory shift', mitigation: 'Multi-jurisdiction option from day one. Contingency relocation plans. Continuous monitoring of local political and regulatory environment.' },
  { risk: 'Currency & cost volatility', mitigation: 'Forward contracts on long-term currency exposure. Quarterly cost review. Pricing locked in 12-month bands with transparent adjustment triggers.' },
  { risk: 'Cultural drift from parent', mitigation: 'Quarterly exec exchange visits. Annual all-hands joint events. Cultural KPIs (engagement, NPS, values alignment) tracked alongside operational metrics.' },
];

const LEGAL_SETUP = [
  { icon: Landmark, title: 'Entity formation', body: 'Wholly-owned Aayulogic subsidiary in your chosen jurisdiction during build/operate. At transfer, ownership shifts to your designated entity through pre-agreed share purchase or asset purchase.' },
  { icon: Briefcase, title: 'Commercial leases', body: 'Office lease in Aayulogic\'s name during build/operate, with assignment clause baked in for transfer day. Lease term aligned with BOT contract term.' },
  { icon: Lock, title: 'Banking & treasury', body: 'Dedicated operating account, transparent inter-company billing. At transfer, accounts transition to your treasury. Multi-year financial records exported to your accounting system.' },
  { icon: Scale, title: 'Employment law compliance', body: 'Local employment counsel from day one. Employment contracts pre-designed for transfer assignability. Statutory benefits, retirement plans, severance frameworks documented.' },
];

const TRANSFER_MECHANICS = [
  { asset: 'Employees', what: 'Continuous employment via transfer-of-undertakings (TUPE-equivalent in jurisdiction). Tenure, benefits, vesting preserved. No re-hiring drama.' },
  { asset: 'Office lease', what: 'Lease assignment with landlord consent (negotiated upfront in lease terms). Continuous occupancy through transfer day.' },
  { asset: 'IT & infrastructure', what: 'Asset purchase at depreciated book value per pre-agreed formula. Inventory audited 90 days before transfer.' },
  { asset: 'Vendor contracts', what: 'All contracts (SaaS, hardware, services) assigned to your entity. Re-negotiation only where vendor terms require.' },
  { asset: 'IP & code', what: 'Already yours. IP-on-creation under MSA means transfer is a paper change, not a re-assignment. No IP audit at transfer.' },
  { asset: 'Operational systems', what: 'HRIS, payroll, time tracking, ticketing — fully exportable. Migration to your tooling can run pre- or post-transfer at your option.' },
  { asset: 'Documentation', what: 'Runbooks, ADRs, ownership maps, post-mortems all already in your repos and wikis. Nothing to transfer — it\'s been yours all along.' },
];

const VS_TABLE = [
  { factor: 'Time to first production team', bot: '6 months', greenfield: '18–24 months', dedicated: '4 weeks' },
  { factor: 'You own at end', bot: 'Yes — full subsidiary', greenfield: 'Yes', dedicated: 'No' },
  { factor: 'Hiring expertise', bot: 'We provide', greenfield: 'You build', dedicated: 'We retain' },
  { factor: 'Risk during build', bot: 'On Aayulogic', greenfield: 'On you', dedicated: 'N/A' },
  { factor: 'Local market knowledge', bot: 'Provided', greenfield: 'Build from scratch', dedicated: 'Provided' },
  { factor: 'Long-term cost', bot: 'Best for 5+ year horizon', greenfield: 'Best at scale (>200 people)', dedicated: 'Best <50 people' },
  { factor: 'Exit optionality', bot: 'Pre-defined transfer terms', greenfield: 'Full control', dedicated: 'End contract' },
];

const CASE_STUDY = {
  client: 'Berliner Versicherung (German Insurer)',
  scope: '85-person engineering centre in Lalitpur, Nepal',
  challenge: 'Berliner was running offshore engagements with three vendors and seeing inconsistent quality, knowledge fragmentation, and rising costs. They wanted a captive centre but had no playbook for entity setup or hiring in Nepal.',
  approach: 'We executed a 36-month BOT: 6 months build, 24 months operate, 6 months transfer. Built the entity, recruited the founding team of 22, scaled to 85 engineers across platform, mobile, and ML. Joint steering with their CDO and our CEO. Quarterly executive exchanges between Berlin and Lalitpur.',
  outcome: 'Centre transferred on schedule with 96% employee acceptance of the transfer offer. Berliner now owns a self-sufficient engineering subsidiary delivering 40% of their digital roadmap. Total cost ~50% of equivalent European engineering, with no quality gap. Optional 12-month advisory engagement extended for transition support.',
  metric: '96% transfer acceptance',
  duration: '36 months · 85 engineers',
};

const FAQS = [
  {
    q: 'How is BOT different from a Dedicated Team that lasts a long time?',
    a: 'Critical difference: at the end of BOT, you OWN the centre as a wholly-owned subsidiary. Dedicated Teams remain Aayulogic employees regardless of duration. BOT is the right model when you want long-term cost leverage of offshore but also strategic control of a captive operation — and when you\'re prepared to commit to a multi-year transition.',
  },
  {
    q: 'How is BOT different from setting up our own subsidiary from scratch?',
    a: 'You skip the 18–24 month learning curve of entity formation, local recruitment, market positioning, and regulatory compliance in an unfamiliar jurisdiction. By month 6, you have a producing team. By month 24, you have a mature operation. By month 36, it\'s yours. Greenfield is the right answer if you have ample time, local expertise already on staff, and want full control of every decision from day one.',
  },
  {
    q: 'What jurisdictions do you operate BOTs in?',
    a: 'Our primary BOT base is Nepal (Lalitpur), where we have 300+ engineers and a decade of operating maturity. We also operate BOTs in Toronto (Canada), Brisbane (Australia), and have early-stage partnerships for India and Vietnam. Jurisdiction choice is driven by talent availability, cost, time zone overlap with your operations, and regulatory environment.',
  },
  {
    q: 'What\'s the typical centre size?',
    a: 'BOT only makes sense at scale — typically 40+ engineers steady-state. Below that, a Dedicated Team is more economical. Above 120 people, we\'ve seen clients begin to consider multi-site or multi-jurisdiction BOTs to mitigate concentration risk.',
  },
  {
    q: 'What happens to employees at transfer?',
    a: 'Employees receive employment offers from your designated entity with continuous tenure, preserved benefits, and equivalent compensation. Acceptance is voluntary but typically very high (90%+ in our experience). Employees who decline can remain Aayulogic employees and be redeployed; you don\'t inherit anyone who doesn\'t want to be there.',
  },
  {
    q: 'Can we exit mid-BOT if priorities change?',
    a: 'Yes, with structured exit options at the 12-month and 24-month milestones. You either trigger early transfer (with pro-rated transfer terms), convert to a long-term Dedicated Team arrangement, or wind down. We design BOT contracts with reversibility built in — captive offshore strategy can change, and the contract shouldn\'t hold you hostage.',
  },
  {
    q: 'How is the transfer valuation determined?',
    a: 'Pre-agreed in the original MSA using a transparent formula based on: depreciated asset value, employee retention bonuses, transition costs, and a defined services multiple. There is no surprise valuation negotiation at transfer day — the number is largely calculable from day one with the only variables being headcount and asset inventory.',
  },
  {
    q: 'What if attrition spikes during the operate phase?',
    a: 'Attrition < 12% annual is a contractual KPI with financial consequences for Aayulogic if breached. We pre-fund a retention bonus pool tied to the transfer milestone. We provide structured career development, competitive comp, and quarterly engagement surveys. Spike events trigger an immediate joint diagnostic and corrective action plan.',
  },
  {
    q: 'How involved do we need to be during the BUILD phase?',
    a: 'Most active during the first 60 days (jurisdiction selection, EVP definition, founding-leader interview) and during senior hires (you join every interview at director+ level). After that, governance is monthly business reviews and quarterly steering. The model is designed to minimize your operational drag while keeping you in the strategic loop.',
  },
  {
    q: 'Can we use this model for non-engineering functions like data, ops, or finance?',
    a: 'Yes. We\'ve executed BOTs for shared services centres covering finance & accounting, customer success, data operations, and content moderation in addition to engineering. The framework — build, operate, transfer — applies. The talent strategy and tooling differ by function.',
  },
];

export function BOTClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Header />

      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/talent" className="hover:text-brand-blue transition-colors">Talent & Engagement</Link>
          <span>/</span>
          <span className="text-brand-navy font-medium">Build-Operate-Transfer (BOT)</span>
        </div>
      </div>

      {/* ============ 1. HERO — full-width navy with corner card ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1334] via-brand-navy to-[#0a1334] text-white pt-24 pb-32 sm:pt-28 sm:pb-40">
        <div
          aria-hidden
          className="absolute top-0 left-0 w-full h-full opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, rgba(0,194,255,0.25) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(4,92,179,0.2) 0%, transparent 50%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easingCurve.industrial }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur border border-white/20 mb-8"
          >
            <Building2 className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
              Engagement Model 04 · Build-Operate-Transfer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: easingCurve.industrial }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight max-w-5xl text-balance"
          >
            Your offshore centre.{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-clip-text text-transparent">
              Built, run, handed over.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: easingCurve.industrial }}
            className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl"
          >
            We stand up the entity, hire the team, operate the centre to your
            roadmap — then transfer the entire wholly-owned subsidiary to your
            ownership on a pre-agreed timeline. A three-phase, multi-year
            commitment that produces a captive offshore operation without the
            18-month learning tax.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: easingCurve.industrial }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-brand-navy bg-white hover:bg-brand-cyan transition-colors shadow-xl"
            >
              <span>Discuss a BOT</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#phases"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              See the three phases
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Phase tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easingCurve.industrial }}
            className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 pt-10 border-t border-white/10 max-w-3xl"
          >
            {[
              { phase: 'BUILD', range: '0–6 months', icon: Hammer },
              { phase: 'OPERATE', range: '6–24 months', icon: Activity },
              { phase: 'TRANSFER', range: '24–36 months', icon: Repeat },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.phase} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{p.phase}</div>
                    <div className="text-xs text-slate-400">{p.range}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============ 2. THE BRIEF — what BOT actually means ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                The Brief
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
                What BOT actually means.
              </h2>
              <p className="mt-6 text-base text-slate-600 leading-relaxed">
                The term &quot;Build-Operate-Transfer&quot; gets used loosely. Many
                vendors call a multi-year dedicated team a BOT. It isn&apos;t.
                A real BOT ends with you owning a wholly-owned subsidiary —
                entity, employees, office, IP, the whole operation.
              </p>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                The reason this matters is strategic clarity. If you&apos;re
                building captive offshore capability for a 5+ year horizon,
                you need the right contract from day one: pre-agreed transfer
                valuation, employment-transfer mechanics, asset assignment
                framework. Wrong contract structure can make a transfer
                contentious or impossible.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/40">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">When BOT fits</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>Strategic, multi-year offshore commitment (5+ years).</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>Centre size 40+ engineers steady-state.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>You want long-term cost leverage AND captive control.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>You don&apos;t have local market expertise to greenfield it.</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">·</span>Roadmap visibility 12–24 months ahead.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/40">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-700">When BOT doesn&apos;t</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You want offshore delivery but not ownership — use Dedicated Team.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>Short or bounded engagement (&lt; 3 years).</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>Small operation (&lt; 30 people).</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>Roadmap is uncertain or strategy may pivot away from offshore.</li>
                  <li className="flex gap-2"><span className="text-rose-600 font-bold">·</span>You have full internal capability to greenfield a subsidiary.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3. THREE PHASES OVERVIEW ============ */}
      <section id="phases" className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              The Three Phases
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              36 months. Three phases. One outcome.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              Below is the canonical timeline. Variants compress or extend based
              on centre size, jurisdiction complexity, and the maturity of your
              transfer-day capabilities. Every BOT is co-designed with you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {PHASES_OVERVIEW.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.phase}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative p-8 rounded-2xl bg-white border border-brand-blue/10 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 rounded-full bg-gradient-to-br from-brand-blue/5 to-brand-cyan/10 blur-2xl" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Phase 0{idx + 1}</div>
                        <div className="text-xs font-semibold text-brand-blue">{p.months}</div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-brand-navy mb-2">{p.phase}</div>
                    <div className="text-lg font-semibold text-brand-blue mb-3">{p.headline}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{p.summary}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 4. BUILD PHASE DEEP DIVE ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/8 border border-brand-blue/15 mb-4">
                <Hammer className="w-3.5 h-3.5 text-brand-blue" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">Phase 01 · BUILD</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
                Stand up the centre. From zero to producing in 6 months.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base text-slate-600 leading-relaxed">
                The BUILD phase is where most greenfield offshore initiatives
                stall — entity formation, real estate, hiring, infrastructure,
                regulatory compliance all happen in parallel. We&apos;ve done
                this 12+ times across jurisdictions, and the timeline below
                reflects what actually works rather than what looks good on
                a slide.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {BUILD_DEEP_DIVE.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="grid lg:grid-cols-12 gap-5 p-6 rounded-2xl border border-brand-blue/10 bg-gradient-to-r from-brand-light/40 to-white"
              >
                <div className="lg:col-span-2">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-1">Window</div>
                  <div className="text-sm font-bold text-brand-navy">{b.week}</div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-base font-bold text-brand-navy">{b.title}</h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-sm text-slate-600 leading-relaxed">{b.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. OPERATE PHASE DEEP DIVE ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/20 mb-4">
                <Activity className="w-3.5 h-3.5 text-brand-cyan" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">Phase 02 · OPERATE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Run it like our own. Until it&apos;s time it becomes yours.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base text-slate-300 leading-relaxed">
                The OPERATE phase is 18 months of accountable delivery. Aayulogic
                owns performance against agreed SLAs and OKRs. The centre scales
                from founding team to full size, develops domain depth, codifies
                institutional knowledge — and prepares for transfer day from
                month one.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPERATE_DEEP_DIVE.map((o, idx) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                >
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{o.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{o.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 6. TRANSFER PHASE DEEP DIVE ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/8 border border-brand-blue/15 mb-4">
                <Repeat className="w-3.5 h-3.5 text-brand-blue" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">Phase 03 · TRANSFER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
                Hand over the keys. Clean exit, continuous operation.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base text-slate-600 leading-relaxed">
                Transfer is engineered, not negotiated. Every mechanism — entity
                ownership change, employment continuity, asset assignment,
                operational handover — is pre-designed and scheduled across the
                final 12 months. By transfer day, your subsidiary runs itself
                with full institutional knowledge.
              </p>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="hidden lg:block absolute left-32 top-8 bottom-8 w-px bg-gradient-to-b from-brand-blue/20 via-brand-cyan/40 to-brand-blue/20" />

            <div className="space-y-6">
              {TRANSFER_DEEP_DIVE.map((t, idx) => (
                <motion.div
                  key={t.milestone}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="grid lg:grid-cols-12 gap-5 items-start"
                >
                  <div className="lg:col-span-2 flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-blue/20 z-10 relative">
                        <span className="text-white font-bold text-xs">{idx + 1}</span>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">{t.milestone}</div>
                  </div>
                  <div className="lg:col-span-10 p-6 rounded-2xl border border-brand-blue/10 bg-gradient-to-r from-white to-brand-light/30">
                    <h3 className="text-lg font-bold text-brand-navy mb-2">{t.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. GOVERNANCE STRUCTURE ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Governance Structure
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Four governance layers. Clarity at every elevation.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              BOT engagements span years and involve dozens of decisions per
              month. Governance is the operating system that keeps the
              partnership coherent and the centre accountable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {GOVERNANCE.map((g, idx) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-7 rounded-2xl bg-white border border-brand-blue/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">{g.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{g.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 8. TALENT STRATEGY ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                Talent Strategy
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
                We recruit FOR your centre. Not from our bench.
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                This is the single most important architectural decision in a
                BOT. The people in your centre are your future employees, not
                rotating Aayulogic talent. Every recruiting decision, every
                offer, every retention investment is made with transfer day
                in mind.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {TALENT_STRATEGY.map((t, idx) => (
                <motion.div
                  key={t.stage}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="p-5 rounded-xl border border-brand-blue/10 bg-gradient-to-r from-brand-light/30 to-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-brand-navy mb-1.5">{t.stage}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{t.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 9. KNOWLEDGE TRANSFER PLAYBOOK ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Knowledge Transfer Playbook
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Transfer day is a paper change, not a knowledge cliff.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              The risk most BOTs underestimate is the moment of transfer when
              institutional knowledge supposedly &quot;walks across the room&quot;
              to your team. Our model eliminates that moment — every
              significant piece of knowledge is in your repos and wikis from
              the day it&apos;s created.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {KNOWLEDGE_TRANSFER.map((k, idx) => {
              const Icon = k.icon;
              return (
                <motion.div
                  key={k.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-7 rounded-2xl bg-white border border-brand-blue/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">{k.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{k.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 10. RISK FRAMEWORK ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Risk Framework
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Six risk classes. Six engineered mitigations.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              Multi-year captive offshore operations carry risks that
              short-term engagements don&apos;t. Below is our standard risk
              register and the mitigation pattern for each. Risks not
              mitigated are flagged in our quarterly steering report.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-blue/15 overflow-hidden">
            <div className="grid grid-cols-12 bg-brand-navy text-white text-xs font-bold uppercase tracking-[0.18em]">
              <div className="col-span-4 px-5 py-4">Risk</div>
              <div className="col-span-8 px-5 py-4 bg-gradient-to-br from-brand-blue/80 to-brand-cyan/80">Mitigation</div>
            </div>
            {RISK_FRAMEWORK.map((r, idx) => (
              <div
                key={r.risk}
                className={`grid grid-cols-12 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-light/30'}`}
              >
                <div className="col-span-4 px-5 py-5 font-bold text-brand-navy flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                  {r.risk}
                </div>
                <div className="col-span-8 px-5 py-5 text-slate-700 leading-relaxed">{r.mitigation}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 11. LEGAL & COMPLIANCE SETUP ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3">
              Legal, Real Estate & Compliance Setup
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              The infrastructure your subsidiary inherits on transfer day.
            </h2>
            <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-2xl">
              Every contract, lease, banking arrangement, and compliance
              control is engineered to survive transfer day without
              renegotiation. Continuity is the goal — your CFO and General
              Counsel should not feel anything change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {LEGAL_SETUP.map((l, idx) => {
              const Icon = l.icon;
              return (
                <motion.div
                  key={l.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{l.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{l.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 12. TRANSFER MECHANICS ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Transfer Mechanics
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              What transfers, and how it transfers.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              The complete asset inventory for a BOT transfer. Every line item
              has a pre-agreed transfer mechanic in the original MSA — no
              ambiguity at transfer day, no renegotiation, no surprises.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-blue/15 overflow-hidden">
            <div className="grid grid-cols-12 bg-brand-navy text-white text-xs font-bold uppercase tracking-[0.18em]">
              <div className="col-span-3 px-5 py-4">Asset class</div>
              <div className="col-span-9 px-5 py-4 bg-gradient-to-br from-brand-blue/80 to-brand-cyan/80">Transfer mechanic</div>
            </div>
            {TRANSFER_MECHANICS.map((t, idx) => (
              <div
                key={t.asset}
                className={`grid grid-cols-12 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-light/30'}`}
              >
                <div className="col-span-3 px-5 py-5 font-bold text-brand-navy flex items-start gap-2">
                  <KeyRound className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                  {t.asset}
                </div>
                <div className="col-span-9 px-5 py-5 text-slate-700 leading-relaxed">{t.what}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 13. COMPARISON & CASE STUDY (combined) ============ */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              BOT vs. greenfield subsidiary vs. dedicated team.
            </h2>
          </div>

          <div className="rounded-2xl border border-brand-blue/15 overflow-hidden mb-16">
            <div className="grid grid-cols-4 bg-brand-navy text-white text-xs font-bold uppercase tracking-[0.18em]">
              <div className="px-5 py-4">Factor</div>
              <div className="px-5 py-4 bg-gradient-to-br from-brand-blue/80 to-brand-cyan/80 text-white">BOT</div>
              <div className="px-5 py-4 text-slate-300">Greenfield</div>
              <div className="px-5 py-4 text-slate-300">Dedicated Team</div>
            </div>
            {VS_TABLE.map((row, idx) => (
              <div
                key={row.factor}
                className={`grid grid-cols-4 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-light/30'}`}
              >
                <div className="px-5 py-4 font-semibold text-brand-navy">{row.factor}</div>
                <div className="px-5 py-4 text-brand-blue font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  {row.bot}
                </div>
                <div className="px-5 py-4 text-slate-600">{row.greenfield}</div>
                <div className="px-5 py-4 text-slate-600 flex items-center gap-2">
                  {row.dedicated === 'No' || row.dedicated === 'N/A' ? <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0" /> : null}
                  {row.dedicated}
                </div>
              </div>
            ))}
          </div>

          {/* Case Study */}
          <div className="grid lg:grid-cols-12 gap-12 items-start p-8 rounded-2xl bg-white border border-brand-blue/10">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                Case Study
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                {CASE_STUDY.client}
              </h3>
              <div className="mt-3 text-xs text-slate-500 uppercase tracking-widest">Scope</div>
              <p className="mt-1 text-sm text-slate-600">{CASE_STUDY.scope}</p>

              <div className="mt-6 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-blue/5 border border-brand-blue/15">
                <Quote className="w-5 h-5 text-brand-blue" />
                <div>
                  <div className="text-xl font-bold text-brand-blue">{CASE_STUDY.metric}</div>
                  <div className="text-xs text-slate-500">{CASE_STUDY.duration}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-2">Challenge</div>
                <p className="text-base text-slate-700 leading-relaxed">{CASE_STUDY.challenge}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-2">Approach</div>
                <p className="text-base text-slate-700 leading-relaxed">{CASE_STUDY.approach}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-2">Outcome</div>
                <p className="text-base text-slate-700 leading-relaxed">{CASE_STUDY.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 14. FAQ ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Frequently Asked
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Ten questions every BOT buyer asks.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-xl border border-brand-blue/10 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-brand-light/20 transition-colors"
                >
                  <span className="text-base font-bold text-brand-navy pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-brand-blue/5 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact">
        <CTABand
          eyebrow="Discuss a BOT"
          title="A 36-month commitment starts with a 60-minute conversation."
          body="Tell us your strategic horizon, your target jurisdiction, and your roadmap. We'll come back with a phased build plan, governance model, and indicative transfer framework — under NDA."
          primaryLabel="Discuss a BOT"
          secondaryLabel="Talk to Sales"
        />
      </div>
      <Footer />
    </>
  );
}
