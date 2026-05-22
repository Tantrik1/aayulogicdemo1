import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionDetailTemplate } from '@/components/section/SectionDetailTemplate';
import { SERVICE_CATEGORIES } from '@/lib/constants';

// /services/ai is a bespoke flagship page — exclude from this dynamic route.
const FLAGSHIP_SLUGS = new Set(['ai']);

export function generateStaticParams() {
  return SERVICE_CATEGORIES.filter((c) => !FLAGSHIP_SLUGS.has(c.key)).map(
    (c) => ({ category: c.key }),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = SERVICE_CATEGORIES.find((c) => c.key === category);
  if (!cat) return { title: 'Service not found' };
  return {
    title: `${cat.title} | Aayulogic Services`,
    description: cat.tagline,
  };
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (FLAGSHIP_SLUGS.has(category)) {
    notFound();
  }

  const cat = SERVICE_CATEGORIES.find((c) => c.key === category);
  if (!cat) notFound();

  return (
    <>
      <Header />
      <SectionDetailTemplate
        eyebrow="Service Line"
        title={cat.title}
        subtitle={cat.tagline}
        parentLabel="Services"
        parentHref="/services"
        iconName={cat.iconKey}
        items={cat.items}
        highlights={[
          { label: 'Capabilities', value: String(cat.items.length) },
          { label: 'SLA uptime', value: '99.4%' },
          { label: 'Avg. ramp-up', value: '7 days' },
          { label: 'Active engagements', value: '40+' },
        ]}
        bullets={[
          'Senior engineers embedded with your existing teams.',
          'Production-grade code from week one — no ramp-up tax.',
          'SOC 2-aligned delivery process, audit-ready by default.',
          'Single-line invoice, single-point accountability.',
          'Flexible engagement models — staff aug, dedicated, or BOT.',
          'Same engineers across the full engagement — no rotation.',
        ]}
      />
      <Footer />
    </>
  );
}
