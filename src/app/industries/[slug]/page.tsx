import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionDetailTemplate } from '@/components/section/SectionDetailTemplate';
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

// Vertical-specific capability cards.
const VERTICAL_CAPABILITIES: Record<
  string,
  { title: string; description: string }[]
> = {
  healthcare: [
    { title: 'EHR Integration', description: 'Epic, Cerner, Allscripts via FHIR R4.' },
    { title: 'HIPAA-Compliant Stacks', description: 'PHI segregation and BAA-ready hosting.' },
    { title: 'Patient Portals', description: 'Secure messaging, scheduling, and lab access.' },
    { title: 'Connected Devices', description: 'Bluetooth Low Energy and Matter wearables.' },
    { title: 'Telehealth Platforms', description: 'Low-latency video with encrypted recordings.' },
    { title: 'Clinical Decision Support', description: 'Real-time alerts and care pathway tools.' },
  ],
  pharma: [
    { title: 'GxP-Validated Systems', description: 'CSV documentation and 21 CFR Part 11 audit trails.' },
    { title: 'Clinical Trial Automation', description: 'eCRF, EDC, and patient recruitment platforms.' },
    { title: 'R&D Data Logging', description: 'ELN systems and assay management.' },
    { title: 'Field Force Tools', description: 'Rep-facing CRM tuned for HCP engagement.' },
    { title: 'Regulatory Submission Tools', description: 'eCTD prep and lifecycle management.' },
    { title: 'Supply Chain Traceability', description: 'Serialization to DSCSA & EU FMD.' },
  ],
  'professional-services': [
    { title: 'Custom Learning Platforms', description: 'White-label LMS for training providers.' },
    { title: 'Moodle Customization', description: 'Theme, plugin, and scale tuning.' },
    { title: 'Adaptive AI Learning', description: 'Personalized paths from skill diagnostics.' },
    { title: 'Cohort & Bootcamp Tools', description: 'Live + async hybrid delivery platforms.' },
    { title: 'Assessment Engines', description: 'Auto-grading with anti-cheat instrumentation.' },
    { title: 'Credential Issuance', description: 'Open Badges and verifiable credentials.' },
  ],
  media: [
    { title: 'Automated Print Composition', description: 'Adobe InDesign Server pipelines at scale.' },
    { title: 'Web-to-Print Platforms', description: 'Self-service print storefronts.' },
    { title: 'Real-Time Streaming', description: 'Low-latency HLS/DASH delivery.' },
    { title: 'DAM & Asset Pipelines', description: 'Computer Vision auto-tagging.' },
    { title: 'Subscription Paywalls', description: 'Metered access and bundling logic.' },
    { title: 'Ad Inventory Routing', description: 'Header bidding integrations.' },
  ],
  retail: [
    { title: 'Headless Storefronts', description: 'Composable commerce on Shopify Hydrogen, Magento, or custom.' },
    { title: 'Omnichannel Inventory', description: 'Real-time sync across web, store, and marketplaces.' },
    { title: 'Order Management', description: 'OMS with split-shipment and partial fulfillment.' },
    { title: 'Loyalty & Rewards', description: 'Programmable tier and points engines.' },
    { title: 'Personalization', description: 'Product recs via embeddings + behavior signals.' },
    { title: 'Marketplace Onboarding', description: 'Seller-facing dashboards and payouts.' },
  ],
  technology: [
    { title: 'Architecture Optimization', description: 'Re-platforming legacy stacks to cloud-native.' },
    { title: 'MVP Acceleration', description: 'Production-grade in 12 weeks, not 12 months.' },
    { title: 'Scale Engineering', description: 'Sharding, queue tuning, and read-replica fanout.' },
    { title: 'Developer Tooling', description: 'Internal platforms, CLIs, and SDKs.' },
    { title: 'API Productization', description: 'Public APIs with metering and SDK generation.' },
    { title: 'FinOps & Cost Tuning', description: 'Cloud bill audits and right-sizing.' },
  ],
};

const FLAGSHIP_SLUGS = new Set(['bfsi']);

export function generateStaticParams() {
  return INDUSTRIES_NEW.filter((i) => !FLAGSHIP_SLUGS.has(i.slug)).map((i) => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = INDUSTRIES_NEW.find((i) => i.slug === slug);
  if (!ind) return { title: 'Industry not found' };
  return {
    title: `${ind.title} | Aayulogic Industries`,
    description: ind.description,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (FLAGSHIP_SLUGS.has(slug)) {
    notFound();
  }

  const ind = INDUSTRIES_NEW.find((i) => i.slug === slug);
  if (!ind) notFound();

  const iconName = ICON_BY_SLUG[ind.slug];
  const items = VERTICAL_CAPABILITIES[ind.slug] ?? [
    {
      title: 'Architecture Review',
      description: 'Independent audit of current platform and modernization path.',
    },
    {
      title: 'Custom Platform Build',
      description: 'Bespoke systems tuned to your vertical compliance constraints.',
    },
    {
      title: 'Migration & Re-Platforming',
      description: 'Zero-downtime moves between stacks, regions, and providers.',
    },
    {
      title: 'Embedded Engineering Teams',
      description: 'Dedicated squads aligned to your release cadence.',
    },
  ];

  return (
    <>
      <Header />
      <SectionDetailTemplate
        eyebrow="Industry Vertical"
        title={ind.title}
        subtitle={ind.description}
        parentLabel="Industries"
        parentHref="/industries"
        iconName={iconName}
        items={items}
        highlights={[
          { label: 'Active engagements', value: '20+' },
          { label: 'Avg. project length', value: '14 mo' },
          { label: 'Compliance audits', value: '40+' },
          { label: 'Reference clients', value: '12+' },
        ]}
        bullets={[
          'Vertical-specialist delivery teams — not generalists.',
          'Pre-built compliance scaffolding for sector-specific regulations.',
          'Sector reference architecture documented and audit-ready.',
          'Direct line to legal and compliance during architecture phase.',
          'Existing customer references on tap for buyer validation.',
        ]}
      />
      <Footer />
    </>
  );
}
