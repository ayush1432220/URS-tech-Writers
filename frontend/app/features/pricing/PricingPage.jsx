import Pricing from "@/app/features/home/components/PricingSection";
import Logo from "@/app/features/home/components/LogoSliderSection";
import { StatsBar } from "@/app/features/home/components/StatsBar";
import FAQ from "@/app/features/home/components/FAQSection";
import WhyChooseUs from "@/app/features/home/components/WhyChooseUsSection";

export default function PackagesPage() {
  return (
    <>
      {/* <Hero /> */}
      <Pricing />
      <Logo />
      <WhyChooseUs />
      <StatsBar />
      <FAQ />   
    </>
  );
}