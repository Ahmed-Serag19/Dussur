import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr"; // Determine text direction based on locale
  return (
    <>
      <div className="w-full h-fit overflow-x-hidden" dir={dir}>
        <HeroSection />
        <AboutUs />
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
}
