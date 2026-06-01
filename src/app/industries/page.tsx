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

import { FAQSection } from '@/components/FAQSection';

const industriesFaqs = [
  {
    q: "Which industries do you have the deepest experience in?",
    a: "We have built extensively for financial services (BFSI), healthcare, pharmaceuticals, retail, media, and technology sectors, serving over 200 client engagements globally."
  },
  {
    q: "How do you handle industry-specific compliance (HIPAA, banking regulations)?",
    a: "Our processes are audited to ISO 27001:2022 standards. We design systems with built-in audit trails, data masking, secure hosting, and compliance protocols matching HIPAA, SOC 2, and banking security guidelines."
  },
  {
    q: "Can you provide dedicated teams for highly regulated sectors?",
    a: "Yes. We staff vertical-specific teams with engineers who understand sector compliance, database standards, and target vertical rules (e.g. clinical trials or banking ledgers)."
  },
  {
    q: "What is your SLA stability across vertical engagements?",
    a: "We maintain a 99.4% SLA stability record across all vertical software systems under our operational care."
  }
];

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

      <FAQSection items={industriesFaqs} />

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
