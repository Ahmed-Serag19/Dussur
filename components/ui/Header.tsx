import { TypewriterEffectSmooth } from "./typewriter-effect";
import { useLocale, useTranslations } from "next-intl";
export const Header = () => {
  const t = useTranslations();
  const locale = useLocale();

  const words = [
    { text: "Get" },
    { text: "Started" },
    { text: "With" },
    { text: "Dussur.", className: "text-blue-600 dark:text-blue-600" },
  ];

  const arabicWords = [
    { text: "ابدأ" },
    { text: "مشروعك" },
    { text: "مع" },
    { text: "دُسر.", className: "text-blue-600 dark:text-blue-600" },
  ];

  return (
    <div className="max-w-7xl relative mx-auto py-16 md:py-32 px-6 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] leading-tight">
        {t("welcomeMessage")}
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[var(--text-secondary)] mt-4">
        {t("subheading")}
      </h2>
      <p className="max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-6 text-[var(--text-primary)]">
        {t("description")}
      </p>
      {locale === "ar" ? (
        <div className="mt-6 sm:mt-8 py-2 sm:py-3 text-[var(--text-primary)] text-md sm:text-md md:text-lg font-medium rounded-lg ease-in-out">
          <TypewriterEffectSmooth words={arabicWords} />
        </div>
      ) : (
        <div className="mt-6 sm:mt-8 py-2 sm:py-3 text-[var(--text-primary)] text-md sm:text-md md:text-lg font-medium rounded-lg ease-in-out">
          <TypewriterEffectSmooth words={words} />
        </div>
      )}
    </div>
  );
};

export default Header;
