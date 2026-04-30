"use client";
import HeroSection from "@/app/features/home/components/HeroSection";
import FeaturesSection from "@/app/features/home/components/FeaturesSection";
import ServicesSection from "@/app/features/home/components/ServicesSection";
import WhyChooseUsSection from "@/app/features/home/components/WhyChooseUsSection";
import { StatsBar } from "@/app/features/home/components/StatsBar";
import PricingSection from "@/app/features/home/components/PricingSection";
import LogoSliderSection from "@/app/features/home/components/LogoSliderSection";
import HelpSection from "@/app/features/home/components/HelpSection";
import FAQSection from "@/app/features/home/components/FAQSection.jsx";
import AboutSection from "./components/AboutSection";

export function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsBar />
      <PricingSection />
      <LogoSliderSection />
      <HelpSection />
      <FAQSection />
    </main>
  );
}
