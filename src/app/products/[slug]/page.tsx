import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  CheckCircle2,
  Users,
  MessageCircle,
  GraduationCap,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTABand } from '@/components/section/CTABand';
import { PRODUCTS } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  MessageCircle,
  GraduationCap,
};

const FLAGSHIP_SLUGS = new Set(['realhrsoft']);

// Per-product feature blocks — shown for non-flagship products.
const PRODUCT_FEATURES: Record<string, { title: string; description: string }[]> = {
  realchat: [
    {
      title: 'End-to-End Encryption',
      description: 'All messages and files encrypted at rest and in transit.',
    },
    {
      title: 'Threaded Conversations',
      description: 'Slack-style threading keeps team context focused.',
    },
    {
      title: 'Native HR Sync',
      description: 'Groups, channels, and access mirror your RealHRsoft org chart.',
    },
    {
      title: 'Voice & Video Rooms',
      description: 'Persistent rooms for stand-ups, huddles, and 1:1s.',
    },
    {
      title: 'File Vault',
      description: 'Compliance-grade file sharing with retention rules.',
    },
    {
      title: 'Custom Bots & Webhooks',
      description: 'Wire alerts from CI, monitoring, and ticketing into channels.',
    },
  ],
  reallearn: [
    {
      title: 'Structured Learning Paths',
      description: 'Sequenced course tracks for roles, levels, and certifications.',
    },
    {
      title: 'Progress & Skill Mapping',
      description: 'Track competencies against your internal skills matrix.',
    },
    {
      title: 'SCORM & xAPI Support',
      description: 'Bring existing content libraries without rebuilding.',
    },
    {
      title: 'Manager Dashboards',
      description: 'Team-level visibility on adoption and completion.',
    },
    {
      title: 'Mobile-First Delivery',
      description: 'Offline-capable mobile app for field and shift workers.',
    },
    {
      title: 'Quizzes & Assessments',
      description: 'Auto-graded assessments with proctoring options.',
    },
  ],
};

export function generateStaticParams() {
  return PRODUCTS.filter((p) => !FLAGSHIP_SLUGS.has(p.slug)).map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: 'Product not found' };
  return {
    title: `${product.title} | Aayulogic`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (FLAGSHIP_SLUGS.has(slug)) {
    notFound();
  }

  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const Icon = ICON_MAP[product.icon] ?? Users;
  const features = PRODUCT_FEATURES[product.slug] ?? [];

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-brand-blue transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/products" className="hover:text-brand-blue transition-colors">
            Products
          </a>
          <span>/</span>
          <span className="text-brand-navy font-medium">{product.title}</span>
        </div>
      </div>

      {/* Product hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light via-white to-white pt-20 pb-20 sm:pt-24 sm:pb-28">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(0,194,255,0.25) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur border border-brand-blue/15 mb-6">
              <Icon className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                Aayulogic Product
              </span>
            </div>
            <div className="h-14 mb-6">
              <Image
                src={product.logo}
                alt={product.title}
                width={1024}
                height={230}
                priority
                className="h-14 w-auto object-contain object-left"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-brand-navy text-balance">
              {product.tagline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {product.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg shadow-brand-blue/20"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan opacity-95 rounded-xl" />
                <span className="relative">Book a Demo</span>
                <ArrowUpRight className="relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#features"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-white border border-brand-blue/20 text-brand-navy hover:border-brand-blue/40 transition-all"
              >
                See Features
                <ArrowUpRight className="w-4 h-4 text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-brand-blue/8 via-brand-cyan/8 to-transparent border border-brand-blue/15 flex items-center justify-center overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-60"
                style={{
                  background:
                    'radial-gradient(circle, rgba(0,194,255,0.35) 0%, transparent 70%)',
                }}
              />
              <Icon className="relative w-40 h-40 text-brand-blue/30" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      {features.length > 0 && (
        <section id="features" className="relative py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
                Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
                Everything {product.title} ships with.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, idx) => (
                <div
                  key={f.title}
                  className="group p-6 rounded-xl bg-white border border-brand-blue/12 hover:border-brand-cyan/45 hover:-translate-y-1 hover:shadow-[0_20px_45px_-15px_rgba(4,92,179,0.2)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/8 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan transition-all">
                    <span className="text-brand-blue group-hover:text-white text-xs font-bold transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-brand-navy mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why */}
      <section className="relative py-20 sm:py-28 bg-brand-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Why teams choose {product.title}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Production-hardened. Audit-ready. Built by engineers who run it themselves.
            </h2>
          </div>
          <ul className="space-y-4">
            {[
              'SOC 2 Type II controls baked into the platform.',
              '99.9% uptime SLA backed by service credits.',
              'Migration playbook from your current system — usually 4 weeks.',
              'Single-tenant deployment option for regulated industries.',
              'Same engineers ship features and answer escalations.',
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-brand-blue/10">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-navy leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        eyebrow="Try It"
        title={`See ${product.title} in your environment.`}
        body="30-minute scoped walk-through with your data shape. No slides — just the product."
        primaryLabel="Book a Demo"
        secondaryLabel="Talk to Sales"
      />
      <Footer />
    </>
  );
}
