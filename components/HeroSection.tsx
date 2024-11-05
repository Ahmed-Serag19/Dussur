import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Image from "next/image";
import Deraman from "@/public/images/deraman.jpg";
import Darebty from "@/public/images/darebty.jpg";
import DWash from "@/public/images/dwash.jpg";
import Gene from "@/public/images/gene.jpg";
import Tawajad from "@/public/images/tawajad.jpg";
import OurProjects from "@/public/images/projects.jpg";

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: OurProjects,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: Darebty,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: Deraman,
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: DWash,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: Tawajad,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: Deraman,
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: Gene,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: Deraman,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: Tawajad,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: Darebty,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: OurProjects,
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: Gene,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: Deraman,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: Darebty,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: Tawajad,
  },
];

const HeroSection = () => {
  return (
    <div className="h-full">
      <HeroParallax products={products} />
    </div>
  );
};

export default HeroSection;
