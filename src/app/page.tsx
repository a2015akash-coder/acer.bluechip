import ConversionBlock from "./components/ConversionBlock";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowDaasWorks from "./components/HowDaasWorks";
import Portfolio from "./components/Portfolio";
import Resources from "./components/Resources";
import StickyHeader from "./components/StickyHeader";
import Testimonials from "./components/Testimonials";
import ValueProps from "./components/ValueProps";
import WhyAcer from "./components/WhyAcer";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />

        <WhyAcer />
        <HowDaasWorks />
        <Portfolio />
        <Resources />
        <ValueProps />
        <Testimonials />

        <FAQSection />

        <ConversionBlock />
      </main>
      {/* <Footer /> */}
    </>
  );
}
