import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionHero } from '@/components/section/SectionHero';
import { SectionLanding } from '@/components/section/SectionLanding';
import { CTABand } from '@/components/section/CTABand';
import { INDUSTRIES_NEW } from '@/lib/constants';

const ICON_BY_SLUG: Record<string, string> = {
  bfsi: 'Landmark',
  healthcare: 'HeartPulse',
  pharma: 'Pill',
  'professional-services': 'GraduationCap',
  media: 'Clapperboard',
  retail: 'ShoppingCart',
  technology: 'Cpu',
};

export const metadata = {
  title: 'Industries | Aayulogic',
  description:
    'Aayulogic engineers vertical-specific platforms for BFSI, healthcare, pharma, retail, media, edtech, and SaaS companies.',
};

export default function IndustriesPage() {
  const cards = INDUSTRIES_NEW.map((ind) => ({
    href: `/industries/${ind.slug}`,
    title: ind.title,
    description: ind.description,
    iconName: ICON_BY_SLUG[ind.slug],
  }));

  return (
    <>
      <Header />
      <SectionHero
        eyebrow="Verticals We Serve"
        title="Calibrated for"
        highlight="your industry's constraints."
        subtitle="We don't negotiate around compliance — we engineer for it. Seven verticals, sector-specific delivery teams, and audit-ready architectures."
        primaryCta={{ label: 'Find Your Vertical', href: '#verticals' }}
        secondaryCta={{ label: 'Case Studies', href: '#case-studies' }}
        stats={[
          { label: 'Verticals', value: '7' },
          { label: 'Engagements', value: '200+' },
          { label: 'SLA stability', value: '99.4%' },
          { label: 'Compliance audits passed', value: '40+' },
        ]}
      />
      <div id="verticals">
        <SectionLanding
          eyebrow="Industry Coverage"
          title="Solutions engineered for sector-specific outcomes."
          cards={cards}
        />
      </div>
      <CTABand
        title="Don't see your vertical?"
        body="We've also built systems for logistics, energy, gov-tech, agritech, and insurance. Send us a brief — we'll send back an architecture sketch."
        primaryLabel="Send Brief"
        secondaryLabel="Browse Case Studies"
      />
      <Footer />
    </>
  );
}
