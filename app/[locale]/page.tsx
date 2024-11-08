import HeroSection from "@/components/HeroSection";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr"; // Determine text direction based on locale
  return (
    <>
      <div className="w-full h-fit overflow-x-hidden" dir={dir}>
        <HeroSection />
      </div>
    </>
  );
}
