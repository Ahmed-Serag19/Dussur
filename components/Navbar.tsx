"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 navbar`}
    >
      <nav className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.svg" width={32} height={32} alt="Company Logo" />
          <span className="text-2xl font-semibold text-[var(--foreground)]">
            CompanyName
          </span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="#home"
              className="text-[var(--foreground)] hover:underline hover:underline-offset-5 hover:text-[var(--primary)] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-[var(--foreground)] hover:underline hover:underline-offset-5 hover:text-[var(--primary)] transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-[var(--foreground)] hover:underline hover:underline-offset-5 hover:text-[var(--primary)] transition duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="text-[var(--foreground)] hover:underline hover:underline-offset-5 hover:text-[var(--primary)] transition duration-200"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-[var(--foreground)] hover:underline hover:underline-offset-5 hover:text-[var(--primary)] transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
