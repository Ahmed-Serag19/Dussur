import dynamic from "next/dynamic";
import { useLocale } from "next-intl";

const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: true, 
});

// Lazy load below-the-fold components
const ProjectsSection = dynamic(() =>
  import("@/components/ProjectsSection").then((mod) => ({
    default: mod.ProjectsSection,
  }))
);
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const ServicesSection = dynamic(() =>
  import("@/components/ServicesSection").then((mod) => ({
    default: mod.ServicesSection,
  }))
);
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default function Home() {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr"; // Determine text direction based on locale
  return (
    <>
      <div className="w-full h-fit overflow-x-hidden" dir={dir}>
        <HeroSection />
        <ProjectsSection />
        <AboutUs />
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
}
