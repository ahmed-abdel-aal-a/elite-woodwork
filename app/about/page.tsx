import type { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us & Architectural Legacy | ELITE Wood Engineering',
  description: 'Discover the legacy of ELITE, the premier architectural wood engineering and bespoke millwork contractor in Riyadh delivering sovereign landmarks.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
