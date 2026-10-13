import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutGloryCard from '@/components/AboutGloryCard';
import ScopeSection from '@/components/ScopeSection';
import PortfolioSection from '@/components/PortfolioSection';
import QualitySection from '@/components/QualitySection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-obsidian text-stone-sand">
      <Preloader />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutGloryCard />
      <ScopeSection />
      <PortfolioSection />
      <QualitySection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
