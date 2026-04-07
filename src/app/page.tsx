import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import ProductPreview from "@/components/ProductPreview";
import PrivacyTrust from "@/components/PrivacyTrust";
import FAQ from "@/components/FAQ";
import FounderNote from "@/components/FounderNote";
import BetaSignup from "@/components/BetaSignup";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <ProductPreview />
        <PrivacyTrust />
        <FAQ />
        <FounderNote />
        <BetaSignup />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
