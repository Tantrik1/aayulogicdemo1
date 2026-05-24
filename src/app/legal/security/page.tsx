import type { Metadata } from 'next';
import { LegalPage } from '@/components/section/LegalPage';

export const metadata: Metadata = {
  title: 'Security | Aayulogic',
  description:
    'Aayulogic security program: ISO 27001-aligned controls, vulnerability disclosure, and incident response.',
};

export default function SecurityPage() {
  return (
    <LegalPage
      eyebrow="Trust"
      title="Security &"
      highlight="Trust"
      subtitle="Our ISO 27001-aligned security program, the controls behind every engagement, and how to disclose vulnerabilities responsibly."
      lastUpdated="May 2026"
      intro="Security is a precondition of every system we ship. Aayulogic operates an ISO 27001-certified Information Security Management System (ISMS) and aligns its engineering, infrastructure, and operational practices with SOC 2 Trust Services Criteria. This page summarizes the controls that protect customer data and our platforms."
      sections={[
        {
          heading: 'Certifications & frameworks',
          body: [
            'Our security program is independently audited and built on widely adopted frameworks.',
          ],
          list: [
            'ISO/IEC 27001:2022 — Information Security Management System.',
            'ISO 9001:2015 — Quality Management System.',
            'SOC 2 Trust Services Criteria alignment for security, availability, confidentiality.',
            'GDPR and PIPEDA alignment for personal data processing.',
          ],
        },
        {
          heading: 'Infrastructure security',
          body: [
            'Production workloads run on hardened AWS, Azure, and GCP environments operated by Aayulogic. We treat infrastructure as code and apply defense in depth.',
          ],
          list: [
            'Network segmentation with private subnets, WAFs, and least-privilege security groups.',
            'TLS 1.2+ in transit and AES-256 encryption at rest for customer data.',
            'Centralized secrets management — secrets never live in code or logs.',
            'Automated patching cadence and continuous configuration scanning.',
          ],
        },
        {
          heading: 'Application security',
          body: [
            'Security is embedded in our SDLC — designed in, not bolted on.',
          ],
          list: [
            'Mandatory code review on every change, including security-sensitive checklists.',
            'Static application security testing (SAST) and dependency scanning on every PR.',
            'Threat modelling for new services and material changes.',
            'Annual third-party penetration testing for flagship products.',
          ],
        },
        {
          heading: 'Identity & access',
          body: [
            'Access to production systems is gated on the principle of least privilege.',
          ],
          list: [
            'Single sign-on (SSO) with multi-factor authentication enforced for all employees.',
            'Just-in-time elevated access with full audit trails.',
            'Quarterly access reviews and immediate revocation on role changes.',
            'Hardware-backed credentials for high-risk operations.',
          ],
        },
        {
          heading: 'Monitoring & incident response',
          body: [
            'We instrument every system we operate. Structured logs, metrics, and traces feed into a 24x7 monitoring stack with on-call rotations.',
            'Our incident response playbooks define severity, escalation, communication, and post-incident review obligations. Customers affected by material incidents are notified in accordance with contractual and regulatory commitments.',
          ],
        },
        {
          heading: 'Business continuity & resilience',
          body: [
            'Mission-critical services run with multi-zone redundancy. We maintain documented backup, restore, and disaster-recovery procedures with regular tests of recovery time and recovery point objectives.',
          ],
        },
        {
          heading: 'Personnel security',
          body: [
            'All Aayulogic engineers undergo background checks proportionate to their role, complete annual security awareness training, and sign confidentiality agreements at onboarding.',
          ],
        },
        {
          heading: 'Responsible disclosure',
          body: [
            'We welcome reports from independent researchers. If you believe you have found a security vulnerability in any Aayulogic system, please email us at security@aayulogic.com with technical detail and reproduction steps.',
            'Please do not perform testing that could disrupt production systems, expose customer data, or violate privacy. We will acknowledge your report within two business days and work in good faith to triage and remediate.',
          ],
        },
        {
          heading: 'Contact',
          body: [
            'For security questionnaires, audit support, customer due diligence, or to report a vulnerability, contact our security team directly. We typically respond within one business day.',
          ],
        },
      ]}
      contactEmail="security@aayulogic.com"
    />
  );
}
