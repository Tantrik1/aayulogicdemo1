import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Code2,
  Users,
  Cloud,
  ChevronRight,
  Check,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { CTABand } from '@/components/section/CTABand';
import { FAQSection } from '@/components/FAQSection';

const CATEGORY_FAQS: Record<string, { q: string; a: string }[]> = {
  'custom-software': [
    {
      q: "What is your development methodology for custom software?",
      a: "We operate on an Agile-Scrum model, working in structured two-week sprints. We deliver working code and a demo at the end of every sprint, keeping you completely aligned with progress."
    },
    {
      q: "How do you handle change requests and scope changes during a build?",
      a: "We prioritize flexibility. If you need to make changes, we log them, estimate the impact on timeline and resources, and align on whether to swap scope within the current phase or schedule it for a subsequent phase."
    },
    {
      q: "Who owns the source code and intellectual property?",
      a: "You do. All custom software, source code, architecture designs, and integrations built for your business are assigned to you 100% upon delivery and final billing."
    },
    {
      q: "What technologies do you specialize in for custom builds?",
      a: "Our core stacks include Node.js, Python, Django, React, Vue.js, Flutter for mobile, and modern databases like PostgreSQL and Redis. We prioritize proven, reliable systems."
    }
  ],
  'dedicated-teams': [
    {
      q: "How quickly can you spin up a dedicated engineering pod?",
      a: "We can typically deploy a pre-vetted, highly skilled dedicated team within 7 to 14 business days, matching your specific tech stack and project domain requirements."
    },
    {
      q: "Who manages the dedicated team day-to-day?",
      a: "The team is fully self-managed by a dedicated Tech Lead or Product Manager under our delivery oversight, reporting directly into your product leadership for sprint alignment."
    },
    {
      q: "Can we review and choose the individual engineers assigned to our pod?",
      a: "Yes. While we curate the team to match your exact technical constraints, you have full visibility and can interview the key senior engineers before kickoff."
    },
    {
      q: "What is the minimum commitment for a dedicated team engagement?",
      a: "We ask for a minimum 6-month commitment for dedicated teams. This ensures we can provide compounding technical knowledge and team stability."
    }
  ],
  'devops': [
    {
      q: "What cloud platforms do your DevOps engineers specialize in?",
      a: "We are deeply experienced across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We also support hybrid and multi-cloud architectures."
    },
    {
      q: "How do you handle high availability, security, and disaster recovery?",
      a: "We build all infrastructure as code (IaC) using Terraform, incorporating automated backups, multi-AZ failovers, continuous health monitoring, and strict ISO 27001 security controls."
    },
    {
      q: "Do you provide continuous 24/7 monitoring and incident response?",
      a: "Yes. For infrastructure under our active operational care, we set up continuous telemetry (DataDog/Prometheus) and standard on-call pager rotations for 24/7 coverage."
    },
    {
      q: "Can you help us migrate our legacy infrastructure to the cloud?",
      a: "Yes. We design step-by-step cloud migration paths that minimize system downtime, optimize data transfer security, and reduce post-migration cloud operating costs."
    }
  ]
};

