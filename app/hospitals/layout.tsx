import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospital Marketing Services | MarketingLead - Healthcare Digital Marketing',
  description: 'Specialized digital marketing services for hospitals, clinics, and healthcare providers. Increase patient inquiries with our proven healthcare marketing strategies.',
};

export default function HospitalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}