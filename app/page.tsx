import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BlogSection } from "@/components/sections/blog-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { CommunitySection } from "@/components/sections/community-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import blogData from "@/data/blog.json";
import clientsData from "@/data/clients.json";
import footerData from "@/data/footer.json";
import landingData from "@/data/landing.json";
import navigationData from "@/data/navigation.json";
import statsData from "@/data/stats.json";
import testimonialsData from "@/data/testimonials.json";

export default function Home() {
  return (
    <div className="bg-background text-neutral-d-grey mx-auto w-full max-w-[1440px]">
      <Header navigation={navigationData} cta={landingData.headerCta} />
      <main>
        <HeroSection hero={landingData.hero} />
        <div id="services">
          <ClientsSection clients={clientsData} />
          <CommunitySection community={landingData.community} />
          <FeatureSection feature={landingData.featurePrimary} />
        </div>
        <StatsSection stats={statsData} summary={landingData.statsSummary} />
        <div id="products">
          <FeatureSection feature={landingData.featureSecondary} />
        </div>
        <div id="testimonials">
          <TestimonialSection testimonial={testimonialsData} />
        </div>
        <div id="faq">
          <BlogSection blog={blogData} />
        </div>
        <CtaSection cta={landingData.cta} />
      </main>
      <Footer footer={footerData} />
    </div>
  );
}