export function generateStaticParams() {
  return [
    { category: 'custom-software' },
    { category: 'dedicated-teams' },
    { category: 'devops' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = SERVICE_CATEGORIES.find((c) => c.key === category);
  if (!cat) return { title: 'Service Not Found' };
  return {
    title: `${cat.title} | Aayulogic`,
    description: cat.tagline,
  };
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = SERVICE_CATEGORIES.find((c) => c.key === category);
  if (!cat) notFound();

  const serviceIcons = {
    'custom-software': Code2,
    'dedicated-teams': Users,
    'devops': Cloud,
  };

  const Icon = serviceIcons[cat.key as keyof typeof serviceIcons] || Code2;

  return (
    <>
      <Header />

      <section
        data-theme="dark"
        className="relative w-full min-h-[78svh] flex flex-col items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium"
      >
        <div aria-hidden className="cobalt-grain" />
        <div className="relative max-w-5xl mx-auto w-full text-center flex flex-col items-center gap-6 sm:gap-7">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/70 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-bold">{cat.title}</span>
          </nav>

          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(0,194,255,0.5)]">
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight text-balance text-white">
            {cat.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl text-white/85">
            {cat.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_15px_40px_-10px_rgba(0,194,255,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(0,194,255,0.7)] transition-all"
            >
              Discuss This Service
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#approach"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full border-2 border-white/40 hover:border-white text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY IT MATTERS — white ============ */}
      {cat.whyItMatters && (
        <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-4 block">
              {cat.whyItMatters.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-[1.1] mb-8 max-w-4xl">
              {cat.whyItMatters.heading}
            </h2>
            <div className="space-y-6 max-w-3xl">
              {cat.whyItMatters.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        data-theme="dark"
        className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium"
      >
        <div aria-hidden className="cobalt-grain" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3 block">
              The Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              What is included &mdash; and who this is for.
            </h2>
          </div>

          {cat.extraParagraphs && cat.extraParagraphs.length > 0 && (
            <div className="max-w-3xl mb-12 space-y-5">
              {cat.extraParagraphs.map((para, idx) => (
                <p key={idx} className="text-base sm:text-lg text-white/80 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-7 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                What's Included
              </h3>
              <ul className="space-y-4">
                {cat.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-cyan stroke-[3px]" />
                    </div>
                    <span className="text-sm sm:text-base text-white/85 leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-7 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-blue rounded-full" />
                Ideal For
              </h3>
              <ul className="space-y-4">
                {cat.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-blue stroke-[3px]" />
                    </div>
                    <span className="text-sm sm:text-base text-white/85 leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TECHNICAL APPROACH — white ============ */}
      {cat.technicalApproach && (
        <section id="approach" className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3 block">
                {cat.technicalApproach.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-[1.1]">
                {cat.technicalApproach.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {cat.technicalApproach.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="group relative p-7 rounded-2xl border border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_24px_50px_-20px_rgba(4,92,179,0.2)] transition-all"
                >
                  <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-brand-blue/30 group-hover:to-brand-cyan/40 transition-all leading-none mb-4">
                    {String(idx + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-lg font-bold text-brand-navy mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        data-theme="dark"
        className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium"
      >
        <div aria-hidden className="cobalt-grain" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3 block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              {cat.flowTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.flowStages.map((stage, idx) => (
              <div
                key={stage.title}
                className="relative p-7 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-brand-cyan/40 hover:bg-slate-900/55 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white font-black text-sm shadow-[0_8px_24px_-6px_rgba(0,194,255,0.4)]">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-cyan/40 to-transparent" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DELIVERABLES — white ============ */}
      {cat.deliverables && (
        <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3 block">
                {cat.deliverables.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-[1.1] mb-5">
                {cat.deliverables.heading}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {cat.deliverables.blurb}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {cat.deliverables.phases.map((phase, idx) => (
                <div
                  key={phase.phase}
                  className="relative p-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-brand-light/30 hover:border-brand-blue/30 hover:shadow-[0_24px_50px_-20px_rgba(4,92,179,0.2)] transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-2 block">
                    Phase 0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-5 leading-snug">
                    {phase.phase}
                  </h3>
                  <ul className="space-y-2.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ OUTCOMES — video bg ============ */}
      {cat.outcomes && (
        <section
          data-theme="dark"
          className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium"
        >
          <div aria-hidden className="cobalt-grain" />
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3 block">
                {cat.outcomes.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                {cat.outcomes.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {cat.outcomes.items.map((item) => (
                <div
                  key={item.label}
                  className="relative p-7 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-brand-cyan/40 transition-all"
                >
                  <div
                    className="text-4xl sm:text-5xl font-black tracking-tight mb-3"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #045CB3 0%, #2E9BFF 50%, #00C2FF 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.metric}
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ FAQS — white ============ */}
      {cat.faqs && cat.faqs.length > 0 && (
        <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3 block">
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-[1.1]">
                What clients ask before starting.
              </h2>
            </div>

            <div className="space-y-4">
              {cat.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white hover:border-brand-blue/30 transition-colors overflow-hidden"
                >
                  <summary className="cursor-pointer list-none p-6 sm:p-7 flex items-start justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-brand-navy leading-snug">
                      {faq.q}
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue/8 flex items-center justify-center group-open:bg-brand-blue group-open:text-white text-brand-blue transition-colors">
                      <ChevronRight className="w-4 h-4 rotate-90 group-open:rotate-[270deg] transition-transform" />
                    </span>
                  </summary>
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 -mt-2">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        data-theme="dark"
        className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cobalt-premium"
      >
        <div aria-hidden className="cobalt-grain" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan mb-3 block">
              Explore More
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.1]">
              Our other core services.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {SERVICE_CATEGORIES.filter((c) => c.key !== cat.key).map((other) => {
              const OtherIcon = serviceIcons[other.key as keyof typeof serviceIcons] || Code2;
              return (
                <Link
                  key={other.key}
                  href={`/services/${other.key}`}
                  className="group flex items-start gap-5 p-6 sm:p-7 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-brand-cyan/40 hover:bg-slate-900/55 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(0,194,255,0.4)] flex-shrink-0">
                    <OtherIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                      {other.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {other.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan">
                      View Service
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection items={CATEGORY_FAQS[cat.key] || []} />

      {/* ============ CTA — sits on white ============ */}
      <CTABand
        title={`Discuss your ${cat.title} requirements.`}
        body="Tell us what you are building. We will assess the operational parameters and reply within one business day."
      />

      <Footer />
    </>
  );
}
