import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Deraman from "@/public/images/deraman.jpg";
import Darebty from "@/public/images/darebty.jpg";
import DWash from "@/public/images/dwash.jpg";
import Gene from "@/public/images/gene.jpg";
import Tawajad from "@/public/images/tawajad.jpg";
import OurProjects from "@/public/images/projects.jpg";
import ApplyIdea from "@/public/images/apply-idea.jpg";
import DeliverIdea from "@/public/images/deliver-idea.jpg";
import Change from "@/public/images/change.jpg";
import CreateIdea from "@/public/images/create-idea.jpg";
import SaudiVision from "@/public/images/saudi-vision.jpg";
import { GlobeDemo } from "./GlobeComponent";

const products = [
  {
    title: "Our Projects",
    link: "1",
    thumbnail: OurProjects,
  },
  {
    title: "Saudi Vision",
    link: "3",
    thumbnail: SaudiVision,
  },
  {
    title: "Our Projects",
    link: "2",
    thumbnail: OurProjects,
  },
  {
    title: "DWash",
    link: "4",
    thumbnail: DWash,
  },
  {
    title: "Tawajad",
    link: "5",
    thumbnail: Tawajad,
  },
  {
    title: "Gene",
    link: "6",
    thumbnail: Gene,
  },
  {
    title: "Create an idea",
    link: "7",
    thumbnail: CreateIdea,
  },
  {
    title: "Chance for your idea to grow",
    link: "8",
    thumbnail: Change,
  },
  {
    title: "Apply Idea",
    link: "9",
    thumbnail: ApplyIdea,
  },
  {
    title: "Gene",
    link: "10",
    thumbnail: Gene,
  },
  {
    title: "Deraman",
    link: "11",
    thumbnail: Deraman,
  },
  {
    title: "Darebty",
    link: "12",
    thumbnail: Darebty,
  },
  {
    title: "We Deliver it ",
    link: "13",
    thumbnail: DeliverIdea,
  },
  {
    title: "Gene",
    link: "14",
    thumbnail: Gene,
  },
  {
    title: "Deraman",
    link: "15",
    thumbnail: Deraman,
  },
];

const HeroSection = () => {
  return (
    <div className="z-10 mt-20" id="home">
      <GlobeDemo />
      <HeroParallax products={products} />
    </div>
  );
};

export default HeroSection;
