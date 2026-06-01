import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ServicesGrid } from '@/components/services-grid';
import { TechStackSection } from '@/components/tech-stack-section';
import { BlogSection } from '@/components/blog-section';
import { HowWeWork } from '@/components/how-we-work';
import { ProductsShowcase } from '@/components/products-showcase';
import { IndustriesWeServe } from '@/components/industries-we-serve';
import { WhyChooseUs } from '@/components/why-choose-us';
import { DigitalTransformCTA } from '@/components/digital-transform-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <TechStackSection />
      <ProductsShowcase />
      <IndustriesWeServe />
      <HowWeWork />
      <BlogSection />
      <WhyChooseUs />
      <DigitalTransformCTA />
      <Footer />
    </>
  );
}
