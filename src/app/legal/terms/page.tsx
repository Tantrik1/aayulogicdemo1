import type { Metadata } from 'next';
import { LegalPage } from '@/components/section/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service | Aayulogic',
  description:
    'The terms governing your use of Aayulogic websites, products, and services.',
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of"
      highlight="Service"
      subtitle="The terms that govern your use of Aayulogic websites, products, and professional engagements."
      lastUpdated="May 2026"
      intro="These Terms of Service (“Terms”) govern your access to and use of the websites, products, and services provided by Aayulogic Inc. (Canada) and Aayulogic Systems Pvt. Ltd. (Nepal) (collectively, “Aayulogic”). By accessing or using our services, you agree to be bound by these Terms."
      sections={[
        {
          heading: 'Acceptance of terms',
          body: [
            'By visiting aayulogic.com, opening an account, or engaging our team for services or products, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.',
            'If you are entering these Terms on behalf of an organization, you warrant that you have the authority to bind that organization.',
          ],
        },
        {
          heading: 'Use of our services',
          body: [
            'You agree to use our websites, products, and services only for lawful purposes and in a manner consistent with applicable contracts and statements of work.',
          ],
          list: [
            'Do not reverse-engineer, decompile, or attempt to extract source code from our products except where permitted by law.',
            'Do not use our services to transmit malware, attempt unauthorized access, or interfere with our systems.',
            'Do not resell, sublicense, or use our services beyond the scope of your engagement contract.',
            'Comply with all applicable export controls, sanctions, and data-protection laws.',
          ],
        },
        {
          heading: 'Engagements & statements of work',
          body: [
            'Professional services are governed by a separate Master Services Agreement (MSA) and individual Statements of Work (SOWs), which set out specific deliverables, fees, timelines, and acceptance criteria.',
            'In the event of a conflict between these Terms and an executed MSA or SOW, the executed contract prevails for the matters it covers.',
          ],
        },
        {
          heading: 'Intellectual property',
          body: [
            'Unless explicitly assigned in a written contract, all intellectual property in our websites, brand, products (including RealHRsoft, Real Chat, and Real Learn), documentation, and pre-existing tools remains the property of Aayulogic.',
            'Custom deliverables produced under an SOW are governed by the IP assignment provisions of that SOW.',
          ],
        },
        {
          heading: 'Confidentiality',
          body: [
            'Each party agrees to protect the other’s Confidential Information with the same degree of care it uses to protect its own confidential information of like importance — and in no event less than a reasonable standard of care.',
          ],
        },
        {
          heading: 'Fees & payment',
          body: [
            'Fees, billing cycles, and payment terms are set out in your applicable SOW. Late payments accrue interest at the lower of 1.5% per month or the maximum rate permitted by law. Disputed amounts must be raised in writing within 15 business days of invoice.',
          ],
        },
        {
          heading: 'Warranties & disclaimers',
          body: [
            'We provide our services with reasonable skill and care. To the maximum extent permitted by law, our websites and unsigned products are provided "as is" without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
          ],
        },
        {
          heading: 'Limitation of liability',
          body: [
            'To the maximum extent permitted by law, Aayulogic shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, data, or goodwill.',
            'Our aggregate liability arising from these Terms or any related engagement is capped at the fees paid by you to Aayulogic in the twelve months preceding the claim, unless a higher cap is expressly agreed in writing.',
          ],
        },
        {
          heading: 'Termination',
          body: [
            'Either party may terminate an engagement in accordance with the termination provisions of the applicable MSA or SOW. We reserve the right to suspend or terminate access to our websites and products if you materially breach these Terms.',
          ],
        },
        {
          heading: 'Governing law & jurisdiction',
          body: [
            'These Terms are governed by the laws of the Province of Ontario, Canada — and, where applicable to entities contracting with Aayulogic Systems Pvt. Ltd., the laws of Nepal. Disputes shall be submitted to the exclusive jurisdiction of the courts located in those jurisdictions, subject to overriding mandatory rules.',
          ],
        },
        {
          heading: 'Changes to these terms',
          body: [
            'We may update these Terms from time to time. Continued use of our services after an update constitutes acceptance of the revised Terms.',
          ],
        },
      ]}
      contactEmail="legal@aayulogic.com"
    />
  );
}
