import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ServicesGrid } from '@/components/services-grid';
import GlobalOffices from '@/components/GlobalOffices';
import { TechStackSection } from '@/components/tech-stack-section';
import { TeamSection } from '@/components/team-section';
import { CaseStudies } from '@/components/case-studies';
import { TestimonialsSection } from '@/components/testimonials-section';
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
      <TeamSection />
      <GlobalOffices />
      <TestimonialsSection />
      <CaseStudies />
      <TechStackSection />
      <ProductsShowcase />
      <BlogSection />
      <HowWeWork />
      <IndustriesWeServe />
      <WhyChooseUs />
      <DigitalTransformCTA />
      <Footer />
    </>
  );
}
