import type { Metadata } from 'next';
import { LegalPage } from '@/components/section/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | Aayulogic',
  description:
    'How Aayulogic uses cookies and similar technologies on aayulogic.com and related digital properties.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie"
      highlight="Policy"
      subtitle="How we use cookies and similar tracking technologies to operate, secure, and improve our websites."
      lastUpdated="May 2026"
      intro="This Cookie Policy explains how Aayulogic uses cookies and similar technologies on aayulogic.com and related digital properties. It should be read alongside our Privacy Policy."
      sections={[
        {
          heading: 'What cookies are',
          body: [
            'Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, improve user experience, and provide information to site owners. Similar technologies — such as pixels, local storage, and SDKs — perform comparable functions.',
          ],
        },
        {
          heading: 'Types of cookies we use',
          body: [
            'We group cookies into four categories. You can manage non-essential cookies through your browser settings or our cookie banner where it is presented.',
          ],
          list: [
            'Strictly necessary: required for the site to function — load balancing, security, session integrity. These cannot be turned off.',
            'Performance & analytics: help us understand how visitors use our site so we can improve it (for example via Google Analytics or similar).',
            'Functional: remember your preferences such as language or region.',
            'Marketing: where used, help us understand the effectiveness of campaigns. We do not use these for cross-site behavioural advertising without consent where required.',
          ],
        },
        {
          heading: 'Third-party cookies',
          body: [
            'Some cookies are set by trusted third parties — for example analytics vendors, embedded video players, or content delivery networks — when their services are loaded on our pages. Their use of data is governed by their own privacy notices.',
          ],
        },
        {
          heading: 'Managing your preferences',
          body: [
            'Most browsers let you refuse, accept, or delete cookies. Disabling strictly necessary cookies may degrade site functionality. For analytics opt-outs, you can also use vendor-specific tools (for example the Google Analytics opt-out browser add-on).',
          ],
        },
        {
          heading: 'Do Not Track signals',
          body: [
            'We monitor the evolving regulatory landscape on Do Not Track and Global Privacy Control signals. Where binding standards apply, we will honour them.',
          ],
        },
        {
          heading: 'Updates',
          body: [
            'We may update this policy as we add or remove tools. Please check back periodically. The “Effective” date at the top reflects the latest revision.',
          ],
        },
      ]}
      contactEmail="privacy@aayulogic.com"
    />
  );
}
