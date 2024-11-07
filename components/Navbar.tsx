"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./theme-toggler";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold for transition
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[var(--primary-blue)] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          {resolvedTheme === "dark" ? (
            <Image
              src="/images/darkmode-logo.png"
              width={100}
              height={40}
              alt="Company Logo Dark"
            />
          ) : (
            <Image
              src="/images/lightmode-logo-removebg-preview.png"
              width={100}
              height={40}
              alt="Company Logo Light"
            />
          )}
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="#home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <button
            // onClick={toggleLocale}
            className="text-sm font-semibold hover:underline transition"
          >
            {/* {locale === "ar" ? "EN" : "AR"} */}
          </button>
        </div>
      </nav>
    </header>
  );
}
