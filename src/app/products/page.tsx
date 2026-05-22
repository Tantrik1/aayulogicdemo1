import { Users, MessageCircle, GraduationCap, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionHero } from '@/components/section/SectionHero';
import { CTABand } from '@/components/section/CTABand';
import { PRODUCTS } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  MessageCircle,
  GraduationCap,
};

export const metadata = {
  title: 'Products | Aayulogic',
  description:
    'RealHRsoft, Real Chat, and Real Learn — Aayulogic\'s SaaS products powering HR, communication, and learning at scale.',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <SectionHero
        eyebrow="Our Products"
        title="Software that runs"
        highlight="real businesses."
        subtitle="Three production-hardened SaaS products serving 500+ enterprises. HR intelligence, secure team comms, and structured learning — built by the same engineers behind your platform."
        primaryCta={{ label: 'Book a Demo', href: '#contact' }}
        secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
        stats={[
          { label: 'Active customers', value: '500+' },
          { label: 'End users', value: '120K+' },
          { label: 'Uptime SLA', value: '99.9%' },
          { label: 'Years in market', value: '8+' },
        ]}
      />

      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-3">
              Product Suite
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Built standalone. Better together.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Each product runs independently — but adopt two and they integrate
              natively, sharing identity, audit trails, and user directory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => {
              const Icon = ICON_MAP[p.icon] ?? Users;
              return (
                <a
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group relative flex flex-col p-8 rounded-2xl overflow-hidden bg-white border border-brand-blue/15 hover:border-brand-cyan/50 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(4,92,179,0.3)] transition-all duration-300"
                >
                  {/* Corner glow */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)',
                    }}
                  />

                  <div className="relative h-12 mb-5 flex items-start">
                    <Image
                      src={p.logo}
                      alt={p.title}
                      width={1024}
                      height={230}
                      className="h-11 w-auto object-contain object-left"
                    />
                  </div>

                  <p className="relative text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-3">
                    {p.tagline}
                  </p>

                  <p className="relative text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {p.description}
                  </p>

                  <div className="relative pt-5 border-t border-slate-100 group-hover:border-brand-blue/20 transition-colors flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:gap-2 transition-all">
                      Explore product →
                    </span>
                    <div className="w-9 h-9 rounded-md bg-brand-blue/8 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan flex items-center justify-center transition-all">
                      <Icon className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Try It"
        title="Want to see them in action?"
        body="Book a 30-minute walk-through tailored to your team size and use case. No slides — just the product."
        primaryLabel="Book a Demo"
        secondaryLabel="Talk to Sales"
      />
      <Footer />
    </>
  );
}
