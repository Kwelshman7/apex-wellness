import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import CoreProgramsSection from './components/CoreProgramsSection';
import AboutSection from './components/AboutSection';
import AccreditationsSection from './components/AccreditationsSection';
import ReferralSection from './components/ReferralSection';
import ReferralPartnersSection from './components/ReferralPartnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <CoreProgramsSection />
        <AboutSection />
        <AccreditationsSection />
        <ReferralSection />
        <ReferralPartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
