"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./theme-toggler";
import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations();
  const dir = locale === "ar" ? "rtl" : "ltr"; // Determine text direction based on locale

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold for transition
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";

    // Strip out the current locale prefix if it's in the URL
    const currentPath = window.location.pathname.replace(/^\/(ar|en)/, "");

    // Redirect to the path with the new locale prefix
    router.push(`/${newLocale}${currentPath}`);
  };
  return (
    <header
      dir={dir}
      className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[var(--primary-blue)] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl  mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          {resolvedTheme === "dark" ? (
            <Image
              src="/images/darkmode-logo.png"
              width={130}
              height={52}
              alt="Company Logo Dark"
            />
          ) : (
            <Image
              src="/images/lightmode-logo-removebg-preview.png"
              width={130}
              height={52}
              alt="Company Logo Light"
            />
          )}
        </Link>
        <ul className="hidden md:flex gap-7">
          <li>
            <Link href="#home" className="nav-link">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href="#about" className="nav-link">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link href="#services" className="nav-link">
              {t("services")}
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link">
              {t("contact")}
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <button
            onClick={toggleLocale}
            className="text-sm font-semibold hover:underline transition"
          >
            {locale === "ar" ? "EN" : "AR"}
          </button>
        </div>
      </nav>
    </header>
  );
}
