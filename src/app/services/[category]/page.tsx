import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Code2,
  Users,
  Cloud,
  ChevronRight,
  Check,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { CTABand } from '@/components/section/CTABand';

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

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-100 py-3.5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-brand-blue transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <Link href="/services" className="hover:text-brand-blue transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-brand-navy font-bold">{cat.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 bg-white overflow-hidden">
        {/* Soft backdrop radial wash */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 0%, rgba(4,92,179,0.04) 0%, transparent 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/8 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight leading-[1.1] mb-6">
                {cat.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
                {cat.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Breakdown Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {cat.extraParagraphs && cat.extraParagraphs.length > 0 && (
            <div className="max-w-3xl mb-16 space-y-6">
              {cat.extraParagraphs.map((para, idx) => (
                <p key={idx} className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* What's Included Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-blue rounded-full" />
                What's Included
              </h3>
              <ul className="space-y-4">
                {cat.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-blue stroke-[3px]" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-600 leading-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                Ideal For
              </h3>
              <ul className="space-y-4">
                {cat.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-cyan stroke-[3px]" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-600 leading-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Flow / Team Structure / Stack Visualizer */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3 block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              {cat.flowTitle}
            </h2>
          </div>

          {/* Visualizing flowStages as a premium steps timeline */}
          <div className="relative">
            {/* Horizontal line for desktop, hidden on mobile */}
            <div className="hidden lg:block absolute left-4 right-4 top-[38px] h-0.5 bg-slate-200" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 relative z-10">
              {cat.flowStages.map((stage, idx) => (
                <div key={stage.title} className="flex flex-col items-start lg:items-center text-left lg:text-center group">
                  {/* Circle number */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-slate-200 group-hover:border-brand-blue flex items-center justify-center mb-4 transition-colors shadow-sm">
                    <span className="text-sm sm:text-base font-bold text-slate-400 group-hover:text-brand-blue transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-2 leading-snug group-hover:text-brand-blue transition-colors px-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Scoping CTA */}
      <CTABand
        title={`Discuss your ${cat.title} requirements.`}
        body="Tell us what you are building. We will assess the operational parameters and reply within one business day."
      />

      <Footer />
    </>
  );
}
