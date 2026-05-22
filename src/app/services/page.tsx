import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionHero } from '@/components/section/SectionHero';
import { SectionLanding } from '@/components/section/SectionLanding';
import { CTABand } from '@/components/section/CTABand';
import { SERVICE_CATEGORIES } from '@/lib/constants';

export const metadata = {
  title: 'Services | Aayulogic',
  description:
    'Aayulogic builds production-grade engineering platforms across AI, software, cloud, commerce, and enterprise tech.',
};

export default function ServicesPage() {
  const cards = SERVICE_CATEGORIES.map((cat) => ({
    href: `/services/${cat.key}`,
    title: cat.title,
    description: cat.tagline,
    iconName: cat.iconKey,
    tag: `${cat.items.length} capabilities`,
  }));

  return (
    <>
      <Header />
      <SectionHero
        eyebrow="What We Do"
        title="Engineering platforms that"
        highlight="run mission-critical operations."
        subtitle="From AI agents to multi-cloud platforms — six service lines, one delivery model. Senior engineers embedded with your team, shipping production-grade work from week one."
        primaryCta={{ label: 'Talk to an Engineer', href: '#contact' }}
        secondaryCta={{ label: 'See Capabilities', href: '#capabilities' }}
        stats={[
          { label: 'Service lines', value: '6' },
          { label: 'Daily transactions', value: '15M+' },
          { label: 'SLA uptime', value: '99.4%' },
          { label: 'Global offices', value: '8' },
        ]}
      />
      <div id="capabilities">
        <SectionLanding
          eyebrow="Service Lines"
          title="Six capabilities, one engineering bench."
          cards={cards}
        />
      </div>
      <CTABand
        title="Not sure which service line fits your roadmap?"
        body="Send us your architecture brief — we'll map our bench to your roadmap and reply with a recommended engagement model within one business day."
      />
      <Footer />
    </>
  );
}
